<script setup>
import IconGithub from '@/components/icons/IconGithub.vue'
import NavBar from '@/components/navbar/NavBar.vue'
import { RouterLink } from 'vue-router';
import { ref } from 'vue'

const isMenuOpen = ref(false)

</script>

<template>
    <div class="text-white bg-green-600" >
        <div class="relative mx-auto max-w-6xl px-6 md:px-12 xl:px-0">
            <header class="relative flex items-center justify-between py-12">
                <RouterLink class="md:flex md:items-end " to="/" >
                    <h1 class="text-2xl font-bold">Expectativa Siembra ETL</h1>
                </RouterLink>
                <div class="relative z-10 md:hidden">
                    <button
                        @click="isMenuOpen = !isMenuOpen"
                        class="focus:outline-none block transition duration-150 ease-in-out"
                    >
                        <svg class="h-6 w-6 fill-current" stroke="currentColor" fill="white" viewBox="0 0 24 24">
                            <path
                                :class="{
                                    hidden: isMenuOpen,
                                    'inline-flex': !isMenuOpen,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                            <path
                                :class="{
                                    hidden: !isMenuOpen,
                                    'inline-flex': isMenuOpen,
                                }"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <div v-if="isMenuOpen">
                        <NavBar class="absolute top-20 right-0 z-50 -mt-4 whitespace-nowrap rounded bg-white px-6 pb-6 shadow-xl" />
                    </div>
                </div>
                <div class="hidden items-center text-white md:flex">
                    <a class="mr-5 flex items-center hover:text-gray-800" target="_blank"href="https://github.com/deras16/Polarsprocesamiento">
                        <IconGithub />
                    </a>
                </div>
            </header>
        </div>
    </div>
</template>