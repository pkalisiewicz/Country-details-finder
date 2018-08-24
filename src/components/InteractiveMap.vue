<template>
  <section class="world-map" id="world-map">
    <WorldMap />
  </section>
</template>

<script>
import WorldMap from "../assets/InteractiveMap.svg";
export default {
  name: "InteractiveMap",
  components: {
    WorldMap
  }
};
</script>

<style lang="scss" scoped>
.world-map {
  height: 90%;
  width: 90%;

  svg {
    width: 100%;
    height: 100%;
  }
}
</style>
