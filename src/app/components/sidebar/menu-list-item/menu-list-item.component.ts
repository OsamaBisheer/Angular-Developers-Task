import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { INavItem } from 'src/app/models/navItem';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class MenuListItemComponent implements OnInit {
  @Input()
  item!: INavItem;
  @Input() depth: number = 1;

  constructor(public router: Router) {}

  ngOnInit() {
    if (this.item.route) {
      const currentURL = window.location.href;
      this.item['expanded'] =
        currentURL.indexOf(`/${this.item.route}`) !== -1 ||
        currentURL.indexOf(`/${this.item.route.split('-')[0]}`) !== -1;
    }
  }

  onItemSelected(item: INavItem) {
    this.item['expanded'] = !this.item['expanded'];

    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
    }
  }

  isActiveParent() {
    if (!this.item.children || !this.item.children.length) {
      return false;
    }

    const index = this.item.children.findIndex((ch) =>
      window.location.href.includes(ch.route)
    );

    if (index === -1) {
      return false;
    }

    return !this.item['expanded'];
  }
}
