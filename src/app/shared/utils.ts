import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class Utils {
    constructor(private router: Router, private alertCtrl: AlertController) { }

    redirectTo(path: string, options: any = null) {
        if (options) {
            this.router.navigate([path], options);
        } else {
            this.router.navigate([path]);
        }
    }

    async callAlert(header: string, message?: string) {
        try {
            const alert = await this.alertCtrl.create({
                header,
                message: message ?? '',
                buttons: ['OK']
            });
            await alert.present();
        } catch (error) {
            const fullMessage = message ? `${header}\n\n${message}` : header;
            window.alert(fullMessage);
        }
    }
}
