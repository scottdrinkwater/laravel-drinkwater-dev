<template>
    <nav class="bg-zinc-900">
        <div
            class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
        >
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <span class="text-2xl font-light text-white">S</span>
                <span class="text-2xl font-semibold text-white">D</span>
            </a>
            <button
                data-collapse-toggle="navbar-default"
                type="button"
                class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-50 rounded-lg md:hidden hover:bg-zinc-50 hover:text-zinc-900 focus:outline-none focus:ring-2 focus:ring-zinc-50"
                aria-controls="navbar-default"
                aria-expanded="false"
                @click="toggleNavigationItems()"
            >
                <span class="sr-only">Open main menu</span>
                <svg
                    class="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                >
                    <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 1h15M1 7h15M1 13h15"
                    />
                </svg>
            </button>
            <div
                :class="
                    (showNavigationItems ? '' : 'hidden') +
                    ' w-full md:block md:w-auto'
                "
                id="navbar-default"
            >
                <ul
                    class="font-medium flex flex-col p-4 md:p-0 mt-4 border rounded-lg bg-zinc-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-zinc-900 border-gray-50"
                >
                    <NavigationItem text="Home" link="/" />
                    <NavigationItem text="CV" link="/cv" />
                    <NavigationItem text="Portfolio" link="/portfolio" />
                    <NavigationItem text="Contact Me" link="/contact" />
                </ul>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import NavigationItem from "./NavigationItem.vue";
import { ref, Ref } from "vue";

const showNavigationItems: Ref<boolean> = ref(false);

const toggleNavigationItems = () => {
    showNavigationItems.value = !showNavigationItems.value;
};
</script>
