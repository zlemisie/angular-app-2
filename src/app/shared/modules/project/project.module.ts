import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
    ],
    declarations: [ProjectComponent],
    exports: [ProjectComponent]
})
export class ProjectModule { }
