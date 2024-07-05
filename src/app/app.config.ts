import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideAnimationsAsync(), provideFirebaseApp(() => initializeApp({"projectId":"ring-of-fire-f4d79","appId":"1:636005028840:web:d1422fb9b6d339bf0d4a5d","storageBucket":"ring-of-fire-f4d79.appspot.com","apiKey":"AIzaSyCD7sFHnHK0Mch4R3Kgt82QB6XmV1RIrHg","authDomain":"ring-of-fire-f4d79.firebaseapp.com","messagingSenderId":"636005028840"})), provideFirestore(() => getFirestore())]
};
