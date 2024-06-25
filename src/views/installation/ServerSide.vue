<script setup>
import { RouterLink } from 'vue-router';
import SectionNavigator from '@/components/SectionNavigator.vue';
  
import MainLayout from '@/layouts/MainLayout.vue';
import VirtualEnvironment from '@/components/installation/VirtualEnvironment.vue';
import Packages from '@/components/installation/Packages.vue';
import EnvConfiguration from '@/components/installation/EnvConfiguration.vue';

const PACKAGES_SECTIONS = [
    { name: 'Introduction',href: '#introduction'},
    { name: 'Virtual Enviroment (Optional)',href: '#virtual-env'},
    { name: 'Installing Packages', href: '#installing-packages'},
    { name: '.env Configuration', href: '#env-configuration'}
];

</script>


<template>
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700" id="introduction">Server Side Setup</h1>
            <p class="my-6">
                Before diving into the setup process, it is essential to ensure that you have reviewed the 
                <RouterLink class="text-blue-700 hover:text-orange-700 font-medium underline" to="/requirements">requirements page</RouterLink>
                to guarantee a smooth start. The first step involves creating a virtual environment, which, although 
                optional, is highly recommended. This helps to isolate your project's dependencies, preventing conflicts 
                with other projects and maintaining a clean workspace. Following this, you will need to install the necessary 
                packages and libraries required for the project. Proper package installation ensures that all dependencies are 
                correctly configured and available for use.
            </p>
            <p class="my-6">
                The next crucial step is configuring the .env file. This file is used to set up environment-specific variables, 
                including database credentials, API keys, and other configuration details necessary for the project's operation. 
                Accurate .env configuration is vital for the seamless operation of the project. By following these steps carefully, 
                you will be well-prepared to set up and run the project efficiently. Remember to consult the 
                <RouterLink class="text-blue-700 hover:text-orange-700 font-medium underline" to="/requirements">requirements page</RouterLink> first 
                to confirm that your system meets all prerequisites.
            </p>

            <!-- VIRTUAL ENVIRONMENT -->
            <VirtualEnvironment id="virtual-env"/>

            <!-- INSTALL PACKAGES -->
            <Packages id="installing-packages" />

            <!-- ENV -->
            <EnvConfiguration id="env-configuration" />

        </template>

        <template #section-navigator>
            <SectionNavigator :sections="PACKAGES_SECTIONS"/>
        </template>
    </MainLayout>
</template>