<template>
  <div>
    <h2>crypto</h2>
    {{ cryptoData?.symbol }}: {{ cryptoData?.openPrice }}
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref } from 'vue';
import { useNow, useDateFormat } from '@vueuse/core';
import getSymbolFromCurrency from 'currency-symbol-map';
import urlData from '../data/urlData.js';

const { binance } = urlData;
const path = 'api/v3/ticker/24hr';
const params = '';
// const symbol = 'BTCUSDT';

// 'https://api.binance.com/api/v3/exchangeInfo?symbols=["BTCUSDT","BNBBTC"]'

const cryptoData = ref(null);

const fetchData = async (symbol) => {
  // debugger
  const res = await fetch(`${binance[0]}/${path}?symbol=${symbol}`);
  const data = await res.json();
  cryptoData.value = data;
  return urlData;
};

onMounted(() => {
  fetchData('BTCUSDT');
});
</script>

<style lang="scss" scoped></style>
