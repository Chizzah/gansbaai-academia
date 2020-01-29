<template>
  <layout>
    <section class="text-gray-900 lg:text-xl">
      <section class="mt-8 mx-4 lg:flex flex-col justify-center items-start lg:mt-16 lg:ml-40">
        <p class="mb-2 text-gray-700 font-light">{{ $page.article.date }}</p>
        <h1 class="text-2xl font-semibold lg:text-6xl">{{ $page.article.title }}</h1>
        <p class="mb-4 lg:mb-8 lg:text-2xl">by {{ $page.article.author.name }}</p>
        <p class="mr-3 text-gray-700 lg:mr-96"><strong class="text-red-900 uppercase">Quick Summary:</strong> {{ $page.article.summary }}</p>
        <div class="mt-4 h-1 border border-solid bg-gray-400 lg:mt-8 lg:w-256"></div>
        <g-image class="my-6 lg:my-12" :src="$page.article.image.file.url" :alt="$page.article.image.description" />
        <vue-simple-markdown class="mr-3 lg:mr-96" :source="$page.article.content"></vue-simple-markdown>
      </section>
    </section>
  </layout>
</template>

<page-query>
query Article($path: String!) {
  article: contentfulArticle(path: $path) {
    id
    path
    date(format: "DD MMMM YYYY")
    title
    summary
    author {
      name
    }
    image {
      title
      description
      file {
        url
      }
    }
    content
  }
}
</page-query>