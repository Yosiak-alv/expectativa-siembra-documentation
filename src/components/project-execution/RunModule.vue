<script setup>
import CodeSection from '../CodeSection.vue';
</script>

<template>
    <div>
        <h2 class="mt-12 text-2xl font-bold leading-none text-gray-700">Run.py</h2>
        <p class="my-6">
            This script is responsible for initiating the execution of the project by importing the necessary 
            functions and classes from <code class="font-bold">main.py</code> and then calling the main function 
            to start the ETL processes. 
        </p>
        <iframe frameborder="0" scrolling="no" style="width:100%; height:271px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fderas16%2FPolarsprocesamiento%2Fblob%2Fmain%2Frun.py&style=tomorrow-night-blue&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
        
        <p class="my-6">
            You can run the project by executing the <code class="font-bold">run.py</code> script in your terminal or command prompt.
        </p>
        <CodeSection>
            <div class="mt-1"><span class="text-blue-400">python</span> run.py</div>
        </CodeSection>
    </div>
</template>