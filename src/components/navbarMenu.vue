<template>
    <nav class="d-flex py-4 text-center">
            <ul class="d-flex list-unstyled gap-5">
                <li><a href="">Home</a></li>
                <li><a href="">Recipes</a></li>
                <li><a href="">Places</a></li>
                <li><a href="">Blog</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Contact</a></li>
                <li><a href=""><i class="fa-solid fa-magnifying-glass"></i></a></li>
            </ul>
        </nav>
</template>

<script>
export default {
    name: "navbarMenu",
    setup () {
        

        return {}
    }
}
</script>

<style lang="scss" scoped>
nav{
    ul{
        justify-content: space-around;
        margin: auto;
        width: 60%;
    }
    a{
        text-decoration: none;
        color: black;
    }
}

</style>