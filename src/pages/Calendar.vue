<template>
  <layout>
    <section class="py-10 bg-red-900 flex flex-col justify-center items-center lg:py-20">
      <h2 class="mb-8 text-gray-100 text-4xl lg:text-6xl">School <span class="text-yellow-600">Calendar</span></h2>
      <iframe class="hidden rounded-lg lg:block" src="https://calendar.google.com/calendar/b/4/embed?height=480&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Africa%2FJohannesburg&amp;src=Z2Fuc2JhYWlhY2FkZW1pYUBnbWFpbC5jb20&amp;color=%2322AA99&amp;mode=MONTH&amp;showTabs=1&amp;showPrint=0&amp;showNav=1&amp;showDate=1&amp;showTitle=1&amp;showCalendars=1&amp;showTz=1&amp;title=Gansbaai%20Academia%20Calendar" style="border-width:0" width="720" height="480" frameborder="0" scrolling="no"></iframe>
      <iframe class="rounded-lg lg:hidden" src="https://calendar.google.com/calendar/b/4/embed?height=480&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Africa%2FJohannesburg&amp;src=Z2Fuc2JhYWlhY2FkZW1pYUBnbWFpbC5jb20&amp;color=%2322AA99&amp;mode=AGENDA&amp;showTabs=0&amp;showPrint=0&amp;showNav=1&amp;showDate=1&amp;showTitle=1&amp;showCalendars=1&amp;showTz=1&amp;title=Gansbaai%20Academia%20Calendar" style="border-width:0" width="320" height="480" frameborder="0" scrolling="no"></iframe>
    </section>
  </layout>
</template>

<script>
export default {

}
</script>

<style>

</style>