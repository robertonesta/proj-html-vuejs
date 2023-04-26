<template>
    <header>
        <socialMenu></socialMenu>
    </header>
</template>

<script>
import socialMenu from "./socialMenu.vue"
export default {
    components: {
        socialMenu
    },
    name: "appHeader",
    setup () {
        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>