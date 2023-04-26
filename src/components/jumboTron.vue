<template>
    <div class="jumbo_bg">                
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
export default {
    name: "jumboTron",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.jumbo_bg{
    justify-content: center;
    display: flex;
    background-image: url(../assets/img/single-post-img3-1200x790.jpg);
    background-size: cover;
    background-position: center;
    height: 650px;
   
    .jumbo_text{
        padding: 2rem;
        background-color: white;
        width: 60%;
        margin: auto;
        .jumbo_pin{
            padding: 0 1rem;
            margin-top: -3rem;
            transform: translate(0%, -0%);
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