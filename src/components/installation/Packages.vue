<script setup>
import CodeSection from '@/components/CodeSection.vue';
</script>

<template>
    <div>
        <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700">Installing Packages</h2>
        <p class="my-6">
            To install the required packages for the project, you will need to run the following command in the terminal:
        </p>
        <CodeSection>
            <div class="mt-1"><span class="text-blue-400">pip</span> install -r requirements.txt</div>
        </CodeSection>
        <p class="my-6">
            The requirements.txt file contains a list of all the packages and their versions required for the project. 
            By running the above command, you will install all the necessary packages, ensuring that the project dependencies 
            are correctly configured and available for use.
        </p>
    </div>
</template>