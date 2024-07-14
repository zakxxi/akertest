const load = async (loadEvent) => {
  const { fetch, params } = loadEvent;
  const { postid } = params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postid}`
  );
  const post = await response.json();
  return {
    post
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-DKDCNFal.js')).default;
const universal_id = "src/routes/posts/[postid]/+page.js";
const imports = ["_app/immutable/nodes/5.p5b-ujkc.js","_app/immutable/chunks/scheduler.Bmg8oFKD.js","_app/immutable/chunks/index.DQZpanJt.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-BRGg820D.js.map
