
import { Component } from '@angular/core';
import { IonApp, IonSplitPane, IonRouterOutlet} from '@ionic/angular/standalone';
import { HeaderComponent } from "./shared/header/header.component";
import { MenuComponent } from "./shared/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [
    IonApp,
    IonSplitPane,
    IonRouterOutlet,
    MenuComponent,
    HeaderComponent
],
})
export class AppComponent {

}
