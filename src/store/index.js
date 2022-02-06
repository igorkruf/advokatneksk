import { createStore } from "vuex";
import uslugi from "./uslugi";
import faqs from "./faq";
import sotrudniki from "./sotrudniki";
// import users from './Users/users';
export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    uslugi,
    faqs,
    sotrudniki,
  },
  //для того что-бы напрямую не менять значение в STORE
  strict: process.env.NODE_ENV !== "production",
});
