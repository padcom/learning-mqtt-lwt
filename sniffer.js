#!/usr/bin/env node

const mqtt = require('mqtt').connect('mqtt://127.0.0.1')

mqtt.on('message', (topic, value) => {
  console.log(topic, value.toString())
})

mqtt.on('connect', () => {
  console.log('MQTT Connected')
  mqtt.subscribe('client-001/#')
})
