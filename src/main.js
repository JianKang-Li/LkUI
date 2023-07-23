import "@/assets/main.css"
import { createApp } from 'vue'
import App from './App.vue'

import LkButton from "./components/LkButton"

const components = [
  LkButton
]

const app = createApp(App)

const install = function (app) {

  components.forEach(component => {
    app.component(component.name, component);
  });
}

install(app)

app.mount('#app')
