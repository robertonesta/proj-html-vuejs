<template>
    <div class="footer_bottom p-3">
        <div class="d-flex align-items-center justify-content-between">
            <a href="#top" class="bg-dark"><i class="fa-solid fa-chevron-up"></i></a> 
            <span><i class="fa-regular fa-copyright"></i> Copyright 2023 | Nesta Roberto x Avada Food</span>
            <span></span>          
        </div>
    </div>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "footerBottom",
    setup () {
        return {store}
    }
}
</script>

<style lang="scss" scoped>

a{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    width: 50px;
    aspect-ratio: 1/1;
    text-decoration: none;
    color: white;
    &:hover{
        color: #fc7525;
    }
}
</style>