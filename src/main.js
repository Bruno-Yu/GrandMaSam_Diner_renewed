import { createApp } from 'vue';
import 'bootstrap';
import axios from 'axios';
import VueAxios from 'vue-axios';
// eslint-disable-next-line
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate';
import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import ModalMessage from '@/components/ModalMessage.vue';
// import PageLoading from '@/components/PageLoading.vue';
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import $httpMessageState from '@/libs/pushMessageState';
// import emitter from '@/libs/emitter';
import App from './App.vue';
import router from './router';

defineRule('required', required);
defineRule('email', email);
defineRule('min', min);
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});

setLocale('zh_TW');

const app = createApp(App);
app.config.globalProperties.$httpMessageState = $httpMessageState;
// app.config.globalProperties.emitter = emitter;
app.component('VForm', Form);
app.component('ModalMessage', ModalMessage);
// app.component('PageLoading', PageLoading);
app.component('PageLoading', Loading);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.use(VueAxios, axios);
app.mount('#app');
