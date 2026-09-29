export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/README.md"), meta: {"title":""} }],
  ["/assets/", { loader: () => import(/* webpackChunkName: "assets_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/assets/README.md"), meta: {"title":"Book Assets & PDFs Directory"} }],
  ["/node-js/", { loader: () => import(/* webpackChunkName: "node-js_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/node-js/README.md"), meta: {"title":"Node.js Essentials"} }],
  ["/core-js/", { loader: () => import(/* webpackChunkName: "core-js_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/core-js/README.md"), meta: {"title":"CORE JS"} }],
  ["/react-js/components-and-jsx.html", { loader: () => import(/* webpackChunkName: "react-js_components-and-jsx.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/react-js/components-and-jsx.md"), meta: {"title":"Components & JSX: The Complete Guide"} }],
  ["/react-js/props.html", { loader: () => import(/* webpackChunkName: "react-js_props.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/react-js/props.md"), meta: {"title":"Props: The Complete Guide"} }],
  ["/react-js/", { loader: () => import(/* webpackChunkName: "react-js_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/react-js/README.md"), meta: {"title":"React.js Essentials"} }],
  ["/books/", { loader: () => import(/* webpackChunkName: "books_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/README.md"), meta: {"title":"Tech Books & Reading Notes"} }],
  ["/devops/", { loader: () => import(/* webpackChunkName: "devops_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/devops/README.md"), meta: {"title":"DevOps & Automation"} }],
  ["/books/ydkjs-get-started/ch1-what-is-js.html", { loader: () => import(/* webpackChunkName: "books_ydkjs-get-started_ch1-what-is-js.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/ydkjs-get-started/ch1-what-is-js.md"), meta: {"title":"Chapter 1: What Is JavaScript?"} }],
  ["/books/ydkjs-get-started/ch2-surveying-js.html", { loader: () => import(/* webpackChunkName: "books_ydkjs-get-started_ch2-surveying-js.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/ydkjs-get-started/ch2-surveying-js.md"), meta: {"title":"Chapter 2: Surveying JS"} }],
  ["/books/ydkjs-get-started/ch3-roots-of-js.html", { loader: () => import(/* webpackChunkName: "books_ydkjs-get-started_ch3-roots-of-js.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/ydkjs-get-started/ch3-roots-of-js.md"), meta: {"title":"Chapter 3: Digging to the Roots of JS"} }],
  ["/books/ydkjs-get-started/ch4-bigger-picture.html", { loader: () => import(/* webpackChunkName: "books_ydkjs-get-started_ch4-bigger-picture.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/ydkjs-get-started/ch4-bigger-picture.md"), meta: {"title":"Chapter 4: The Bigger Picture"} }],
  ["/books/ydkjs-get-started/practice.html", { loader: () => import(/* webpackChunkName: "books_ydkjs-get-started_practice.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/ydkjs-get-started/practice.md"), meta: {"title":"Appendix: Deep Dives & Practice Challenges"} }],
  ["/books/ydkjs-get-started/", { loader: () => import(/* webpackChunkName: "books_ydkjs-get-started_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/ydkjs-get-started/README.md"), meta: {"title":"You Don't Know JS Yet: Get Started (2nd Edition)"} }],
  ["/devops/ci-cd/", { loader: () => import(/* webpackChunkName: "devops_ci-cd_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/devops/ci-cd/README.md"), meta: {"title":"CI/CD Tutorial"} }],
  ["/books/template/", { loader: () => import(/* webpackChunkName: "books_template_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/template/README.md"), meta: {"title":"Book Notes Template"} }],
  ["/books/get-it-done/ch1-goals-arent-chores.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch1-goals-arent-chores.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch1-goals-arent-chores.md"), meta: {"title":"Chapter 1: Goals Aren't Chores"} }],
  ["/books/get-it-done/ch10-patience.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch10-patience.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch10-patience.md"), meta: {"title":"Chapter 10: Patience & Delayed Gratification"} }],
  ["/books/get-it-done/ch11-pursuing-goals-with-others.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch11-pursuing-goals-with-others.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch11-pursuing-goals-with-others.md"), meta: {"title":"Chapter 11: Pursuing Goals with Others"} }],
  ["/books/get-it-done/ch12-goals-in-relationships.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch12-goals-in-relationships.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch12-goals-in-relationships.md"), meta: {"title":"Chapter 12: Goals in Relationships & Teams"} }],
  ["/books/get-it-done/ch2-put-a-number-on-it.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch2-put-a-number-on-it.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch2-put-a-number-on-it.md"), meta: {"title":"Chapter 2: Put a Number on It"} }],
  ["/books/get-it-done/ch3-incentives-matter.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch3-incentives-matter.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch3-incentives-matter.md"), meta: {"title":"Chapter 3: Incentives Matter"} }],
  ["/books/get-it-done/ch4-intrinsic-motivation.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch4-intrinsic-motivation.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch4-intrinsic-motivation.md"), meta: {"title":"Chapter 4: Intrinsic Motivation (and Why You Should Have More Fun)"} }],
  ["/books/get-it-done/ch5-glass-half-full-half-empty.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch5-glass-half-full-half-empty.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch5-glass-half-full-half-empty.md"), meta: {"title":"Chapter 5: The Glass Half Full and Half Empty"} }],
  ["/books/get-it-done/ch6-the-middle-problem.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch6-the-middle-problem.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch6-the-middle-problem.md"), meta: {"title":"Chapter 6: The Middle Problem"} }],
  ["/books/get-it-done/ch7-learning-from-negative-feedback.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch7-learning-from-negative-feedback.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch7-learning-from-negative-feedback.md"), meta: {"title":"Chapter 7: Learning from Negative Feedback"} }],
  ["/books/get-it-done/ch8-goal-juggling.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch8-goal-juggling.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch8-goal-juggling.md"), meta: {"title":"Chapter 8: Goal Juggling"} }],
  ["/books/get-it-done/ch9-self-control.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_ch9-self-control.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/ch9-self-control.md"), meta: {"title":"Chapter 9: Self-Control"} }],
  ["/books/get-it-done/", { loader: () => import(/* webpackChunkName: "books_get-it-done_index.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/README.md"), meta: {"title":"Get It Done: Surprising Lessons from the Science of Motivation"} }],
  ["/books/get-it-done/summary.html", { loader: () => import(/* webpackChunkName: "books_get-it-done_summary.html" */"C:/NGRJ/HUSTLE/Mission possible/simple-learning/docs/books/get-it-done/summary.md"), meta: {"title":"The Zoho Master Action Plan"} }],
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
