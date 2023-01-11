<template>
  <v-container>
    <section>
      <h1>Ближайшие туры</h1>
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
            cols="12"
            sm="4"
        >
          <v-card>
            <v-img
                src="https://edge.travelatacdn.ru/thumbs/640x480/upload/2015_33/content_hotel_56fe32097df1f0.39503861.jpg"
                height="200px"
            ></v-img>

            <v-card-title class="d-block">
              <v-rating
                  class="ma-0"
                  readonly
                  value="4"
                  length="4"
                  size="20"
                  color="amber"
                  dense
              ></v-rating>
              Continental Plaza Beach Resort
            </v-card-title>

            <v-card-subtitle>
              Шарм-Эль-Шейх, Египет
            </v-card-subtitle>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                <span class="d-flex align-center"><v-icon class="pr-1">mdi-paw</v-icon> Можно с животными</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  block
                  color="primary"
                  x-large
                  class="px-8"
              >
                <span><b>Заказать за 30870 руб.</b></span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
            cols="12"
            sm="4"
        >
          <v-card>
            <v-img
                src="https://edge.travelatacdn.ru/thumbs/640x480/upload/2015_33/content_hotel_56fe32097df1f0.39503861.jpg"
                height="200px"
            ></v-img>

            <v-card-title class="d-block">
              <v-rating
                  class="ma-0"
                  readonly
                  value="4"
                  length="4"
                  size="20"
                  color="amber"
                  dense
              ></v-rating>
              Continental Plaza Beach Resort
            </v-card-title>

            <v-card-subtitle>
              Шарм-Эль-Шейх, Египет
            </v-card-subtitle>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                <span class="d-flex align-center"><v-icon class="pr-1">mdi-paw</v-icon> Можно с животными</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  block
                  color="primary"
                  x-large
                  class="px-8"
              >
                <span><b>Заказать за 30870 руб.</b></span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
            cols="12"
            sm="4"
        >
          <v-card>
            <v-img
                src="https://edge.travelatacdn.ru/thumbs/640x480/upload/2015_33/content_hotel_56fe32097df1f0.39503861.jpg"
                height="200px"
            ></v-img>

            <v-card-title class="d-block">
              <v-rating
                  class="ma-0"
                  readonly
                  value="4"
                  length="4"
                  size="20"
                  color="amber"
                  dense
              ></v-rating>
              Continental Plaza Beach Resort
            </v-card-title>

            <v-card-subtitle>
              Шарм-Эль-Шейх, Египет
            </v-card-subtitle>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                <span class="d-flex align-center"><v-icon class="pr-1">mdi-paw</v-icon> Можно с животными</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  block
                  color="primary"
                  x-large
                  class="px-8"
              >
                <span><b>Заказать за 30870 руб.</b></span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
            cols="12"
            sm="4"
        >
          <v-card>
            <v-img
                src="https://edge.travelatacdn.ru/thumbs/640x480/upload/2015_33/content_hotel_56fe32097df1f0.39503861.jpg"
                height="200px"
            ></v-img>

            <v-card-title class="d-block">
              <v-rating
                  class="ma-0"
                  readonly
                  value="4"
                  length="4"
                  size="20"
                  color="amber"
                  dense
              ></v-rating>
              Continental Plaza Beach Resort
            </v-card-title>

            <v-card-subtitle>
              Шарм-Эль-Шейх, Египет
            </v-card-subtitle>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                <span class="d-flex align-center"><v-icon class="pr-1">mdi-paw</v-icon> Можно с животными</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  block
                  color="primary"
                  x-large
                  class="px-8"
              >
                <span><b>Заказать за 30870 руб.</b></span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
            cols="12"
            sm="4"
        >
          <v-card>
            <v-img
                src="https://edge.travelatacdn.ru/thumbs/640x480/upload/2015_33/content_hotel_56fe32097df1f0.39503861.jpg"
                height="200px"
            ></v-img>

            <v-card-title class="d-block">
              <v-rating
                  class="ma-0"
                  readonly
                  value="4"
                  length="4"
                  size="20"
                  color="amber"
                  dense
              ></v-rating>
              Continental Plaza Beach Resort
            </v-card-title>

            <v-card-subtitle>
              Шарм-Эль-Шейх, Египет
            </v-card-subtitle>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                <span class="d-flex align-center"><v-icon class="pr-1">mdi-paw</v-icon> Можно с животными</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  block
                  color="primary"
                  x-large
                  class="px-8"
              >
                <span><b>Заказать за 30870 руб.</b></span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
        <v-col
            cols="12"
            sm="4"
        >
          <v-card>
            <v-img
                src="https://edge.travelatacdn.ru/thumbs/640x480/upload/2015_33/content_hotel_56fe32097df1f0.39503861.jpg"
                height="200px"
            ></v-img>

            <v-card-title class="d-block">
              <v-rating
                  class="ma-0"
                  readonly
                  value="4"
                  length="4"
                  size="20"
                  color="amber"
                  dense
              ></v-rating>
              Continental Plaza Beach Resort
            </v-card-title>

            <v-card-subtitle>
              Шарм-Эль-Шейх, Египет
            </v-card-subtitle>
            <v-card-text>
              <div class="my-4 text-subtitle-1">
                <span class="d-flex align-center"><v-icon class="pr-1">mdi-paw</v-icon> Можно с животными</span>
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn
                  block
                  color="primary"
                  x-large
                  class="px-8"
              >
                <span><b>Заказать за 30870 руб.</b></span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: ['Возрастанию', 'Убыванию'],
  }),
}

</script>
