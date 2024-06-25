<script setup>
import CodeSection from '@/components/CodeSection.vue';
</script>

<template>
    <div>
        <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700">.env Configuration</h2>
        <p class="my-6">
            The .env file is used to store environment-specific variables, such as database credentials, API keys, and other configuration details. 
            This file is crucial for the project's operation, as it ensures that sensitive information is kept secure and separate from the codebase. 
            To configure the .env file, you will need to create a new file named .env in the project root directory. You can do this by copying the:
        </p>

        <CodeSection>
            <div class="text-xs font-bold uppercase text-gray-500">#WINDOWS / LINUX</div>
            <div class="mt-1">cp .env.example .env</div>
        </CodeSection>

        <p class="my-6">
            Once you have created the .env file, open it in a text editor and add the following variables:
        </p>

        <CodeSection>
            <div class="text-xs font-bold uppercase text-gray-500">#.env</div>
            <div class="mt-1"><span class="text-blue-400">POSTGRES_USER</span> = your_posgresql_user</div>
            <div class="mt-1"><span class="text-blue-400">POSTGRES_PASSWORD</span> = your_posgresql_password</div>
            <div class="mt-1"><span class="text-blue-400">POSTGRES_HOST</span> = your_posgresql_host</div>
            <div class="mt-1"><span class="text-blue-400">POSTGRES_PORT</span> = your_posgresql_port</div>
            <div class="mt-1"><span class="text-blue-400">POSTGRES_DB</span >= your_posgresql_db</div>

            <div class="mt-8"><span class="text-blue-400">MSSERVER_USER</span> = your_sqlserver_user</div>
            <div class="mt-1"><span class="text-blue-400">MSSERVER_PASSWORD</span> = your_sqlserver_password</div>
            <div class="mt-1"><span class="text-blue-400">MSSERVER_HOST</span> = your_sqlserver_host</div>
            <div class="mt-1"><span class="text-blue-400">MSSERVER_PORT</span> = your_sqlserver_port</div>
            <div class="mt-1"><span class="text-blue-400">MSSERVER_DB</span> = your_sqlserver_db</div>
        </CodeSection>

        <p class="my-6" >
            Once you have added these variables to the .env file, save the changes and you are ready to go.
        </p>
    </div>
</template>