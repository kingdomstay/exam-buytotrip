<template>
  <v-container>
    <v-btn to="/search" class="mb-2" text color="primary">
    </v-btn>
    <v-row>
      <v-col
      cols="12"
      sm="5"
      >
        <v-img :src="item.hotel_image">

        </v-img>
      </v-col>
      <v-col
      cols="12"
      sm="7"
      >
        <!--<v-rating
            class="mt-6"
            readonly
            value="4"
            length="4"
            size="28"
            color="amber"
            dense
        ></v-rating>-->
        <h1>{{item.hotel}}</h1>
        <p>{{item.description}}</p>
        <p class="text-h4"><b>{{item.price}}0 руб.</b></p>
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
          <p>{{item.full_description}}</p>
        </section>
        <section>
          <h2 class="mt-4 mb-2">Отзывы</h2>
          <v-form>
            <v-row>
              <v-col>
                <v-text-field
                    filled
                    v-model="custom_comment"
                  label="Оставьте свой отзыв"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-btn @click="postComment" color="primary">
                  <span>Отправить</span>
                </v-btn>
              </v-col>
            </v-row>
          </v-form>
          <v-card v-for="comment in comments" :key="comment.id" class="mb-4">
            <v-card-title>{{comment.name}}</v-card-title>
            <v-card-text>
              {{comment.text}}
            </v-card-text>
          </v-card>
        </section>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

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
    item: null,
    comments: null,
    custom_comment: null
  }),
  created() {
    console.log(this.$route.params.id)
    axios
        .get(`https://63be6212f5cfc0949b564539.mockapi.io/api/tours/${this.$route.params.id}`)
        .then(res => {
          this.item = res.data;
        })
    axios
        .get(`https://63be6212f5cfc0949b564539.mockapi.io/api/tours/${this.$route.params.id}/comments`)
        .then(res => {
          this.comments = res.data;
        })
  },
  methods: {
    refreshComments () {
      axios
          .get(`https://63be6212f5cfc0949b564539.mockapi.io/api/tours/${this.$route.params.id}/comments`)
          .then(res => {
            this.comments = res.data;
          })
    },
    postComment () {
      axios
          .post(`https://63be6212f5cfc0949b564539.mockapi.io/api/tours/${this.$route.params.id}/comments`, {
            name: 'Кирилл',
            text: this.custom_comment
          })
          .then(() => {
            this.refreshComments()
          })
    }
  }
}
</script>
