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
.jumbo_bg{
    z-index: -1;
    justify-content: center;
    display: flex;
    background-image: url(../assets/img/single-post-img3-1200x790.jpg);
    background-size: cover;
    background-position: center;
    height: 650px;
    .little_cards{
        top: 0;
        right: 1%;
        transform: translate(0, -75%);
        div{
            width: 65px;
            aspect-ratio: 1/1;            
            box-shadow: 0 0 10px 0 rgb(22, 53, 63);
            margin: 0.25rem 0;
            span{
                font-size: 10px;
                vertical-align: super;

            }
        }
    }   
    .jumbo_text{
        padding: 2rem;
        background-color: white;
        width: 60%;
        margin: auto;
        
        .jumbo_pin{
            padding: 0 1rem;
            margin-top: -3rem;
            background-color: #fc7525;
            color:white;
            h6{
                margin-bottom: 0;
            }
    }
        h2{
            font-size: 4rem;
        }
    }
}


</style>