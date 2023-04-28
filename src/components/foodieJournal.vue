<template>
    <div class="foodiejournal_section container">
        <div class="foodie_title d-flex justify-content-center align-items-center py-3">
            <div class="stick"></div>
            <h6 class="text-uppercase mx-3">Foodie Journal</h6>
            <div class="stick"></div>
        </div>
        <div class="d-flex text-center justify-content-around">      
            <div class="row">
                <div class="col-4" v-for="n in 3">
                    <div class="img-wrapper position-relative">
                        <img class="img-fluid" :src="`${store.image_path}${store.posts[n - 1].image}`" alt="">
                        <div>
                            <button class="rounded-circle d-flex justify-content-center align-items-center text-secondary border-0"><font-awesome-icon icon="fa-solid fa-link" /></button>
                            <span>{{store.posts[n - 1].title}}</span>                                                        
                        </div>
                    </div>
                    <h6>{{store.posts[n - 1].title}}</h6>
                    <p>{{store.posts[n - 1].creator}} | {{store.posts[n - 1].date}}</p>
                </div>
            </div>                  
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "foodieJournal",
    data () {
        

        return {store}
    },
}
</script>

<style lang="scss" scoped>
.foodiejournal_section{
    font-family: 'Playfair Display', serif;
    background-color: white;
    margin-top: -3rem;
    margin-bottom: 2rem;
    .img-wrapper{
        &:hover div{
            display: flex;          
        }
        div{
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            position: absolute;
            color: white;
            display: none;
            background: linear-gradient(180deg, #d5401792,#fc7525);
            button{
                display: flex;
                justify-content: center;
                align-items: center;
                width: 40px;
                aspect-ratio: 1/1;
            }
        }        
    }
    .stick{
    width: 34rem;
    height: 1px;
    background-color: rgb(163, 161, 161);
}
}


</style>