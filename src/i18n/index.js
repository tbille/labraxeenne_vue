import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Fr from './fr.json'
import En from './en.json'

Vue.use(VueI18n)

const messages = {
  en: En,
  fr: Fr
}

export default new VueI18n({
  locale: 'fr', // set locale
  messages // set locale messages
})
