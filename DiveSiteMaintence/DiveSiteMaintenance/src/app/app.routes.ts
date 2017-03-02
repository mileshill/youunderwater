import { Routes, RouterModule } from '@angular/router';
import { DiveListComponent } from './dive-list/dive-list.component';
import { AddDiveComponent } from './add-dive/add-dive.component';
import { EditDiveComponent } from './edit-dive/edit-dive.component';
import { DeleteDiveComponent } from './delete-dive/delete-dive.component';

const routes: Routes = [
	{ path: 'list', component: DiveListComponent },
	{ path: 'add', component: AddDiveComponent },
	{ path: 'edit/:id', component: EditDiveComponent },
	{ path: 'delete/:id', component: DeleteDiveComponent },
	{ path: '', redirectTo: 'list', pathMatch: 'full' }
]

export const routingModule = RouterModule.forRoot(routes);
