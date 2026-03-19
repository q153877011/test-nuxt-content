import { _ as __nuxt_component_0 } from './ContentRenderer-g8opaB3_.mjs';
import { a as __nuxt_component_0$1 } from './server.mjs';
import { defineComponent, withAsyncContext, resolveComponent, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, q as queryCollection } from './client-CdcW4kcK.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'better-sqlite3';
import 'property-information';
import 'minimark/hast';
import 'vue-router';
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: page } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "index",
      () => queryCollection("content").path("/").first()
    )), __temp = await __temp, __restore(), __temp);
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "latest-posts",
      () => queryCollection("content").where("path", "LIKE", "/blog/%").order("date", "DESC").limit(5).all()
    )), __temp = await __temp, __restore(), __temp);
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentRenderer = __nuxt_component_0;
      const _component_ContentRendererMarkdown = resolveComponent("ContentRendererMarkdown");
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hero"><h1>内容驱动的网站</h1><p>使用 Nuxt Content 和 Markdown 轻松创建你的博客与文档站点</p></div>`);
      if (unref(page)) {
        _push(ssrRenderComponent(_component_ContentRenderer, { value: unref(page) }, {
          default: withCtx(({ value }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="prose"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_ContentRendererMarkdown, { value }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              return [
                createVNode("div", { class: "prose" }, [
                  createVNode(_component_ContentRendererMarkdown, { value }, null, 8, ["value"])
                ])
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<section style="${ssrRenderStyle({ "margin-top": "3rem" })}"><h2 style="${ssrRenderStyle({ "font-size": "1.5rem", "font-weight": "700", "margin-bottom": "1.25rem" })}">最新文章</h2><div class="blog-list"><!--[-->`);
      ssrRenderList(unref(posts), (post) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: post.path,
          to: post.path,
          class: "blog-card"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<h2${_scopeId}>${ssrInterpolate(post.title)}</h2><p${_scopeId}>${ssrInterpolate(post.description)}</p><div class="blog-meta"${_scopeId}>`);
              if (post.date) {
                _push2(`<span${_scopeId}>${ssrInterpolate(formatDate(post.date))}</span>`);
              } else {
                _push2(`<!---->`);
              }
              if (post.tags) {
                _push2(`<div class="blog-tags"${_scopeId}><!--[-->`);
                ssrRenderList(post.tags, (tag) => {
                  _push2(`<span class="blog-tag"${_scopeId}>${ssrInterpolate(tag)}</span>`);
                });
                _push2(`<!--]--></div>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div>`);
            } else {
              return [
                createVNode("h2", null, toDisplayString(post.title), 1),
                createVNode("p", null, toDisplayString(post.description), 1),
                createVNode("div", { class: "blog-meta" }, [
                  post.date ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(formatDate(post.date)), 1)) : createCommentVNode("", true),
                  post.tags ? (openBlock(), createBlock("div", {
                    key: 1,
                    class: "blog-tags"
                  }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(post.tags, (tag) => {
                      return openBlock(), createBlock("span", {
                        key: tag,
                        class: "blog-tag"
                      }, toDisplayString(tag), 1);
                    }), 128))
                  ])) : createCommentVNode("", true)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-QK4qONLs.mjs.map
