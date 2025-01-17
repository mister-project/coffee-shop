<template>
    <main>
        <div class="banner goodspage-banner">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <nav-bar-component/>  
                    </div>
                </div>
                <h1 class="title-big">For your pleasure</h1>
            </div>
        </div>
        <section class="shop">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 offset-2">
                        <img class="shop__girl" src="@/assets/img/coffee_goods.jpg" alt="girl">
                    </div>
                    <div class="col-lg-4">
                        <div class="title">About our beans</div>
                        <img class="beanslogo" src="@/assets/logo/Beans_logo_dark.svg" alt="Beans logo">
                        <div class="shop__text">
                            Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                            <br><br>
                            Afraid at highly months do things on at. Situation recommend objection do intention<br>
                            so questions. <br>
                            As greatly removed calling pleased improve an. Last ask him cold feel<br>
                            met spot shy want. Children me laughing we prospect answered followed. At it went<br>
                            is song that held help face.
                        </div>
                    </div>
                </div>
    
                <div class="line"></div>
    
                <div class="row">
                    <div class="col-lg-10 offset-lg-1">
                        <div class="shop__wrapper">
                            <div class="shop__item">                                
                                <img :src="require(`@/assets/img/${goods[0].icon}`)" :alt="goods[0].icon">
                                <div class="shop__item-title">
                                {{goods[0].text}}
                                </div>
                                <div class="shop__item-country">{{goods[0].country}}</div>
                                <div class="shop__item-price">{{goods[0].price}}$</div>
                            </div>
                            <div class="shop__item">                                
                                <img :src="require(`@/assets/img/${goods[1].icon}`)" :alt="goods[1].icon">
                                <div class="shop__item-title">
                                {{goods[1].text}}
                                </div>
                                <div class="shop__item-country">{{goods[1].country}}</div>
                                <div class="shop__item-price">{{goods[1].price}}$</div>
                            </div>
                            <div class="shop__item">                                
                                <img :src="require(`@/assets/img/${goods[2].icon}`)" :alt="goods[2].icon">
                                <div class="shop__item-title">
                                {{goods[2].text}}
                                </div>
                                <div class="shop__item-country">{{goods[2].country}}</div>
                                <div class="shop__item-price">{{goods[2].price}}$</div>
                            </div>
                            <div class="shop__item">                                
                                <img :src="require(`@/assets/img/${goods[3].icon}`)" :alt="goods[3].icon">
                                <div class="shop__item-title">
                                {{goods[3].text}}
                                </div>
                                <div class="shop__item-country">{{goods[3].country}}</div>
                                <div class="shop__item-price">{{goods[3].price}}$</div>
                            </div>
                            <div class="shop__item">                                
                                <img :src="require(`@/assets/img/${goods[4].icon}`)" :alt="goods[4].icon">
                                <div class="shop__item-title">
                                {{goods[4].text}}
                                </div>
                                <div class="shop__item-country">{{goods[4].country}}</div>
                                <div class="shop__item-price">{{goods[4].price}}$</div>
                            </div>
                            <div class="shop__item">                                
                                <img :src="require(`@/assets/img/${goods[5].icon}`)" :alt="goods[5].icon">
                                <div class="shop__item-title">
                                {{goods[5].text}}
                                </div>
                                <div class="shop__item-country">{{goods[5].country}}</div>
                                <div class="shop__item-price">{{goods[5].price}}$</div>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    </main>
</template>
<script>
import NavBarComponent from '@/components/NavBarComponent.vue';
import ProductCard from '@/components/ProductCard.vue';

export default {
    components: {NavBarComponent, ProductCard},
    data() {
        return {
            goods: [
                {
                    id: 0,
                    icon: 'good-1.jpg',                     
                    text: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',                   
                    price: '10.73'
                    
                    
                },
                {
                    id: 1,
                    icon: 'good-1.jpg',                     
                    text: 'Presto Coffee Beans 1kg',
                    country: 'Brazil',
                    price: '15.99'
                },
                {
                    id: 2,
                    icon: 'good-1.jpg',                    
                    text: 'AROMISTICO Coffee 1kg',
                    country: 'Brazil',
                    price: '6.99'
                },
                {
                    id: 3,
                    icon: 'good-1.jpg',                    
                    text: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: '10.73'
                },
                {
                    id: 4,
                    icon: 'good-1.jpg',                    
                    text: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: '10.73'
                },
                {
                    id: 5,
                    icon: 'good-1.jpg',                    
                    text: 'Solimo Coffee Beans 2kg',
                    country: 'Brazil',
                    price: '10.73'
                },
                
            ]
        }
    }

}
</script>