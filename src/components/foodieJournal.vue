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
                    <img class="img-fluid" :src="`${store.image_path}${store.posts[n - 1].image}`" alt="">
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