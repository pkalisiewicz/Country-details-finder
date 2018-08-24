<template>
  <header class="main-header">
    <h1 class="main-header__title">
      {{ appInfo.name }}
      <span class="main-header__version-number">
        {{ appInfo.version }}
      </span>
    </h1>
  </header>
</template>

<script>
export default {
  name: "Header",
  props: {
    appInfo: Object
  }
};
</script>

<style scoped>
</style>
