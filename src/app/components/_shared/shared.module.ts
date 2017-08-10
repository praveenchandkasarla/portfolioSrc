import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ng2Parallax } from '../../directives/ng2parallax';


@NgModule({
    imports: [CommonModule],
    declarations: [ ng2Parallax],
    exports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, ng2Parallax]
})

export class SharedModule { }
