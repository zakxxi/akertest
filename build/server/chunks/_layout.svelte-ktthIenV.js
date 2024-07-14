import { c as create_ssr_component, v as validate_component, e as escape } from './ssr-DdlStX9y.js';

const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <nav data-svelte-h="svelte-ftjkrg"><div class="nav-links"><a href="/">Home</a> <a href="/about">About</a> <a href="/posts">Posts</a></div></nav>`;
});
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="footer"><p>Hosted with ❤️ by aker${escape(" ")}</p></div>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="layout">${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})} ${slots.default ? slots.default({}) : ``} ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-ktthIenV.js.map
