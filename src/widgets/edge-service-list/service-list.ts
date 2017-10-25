/**
 * Created by jayhamilton on 1/28/17.
 */
export const serviceList: {
    active: boolean,
    applicationName: string,
    description: string,
    icon: string,
    pseudoName: string,
    processId: string}[] = [
    {
        active: false,
        applicationName: 'Virgo',
        description: 'Main ECX Application container that manages all of the ECX functions.',
        icon: '/assets/images/widgets/charts/pie.png',
        pseudoName: 'ECX',
        processId: ''
    },
    {
        active: false,
        applicationName: 'Eureka',
        description: 'This is a microservice discovery service. Used for such items as VADP Proxy.',
        icon: '/assets/images/widgets/charts/pie.png',
        pseudoName: 'Eureka',
        processId: ''
    },
    {
        active: false,
        applicationName: 'PostGresql',
        description: 'This is a database server used for job management and security.',
        icon: '/assets/images/widgets/charts/pie.png',
        pseudoName: 'SQL DB',
        processId: ''
    },
    {
        active: false,
        applicationName: 'Mongo',
        description: 'This is a database server used for ECX operation management.',
        icon: '/assets/images/widgets/charts/pie.png',
        pseudoName: 'Catalog DB',
        processId: ''
    },
    {
        active: false,
        applicationName: 'Mongo',
        description: 'This is a database server used for ECX configuration.',
        icon: '/assets/images/widgets/charts/pie.png',
        pseudoName: 'Configuration DB',
        processId: ''
    },

];
