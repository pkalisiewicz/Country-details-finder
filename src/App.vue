<template>
  <div id="app">
    <Header :appInfo="appInfo" />
    <InteractiveMap />
  </div>
</template>

<script>
import { appInfo } from "./settings/settings.js";
import Header from "./components/Header";
import InteractiveMap from "./components/InteractiveMap";
export default {
  name: "App",
  components: {
    Header,
    InteractiveMap
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
