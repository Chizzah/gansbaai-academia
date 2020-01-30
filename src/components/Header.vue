<template>
  <header class="py-4 text-gray-900">
    <nav class="flex justify-around items-center lg:text-xl">
      <section class="uppercase">
        <g-link to="/"><h5 class="text-red-900 text-xl font-bold lg:text-3xl">Gansbaai Academia</h5>
        <p class="text-yellow-600 text-sm font-semibold lg:text-lg">High School</p></g-link>
      </section>
      <section class="hidden font-bold text-2xl lg:flex">
        <ul v-for="menuItem in menuItems" :key="menuItem.title">
          <li class="px-2">
            <g-link class="hover:text-red-900" :to="menuItem.route">{{ menuItem.title }}</g-link>
          </li>
        </ul>
      </section>
      <section class="mr-4 lg:hidden">
        <button @click="isOpen = !isOpen" type="button" class="block focus:outline-none">
          <svg alt="Three lines on top of each other representing the mobile drop down menu." xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="1" y1="12" x2="21" y2="12"></line><line x1="1" y1="6" x2="21" y2="6"></line><line x1="1" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </section>
    </nav>
    <nav :class="isOpen ? 'block' : 'hidden'" class="z-50 flex flex-col items-center justify-center block w-full py-4 text-sm font-semibold uppercase lg:p-0">
      <section class="mb-2 ml-8">
        <ul class="rounded list-reset lg:hidden" v-for="menuItem in menuItems" :key="menuItem.title">
          <li class="py-2">
            <g-link class="text-gray-900 hover:text-rosegold" :to="menuItem.route">{{ menuItem.title }}</g-link>
          </li>
        </ul>
      </section>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        { title:'Home', route:'/' },
        { title:'About', route:'/about' },
        { title:'News', route:'/news' },
        { title:'Events', route:'/events' },
        { title:'Calendar', route:'/calendar' },
        { title:'Contact', route:'/contact' }
      ],
      isOpen: false,
    }
  }
}
</script>