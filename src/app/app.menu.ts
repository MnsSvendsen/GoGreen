import {MenuItem} from '../fw/services/menu.service';

export let initialMenuItem: Array<MenuItem> = [
    {
        text: 'Dashboard',
        icon: 'fas fa-home',
        route: '/dashboard',
        submenu: null
    },
    {
        text: 'Countries',
        icon: 'far fa-flag',
        route: null,
        submenu: [
            {
                text: 'Select',
                icon: 'fas fa-folder-open',
                route: null,
                submenu: [
                    {
                        text: 'Usa',
                        icon: 'far fa-flag',
                        route: 'country-detail/USA',
                        submenu: null
                    },
                    {
                        text: 'India',
                        icon: 'far fa-flag',
                        route: 'country-detail/India',
                        submenu: null
                    },
                    {
                        text: 'Switzerland',
                        icon: 'far fa-flag',
                        route: 'country-detail/Switzerland',
                        submenu: null
                    }
                ]
            },
            {
                text: 'Top 3',
                icon: 'far fa-flag',
                route: 'country-list/3',
                submenu: null
            },
            {
                text: 'Top 10',
                icon: 'far fa-flag',
                route: 'country-list/10',
                submenu: null
            },
            {
                text: 'All',
                icon: 'far fa-flag',
                route: 'country-list/0',
                submenu: null
            }
        ]
    },
    {
        text: 'Maintenance',
        icon: 'fas fa-wrench',
        route: null,
        submenu:[
            {
                text: 'Country List',
                icon: 'fas fa-archive',
                route: 'country-maint',
                submenu: null
            },
            {
                text: 'Settings',
                icon: 'fas fa-cog',
                route: 'settings',
                submenu: null
            }
        ]
    }
];