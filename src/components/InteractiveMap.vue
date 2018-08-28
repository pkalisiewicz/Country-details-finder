<template>
  <section class="world-map" id="world-map">
    <WorldMap />
  </section>
</template>

<script>
import axios from "axios";
import WorldMap from "../assets/InteractiveMap.svg";
import swal from "sweetalert2";

export default {
  name: "InteractiveMap",
  components: {
    WorldMap
  },
  data() {
    return {
      countriesData: []
    };
  },
  async created() {
    const response = await axios("https://restcountries.eu/rest/v2/all");
    if (response.data) {
      this.countriesData = response.data;
      this.addMapClickHandler();
      this.addCountryClass();
      this.$emit("removeLoading");
    }
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
        const selectedCountry = {
          name: path.dataset.name,
          code: path.dataset.id
        };
        path.classList.add("world-map__map-region");
        if (this.findCountryDetails(selectedCountry)) {
          path.classList.add("world-map__map-region--available");
        }
      });
    },
    openCountry(e) {
      if (!(e.target.nodeName === "path")) {
        return false;
      }
      if (e.target.classList.contains("world-map__map-region--available")) {
        return swal("", "That thing is still around?", "info");
      } else {
        return swal({
          type: "error",
          title: "Oops...",
          text: "Country details not found...",
          footer: "Please try other one!"
        });
      }
    },
    findCountryDetails(selectedCountry) {
      const resultOne = this.countriesData.find(
        country => country.name === selectedCountry.name
      );
      const resultTwo = this.countriesData.find(
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
    cursor: pointer;
    transition: 0.3s all ease;

    &:hover {
      fill: #74b9ff;
    }

    &--available {
      fill: #00ff7f;
    }
  }
}
</style>
