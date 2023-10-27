import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  constructor() {}
  active: any = '';
  isCollapseNav: any = true;
  items: any = [
    {
      path: 'dashboard',
      title: 'Dashboard',
      icon: 'fa-solid fa-chart-simple',
      isActive: true,
    },
    {
      path: '',
      title: 'User Profile',
      icon: 'fa fa-user',
      arrow: 'fa-solid fa-chevron-right',
      isOpen: false,
      subMenu: [
        { subPath: '', subTitle: 'View Profile', subIcon: 'fa fa-user' },
        { subPath: '', subTitle: 'Edit Profile', subIcon: 'fa fa-user' },
      ],
    },
    {
      path: '',
      title: 'Restaurants',
      icon: 'fa-solid fa-bell-concierge',
      arrow: 'fa-solid fa-chevron-right',
      isOpen: false,
      subMenu: [
        { subPath: '', subTitle: 'Checkers', subIcon: 'fa-solid fa-champagne-glasses' },
        { subPath: '', subTitle: 'Ashoka', subIcon: 'fa-solid fa-champagne-glasses' },
        { subPath: '', subTitle: 'Haldiram', subIcon: 'fa-solid fa-champagne-glasses' },
        { subPath: '', subTitle: 'Absolute Barbecue', subIcon: 'fa-solid fa-champagne-glasses' },
      ],
    },
    { path: '', title: 'Create Restaurant', icon: 'fa-solid fa-plus' },
    { path: '', title: 'Accounts', icon: 'fa-solid fa-dollar-sign' },
    // { path: '', title: 'Create Client', icon: 'fa-solid fa-plus' },
    // { path: '', title: 'Approaches', icon: 'fa-solid fa-bell' },
  ];
  ngOnInit(): void {}

  collapseTo(item: any) {
    this.active = item;
  }
  collapseNav() {
    this.isCollapseNav = !this.isCollapseNav;
    let nav = document.querySelector('#nav');
    nav?.classList.add('sidenav-collapse');
  }
  expandNav() {
    let nav = document.querySelector('#nav');
    nav?.classList.remove('sidenav-collapse');
    nav?.classList.add('sidenav');
  }
}
