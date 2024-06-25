<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
import SectionNavigator from '@/components/SectionNavigator.vue';
import MainModule from '@/components/project-execution/MainModule.vue';
import RunModule from '@/components/project-execution/RunModule.vue';

const EXECUTION_SECTIONS = [
    {name: 'Introduction', href: '#introduction'},
    {name: 'Main.py', href: '#main-module'},
    {name: 'Run.py', href: '#run-module'},
]
</script>

<template>
    <MainLayout>
        <template #content>
            <h1 id="introduction"class="mb-12 text-4xl font-bold leading-none text-gray-700">Run Project</h1>
            <p class="my-6">
                This page is used to run the project. The project is divided into two main files: <code class="font-bold">main.py</code> and 
                <code class="font-bold">run.py</code>.The main file contains the core logic and functionality of the project, including class 
                definitions, data processing methods, and the overall workflow. The run file is responsible for initiating the execution of the project, 
                orchestrating the various components defined in main.py, and managing the overall run sequence. 
                Together, these files facilitate a structured and efficient execution of the project's objectives. 
            </p>

            <MainModule id="main-module"/>
            
            <RunModule id="run-module"/>
        </template>

        <template #section-navigator>
            <SectionNavigator :sections="EXECUTION_SECTIONS" />
        </template>
    </MainLayout>
</template>