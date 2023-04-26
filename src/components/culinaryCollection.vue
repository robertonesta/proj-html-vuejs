<script>
export default {
    name: "culinaryCollection",
    setup () {
        

        return {}
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
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img/drinks-recipes.png" alt="">
                        <span class="text-uppercase">drinks</span>
                    </div>
                </div>
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img/soups-recipes.png" alt="">
                        <span class="text-uppercase">soup</span>
                    </div>
                </div>
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img/baking-recipes.png" alt="">
                        <span class="text-uppercase">bakery</span>
                    </div>
                </div>
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img/dinner-recipes.png" alt="">
                        <span class="text-uppercase">dinner</span>
                    </div>
                </div>
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img/healthy-recipes.png" alt="">
                        <span class="text-uppercase">healthy</span>
                    </div>
                </div>
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img//staff-picks.png" alt="">
                        <span class="text-uppercase">staff picks</span>
                    </div>
                </div>
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img/premium-recipes.png" alt="">
                        <span class="text-uppercase">appetisers</span>
                    </div>
                </div>
                <div class="col px-2 py-1">
                    <div class="box">
                        <img src="../assets/img/quick-easy-recipes.png" alt="">
                    <span class="text-uppercase">quick and easy</span>
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
    }
}
    
</style>