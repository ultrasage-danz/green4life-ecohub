

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.ClOa0hzr.js","_app/immutable/chunks/scheduler.CZSZcgEk.js","_app/immutable/chunks/index.Cx7eqUHS.js","_app/immutable/chunks/icons.BUNwgG90.js"];
export const stylesheets = ["_app/immutable/assets/0.ClMu9gY5.css"];
export const fonts = [];
