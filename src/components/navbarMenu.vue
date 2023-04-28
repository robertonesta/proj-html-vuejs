<template>
    <nav class="d-flex py-4 text-center">
            <ul class="d-flex list-unstyled gap-5">
                <li v-for="section in store.navbar"><a :href="section.path">{{ section.name }}</a></li>
                <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
            </ul>
        </nav>
</template>

<script>
import {store} from "../assets/data/store";
export default {
    name: "navbarMenu",
    data () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>

nav{
    ul{
        justify-content: space-around;
        margin: auto;
        width: 60%;
    }
    a{
        text-decoration: none;
        color: black;
    }
}
</style>