<template>
    <div class="tweet-card card bg-light p-3">
        <div class="d-flex justify-content-between align-items-center">
            <h6>Tweets <span>by <a class="text-decoration-none" href="#">@Theme_Fusion</a></span></h6>
            <button class="bg-light border-0"><img src="../assets/img/image.svg" alt=""></button>
        </div>
        <div class="align-items-center d-flex justify-content-between">
            <div class="tweetImg">
                <img class="me-2" src="../assets/img/3a74ce3d0532b7773b174c45ca3bd05a_normal.png" alt="">
            </div>
            <div class="tweetNickname d-flex flex-column flex-grow-1">
                <h6 class="font-weight-bold m-0">ThemeFusion</h6>
                <span class="nickname">@Theme_Fusion</span>
            </div>
            <button class="bg-light border-0">
                <svg width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72"><path fill="none" d="M0 0h72v72H0z"/><path class="icon" fill="#e1e8ed" d="M68.812 15.14c-2.348 1.04-4.87 1.744-7.52 2.06 2.704-1.62 4.78-4.186 5.757-7.243-2.53 1.5-5.33 2.592-8.314 3.176C56.35 10.59 52.948 9 49.182 9c-7.23 0-13.092 5.86-13.092 13.093 0 1.026.118 2.02.338 2.98C25.543 24.527 15.9 19.318 9.44 11.396c-1.125 1.936-1.77 4.184-1.77 6.58 0 4.543 2.312 8.552 5.824 10.9-2.146-.07-4.165-.658-5.93-1.64-.002.056-.002.11-.002.163 0 6.345 4.513 11.638 10.504 12.84-1.1.298-2.256.457-3.45.457-.845 0-1.666-.078-2.464-.23 1.667 5.2 6.5 8.985 12.23 9.09-4.482 3.51-10.13 5.605-16.26 5.605-1.055 0-2.096-.06-3.122-.184 5.794 3.717 12.676 5.882 20.067 5.882 24.083 0 37.25-19.95 37.25-37.25 0-.565-.013-1.133-.038-1.693 2.558-1.847 4.778-4.15 6.532-6.774z"/></svg>
            </button>
        </div>
        <p class="ms-5 my-2">Do you need sublime WordPress hosting for your next website? Take advantage of exclusive partner offers that we have secured just for you, & launch your site in seconds with <a href="#">#avada</a> on WP Engine hosting & get 30% Off this Black Friday <a href="#">bit.ly/3kjLLE2</a> <span>#BlackFriday2020</span></p>
        <img src="../assets/img/En2TRxLW4AEiWUN.jpeg" class="rounded-1 ms-5" alt="">
        <div class=" icons d-flex align-items-center justify justify-content-between">
            <div class="left ms-5">
                <button class="bg-light border-0"><img src="../assets/img/image (2).svg" alt=""></button>
                <button class="bg-light border-0"><img src="../assets/img/image (3).svg" alt="">
                </button>                
            </div>
            <div class="right">
                <p class="mb-0">21h</p>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "tweetCard",
    setup() {


        return {store}
    }
}
</script>

<style lang="scss" scoped>
p{
    a{
        text-decoration: none;
    }
    span{
        color: #0d6efd;
    }

}
</style>