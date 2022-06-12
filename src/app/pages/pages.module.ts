import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { DarkMatterRoutingModule } from "./app.routes";
import { TestComponent } from "./test/test.component";
import { HomeComponent } from './home/home.component';
import { MatIconModule } from "@angular/material/icon";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatListModule } from "@angular/material/list";
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
      FormsModule
    ]
  })
export class PagesModule {}