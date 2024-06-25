<script setup>
import SectionNavigator from '@/components/SectionNavigator.vue';
import MainLayout from '@/layouts/MainLayout.vue';

const SECTIONS_HOME = [
    { name: 'Introduction',href: '#introduction'},
    { name: 'For Developers',href: '#for-developers'},
    { name: 'For Data Analysts', href: '#for-data-analysts'},
];

</script>

<template>  
    <MainLayout>
        <template #content>
            <h1 class="mb-12 text-4xl font-bold leading-none text-gray-700" id="introduction">Introduction</h1>
            <p class="my-6">
                This project is developed in Python, leveraging the Polars library to perform data extraction, transformation, and loading (ETL) tasks. 
                The primary objective is to facilitate the migration of data from a PostgreSQL database, which serves as the backend for the
                <span class="font-extrabold">Expectativa Siembra</span> survey into the Survey Solutions system,
                to a SQL Server database. This process ensures efficient and accurate data transfer, utilizing the high-performance capabilities of Polars
                to handle large datasets and complex transformations, ultimately enabling seamless integration between the data source and the destination 
                system.
            </p>
            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="for-developers">For Developers</h2>
            <p class="my-6">
                The use of the  
                <a href="https://pola.rs/" target="_blank" class="text-blue-700 hover:text-orange-700 font-medium underline">Polars</a>
                library ensures high performance and scalability, making it capable of handling large datasets with ease. 
                This efficiency reduces processing time and enhances data handling capabilities. Automating the ETL process minimizes manual intervention, 
                thereby reducing the risk of human error and ensuring data accuracy and consistency. Additionally, the seamless migration from 
                <a href="https://www.postgresql.org/" target="_blank" class="text-blue-700 hover:text-orange-700 font-medium underline">PostgreSQL</a> 
                to 
                <a href="https://learn.microsoft.com/sr-latn-rs/sql/?view=sql-server-ver16" target="_blank" class="text-blue-700 hover:text-orange-700 font-medium underline">SQL Server</a> 
                enables better data integration and accessibility across different systems, facilitating improved data analysis and decision-making.
                Lastly, by leveraging 
                <a href="https://www.python.org/" target="_blank" class="text-blue-700 hover:text-orange-700 font-medium underline">Python</a>, 
                a versatile and widely-used programming language, the project ensures maintainability and flexibility, allowing for 
                future modifications and enhancements with relative ease.                
            </p>
            <h2 class="mt-16 mb-4 text-2xl font-bold leading-tight text-gray-700" id="for-data-analysts">For Data Analysts</h2>
            <p class="my-6">
                By normalizing the database during the ETL process, the data structure becomes more organized and readable, 
                which is crucial for effective analysis. The migration to SQL Server enhances data accessibility and integration, 
                enabling analysts to leverage powerful tools like 
                <a href="https://www.microsoft.com/es-es/power-platform/products/power-bi" target="_blank" class="text-blue-700 hover:text-orange-700 font-medium underline">Power BI</a>
                and 
                <a href="https://www.r-project.org/" target="_blank" class="text-blue-700 hover:text-orange-700 font-medium underline">R</a>, 
                for robust data analysis. Power BI allows for the creation of interactive dashboards and real-time visualizations, facilitating 
                better insights and decision-making. Meanwhile, R offers advanced statistical analysis and machine learning capabilities, 
                empowering data scientists to perform complex analyses and predictive modeling. Together, these tools help transform the 
                normalized database into a valuable resource for extracting actionable insights and driving business growth.
            </p>
        </template>

        <template #section-navigator>
            <SectionNavigator :sections="SECTIONS_HOME"/>
        </template>
    </MainLayout>
</template>

