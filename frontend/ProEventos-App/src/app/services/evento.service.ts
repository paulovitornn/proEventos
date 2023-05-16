import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Evento } from '../models/Evento';

@Injectable(/* {providedIn: 'root'} */) //Aqui é uma outra maneira de tornar o seviço injetavel, todavia é mais utilizado definir essa configuracao dentro do module

export class EventoService {
  baseURL = "https://localhost:5001/api/eventos";
  constructor(private http: HttpClient) { }

  public getEvento(): Observable<Evento[]> {
    return this.http.get<Evento[]>(this.baseURL);
  }

  public getEventoByTema(tema: string): Observable<Evento[]> {
    return this.http.get<Evento[]>(`${this.baseURL}/tema/${tema}`);
  }

  public getEventoById(idEvento:number): Observable<Evento> {
    return this.http.get<Evento>(`${this.baseURL}/idEvento/${idEvento}`);
  }

}
