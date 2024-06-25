<script setup>
import CodeSection from '@/components/CodeSection.vue';
</script>

<template>
    <div>
        <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700">Virtual Environment (Optional)</h2>

        <p class="my-6">
            To create a virtual environment for the project, you will need to run the following command in the terminal:
        </p>

        <CodeSection>
            <div class="mt-1"><span class="text-blue-400">python</span> -m venv 'virtual-environment-name'</div>
        </CodeSection>

        <h3 class="mt-8 mb-4 text-xl font-bold leading-tight text-gray-700">Switching to the Virtual Environment Terminal</h3>

        <p class="my-6">
            After creating the virtual environment, you will need to activate it in the terminal. The activation process 
            varies depending on the operating system you are using. Below are the commands to activate the virtual environment 
            on Windows, Windows PowerShell, and Linux:
        </p>

        <CodeSection>
            <div class="text-xs font-bold uppercase text-gray-500">#WINDOWS CMD</div>
            <div class="mt-1">virtual-environment-name\Scripts\activate.bat</div>
            <div class="mt-8 text-xs font-bold uppercase text-gray-500">#WINDOWS POWERSHELL</div>
            <div class="mt-1">virtual-environment-name\Scripts\activate.bat</div>
            <div class="mt-8 text-xs font-bold uppercase text-gray-500">#LINUX</div>
            <div class="mt-1">source virtual-environment-name/bin/activate</div>
        </CodeSection>
        
    </div>
</template>