import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-stat',
    templateUrl: './stat.component.html',
    styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Output() event: EventEmitter<any> = new EventEmitter();

    // Radar
    public radarChartLabels: string[] = ['Productiveness', 'Effectivenes', 'Happiness', 'Quality', 'Risk'];
    public radarChartData: any = [
        {data: [1.2, 3.4, 4.9, 3, 2], label: 'A'},
    ];
    public radarChartType = 'radar';

    constructor() { }

    ngOnInit() {}

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
