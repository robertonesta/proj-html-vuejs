<template>
    <div class="popularRecipes_section container my-5">
        <div class="popularRecipes_title text-center py-3">
            <h5 class="text-uppercase">popular recipes</h5>
            <span>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</span>
        </div>
        <div class="d-flex justify-content-around py-1">
            <div class="row">
                <div class="col-6">
                    <div class="left_pR bg-light flex-column">                        
                            <img src="../assets/img/Yogurt-Nan-600x395.jpg" class="w-100" alt="">                        
                            <div class="left_pR_text flex-column py-4">
                                <div class="text-center">
                                    <h4>Lunch Favourite with Salad, Naan and Beans</h4>
                                    <span>Bakery, Featured, Healthy, Latest Recipes, Staff Picks</span>
                                    <hr>
                                </div>
                                <p class="px-5">Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.</p>
                                <button class="btn text-light text-uppercase">learn more</button>
                            </div>
                    </div>
                </div>
                <div class="col-6">
                    <div class="row">
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/Mixed-fruits-200x132.jpg" alt=""></div>
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/r-rachel-park-366508-unsplash-min-200x132.jpg" alt=""></div>
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/r-michelle-tsang-500721-unsplash-min-200x132.jpg" alt=""></div>
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/quick-summer-drink-460x295.jpg" alt=""></div>
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/r-maarten-van-den-heuvel-400626-unsplash-min-460x295.jpg" alt=""></div>
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/perfect-cosmopolitan-460x295.jpg" alt=""></div>
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/fi2x-6-460x295.jpg" alt=""></div>
                        <div class="col-6 py-1"><img class="w-100" src="../assets/img/r-brooke-lark-96398-unsplash-min-460x295.jpg" alt=""></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "popularRecipes",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.left_pR{
    display: flex;
    justify-content: center;
    align-items: center;
    .left_pR_text{
        display: flex;
        button{
            background-color: #fc7525;
            border: none;
            width: 150px;
            margin: 1rem 3rem;
        }
        hr{
            border-top: 1px dotted;
            width: 630px;   
        }

    }

}

</style>