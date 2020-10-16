import Vue from "vue";

import VueGoodshare from "vue-goodshare";

import VueGoodshareFacebook from "vue-goodshare/src/providers/Facebook.vue";
import VueGoodshareTwitter from "vue-goodshare/src/providers/Twitter.vue";
import VueGoodshareLinkedIn from "vue-goodshare/src/providers/LinkedIn.vue";
import VueGoodsharePinterest from "vue-goodshare/src/providers/Pinterest.vue";
import VueGoodshareReddit from "vue-goodshare/src/providers/Reddit.vue";
import VueGoodshareWhatsApp from "vue-goodshare/src/providers/WhatsApp.vue";
import VueGoodshareTelegram from "vue-goodshare/src/providers/Telegram.vue";
import VueGoodshareViber from "vue-goodshare/src/providers/Viber.vue";
import VueGoodshareEmail from "vue-goodshare/src/providers/Email.vue";

Vue.component("vue-goodshare-facebook", VueGoodshareFacebook);
Vue.component("vue-goodshare-twitter", VueGoodshareTwitter);
Vue.component("vue-goodshare-linkedin", VueGoodshareLinkedIn);
Vue.component("vue-goodshare-pinterest", VueGoodsharePinterest);
Vue.component("vue-goodshare-reddit", VueGoodshareReddit);
Vue.component("vue-goodshare-whatsapp", VueGoodshareWhatsApp);
Vue.component("vue-goodshare-telegram", VueGoodshareTelegram);
Vue.component("vue-goodshare-viber", VueGoodshareViber);
Vue.component("vue-goodshare-email", VueGoodshareEmail);

Vue.component("vue-goodshare", VueGoodshare);
