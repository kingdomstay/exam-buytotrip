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
                <v-text-field
                    label="Куда полетим?"
                    filled
                    prepend-inner-icon="mdi-earth"
                    hide-details="auto"
                ></v-text-field>
              </v-col>
              <v-col
                  cols="12"
                  sm="3"
              >
                <v-text-field
                    label="Вылет из"
                    filled
                    prepend-inner-icon="mdi-airplane-takeoff"
                    hide-details="auto"
                ></v-text-field>
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
                    label="Можно с животными"
                    hide-details="auto"
                ></v-checkbox>
              </v-col>
              <v-spacer></v-spacer>
              <v-col
              >
                <v-btn
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

      <section>
        <h2 class="mb-6 mt-2">Партнёрские туры</h2>
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
  </div>
</template>

<style>
  .title {
    color: #fff;
  }
</style>
