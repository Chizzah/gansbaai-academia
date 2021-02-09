<template>
  <layout>
    <section class="text-gray-900 lg:text-xl">
      <section
        class="flex-col items-start justify-center mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
      >
        <p class="mb-2 font-light text-gray-700">{{ $page.news.date }}</p>
        <h1 class="text-2xl font-semibold lg:text-6xl">
          {{ $page.news.title }}
        </h1>
        <p class="mb-4 lg:mb-8 lg:text-2xl">by {{ $page.news.author.name }}</p>
        <p class="mr-3 text-gray-700 lg:mr-96">
          <strong class="text-red-900 uppercase">Quick Summary:</strong>
          {{ $page.news.summary }}
        </p>
        <div
          class="h-1 mt-4 bg-gray-400 border border-solid lg:mt-8 lg:w-256"
        ></div>
        <g-image
          class="my-6 lg:my-12"
          :src="$page.news.image.file.url"
          :alt="$page.news.image.title"
        />
        <vue-simple-markdown
          class="mr-3 lg:mr-96"
          :source="$page.news.body"
        ></vue-simple-markdown>
      </section>
    </section>
  </layout>
</template>

<page-query>
query ($id: ID!) {
  news: contentfulNews(id: $id) {
    id
    title
    slug
    date(format: "DD MMMM YYYY")
    summary
    author {
      name
    }
    image {
      title
      file {
        url
      }
    }
    body
  }
}
</page-query>
