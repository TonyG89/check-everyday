<template>
  <h2>{{ title }}</h2>
  <div>
    <van-icon name="chat-o" />
    <van-grid :column-num="4">
      <van-grid-item v-for="i in currency" :key="i.currency">
        <slot />
        <!-- <CircleFlags size="small" :country="i.flag" />
        {{ i.price }} {{ grn }}
        <CircleFlags size="small" country="ua" />
        {{ i.invertPrice }} {{ i.symbol }} -->
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
defineProps({
  data: {
    type: Object,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped></style>
