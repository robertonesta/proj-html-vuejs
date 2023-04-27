<template>
    <main>
        <jumboTron/>
        <foodieJournal/>
        <popularRecipes/>
        <culinaryCollection/>
        <farmToTable/>
        <SubscriptionComponent/>

    </main>
</template>

<script>
import jumboTron from "./jumboTron.vue"
import foodieJournal from "./foodieJournal.vue"
import popularRecipes from "./popularRecipes.vue"
import culinaryCollection from "./culinaryCollection.vue"
import farmToTable from "./FarmToTable.vue"
import SubscriptionComponent from "./subscriptionComponent.vue"
export default {
    name: "appMain",
    components: {
    jumboTron,
    foodieJournal,
    popularRecipes,
    culinaryCollection,
    farmToTable,
    SubscriptionComponent
},
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>


</style>