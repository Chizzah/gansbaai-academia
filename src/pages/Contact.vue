<template>
  <layout>
    <section class="lg:text-2xl">
      <h1
        class="mt-10 mb-4 text-2xl font-semibold text-center lg:mb-16 lg:text-5xl"
      >
        Contact <span class="text-red-900">Gansbaai Academia</span>
      </h1>
      <section class="flex flex-col items-center justify-around lg:flex-row">
        <div>
          <address class="flex flex-col items-start justify-center mt-10">
            <div class="mb-4">
              <strong>Address:</strong>
              <span class="ml-3">Kampeer St, Gansbaai, 7220</span>
            </div>
            <div class="flex items-start justify-start mb-4">
              <strong>Hours:</strong>
              <div class="ml-6">
                Monday: 8am-2:15pm <br />
                Tuesday: 8am-2:15pm <br />
                Wednesday: 8am-2:15pm <br />
                Thursday: 8am-2:15pm <br />
                Friday: 8am-2:15pm <br />Saturday: Closed <br />
                Sunday: Closed
              </div>
            </div>
            <div>
              <strong>Phone:</strong> <span class="ml-5">028 384 2370</span>
            </div>
          </address>
        </div>
        <div>
          <contactForm class="mt-16 lg:mt-0" />
        </div>
      </section>
      <section
        class="flex items-center justify-center mx-4 mt-8 lg:flex lg:mt-20 lg:ml-40"
      ></section>
    </section>
    <section
      class="flex flex-col items-center justify-center max-w-full p-4 mx-auto mt-8 bg-gray-900 lg:mt-16 lg:py-20"
    >
      <h2 class="mb-4 text-xl text-yellow-600 lg:mt-2 lg:mb-8 lg:text-4xl">
        Gansbaai Academia Maps
      </h2>
      <a
        href="https://www.google.com/maps/place/Gansbaai+Academia/@-34.5950826,19.3498061,17z/data=!3m1!4b1!4m5!3m4!1s0x1dce10c84eb8878b:0xd9881d89f40c379a!8m2!3d-34.5950826!4d19.3519948"
        target="_blank"
        ><g-image
          src="../../static/img/gansbaai-academia-contact-map.webp"
          alt="Google Maps of Gansbaai Academia High School"
      /></a>
    </section>
  </layout>
</template>

<script>
import contactForm from "~/components/contactForm.vue";

export default {
  components: {
    contactForm,
  },
};
</script>
