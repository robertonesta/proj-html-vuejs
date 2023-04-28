<template>
    <div class="footerTop">
        <div class="container d-flex">
            <div class="row">
                <div class="col-3 dashedborder">
                    <img src="../assets/img/avada-food-logo-mob-2x.png" class="w-100" alt="">
                    <div class="socials_right">
                        <ul class="d-flex list-unstyled gap-3 my-3">
                            <li class="btn"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                            <li class="btn"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                            <li class="btn"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                            <li class="btn"><a href="#"><i class="fa-brands fa-youtube"></i></a></li>
                        </ul>
                    </div>
                </div>
                <div class="col-3 dashedborder">
                    <ul class="list-unstyled">
                        <li v-for="n in store.navbar.length - 1">{{store.navbar[n].name}}</li>                        
                    </ul>
                </div>
                <div class="col-3 dashedborder">
                    <div class="contacts_title">
                        <h6 class="text-uppercase">contact</h6>
                    </div>
                    <div class="contacts">
                        <ul class="list-unstyled">
                            <li><i class="fa-solid fa-location-dot"></i> 775 New York Ave, Brooklyn, Kings, New York 11203 </li>
                            <li><i class="fa-solid fa-phone-flip"></i>+0100-505-0000</li>
                            <li><i class="fa-solid fa-envelope"></i>info@your-domain.com</li>
                        </ul>
                    </div>
                </div>
                <div class="col-3">
                    <div class="app_download_title">
                        <h6 class="text-uppercase">get our app!</h6>
                        <button class="border-0 p-0 bg-transparent mb-2"><img class="w-100" src="../assets/img/download-android-200x66.png" alt=""></button>
                        <button class="border-0 p-0 bg-transparent mb-2"><img class="w-100" src="../assets/img/download-app-store-200x66.png" alt=""></button>                      
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "footerTop",
    setup() {


        return {store}
    }
}
</script>

<style lang="scss" scoped>
.footerTop{
    padding: 5rem 0;
    background-color: white;
    .col-3{
        padding: 0 2.5rem;
        .socials_right{
            a{
                color: grey
            }
        }
    }
    .dashedborder{
        border-right: 1px dashed rgb(200, 200, 200);
    }
    h6{
        margin-bottom: 1rem;
        color: #fc7525;
    }
    ul{
        li{
            font-weight: bold;
            margin: 1rem 0;
        }
    }
    .contacts{
        ul{
            li{
                display: flex;
                align-items: flex-start;
                font-weight: normal;
                color: grey;
                i{
                    margin-top: 6px;
                    margin-right: 1rem;
                }
            }
        }
    }
}
</style>