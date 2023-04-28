<script>
import {store} from "../assets/data/store";
export default {
    name: "culinaryCollection",
    setup () {
        

        return {store}
    }
}
</script>

<template>
    <div class="culinaryCollection_section container my-5">
        <div class="culinaryCollection_title text-center py-3">
            <h5 class="text-uppercase py-2">culinary collection</h5>
            <span>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</span>
        </div>
        <div class="d-flex justify-content-around py-1">
            <div class="row row-cols-4">
                <div class="col px-2 py-1" v-for="recipe in store.culinary_collection">
                    <div class="box">
                        <img :src="`${store.image_path}${recipe.image}`" alt="">
                        <span class="text-uppercase">{{recipe.title}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.col{    
    .box{
        display: flex;
        flex-direction: column;
        justify-content: center;
        text-align: center;
        background-color: white;
        img{
            margin: 0 auto;
            width: 100px;
        }
        span:hover{
            color: white;
            background-color: #fc7525;
        }
    }
}
    
</style>