<template>
  <Layout>
    <section class="text-gray-900 lg:text-xl">
      <section>
        <div class="relative bg-black">
          <g-image class="w-full h-full opacity-75" src="../../static/img/home-hero.webp" alt="Gansbaai Academia school building in Gansbaai, Overberg" height="480" />
          <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start text-gray-100 lg:mt-40">
            <div class="mt-12 py-10 px-24 bg-red-900 opacity-75 lg:py-20 lg:px-72">
            </div>
          </div>
          <div class="mt-6 ml-4 absolute top-0 left-0 h-full flex flex-col justify-center items-start text-gray-100 lg:mt-40 lg:ml-8">
            <h1 class="mb-2 text-xs font-semibold uppercase lg:mt-12 lg:text-4xl">Gansbaai Academia</h1>
            <p class="text-xxs lg:text-xl">"Start where you are. Use what you have. <br class="lg:hidden"> Do what you can." <br> <strong>- Arthur Ashe</strong></p>
          </div>
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex justify-between items-center lg:mt-16 lg:ml-40">
        <div>
          <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">Our <span class="text-red-900">Vision</span></h2>
          <p>To be an excellent comprehensive community school, with a <br class="hidden lg:block"> strong emphasis in the area of Hospitality, CAT, Tourism and <br class="hidden lg:block"> Maritime Studies. To be a community which works together to <br class="hidden lg:block"> ensure all students are inspired, and empowered, to achieve <br class="hidden lg:block"> their full potential.</p>
        </div>
        <div>
          <g-image class="mt-8 rounded-lg lg:mt-16 lg:mr-40 lg:rounded" src="../../static/img/our-vision-img.webp" alt="Students of Gansbaai Academia celebrating graduation." />
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex justify-between items-center lg:mt-16 lg:ml-40">
        <div>
          <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">Headmaster's <span class="text-red-900">Welcome</span></h2>
          <p class="mb-2 lg:mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos exercitationem <br class="hidden lg:block"> quae eum, asperiores unde fugit, minima explicabo saepe dicta, id numquam ea porro <br class="hidden lg:block"> nihil sed sunt labore aperiam. Necessitatibus eos consequatur excepturi est fuga cumque <br class="hidden lg:block"> veniam quidem vitae veritatis voluptatibus repellendus itaque vel neque saepe minus, non <br class="hidden lg:block"> repudiandae quia. Vitae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem voluptates <br class="hidden lg:block"> ab quidem optio odio dolor totam obcaecati facere velit quibusdam saepe odit exercitationem <br class="hidden lg:block"> consectetur cum rem, pariatur at distinctio repudiandae praesentium accusantium minima <br class="hidden lg:block"> excepturi. Fugiat vel commodi repellat, minus earum sunt voluptatem delectus sit sapiente <br class="hidden lg:block"> vero, nam pariatur eius.</p>
        </div>
        <div class="flex justify-center items-center">
          <g-image class="mt-8 rounded-lg lg:mt-16 lg:mr-40 lg:rounded" src="../../static/img/headmaster-img.webp" alt="Mr Wilson, Gansbaai Academia's headmaster." />
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex lg:flex-col justify-center items-start lg:mt-16 lg:ml-40">
        <button @click="isOpen1 = !isOpen1" type="button" class="w-72 mt-6 flex justify-between items-center bg-gray-900 rounded-lg focus:outline-none lg:w-128 lg:mt-12">
          <h2 class="ml-2 text-yellow-600 text-lg lg:ml-4 lg:text-2xl">Core Aims</h2>
          <div class="bg-red-900 rounded-r-lg">
            <g-image class="h-16" src="../../static/icons/cheveron-right.svg" alt="First cheveron pointing right." /> 
          </div>
        </button>
        <div :class="isOpen1 ? 'block' : 'hidden'" class="mt-4 flex flex-col items-start justify-start w-full text-xs font-semibold lg:text-sm">
          <ul class="ml-6 list-disc">
            <li class="mb-1 lg:mb-2">To raise the attainment of students of all <br class="lg:hidden"> abilities and</li>
            <li class="mb-1 lg:mb-2">Ensure achievement in its broadest sense.</li>
            <li>To promote and celebrate diversity.</li>
          </ul>
        </div>
        <button @click="isOpen2 = !isOpen2" type="button" class="w-72 mt-4 flex justify-between items-center bg-gray-900 rounded-lg focus:outline-none lg:w-128">
          <h2 class="ml-2 text-yellow-600 text-lg lg:ml-4 lg:text-2xl">Our History</h2>
          <div class="bg-red-900 rounded-r-lg">
            <g-image class="h-16" src="../../static/icons/cheveron-right.svg" alt="Second cheveron pointing right." /> 
          </div>
        </button>
        <div :class="isOpen2 ? 'block' : 'hidden'" class="mt-4 flex flex-col items-start justify-start w-full text-xs font-semibold lg:text-sm">
          <p class="ml-2 lg:ml-4">Lorem ipsum dolor, sit amet consectetur <br class="lg:hidden"> adipisicing <br class="hidden lg:block"> elit. Nisi iure dolorem saepe <br class="lg:hidden"> corrupti accusamus <br class="hidden lg:block"> nostrum ad! Illo suscipit <br class="lg:hidden"> architecto optio, blanditiis, <br class="hidden lg:block"> ullam voluptas quos <br class="lg:hidden"> praesentiumquia consequatur <br class="hidden lg:block"> voluptatibus <br class="lg:hidden"> corporis eum? <g-link to="/about"><strong>Read more...</strong></g-link></p>
        </div>
      </section>
      <section class="mt-10 py-10 bg-red-900 w-full lg:flex justify-center items-center lg:mt-20 lg:py-20">
        <video class="bg-gray-900" controls type="video/mp4" poster="../../static/img/video-thumbnail.webp" src="https://rondebosch.com/high/wp-content/uploads/2019/07/video2019.mp4" width="720"></video>
      </section>
      <section class="py-12 bg-gray-200 text-gray-100 flex justify-center items-center">
        <div class="lg:flex flex-col lg:flex-row justify-center items-center">
          <div class="my-4 relative rounded-full shadow-lg overflow-hidden">
            <g-image class="rounded-full hidden lg:block" src="../../static/img/home-sports.webp" alt="Gansbaai Academia sports" width="300" height="300" />
            <g-image class="rounded-full lg:hidden" src="../../static/img/home-sports.webp" alt="Gansbaai Academia sports" width="240" height="240" />
            <div class="mt-16 absolute top-0 left-0 w-full h-full flex justify-center items-center lg:mt-24">
              <h2 class="z-50 font-semibold uppercase">Sports</h2>
            </div>
            <div class="mt-16 absolute top-0 left-0 w-full h-full flex justify-center items-center lg:mt-24">
              <div class="py-6 w-full bg-red-900 opacity-75"></div>
            </div>
          </div>
          <div class="my-4 relative rounded-full shadow-lg overflow-hidden lg:ml-16">
            <g-image class="rounded-full hidden lg:block" src="../../static/img/home-arts.webp" alt="Gansbaai Academia arts" width="300" height="300" />
            <g-image class="rounded-full lg:hidden" src="../../static/img/home-arts.webp" alt="Gansbaai Academia arts" width="240" height="240" />
            <div class="mt-16 absolute top-0 left-0 w-full h-full flex justify-center items-center lg:mt-24">
              <h2 class="z-50 font-semibold uppercase">Arts</h2>
            </div>
            <div class="mt-16 absolute top-0 left-0 w-full h-full flex justify-center items-center lg:mt-24">
              <div class="py-6 w-full bg-red-900 opacity-75"></div>
            </div>
          </div>
          <div class="relative rounded-full shadow-lg overflow-hidden lg:ml-16">
            <g-image class="rounded-full hidden lg:block" src="../../static/img/home-clubs.webp" alt="Gansbaai Academia clubs" width="300" height="300" />
            <g-image class="rounded-full lg:hidden" src="../../static/img/home-clubs.webp" alt="Gansbaai Academia clubs" width="240" height="240" />
            <div class="mt-16 absolute top-0 left-0 w-full h-full flex justify-center items-center lg:mt-24">
              <h2 class="z-50 font-semibold uppercase">Societies</h2>
            </div>
            <div class="mt-16 absolute top-0 left-0 w-full h-full flex justify-center items-center lg:mt-24">
              <div class="py-6 w-full bg-red-900 opacity-75"></div>
            </div>
          </div>
        </div>
      </section>
      <section class="py-10 bg-red-900 flex flex-col justify-center items-center lg:py-20">
        <h2 class="mb-8 text-gray-100 text-4xl font-bold lg:text-6xl">Stay <span class="text-yellow-600">Updated</span></h2>
        <iframe class="hidden rounded-lg lg:block" src="https://calendar.google.com/calendar/b/4/embed?height=480&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Africa%2FJohannesburg&amp;src=Z2Fuc2JhYWlhY2FkZW1pYUBnbWFpbC5jb20&amp;color=%2322AA99&amp;mode=MONTH&amp;showTabs=1&amp;showPrint=0&amp;showNav=1&amp;showDate=1&amp;showTitle=1&amp;showCalendars=1&amp;showTz=1&amp;title=Gansbaai%20Academia%20Calendar" style="border-width:0" width="720" height="480" frameborder="0" scrolling="no"></iframe>
        <iframe class="rounded-lg lg:hidden" src="https://calendar.google.com/calendar/b/4/embed?height=480&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Africa%2FJohannesburg&amp;src=Z2Fuc2JhYWlhY2FkZW1pYUBnbWFpbC5jb20&amp;color=%2322AA99&amp;mode=AGENDA&amp;showTabs=0&amp;showPrint=0&amp;showNav=1&amp;showDate=1&amp;showTitle=1&amp;showCalendars=1&amp;showTz=1&amp;title=Gansbaai%20Academia%20Calendar" style="border-width:0" width="320" height="480" frameborder="0" scrolling="no"></iframe>
      </section>
      <section>
        <h2 class="my-8 mx-4 text-2xl lg:mb-8 lg:text-6xl lg:mt-16 lg:ml-40">Latest <span class="text-red-900">News</span></h2>
        <section class="flex flex-col lg:flex-row justify-center items-center lg:py-24">
          <section class="flex flex-col justify-center items-start lg:mx-6" v-for="edge in $page.articles.edges" :key="edge.node.id">
            <div>
              <g-image class="rounded" :src="`${edge.node.image.file.url}?w=400`" :alt="edge.node.image.description" />
            </div>
            <div class="mt-4 mb-8 ml-2 lg:w-3/6">
              <h3 class="text-red-900 text-xl font-semibold lg:text-lg">{{ edge.node.title }}</h3>
              <p class="mb-4 lg:text-sm">by {{ edge.node.author.name }}</p>
              <g-link class="text-yellow-700 text-lg font-semibold" :to="edge.node.path">Read more</g-link>
            </div>
          </section>
        </section>
      </section>
    </section>
  </Layout>
</template>

<page-query>
  query Articles {
    articles: allContentfulArticle(sortBy: "date", order: DESC, limit: 3) {
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
export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
    }
  },
  metaInfo: {
    title: 'Top High School in Gansbaai, Overberg',
    meta: [
      {
        name: 'description',
        content: "Gansbaai Academia's vision is to be a community which works together to ensure all students are inspired, and empowered, to achieve their full potential."
      }
    ]
  }
}
</script>