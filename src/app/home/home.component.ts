import { Component, OnInit } from '@angular/core';
import { Photo, DataService } from './data.service';

@Component({
    selector: 'ns-home',
    moduleId: module.id,
    styleUrls: ['./home.component.css'],
    templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
    photos: Photo[] = [];
    constructor(private dataService: DataService) {}
    ngOnInit() {
        this.fetchData();
    }

    fetchData() {
        this.dataService.fetch().subscribe(
            (data: Photo[]) => {
                this.photos = data;
            },
            err => {
                throw new Error(err);
            }
        );
    }
}
