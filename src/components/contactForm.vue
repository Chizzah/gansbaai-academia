<template>
  <section>
    <section class="lg:flex lg:flex-col lg:justify-center lg:items-center">
      <form class="lg:w-128"
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field""
        >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
        </p>
        <div class="flex flex-col">
          <input class="w-full px-6 py-4 mb-4 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline" for="name" type="text" name="name" required v-model="formData.name" placeholder="Your name*" />
          <input class="w-full px-6 py-4 mb-4 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline" for="email" type="email" name="email" required v-model="formData.email" placeholder="Your email*" />
          <input class="w-full px-6 py-4 mb-4 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline" for="number" type="number" name="number" required v-model="formData.number" placeholder="Your number*" />
          <input class="w-full px-6 py-4 mb-4 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline" for="time" type="time" name="time" required v-model="formData.time" placeholder="Time*" />
          <input class="w-full px-6 py-4 mb-4 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline" for="date" type="date" name="date" required v-model="formData.date" placeholder="Date*" />
        </div>
        <div class="message-wrapper">
          <textarea class="w-full px-6 pt-4 pb-12 mb-2 overflow-hidden bg-gray-200 rounded-lg focus:outline-none focus:shadow-outline" for="message" name="message" required v-model="formData.message" @input="textareaResize" ref="textarea" placeholder="Message"></textarea>
        </div>
        <button class="w-full py-4 font-semibold text-gray-100 bg-pink-500 rounded-full uppercase hover:bg-pink-400 lg:text-lg focus:outline-none" type="submit">Get A Cake</button>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&')
    },
    handleSubmit(e) {
      fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: this.encode({
      'form-name': e.target.getAttribute('name'),
      ...this.formData,
    }),
    })
      .then(() => this.$router.push('/success'))
      .catch(error => alert(error))
    },
    textareaResize() {
      this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
    }
  },
  mounted() {
    this.$refs.textarea.style.minHeight = this.$refs.textarea.scrollHeight + 'px';
  }
}
</script>

<style lang="postcss" scoped>
input[type=number]::-webkit-inner-spin-button, 
input[type=number]::-webkit-outer-spin-button { 
  -webkit-appearance: none; 
  margin: 0; 
}
</style>