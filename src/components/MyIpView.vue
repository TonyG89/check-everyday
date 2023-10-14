<template>
  <h2>All about my PC</h2>
  <div>
    <van-config-provider theme="dark">
      <van-cell title="myIp " :value="ip" />
      <van-cell title="city|country " :value="`${city} | ${country}`" />
      <van-button plain type="success" @click="loadData">refresh</van-button>
    </van-config-provider>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const ip = ref('...');
const city = ref('...');
const country = ref('...');

const getIp = async () => {
  const myIp = await fetch(import.meta.env.VITE_IP_URI).then((res) => res.json());
  ip.value = myIp.ip;
};

const getIpInfo = async (ip) => {
  const url = `${import.meta.env.VITE_IP_PLACE_URL}/${ip}/json/`;
  console.log(url);
  // const getInfo = await fetch(url).then((res) => res.json());
  const getInfo = await fetch(`https://ipapi.co/${ip}/json/`).then((res) => res.json());
  city.value = getInfo.city;
  country.value = getInfo.country_name;
};

const loadData = async () => {
  await getIp();
  getIpInfo(ip.value);
};

onMounted(() => {
  loadData();
});
</script>

<style lang="scss" scoped></style>
