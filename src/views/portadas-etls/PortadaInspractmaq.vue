<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700">Portada Inspractmaq ETL</h1>

            <p class="my-6">
                The PortadaInspractmaq subclass extends the Model base class, focusing on the ETL process for the
                <span class="font-bold">INSPRACTMAQSiembra</span> table.
            </p>
            <p class="my-6">
                The <span class="font-semibold">extract_query</span> method provides a SQL query to retrieve and filter 
                specific data from a source table. This prepares the necessary data for transformation.
            </p>
            <p class="my-6">
                The <span class="font-semibold">transform_mappings</span> method specifies how to rename and cast columns 
                in the extracted. This aligns the data with the schema of the destination table.
            </p>
            <p class="my-6">
                The <span class="font-semibold">transform</span> method overrides the base class's transform method to include specific data cleaning like
                replaces newline characters in the "InsPracMaq" column, joins the data with an external "INSPRACTMAQ" table to add additional IDs and
                selects only the relevant columns ("IdPortada" and "IdInsPracMaq").
            </p> 
            <p class="my-6">
                The <span class="font-semibold">load</span> method is overriden to include additional validation steps. 
                It first calls the base class <span class="font-semibold">check_different_rows</span> method to identify new rows, then calls the private 
                method <span class="font-semibold">__validatePortada</span> to ensure each IdPortada exists in the "Portada" table. This validation step 
                ensures data integrity by loading only new and validated rows into the MSSQL table. If valid rows are 
                found, they are loaded into the destination table.
            </p>       
            <iframe frameborder="0" scrolling="no" style="width:100%; height:1930px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fderas16%2FPolarsprocesamiento%2Fblob%2Fmain%2Fsrc%2Fportadas%2Fportada_inspractmaq.py&style=tomorrow-night-blue&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
        </template>
    </MainLayout>
</template>