<template>
  <v-container>
    <section>
      <v-btn to="/" class="mb-2" text color="primary">
        <span><v-icon class="pr-2">mdi-arrow-left</v-icon>Вернуться к поиску</span>
      </v-btn>
      <h1>Найдено 10 туров</h1>
      <div class="d-flex align-center">
        <span class="mr-2">Сортировать по</span>
        <v-btn-toggle v-model="toggle_exclusive" dense>
          <v-btn>
            <v-icon>mdi-sort-ascending</v-icon>
          </v-btn>
          <v-btn>
            <v-icon>mdi-sort-descending</v-icon>
          </v-btn>
        </v-btn-toggle>
      </div>

      <v-switch
          class="d-inline-block"
          :label="`Можно с животными`"
      ></v-switch>
      <v-row>
        <v-col
            v-for="tour in items" :key="tour.id"
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
</template>

<script>
import axios from "axios";

export default {
  data: () => ({
    items: []
  }),
  created() {
    let urlParams = new URLSearchParams(window.location.search);
    axios
        .get(`https://63be6212f5cfc0949b564539.mockapi.io/api/tours?depAero=${urlParams.get('depAero')}&destination=${urlParams.get('destination')}&pets=${urlParams.get('pets')}`)
        .then(response => {
          this.items = response.data
        })
  }
}

</script>
/search?depAero=' + dep_select + '&destination=' + dest_select + '&pets=' + pets
