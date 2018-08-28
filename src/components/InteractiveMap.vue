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
        // add class have possibility to manipulate these elements in the future
        path.classList.add("world-map__map-region");
        const selectedCountry = {
          name: path.dataset.name,
          code: path.dataset.id
        };
        const countryDetails = this.findCountryDetails(selectedCountry);
        if (countryDetails) {
          path.classList.add("world-map__map-region--available");
          path.dataset["country"] = JSON.stringify(countryDetails);
        }
      });
    },
    openCountry(e) {
      if (!(e.target.nodeName === "path")) {
        return false;
      }
      if (e.target.classList.contains("world-map__map-region--available")) {
        const countryDetails = JSON.parse(e.target.dataset.country);
        return swal({
          html: `
          <section class="country">
            <header class="country__title">${countryDetails.name}</header>
            <table class="country__container">
              <thead class="country__content">
                <tr class="country__content-heading">
                  <th class="country__content-name">Name</th>
                  <th class="country__content-parameter">Parameter</th>
                </tr>
              </thead>
              <tbody class="country__content-body">
                <tr class="country__content-row">
                  <td class="country__content-title">Capital city</td>
                  <td class="country__content-value">${
                    countryDetails.capital
                  }</td>
                </tr>
                <tr class="country__content-row">
                  <td class="country__content-title">Currency</td>
                  <td class="country__content-value">
                  ${countryDetails.currencies
                    .map(currency => currency.name)
                    .join(", ")}</td>
                </tr>
                <tr class="country__content-row">
                  <td class="country__content-title">Population</td>
                  <td class="country__content-value">
                  ${(countryDetails.population / 1000000).toFixed(2)} milions
                </tr>
              </tbody>
            </table>
          </section>
          `,
          imageAlt: `${countryDetails.name}'s flag`,
          imageClass: "country__flag",
          imageUrl: `${countryDetails.flag}`,
          showCloseButton: true,
          focusConfirm: false
        });
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
    border: 1px solid #837f7fad;
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

.country {
  &__flag {
    border-radius: 50%;
    height: 120px;
    object-fit: cover;
    width: 120px;
  }

  &__container {
    margin-top: 3rem;
    width: 100%;
  }

  &__content {
    line-height: 2;
  }
}
</style>
