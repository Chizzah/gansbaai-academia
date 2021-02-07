<template>
  <header class="py-4 text-gray-900">
    <nav class="flex items-center justify-around lg:text-xl">
      <section class="uppercase">
        <g-link to="/"
          ><h5 class="text-xl font-bold text-red-900 lg:text-3xl">
            Gansbaai Academia
          </h5></g-link
        >
      </section>
      <section class="hidden text-xl font-bold lg:flex">
        <ul v-for="menuItem in menuItems" :key="menuItem.title">
          <li class="px-4">
            <g-link class="hover:text-red-900" :to="menuItem.route">{{
              menuItem.title
            }}</g-link>
          </li>
        </ul>
      </section>
      <section class="mr-4 lg:hidden">
        <button
          @click="isOpen = !isOpen"
          type="button"
          class="block focus:outline-none"
        >
          <svg
            alt="Three lines on top of each other representing the mobile drop down menu."
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="1" y1="12" x2="21" y2="12"></line>
            <line x1="1" y1="6" x2="21" y2="6"></line>
            <line x1="1" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </section>
    </nav>
    <nav
      :class="isOpen ? 'block' : 'hidden'"
      class="z-50 flex flex-col items-center justify-center block w-full py-4 mt-8 text-sm font-semibold text-gray-100 uppercase bg-gray-900 lg:p-0"
    >
      <section class="mb-2 ml-8">
        <ul
          class="rounded list-reset lg:hidden"
          v-for="menuItem in menuItems"
          :key="menuItem.title"
        >
          <li class="py-2">
            <g-link class="hover:text-red-900" :to="menuItem.route">{{
              menuItem.title
            }}</g-link>
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
        { title: "Home", route: "/" },
        { title: "About", route: "/about" },
        { title: "Admissions", route: "/admissions" },
        { title: "Calendar", route: "/calendar" },
        { title: "Contact", route: "/contact" },
        { title: "Student Portal", route: "/student-portal" },
      ],
      isOpen: false,
    };
  },
};
</script>
