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
  },
  mounted() {
    const mapElements = Array.from(
      document.querySelectorAll("#world-map path")
    );
    mapElements.forEach(path => {
      path.classList.add("world-map__map-region");
    });
  }
};
</script>

<style lang="scss">
.world-map {
  height: 90%;
  width: 90%;

  &__map-region {
    border: 1px solid grey;
    transition: 0.3s all ease;

    &:hover {
      fill: red;
    }
  }
}
</style>
