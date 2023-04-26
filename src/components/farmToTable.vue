<template>
    <div class="farmToTable_section container d-flex justify-content-between">
        <div class="farm_title">
            <h5 class="text-uppercase py-2">popular recipes</h5>
            <div class="row">
                <div class="col-9">
                    <span>Aliquam erat volutpat. Ut quis ligula a magna blandit finibus. Suspendisse maximus lacus non nunc lacinia lobortis.</span>
                </div>
            </div>
        </div>
        <div>
            <button class="btn text-light text-uppercase">Read our blog <i class="fa-solid fa-book-open-reader"></i></button>
        </div>
    </div>
    <div class="container">
        <div class="d-flex justify-content-around py-3">
            <div class="row">
                <div class="col-8">
                    <div class="left_pR bg-light flex-column">                        
                            <img src="../assets/img/single-post-img3-1200x790.jpg" class="w-100" alt="">                        
                            <div class="left_pR_text flex-column py-4">
                                <div class="text-center">
                                    <h4>Food Corner: Top Japanese Restaurants for Sushi</h4>
                                    <span>By admin | March 25th, 2019</span>
                                    <hr>
                                </div>
                                <p class="px-5">Suspendisse at semper odio. Nam fringilla scelerisque tincidunt. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tincidunt posuere ornare. Phasellus placerat odio non feugiat sollicitudin. Integer vitae elementum ex. Sed porttitor, diam eget convallis volutpat, arcu tellus facilisis nulla, id dignissim orci leo id diam. Vivamus tincidunt eros sed ligula ultricies tincidunt sit amet at mi.</p>
                                <div class="read_more d-flex align-items-center justify-content-between mx-5">
                                    <div class="left">
                                        <a class="no_style" href="">Read More ></a>
                                    </div>
                                    <div class="right"><i class="fa-solid fa-comments"></i> 0</div>
                                </div>
                            </div>
                    </div>
                    <div class="container text-center">
                        <div class="row">
                            <div class="col-6">
                                <img src="../assets/img/single-post-img3-400x263.jpg" alt="">
                                <h6>Food Corner: Top Japanese Restaurants for Sushi</h6>
                                <p>By Admin | March 25th, 2019</p>
                            </div>
                            <div class="col-6">
                                <img src="../assets/img/fi-roundup-400x263.jpg" alt="">
                                <h6>Roundup: My New Favourite Recipes for Healthy Living</h6>
                                <p>By Admin | March 25th, 2019</p>
                            </div>
                            <div class="col-6">
                                <img src="../assets/img/fi-toasts-400x263.jpg" alt="">
                                <h6>Why These Toasts with Tea are New Favourite</h6>
                                <p>By Admin | March 25th, 2019</p>
                            </div>
                            <div class="col-6">
                                <img src="../assets/img/single-post-img3-400x263.jpg" alt="">
                                <h6>Food Corner: Top Japanese Restaurants for Sushi</h6>
                                <p>By Admin | March 25th, 2019</p>
                            </div>
                            <div class="col-6">
                                <img src="../assets/img/fi-roundup-400x263.jpg" alt="">
                                <h6>Roundup: My New Favourite Recipes for Healthy Living</h6>
                                <p>By Admin | March 25th, 2019</p>
                            </div>
                            <div class="col-6">
                                <img src="../assets/img/fi-toasts-400x263.jpg" alt="">
                                <h6>Why These Toasts with Tea are New Favourite</h6>
                                <p>By Admin | March 25th, 2019</p>
                            </div>                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "farmToTable",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
.farmToTable_section{
    margin: 2rem auto;
    .btn{
        border: none;
        background-color: #fc7525;
    }
    .col-6{
        background-color: white;
    }
}


</style>