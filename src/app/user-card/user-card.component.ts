import { Component, Input } from '@angular/core';
import { User } from '../Models/user-model.interface';
import { NgClass } from '@angular/common';


@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [NgClass],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {

  @Input() User!: User;

}
