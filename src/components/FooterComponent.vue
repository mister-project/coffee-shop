<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-lg-6 offset-lg-3">
                    <ul class="footer d-flex flex-wrap">
                        <!-- <li class="footer__item">
                            <router-link :to="links[0].link"><img :src="require(`@/assets/logo/${links[0].icon}`)"
                                    :alt="links[0].icon" /></router-link>
                        </li>
                  

                        <nav-item :link="links[1].link" :text="links[1].text" classLink="footer__item"></nav-item>
                        <nav-item :link="links[2].link" :text="links[2].text" classLink="footer__item"></nav-item>
                        <nav-item :link="links[3].link" :text="links[3].text" classLink="footer__item"></nav-item> -->
                        <nav-item :link="links.header.link" :text="links.header.text" classLink="footer__item">
                            <img :src="require(`@/assets/logo/${links.header.icon}`)" :alt="links.header.icon" />

                        </nav-item>

                        <nav-item v-for="link in links.other" :key="link.id" :link="link.link" :text="link.text"
                            classLink="footer__item"></nav-item>



                    </ul>
                </div>
            </div>
            <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo" />
        </div>
    </footer>
</template>

<script>
import NavItem from "@/components/NavItem.vue";

export default {
    components: { NavItem },
    data() {
        return {
            links: {
                header:
                {
                    id: 0,
                    // text: '',
                    link: "/",
                    icon: "Logo_black.svg",
                },
                other: [
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
            }
        };
    },
};
</script>