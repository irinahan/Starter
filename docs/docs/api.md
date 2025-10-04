# API Overview

Спецификация находится в [`/api/openapi.yaml`](../api/openapi.yaml).

Основные эндпоинты:
- `GET /v1/health` — проверка доступности
- `GET /v1/accounts/{address}` — мок-данные аккаунта (требует `Authorization: Bearer <API_KEY>`)
- `POST /v1/echo` — отдает обратно присланный JSON

Используй Postman-коллекцию: [`/api/legion.postman_collection.json`](../api/legion.postman_collection.json).
update
