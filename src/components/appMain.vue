<template>
    <main>
        <jumboTron/>
        <foodieJournal/>
        <popularRecipes/>
        <culinaryCollection/>

    </main>
</template>

<script>
import jumboTron from "./jumboTron.vue"
import foodieJournal from "./foodieJournal.vue"
import popularRecipes from "./popularRecipes.vue"
import culinaryCollection from "./culinaryCollection.vue"
export default {
    name: "appMain",
    components: {
        jumboTron,
        foodieJournal,
        popularRecipes,
        culinaryCollection,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>


</style>