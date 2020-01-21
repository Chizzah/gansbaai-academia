<template>
  <Layout>
    <section class="text-gray-900 lg:text-xl">
      <section id="heroSection">
        <div class="relative bg-black">
          <g-image class="w-full h-full opacity-75" src="../../static/img/pledges-hero.webp" alt="Books stacked on top of each other with white tablet on top in Gansbaai Academia classroom." height="480" />
          <div class="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-start text-gray-100 lg:mt-40">
            <div class="mt-12 py-10 px-24 bg-red-900 opacity-75 lg:py-20 lg:px-72">
            </div>
          </div>
          <div class="mt-6 ml-4 absolute top-0 left-0 h-full flex flex-col justify-center items-start text-gray-100 lg:mt-40 lg:ml-8">
            <h1 class="mb-2 text-xs font-semibold uppercase lg:mt-12 lg:text-4xl">Gansbaai Academia</h1>
            <p class="text-xxs lg:text-xl">"Start where you are. Use what you have. <br class="lg:hidden"> Do what you can." <br> <strong>- Arthur Ashe</strong></p>
          </div>
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex justify-between items-center lg:mt-16 lg:ml-40">
        <div>
          <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">Educator's <span class="text-red-900">Pledge</span></h2>
          <h3 class="mb-2 font-semibold text-lg lg:mb-4 lg:text-2xl">Educators at Gansbaai Academia have a special pledge:</h3>
          <p>We who work in Gansbaai Academia hold the view that all pupils can succeed and <br class="hidden lg:block"> we are working to see that it happens.</p>
          <h4 class="mt-4 mb-2 font-semibold lg:mt-8 lg:mb-4">As an educator I will also:</h4>
            <ul class="ml-4 list-disc lg:ml-8">
              <li class="mb-1 lg:mb-2">teach, to advance the education and the development of learners as individuals;</li>
              <li class="mb-1 lg:mb-2">respect the dignity and rights of all persons without prejudice;</li>
              <li class="mb-1 lg:mb-2">develop loyalty and respect for the profession;</li>
              <li class="mb-1 lg:mb-2">be punctual, enthusiastic, well prepared for lessons, and of sober mind and body;</li>
              <li class="mb-1 lg:mb-2">improve my own knowledge and skills base to be more effective;</li>
              <li class="mb-1 lg:mb-2">maintain good communication between teachers and students, among teachers <br class="hidden lg:block"> themselves and between teachers and parents;</li>
              <li class="mb-1 lg:mb-2">provide regular information to parents on their children’s progress;</li>
              <li class="mb-1 lg:mb-2">eliminate unprofessional behaviour such as teacher-pupil relationships, drunkenness, <br class="hidden lg:block"> drug use, assault, sexual harassment and others;</li>
              <li class="mb-1 lg:mb-2">make myself available to provide extramural activities.</li>
            </ul>
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex justify-between items-center lg:mt-16 lg:ml-40">
        <div>
          <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">Learner's <span class="text-red-900">Pledge</span></h2>
          <h3 class="mb-2 font-semibold text-lg lg:mb-4 lg:text-2xl">As a responsible learner of Gansbaai Academia, I will:</h3>
          <ul class="ml-4 list-disc lg:ml-8">
            <li class="mb-1 lg:mb-2">teach, to advance the education and the development of learners as individuals;</li>
            <li class="mb-1 lg:mb-2">accept that the main reason for being in school is to learn and develop academically, <br class="hidden lg:block"> socially and culturally;</li>
            <li class="mb-1 lg:mb-2">adhere to school rules;</li>
            <li class="mb-1 lg:mb-2">respect the legitimacy and authority of teachers;</li>
            <li class="mb-1 lg:mb-2">participate in Learner Representative Councils (LRCs) to safeguard my interests;</li>
            <li class="mb-1 lg:mb-2">show respect to other learners and not to discriminate;</li>
            <li class="mb-1 lg:mb-2">avoid anti-social behaviour like theft, vandalism, assault, sexual harassment, alcohol <br class="hidden lg:block"> and drug use, and other activities that disrupt the learning process.</li>
          </ul>
          <button @click="isOpen = !isOpen" type="button" class="w-72 mt-8 flex justify-between items-center bg-gray-900 rounded-lg focus:outline-none lg:w-128 lg:mt-16">
            <h4 class="ml-2 text-yellow-600 text-lg lg:ml-4 lg:text-2xl">My Pledge to be a Sharky</h4>
            <div class="bg-red-900 rounded-r-lg">
              <g-image class="h-16" src="../../static/icons/cheveron-right.svg" /> 
            </div>
          </button>
          <div :class="isOpen ? 'block' : 'hidden'" class="flex flex-col items-start justify-start w-full text-xs font-semibold lg:mt-8 lg:text-sm">
            <p class="my-2 ml-2 font-semibold lg:my-4 lg:ml-4">This is the pledge all grade 8’s make by <br> candlelight before becoming fully fledged <br> learners of our proud school:</p>
            <p class="ml-2 lg:ml-4"><strong>I hereby promise to:</strong> <br>
              Be loyal to my school at all times <br>
              Show respect to my educators, fellow <br class="lg:hidden"> students <br class="hidden lg:block"> and myself <br>
              Study hard and at all times give my best <br>
              Be focused and responsible <br>
              Participate in school activities <br>
              Care for my fellow students <br>
              Work hard so that I will have a bright future <br>
              And at all times stretch my wings <br>
              Extendere Alas Vestri!
            </p>
          </div>
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex justify-between items-center lg:mt-16 lg:ml-40">
        <div>
          <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">Parent's <span class="text-red-900">Pledge</span></h2>
          <h3 class="mb-2 font-semibold text-lg lg:mb-4 lg:text-2xl">As the caring parent of a learner at Gansbaai Academia I pledge to:</h3>
          <ul class="ml-4 list-disc lg:ml-8">
            <li class="mb-1 lg:mb-2">involve myself actively in the activities of the school, including school governance <br class="hidden lg:block"> structures; have regular discussions with my children about general school matters;</li>
            <li class="mb-1 lg:mb-2">cultivate a healthy, open and cooperative relationship with my children’s teachers;</li>
            <li class="mb-1 lg:mb-2">create a home environment conducive to study;</li>
            <li class="mb-1 lg:mb-2">assist in the protection of educational resources such as textbooks, chairs, tables and others.</li>
            <li class="mb-1 lg:mb-2">Contribute, within my means, the necessary resources to the schooling of my children</li>
          </ul>
        </div>
      </section>
      <section class="mt-8 mx-4 lg:flex justify-between items-center lg:mt-16 lg:ml-40">
        <div>
          <h2 class="mb-4 text-2xl lg:mb-8 lg:text-6xl">Parental <span class="text-red-900">Responsibilities</span></h2>
          <h3 class="mb-2 font-semibold text-lg lg:mb-4 lg:text-2xl">How should I contribute towards the development of my child’s school?</h3>
          <p class="mb-4 lg:mb-8">As a parent, you have a responsibility to contribute towards the development of the school <br class="hidden lg:block"> by rendering services to the school. This may include making yourself available to participate <br class="hidden lg:block"> in the activities of the school such as the maintenance of school property, auditing of financial <br class="hidden lg:block"> statements, managing sports events, helping manage school trips etc.</p>
          <h3 class="mb-2 font-semibold text-lg lg:mb-4 lg:text-2xl">What role can I play in supporting the learning process of my child?</h3>
          <p class="mb-4 lg:mb-8">Your child is in the custody of the school staff when she/he is at the school. The school <br class="hidden lg:block"> staff can successfully carryout their teaching responsibilities if they receive the support <br class="hidden lg:block"> of the parents.</p>
          <h4 class="mb-2 font-semibold lg:mb-4 lg:text-xl">As a parent you have the responsibility to:</h4>
          <ul class="mb-4 ml-4 list-disc lg:mb-8 lg:ml-8">
            <li class="mb-1 lg:mb-2">make sure that your child attends school regularly;</li>
            <li class="mb-1 lg:mb-2">assist with the discipline of your child;</li>
            <li class="mb-1 lg:mb-2">assist the school in promoting a culture of mutual respect and tolerance;</li>
            <li class="mb-1 lg:mb-2">monitor your child’s educational progress;</li>
            <li class="mb-1 lg:mb-2">ensure that she/he completes her/his homework;</li>
            <li class="mb-1 lg:mb-2">liase with the school staff and;</li>
            <li class="mb-4 lg:mb-8">respond to school notices calling for responses.</li>
          </ul>
          <h3 class="mb-2 font-semibold text-lg lg:mb-4 lg:text-2xl">How can I keep abreast of developments at the school?</h3>
          <p class="mb-2 lg:mb-4">Parents of learners must take responsibility for attending school meetings <br class="hidden lg:block"> that are organised for them. The SGB is legally bound to report to the parents <br class="hidden lg:block"> of learners at the school form time to time, and should keep parents informed <br class="hidden lg:block"> about issues that affect them.</p>
          <p class="mb-2 lg:mb-4">You have the right to request any additional information that is of interest to <br class="hidden lg:block"> you from the SGB and the principal of the school. The SGB or principal must <br class="hidden lg:block"> supply this information, or tell you in writing why they cannot give the information.</p>
          <p>Excerpted from the Western Cape Government Website: <a class="font-semibold hover:text-red-900" href="https://wcedonline.westerncape.gov.za/documents/rights_responsibilities/rights-eng.html" target="_blank">You Have the Following <br class="hidden lg:block"> Responsibilities as a Parent</a></p>
        </div>
      </section>
    </section>
  </layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Pledges'
  },
  data() {
    return {
      isOpen: false,
    }
  }
}
</script>