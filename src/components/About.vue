<template>
  <div>
    <div class="before">
      Свердловская областная коллегия адвокатов - старейшая адвокатская коллегия
      Свердловской области. Авторитетные и опытные адвокаты. Пожалуй,
      единственная организация, на адвокатов которой можно положиться и доверять
      им.
    </div>
    <sotrudniki />
  </div>
</template>
<script>
import Sotrudniki from "./Sotrudniki.vue";
export default {
  components: {
    Sotrudniki,
  },
};
</script>
<style lang="scss" scoped>
.before {
  margin-bottom: 50px;
  text-align: justify;
}
</style>