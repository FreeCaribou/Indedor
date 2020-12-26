import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {

  acceptedLanguages = ['en', 'fr', 'nl'];
  selectedLanguage: string;

  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'User',
      url: '/user',
      icon: 'person-circle'
    },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private translate: TranslateService,
  ) {
    this.initializeApp();
  }

  initializeApp() {
    console.log('the platform', this.platform.platforms());

    // check the language
    this.translate.addLangs(this.acceptedLanguages);

    if (!localStorage.getItem('language')) {
      this.changeLanguage(window.navigator.language.slice(0, 2));
    } else {
      this.changeLanguage(localStorage.getItem('language'));
    }

    this.translate.setDefaultLang('en');

    // Init the app
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('home/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }

  changeLanguage(language: string) {
    if (this.acceptedLanguages.findIndex(x => x === language) === -1) {
      language = 'en';
    }
    localStorage.setItem('language', language);
    this.translate.use(localStorage.getItem('language'));
    this.selectedLanguage = localStorage.getItem('language');
  }
}
