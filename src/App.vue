<template>
  <div class="wrapper">
    <div class="container">
      div.
      <h1 class="bg-red-900 mb-10">Hello! What do you want to check?</h1>
      <van-button plain type="danger" loading-type="spinner" @click="loadData"
        ><h3 class="text-2xl">refresh all datas</h3></van-button
      >
      <WeatherView />
      <NBUView @loadData="loadData" />
      <CryptoCoinView />
      <MyIpView />
    </div>
    <div>
      <CalendarView />
    </div>
  </div>
</template>

<script setup>
import WeatherView from './components/WeatherView.vue';
import MyIpView from './components/MyIpView.vue';
import CryptoCoinView from './components/CryptoCoinView.vue';
import CalendarView from './components/CalendarView.vue';
import NBUView from './components/NBUView.vue';

const env = import.meta.env;
console.log(env);

const loadData = (payload) => {
  console.log(payload);
};
</script>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
h2 {
  margin-top: 2rem;
}
</style>
