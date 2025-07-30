import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: false,
  templateUrl: './input.html',
  styleUrls: ['./input.css']
})
export class InputComponent {
  @Input() parentForm!: FormGroup;
  @Input() controlName!: string;
  @Input() label!: string;
  @Input() type = 'text';
}