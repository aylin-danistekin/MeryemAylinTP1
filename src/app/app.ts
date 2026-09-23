import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Main } from './carre/carre';

@Component({
  selector: 'app-root',
  imports: [NgClass, Header, Footer, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  public classeFond: string = 'fond-blanc';

  public changerFond(couleur: string): void {
    this.classeFond = 'fond-' + couleur;
  }
}