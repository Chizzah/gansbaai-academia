<template>
  <layout>
    <section>
      <eventsCard />
    </section>
  </layout>
</template>

<page-query>
  query {
    events: allContentfulEvent {
      edges {
        node {
          id
          title
          image {
            file {
              url
            }
            description
          }
          description
          date(format: "DD MMMM YYYY")
          price
          streetAddress
        }
      }
    }
  }
</page-query>

<script>
import eventsCard from '~/components/eventsCard.vue';

export default {
  components: {
    eventsCard
  }  
}
</script>