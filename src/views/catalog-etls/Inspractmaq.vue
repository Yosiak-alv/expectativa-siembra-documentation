<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700">INSPRACTMAQ ETL</h1>
            <p class="my-6">
                The INSPRACTMAQ subclass extends the Model base class, focusing on the ETL process for the
                <span class="font-bold">INSPRACTMAQ</span> table.
            </p>
            <p class="my-6">
                The <span class="font-semibold">extract_query</span> method is overridden but returns an empty string, 
                indicating that this class uses a different approach (extract method) for data extraction instead of a SQL query.
            </p>
            <p class="my-6">
                The <span class="font-semibold">extract</span> method, which overrides the default behavior, 
                loads data from a JSON file located at 'data/inspractmaq.json'. This method effectively extracts 
                data from the JSON file and returns it as a Polars DataFrame.
            </p>
            <p class="my-6">
                The <span class="font-semibold">transform_mappings</span> method specifies how to rename and cast columns 
                in the extracted. This aligns the data with the schema of the destination table.
            </p> 
            <iframe frameborder="0" scrolling="no" style="width:100%; height:586px;" allow="clipboard-write" src="https://emgithub.com/iframe.html?target=https%3A%2F%2Fgithub.com%2Fderas16%2FPolarsprocesamiento%2Fblob%2Fmain%2Fsrc%2Fcatalog_tables%2Finspractmaq.py&style=tomorrow-night-blue&type=code&showBorder=on&showLineNumbers=on&showFullPath=on&showCopy=on"></iframe>
        </template>
    </MainLayout>
</template>