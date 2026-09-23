import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header implements OnInit {
  @Input() prenoms: string = "";
  @Output() text: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.text.emit('');
  }
}