const SmeeClient = require('smee-client')

const SMEESOURCE1=process.env.SMEESOURCE1
const HTTPTARGET1=process.env.HTTPTARGET1
const SMEESOURCE2=process.env.SMEESOURCE2
const HTTPTARGET2=process.env.HTTPTARGET2

const smee1 = new SmeeClient({
  source: SMEESOURCE1,
  target: HTTPTARGET1,
  logger: console
})

const smee2 = new SmeeClient({
  source: SMEESOURCE2,
  target: HTTPTARGET2,
  logger: console
})

const events1 = smee1.start()
const events2 = smee2.start()

// Stop forwarding events
//events.close()
