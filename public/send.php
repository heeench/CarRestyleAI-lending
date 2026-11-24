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

$utmFields = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'landing_path', 'referrer'];
$attribution = [];
foreach ($utmFields as $utmField) {
    $value = field($data, $utmField, 1000);
    if ($value !== '') {
        $attribution[$utmField] = $value;
    }
}

$messageLines = [
    'Новая заявка с лендинга CarRestyle AI',
    '',
    'Дата: ' . $submittedAt . ' МСК',
    'Имя: ' . $name,
    'Студия: ' . ($studio !== '' ? $studio : 'не указана'),
    'Контакт: ' . $contact,
    'Сценарий: ' . ($scenario !== '' ? $scenario : 'не указан'),
    'Согласие: ' . $consent,
];

foreach ($attribution as $key => $value) {
    $messageLines[] = $key . ': ' . $value;
}

$messageLines[] = '';
$messageLines[] = 'Источник: carrestyleai.ru';
$message = implode("\n", $messageLines);

$encodedSubject = '=?UTF-8?B?' . base64_encode($subject) . '?=';
$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'Content-Transfer-Encoding: 8bit',
    // The server sends through SMTP as this mailbox; Mail.ru refuses any other sender.
    'From: CarRestyle AI <carrestyleai@mail.ru>',
    'Reply-To: CarRestyle AI <carrestyleai@mail.ru>',
];

$leadPayload = array_merge([
    'name' => $name,
    'studio' => $studio,
    'contact' => $contact,
    'scenario' => $scenario,
    'consent' => 'true',
    'source' => 'landing',
], $attribution);

$apiSaved = false;
$apiError = null;
$apiUrl = getenv('CARRESTYLE_API_LEADS_URL') ?: 'https://api.carrestyleai.ru/landing/leads';
$apiBody = json_encode($leadPayload, JSON_UNESCAPED_UNICODE);

if (function_exists('curl_init')) {
    $ch = curl_init($apiUrl);
    curl_setopt_array($ch, [
        CURLOPT_POST => true,
        CURLOPT_HTTPHEADER => ['Content-Type: application/json'],
        CURLOPT_POSTFIELDS => $apiBody,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 8,
    ]);
    $apiResponse = curl_exec($ch);
    $apiStatus = (int) curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $curlError = curl_error($ch);
    curl_close($ch);
    $apiSaved = $apiStatus >= 200 && $apiStatus < 300;
    $apiError = $apiSaved ? null : ($curlError ?: ('API HTTP ' . $apiStatus . ': ' . (string) $apiResponse));
} else {
    $context = stream_context_create([
        'http' => [
            'method' => 'POST',
            'header' => "Content-Type: application/json\r\n",
            'content' => $apiBody,
            'timeout' => 8,
        ],
    ]);
    $apiResponse = @file_get_contents($apiUrl, false, $context);
    $apiSaved = $apiResponse !== false;
    $apiError = $apiSaved ? null : 'API request failed';
}

$sent = mail($to, $encodedSubject, $message, implode("\r\n", $headers));

if (!$apiSaved && !$sent) {
    http_response_code(500);
    echo json_encode(['ok' => false, 'error' => 'Lead save and mail delivery failed', 'api_error' => $apiError], JSON_UNESCAPED_UNICODE);
    exit;
}

echo json_encode(['ok' => true, 'lead_saved' => $apiSaved, 'mail_sent' => $sent], JSON_UNESCAPED_UNICODE);
