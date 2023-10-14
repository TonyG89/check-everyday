<template>
  <h2>NBU</h2>
  <div>
{{ test }}
  </div>
</template>

<script setup>
const test = import.meta.env.VITE_NBU_URI+`/exchange?valcode=EUR&date=20200302&json`
</script>

<style lang="scss" scoped>

</style>