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

</style>