<template>
  <section class="text-gray-900 lg:text-xl">
    <section class="flex flex-col items-center justify-center">
      <h1 class="mx-4 my-8 text-2xl lg:mb-8 lg:text-6xl">
        Our <span class="text-red-900">Events</span>
      </h1>
      <div
        class="flex flex-col items-center justify-center w-11/12 p-10 my-10 text-center bg-white rounded shadow-lg lg:w-3/6 lg:my-20 lg:p-20"
        v-for="edge in $page.events.edges"
        :key="edge.node.id"
      >
        <h2 class="mx-4 my-8 text-xl text-yellow-600 lg:mb-8 lg:text-4xl">
          {{ edge.node.title }}
        </h2>
        <g-image :src="edge.node.image.file.url" :alt="edge.node.image.title" />
        <vue-simple-markdown
          class="flex flex-col items-center justify-center my-4 text-center lg:my-8 lg:mx-4"
          :source="edge.node.description"
        ></vue-simple-markdown>
        <p>
          <strong class="lg:mr-2">Location:</strong> {{ edge.node.location }}
        </p>
        <p><strong class="lg:mr-2">Date:</strong> {{ edge.node.date }}</p>
        <p>
          <strong class="lg:mr-2">Admission:</strong> {{ edge.node.admission }}
        </p>
      </div>
    </section>
  </section>
</template>
