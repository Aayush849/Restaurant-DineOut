import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { SharedModule } from './shared/shared.module';
import { RouterModule } from '@angular/router';
import { DefaultRoutes } from './deafult-routing';
import { AddClientComponent } from './features/add-client/add-client.component';
import { ApproachesComponent } from './features/approaches/approaches.component';
import { UpgradeComponent } from './features/upgrade/upgrade.component';
import { AccountsComponent } from './features/accounts/accounts.component';
import { CreateRestroComponent } from './features/create-restro/create-restro.component';
import { RestaurantComponent } from './features/restaurant/restaurant.component';
import { EditUserComponent } from './features/userProfile/edit-user/edit-user.component';
import { ViewUserComponent } from './features/userProfile/view-user/view-user.component';
import { NgChartjsModule } from 'ng-chartjs';
@NgModule({
  declarations: [DefaultComponent, AddClientComponent, ApproachesComponent, UpgradeComponent, AccountsComponent, CreateRestroComponent, RestaurantComponent, EditUserComponent, ViewUserComponent],
  imports: [CommonModule, DefaultRoutes, SharedModule,NgChartjsModule],
  exports: [RouterModule],
})
export class DefaultModule {}
