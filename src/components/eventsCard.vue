<template>
  <section class="text-gray-900 lg:text-xl">
    <section class="flex flex-col justify-center items-center">
      <h1 class="my-8 mx-4 text-2xl lg:mb-8 lg:text-6xl">Our <span class="text-red-900">Events</span></h1>
      <div class="w-11/12 my-10 p-10 bg-white flex flex-col justify-center items-center text-center rounded shadow-lg lg:w-3/6 lg:my-20 lg:p-20" v-for="edge in $page.events.edges" :key="edge.node.id">
        <h2 class="my-8 mx-4 text-yellow-600 text-xl lg:mb-8 lg:text-4xl">{{ edge.node.title }}</h2>
        <g-image :src="edge.node.image.file.url" :alt="edge.node.image.description" />
        <vue-simple-markdown class="my-4 flex flex-col justify-center items-center text-center lg:my-8 lg:mx-4" :source="edge.node.description"></vue-simple-markdown>
        <p><strong class="lg:mr-2">Location:</strong> {{ edge.node.streetAddress }}</p>
        <p><strong class="lg:mr-2">Date:</strong> {{ edge.node.date }}</p>
        <p><strong class="lg:mr-2">Admission:</strong> {{ edge.node.price }}</p>
      </div>
    </section>
  </section>
</template>