<script setup>
import MainLayout from '@/layouts/MainLayout.vue';
import SectionNavigator from '@/components/SectionNavigator.vue';

const PROJECT_SECTIONS = [
    { name:'config', href: '#config'},
    { name:'src', href: '#src'},
    { name:'tests', href: '#tests'},
    { name:'utils', href: '#utils'},
    { name:'db', href: '#db'},
    { name:'.env', href: '#env'},
    { name:'config.ini', href: '#config-ini'},
    { name:'requirements.txt', href: '#requirements-txt'},
    { name:'main.py', href: '#main-py'},
    { name:'run.py', href: '#run-py'},
]
</script>

<template>
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700">Project Structure</h1>
            <p class="my-6">
                The project structure is designed to provide a clear and organized layout of the codebase, 
                facilitating easy navigation and maintenance. The main folders and files in the project are as follows:
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="config" >config</h2>
            <p class="my-6">
                The <span class="font-extrabold">config</span> folder contains configuration files for the project, 
                such as database connection details, project settings, and other environment-specific variables. 
                These files are used to store sensitive information and settings that are required for the project to run 
                but should not be hard-coded into the codebase.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="src">src</h2>
            <p class="my-6">
                The <span class="font-extrabold">src</span> folder is the main source code directory for the project. 
                It contains all the Python scripts, modules, and packages that make up the project. 
                The <span class="font-extrabold">src</span> folder is further divided into subfolders based on the 
                functionality and purpose of the code. For example, the <span class="font-extrabold">catalog_tables</span> folder 
                contains scripts related for all catalog tables ETL process, while the <span class="font-extrabold">portadas</span> folder
                contains scripts related to the portadas ETL process, and <span class="font-extrabold">productores</span> 
                folder contains scripts related to the productores ETL process.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="tests" >tests</h2>
            <p class="my-6">
                The <span class="font-extrabold">tests</span> folder contains all the unit tests and integration tests for the project. 
                These tests are used to verify the correctness and functionality of the codebase, ensuring that the project 
                behaves as expected and meets the specified requirements. The <span class="font-extrabold">tests</span> folder is 
                organized into subfolders based on the modules and packages they are testing, making it easy to locate and run 
                specific tests.
            </p>
            
            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="utils" >utils</h2>
            <p class="my-6">
                The <span class="font-extrabold">utils</span> folder contains utility scripts and helper functions that are used 
                throughout the project. These scripts provide common functionality that is shared across different modules and 
                packages, reducing code duplication and improving maintainability.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="db" >db</h2>
            <p class="my-6">
                The <span class="font-extrabold">db</span> folder contains database-related scripts and files, such as SQL 
                query for creating the database tables, there foreign keys, and indexes.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="env">.env</h2>
            <p class="my-6">
                The <span class="font-extrabold">.env</span> file is an environment configuration file that contains 
                environment-specific variables and settings. These variables are loaded into the project as environment 
                variables, allowing them to be accessed by the codebase without hard-coding them. The <span class="font-extrabold">.env</span> 
                file is used to store sensitive information, such as database connection details, API keys, and other 
                configuration settings that should not be exposed in the codebase.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="config-ini" >config.ini</h2>
            <p class="my-6">
                The config.ini file is a configuration file that contains project settings and options 
                used to customize the project's behavior. This file stores non-sensitive configuration 
                settings required by the project. There is only one variable for handling the loading 
                of catalog tables. The possible values are <span class="font-extrabold">True</span> or <span class="font-extrabold">False</span>. 
                If set to <span class="font-extrabold">False</span>, the catalog tables will be loaded. If set to 
                <span class="font-extrabold">True</span>, the catalog tables will not be loaded because 
                they are already loaded.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="requirements-txt" >requirements.txt</h2>

            <p class="my-6">
                The <span class="font-extrabold">requirements.txt</span> file is a text file that contains a list of 
                Python packages and their versions that are required by the project. These packages are installed 
                using the <span class="font-extrabold">pip</span> package manager, ensuring that the project has all 
                the necessary dependencies to run successfully.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="main-py" >main.py</h2>

            <p class="my-6">
                The <span class="font-extrabold">main.py</span> file is the main entry point for the project. 
                This file contains the main script that is executed when the project is run. The <span class="font-extrabold">main.py</span> 
                file imports and runs the necessary modules and functions to start the project and perform the required tasks.
            </p>

            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="run-py" >run.py</h2>

            <p class="my-6">
                Import the <span class="font-extrabold">main.py</span> file and run the <span class="font-extrabold">main()</span> function, 
                which is the main entry point for the project.
            </p>
        </template>

        <template #section-navigator>
            <SectionNavigator :sections="PROJECT_SECTIONS"/>
        </template>
    </MainLayout>
</template>