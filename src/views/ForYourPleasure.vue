<template>
  <main>
    <div class="banner goodspage-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <nav-bar-component />
          </div>
        </div>

        <!-- Техт в шапке - H1 -->
        <head-text-component
          classHeadText="title-big"
          :text="headsText[0].text"
        />
      </div>
    </div>
    <section class="shop">
      <div class="container">
        <div class="row">
          <div class="col-lg-4 offset-2">
            <img
              class="shop__girl"
              src="@/assets/img/coffee_goods.jpg"
              alt="girl"
            />
          </div>
          <div class="col-lg-4">
            <div class="title">About our beans</div>
            <img
              class="beanslogo"
              src="@/assets/logo/Beans_logo_dark.svg"
              alt="Beans logo"
            />
            <div class="shop__text">
              Extremity sweetness difficult behaviour he of. On disposal of as
              landlord horrible.
              <br /><br />
              Afraid at highly months do things on at. Situation recommend
              objection do intention<br />
              so questions. <br />
              As greatly removed calling pleased improve an. Last ask him cold
              feel<br />
              met spot shy want. Children me laughing we prospect answered
              followed. At it went<br />
              is song that held help face.
            </div>
          </div>
        </div>

        <div class="line"></div>

        <div class="row">
          <div class="col-lg-10 offset-lg-1">
            <div class="shop__wrapper">
              <!-- <product-card classItem="shop__item" :name="goods[0].name" :price="goods[0].price"
                :image="goods[0].image" /> -->
              <product-card
                v-for="card in goods"
                :key="card.id"
                :name="card.name"
                :price="card.price"
                :image="card.image"
                classItem="shop__item"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
import HeadTextComponent from "@/components/HeadTextComponent.vue";
import NavBarComponent from "@/components/NavBarComponent.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { NavBarComponent, ProductCard, HeadTextComponent },
  data() {
    return {
      goods: [
        {
          id: 0,
          image: "good-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
        {
          id: 1,
          image: "good-1.jpg",
          name: "Presto Coffee Beans 1kg",
          country: "Brazil",
          price: "15.99",
        },
        {
          id: 2,
          image: "good-1.jpg",
          name: "AROMISTICO Coffee 1kg",
          country: "Brazil",
          price: "6.99",
        },
        {
          id: 3,
          image: "good-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
        {
          id: 4,
          image: "good-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
        {
          id: 5,
          image: "good-1.jpg",
          name: "Solimo Coffee Beans 2kg",
          country: "Brazil",
          price: "10.73",
        },
      ],
      headsText: [
        {
          text: "For your pleasure",
        },
      ],
    };
  },
};
</script>
