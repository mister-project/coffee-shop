const coffee = {
  state: {
    coffee: [
      // {
      //   id: 0,
      //   image: "coffee-1.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   // country: 'Brazil',
      //   price: 10.73,
      // },
      // {
      //   id: 1,
      //   image: "coffee-2.jpg",
      //   name: "Presto Coffee Beans 1kg",
      //   // country: 'Brazil',
      //   price: 15.99,
      // },
      // {
      //   id: 2,
      //   image: "coffee-3.jpg",
      //   name: "AROMISTICO Coffee 1kg",
      //   // country: 'Brazil',
      //   price: 6.99,
      // },
      // {
      //   id: 3,
      //   image: "coffee-1.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   // country: 'Brazil',
      //   price: 10.73,
      // },
      // {
      //   id: 4,
      //   image: "coffee-2.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   // country: 'Brazil',
      //   price: 10.73,
      // },
      // {
      //   id: 5,
      //   image: "coffee-3.jpg",
      //   name: "Solimo Coffee Beans 2kg",
      //   // country: 'Brazil',
      //   price: 10.73,
      // },
    ],
  },
  mutations: {
    setCoffeeData(state, data) {
      state.coffee = data;
    },
  },
  actions: {
    setCoffeeData({ commit }, data) {
      commit("setCoffeeData", data);
    },
  },

  getters: {
    getCoffee(state) {
      return state.coffee;
    },
    // getProductById(state) {
    //   return (id) => {
    //     return state.coffee.find((card) => card.id === +id);
    //   };
    // },
    getCoffeeById(state) {
      return (id) => {
        return state.coffee.find((card) => card.id === +id);
      };
    },
  },
};

export default coffee;
