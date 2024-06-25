<script setup>
import NavBar from '@/components/navbar/NavBar.vue';
import NavTop from '@/components/navbar/NavTop.vue';
const developers = [
    { username: 'deras16', name: 'Alexis Deras' },
    { username: 'Yosiak-alv', name: 'Josías Alvarenga'},
    { username: 'bocchiko', name: 'Luis Bonilla'},
];
</script>

<template>
    <div class="font-sans leading-none text-gray-800 antialiased">
        <NavTop/>
        <div class="mx-auto flex max-w-6xl py-12 md:px-12 md:py-24 xl:px-0">
            <NavBar class="hidden flex-shrink-0 border-r md:block md:w-48 lg:w-56" />
            <div class="flex-1 overflow-hidden px-6 text-lg leading-relaxed md:pl-12 md:pr-0 lg:pl-16 xl:pl-16 xl:pr-20">
                <!-- MAIN CONTENT FOR DOCUMENTATION -->
                <slot name="content"/>
            </div>
            <div class="relative -mt-8 hidden w-44 flex-shrink-0 xl:block">
                <div class="sticky top-0 pt-8">
                    <!-- SECTION NAVIGATOR FOR MAIN CONTENT -->
                    <slot name="section-navigator"/>
                    <div class="mb-6 text-xs font-bold uppercase tracking-widest text-gray-500">Developers:</div>
                    <div class="rounded-lg text-gray-800">
                        <ul>
                            <li v-for="developer in developers" :key="developer.name" class="flex items-center space-x-4 mb-2">
                                <div class="font-medium">
                                    {{ developer.name }}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>