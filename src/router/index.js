import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory('#'),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/requirements',
      name: 'Requirements',
      component: () => import('@/views/Requirements.vue')
    },
    {
      path: '/contributions',
      name: 'Contributions',
      component: () => import('@/views/Contributions.vue')
    },
    //installation section
    {
      path: '/server-side-setup',
      name: 'Server Side Setup',
      component:  () => import('@/views/installation/ServerSide.vue')
    },
    // core concepts
    {
      path: '/project-structure',
      name: 'Project Structure',
      component: () => import('@/views/core-concepts/ProjectStructure.vue')
    },
    {
      path: '/model-class',
      name: 'Model Class',
      component: () => import('@/views/core-concepts/ModelClass.vue')
    },
    //catalog etls
    {
      path: '/causas-etl',
      name: 'Causas ETL',
      component: () => import('@/views/catalog-etls/Causas.vue')
    },
    {
      path: '/departamentos-etl',
      name: 'Departamentos ETL',
      component: () => import('@/views/catalog-etls/Departamentos.vue')
    },
    {
      path: '/epocas-etl',
      name: 'Epocas ETL',
      component: () => import('@/views/catalog-etls/Epocas.vue')
    },
    {
      path: '/granos-etl',
      name: 'Granos ETL',
      component: () => import('@/views/catalog-etls/GranosBasicos.vue')
    },
    {
      path: '/inspractmaq-etl',
      name: 'Inspractmaq ETL',
      component: () => import('@/views/catalog-etls/Inspractmaq.vue')
    },
    {
      path: '/intervalos-etl',
      name: 'Intervalos ETL',
      component: () => import('@/views/catalog-etls/IntervaloRemesas.vue')
    },
    {
      path: '/municipios-etl',
      name: 'Municipios ETL',
      component: () => import('@/views/catalog-etls/Municipios.vue')
    },
    {
      path: '/origen-credito-etl',
      name: 'Origen Credito ETL',
      component: () => import('@/views/catalog-etls/OrigenCredito.vue')
    },
    {
      path: '/pais-remesas-etl',
      name: 'Pais Remesas ETL',
      component: () => import('@/views/catalog-etls/PaisRemesas.vue')
    },
    {
      path: '/semillas-etl',
      name: 'Semillas ETL',
      component: () => import('@/views/catalog-etls/Semillas.vue')
    },
    //productores etls
    {
      path: '/productores-etl',
      name: 'Productores ETL',
      component: () => import('@/views/productores-etl/Productores.vue')
    },
    // portadas etls
    {
      path: '/portadas-etl',
      name: 'Portadas ETL',
      component: () => import('@/views/portadas-etls/Portadas.vue')
    },
    {
      path: '/portada-causas-etl',
      name: 'Portada Causas ETL',
      component: () => import('@/views/portadas-etls/PortadaCausas.vue')
    },
    {
      path: '/portada-compara-etl',
      name: 'Portada Compara ETL',
      component: () => import('@/views/portadas-etls/PortadaCompara.vue')
    },
    {
      path: '/portada-fondo-agricola-etl',
      name: 'Portada Fondo Agricola ETL',
      component: () => import('@/views/portadas-etls/PortadaFondoAgricola.vue')
    },
    {
      path: '/portada-inspractmaq-etl',
      name: 'Portada Inspractmaq ETL',
      component: () => import('@/views/portadas-etls/PortadaInspractmaq.vue')
    },
    {
      path: '/portada-siembra-expectativa-etl',
      name: 'Portada Siembra Expectativa ETL',
      component: () => import('@/views/portadas-etls/PortadaSiembraExpectativa.vue')
    },
    //project execution
    {
      path: '/run-project',
      name: 'Run Project',
      component: () => import('@/views/project-execution/Execution.vue')
    }
  ],
  scrollBehavior() {
    window.scrollTo(0,0);
  }
})

router.beforeEach((to, from, next) => {
  document.title = `${to.name} | EXS Docs`;
  next();
})

export default router
