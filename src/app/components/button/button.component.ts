import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent implements OnInit {
  ngOnInit(): void {}
  constructor() {}

  @Input() text!: string;
  @Input() color!: string;

  @Output() clickedBtn = new EventEmitter();

  onClick() {
    this.clickedBtn.emit();
  }
}
