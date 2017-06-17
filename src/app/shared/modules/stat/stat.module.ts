import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
    ],
    declarations: [StatComponent],
    exports: [StatComponent]
})
export class StatModule { }
