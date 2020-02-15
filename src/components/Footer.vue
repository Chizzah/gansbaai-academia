<template>
  <footer class="text-gray-500 bg-gray-900 lg:rounded-lg lg:mb-16 lg:max-w-6xl lg:mx-auto">
    <section class="mt-8 border-b border-rosegold border-solid sm:mx-12 lg:ml-24 lg:mt-16">
      <h4 class="pt-16 mx-8 mb-4 text-xs text-yellow-600 font-semibold uppercase lg:text-lg">Achieve, Ascend & Transend.</h4>
      <h2 class="mx-8 mb-6 text-red-800 text-lg lg:text-3xl">"He who opens a school door, closes a prison" <br> <strong>- Victor Hugo</strong></h2>
      <h3 class="mx-8 mr-6 text-sm text-gray-100 lg:text-xl">Gansbaai Academia is a no fees, multi-cultural school situated in Gansbaai. It serves all communities and most of the school’s current complement of 725 learners originate from the three main population groups (black, coloured and white) in Gansbaai and Stanford and their surrounding areas.</h3>
      <g-link to="/cakesinoudtshoorn"><button class="ml-8 my-8 py-4 px-8 text-sm text-gray-100 bg-red-900 font-semibold rounded-full uppercase hover:bg-red-800 focus:outline-none">Newsletter Sign Up</button></g-link>
    </section>
    <section class="flex flex-row items-start justify-around mb-8 text-lg text-left lg:w-full lg:text-lg">
      <section class="my-16 lg:ml-12">
        <h3 class="text-yellow-700 font-semibold">Navigation</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="navItem in navItems" :key="navItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${navItem.route}`">{{ navItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="mt-16">
        <h3 class="text-yellow-700 font-semibold">Quick Links</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="quickLinksItem in quickLinksItems" :key="quickLinksItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${quickLinksItem.route}`">{{ quickLinksItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="hidden mt-16 lg:block">
        <h3 class="text-yellow-700 font-semibold">Get in touch</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="contactItem in contactItems" :key="contactItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${contactItem.route}`">{{ contactItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="hidden mt-16 lg:block">
          <div class="flex justify-start items-center">
            <a href="https://www.facebook.com/GansbaaiAcademia/" target="_blank">
              <svg class="text-blue-800 fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
            </a>
            <a href="#" target="_blank">
              <svg class="ml-4 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
            </a>
            <a href="#" target="_blank">
              <svg class="ml-4 text-red-900 fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
            </a>
        </div>
      </section>
    </section>
    <section class="ml-10 flex block text-lg lg:hidden">
        <div>
          <h3 class="text-yellow-700 font-semibold">Get in touch</h3>
        <ul class="text-gray-100 rounded list-reset" v-for="contactItem in contactItems" :key="contactItem.title">
          <li class="my-3">
            <g-link class="hover:text-rosegold" :to="`${contactItem.route}`">{{ contactItem.title }}</g-link>
          </li>
        </ul>
        </div>
        <div class="ml-16 flex justify-center items-center">
          <a href="https://www.facebook.com/GansbaaiAcademia/" target="_blank">
            <svg class="text-blue-800 fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z"/></svg>
          </a>
          <a href="#" target="_blank">
            <svg class="ml-2 text-blue-400 fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.066 9.645c.183 4.04-2.83 8.544-8.164 8.544-1.622 0-3.131-.476-4.402-1.291 1.524.18 3.045-.244 4.252-1.189-1.256-.023-2.317-.854-2.684-1.995.451.086.895.061 1.298-.049-1.381-.278-2.335-1.522-2.304-2.853.388.215.83.344 1.301.359-1.279-.855-1.641-2.544-.889-3.835 1.416 1.738 3.533 2.881 5.92 3.001-.419-1.796.944-3.527 2.799-3.527.825 0 1.572.349 2.096.907.654-.128 1.27-.368 1.824-.697-.215.671-.67 1.233-1.263 1.589.581-.07 1.135-.224 1.649-.453-.384.578-.87 1.084-1.433 1.489z"/></svg>
          </a>
          <a href="#" target="_blank">
            <svg class="ml-2 text-red-900 fill-current" xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path d="M14.829 6.302c-.738-.034-.96-.04-2.829-.04s-2.09.007-2.828.04c-1.899.087-2.783.986-2.87 2.87-.033.738-.041.959-.041 2.828s.008 2.09.041 2.829c.087 1.879.967 2.783 2.87 2.87.737.033.959.041 2.828.041 1.87 0 2.091-.007 2.829-.041 1.899-.086 2.782-.988 2.87-2.87.033-.738.04-.96.04-2.829s-.007-2.09-.04-2.828c-.088-1.883-.973-2.783-2.87-2.87zm-2.829 9.293c-1.985 0-3.595-1.609-3.595-3.595 0-1.985 1.61-3.594 3.595-3.594s3.595 1.609 3.595 3.594c0 1.985-1.61 3.595-3.595 3.595zm3.737-6.491c-.464 0-.84-.376-.84-.84 0-.464.376-.84.84-.84.464 0 .84.376.84.84 0 .463-.376.84-.84.84zm-1.404 2.896c0 1.289-1.045 2.333-2.333 2.333s-2.333-1.044-2.333-2.333c0-1.289 1.045-2.333 2.333-2.333s2.333 1.044 2.333 2.333zm-2.333-12c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.958 14.886c-.115 2.545-1.532 3.955-4.071 4.072-.747.034-.986.042-2.887.042s-2.139-.008-2.886-.042c-2.544-.117-3.955-1.529-4.072-4.072-.034-.746-.042-.985-.042-2.886 0-1.901.008-2.139.042-2.886.117-2.544 1.529-3.955 4.072-4.071.747-.035.985-.043 2.886-.043s2.14.008 2.887.043c2.545.117 3.957 1.532 4.071 4.071.034.747.042.985.042 2.886 0 1.901-.008 2.14-.042 2.886z"/></svg>
          </a>
      </div>
    </section>
    <section class="mt-16 py-2 mx-4 text-gray-100 text-xs text-center border-solid lg:mt-8 lg:order-2">
      <p class="mb-4">JAMstack Website by <a href="http://chaddwebdesign.co.za" target="_blank"><span class="font-semibold hover:text-green-400">Chadd Web Design</span></a></p>
      <p class="mb-4 lg:mb-8">Copyright &copy; {{ new Date().getFullYear() }} Gansbaai Academia. All rights reserved.</p>
    </section>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { title:'Home', route:'/' },
        { title:'About', route:'/about' },
        { title:'News', route:'/news' },
        { title:'Events', route:'/events' },
        { title:'Calendar', route:'/calendar' },
        { title:'Privacy', route:'/privacypolicy' },
      ],
      quickLinksItems: [
        { title:'Pledges', route:'/pledges' },
        { title:'Sponsorships', route:'/sponsorships' },
        { title:'Sports', route:'/sports' },
        { title:'Arts & Culture', route:'/artsandculture' },
        { title:'Societies', route:'/societies' },
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