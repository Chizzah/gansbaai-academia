<template>
  <layout>
    <section class="text-gray-900 lg:text-xl lg:mt-16 lg:ml-40">
      <h1 class="mx-4 my-8 text-2xl lg:mb-8 lg:text-6xl">
        Our <span class="text-red-900">School News</span>
      </h1>
      <section class="flex flex-col items-start justify-start">
        <section
          class="flex flex-col items-center justify-start lg:mt-20 lg:flex-row"
          v-for="edge in $page.news.edges"
          :key="edge.node.id"
        >
          <div>
            <img
              class="hidden rounded lg:block"
              :src="`${edge.node.image.file.url}?w=400`"
              :alt="edge.node.image.title"
            />
            <img
              class="rounded lg:hidden"
              :src="`${edge.node.image.file.url}?w=300`"
              :alt="edge.node.image.description"
            />
          </div>
          <div class="m-12 lg:w-3/6 lg:m-0 lg:ml-16">
            <h2 class="font-semibold text-red-900 lg:text-2xl">
              {{ edge.node.title }}
            </h2>
            <p class="mb-4 text-sm">by {{ edge.node.author.name }}</p>
            <p class="mb-4">{{ edge.node.summary }}</p>
            <g-link class="font-semibold text-yellow-700" :to="edge.node.path"
              >Read more</g-link
            >
          </div>
        </section>
        <Pager
          class="flex items-center justify-around w-4/6 text-lg font-semibold lg:mt-20 lg:text-2xl hover:text-red-900"
          :info="$page.news.pageInfo"
        />
      </section>
    </section>
  </layout>
</template>

<page-query>
  query ($page: Int) {
    news: allContentfulNews(perPage: 2, page: $page, sortBy: "date", order: DESC) @paginate {
		pageInfo {
			totalPages
			currentPage
		}
      edges {
        node {
          id
          slug
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
import { Pager } from "gridsome";

export default {
  components: {
    Pager,
  },
};
</script>
