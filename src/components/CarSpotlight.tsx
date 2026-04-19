import { useEffect, useState, type CSSProperties } from "react";
import carPreviewImage from "../assets/car-preview.png";
import bodyMain from "../assets/surfaces/body_main.png";
import frontBumper from "../assets/surfaces/front_bumper.png";
import frontWheel from "../assets/surfaces/front_wheel.png";
import glass from "../assets/surfaces/glass.png";
import mirror from "../assets/surfaces/mirror.png";
import rearBumper from "../assets/surfaces/rear_bumper.png";
import rearWheel from "../assets/surfaces/rear_wheel.png";
import roofUpperShell from "../assets/surfaces/roof_upper_shell.png";
import sideSkirt from "../assets/surfaces/side_skirt.png";

const surfaces = [
  { id: "body-main", title: "Основной кузов", url: bodyMain },
  { id: "front-bumper", title: "Передний бампер", url: frontBumper },
  { id: "front-wheel", title: "Переднее колесо", url: frontWheel },
  { id: "glass", title: "Стекло", url: glass },
  { id: "mirror", title: "Зеркало", url: mirror },
  { id: "rear-bumper", title: "Задний бампер", url: rearBumper },
  { id: "rear-wheel", title: "Заднее колесо", url: rearWheel },
  { id: "roof-shell", title: "Крыша", url: roofUpperShell },
  { id: "side-skirt", title: "Порог", url: sideSkirt }
];

export default function CarSpotlight() {
  const [activeSurfaceIndex, setActiveSurfaceIndex] = useState(0);
  const [surfaceVisible, setSurfaceVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(true);

  const activeSurface = surfaces[activeSurfaceIndex] || null;

  useEffect(() => {
    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        setIsAnimating(true);
      } else {
        setIsAnimating(false);
      }
    };

    handleVisibility();
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, []);

  useEffect(() => {
    const fadeDuration = 3200;
    const holdDuration = 2200;

    const cycleId = window.setInterval(() => {
      setSurfaceVisible(false);

      window.setTimeout(() => {
        setActiveSurfaceIndex((current) => (current + 1) % surfaces.length);
        setSurfaceVisible(true);
      }, fadeDuration);
    }, fadeDuration + holdDuration);

    return () => window.clearInterval(cycleId);
  }, []);

  return (
    <div className="car-spotlight-shell" aria-label="Анимация подсветки деталей автомобиля">
      <div className="car-spotlight-copy">
        <span className="chip-label">Выбранная зона</span>
        <strong className="chip-value">{activeSurface?.title || "Зона"}</strong>
        <span className="chip-subvalue">на фото клиента</span>
      </div>

      <div className={`car-spotlight-host${isAnimating ? "" : " is-paused"}`}>
        <div className="car-spotlight-aura car-spotlight-aura-left"></div>
        <div className="car-spotlight-aura car-spotlight-aura-right"></div>

        <div className="car-spotlight-stage">
          <img
            alt="Контур автомобиля для визуализации"
            className="car-spotlight-preview-image"
            src={carPreviewImage.src}
          />

          {surfaces.map((surface, index) => (
            <span
              aria-hidden="true"
              className={`car-spotlight-surface-layer${
                index === activeSurfaceIndex ? " is-active" : ""
              }${index === activeSurfaceIndex && !surfaceVisible ? " is-fading" : ""}`}
              key={surface.id}
            >
              <img alt="" className="car-spotlight-surface-core" src={surface.url.src} />
              <img alt="" className="car-spotlight-surface-outline" src={surface.url.src} />
              <span
                className="car-spotlight-surface-fill"
                style={{ "--surface-url": `url(${surface.url.src})` } as CSSProperties}
              />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
