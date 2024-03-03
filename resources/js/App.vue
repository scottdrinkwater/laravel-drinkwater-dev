<template>
    <router-view v-slot="{ Component, route }">
        <div :key="route.name">
            <Navigation />
            <Component :is="Component" />
        </div>
    </router-view>
</template>

<script setup>
import Navigation from "./components/Navigation/NavigationBar.vue";
</script>
