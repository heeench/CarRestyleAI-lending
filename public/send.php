<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['ok' => false, 'error' => 'Method not allowed'], JSON_UNESCAPED_UNICODE);
    exit;
}

$rawBody = file_get_contents('php://input');
$data = json_decode($rawBody ?: '', true);

if (!is_array($data)) {
    $data = $_POST;
}

function field(array $data, string $key, int $limit = 1000): string
{
    $value = isset($data[$key]) ? (string) $data[$key] : '';
    $value = str_replace(["\r", "\0"], '', $value);
    $value = trim($value);

    if (function_exists('mb_substr')) {
        return mb_substr($value, 0, $limit, 'UTF-8');
    }

    return substr($value, 0, $limit);
}

$name = field($data, 'Имя', 160);
$studio = field($data, 'Студия', 220);
$contact = field($data, 'Контакт', 220);
$scenario = field($data, 'Сценарий', 1800);
$consent = field($data, 'Согласие', 80);

if ($name === '' || $contact === '' || $consent !== 'Принято') {
    http_response_code(400);
    echo json_encode(['ok' => false, 'error' => 'Required fields are missing'], JSON_UNESCAPED_UNICODE);
    exit;
}

$to = 'carrestyleai@mail.ru';
$subject = 'Новая заявка CarRestyle AI';
$submittedAt = date('d.m.Y H:i');

$message = implode("\n", [
    'Новая заявка с лендинга CarRestyle AI',
    '',
    'Дата: ' . $submittedAt . ' МСК',
    'Имя: ' . $name,
    'Студия: ' . ($studio !== '' ? $studio : 'не указана'),
    'Контакт: ' . $contact,
    'Сценарий: ' . ($scenario !== '' ? $scenario : 'не указан'),
    'Согласие: ' . $consent,
    '',
    'Источник: carrestyleai.ru',
]);

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    'From: CarRestyle AI <no-reply@carrestyleai.ru>',
    'Reply-To: CarRestyle AI <carrestyleai@mail.ru>',
];

$sent = mail($to, $encodedSubject, $message, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Mail delivery failed'], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(['ok' => true], JSON_UNESCAPED_UNICODE);
