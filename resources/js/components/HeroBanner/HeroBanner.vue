<template>
    <div class="content mx-auto">
        <div class="border-b border-b-zinc-900 pb-5 pt-5">
            <h1 class="lg:text-9xl text-5xl text-center">
                <slot name="heading" />
            </h1>
            <h2 class="lg:text-6xl text-3xl text-center p-3">
                <slot name="subheading" />
            </h2>
        </div>
    </div>
</template>
