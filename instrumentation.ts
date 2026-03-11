export async function register() {
  // In some Node/Next setups, an experimental/broken `localStorage` can be present
  // on the server (e.g. via a Node flag), which can trick libraries into thinking
  // they're running in the browser.
  if (typeof window !== "undefined") return;

  const g = globalThis as unknown as {
    localStorage?: unknown;
    sessionStorage?: unknown;
  };

  const isBrokenStorage = (storage: unknown) =>
    !!storage && typeof (storage as { getItem?: unknown }).getItem !== "function";

  if (isBrokenStorage(g.localStorage)) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (g as { localStorage?: unknown }).localStorage;
    } catch {
      g.localStorage = undefined;
    }
  }

  if (isBrokenStorage(g.sessionStorage)) {
    try {
      // eslint-disable-next-line @typescript-eslint/no-dynamic-delete
      delete (g as { sessionStorage?: unknown }).sessionStorage;
    } catch {
      g.sessionStorage = undefined;
    }
  }
}

