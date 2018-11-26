import { CreateCharacterComponent } from './create-character.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

const route = [{ path: '', component: CreateCharacterComponent }];
@NgModule({
    declarations: [
        CreateCharacterComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        RouterModule.forChild(route)
    ]
})
export class CreateCharacterModule {
}
