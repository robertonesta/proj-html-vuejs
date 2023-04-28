<template>
    <div class="foodiejournal_section container">
        <div class="foodie_title d-flex justify-content-center align-items-center py-3">
            <div class="stick"></div>
            <h6 class="text-uppercase mx-3">Foodie Journal</h6>
            <div class="stick"></div>
        </div>
        <div class="d-flex text-center justify-content-around">      
            <div class="row">
                <div class="col-4">
                    <img src="../assets/img/single-post-img3-400x263.jpg" alt="">
                    <h6>Food Corner: Top Japanese Restaurants for Sushi</h6>
                    <p>By Admin | March 25th, 2019</p>
                </div>
                <div class="col-4">
                    <img src="../assets/img/fi-roundup-400x263.jpg" alt="">
                    <h6>Roundup: My New Favourite Recipes for Healthy Living</h6>
                    <p>By Admin | March 25th, 2019</p>
                </div>
                <div class="col-4">
                    <img src="../assets/img/fi-toasts-400x263.jpg" alt="">
                    <h6>Why These Toasts with Tea are New Favourite</h6>
                    <p>By Admin | March 25th, 2019</p>
                </div>              
            </div>                  
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "foodieJournal",
    setup () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>
.foodiejournal_section{
    background-color: white;
    margin-top: -3rem;
    margin-bottom: 2rem;
    .stick{
    width: 34rem;
    height: 1px;
    background-color: rgb(163, 161, 161);
}
}


</style>