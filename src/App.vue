<template>
  <div id="app">
    <Header :appInfo="appInfo" />
  </div>
</template>

<script>
import { appInfo } from "./settings/settings.js";
import Header from "./components/Header";
export default {
  name: "App",
  components: {
    Header
  },
  data() {
    return {
      appInfo
    };
  }
};
</script>

<style scoped>
</style>
