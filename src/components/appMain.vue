<template>
    <main>
        <jumboTron/>
        <foodieJournal/>
        <popularRecipes/>
        <culinaryCollection/>
        <farmToTable/>
        <SubscriptionComponent/>
        <picturesComponent/>

    </main>
</template>

<script>
import {store} from "../assets/data/store";
import jumboTron from "./jumboTron.vue"
import foodieJournal from "./foodieJournal.vue"
import popularRecipes from "./popularRecipes.vue"
import culinaryCollection from "./culinaryCollection.vue"
import farmToTable from "./FarmToTable.vue"
import SubscriptionComponent from "./subscriptionComponent.vue"
import picturesComponent from "./picturesComponent.vue"
export default {
    name: "appMain",
    components: {
    jumboTron,
    foodieJournal,
    popularRecipes,
    culinaryCollection,
    farmToTable,
    SubscriptionComponent,
    picturesComponent,
},
    setup () {
        

        return {store}
    }
}
</script>

<style lang="scss" scoped>


</style>