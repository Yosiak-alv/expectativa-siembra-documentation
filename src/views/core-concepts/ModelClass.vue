<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import SectionNavigator from '@/components/SectionNavigator.vue';
import ModelStructure from '@/components/core-concepts/ModelStructure.vue';

const MODEL_SECTIONS = [
    { name:'Model Structure', href: '#model-structure'},
    { name:'Model File', href:'#model-file'}
]

</script>

<template>
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700">Model Class</h1>
            <p class="my-6">
                This is the main class to perform the ETL in a generic way. It is the class that will be inherited by all the
                other classes that will perform the ETL process. It contains all the necessary methods and attributes to
                perform the ETL process in a generic way. But all methods and attributes can be overwritten in the child classes
                to perform the ETL process in a specific way.
            </p>

            <ModelStructure/>
            
            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="model-file">Model File</h2>
            <p class="my-6" >
                This is the current implementation of the Model class, 
                with all the methods and attributes necessary to perform the ETL process.
            
            </p>
            <iframe frameborder="0" scrolling="no" style="width:100%; height:2431px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fderas16%2FPolarsprocesamiento%2Fblob%2Fmain%2Futils%2FModel.py&style=tomorrow-night-blue&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></iframe>
        </template>

        <template #section-navigator>
            <SectionNavigator :sections="MODEL_SECTIONS"/>
        </template>
    
    </MainLayout>
</template>
