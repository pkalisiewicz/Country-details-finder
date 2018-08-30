<template>
  <transition name="fade" appear>
    <div id="app">
      <div class="loading" v-if="loading">
        <spinner />
      </div>
      <main-header :appInfo="appInfo" />
      <interactive-map @removeLoading="removeLoading" />
      <country-list />
    </div>
  </transition>
</template>

<script>
//assets
import { appInfo } from "./settings/settings.js";
import Spinner from "./assets/spinner.svg";

// components
import MainHeader from "./components/MainHeader";
import InteractiveMap from "./components/InteractiveMap";
import CountryList from "./components/CountryList";
export default {
  name: "App",
  components: {
    MainHeader,
    InteractiveMap,
    CountryList,
    Spinner
  },
  data() {
    return {
      appInfo,
      loading: true,
      countriesData: {}
    };
  },
  methods: {
    removeLoading() {
      this.loading = false;
    }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
