<template>
  <div>
    <h2>CALENDAR</h2>
    <!-- <van-cell title="Select Single Date" :value="date" @click="show = true" /> -->
    <van-calendar v-model:show="show" @confirm="onConfirm" />
    <!-- <van-calendar show color="#ee0a24" /> -->
    <van-calendar title="Calendar" :poppable="false" :show-confirm="false" :style="{ height: '500px' }" />
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const date = ref('');
    const show = ref(false);

    const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}`;
    const onConfirm = (value) => {
      show.value = false;
      date.value = formatDate(value);
    };

    return {
      date,
      show,
      onConfirm,
    };
  },
};
</script>

<style lang="scss" scoped>
root {
  // --van-calendar-day-margin-bottom: 400px;  // 4px
}
</style>
