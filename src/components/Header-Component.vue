<template>
    <header>
        <div class="wrapper">
            <img class="logo" src="https://www.freepnglogos.com/uploads/rick-and-morty-png/rick-and-morty-portal-shoes-white-clothing-zavvi-23.png" alt="Rick and Morty logo">
            <nav>
                <router-link class="navItem" to="/">{{ $t('home') }}</router-link>
                <router-link class="navItem" to="/characters">{{ $t('characters') }}</router-link>
                <router-link class="navItem" to="/locations">{{ $t('locations') }}</router-link>
                <router-link class="navItem" to="/episodes">{{ $t('episodes') }}</router-link>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>

.wrapper {
    display: flex;
    place-items: center;
    flex-wrap: wrap;
}
.logo {
    width: 50px;
    height: auto;
}

.navItem {
    margin-left: 1rem;
    text-decoration: none;
    color: #fff;
}

router-link{
    padding: 0 1rem;
}

</style>