<template>
  <Layout>
    <section class="text-gray-900 lg:text-xl">
      <!-- Landing Section -->

      <section>
        <div class="relative bg-black">
          <g-image
            class="w-full opacity-75 hero"
            src="../../static/img/gansbaai-academia-building.webp"
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
              High School in Gansbaai
            </h1>
            <p class="text-xxs lg:text-xl">
              "Start where you are. Use what you have. <br class="lg:hidden" />
              Do what you can." <br />
              <strong>- Arthur Ashe</strong>
            </p>
          </div>
        </div>
      </section>

      <!-- Our Vision/Headmaster's Welcome Section -->

      <section v-for="edge in $page.home.edges" :key="edge.node.id">
        <section
          class="items-center justify-between mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
        >
          <div>
            <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">
              Our <span class="text-red-900">Vision</span>
            </h2>
            <vue-simple-markdown
              :source="edge.node.ourVision"
            ></vue-simple-markdown>
            <!-- <p>
            To be an excellent comprehensive community school, with a
            <br class="hidden lg:block" />
            strong emphasis in the area of Hospitality, CAT, Tourism and
            <br class="hidden lg:block" />
            Maritime Studies. To be a community which works together to
            <br class="hidden lg:block" />
            ensure all students are inspired, and empowered, to achieve
            <br class="hidden lg:block" />
            their full potential.
          </p> -->
          </div>
          <div>
            <g-image
              class="mt-8 rounded-lg lg:mt-16 lg:mr-40 lg:rounded"
              :src="edge.node.ourVisionImage.file.url"
              :alt="edge.node.ourVisionImage.title"
            />
          </div>
        </section>
        <section
          v-for="edge in $page.home.edges"
          :key="edge.node.id"
          class="items-center justify-between mx-4 mt-8 lg:flex lg:mt-16 lg:ml-40"
        >
          <div>
            <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">
              Headmaster's <span class="text-red-900">Welcome</span>
            </h2>
            <vue-simple-markdown
              :source="edge.node.headmastersWelcome"
            ></vue-simple-markdown>
            <!-- <p class="mb-2 lg:mb-4">
            Welcome to our website, which has been purposely designed to give
            you an insight <br class="hidden lg:block" />
            into our community, as we believe that Gansbaai Academia's not just
            any other school,<br class="hidden lg:block" />
            but a place which our students call their "second home". Gansbaai
            Academia is a young <br class="hidden lg:block" />
            multi-cultural high school in the Overstrand region serving the very
            poor communities of <br class="hidden lg:block" />
            Gansbaai, Stanford and Baardskeerdersbos. The school has achieved
            much in its short history <br class="hidden lg:block" />
            in producing quality students and giving hope to many learners, many
            of whom come from <br class="hidden lg:block" />
            the poorest of poor families. It is an Inclusive school catering for
            many learners with learning <br class="hidden lg:block" />
            difficulties and impairments.

            <br />
            <br />

            We are restrained by a severe lack of funds and cannot provide to
            purchase our own school <br class="hidden lg:block" />
            transport. We believe that it is essential to acquire such transport
            because of the major role it <br class="hidden lg:block" />
            will play in the development of our learners, many of them who do
            not have the financial means <br class="hidden lg:block" />
            to pay for transport for extra mural activities and thus cannot
            participate in activities that could <br class="hidden lg:block" />
            broaden their horizon beyond the unemployment and lately illegal
            poaching activities of Gansbaai.

            <br />
            <br />

            Departmental audits have found our financial systems in good health,
            which means that your <br class="hidden lg:block" />
            contributions will be properly spent to benefit all our learners.
            You are also very welcome to visit <br class="hidden lg:block" />
            us for an on-site inspection. As can be seen from the following,
            this is an unique and ideal <br class="hidden lg:block" />
            opportunity for you as sponsor to play a role in the wellbeing of
            ALL communities in Gansbaai <br class="hidden lg:block" />
            and Stanford. Through your kind sponsorship you will play a major
            role in giving hope to our <br class="hidden lg:block" />
            learners and guide them to become responsible citizens of our
            country. Your sponsorship will <br class="hidden lg:block" />
            be fully tax deductible because Academia is a section 21 school.

            <br />
            <br />

            The foundation of the school’s culture is the “Six Pillars Of
            Character” trustworthiness, respect, <br class="hidden lg:block" />
            responsibility, fairness, caring and citizenship. Gansbaai is a
            small fishing coastal town in the <br class="hidden lg:block" />
            Overstrand region of the Western Cape province
          </p> -->
          </div>
          <div class="flex items-center justify-center">
            <g-image
              class="mt-8 rounded-lg lg:mt-16 lg:mr-32"
              :src="edge.node.headmastersWelcomeImage.file.url"
              :alt="edge.node.headmastersWelcomeImage.title"
              width="300"
            />
          </div>
        </section>
      </section>
      <section
        class="items-start justify-center mx-4 mt-8 lg:flex lg:flex-col lg:mt-16 lg:ml-40"
      >
        <button
          @click="isOpen1 = !isOpen1"
          type="button"
          class="flex items-center justify-between mt-6 bg-gray-900 rounded-lg w-72 focus:outline-none lg:w-128 lg:mt-12"
        >
          <h2 class="ml-2 text-lg text-yellow-600 lg:ml-4 lg:text-2xl">
            Core Aims
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
            <li class="mb-1 lg:mb-2">
              To raise the attainment of students of all
              <br class="lg:hidden" />
              abilities and
            </li>
            <li class="mb-1 lg:mb-2">
              Ensure achievement in its broadest sense.
            </li>
            <li>To promote and celebrate diversity.</li>
          </ul>
        </div>
        <button
          @click="isOpen2 = !isOpen2"
          type="button"
          class="flex items-center justify-between mt-4 bg-gray-900 rounded-lg w-72 focus:outline-none lg:w-128"
        >
          <h2 class="ml-2 text-lg text-yellow-600 lg:ml-4 lg:text-2xl">
            Our History
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
          <p class="ml-2 lg:ml-4">
            Lorem ipsum dolor, sit amet consectetur <br class="lg:hidden" />
            adipisicing <br class="hidden lg:block" />
            elit. Nisi iure dolorem saepe <br class="lg:hidden" />
            corrupti accusamus <br class="hidden lg:block" />
            nostrum ad! Illo suscipit <br class="lg:hidden" />
            architecto optio, blanditiis, <br class="hidden lg:block" />
            ullam voluptas quos <br class="lg:hidden" />
            praesentiumquia consequatur <br class="hidden lg:block" />
            voluptatibus <br class="lg:hidden" />
            corporis eum?
            <g-link to="/about"
              ><strong class="ml-1 text-blue-500 hover:text-blue-300"
                >Read more...</strong
              ></g-link
            >
          </p>
        </div>
      </section>

      <!-- Video Section -->

      <section
        class="flex items-center justify-center py-10 my-16 bg-red-900 lg:mt-32 lg:py-20"
      >
        <LazyYoutubeVideo
          class="w-9/12 lg:w-6/12"
          src="https://www.youtube.com/embed/4c5XyPTmTcA"
        />
      </section>

      <!-- Extracurricular Section -->

      <section
        class="flex items-center justify-center py-12 text-gray-100 bg-gray-200"
      >
        <div class="flex-col items-center justify-center lg:flex lg:flex-row">
          <div class="relative my-4 overflow-hidden rounded-full shadow-lg">
            <g-image
              class="hidden rounded-full lg:block"
              src="../../static/img/home-sports.webp"
              alt="Gansbaai Academia sports"
              width="300"
              height="300"
            />
            <g-image
              class="rounded-full lg:hidden"
              src="../../static/img/home-sports.webp"
              alt="Gansbaai Academia sports"
              width="240"
              height="240"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full mt-16 lg:mt-24"
            >
              <h2 class="z-50 font-semibold uppercase">Sports</h2>
            </div>
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full mt-16 lg:mt-24"
            >
              <div class="w-full py-6 bg-red-900 opacity-75"></div>
            </div>
          </div>
          <div
            class="relative my-4 overflow-hidden rounded-full shadow-lg lg:ml-16"
          >
            <g-image
              class="hidden rounded-full lg:block"
              src="../../static/img/home-arts.webp"
              alt="Gansbaai Academia arts"
              width="300"
              height="300"
            />
            <g-image
              class="rounded-full lg:hidden"
              src="../../static/img/home-arts.webp"
              alt="Gansbaai Academia arts"
              width="240"
              height="240"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full mt-16 lg:mt-24"
            >
              <h2 class="z-50 font-semibold uppercase">Arts</h2>
            </div>
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full mt-16 lg:mt-24"
            >
              <div class="w-full py-6 bg-red-900 opacity-75"></div>
            </div>
          </div>
          <div class="relative overflow-hidden rounded-full shadow-lg lg:ml-16">
            <g-image
              class="hidden rounded-full lg:block"
              src="../../static/img/home-clubs.webp"
              alt="Gansbaai Academia clubs"
              width="300"
              height="300"
            />
            <g-image
              class="rounded-full lg:hidden"
              src="../../static/img/home-clubs.webp"
              alt="Gansbaai Academia clubs"
              width="240"
              height="240"
            />
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full mt-16 lg:mt-24"
            >
              <h2 class="z-50 font-semibold uppercase">Societies</h2>
            </div>
            <div
              class="absolute top-0 left-0 flex items-center justify-center w-full h-full mt-16 lg:mt-24"
            >
              <div class="w-full py-6 bg-red-900 opacity-75"></div>
            </div>
          </div>
        </div>
      </section>

      <!-- News Section -->

      <section>
        <h2 class="mx-4 my-8 text-2xl lg:mb-8 lg:text-6xl lg:mt-16 lg:ml-40">
          Latest <span class="text-red-900">News</span>
        </h2>
        <section
          class="flex flex-col items-center justify-center lg:flex-row lg:py-24"
        >
          <section
            class="flex flex-col items-start justify-center lg:mx-6"
            v-for="edge in $page.news.edges"
            :key="edge.node.id"
          >
            <div>
              <img
                class="rounded"
                :src="`${edge.node.image.file.url}?w=400`"
                :alt="edge.node.image.description"
              />
            </div>
            <div class="mt-4 mb-8 ml-2 lg:w-3/6">
              <h3 class="text-xl font-semibold text-red-900 lg:text-lg">
                {{ edge.node.title }}
              </h3>
              <p class="mb-4 lg:text-sm">by {{ edge.node.author.name }}</p>
              <g-link
                class="text-lg font-semibold text-yellow-700"
                :to="`/news/${edge.node.slug}`"
                >Read more</g-link
              >
            </div>
          </section>
        </section>
      </section>
    </section>
  </Layout>
</template>

<page-query>
query {
  home: allContentfulHomePage {
    edges {
      node {
        id
        title
        ourVision
        ourVisionImage {
          title
          file {
            url
          }
        }
        headmastersWelcome
        headmastersWelcomeImage {
          title
          file {
            url
          }
        }
      }
    }
  }
  news: allContentfulNews {
    edges {
      node {
        id
        slug
        title
        author {
          name
        }
        summary
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
import "vue-lazy-youtube-video/dist/style.css";
import LazyYoutubeVideo from "vue-lazy-youtube-video";

export default {
  data() {
    return {
      isOpen1: false,
      isOpen2: false,
    };
  },
  components: {
    LazyYoutubeVideo,
  },
  metaInfo: {
    title: "Best High School in Gansbaai",
    meta: [
      {
        name: "description",
        content:
          "Gansbaai Academia's vision is to be a community which works together to ensure all students are inspired, and empowered, to achieve their full potential.",
      },
    ],
  },
};
</script>
