<template>
  <layout>
    <section
      class="text-lg text-gray-900 lg:text-xl"
      v-for="edge in $page.admissions.edges"
      :key="edge.node.id"
    >
      <!-- Landing Section -->

      <section>
        <div class="relative bg-black">
          <g-image
            class="w-full opacity-50 hero"
            src="../../static/img/gansbaai-academia-frames.webp"
            alt="Gansbaai Academia school building in Gansbaai, Overberg"
          />
          <div
            class="absolute top-0 left-0 flex flex-col items-start justify-center w-full h-full text-gray-100 lg:mt-56"
          >
            <div
              class="px-24 py-10 mt-12 bg-red-900 opacity-75 lg:py-20 lg:px-72"
            ></div>
          </div>
          <div
            class="absolute top-0 left-0 flex flex-col items-start justify-center h-full mt-6 ml-4 text-gray-100 lg:mt-56 lg:ml-8"
          >
            <h1
              class="mb-2 text-xs font-semibold uppercase lg:mt-12 lg:text-3xl"
            >
              No Fees High School
            </h1>
            <p class="text-xxs lg:text-xl">
              "An investment in knowledge pays the best <br class="lg:hidden" />
              interest." <br />
              <strong>- Benjamin Franklin</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- Application Section -->

      <section class="mx-4 mt-8 lg:mt-16 lg:ml-40">
        <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">Applications</h2>
        <vue-simple-markdown
          :source="edge.node.applications"
        ></vue-simple-markdown>
        <!-- <p class="mb-2 font-semibold text-yellow-600 lg:mb-4">
          Applications available to pick up from:
        </p>
        <p>
          <strong>Headmaster's Secretary:</strong> Mrs C Jansen,
          <br />
          <strong>Address:</strong> Kampeer St, Gansbaai 7220,
          <br />
          <strong>Tel:</strong> 028 384 2370
        </p> -->
      </section>

      <!-- Process Section -->

      <section class="mx-4 mt-8 lg:mt-16 lg:ml-40">
        <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">What is the process?</h2>
        <vue-simple-markdown :source="edge.node.process"></vue-simple-markdown>
        <!-- <p class="mb-2 font-semibold text-yellow-600 lg:mb-4">
          Here is a step by step explaintion of the admission process:
        </p>
        <ol class="mx-4 list-decimal">
          <li>
            Parents must pick up the application form at school from Mrs C
            Jansen.
          </li>
          <li>
            When submitting application forms, parents must include the
            following:
          </li>
          <ul class="mx-8 my-2 list-disc">
            <li>Birth Certificate of Learner</li>
            <li>ID of Parent</li>
            <li>ID Photo of Learner</li>
            <li>Proof of Address</li>
            <li>Copy of Leaner's Clinic Card</li>
            <li>Leaner's Most Recent Results</li>
          </ul>
          <li>
            Parents must submit the application form to Mrc C Jansen in person
            (please do not send a friend or family member to submit the
            document).
          </li>
        </ol> -->
      </section>
    </section>
  </layout>
</template>

<page-query>
  query {
    admissions: allContentfulAdmissionsPage {
      edges {
        node {
          id
          applications
          process
        }
      }
    }
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: "No Fees High School",
    meta: [
      {
        name: "description",
        content:
          "Parents can pick up an admissions form from Ms C Jansen at Gansbaai Academia to enroll their children. Please remember to submit to Ms C Jansen in person.",
      },
    ],
  },
};
</script>
