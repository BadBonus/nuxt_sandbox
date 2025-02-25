import {PerfectScrollbarPlugin} from 'vue3-perfect-scrollbar';
import 'vue3-perfect-scrollbar/style.css';

import {createVfm} from 'vue-final-modal'


export default defineNuxtPlugin((nuxtApp) => {
  const vfm = createVfm() as any;
  nuxtApp.vueApp.use(PerfectScrollbarPlugin);
  nuxtApp.vueApp.use(vfm)
});