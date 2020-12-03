import { Routes } from '@angular/router';

import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'class', component: TableComponent },
    { path: 'student', component: UserComponent },
];
