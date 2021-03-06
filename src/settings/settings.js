const BASE_URL = "https://restcountries.eu/rest/v2";

const URL_SETTINGS = {
  BASE_URL,
  SEARCH_ALL: `${BASE_URL}/all`,
  SEARCH_NAME: `${BASE_URL}/name/`,
  SEARCH_CAPITAL: `${BASE_URL}/capital/`,
  SEARCH_REGION: `${BASE_URL}/region/`
};

const appInfo = {
  name: "Country details finder",
  version: "v1.0"
};

export { URL_SETTINGS, appInfo };
