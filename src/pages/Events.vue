<template>
  <layout>
    <section>
      <eventsCard />
    </section>
  </layout>
</template>

<page-query>
query {
  events: allContentfulEvents {
    edges {
      node {
        id
        title
        description
        date
        location
        admission
        image {
          title
          file {
            url
          }
        }
      }
    }
  }
}
</page-query>

<script>
import eventsCard from "~/components/eventsCard.vue";

export default {
  components: {
    eventsCard,
  },
};
</script>
