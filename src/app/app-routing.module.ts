import { NgModule } from '@angular/core';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { RouterModule } from '@angular/router';

const routes = [
  {
    path: 'charachters',
    component: TabsComponent,
    children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ]
  },
  { path: 'new-charachter', loadChildren: './create-character/app.create-character.module.ts#CreateCharacterModule'},
  { path: '**', redirectTo: '/charachters/all' }
];
@NgModule({
imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
]

})
export class AppRoutingModule {
}
