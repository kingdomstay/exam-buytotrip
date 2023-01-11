<template>
  <v-app>
    <v-app-bar
        app
        color="cyan darken-4"
        dark
    >
      <div class="d-flex align-center">
        <v-img
            alt="Vuetify Name"
            class="shrink mt-1 hidden-sm-and-down"
            contain
            min-width="100"
            src="/img/logo.png"
            width="160"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
          class="mx-2"
          to="/"
          text
      >
        <span>Главная</span>
      </v-btn>
      <v-btn
          class="mx-2"
          to="/now-tours"
          text
      >
        <span>Ближайшие туры</span>
      </v-btn>
      <v-btn
          class="mx-2"
          to="/about"
          text
      >
        <span>Привет, Кирилл</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
    <v-footer padless class="mt-6">
      <v-col
          class="text-center"
          cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>BuyToTrip</strong>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
