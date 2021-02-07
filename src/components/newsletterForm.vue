<template>
  <section>
    <section
      class="lg:flex lg:flex-col lg:justify-center lg:items-start lg:mt-16"
    >
      <form
        class="lg:w-128"
        name="contact"
        method="post"
        v-on:submit.prevent="handleSubmit"
        action="/success/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label> Don’t fill this out: <input name="bot-field" /> </label>
        </p>
        <div class="flex flex-col">
          <input
            class="w-full px-6 py-4 mb-4 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline"
            for="name"
            type="text"
            name="name"
            required
            v-model="formData.name"
            placeholder="Your name*"
          />
          <input
            class="w-full px-6 py-4 mb-4 bg-gray-200 rounded-full focus:outline-none focus:shadow-outline"
            for="email"
            type="email"
            name="email"
            required
            v-model="formData.email"
            placeholder="Your email*"
          />
        </div>
        <button
          class="w-full py-4 font-semibold text-gray-100 uppercase bg-red-900 rounded-full hover:bg-red-800 lg:text-lg focus:outline-none"
          type="submit"
        >
          Subscribe Now
        </button>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      formData: {},
    };
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    },
    handleSubmit(e) {
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: this.encode({
          "form-name": e.target.getAttribute("name"),
          ...this.formData,
        }),
      })
        .then(() => this.$router.push("/success"))
        .catch((error) => alert(error));
    },
    textareaResize() {
      this.$refs.textarea.style.minHeight =
        this.$refs.textarea.scrollHeight + "px";
    },
  },
  mounted() {
    this.$refs.textarea.style.minHeight =
      this.$refs.textarea.scrollHeight + "px";
  },
};
</script>

<style lang="postcss" scoped>
input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
