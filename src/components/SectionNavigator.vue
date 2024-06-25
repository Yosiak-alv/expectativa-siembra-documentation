<script setup>
defineProps({
    sections: Array,
});
</script>

<template>
    <div class="mb-12">
        <div class="text-xs font-bold uppercase tracking-widest text-gray-500">On this page</div>
        <ul>
            <li class="mt-4" v-for="section in sections" :key="section.name">
                <a :href="section.href" class="font-medium text-gray-700 hover:text-green-700 hover:underline">
                    {{ section.name }}
                </a>
            </li>
        </ul>
    </div>
</template>