<template>
    <div
        :class="
            'p-10 transition ease-in-out hover:delay-150 hover:duration-300 hover:round ' +
            cssColourClasses
        "
    >
        {{ text }}
    </div>
</template>

<script lang="ts" setup>
interface Props {
    text: string;
    textColour?: string;
    backgroundColour?: string;
    highlightTextColour?: string;
    highlightBackgroundColour?: string;
}
const {
    text,
    textColour,
    backgroundColour,
    highlightTextColour,
    highlightBackgroundColour,
} = withDefaults(defineProps<Props>(), {
    textColour: "zinc-50",
    backgroundColour: "zinc-800",
    highlightTextColour: "zinc-50",
    highlightBackgroundColour: "pink-900",
});
const cssColourClasses = `bg-${backgroundColour} text-${textColour} hover:text-${highlightTextColour} hover:bg-${highlightBackgroundColour}`;
</script>
