<template>
  <Layout>
    <section class="text-gray-900 lg:text-xl">
      <section id="heroSection">
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
          <h2 class="mb-4 text-xl lg:mb-8 lg:text-6xl">Our <span class="text-red-900">Vision</span></h2>
          <p>To be an excellent comprehensive community school, with a <br class="hidden lg:block"> strong emphasis in the area of Hospitality, CAT, Tourism and <br class="hidden lg:block"> Maritime Studies. To be a community which works together to <br class="hidden lg:block"> ensure all students are inspired, and empowered, to achieve <br class="hidden lg:block"> their full potential.</p>
        </div>
        <div>
          <g-image class="mt-8 rounded-lg lg:mt-16 lg:mr-40 lg:rounded" src="../../static/img/our-vision-img.webp" alt="Students of Gansbaai Academia celebrating graduation." />
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex justify-between items-center lg:mt-16 lg:ml-40">
        <div>
          <h2 class="mb-4 text-xl lg:mb-8 lg:text-6xl">Headmaster's <span class="text-red-900">Welcome</span></h2>
          <p class="mb-2 lg:mb-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos exercitationem <br class="hidden lg:block"> quae eum, asperiores unde fugit, minima explicabo saepe dicta, id numquam ea porro <br class="hidden lg:block"> nihil sed sunt labore aperiam. Necessitatibus eos consequatur excepturi est fuga cumque <br class="hidden lg:block"> veniam quidem vitae veritatis voluptatibus repellendus itaque vel neque saepe minus, non <br class="hidden lg:block"> repudiandae quia. Vitae?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem voluptates <br class="hidden lg:block"> ab quidem optio odio dolor totam obcaecati facere velit quibusdam saepe odit exercitationem <br class="hidden lg:block"> consectetur cum rem, pariatur at distinctio repudiandae praesentium accusantium minima <br class="hidden lg:block"> excepturi. Fugiat vel commodi repellat, minus earum sunt voluptatem delectus sit sapiente <br class="hidden lg:block"> vero, nam pariatur eius.</p>
          <button @click="isOpen1 = !isOpen1" type="button" class="w-128 mt-6 flex justify-between items-center bg-gray-900 rounded-lg focus:outline-none lg:mt-12">
            <h2 class="text-yellow-600 text-lg lg:ml-4 lg:text-2xl">Core Aims</h2>
            <div class="bg-red-900 rounded-r-lg">
              <g-image class="h-16" src="../../static/icons/cheveron-right.svg" /> 
            </div>
          </button>
          <div :class="isOpen1 ? 'block' : 'hidden'" class="flex flex-col items-start justify-start w-full text-sm font-semibold uppercase lg:mt-8">
            <ul class="list-disc lg:ml-8">
              <li class="lg:mb-2">To raise the attainment of students of all abilities and</li>
              <li class="lg:mb-2">Ensure achievement in its broadest sense.</li>
              <li>To promote and celebrate diversity.</li>
            </ul>
          </div>
          <button @click="isOpen2 = !isOpen2" type="button" class="w-128 mt-4 flex justify-between items-center bg-gray-900 rounded-lg focus:outline-none lg:mt-8">
            <h2 class="text-yellow-600 text-lg lg:ml-4 lg:text-2xl">Our History</h2>
            <div class="bg-red-900 rounded-r-lg">
              <g-image class="h-16" src="../../static/icons/cheveron-right.svg" /> 
            </div>
          </button>
          <div :class="isOpen2 ? 'block' : 'hidden'" class="flex flex-col items-start justify-start w-ful lg:mt-8">
            <p class="lg:ml-4">Lorem ipsum dolor, sit amet consectetur adipisicing <br class="hidden lg:block"> elit. Nisi iure dolorem saepe corrupti accusamus <br class="hidden lg:block"> nostrum ad! Illo suscipit architecto optio, blanditiis, <br class="hidden lg:block"> ullam voluptas quos praesentium quia consequatur <br class="hidden lg:block"> voluptatibus corporis eum?</p>
            <g-link class="mt-2 text-blue-800 lg:mt-4 lg:ml-4" to="/about"><strong>Read more...</strong></g-link>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <g-image class="mt-8 rounded-lg lg:mt-16 lg:mr-40 lg:rounded" src="../../static/img/headmaster-img.webp" alt="Mr Wilson, Gansbaai Academia's headmaster." />
        </div>
      </section>
      <section class="mt-10 py-10 bg-red-900 lg:flex justify-center items-center lg:mt-20 lg:py-20">
        <video class="hidden bg-black lg:block" controls type="video/mp4" poster="../../static/img/video-thumbnail.webp" src="https://rondebosch.com/high/wp-content/uploads/2019/07/video2019.mp4" width="720"></video>
        <video class="mt-1 ml-5 bg-black lg:hidden" controls type="video/mp4" poster="../../static/img/video-thumbnail.webp" src="https://rondebosch.com/high/wp-content/uploads/2019/07/video2019.mp4" width="330"></video>
      </section>
    </section>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'High School in the Gansbaai, Overberg | Gansbaai Academia'
  },
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
    }
  }
}
</script>