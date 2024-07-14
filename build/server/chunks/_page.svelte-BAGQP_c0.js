import { c as create_ssr_component, d as each, f as add_attribute, e as escape } from './ssr-DdlStX9y.js';

const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  const posts = data.posts;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  return `<div class="blog_cont"><h2 data-svelte-h="svelte-m5dio3">Posts</h2> <div class="blog_grid">${each(posts, (post) => {
    return `<a${add_attribute("href", `/posts/${post.id}`, 0)} class="blog_card"><h3>${escape(post.title)}</h3> <p>${escape(post.body)}</p> </a>`;
  })}</div> </div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-BAGQP_c0.js.map
