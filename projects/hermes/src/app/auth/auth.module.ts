import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import {
  MatInputModule,
  MatButtonModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatProgressBarModule
} from "@angular/material";
import { AuthGuardService } from "@app/app/auth/services/auth-guard.service";
import { ProfileComponent } from "@app/app/auth/containers/profile/profile.component";
import { LoginComponent } from "@app/app/auth/containers/login/login.component";
import { SharedModule } from "@app/app/shared/shared.module";
import { ProfileUpdateComponent } from "@app/app/auth/components/profile-update/profile-update.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "profile",
    component: ProfileComponent,
    canActivate: [AuthGuardService]
  }
];

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatButtonModule
  ],
  declarations: [LoginComponent, ProfileComponent, ProfileUpdateComponent],
  exports: [RouterModule]
})
export class AuthModule {}
