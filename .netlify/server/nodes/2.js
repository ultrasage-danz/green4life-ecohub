

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.JqcjkSHQ.js","_app/immutable/chunks/scheduler.CZSZcgEk.js","_app/immutable/chunks/index.Cx7eqUHS.js","_app/immutable/chunks/icons.BUNwgG90.js"];
export const stylesheets = ["_app/immutable/assets/2.CRQV5MlA.css"];
export const fonts = [];
