<template>
  <layout>
    <section class="text-gray-900 lg:text-xl lg:mt-16 lg:ml-40">
  	<h1 class="my-8 mx-4 text-2xl lg:mb-8 lg:text-6xl">Our <span class="text-red-900">Staff</span></h1>
      <section class="flex justify-center items-center lg:my-20" v-for="edge in $page.staff.edges" :key="edge.node.id">
        <div class="lg:mr-20">
          <g-image class="rounded-lg" :src="edge.node.image.file.url" :alt="edge.node.image.description" />
        </div>
        <div class="w-3/6">
          <h2 class="font-semibold lg:text-2xl">{{ edge.node.name }}</h2>
          <p class="lg:text-sm">{{ edge.node.position }}</p>
          <vue-simple-markdown class="lg:mt-4" :source="edge.node.bio"></vue-simple-markdown>
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