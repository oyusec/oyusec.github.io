<template>
  <v-row class="mx-3">
    <v-col cols="12" class="text-center">
      <h2 style="letter-spacing: 0.3px" class="font-press f-15">
        [ {{ $t("competitionHistory") }} ]
      </h2>
    </v-col>
    <v-col cols="12">
      <v-simple-table dark>
        <thead>
          <tr>
            <th
              v-for="tab in $t('userTab.profile.competitionTab')"
              :key="tab.name"
              class="text-center"
              v-text="tab.name"
            />
          </tr>
        </thead>
        <tbody>
          <tr v-for="(comp, ind) in profile.competitions" :key="ind">
            <td class="text-center">
              <v-icon v-if="comp.place === 1">mdi-crown-outline</v-icon>
              <template v-else>
                {{ comp.place }}
              </template>
            </td>
            <td class="text-center" v-text="comp.name" />
            <td class="text-center" v-text="comp.score" />
            <td class="text-center" v-text="comp.rating" />
          </tr>
        </tbody>
      </v-simple-table>
    </v-col>
  </v-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      profile: "user/getProfile",
    }),
  },
};
</script>
