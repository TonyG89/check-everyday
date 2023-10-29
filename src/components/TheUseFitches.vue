<template>
  <h2>TheUseFitches</h2>
  <h3>Bluetooth</h3>
  <div>
    <button @click="requestDevice()">Request Bluetooth Device</button>
    <p>Is supported: {{ isSupportedBluetooth }}</p>
    <p>Is connected: {{ isConnected }}</p>
    <p>Device: {{ device?.name + ' ' + device?.id + ' ' + device?.gatt }}</p>
    <p>Server: {{ server }}</p>
  </div>
  <h3>eyeDropper</h3>
  <div>
      <button :disabled="!isSupported" @click="open">sRGBHex: {{ sRGBHex }}</button>
      <p>{{ sRGBHex }}</p>
  </div>
  <h3>
    deviceList
  </h3>
  Cameras: {{ cameras.length }}
  Microphones: {{ microphones.length }}
  Speakers: {{ speakers.length }}
</template>

<script setup>
import { useBluetooth } from '@vueuse/core';
import { useEyeDropper } from '@vueuse/core';
import { useDevicesList } from '@vueuse/core'

const {
  devices,
  videoInputs: cameras,
  audioInputs: microphones,
  audioOutputs: speakers,
} = useDevicesList()

const { isSupported, open, sRGBHex } = useEyeDropper();

const {
  isSupported: isSupportedBluetooth,
  isConnected,
  device,
  requestDevice,
  server,
} = useBluetooth({
  acceptAllDevices: true,
});
</script>

<style lang="scss" scoped></style>
