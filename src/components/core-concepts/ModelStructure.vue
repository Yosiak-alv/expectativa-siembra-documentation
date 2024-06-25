<script setup>
import CodeSection from '@/components/CodeSection.vue';
</script>

<template>
    <div>
        <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="model-structure" >Model Structure</h2>
        <CodeSection>
            <div class="mt-1">
                <span class="text-blue-400">class Model:</span><br>
                <span class="text-green-500">
                    &nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;<span class="token string">Base class for all models ETL</span><br>
                    &nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def __init__</span>(self, table_name: str, id_column: str):<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Constructor for the Model class</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Args:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">table_name (str): The name of the table to be loaded</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">id_column (str): The name of the id column in the table to be loaded</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def extract_query</span>(self) -> str:<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Extract Query to be implemented in the subclass</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Returns:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">str: The extract query to be executed</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def extract</span>(self) -> pl.DataFrame:<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Extract data from the source</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Returns:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">pl.DataFrame: The extracted data</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def transform_mappings</span>(self) -> dict:<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Transform mappings to be implemented in the subclass</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Returns:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">dict: The mappings to be used in the transform method</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def transform</span>(self, df: pl.DataFrame) -> pl.DataFrame:<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Transform the data</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Args:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">df (pl.DataFrame): The data to be transformed</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Returns:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">pl.DataFrame: The transformed data</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def load</span>(self, df: pl.DataFrame):<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Load the data into the destination</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Args:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">df (pl.DataFrame): The data to be loaded</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def check_different_rows</span>(self, df: pl.DataFrame) -> pl.DataFrame:<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Check if there are different rows between the source and destination</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Args:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">df (pl.DataFrame): The data to be checked</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Returns:</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">pl.DataFrame: The different rows</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
            <div class="mt-1">
                &nbsp;&nbsp;<span class="text-blue-400">def run</span>(self):<br>
                <span class="text-green-500">
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">Run the ETL process</span><br>
                    &nbsp;&nbsp;&nbsp;&nbsp;<span class="token string">"""</span><br>
                </span>
            </div>
        </CodeSection>
    </div>
</template>