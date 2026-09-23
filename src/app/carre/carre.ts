import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.html',
  styleUrl: './main.css'
})
export class Main {
  @Output() public couleurSelect = new EventEmitter<string>();

  public choisirCouleur(couleur: string): void {
    this.couleurSelect.emit(couleur);
  }
}
