<template>
  <section class="flex flex-col justify-start items-start">
    <section class="mt-20 flex justify-start items-center" v-for="edge in $page.articles.edges" :key="edge.node.id">
      <div>
        <g-image class="rounded" :src="`${edge.node.image.file.url}?w=400`" :alt="edge.node.image.file.title" />
      </div>
      <div class="w-3/6 lg:ml-16">
        <h3 class="text-red-900 font-semibold lg:text-2xl">{{ edge.node.title }}</h3>
        <p class="mb-4 text-sm">by {{ edge.node.author.name }}</p>
        <p class="mb-4">{{ edge.node.summary }}</p>
        <g-link class="text-yellow-700 font-semibold" :to="edge.node.path">Read more</g-link>
      </div>
    </section>
  </section>
</template>