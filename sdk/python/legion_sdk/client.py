import os, requests

class Legion:
    def __init__(self, base_url=None, api_key=None):
        self.base_url = base_url or os.getenv('LEGION_API_URL', 'http://localhost:3000')
        self.api_key = api_key or os.getenv('LEGION_API_KEY', 'demo-key')

    def _req(self, method, path, json=None):
        url = f"{self.base_url}{path}"
        headers = {}
        if path != '/v1/health' and self.api_key:
            headers['Authorization'] = f'Bearer {self.api_key}'
        if json is not None:
            headers['Content-Type'] = 'application/json'
        r = requests.request(method, url, headers=headers, json=json, timeout=10)
        r.raise_for_status()
        return r.json()

    def health(self):
        return self._req('GET', '/v1/health')

    def get_account(self, address: str):
        return self._req('GET', f'/v1/accounts/{address}')

    def echo(self, payload: dict):
        return self._req('POST', '/v1/echo', json=payload)
