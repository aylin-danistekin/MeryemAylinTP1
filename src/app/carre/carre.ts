import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-carre',
  imports: [],
  templateUrl: './carre.html',
  styleUrl: './carre.css'
})
export class Main {
  @Output() public couleurSelect = new EventEmitter<string>();

  public choisirCouleur(couleur: string): void {
    this.couleurSelect.emit(couleur);
  }
}
