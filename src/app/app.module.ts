import { ChatPage } from './../pages/chat/chat';
import { ChathomePage } from './../pages/chathome/chathome';
import { EmailpagePage } from './../pages/emailpage/emailpage';
import { FeedformPage } from './../pages/feedform/feedform';
import { ChartsPage } from './../pages/charts/charts';
import { ProcedurePage } from './../pages/procedure/procedure';
import { CurrpageProvider } from './../providers/currpage/currpage';
import { ForumPage } from './../pages/forum/forum';
import { BenefitsPage } from './../pages/benefits/benefits';
import { AppformPage } from './../pages/appform/appform';
import { AgentsPage } from './../pages/agents/agents';
import { AnspaperPage } from './../pages/anspaper/anspaper';
import { DataProvider } from './../providers/data/data';
import { ListPage } from './../pages/list/list';
import { FlashCardComponent } from './../components/flash-card/flash-card';
import { HttpClient } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { QpaperPage } from './../pages/qpaper/qpaper';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { OrgloginPage } from '../pages/orglogin/orglogin';
import { OrgPage } from '../pages/org/org';
import { MaterialPage } from '../pages/material/material';
import { QuestionpaperPage } from '../pages/questionpaper/questionpaper';
import { LoggedinPage } from '../pages/loggedin/loggedin';
import { RegisterPage } from '../pages/register/register';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabase }from '@angular/fire/database';
import * as firebase from 'firebase';
import * as emailjs from 'emailjs-com';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { StudymaterialPage } from '../pages/studymaterial/studymaterial';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { CurrentprofilePage } from '../pages/currentprofile/currentprofile';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LiaPage } from '../pages/lia/lia';
// Initialize Firebase
var firebaseAuth = {
  apiKey: "AIzaSyCqGkc5Nl5m2xz6PdwzIU3ajRNuhQNHSAY",
  authDomain: "sihfinal-39774.firebaseapp.com",
  databaseURL: "https://sihfinal-39774.firebaseio.com",
  projectId: "sihfinal-39774",
  storageBucket: "sihfinal-39774.appspot.com",
  messagingSenderId: "912507048261"
};
firebase.initializeApp(firebaseAuth)

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    OrgPage,
    OrgloginPage,
    MaterialPage,
    QuestionpaperPage,
    StudymaterialPage,
    UserprofilePage,
    CurrentprofilePage,
    QpaperPage,
    ListPage,
    FlashCardComponent,
    AnspaperPage,
    AgentsPage,
    AppformPage,
    BenefitsPage,
    ForumPage,
    ProcedurePage,
    ChartsPage,
    FeedformPage,
    EmailpagePage,
    ChathomePage,
    ChatPage,
    LiaPage
  ],
  imports: [HttpModule,
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    AngularFireAuthModule,AngularFireModule.initializeApp(firebaseAuth),
    AngularFireDatabaseModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    LoggedinPage,
    OrgPage,
    OrgloginPage,
    MaterialPage,
    QuestionpaperPage,
    StudymaterialPage,
    UserprofilePage,
    CurrentprofilePage,
    QpaperPage,
    ListPage,
    FlashCardComponent,
    AnspaperPage,
    AgentsPage,
    AppformPage,
    BenefitsPage,
    ForumPage,
    ProcedurePage,
    ChartsPage,
    FeedformPage,
    EmailpagePage,
    ChathomePage,
    ChatPage,
    LiaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},DataProvider,HttpClient,CurrpageProvider
  ]
})
export class AppModule {}
