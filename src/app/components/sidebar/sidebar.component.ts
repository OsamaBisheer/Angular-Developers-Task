import { Component } from '@angular/core';
import { NavItem } from 'src/app/models/navItem';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent {
  authNav!: NavItem;
  databaseObjNav!: NavItem;
  queryDBNav!: NavItem;

  constructor() {
    this.buildAuthNav();
    this.buildDatabaseObjNav();
    this.buildQueryDBNav();
  }

  buildAuthNav() {
    this.authNav = new NavItem('Auth', 'auth');

    this.authNav.children.push(
      new NavItem('Change Password', 'auth/change-password')
    );

    this.authNav.children.push(new NavItem('Settings', 'auth/settings'));
  }

  buildDatabaseObjNav() {
    this.databaseObjNav = new NavItem('Database Obj', 'database-obj');

    this.databaseObjNav.children.push(
      new NavItem('Create Obj', 'database-obj/create')
    );

    this.databaseObjNav.children.push(
      new NavItem('Edit Obj', 'database-obj/edit')
    );
  }

  buildQueryDBNav() {
    this.queryDBNav = new NavItem('Query DB', 'query-db');

    this.queryDBNav.children.push(
      new NavItem('Create Query', 'query-db/create')
    );

    this.queryDBNav.children.push(
      new NavItem('Delete Query', 'query-db/delete')
    );
  }
}
