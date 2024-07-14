import { c as create_ssr_component, e as escape } from './ssr-DdlStX9y.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const post = data.post;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div><div class="blog_content"><h3>${escape(post.title)}</h3> <p>${escape(post.body)}</p></div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-DKDCNFal.js.map
