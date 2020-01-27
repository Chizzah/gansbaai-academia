<template>
  <layout>
    <section class="text-gray-900 lg:text-xl lg:mt-16 lg:ml-40 articles">
    <h2 class="my-8 mx-4 text-xl lg:mb-8 lg:text-6xl">Our <span class="text-red-900">School News</span></h2>
			<transition-group name="fade">
        <ArticleCard v-for="{ node } of loadedArticles"
					:key="node.id"
					:articles="node" />
			</transition-group>
			<ClientOnly>
				<infinite-loading class="lg:mt-48" @infinite="infiniteHandler" spinner="spiral">
					<div slot="no-more">
						You've scrolled through all the posts ;)
					</div>
					<div slot="no-results">
						Sorry, no posts yet :(
					</div>
				</infinite-loading>
			</ClientOnly>
    </section>
  </layout>
</template>

<page-query>
  query Articles($page: Int) {
    articles: allContentfulArticle(perPage: 10, page: $page, sortBy: "date", order: DESC) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
      edges {
        node {
          id
          path
          date(format: "DD MMMM YYYY")
          title
          author {
            name
          }
          summary
          image {
            title
            file {
              url
            }
          }
        }
      }
    }
  }
</page-query>

<script>
import ArticleCard from '~/components/ArticleCard.vue';

export default {
  components: {
    ArticleCard
  },
	data() {
		return {
			loadedArticles: [],
			currentPage: 1
		}
	},
	created() {
		this.loadedArticles.push(...this.$page.articles.edges)
	},
	methods: {
		async infiniteHandler($state) {
			if (this.currentPage + 1 > this.$page.articles.pageInfo.totalPages) {
				$state.complete()
			} else {
				const { data } = await this.$fetch(
					`/news/${this.currentPage + 1}`
				)
				if (data.articles.edges.length) {
					this.currentPage = data.articles.pageInfo.currentPage
					this.loadedArticles.push(...data.articles.edges)
					$state.loaded()
				} else {
					$state.complete()
				}
			}
		}
	}
}
</script>

<style lang="postcss" scoped>
.fade-enter-active,
.fade-leave-active {
	transition: ease opacity 1;
}
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>