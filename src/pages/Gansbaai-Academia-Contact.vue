<template>
  <layout>
    <section class="flex justify-center items-center text-gray-900 lg:text-xl">
      <section class="mt-8 mx-4 lg:flex flex-col justify-center items-start lg:mt-16 lg:ml-40">
        <h1 class="mb-4 text-xl lg:mb-8 lg:text-6xl">Contact <span class="text-red-900">Gansbaai Academia</span></h1>
        <address class="flex flex-col justify-center items-start">
          <div class="mb-4">
            <strong>Address:</strong> <span class="ml-3">Kampeer St, Gansbaai, 7220</span>
          </div>
          <div class="mb-4 flex justify-start items-start">
            <strong>Hours:</strong>
            <div class="ml-6">
              Monday: 8am-2:15pm <br> Tuesday: 8am-2:15pm <br> Wednesday: 8am-2:15pm <br> Thursday: 8am-2:15pm <br> Friday: 8am-2:15pm <br>Saturday: Closed <br> Sunday: Closed
            </div>
          </div>
          <div>
            <strong>Phone:</strong> <span class="ml-5">028 384 2370</span>
          </div>
        </address>
        <contactForm />
      </section>
      <section class="p-4 bg-red-900 flex flex-col justify-center items-center rounded lg:p-8 lg:mr-16">
        <h2 class="mb-4 text-yellow-600 text-xl lg:mb-8 lg:text-4xl">Gansbaai Academia Maps</h2>
        <a href="https://www.google.com/maps/place/Gansbaai+Academia/@-34.5950826,19.3498061,17z/data=!3m1!4b1!4m5!3m4!1s0x1dce10c84eb8878b:0xd9881d89f40c379a!8m2!3d-34.5950826!4d19.3519948" target="_blank"><g-image src="../../static/img/gansbaai-academia-contact-map.webp" alt="Google Maps of Gansbaai Academia High School" /></a>
      </section>
    </section>
  </layout>
</template>

<script>
import contactForm from '~/components/contactForm.vue';

export default {
  components: {
    contactForm
  }
}
</script>

<style>

</style>