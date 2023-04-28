<script>
import {store} from "../assets/data/store";
export default {
    name: "socialMenu",
    setup () {
        return {store}
    }
}
</script>

<template>
    <div class="container d-flex justify-content-between align-items-center">
        <div class="socials_left d-flex justify-content-between align-items-center">
            <ul class="list-unstyled gap-3 my-3 d-flex justify-content-between align-items-center">
                <li><a class="text-decoration-none text-dark" href="#">Download App </a>
                <button class="text-light btn">iOS</button></li>
                <li><a class="text-decoration-none text-dark" href="#">Advertise with us</a></li>
            </ul>
        </div>
        <div class="socials_right">
            <ul class="d-flex list-unstyled gap-3 my-3">
                <li v-for="app in store.apps"><a :href="app.path"></a><font-awesome-icon :icon="app.social"/></li>
            </ul>
        </div>
    </div>
</template>

<style lang="scss" scoped>


</style>