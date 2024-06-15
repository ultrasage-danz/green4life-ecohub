

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.BD4nVyEN.js","_app/immutable/chunks/scheduler.CZSZcgEk.js","_app/immutable/chunks/index.Cx7eqUHS.js","_app/immutable/chunks/entry.BsSSyhXW.js"];
export const stylesheets = [];
export const fonts = [];
