<template>
  <layout>
    <section class="text-gray-900 lg:text-xl lg:mt-16">
  	<h1 class="my-8 mx-4 text-2xl lg:ml-40 lg:mb-8 lg:text-6xl">Our <span class="text-red-900">Staff</span></h1>
      <section class="my-12 flex flex-col justify-center items-center" v-for="edge in $page.staff.edges" :key="edge.node.id">
        <div class="w-4/6 mb-4 text-center">
          <h2 class="font-semibold lg:text-2xl">{{ edge.node.name }}</h2>
          <p class="lg:text-sm">{{ edge.node.position }}</p>
        </div>
        <div>
          <g-image class="rounded-lg" :src="edge.node.image.file.url" :alt="edge.node.image.description" />
        </div>
      </section>
    </section>
  </layout>
</template>

<page-query>
query {
  staff: allContentfulStaff(sortBy: "rank", order: ASC) {
    edges {
      node {
        id
        name
        position
        bio
        image {
          description
          file {
            url
          }
        }
        rank
      }
    }
  }
}
</page-query>

<script>
export default {

}
</script>

<style>

</style>