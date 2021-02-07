<template>
  <layout>
    <section class="text-gray-900 lg:text-xl">
    <p class="mt-24 ml-24 text-2xl text-blue-500">{{ $page.lifescience.title }}</p>

    <g-link :to="$page.lifescience.workSheet[0].file.url">Link</g-link>
      <!--<section
        class="flex-col items-start justify-center mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
      >
        <p class="mb-2 font-light text-gray-700">{{ $page.article.date }}</p>
        <h1 class="text-2xl font-semibold lg:text-6xl">
          {{ $page.article.title }}
        </h1>
        <p class="mb-4 lg:mb-8 lg:text-2xl">
          by {{ $page.article.author.name }}
        </p>
        <p class="mr-3 text-gray-700 lg:mr-96">
          <strong class="text-red-900 uppercase">Quick Summary:</strong>
          {{ $page.article.summary }}
        </p>
        <div
          class="h-1 mt-4 bg-gray-400 border border-solid lg:mt-8 lg:w-256"
        ></div>
        <g-image
          class="my-6 lg:my-12"
          :src="$page.article.image.file.url"
          :alt="$page.article.image.description"
        />
        <vue-simple-markdown
          class="mr-3 lg:mr-96"
          :source="$page.article.content"
        ></vue-simple-markdown> -->
      </section>
    </section>
  </layout>
</template>

<page-query>
query LifeScience ($path: String!) {
  lifescience: contentfulLifeScience (path: $path) {
    title
    workSheet {
      file {
        url
      }
    }
  }

}
</page-query>
