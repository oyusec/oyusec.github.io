<template>
  <v-hover v-slot="{ hover }">
    <v-card class="user-bg" :elevation="hover ? 12 : 2">
      <v-card-title>
        <v-row align="center">
          <v-col cols="6" xs="6" sm="2" md="2" lg="2" xl="2">
            <v-progress-circular
              :size="100"
              :width="4"
              :value="100"
              class="big-small-circle"
            >
              <v-avatar size="90">
                <v-img v-if="top.user" :src="top.user.img"> </v-img>
              </v-avatar>
            </v-progress-circular>
          </v-col>
          <v-col cols="6" xs="6" sm="5" md="6" lg="5" xl="6">
            <span
              class="text-uppercase text-gray-400 f-15"
              v-text="$t('todayTopPlayer')"
            />
            <h3 v-if="top.user" v-text="top.user.fullname" />
          </v-col>
          <v-col cols="12" xs="6" sm="5" md="4" lg="5" xl="4">
            <v-row no-gutters>
              <v-col cols="5" class="text-uppercase text-gray-400 f-13">
                <h4 v-text="$t('challenge')" />
                <h4 v-text="$t('competition')" />
                <h4 v-text="$t('score')" />
              </v-col>
              <v-col cols="7" class="f-16">
                <h4 v-if="top" v-text="top.total_solved" />
                <h4 v-if="top" v-text="top.total_comp" />
                <h4 v-if="top" v-text="top.total_score" />
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-card-title>
    </v-card>
  </v-hover>
</template>

<script>
export default {
  data: () => ({
    top: {},
  }),
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data } = await this.$axios.get("api/challenges/today/top/");
      if (data.success) {
        this.top = data.data;
      }
    },
  },
};
</script>
<style lang="sass" scoped>
.v-card
  &:hover
    cursor: pointer !important
</style>
