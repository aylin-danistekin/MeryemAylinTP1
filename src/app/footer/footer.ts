import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  imports: [NgClass],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer implements OnInit {
  @Input() color: string = "";
  @Output() text: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.text.emit('');
  }
}