<template>
    <main>
        <jumboTron/>
        <foodieJournal/>
        <popularRecipes/>
    </main>
</template>

<script>
import jumboTron from "./jumboTron.vue"
import foodieJournal from "./foodieJournal.vue"
import popularRecipes from "./popularRecipes.vue"
export default {
    name: "appMain",
    components: {
        jumboTron,
        foodieJournal,
        popularRecipes
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>


</style>