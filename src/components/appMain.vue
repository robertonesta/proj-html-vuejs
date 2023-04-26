<template>
    <main>
        <jumboTron/>
        <foodieJournal/>
    </main>
</template>

<script>
import jumboTron from "./jumboTron.vue"
import foodieJournal from "./foodieJournal.vue"
export default {
    name: "appMain",
    components: {
        jumboTron,
        foodieJournal,
    },
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>


</style>