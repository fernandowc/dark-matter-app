import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { TestComponent } from './test/test.component';


const ROUTES: Routes=[

    {
        path: '',
        component: HomeComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'lista', component: TestComponent },
            { path: '**', redirectTo: '' }
        ]
    }

];

@NgModule({
    imports: [
      RouterModule.forChild( ROUTES )
    ],
    exports: [
      RouterModule
    ]
  })
  export class DarkMatterRoutingModule { }