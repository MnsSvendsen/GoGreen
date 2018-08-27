import {Routes} from '@angular/router';

import{DashboardComponent} from './dashboard/dashboard.component';
import{SettingsComponent} from './settings/settings.component';

export const appRouter: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'settings', component: SettingsComponent},
    {path: '', component: DashboardComponent},
    {path: '**', component: DashboardComponent}
];
