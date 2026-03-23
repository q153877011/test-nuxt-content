import { a as __nuxt_component_0 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createVNode, toDisplayString, openBlock, createBlock, createCommentVNode, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData, q as queryCollection } from './client-CdcW4kcK.mjs';
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
import 'perfect-debounce';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { data: posts } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "blog-list",
      () => queryCollection("content").where("path", "LIKE", "/blog/%").order("date", "DESC").all()
    )), __temp = await __temp, __restore(), __temp);
    function formatDate(dateStr) {
      return new Date(dateStr).toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="hero" style="${ssrRenderStyle({ "padding": "2rem 0" })}"><h1>博客</h1><p>探索文章、教程与技术分享</p></div><div class="blog-list"><!--[-->`);
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
      _push(`<!--]--></div>`);
      if (!unref(posts)?.length) {
        _push(`<p style="${ssrRenderStyle({ "text-align": "center", "color": "var(--color-text-muted)", "padding": "3rem 0" })}"> 还没有文章，快去 <code>content/blog/</code> 目录下创建吧！ </p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-ByyXGrU8.mjs.map
