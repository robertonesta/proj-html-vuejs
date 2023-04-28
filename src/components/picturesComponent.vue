<template>
    <div class="container-fluid m-0">
        <div class="row">
            <div class="col d-flex">
                <img src="../assets/img/Yogurt-Nan-400x263.jpg" alt="">
                <img src="../assets/img/Mixed-fruits-400x263.jpg" alt="">
                <img src="../assets/img/r-rachel-park-366508-unsplash-min-400x263.jpg" alt="">
                <img src="../assets/img/r-michelle-tsang-500721-unsplash-min-400x263.jpg" alt="">
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
       width: 25%;
    }
}
</style>