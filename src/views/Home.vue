<template>
  <div>
    <v-img
        style="overflow: visible"
        class="d-flex align-end"
        src="/hero_cover.jpg"
        max-height="350"
    >
      <v-container style="padding-bottom: -50px; margin-bottom: -25px;">
        <h1 class="title mt-10 text-h4 mb-3">Поиск дешёвых путешествий от <b><i>BuyToTrip</i></b></h1>
        <v-sheet
            class="rounded-xl"
            color="white"
            rounded
            elevation="5"
        >
          <v-form class="pa-6">
            <v-row>
              <v-col
                  cols="12"
                  sm="3"
              >
                <v-autocomplete
                    v-model="dest_select"
                    :loading="dest_loading"
                    :items="dest_items"
                    :search-input.sync="dest_search"
                    flat
                    hide-no-data
                    label="Куда полетим?"
                    filled
                    prepend-inner-icon="mdi-earth"
                    hide-details="auto"
                ></v-autocomplete>
              </v-col>
              <v-col
                  cols="12"
                  sm="3"
              >
                <v-autocomplete
                    v-model="dep_select"
                    :loading="dep_loading"
                    :items="dep_items"
                    :search-input.sync="dep_search"
                    flat
                    hide-no-data
                    label="Вылет из"
                    filled
                    prepend-inner-icon="mdi-airplane-takeoff"
                    hide-details="auto"
                ></v-autocomplete>
              </v-col>
              <v-col
                  cols="12"
                  sm="3"
              >
                <v-text-field
                    label="Дата вылета"
                    filled
                    prepend-inner-icon="mdi-calendar"
                    type="date"
                    hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="2"
              >
                <v-checkbox
                    v-model="pets"
                    label="Можно с животными"
                    hide-details="auto"
                ></v-checkbox>
              </v-col>
              <v-spacer></v-spacer>
              <v-col
              >
                <v-btn
                    :to="'/search?depAero=' + dep_select + '&destination=' + dest_select + '&pets=' + pets"
                    fab
                    color="primary"
                    elevation="0"
                >
                  <v-icon>mdi-magnify</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
        </v-sheet>
      </v-container>
    </v-img>
    <v-container>
      <v-alert
          class="mt-6"
          border="top"
          color="primary"
          dark
      >
        <p>
          Добро пожаловать на наш сайт-агрегатор туров, где вы можете найти лучшие предложения на пакеты отдыха.
        </p>
        <p>
          Мы сделали все возможное, чтобы сравнить цены и варианты от различных поставщиков туров, чтобы вы могли найти идеальный отдых по идеальной цене. Наш интуитивно понятный интерфейс и расширенные фильтры поиска позволяют быстро и легко найти то, что вам нужно.
        </p>
      </v-alert>

      <section>
        <h2 class="mb-6 mt-2 text-center d-none">Почему мы?</h2>
        <v-row
            class="mt-4"
            justify="center"
        >
          <v-col cols="12" sm="3">
            <p class="text-h3 cyan--text text--darken-3"><b>5000+</b></p>
            <span class="text-h5">покупок через наш сервис</span>
          </v-col>
          <v-col cols="12" sm="3">
            <p class="text-h3 cyan--text text--darken-3"><b>1500+</b></p>
            <span class="text-h5">положительных отзывов</span>
          </v-col>
          <v-col cols="12" sm="3">
            <p class="text-h3 cyan--text text--darken-3"><b>больше 1000</b></p>
            <span class="text-h5">людей доверяют нам уже в течение 5 лет работы на рынке</span>
          </v-col>
        </v-row>
      </section>

      <section v-if="partners && partners.length">
        <h2 class="mb-6 mt-2">Партнёрские туры</h2>
        <v-row>
          <v-col
              v-for="tour in partners" :key="tour.id"
              cols="12"
              sm="4"
          >
            <v-card>
              <v-img
                  :src="tour.hotel_image"
                  height="200px"
              ></v-img>

              <v-card-title class="d-block">
<!--                <v-rating
                    class="ma-0"
                    readonly
                    value="4"
                    length="4"
                    size="20"
                    color="amber"
                    dense
                ></v-rating>-->
                {{tour.hotel}}
              </v-card-title>

              <v-card-subtitle>
                {{tour.destination}}
              </v-card-subtitle>
              <v-card-text>
                <div class="my-4 text-subtitle-1" v-if="tour.pets">
                  <span class="d-flex align-center"><v-icon class="pr-1">mdi-paw</v-icon> Можно с животными</span>
                </div>
              </v-card-text>
              <v-card-actions>
                <v-btn
                    :to="'/tour/' + tour.id"
                    block
                    color="primary"
                    x-large
                    class="px-8"
                >
                  <span><b>Заказать за {{tour.price}}0 руб.</b></span>
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </section>
    </v-container>
  </div>
</template>

<style>
  .title {
    color: #fff;
  }
</style>

<script>
import axios from "axios";

export default {
  data: () => ({
    partners: [],
    dep_loading: false,
    dep_items: [],
    dep_search: null,
    dep_select: null,

    dest_loading: false,
    dest_items: [],
    dest_search: null,
    dest_select: null,

    pets: false
  }),
  watch: {
    dep_search(val) {
      val && val !== this.dep_select && this.querySelectionsDep(val)
    },
    dest_search(val) {
      val && val !== this.dest_select && this.querySelectionsDest(val)
    },
  },
  created() {
    axios
        .get('https://63be6212f5cfc0949b564539.mockapi.io/api/tours?is_partner=true')
        .then(response => {
          this.partners = response.data
        })
  },
  methods: {
    querySelectionsDep () {
      this.dep_loading = true
      this.dep_items = axios
          .get('https://63be6212f5cfc0949b564539.mockapi.io/api/tours')
          .then(response => {
            this.dep_items = response.data.map((item) => (item.depAero))
            console.log(this.dep_items)
            this.dep_loading = false
          })
    },
    querySelectionsDest () {
      this.dest_loading = true
      this.dest_items = axios
          .get('https://63be6212f5cfc0949b564539.mockapi.io/api/tours')
          .then(response => {
            this.dest_items = response.data.map((item) => (item.destination))
            console.log(this.dest_items)
            this.dest_loading = false
          })
    }
  }
}
</script>
