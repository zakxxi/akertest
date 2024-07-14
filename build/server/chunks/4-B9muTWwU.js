const load = async (loadEvent) => {
  const { fetch } = loadEvent;
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await response.json();
  return {
    posts
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 4;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-BAGQP_c0.js')).default;
const universal_id = "src/routes/posts/+page.js";
const imports = ["_app/immutable/nodes/4.CfQ2sKVW.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DQZpanJt.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=4-B9muTWwU.js.map
