<script>
import AppHeader from "./components/appHeader.vue"
import AppMain from "./components/appMain.vue"
import AppFooter from "./components/appFooter.vue"

export default{
    components: {
        AppHeader,
        AppMain,
        AppFooter,
        
    },
    data(){
        return{
        }
    }
}
</script>

<template>
    <AppHeader/>
    <AppMain/>
    <AppFooter/>  
</template>

<style lang="scss" scoped>

</style>
