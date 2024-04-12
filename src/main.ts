import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { serverConfig } from './app/app.config.server';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, serverConfig)
  .catch((err) => console.error(err));
