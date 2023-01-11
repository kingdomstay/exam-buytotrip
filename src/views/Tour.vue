<template>
  <v-container>
    <v-btn to="/search" class="mb-2" text color="primary">
      <span><v-icon class="pr-2">mdi-arrow-left</v-icon>Вернуться к результатам поиска</span>
    </v-btn>
    <v-row>
      <v-col
      cols="12"
      sm="5"
      >
        <v-carousel v-model="model">
          <v-carousel-item
              v-for="(color, i) in colors"
              :key="color"
          >
            <v-sheet
                :color="color"
                height="100%"
                tile
            >
              <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
              >
                <div class="text-h2">
                  Slide {{ i + 1 }}
                </div>
              </v-row>
            </v-sheet>
          </v-carousel-item>
        </v-carousel>
      </v-col>
      <v-col
      cols="12"
      sm="7"
      >
        <v-rating
            class="mt-6"
            readonly
            value="4"
            length="4"
            size="28"
            color="amber"
            dense
        ></v-rating>
        <h1>Continental Plaza Beach Resort</h1>
        <p>Continental Plaza Beach Resort (ex. Inter Plaza Beach) находится в городе Шарм-эль-Шейх. Отель имеет 598 номеров, состоит из 2-этажных зданий (4 лифта). Отель построен в 2006 году, последняя реновации в 2018 году. До центра города Шарм-эль-Шейх - 3,3 км. До Международного аэропорта Шарм-эль-Шейх (Sharm el-Sheikh International Airport) - 10 км.</p>
        <p class="text-h4"><b>12300 руб.</b></p>
        <v-dialog
            v-model="dialog"
            width="500"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
                color="primary" x-large
                v-bind="attrs"
                v-on="on"
            >
              Заказать
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Оставьте заявку на заказ
            </v-card-title>

            <v-card-text>
              <v-form>
                <v-text-field
                label="Ваше имя"
                >
                </v-text-field>
                <v-text-field type="email"
                    label="Ваш email"
                >
                </v-text-field>
                <v-text-field type="tel"
                    label="Ваш телефон"
                >
                </v-text-field>
              </v-form>
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                  color="primary"
                  text
                  @click="dialog = false"
              >
                Отправить
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <section>
          <h2 class="mt-4">Подробная информация</h2>
          На территории отеля работают 5 ресторанов:
          Главные рестораны Panorama и La Duna (07:00-10:00, 13:00-15:00, 16:30-21:00).
          Итальянский аля карт ресторан (19:00-21:00).
          Аля карт ресторан BBQ (19:00-21:00).
          Ресторан морепродуктов (19:00-21:00).
          Расписание работы основного ресторана:
          Panorama - завтрак (напитки подаются в стаканах) с 07:00-10:00, обед (напитки подаются в стаканах) с 12:30-14:30, ужин (напитки подаются в стаканах) с 18:30-21:30.
          La Duna - завтрак (напитки подаются в стаканах) с 07:00-09:30, обед (напитки подаются в стаканах) с 13:00-14:30, ужин (напитки подаются в стаканах) с 18:30-20:30.
          В ресторанах шведский стол. Во время ужина действует дресс-код (купальные костюмы, тапочки и шорты не допускаются).
          Бар:
          Бар Fayrouz (10:00-17:00).
          Бар All Season (10:00-17:00).
          Бар на пляже (10:00-17:00).
          Бар Lounge (10:00-23:00).
          Бар Belveder (10:00-23:00).
          Бар Aqua (10:00-16:00).
          Бар Cocktail (10:00-17:00).
          Система "Все включено" действует круглосуточно, включает напитки местного производства. Платно: импортные алкогольные напитки, напитки в бутылках, свежевыжатые соки, кальян и напитки в кальянной.

          В отеле 10 бассейнов:
          5 бассейнов для взрослых (один бассейн с подогревом в зимний период).
          5 детских бассейнов (один с подогревом в зимний период).
          Аквапарк (13 горок для взрослых и детей, часы работы: 10:00-12:00/14:00-16:00, бассейн в аквапарке с подогревом в зимний период).

          Для развлечений отель предлагает дартс, анимацию, бильярд, дискотеку, живую музыку.
          Гости отеля могут ходить на дискотеку в Continental Garden Reef Resort, вход бесплатный, напитки платно.

          Для детей: 5 детских бассейнов (один с подогревом в зимний период), аквапарк (13 горок для взрослых и детей, часы работы: 10:00-12:00/14:00-16:00), детский клуб для детей от 4 до 12 лет (часы работы: 10:00-13:00/15:00-17:00), детская анимация, детская игровая площадка, детская дискотека, детская кроватка по запросу (бесплатно), детские стулья в ресторане.

          Особенности отеля:
          Ванная комната с душевой кабиной или ванной.
          В номере балкон или терраса.
          В отеле предоставляют инвалидное кресло для гостей с ограниченными физическими возможностями (по запросу, бесплатно).
          Наполнение мини-бара: По системе "все включено": 1 бесплатное заполнение по заезду.
          Wi-Fi - в лобби, 9$/час.

          Примечание: Администрация отеля оставляет за собой право вносить любые изменения в концепцию отеля, в том числе о наборе платных/бесплатных услуг без предварительного уведомления. Мы просим предварительно уточнять интересующую Вас информацию.
        </section>
        <section>
          <h2 class="mt-4 mb-2">Отзывы</h2>
          <v-form>
            <v-row>
              <v-col>
                <v-text-field
                    filled
                  label="Оставьте свой отзыв"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn type="submit" color="primary">
                  <span>Отправить</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
          <v-card class="mb-4">
            <v-card-title>Любовь Борисовна</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores excepturi neque quas ullam. Dolor nobis quisquam suscipit? Ducimus error, esse ex harum incidunt laudantium magni possimus rem repellat sapiente, similique.
            </v-card-text>
          </v-card>
          <v-card>
            <v-card-title>Любовь Борисовна</v-card-title>
            <v-card-text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores excepturi neque quas ullam. Dolor nobis quisquam suscipit? Ducimus error, esse ex harum incidunt laudantium magni possimus rem repellat sapiente, similique.
            </v-card-text>
          </v-card>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: [
      'primary',
      'secondary',
      'yellow darken-2',
      'red',
      'orange',
    ],
    dialog: false,
  }),
}
</script>
