import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getMessaging, provideMessaging } from '@angular/fire/messaging';
import { getStorage, provideStorage } from '@angular/fire/storage';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)), 
    provideFirebaseApp(() => initializeApp({
      projectId: "teste-be220-ed8b8", 
      appId: "1:478353345731:web:04578bee92d87f8b7c2676", 
      storageBucket: "teste-be220-ed8b8.firebasestorage.app", 
      apiKey: "AIzaSyA6BFsQ03Sjyl1qPExFXrahWUEDTM3_kzA", 
      authDomain: "teste-be220-ed8b8.firebaseapp.com", 
      messagingSenderId: "478353345731"
    })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore()), 
    provideMessaging(() => getMessaging()), 
    provideStorage(() => getStorage()), 
  ],
});
