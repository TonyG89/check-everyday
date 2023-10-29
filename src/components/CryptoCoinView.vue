<template>
  <div>
    <h2>crypto</h2>
    <div v-for="i in sortData" :key="i.symbol">
      {{ i?.symbol }}: {{ String(i?.openPrice).slice(0, String(i?.openPrice).indexOf('.') + 3) }} (<span
        :class="i?.priceChange > 0 ? 'text-green-900' : 'text-red-900'"
      >
        {{ String(i?.priceChange).slice(0, String(i?.priceChange).indexOf('.') + 3) }}
      </span>
      )
    </div>
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

const cryptoData = ref([]);

const sortData = computed (() => cryptoData.value.sort((a, b) => b.openPrice - a.openPrice));

const fetchData = async (symbol) => {
  // debugger
  const res = await fetch(`${binance[0]}/${path}?symbol=${symbol}`);
  const data = await res.json();
  cryptoData.value = [...cryptoData.value, data];
  return urlData;
};

onMounted(() => {
  fetchData('BTCUSDT');
  fetchData('USDTUAH');
  fetchData('ETHUSDT');
  fetchData('ETHUAH');
});
</script>

<style lang="scss" scoped></style>
