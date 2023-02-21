export interface INavItem {
  displayName: string;
  disabled: boolean;
  iconName: string;
  route: string;
  expanded: boolean;
  children: NavItem[];
}

export class NavItem {
  constructor(displayName: string, route: string) {
    this.displayName = displayName;
    this.route = route;
  }

  displayName: string = '';
  disabled: boolean = false;
  iconName: string = '';
  route: string = '';
  expanded: boolean = false;
  children: NavItem[] = [];
}
