<template>
  <div id="app">
    <div class="loading" v-if="loading">
      <Spinner />
    </div>
    <Header :appInfo="appInfo" />
    <InteractiveMap />
  </div>
</template>

<script>
import { appInfo } from "./settings/settings.js";
import Header from "./components/Header";
import InteractiveMap from "./components/InteractiveMap";
import Spinner from "./assets/spinner.svg";
export default {
  name: "App",
  components: {
    Header,
    InteractiveMap,
    Spinner
  },
  data() {
    return {
      appInfo,
      loading: false
    };
  }
};
</script>

<style>
.loading {
  background: rgba(0, 0, 0, 0.5);
  bottom: 0;
  left: 0;
  position: fixed;
  top: 0;
  transition: 0.5s all ease;
  right: 0;
}

.spinner {
  display: block;
  height: 20vh;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  width: 20vw;
}

.spinning {
  animation-name: spinning-earth;
  animation-duration: 5s;
  animation-iteration-count: infinite;
}

@keyframes spinning-earth {
  0% {
    transform: translate(-50%);
  }
  50% {
    transform: translate(100%);
  }
  100% {
    transform: translate(50%);
  }
}
</style>
