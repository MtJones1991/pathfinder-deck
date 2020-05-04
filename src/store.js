import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    weather: {},
    criticalCards: [{
        image: "https://picsum.photos/id/237/200",
        title: "Crit 1",
        type: "Magical",
        effect: "Jonesy made a sick app"
      },
      {
        image: "https://picsum.photos/id/238/200",
        title: "Crit 2",
        type: "Mele",
        effect: "Jonesy made an awesome app"
      },
      {
        image: "https://picsum.photos/id/239/200",
        title: "Crit 3",
        type: "Range",
        effect: "Oh shit another crit"
      },
      {
        image: "https://picsum.photos/id/231/200",
        title: "Crit 4",
        type: "Any",
        effect: "Random example"
      }
    ],
    fumbleCards: [{
        image: "https://picsum.photos/id/232/200",
        title: "Fail 1",
        type: "Magical",
        effect: "Jonesy made a sick app"
      },
      {
        image: "https://picsum.photos/id/233/200",
        title: "Fail 2",
        type: "Mele",
        effect: "Jonesy made an awesome app"
      },
      {
        image: "https://picsum.photos/id/234/200",
        title: "Fail 3",
        type: "Range",
        effect: "Oh shit another Fail"
      },
      {
        image: "https://picsum.photos/id/237/200",
        title: "Fail 4",
        type: "Any",
        effect: "Random example"
      }
    ]
  },
  mutations: {
    setWeather(state, payload) {
      Vue.set(state, "weather", payload);
    }
  },
  actions: {}
});