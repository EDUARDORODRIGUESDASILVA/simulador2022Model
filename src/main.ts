import { SimuladorMainApp } from './app/main.app'

(async () => {
  const simuladorApp = new SimuladorMainApp()
  await simuladorApp.run()
})()
