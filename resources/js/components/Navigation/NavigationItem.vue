<template>
    <li>
        <a
            :href="link"
            class="block py-2 px-3 text-white hover:bg-zinc-50 hover:text-zinc-900 rounded-sm transition ease-in-out delay-150 hover:scale-110 duration-300"
            aria-current="page"
            >{{ text }}</a
        >
    </li>
</template>

<script lang="ts" setup>
interface Props {
    text: string;
    link: string;
}
const { text, link } = defineProps<Props>();
</script>
