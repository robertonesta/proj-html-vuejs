<template>
    <div class="container-fluid m-0">
        <div class="row">
            <div class="col d-flex" v-for="n in 4">
                <img class="img-fluid" :src="`${store.image_path}${store.recipes[n - 1].image}`" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "picturesComponent",
    setup () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>
.col{
    padding: 0;

    img{
       width: 100%;
    }
}
</style>