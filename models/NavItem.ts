export interface NavChild {
  id: string;
  title: string;
  children: NavChild[];
}

export interface NavItem {
  id: string;
  title: string;
  children: NavChild[];
}
