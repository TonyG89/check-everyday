<template>
  <h2>NBU</h2>
  <div>
    {{ mainDb }}
    <van-icon name="chat-o" />
    <ul>
      x
      <li v-for="i in NBUCurrency" :key="i.currency">
        <CircleFlags size="medium" :country="i.flag" />
        {{ i.price }} {{ grn }} | {{ i.invertPrice }} {{ i.symbol }}
      </li>
      x
    </ul>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core';

const grn = () => currencySymbol('ukr');

const now = useNow();
const formatDate = useDateFormat(now, 'YYYYMMDD');

const mainDb = reactive({});

const emit = defineEmits(['loadedData']);

const NBUCurrency = computed(() => {
  return Object.keys(mainDb).map((currency) => {
    return {
      currency: currency,
      price: Math.round(mainDb[currency] * 100) / 100,
      invertPrice: Math.round((1 / mainDb[currency]) * 100) / 100,
      symbol: () => currencySymbol('usd'),
      flag: currency.toLowerCase().slice(0, 2),
    };
  });
});

const loadData = async (currency, date = formatDate.value) => {
  try {
    const uri = `${import.meta.env.VITE_NBU_URL}/exchange?valcode=${currency}&date=${date}&json`;
    const res = await fetch(uri);
    const data = await res.json();
    mainDb[currency] = data[0].rate;
  } catch (error) {
    console.error(error);
    debugger;
  } finally {
    console.log('loaded data', date);
  }
};

onMounted(() => {
  loadData('EUR');
  loadData('RUB');
  loadData('BYN');
  loadData('USD');
  emit('loadedData', mainDb);
  console.log(mainDb);
});
</script>

<style lang="scss" scoped>
li {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}
</style>
