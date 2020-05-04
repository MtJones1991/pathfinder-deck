<template>
  <div class="home">
    <main>
      <b-row align-h="around">
        <b-col cols="4">
          <b-button variant="success" @click="this.criticalCard">Critical</b-button>
        </b-col>
        <b-col cols="4">
          <b-button variant="danger" @click="this.fumbleCard">Fumble</b-button>
        </b-col>
      </b-row>

      <div class="pt-4" v-if="this.showCard">
        <b-card no-body class="overflow-hidden" style="max-width: 540px;">
          <b-row no-gutters>
            <b-col md="6"></b-col>
            <b-card-img :src="this.currentCard.image" alt="Image" class="rounded-0"></b-card-img>
            <b-col md="6">
              <b-card-body :title="this.currentCardTitle">
                <b-card-text>
                  {{ this.currentCard.title }}
                  {{ this.currentCard.type }}
                  {{ this.currentCard.effect }}
                </b-card-text>
              </b-card-body>
            </b-col>
          </b-row>
        </b-card>
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import router from "../router.js";
// @ is an alias to /src

export default {
  name: "about",
  components: {},
  data() {
    return {
      currentCard: {},
      currentCardTitle: "",
      query: "",
      weather: {},
      showCard: false
    };
  },

  methods: {
    criticalCard() {
      this.showCard = true;
      this.currentCardTitle = "CRITICAL!";
      this.currentCard = this.$store.state.criticalCards[
        Math.floor(Math.random() * this.$store.state.criticalCards.length)
      ];

      console.log(this.currentCard);
      // USE THIS FUNCTION TO SET this.currentCard TO A RANDOM CARD FROM THE STATE
    },

    fumbleCard() {
      this.showCard = true;
      this.currentCardTitle = "FUMBLE!";
      this.currentCard = this.$store.state.fumbleCards[
        Math.floor(Math.random() * this.$store.state.fumbleCards.length)
      ];

      // USE THIS FUNCTION TO SET this.currentCard TO A RANDOM CARD FROM THE STATE
    }
  },

  computed: {}
};
</script>

<style scoped>
.search-box {
  width: 100%;
  margin-bottom: 30px;
}
</style>
