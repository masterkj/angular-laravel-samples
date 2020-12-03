import { Routes } from '@angular/router';

import { StudentComponent } from '../../pages/student/student.component';
import { TableComponent } from '../../pages/table/table.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'class', component: TableComponent },
    { path: 'student', component: StudentComponent },
];
