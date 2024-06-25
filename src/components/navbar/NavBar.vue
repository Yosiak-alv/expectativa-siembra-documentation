<script setup>
import NavLink from '@/components/navbar/NavLink.vue'
import IconGithub from '../icons/IconGithub.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isActive = (name) => route.name === name;

</script>

<template>
    <nav>
        <div class="-mx-6 mt-4 mb-6 flex justify-center border-b pb-4 md:hidden">
            <a class="mr-5 flex items-center text-gray-500 hover:text-gray-300" target="_blank"href="https://github.com/deras16/Polarsprocesamiento">
                <IconGithub />
            </a>
        </div>
        <ul>
            <li class="md:pr-3">
                <NavLink href="/" :active="isActive('Home')">Introduction</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/requirements" :active="isActive('Requirements')">Requirements</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/contributions" :active="isActive('Contributions')">Contributions</NavLink>
            </li>
        </ul> 
        <div class="mt-8 mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 md:mt-12">Installation</div>
        <ul>
            <li class="md:pr-3">
                <NavLink href="/server-side-setup" :active="isActive('Server Side Setup')">Server side</NavLink>
            </li>
        </ul>
        <div class="mt-8 mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 md:mt-12">Core concepts</div>
        <ul>
            <li class="md:pr-3">
                <NavLink href="/project-structure" :active="isActive('Project Structure')">Project structure</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/model-class" :active="isActive('Model Class')">Model class</NavLink>
            </li>
        </ul>
        <div class="mt-8 mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 md:mt-12">Catalog ETLS</div>
        <ul>
            <li class="md:pr-3">
                <NavLink href="/causas-etl" :active="isActive('Causas ETL')">Causas</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/departamentos-etl" :active="isActive('Departamentos ETL')">Departamentos</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/epocas-etl" :active="isActive('Epocas ETL')">Epocas</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/granos-etl" :active="isActive('Granos ETL')">Granos</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/inspractmaq-etl" :active="isActive('Inspractmaq ETL')">Inspractmaq</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/intervalos-etl" :active="isActive('Intervalos ETL')">Intervalos</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/municipios-etl" :active="isActive('Municipios ETL')">Municipios</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/origen-credito-etl" :active="isActive('Origen Credito ETL')">Origen credito</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/pais-remesas-etl" :active="isActive('Pais Remesas ETL')">Pais remesas</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/semillas-etl" :active="isActive('Semillas ETL')">Semillas</NavLink>
            </li>
        </ul>
        <div class="mt-8 mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 md:mt-12">Productores ETL</div>
        <ul>
            <li class="md:pr-3">
                <NavLink href="/productores-etl" :active="isActive('Productores ETL')">Productores</NavLink>
            </li>
        </ul>
        <div class="mt-8 mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 md:mt-12">Portadas ETLS</div>
        <ul>
            <li class="md:pr-3">
                <NavLink href="/portadas-etl" :active="isActive('Portadas ETL')">Portadas</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/portada-causas-etl" :active="isActive('Portada Causas ETL')">Portada causas</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/portada-compara-etl" :active="isActive('Portada Compara ETL')">Portada compara</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/portada-fondo-agricola-etl" :active="isActive('Portada Fondo Agricola ETL')">Portada fondo agricola</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/portada-inspractmaq-etl" :active="isActive('Portada Inspractmaq ETL')">Portada inspractmaq</NavLink>
            </li>
            <li class="md:pr-3">
                <NavLink href="/portada-siembra-expectativa-etl" :active="isActive('Portada Siembra Expectativa ETL')">Portada siembra expectativa</NavLink>
            </li>
        </ul>
        <div class="mt-8 mb-3 text-xs font-bold uppercase tracking-widest text-gray-500 md:mt-12">Project Execution</div>   
        <ul>
            <li class="md:pr-3">
                <NavLink href="/run-project" :active="isActive('Run Project')">Run project</NavLink>
            </li>
        </ul>
    </nav>
</template>