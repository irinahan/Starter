export class Legion {
  constructor(baseUrl = 'http://localhost:3000', apiKey = '') {
    this.baseUrl = baseUrl;
    this.apiKey = apiKey;
  }
  async _fetch(path, opts = {}) {
    const headers = Object.assign({}, opts.headers || {});
    if (path !== '/v1/health' && this.apiKey) {
      headers['Authorization'] = `Bearer ${this.apiKey}`;
    }
    if (opts.body && !headers['Content-Type']) {
      headers['Content-Type'] = 'application/json';
    }
    const res = await fetch(this.baseUrl + path, { ...opts, headers });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  }
  health() { return this._fetch('/v1/health'); }
  getAccount(address) { return this._fetch(`/v1/accounts/${address}`); }
  echo(payload) { return this._fetch('/v1/echo', { method: 'POST', body: JSON.stringify(payload) }); }
}
