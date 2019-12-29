#!/usr/bin/env node

const mqtt = require('mqtt').connect('mqtt://127.0.0.1', {
  keepalive: 1,
  will: { topic: 'client-001/status', payload: 'offline' }
})

mqtt.on('connect', () => {
  console.log('MQTT connected')
  mqtt.publish('client-001/status', 'online')
})

setInterval(() => {
  let c = 0
  for (i = 0; i < 10000; i++) for (j = 0; j < 10000; j++) c++
  console.log(c)
}, 500)
