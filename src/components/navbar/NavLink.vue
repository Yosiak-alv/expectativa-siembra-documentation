<script setup>
import { RouterLink } from 'vue-router'

const props = defineProps({
    href:{
        type: String,
        required: true,
    },
    active:{
        type: Boolean,
        default: false,
    }
});
</script>

<template>
    <RouterLink
        :class="{
           'block -ml-3 pl-3 pr-2 py-1 md:py-2 font-medium border-l-4 rounded-r border-green-400 bg-green-100 text-green-700' : props.active,
           'inline-block py-1 md:py-2 hover:text-green-700 hover:underline font-medium text-gray-700' : !props.active
        }"
        :to="props.href"
    >
        <slot/>
    </RouterLink>

</template>