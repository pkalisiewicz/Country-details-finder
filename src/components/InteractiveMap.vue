<template>
  <section class="world-map" id="world-map">
    <WorldMap />
  </section>
</template>

<script>
import WorldMap from "../assets/InteractiveMap.svg";
import countriesData from "../assets/data.json";
export default {
  name: "InteractiveMap",
  components: {
    WorldMap
  },
  data() {
    return {
      countriesData
    };
  },
  mounted() {
    this.addMapClickHandler();
    this.addCountryClass();
  },
  methods: {
    addMapClickHandler() {
      const mapElement = document.querySelector("#world-map");
      mapElement.addEventListener("click", this.openCountry);
    },
    addCountryClass() {
      const mapElements = Array.from(
        document.querySelectorAll("#world-map path")
      );
      mapElements.forEach(path => {
        path.classList.add("world-map__map-region");
      });
    },
    openCountry(e) {
      if (!e.target.nodeName === "path") {
        return false;
      }
      const selectedCountry = {
        name: e.target.dataset.name,
        code: e.target.dataset.id
      };
      const countryDetails = this.findCountryDetails(selectedCountry);
      if (!countryDetails) {
        return false;
      }
    },
    findCountryDetails(selectedCountry) {
      const resultOne = countriesData.find(
        country => country.name === selectedCountry.name
      );
      const resultTwo = countriesData.find(
        country => country.alpha2Code === selectedCountry.code
      );
      return resultOne ? resultOne : resultTwo;
    }
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
