import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-animations-besoin-card',
  templateUrl: './animations-besoin-card.component.html',
  styleUrls: ['./animations-besoin-card.component.scss'],
})
export class AnimationsBesoinCardComponent implements OnInit {

  @Input() hasHeader: boolean;
  @Input() hasFooter: boolean;
  @Input() status: string;
  @Input() updatedAt: string;
  @Input() createdAt: string;
  @Input() notes: string;
  @Input() value: string;

  constructor() { }

  ngOnInit() {}

}
