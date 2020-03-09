<template>
  <layout>
    <section class="mt-10 mb-16 mx-4 flex flex-col justify-center items-center text-gray-900 text-center lg:text-xl lg:mt-16 lg:h-128">
      <h1 class="my-8 text-2xl lg:mb-8 lg:text-5xl">Subscribe to <span class="text-red-900">Gansbaai Academia's Newsletter</span></h1>
      <p class="mb-16">Get updated at the end of each quarter with the latest happenings at Gansbaai Academia!</p>
      <div>
        <newsletterForm />
      </div>
    </section>
  </layout>
</template>

<script>
import newsletterForm from '~/components/newsletterForm.vue';

export default {
  components: {
    newsletterForm
  }  
}
</script>