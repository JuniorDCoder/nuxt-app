<template>
    <div class="mt-7 card max-w-sm mx-auto text-center">
        <p class="mt-7 text-7xl font-bold">
            {{ error.statusCode }}
        </p>
        <p class="text-6xl mt-7">
            Ooops
        </p>
        <p class="mt-7">
            {{ error.message }}
        </p>
        <button class="btn my-7" @click="handleClearError">Go Home...</button>
    </div>
</template>

<script setup>
    defineProps(['error'])

    const handleClearError = () => clearError({redirect: '/'})
</script>

<style scoped>

</style>