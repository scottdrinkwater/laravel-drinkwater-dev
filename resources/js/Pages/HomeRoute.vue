<template>
    <div class="content mx-auto">
        <HeroBanner>
            <template #heading>SCOTT&nbsp;<strong>DRINKWATER</strong></template>
            <template #subheading>SOFTWARE ENGINEER</template>
        </HeroBanner>
        <HighlightGrid :items="skills" />
    </div>
</template>

<script setup>
import HeroBanner from "../components/HeroBanner/HeroBanner.vue";
import HighlightGrid from "../components/Grids/HighlightGrid/HighlightGrid.vue";

const skills = [
    "TypeScript",
    "Laravel",
    "Vue.js",
    "React",
    "Express",
    "AWS",
    "PHP",
    "Symfony",
    "MySQL",
    "ElasticSearch",
    "Redis",
    "MongoDB",
];
</script>
