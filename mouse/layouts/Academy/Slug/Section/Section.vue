<template>
  <v-card class="user-bg font-play mt-5" elevation="12">
    <v-card-title class="py-3">
      <span>Бүлгүүд</span>
    </v-card-title>
    <v-card-text>
      <v-btn
        v-for="(section, i) in sections"
        :key="section.name"
        class="mt-3"
        elevation="1"
        :class="{ active: ind === i }"
        small
        block
        style="text-transform: none; justify-content: space-between"
        @click="$store.commit('academy/SET_ACTIVE_SECTION', i)"
      >
        <span class="f-15 align-left" v-text="section.name" />
        <v-icon v-if="section.completed" right color="primary">
          mdi-checkbox-marked</v-icon
        >
        <v-icon v-else right color="primary">
          mdi-checkbox-blank-outline</v-icon
        >
      </v-btn>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      sections: "academy/getSections",
      ind: "academy/getActiveSection",
    }),
  },
};
</script>

<style lang="sass" scoped>
.theme
  &--light
    &:not(.active).v-btn.v-btn--has-bg
      background-color: $light-item-light !important
    .active
      background-color: $light-bg !important
  &--dark
    &:not(.active).v-btn.v-btn--has-bg
      background-color: $dark-bg !important
    .active
      background-color: $light-bg !important
.active, :not(.active).v-btn.v-btn--has-bg
  color: #fff !important
</style>
