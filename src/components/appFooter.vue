<template>
    <footerTop/>
    <footerBottom/>
    
</template>

<script>
import {store} from "../assets/data/store";
import footerTop from './footerTop.vue';
import footerBottom from './footerBottom.vue';
export default {
    name: "appFooter",
    components: {
        footerTop, footerBottom,
    },

    setup () {
        return {store}
    }
}
</script>

<style lang="scss" scoped>

</style>