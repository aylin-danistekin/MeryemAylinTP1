import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  imports: [Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  public couleurFond: string = 'white';

  public changerCouleur(couleur: string): void {
    this.couleurFond = couleur;
  }
}