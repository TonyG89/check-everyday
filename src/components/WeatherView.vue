<template>
  <div>
    <h2>WEATHER</h2>
    <van-cell title="Location:" :value="location[0]?.name"  />
    <van-cell title="Temperature:" :value="temp?.main?.temp+'°C'"  />
    <van-cell title="Feeling:" :value="temp?.main?.feels_like+'°C'"  />
    <van-cell title="Humidity:" :value="temp?.main?.humidity+'%'"  />
    <!-- <h1>{{ location[0]?.name }}</h1> -->
  </div>
</template>

<script setup>
import { ref } from 'vue';

const apiKey = import.meta.env.VITE_APIKEY_OPENWEATHERMAP;
const lat = '50.49316397640854';
const lon = '30.598097093562785';
const limit = '5';
const city = 'Kyiv';

const location = ref(null);
const temp = ref(null);

location.value = fetch(
  `http://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=${limit}&appid=${apiKey}`
)
  .then((res) => res.json())
  .then((data) => {
    location.value = data;
  });
  
temp.value = fetch(
  `${import.meta.env.VITE_WEATHER_URL_OPENWEATHERMAP}/weather?q=${city}&appid=${apiKey}&units=metric`
).then((res) =>
  res.json().then((data) => {
    temp.value = data;
  })
);

</script>

<style lang="scss" scoped></style>
