import { createApp } from 'vue'
import App from './App.vue'


//Router
import router from "./router/index.js"

//PrimeVue
import PrimeVue from "primevue/config";

//Theme
import "primevue/resources/primevue.min.css"

//PrimeVue Material Design Theme
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

//Toast Service
import ToastService from "primevue/toastservice";

//PrimeVue Components
import Toolbar from "primevue/toolbar";
import Button from "primevue/button";
import Card from "primevue/card";
import SelectButton from "primevue/selectbutton";
import InputText from "primevue/inputtext";
import Divider from "primevue/divider"
import Avatar from "primevue/avatar";
import Dialog from "primevue/dialog";
import Message from "primevue/message";
import Sidebar from "primevue/sidebar";
import Listbox from "primevue/listbox";
import Splitter from "primevue/splitter";
import SplitterPanel from "primevue/splitterpanel";
import Menu from "primevue/menu";
import Column from "primevue/column";
import DataTable from 'primevue/datatable';
import Toast from "primevue/toast";
import InputNumber from "primevue/inputnumber";
import Calendar from "primevue/calendar";

//i18n support
import i18n from "./i18n"
createApp(App)
    .use(router)
    .use(PrimeVue, {ripple:true})
    .use(ToastService)
    .use(i18n)
    .component("pv-list-box",Listbox)
    .component('pv-splitter',Splitter)
    .component('pv-splitter-panel',SplitterPanel)
    .component("pv-sidebar",Sidebar)
    .component("pv-input-text",InputText)
    .component("pv-data-table",DataTable)
    .component("pv-button",Button)
    .component("pv-column",Column)
    .component("pv-toast",Toast)
    .component("pv-toolbar",Toolbar)
    .component("pv-menu",Menu)
    .component("pv-avatar", Avatar)
    .component("pv-divider",Divider)
    .component("pv-select-button", SelectButton)
    .component("pv-card",Card)
    .component("pv-dialog",Dialog)
    .component("pv-message",Message)
    .component("pv-input-number",InputNumber)
    .component("pv-calendar",Calendar)
    .mount('#app')
