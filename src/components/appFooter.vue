<template>
    <footerTop/>
    <footerBottom/>
    
</template>

<script>
import footerTop from './footerTop.vue';
import footerBottom from './footerBottom.vue';
export default {
    name: "appFooter",
    components: "footerTop, footerBottom",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>