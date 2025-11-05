import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class Utils {
    constructor(private router: Router, private alertCtrl: AlertController) { }

    redirectTo(path: string) {
        this.router.navigate(['/' + path]);
    }

    async callAlert(header: string, message?: string) {
        const alert = await this.alertCtrl.create({
            header,
            message: message ?? '',
            buttons: ['OK']
        });
        await alert.present();
    }
}
