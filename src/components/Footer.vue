<template>
  <footer class="text-gray-500 bg-gray-900 lg:rounded-lg lg:mb-16 lg:max-w-6xl lg:mx-auto">
    <section class="mt-8 border-b border-rosegold border-solid sm:mx-12 lg:ml-24 lg:mt-16">
      <h4 class="pt-16 mx-8 mb-4 text-xs text-yellow-600 font-semibold uppercase lg:text-lg">Achieve, Ascend & Transend.</h4>
      <h2 class="mx-8 mb-6 text-red-800 text-lg lg:text-3xl">"He who opens a school door, closes a prison" <br> <strong>- Victor Hugo</strong></h2>
      <h3 class="mx-8 mr-6 text-sm text-gray-100 lg:text-xl">Gansbaai Academia is a no fees, multi-cultural school situated in Gansbaai. It serves all communities and most of the school’s current complement of 725 learners originate from the three main population groups (black, coloured and white) in Gansbaai and Stanford and their surrounding areas.</h3>
      <g-link to="/cakesinoudtshoorn"><button class="ml-8 my-8 py-4 px-8 text-sm text-gray-100 bg-red-900 font-semibold rounded-full uppercase hover:bg-red-800 focus:outline-none">Newsletter Sign Up</button></g-link>
    </section>
    <section class="flex flex-row items-start justify-around mb-8 text-lg text-left lg:justify-end lg:w-full lg:text-lg">
      <section class="my-16 lg:mr-20">
        <h3 class="text-yellow-700 font-semibold">Navigation</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="navItem in navItems" :key="navItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${navItem.route}`">{{ navItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="mt-16 lg:mr-16">
        <h3 class="text-yellow-700 font-semibold">Quick Links</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="quickLinksItem in quickLinksItems" :key="quickLinksItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${quickLinksItem.route}`">{{ quickLinksItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="hidden mt-16 mr-2 lg:block lg:mr-16">
        <h3 class="text-yellow-700 font-semibold">Get in touch</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="contactItem in contactItems" :key="contactItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${contactItem.route}`">{{ contactItem.title }}</g-link>
          </li>
        </ul>
      </section>
    </section>
    <section class="ml-10 block text-lg lg:hidden">
        <h3 class="text-yellow-700 font-semibold">Get in touch</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="contactItem in contactItems" :key="contactItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${contactItem.route}`">{{ contactItem.title }}</g-link>
          </li>
        </ul>
      </section>
    <section class="mt-24 py-2 mx-4 text-gray-100 text-xs text-center border-solid lg:order-2">
      <p class="mb-4">JAMstack Website by <a href="http://chaddwebdesign.co.za" target="_blank"><span class="font-semibold hover:text-green-400">Chadd Web Design</span></a></p>
      <p class="mb-4 lg:mb-8">Copyright &copy; {{ new Date().getFullYear() }} AfricanQueen. All rights reserved.</p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title:'Home', route:'/home' },
        { title:'About', route:'/about' },
        { title:'Admissions', route:'/admissions' },
        { title:'News', route:'/news' },
        { title:'Calendar', route:'/calendar' },
        { title:'Privacy', route:'/privacypolicy' },
      ],
      quickLinksItems: [
        { title:'Pledges', route:'/pledges' },
        { title:'Policies', route:'/policies' },
        { title:'Extracurricular', route:'/extracurricular' },
        { title:'Grade Shark', route:'/gradeshark' },
        { title:'Sponsorships', route:'/sponsorships' }
      ],
      contactItems: [
        { title:'Sign Up', route:'/newsletter' },
        { title:'Contact Us', route:'/contact' }
      ],
      isOpen: false,
    }
  }
}
</script>