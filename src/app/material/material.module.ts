import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Component } from '@angular/core';
import { NgModule, Inject } from '@angular/core';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatListModule } from '@angular/material/list';

import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatChipsModule } from '@angular/material/chips';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { MatGridListModule } from '@angular/material/grid-list';
import { FlexLayoutModule } from '@angular/flex-layout'
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { from } from 'rxjs';

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatIconModule, MatSelectModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatNativeDateModule, MatListModule, MatPaginatorModule, MatFormFieldModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatSortModule, MatChipsModule, MatExpansionModule, MatMenuModule, MatGridListModule, FlexLayoutModule, MatSidenavModule, MatStepperModule, MatButtonToggleModule, MatSlideToggleModule, MatBadgeModule, MatTabsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule, MatToolbarModule, MatIconModule, MatSelectModule, MatInputModule, MatDatepickerModule, FormsModule, ReactiveFormsModule, MatNativeDateModule, MatListModule, MatPaginatorModule, MatFormFieldModule, MatDialogModule, MatSnackBarModule, MatProgressSpinnerModule, MatCardModule, MatSortModule, MatChipsModule, MatExpansionModule, MatMenuModule, MatGridListModule, FlexLayoutModule, MatSidenavModule, MatStepperModule, MatButtonToggleModule, MatSlideToggleModule, MatBadgeModule, MatTabsModule],
})
export class MaterialModule { 
}
