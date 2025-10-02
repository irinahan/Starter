# legion.cc — Dev Experience Starter

Готовый каркас для быстрой публикации на GitHub. Внутри:
- **Mock API сервер** (Node/Express) + Docker Compose
- **OpenAPI спецификация** + Postman коллекция
- **Документация** на MkDocs
- **SDK**: JS/TS и Python (минимальные клиенты)
- **CLI** (Node, commander)
- **Примеры** интеграции
- **CI (GitHub Actions)**

## 🚀 Быстрый старт (локально)
1) Установи Node 20+ и Python 3.10+
2) Запусти мок-сервер:
```bash
cd server
npm ci
npm run dev
# сервер поднимется на http://localhost:3000
```
3) Пробный запрос:
```bash
curl http://localhost:3000/v1/health
```

## 🧪 Sandbox ключ
Для запросов можно использовать переменную окружения:
```bash
export LEGION_API_URL=http://localhost:3000
export LEGION_API_KEY=demo-key
```

## 📦 JS SDK
```bash
cd sdk/js
npm ci
npm run build
node examples/quickstart.mjs
```

## 🐍 Python SDK
```bash
cd sdk/python
pip install -e .
python examples/quickstart.py
```

## 🖥️ CLI
```bash
cd cli
npm ci
LEGION_API_URL=http://localhost:3000 LEGION_API_KEY=demo-key node bin/legion.js status
```

## 📚 Документация
```bash
cd docs
pip install -r requirements.txt
mkdocs serve
# открой http://127.0.0.1:8000
```

## 🐳 Docker (опционально)
```bash
docker compose -f docker/docker-compose.yml up --build
# сервер по адресу http://localhost:3000
```

## 🏗 Структура
```
/api          # OpenAPI + Postman
/cli          # командная утилита
/docs         # MkDocs документация
/docker       # docker-compose для сервера
/examples     # мини-примеры
/sdk          # JS и Python клиенты
/server       # mock API сервер (Express)
/scripts      # скрипты разработчика
.github/workflows # CI
```

## ✅ Лицензия
MIT
