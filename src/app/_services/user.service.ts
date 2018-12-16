import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(
        private _http: HttpClient
    ) { }

    getAll() {
        return this._http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(id: number) {
        return this._http.get(`${environment.apiUrl}/users/${id}`);
    }

    register(user: User) {
        return this._http.post(`${environment.apiUrl}/users/register`, user);
    }

    update(user: User) {
        return this._http.put(`${environment.apiUrl}/users/${user.id}`, user);
    }

    delete(id: number) {
        return this._http.delete(`${environment.apiUrl}/users/${id}`);
    }
}