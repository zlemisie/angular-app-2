import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { Project } from './project';


@Injectable()
export class ProjectService {

    private projectUrl = 'http://localhost:3000/project';

    constructor(private http: Http) { }

    getProjects(): Promise<Project[]> {
        return this.http.get(this.projectUrl)
            .toPromise()
            .then(response => response.json().data as Project[])
            .catch(this.handleError);
    }

    getProject(id: string): Promise<Project> {
        const url = `${this.projectUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            // .then(response => response.json() as Project)
            .then(response => Object.assign(new Project(), response.json() as Project))
            .catch(this.handleError);
    }

    // search(term: string): Observable<Project[]> {
    //     return this.http
    //         .get(`app/heroes/?name=${term}`)
    //         .map(response => response.json().data as Project[]);
    // }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}
