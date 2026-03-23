import { u as useRoute, a as __nuxt_component_0 } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './ContentRenderer-g8opaB3_.mjs';
import { defineComponent, withAsyncContext, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderStyle, ssrRenderList } from 'vue/server-renderer';
import { u as useAsyncData, q as queryCollection } from './client-CdcW4kcK.mjs';
import { u as useHead } from './composables-DpMLvs0J.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'pg';
import 'better-sqlite3';
import 'vue-router';
import 'property-information';
import 'minimark/hast';
import 'perfect-debounce';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      `blog-${route.path}`,
      () => queryCollection("content").path(route.path).first()
    )), __temp = await __temp, __restore(), __temp);
    if (page.value) {
      useHead({
        title: page.value.title,
        meta: [
          { name: "description", content: page.value.description }
        ]
      });
    }
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_ContentRenderer = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/blog",
        class: "back-link"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` ← 返回博客列表 `);
          } else {
            return [
              createTextVNode(" ← 返回博客列表 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      if (unref(page)) {
        _push(`<article><header class="article-header"><h1>${ssrInterpolate(unref(page).title)}</h1>`);
        if (unref(page).description) {
          _push(`<p>${ssrInterpolate(unref(page).description)}</p>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="blog-meta" style="${ssrRenderStyle({ "margin-top": "1rem" })}">`);
        if (unref(page).date) {
          _push(`<span>${ssrInterpolate(formatDate(unref(page).date))}</span>`);
        } else {
          _push(`<!---->`);
        }
        if (unref(page).tags) {
          _push(`<div class="blog-tags"><!--[-->`);
          ssrRenderList(unref(page).tags, (tag) => {
            _push(`<span class="blog-tag">${ssrInterpolate(tag)}</span>`);
          });
          _push(`<!--]--></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></header><div class="prose">`);
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, null, _parent));
        _push(`</div></article>`);
      } else {
        _push(`<div style="${ssrRenderStyle({ "text-align": "center", "padding": "4rem 0", "color": "var(--color-text-muted)" })}"><h2>404 - 文章未找到</h2><p style="${ssrRenderStyle({ "margin-top": "0.5rem" })}">`);
        _push(ssrRenderComponent(_component_NuxtLink, { to: "/blog" }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`返回博客列表`);
            } else {
              return [
                createTextVNode("返回博客列表")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</p></div>`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_...slug_-BR2SnQtK.mjs.map
