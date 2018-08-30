<template>
  <section class="search">
    <input type="text" v-model="searchInput" @input="findCountry">

    {{searchInput}}
  </section>
</template>

<script>
export default {
  name: "CountryList",
  data() {
    return {
      searchInput: ""
    };
  },
  methods: {
    findCountry() {}
  }
};
</script>

<style scoped>
</style>
