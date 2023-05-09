import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from "@/locales/i18n";
import PrimeVue from 'primevue/config'
import './assets/main.css'


import Card from "primevue/card";
import Panel from 'primevue/panel';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import Dropdown from 'primevue/dropdown';
import Calendar from 'primevue/calendar';
import InputNumber from 'primevue/inputnumber';
import Textarea from 'primevue/textarea';
import Checkbox from 'primevue/checkbox';
import RadioButton from 'primevue/radiobutton';
import Toolbar from "primevue/toolbar";


const app = createApp(App)

import 'primevue/resources/themes/md-light-indigo/theme.css';
import 'primevue/resources/primevue.min.css';
import 'primeicons/primeicons.css';

app.use(i18n);
app.use(router)
app.use(PrimeVue);
app.mount('#app')
app.component('Toolbar', Toolbar);
app.component('Card', Card);
app.component('Button', Button);
app.component('Panel', Panel);
app.component('InputText', InputText);
app.component('InputMask', InputMask);
app.component('Dropdown', Dropdown);
app.component('Calendar', Calendar);
app.component('InputNumber', InputNumber);
app.component('Textarea', Textarea);
app.component('Checkbox', Checkbox);
app.component('RadioButton', RadioButton);
