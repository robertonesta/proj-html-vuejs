<template>
    <header>
        <socialMenu></socialMenu>
        <div class="logo d-flex justify-content-center">
            <img src="../assets/img/avada-food-logo-2x.png" alt="">
        </div>
        <navbarMenu/>
    </header>
</template>

<script>
import {store} from "../assets/data/store";
import socialMenu from "./socialMenu.vue"
import navbarMenu from "./navbarMenu.vue"
export default {
    components: {
        socialMenu,
        navbarMenu,
    },
    name: "appHeader",
    setup () {
        return {store}
    }
}
</script>

<style lang="scss" scoped>


</style>