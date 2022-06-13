import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { DarkMatterRoutingModule } from "./app.routes";
import { TestComponent } from "./test/test.component";
import { HomeComponent } from './home/home.component';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatSidenavModule } from "@angular/material/sidenav";
import { LayoutModule } from "@angular/cdk/layout";
import { MatCardModule } from "@angular/material/card";
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from "@angular/material/select";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { HeaderComponent } from "../shared/header/header.component";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "../auth/login/login.component";
import { RegisterComponent } from "../auth/register/register.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { BreadcrumbsComponent } from "../shared/breadcrumbs/breadcrumbs.component";
import { CommonModule } from "@angular/common";
import { CreateUsersComponent } from './users/create-users/create-users.component';
import { MatTabsModule } from "@angular/material/tabs";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { ListUsersComponent } from './users/list-users/list-users.component';
import { ImagenPipe } from './pipe/imagen.pipe';

@NgModule({
    declarations: [
        TestComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        NotfoundComponent,
        BreadcrumbsComponent,
        SidebarComponent,
        HeaderComponent,
        UsersComponent,
        CreateUsersComponent,
        ListUsersComponent,
        ImagenPipe,
    ],
    imports: [
      CommonModule,
      MaterialModule,
      DarkMatterRoutingModule,
      MatToolbarModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatRadioModule,
      MatCardModule,
      LayoutModule,
      MatSidenavModule,
      MatGridListModule,
      FlexLayoutModule,
      ReactiveFormsModule,
      FormsModule,
      MatTabsModule,
      MatProgressBarModule
    ]
  })
export class PagesModule {}