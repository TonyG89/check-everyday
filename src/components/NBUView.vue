<template>
  <h2>NBU</h2>
  <div>
    <van-icon name="chat-o" />
    <van-grid :column-num="4">
      <van-grid-item v-for="i in NBUCurrency" :key="i.currency">
        <CircleFlags size="small" :country="i.flag" />
        {{ i.price }} {{ grn }}
        <CircleFlags size="small" country="ua" />
        {{ i.invertPrice }} {{ i.symbol }}
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core';
import getSymbolFromCurrency from 'currency-symbol-map';
// import urlData from '@/data/urlData.js';

const grn = getSymbolFromCurrency('UAH');

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
      symbol: getSymbolFromCurrency(currency),
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
