import { Component } from '@angular/core';



interface MenuItem {
  title : string
  route : string
}

@Component({
  selector: 'shared-side-menu',
  templateUrl: './side-menu.component.html',
  styles: [
  ]
})
export class SideMenuComponent {
  public reactiveMenu : MenuItem[] = [
    {title : 'Basics', route : '/reactive/basic'},
    {title : 'Dynamics', route : '/reactive/dynamic'},
    {title : 'Switches', route : '/reactive/switch'}
  ]
  public authMenu : MenuItem[] = [
    {title : 'Basics', route : '/auth/sign-up'},
  ]
}
