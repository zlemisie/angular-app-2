import {Component, OnInit, Input, Output, EventEmitter, ViewChild} from '@angular/core';
import { ProjectService } from './../../services/project.service';
import { Project } from './../../services/project';
import { Log } from './../../services/log';
import { BaseChartDirective } from 'ng2-charts';



@Component({
    providers: [ProjectService],
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
    @Input() no: string;
    @Input() bgClass: string;
    @Input() icon: string;
    @Input() count: number;
    @Input() label: string;
    @Input() data: number;
    @Output() event: EventEmitter<any> = new EventEmitter();

    project: Project = null;

    // @ViewChild(BaseChartDirective)
    // public chart: BaseChartDirective;

    // Radar
    public radarChartLabels: string[] = [];
    public radarChartData: any = [
        {data: [], label: ''}
    ];
    public radarChartType = 'radar';

    constructor(private projectService: ProjectService) { }

    ngOnInit() {
        this.projectService.getProject(this.no).then(project => this.loadProject(project));
    }

    loadProject(project: Project) {
        this.project = project;
        this.radarChartData[0].data = this.project.latest().metricValues();
        this.radarChartLabels = this.project.latest().metricNames();
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }
}
