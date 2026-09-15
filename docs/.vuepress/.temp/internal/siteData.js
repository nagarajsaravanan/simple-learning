export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"SIMPLE LEARNING\",\"description\":\"Just playing around\",\"head\":[],\"locales\":{\"/\":{\"lang\":\"en-US\",\"title\":\"SIMPLE LEARNING\",\"description\":\"Just playing around\"}}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  __VUE_HMR_RUNTIME__.updateSiteData?.(siteData)
}

if (import.meta.hot) {
  import.meta.hot.accept((m) => {
    __VUE_HMR_RUNTIME__.updateSiteData?.(m.siteData)
  })
}
