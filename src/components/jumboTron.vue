<template>
    <div class="jumbo_bg position-relative">
        <div class="little_cards position-absolute">
            <div class="d-flex flex-column justify-content-center align-items-center bg-white rounded-1"><i class="fa-solid fa-folder"></i> Demos</div>
            <div class="d-flex flex-column justify-content-center align-items-center bg-white rounded-1">
                <p class="m-0 text-success fw-bold"><span>$</span>39</p>
                <p class="m-0">On Sale</p>
            </div>
        </div>                
        <div class="jumbo_text d-flex flex-column align-items-center text-center">   
            <div class="jumbo_pin text-uppercase py-1">
                <h6>Today's Pick</h6>
            </div>         
            <h2>Food Corner: Top japanese Restaurants for sushi</h2>
            <p>March 25, 2019</p>            
        </div>

    </div>    
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "jumboTron",
    setup () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>


</style>