<template>
    <div class="farmToTable_section container d-flex justify-content-between">
        <div class="farm_title">
            <h5 class="text-uppercase py-2">farm to table</h5>
            <div class="row">
                <div class="col-9">
                    <span>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</span>
                </div>
            </div>
        </div>
        <div>
            <button class="btn text-light text-uppercase">Read our blog <i class="fa-solid fa-book-open-reader"></i></button>
        </div>
    </div>
    <div class="container">
        <div class="d-flex justify-content-around py-3">
            <div class="row">
                <div class="col-8">
                    <div class="left_fTT bg-light flex-column">                        
                            <img :src="`${store.image_path}${store.posts[0].image}`" class="w-100" alt="">                        
                            <div class="fTT_text flex-column py-4">
                                <div class="text-center">
                                    <h4>{{store.posts[0].title}}</h4>
                                    <span>{{store.posts[0].creator}} | {{store.posts[0].date}}</span>
                                    <hr>
                                </div>
                                <p class="px-5">{{store.posts[0].article}}</p>
                                <div class="read_more d-flex align-items-center justify-content-between mx-5">
                                    <div class="left">
                                        <a class="no_style" href="">Read More ></a>
                                    </div>
                                    <div class="right"><i class="fa-solid fa-comments"></i> 0</div>
                                </div>
                            </div>
                    </div>
                    <div class="container text-center py-3">
                        <div class="row ">
                            <div class="col-6 my-3 bg-light" v-for="n in store.posts.length - 1">
                                <div class="box">
                                    <img :src="`${store.image_path}${store.posts[n].image}`" class="w-100" alt="">
                                    <div class="fTT_text p-3">
                                        <h5>{{store.posts[n].title}}</h5>
                                        <p>{{store.posts[n].creator}} | {{store.posts[n].date}}</p>
                                    </div>
                                </div>
                            </div> 
                            <button class="load_button border-0 text-uppercase "><strong>Load more posts</strong></button>                            
                        </div>
                    </div>
                </div>
                <div class="col-4">
                    <div class="ad_card mb-5 d-flex justify-content-center text-center position-relative">
                        <img src="../assets/img/ad-bg.jpg" class="w-100" alt="">
                        <div class="ad_text position-absolute">
                            <h4 class="text-uppercase">View our latest recipes</h4>                 
                        </div>
                    </div>
                    <div class="ad_card mb-5 d-flex flex-column justify-content-center text-center position-relative">
                        <img src="../assets/img/singapore-featured-image-400x263.jpg" class="w-100" alt="">
                        <div class="Singapore_text position-absolute">
                            <h4 class="text-light">City Guide: Singapore</h4>
                        </div>
                        <button class="city_guides border-0 text-light py-2 text-uppercase"><i class="fa-solid fa-earth-americas"></i> View all city guides</button>                 
                    </div>
                    <hr>
                    <div class="input-group my-5">
                        <span class="input-group-text px-1 border-end-0" id="search_icon">
                          <i class="fa-solid fa-magnifying-glass"></i>
                        </span>
                        <input type="search" class="form-control border-start-0 search_bg" placeholder="Search...">
                    </div>
                    <div>
                        <h6 class="orange_text">Follow Us</h6>
                        <div class="socials_right">
                            <ul class="d-flex list-unstyled gap-3 my-3">
                                <li class="border-none" v-for="app in store.apps"><a :href="app.path"></a><font-awesome-icon :icon="app.social"/></li>
                            </ul>
                        </div>
                    </div>
                    <div class="d-flex py-3">
                        <button class="popular bg-light w-50 py-3">Popular</button>
                        <button class="recent w-50">Recent</button>
                    </div>
                    <div class="popular_posts">
                        <ul class="list-unstyled">
                            <li v-for="n in 3">
                                <div class="p-2 align-items-center d-flex">
                                    <div class="postImg">
                                        <img :src="`${store.image_path}${store.posts[n - 1].image}`" alt="">
                                    </div>
                                    <div class="mx-2 d-flex flex-column flex-grow-1">
                                        <div class="text"><p>{{store.posts[n - 1].title}}</p></div>
                                        <span>{{store.posts[n - 1].date}}</span>
                                    </div>                  
                                </div>                                
                            </li>
                        </ul>
                    </div>
                    <tweetCard/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
import tweetCard from "./tweetCard.vue"
export default {
    name: "farmToTable",
    components: {
        tweetCard,
    },
    setup () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>
.farmToTable_section{
    margin: 3rem auto;
    .btn{
        border: none;
        background-color: #fc7525;
    }
    .load_button{
        background-color: #afafaf;
    }
}
.ad_text{
        top: 50%;
        right: 50%;
        transform: translate(50%, -50%);
        width: 40%;
    }
.Singapore_text{
    top: 50%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.718);
    padding: 0.75rem 1.5rem;
}
.city_guides{
    background-color: #fc7525;
}
.orange_text{
    color:#fc7525;
}
.socials_right{
    li{
        border: none;
        background-color: transparent;
    }
}
.popular, .recent{
    border: 1px solid #afafaf;
    font-size: 1.2rem;
}
.popular_posts{
    img{
        border-radius: 50%;
        width: 55px;
        aspect-ratio: 1 / 1;
        object-fit: cover;
    }
}

</style>