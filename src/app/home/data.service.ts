import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
@Injectable({
    providedIn: 'root'
})
export class DataService {
    private dataURL = 'https://jsonplaceholder.typicode.com/photos';
    constructor(private httpClient: HttpClient) {}
    fetch(): Observable<Photo[]> {
        return this.httpClient.get(this.dataURL) as Observable<Photo[]>;
    }
}