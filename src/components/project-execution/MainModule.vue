<template>
    <div>
        <h2 class="mt-12 text-2xl font-bold leading-none text-gray-700">Main.py</h2>
            <p class="my-6">
                This script is designed to manage and run the ETL (Extract, Transform, Load) processes for various datasets in a project. 
                It begins by importing necessary functions and classes from the project's modules and then defines the main function to 
                execute the ETL processes.
            </p>
            <p class="my-6">
                The <span class="font-bold">load_catalog_tables</span> function initiates the ETL process for different catalog tables 
                by first loading the configuration settings. It checks whether the catalog tables have already been loaded by inspecting 
                a specific configuration variable. If the tables are already loaded, it skips the process and prints a message. 
                If not, it executes the run method for each catalog table class, such as Departamento, Municipio, and PaisRemesa, among others, 
                and then updates the configuration to indicate that the catalog tables are now loaded, saving this updated configuration.
            </p>
            <p class="my-6">
                The <span class="font-bold">load_productores</span> function is more straightforward, focusing solely on the ETL process for the 
                "Productores" data. It does this by running the run method of the Productor class. 
                Similarly, the <span class="font-bold">load_portadas</span> function handles the ETL process for various "Portadas" data by running 
                the run method for each class related to "Portada" data, including Portada, PortadaCausa, PortadaCompara, and others.
            </p>
            <p class="my-6">
                The <span class="font-bold">main</span> function, main, orchestrates the overall ETL workflow for the project by sequentially calling 
                <span class="font-bold">load_catalog_tables</span>, <span class="font-bold">load_productores</span>, and 
                <span class="font-bold">load_portadas</span>.
            </p>
            <iframe frameborder="0" scrolling="no" style="width:100%; height:1636px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fderas16%2FPolarsprocesamiento%2Fblob%2Fmain%2Fsrc%2Fmain.py&style=tomorrow-night-blue&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
    </div>
</template>