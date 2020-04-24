// Site Layout
import DefaultLayout from '~/layouts/Default.vue'

// Markdown Parser
import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'

// Lazy Load Youtube Video

import 'vue-lazy-youtube-video/dist/style.css'
import Vue from 'vue'
import LazyYoutubeVideo from 'vue-lazy-youtube-video'

Vue.component('LazyYoutubeVideo', LazyYoutubeVideo)

export default function (Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)
  Vue.use(VueSimpleMarkdown)
}
