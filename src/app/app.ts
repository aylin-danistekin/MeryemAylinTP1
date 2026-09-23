import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';
import { Footer } from './footer/footer';

@Component({
  imports: [RouterOutlet, Header, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  public mesPrenoms: string = "Meryem et Aylin";
  public textOutput: string = "";

  public headerOutput(headerText: string): void {
    this.textOutput = headerText;
  }

  public footerOutput(footerText: string): void {
    this.textOutput = footerText;
  }
  public changerCouleur(couleur: string): void {
    this.couleurFond = couleur;
  }
}