<template>
  <q-layout view="LHh lpR lFf">
    <q-header
      class="row main_header justify-between"
      elevated
      reveal
      :reveal-offset="500"
      height-hint="98"
    >
      <div class="row col-12 col-md-7">
        <div class="col-2 q-pa-md lt-lg wrap_gamburger_menu">
          <div class="gamburger_menu" @click="leftDrawer" borde>
            <span class="line_gamburger"></span>
            <span class="line_gamburger"></span>
            <span class="line_gamburger"></span>
          </div>
        </div>
        <div class="column col-10 q-pa-md justify-between items-start">
          <span class="small_logo_font"
            >Свердловская областная коллегия адвокатов</span
          >
          <span class="big_logo_font">АДВОКАТЫ</span>
        </div>
      </div>
      <div class="column col-4 q-pa-md q-mr-sm gt-sm justify-around items-end">
        <span>(34394)2-34-94</span>
        <span>г.Красноуфимск ул Советская 35 б </span>
        <!-- <span>ivanrezanov@yandex.ru</span> -->
        <!-- <q-tabs align="left">
          <q-tab label="Page One" />
          <q-tab label="Page Two" />
          <q-tab label="Page Three" />
        </q-tabs> -->
      </div>
    </q-header>
    <div class="wrap_content row justify-center">
      <q-page-container>
        <q-page>
          <div class="content row justify-end">
            <div class="col-11 col-md-9 page">
              <router-view v-slot="{ Component }">
                <transition name="route_transition" mode="out-in">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </div>
    <q-drawer
      side="left"
      v-model="drawerLeft"
      bordered
      show-if-above
      :width="300"
      :breakpoint="1439"
    >
      <q-scroll-area class="fit">
        <q-list padding class="rounded-borders main_menu">
          <q-item
            :to="{ path: '/' }"
            clickable
            v-ripple
            :active="link === 'about'"
            @click="link = 'about'"
            active-class="active-main-menu-link"
          >
            О нас
          </q-item>
          <q-item
            clickable
            :to="{ path: 'uslugi' }"
            v-ripple
            :active="link === 'uslugi'"
            @click="link = 'uslugi'"
            active-class="active-main-menu-link"
          >
            Услуги
          </q-item>
          <!-- <q-item
            clickable
            v-ripple
            :active="link === 'specialists'"
            @click="link = 'specialists'"
            active-class="active-main-menu-link"
          >
            Специалисты
          </q-item> -->
          <!-- <q-item
            clickable
            v-ripple
            :active="link === 'contacts'"
            @click="link = 'contacts'"
            active-class="active-main-menu-link"
          >
            Контакты
          </q-item> -->
          <q-item
            clickable
            :to="{ path: 'faq' }"
            v-ripple
            :active="link === 'faq'"
            @click="link = 'faq'"
            active-class="active-main-menu-link"
          >
            Часто задаваемые вопросы
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-footer class="row lt-md footer q-pa-sm text-subtitle1 justify-between">
      <span>(34394)2-34-94</span>

      <span>г.Красноуфимск ул Советская 35 б </span>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      link: "about",
      drawerLeft: false,
    };
  },
  setup() {
    return {};
  },
  methods: {
    leftDrawer() {
      this.drawerLeft = true;
    },
  },
};
</script>
<style lang="scss">
@import "./styles/global_variables";
body,
html {
  font-family: Arial, Helvetica, sans-serif;
  -moz-box-sizing: border-box; /* Для Firefox */
  box-sizing: border-box; /* Ширина блока с полями */
}
.main_header {
  background-color: $bcgr_color_0 !important;
  color: $main_text_color !important;
  // border-bottom: 2px solid #000;
}
.main_header div {
  border: 0px solid red;
}
.big_logo_font {
  font-family: $font-family;
  font-size: 32px;
}
.wrap_gamburger_menu {
  position: relative;
  height: 100%;
  width: 100%;
  border: 0px solid red !important;
  align-content: center;
}
.gamburger_menu {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 50px;
  height: 50px;
  border: 0px solid green;
  padding-top: 11px;
  padding-left: 10px;
  border-radius: 50px;
  cursor: pointer;
}
.gamburger_menu:hover {
  background-color: $bcgr_color_1;
}
.line_gamburger {
  background-color: $main_text_color;
  display: block;
  width: 29px;
  height: 2px;
  margin-top: 5px;
}
.content {
  border: 0px solid red;
  width: 100vw;
  max-width: 1000px;
  // margin-top: 110px;
  min-height: calc(100vh - 150px);
  background-image: url(./assets/img/femida1.png);
  background-attachment: local;
  background-repeat: no-repeat;
  background-position: left top 50px;
  background-size: auto 400px;
}
.page {
  margin-top: 20px;
  border: 0px solid green;
  margin-right: 20px;
}

.main_menu {
  color: $bcgr_color_2;
  font-size: 16px !important;
}
.footer {
  background-color: $bcgr_color_2 !important;
  padding-left: 20px !important;
  padding-right: 20px !important;
}
.active-main-menu-link {
  color: #fff !important;
  background-color: $bcgr_color_2;
  cursor: default;
}

@media (max-width: 400px) {
  /* CSS-стили */
  .small_logo_font {
    font-size: 11px;
  }
}
@media (max-width: 1023px) {
  /* CSS-стили */
  .content {
    background: none;
  }
}
//Анимация перехода между route компонентов
.route_transition-inter-active {
  animation: main_route_in 0s;
}
.route_transition-leave-active {
  animation: main_route_out 0s;
}
@keyframes main_route_in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}
</style>
