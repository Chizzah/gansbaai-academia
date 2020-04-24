<template>
  <layout>
  	<section class="text-gray-900 lg:text-xl lg:mt-16 lg:ml-40">
  	<h1 class="my-8 mx-4 text-2xl lg:mb-8 lg:text-6xl">Our <span class="text-red-900">School News</span></h1>
			<section class="flex flex-col justify-start items-start">
				<section class="flex flex-col justify-start items-center lg:mt-20 lg:flex-row" v-for="edge in $page.articles.edges" :key="edge.node.id">
					<div>
						<img class="hidden rounded lg:block" :src="`${edge.node.image.file.url}?w=400`" :alt="edge.node.image.description" />
						<img class="rounded lg:hidden" :src="`${edge.node.image.file.url}?w=300`" :alt="edge.node.image.description" />
					</div>
					<div class="m-12 lg:w-3/6 lg:m-0 lg:ml-16">
						<h2 class="text-red-900 font-semibold lg:text-2xl">{{ edge.node.title }}</h2>
						<p class="mb-4 text-sm">by {{ edge.node.author.name }}</p>
						<p class="mb-4">{{ edge.node.summary }}</p>
						<g-link class="text-yellow-700 font-semibold" :to="edge.node.path">Read more</g-link>
					</div>
				</section>
    			<Pager class="w-4/6 flex justify-around items-center text-lg font-semibold lg:mt-20 lg:text-2xl hover:text-red-900" :info="$page.articles.pageInfo"/>
  		</section>
    </section>
  </layout>
</template>

<page-query>
  query ($page: Int) {
    articles: allContentfulArticle(perPage: 2, page: $page, sortBy: "date", order: DESC) @paginate {
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
						description
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
import { Pager } from 'gridsome'

export default {
  components: {
    Pager
  }
}
</script>