# Re-encode / numerically compare the configurator's environment map. Runs inside Blender:
#   Blender --background --factory-startup --python exr_tool.py -- convert SRC DST WIDTH HEIGHT CODEC
#   Blender --background --factory-startup --python exr_tool.py -- compare ORIGINAL CANDIDATE
import sys

import bpy
import numpy as np


def pixels(path):
    image = bpy.data.images.load(path)
    # Must be set before any pixel is read or written: changing it later resets the buffer.
    image.colorspace_settings.name = 'Non-Color'
    width, height = image.size
    data = np.empty(width * height * image.channels, dtype=np.float32)
    image.pixels.foreach_get(data)
    return image, data.reshape(height, width, image.channels)[..., :3]


def shrink(data, width, height):
    h, w = data.shape[:2]
    if (w, h) == (width, height):
        return data
    fy, fx = h // height, w // width
    return data.reshape(height, fy, width, fx, 3).mean(axis=(1, 3)).astype(np.float32)


def convert(src, dst, width, height, codec):
    image, data = pixels(src)
    print(f"source {image.size[0]}x{image.size[1]} range {data.min():.4f}..{data.max():.4f}")
    data = shrink(data, width, height)
    out = bpy.data.images.new("environment", width, height, alpha=True, float_buffer=True)
    out.colorspace_settings.name = 'Non-Color'
    rgba = np.concatenate([data, np.ones((height, width, 1), dtype=np.float32)], axis=2)
    out.pixels.foreach_set(rgba.ravel())
    out.update()
    scene = bpy.context.scene
    settings = scene.render.image_settings
    settings.file_format = 'OPEN_EXR'
    settings.color_depth = '16'
    settings.exr_codec = codec
    settings.color_mode = 'RGB'
    scene.view_settings.view_transform = 'Raw'
    scene.view_settings.look = 'None'
    scene.view_settings.exposure = 0.0
    scene.view_settings.gamma = 1.0
    out.save_render(filepath=dst, scene=scene)
    print(f"wrote {dst} {width}x{height} half {codec}")


def compare(original, candidate):
    _, a = pixels(original)
    _, b = pixels(candidate)
    print(f"compare original {a.shape[1]}x{a.shape[0]} vs candidate {b.shape[1]}x{b.shape[0]}")
    a = shrink(a, b.shape[1], b.shape[0])
    error = np.abs(a - b)
    peak = float(np.abs(a).max())
    weights = np.array([0.2126, 0.7152, 0.0722], dtype=np.float32)
    la, lb = a @ weights, b @ weights
    rmse = float(np.sqrt(((la - lb) ** 2).mean()))
    print(f"value range 0..{peak:.4f}")
    print(f"max abs error {error.max():.5f} = {error.max() / peak * 100:.3f}% of range; mean abs error {error.mean():.6f}")
    print(f"luminance RMSE {rmse:.5f} = {rmse / peak * 100:.3f}% of range")


argv = sys.argv[sys.argv.index("--") + 1:]
if argv[0] == "convert":
    convert(argv[1], argv[2], int(argv[3]), int(argv[4]), argv[5])
elif argv[0] == "compare":
    compare(argv[1], argv[2])
