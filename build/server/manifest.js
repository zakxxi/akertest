const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.DOzHaIvu.js","app":"_app/immutable/entry/app.Bw6gsc0V.js","imports":["_app/immutable/entry/start.DOzHaIvu.js","_app/immutable/chunks/entry.DocAWn_c.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/entry/app.Bw6gsc0V.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DQZpanJt.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-DxnXIT4r.js')),
			__memo(() => import('./chunks/1-DQ6UTHyQ.js')),
			__memo(() => import('./chunks/2-Dk07eBsr.js')),
			__memo(() => import('./chunks/3-DmClIS5f.js')),
			__memo(() => import('./chunks/4-B9muTWwU.js')),
			__memo(() => import('./chunks/5-BRGg820D.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/posts",
				pattern: /^\/posts\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/posts/[postid]",
				pattern: /^\/posts\/([^/]+?)\/?$/,
				params: [{"name":"postid","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set([]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
