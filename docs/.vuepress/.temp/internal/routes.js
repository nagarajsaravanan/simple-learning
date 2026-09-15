export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/README.md"), meta: {"title":"SIMPLE LEARNING"} }],
  ["/core-js/", { loader: () => import(/* webpackChunkName: "core-js_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/core-js/README.md"), meta: {"title":"CORE JS"} }],
  ["/node-js/", { loader: () => import(/* webpackChunkName: "node-js_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/node-js/README.md"), meta: {"title":"NODE JS"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/.vuepress/.temp/pages/404.html.vue"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateRoutes?.(routes)
  __VUE_HMR_RUNTIME__.updateRedirects?.(redirects)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateRoutes?.(m.routes)
    __VUE_HMR_RUNTIME__.updateRedirects?.(m.redirects)
  })
}
