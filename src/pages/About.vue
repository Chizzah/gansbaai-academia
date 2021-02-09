<template>
  <Layout>
    <section class="text-gray-900 lg:text-xl">
      <section id="heroSection">
        <div class="relative bg-black">
          <g-image
            class="w-full opacity-50 hero"
            src="../../static/img/about-hero-img.webp"
            alt="Four dice on Gansbaai Academia classroom desk spelling the word teach"
            height="480"
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
              class="mb-2 text-xs font-semibold uppercase lg:mt-12 lg:text-4xl"
            >
              Multicutural High School
            </h1>
            <p class="text-xxs lg:text-xl">
              "Education is the passport to the future, for
              <br class="lg:hidden" />
              tomorrow <br class="hidden lg:block" />
              belongs to those who prepare for <br class="lg:hidden" />
              it today." <br />
              <strong>- Malcolm X</strong>
            </p>
          </div>
        </div>
      </section>
      <section v-for="edge in $page.about.edges" :key="edge.node.id">
        <section
          class="items-center justify-between mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
        >
          <div>
            <h2 class="mb-4 text-xl lg:mb-8 lg:text-6xl">
              Our <span class="text-red-900">School</span>
            </h2>
            <vue-simple-markdown
              :source="edge.node.ourSchoolBody"
            ></vue-simple-markdown>
            <!-- <p>
            Gansbaai Academia is a no fees, multi-cultural school situated in
            <br class="hidden lg:block" />
            Gansbaai. The school officially opened its doors on 22 February,
            2010 <br class="hidden lg:block" />
            on the insistence of the local community who reasoned that the other
            <br class="hidden lg:block" />
            high schools in the area were too remote. It serves all communities
            and <br class="hidden lg:block" />
            most of the school’s current complement of 725 learners originate
            from <br class="hidden lg:block" />
            the three main population groups (black, coloured and white) in
            Gansbaai <br class="hidden lg:block" />
            and Stanford and their surrounding areas.
          </p> -->
          </div>
        </section>
        <section
          class="items-center justify-between mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
        >
          <div>
            <h2 class="mb-4 text-xl lg:mb-8 lg:text-6xl">
              Our <span class="text-red-900">History</span>
            </h2>
            <vue-simple-markdown
              :source="edge.node.ourHistory"
            ></vue-simple-markdown>
            <!-- <p class="mb-2 lg:mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Dignissimos exercitationem <br class="hidden lg:block" />
              quae eum, asperiores unde fugit, minima explicabo saepe dicta, id
              numquam ea porro <br class="hidden lg:block" />
              nihil sed sunt labore aperiam. Necessitatibus eos consequatur
              excepturi est fuga cumque <br class="hidden lg:block" />
              veniam quidem vitae veritatis voluptatibus repellendus itaque vel
              neque saepe minus, non <br class="hidden lg:block" />
              repudiandae quia. Vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur voluptatem voluptates <br class="hidden lg:block" />
              ab quidem optio odio dolor totam obcaecati facere velit quibusdam
              saepe odit exercitationem <br class="hidden lg:block" />
              consectetur cum rem, pariatur at distinctio repudiandae
              praesentium accusantium minima <br class="hidden lg:block" />
              excepturi. Fugiat vel commodi repellat, minus earum sunt
              voluptatem delectus sit sapiente <br class="hidden lg:block" />
              vero, nam pariatur eius.
            </p> -->
          </div>
        </section>
      </section>
      <section
        class="items-center justify-between mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
      >
        <div>
          <h2 class="mb-4 text-xl lg:mb-8 lg:text-6xl">
            Our <span class="text-red-900">Curriculum</span>
          </h2>
          <p>
            The school is a parallel medium school teaching home languages of
            Xhosa or <br class="hidden lg:block" />
            Afrikaans. All other subjects are taught in English or Afrikaans.
            Thus English speaking <br class="hidden lg:block" />
            learners can have all their subjects taught in English, but have to
            choose between <br class="hidden lg:block" />
            Xhosa or Afrikaans as their mother language.
          </p>
          <button
            @click="isOpen1 = !isOpen1"
            type="button"
            class="flex items-center justify-between mt-4 bg-gray-900 rounded-lg w-72 focus:outline-none lg:w-128"
          >
            <h2 class="ml-2 text-lg text-yellow-600 lg:ml-4 lg:text-2xl">
              Core Subjects
            </h2>
            <div class="bg-red-900 rounded-r-lg">
              <g-image
                class="w-12 h-16"
                src="../../static/icons/cheveron-right.svg"
                alt="First cheveron pointing right."
              />
            </div>
          </button>
          <div
            :class="isOpen1 ? 'block' : 'hidden'"
            class="flex flex-col items-start justify-start w-full mt-4 text-xs font-semibold lg:text-sm"
          >
            <ul class="ml-6 list-disc">
              <li class="mb-1 lg:mb-2">Home Language Xhosa or Afrikaans</li>
              <li class="mb-1 lg:mb-2">Second Language English</li>
              <li class="mb-1 lg:mb-2">Mathematics or Mathematics Literacy</li>
              <li>Life orientation</li>
            </ul>
          </div>
          <button
            @click="isOpen2 = !isOpen2"
            type="button"
            class="flex items-center justify-between mt-4 bg-gray-900 rounded-lg w-72 focus:outline-none lg:w-128"
          >
            <h2 class="ml-2 text-lg text-yellow-600 lg:ml-4 lg:text-2xl">
              Other Subjects
            </h2>
            <div class="bg-red-900 rounded-r-lg">
              <g-image
                class="w-12 h-16"
                src="../../static/icons/cheveron-right.svg"
                alt="Second cheveron pointing right."
              />
            </div>
          </button>
          <div
            :class="isOpen2 ? 'block' : 'hidden'"
            class="flex flex-col items-start justify-start w-full mt-4 text-xs font-semibold lg:text-sm"
          >
            <ul class="ml-6 list-disc">
              <li class="mb-1 lg:mb-2">
                Gr 8 – 9: Social Sciences, Natural Sciences,
                <br class="lg:hidden" />
                Arts <br class="hidden lg:block" />
                and Culture, Technology, Economic <br class="lg:hidden" />
                Management <br class="hidden lg:block" />
                Sciences
              </li>
              <li>
                Gr 10-12 A choice of 3 subjects from <br class="lg:hidden" />
                Accounting, <br class="hidden lg:block" />
                Business Studies, Computer <br class="lg:hidden" />
                Applications Technology, <br class="hidden lg:block" />
                Geography, <br class="lg:hidden" />
                Hospitality Studies, Life Sciences, <br class="lg:hidden" />
                Physical <br class="hidden lg:block" />
                Sciences or Tourism
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section
        class="items-center justify-between mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
      >
        <div>
          <h2 class="mb-4 text-xl lg:mb-8 lg:text-6xl">
            Our <span class="text-red-900">Mascot</span>
          </h2>
          <p class="mb-2 lg:mb-4">
            We have adopted the shark as our mascot and our sports teams are
            <br class="hidden lg:block" />
            named the Sharkies. This is because Gansbaai, the town where we are
            <br class="hidden lg:block" />
            situated, is home to the big two of the oceans, the great white
            shark and <br class="hidden lg:block" />
            the southern right whale and offers unquestionably the world’s best
            <br class="hidden lg:block" />
            white-shark diving
          </p>
        </div>
        <div>
          <g-image
            class="mt-8 rounded-lg lg:mt-16 lg:mr-64 lg:rounded"
            src="../../static/img/gansbaai-academia-school-mascot.webp"
            alt="Students of Gansbaai Academia celebrating graduation."
          />
        </div>
      </section>
    </section>
  </Layout>
</template>

<page-query>
  query {
    about: allContentfulAboutPage {
      edges {
        node {
          id
          ourSchoolBody
          ourHistory
        }
      }
    }
  }
</page-query>

<script>
export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
    };
  },
  metaInfo: {
    title: "Multicutural High School",
    meta: [
      {
        name: "description",
        content:
          "Gansbaai Academia is a no fees, multi-cultural school situated in Gansbaai. The school officially opened its doors on 22 February, 2010.",
      },
    ],
  },
};
</script>
