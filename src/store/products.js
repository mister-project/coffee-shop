import { v4 as uuidv4 } from "uuid";

const products = {
  state: {
    bestsellers: [
      {
        id: uuidv4(), // id: 0,

        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        price: 10.73,
      },
      {
        id: uuidv4(),
        image: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        price: 15.99,
      },
      {
        id: uuidv4(),
        image: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        price: 6.99,
      },
    ],
    coffee: [
      {
        id: 0,

        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        // country: 'Brazil',
        price: 10.73,
      },
      {
        id: 1,

        image: "coffee-2.jpg",
        name: "Presto Coffee Beans 1kg",
        // country: 'Brazil',
        price: 15.99,
      },
      {
        id: 2,

        image: "coffee-3.jpg",
        name: "AROMISTICO Coffee 1kg",
        // country: 'Brazil',
        price: 6.99,
      },
      {
        id: 3,

        image: "coffee-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        // country: 'Brazil',
        price: 10.73,
      },
      {
        id: 4,

        image: "coffee-2.jpg",
        name: "Solimo Coffee Beans 2kg",
        // country: 'Brazil',
        price: 10.73,
      },
      {
        id: 5,

        image: "coffee-3.jpg",
        name: "Solimo Coffee Beans 2kg",
        // country: 'Brazil',
        price: 10.73,
      },
    ],
    goods: [
      {
        id: 0,
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 1,
        image: "good-1.jpg",
        name: "Presto Coffee Beans 1kg",
        country: "Brazil",
        price: 15.99,
      },
      {
        id: 2,
        image: "good-1.jpg",
        name: "AROMISTICO Coffee 1kg",
        country: "Brazil",
        price: 6.99,
      },
      {
        id: 3,
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 4,
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
      {
        id: 5,
        image: "good-1.jpg",
        name: "Solimo Coffee Beans 2kg",
        country: "Brazil",
        price: 10.73,
      },
    ],
  },
  getters: {
    getBestProducts(state) {
      return { bestsellers: state.bestsellers };
    },
    getCoffee(state) {
      return { coffee: state.coffee };
    },
    getGoods(state) {
      return { goods: state.goods };
    },
  },
};

export default products;
