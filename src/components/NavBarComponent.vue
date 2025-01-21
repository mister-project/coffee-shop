<template>
  <header>
    <ul
      class="header d-flex justify-content-center justify-content-md-start flex-wrap"
    >
      <li class="header__item">
        <router-link :to="links[0].link">
          <img
            :src="require(`@/assets/logo/${links[0].icon}`)"
            :alt="links[0].icon"
          />
        </router-link>
      </li>

      <!-- <link-page
        classLink="header__item"
        :text="links[1].text"
        :link="links[1].link"
      />
      <link-page
        classLink="header__item"
        :text="links[2].text"
        :link="links[2].link"
      />
      <link-page
        classLink="header__item"
        :text="links[3].text"
        :link="links[3].link"
      /> -->

      <nav-item
        :link="links[1].link"
        :text="links[1].text"
        classLink="header__item"
      ></nav-item>
      <nav-item
        :link="links[2].link"
        :text="links[2].text"
        classLink="header__item"
      ></nav-item>
      <nav-item
        :link="links[3].link"
        :text="links[3].text"
        classLink="header__item"
      ></nav-item>
    </ul>
  </header>
</template>

<script>
import NavItem from "./NavItem.vue";

export default {
  components: { NavItem },
  data() {
    return {
      links: [
        {
          id: 0,
          // text: '',
          link: "/",
          icon: "Logo.svg",
        },
        {
          id: 1,
          text: "Our coffee",
          link: "/our-coffee",
        },
        {
          id: 2,
          text: "For your pleasure",
          link: "/your-pleasure",
        },
        {
          id: 3,
          text: "Contact us",
          link: "/contact-us",
        },
      ],
    };
  },
};
</script>
