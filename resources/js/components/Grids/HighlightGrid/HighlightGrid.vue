<template>
    <div
        class="grid grid-flow-row-dense grid-cols-3 text-lg text-center border-2 border-solid border-zinc-800"
    >
        <GridItem
            v-for="item in itemsWithAttributes"
            :key="item.text"
            :text="item.text"
            :text-colour="item.textColour"
            :background-colour="item.backgroundColour"
            :highlight-text-colour="item.highlightTextColour"
            :highlight-background-colour="item.highlightBackgroundColour"
        />
    </div>
</template>

<script lang="ts" setup>
import { isEven } from "@/utils/number";
import GridItem from "./GridItem.vue";

interface Props {
    items: string[];
}
const { items } = defineProps<Props>();

const itemsWithAttributes = items.map((item, key) => ({
    text: item,
    textColour: isEven(key) ? "zinc-50" : "zinc-900",
    backgroundColour: isEven(key) ? "zinc-800" : "zinc-50",
    highlightTextColour: "zinc-50",
    highlightBackgroundColour: "pink-900",
}));
</script>
