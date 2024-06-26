import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.gHlC49zX.js","app":"_app/immutable/entry/app.CFxrst7V.js","imports":["_app/immutable/entry/start.gHlC49zX.js","_app/immutable/chunks/entry.BsSSyhXW.js","_app/immutable/chunks/scheduler.CZSZcgEk.js","_app/immutable/entry/app.CFxrst7V.js","_app/immutable/chunks/scheduler.CZSZcgEk.js","_app/immutable/chunks/index.Cx7eqUHS.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})());
