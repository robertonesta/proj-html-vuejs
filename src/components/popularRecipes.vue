<template>
    <div class="popularRecipes_section container my-5">
        <div class="popularRecipes_title text-center py-3">
            <h5 class="text-uppercase py-2">popular recipes</h5>
            <span>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</span>
        </div>
        <div class="d-flex justify-content-around py-1">
            <div class="row">
                <div class="col-6">
                    <div class="left_pR bg-light flex-column"> 
                        <div class="img-wrapper position-relative">
                            <img :src="`${store.image_path}${store.recipes[0].image}`" class="w-100" alt=""> 
                            <div>
                                <button class="rounded-circle d-flex justify-content-center align-items-center text-secondary border-0"><font-awesome-icon icon="fa-solid fa-link" /></button>
                                <span>{{store.recipes[0].second_title}}</span>                                
                            </div>                       
                        </div>                       
                            <div class="left_pR_text flex-column py-4">
                                <div class="text-center">
                                    <h4>{{store.recipes[0].title}}</h4>
                                    <span>{{store.recipes[0].second_title}}</span>
                                    <hr>
                                </div>
                                <p class="px-5">{{store.recipes[0].article}}</p>
                                <button class="btn text-light text-uppercase">learn more</button>
                            </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6 py-1" v-for="n in store.recipes.length - 1">
                            <img class="w-100" :src="`${store.image_path}${store.recipes[n].image}`" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "popularRecipes",
    setup () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>
.left_pR{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Playfair Display', serif;
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
    .left_pR_text{
        display: flex;
        button{
            background-color: #fc7525;
            border: none;
            width: 150px;
            margin: 1rem 3rem;
        }
        hr{
            border-top: 1px dotted;
            width: 630px;   
        }
    }

}
</style>