<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700">Portada Siembra Expectativa ETL</h1>

            <p class="my-6">
                The PortadaSiembraExpectativa subclass extends the Model base class, focusing on the ETL process for the
                <span class="font-bold">SiembraExpectativa</span> table.
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
                The <span class="font-semibold">transform</span> method is overriden to extend the base class's transformation 
                functionality. After calling the base class's transform method, it further processes the data by filtering out 
                rows with null IdSemilla values and then validating and modifying the IdEpoca and IdSemilla columns based on 
                specific rules. It replaces null or invalid values in these columns with appropriate values, ensuring consistency 
                and validity, before returning the cleaned and validated DataFrame.
            </p>    
            <p class="my-6">
                The <span class="font-semibold">load</span> method is overriden to include additional validation steps. 
                It first calls the base class <span class="font-semibold">check_different_rows</span> method to identify new rows, then calls the private 
                method <span class="font-semibold">__validatePortada</span> to ensure each IdPortada exists in the "Portada" table. This validation step 
                ensures data integrity by loading only new and validated rows into the MSSQL table. If valid rows are 
                found, they are loaded into the destination table.
            </p>  

            <iframe frameborder="0" scrolling="no" style="width:100%; height:3946px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fderas16%2FPolarsprocesamiento%2Fblob%2Fmain%2Fsrc%2Fportadas%2Fportada_siembra_expectativa.py&style=tomorrow-night-blue&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
        </template>
    </MainLayout>
</template>