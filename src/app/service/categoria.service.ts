import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CategoriaService {
    private apiUrl = 'http://localhost:3000/categorias'; // coloque a URL do seu backend

    constructor(private http: HttpClient) { }

    getCategorias(): Observable<any[]> {
        return this.http.get<any[]>(this.apiUrl);
    }
}
