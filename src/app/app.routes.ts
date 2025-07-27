import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Home } from './pages/home/home';
import { WebDevelopment } from './pages/web-development/web-development';
import { Dsa } from './pages/dsa/dsa';
import { SystemDesign } from './pages/system-design/system-design';
import { Devops } from './pages/devops/devops';
import { Aiml } from './pages/aiml/aiml';
import { JavaSpring } from './pages/java-spring/java-spring';
import { AboutUs } from './pages/about-us/about-us';
import { ContactUs } from './pages/contact-us/contact-us';
import { Authenticate } from './pages/authenticate/authenticate';
import { Profile } from './pages/profile/profile';

export const routes: Routes = [
    {
        path:"",
        component:Welcome,
        pathMatch:'full'
    },
    {
        path:"home",
        component:Home
    },
     {
        path:"java",
        component:JavaSpring
    },
     {
        path:"webdevelopment",
        component:WebDevelopment
    },
     {
        path:"dsa",
        component:Dsa
    }, 
    {
        path:"systemdesign",
        component:SystemDesign
    },
    {
        path:"devops",
        component:Devops
    },
    {
        path:"aiml",
        component:Aiml
    },
     {
        path:"aboutus",
        component:AboutUs
    },
     {
        path:"contactus",
        component:ContactUs
    },
    
      {
        path:"authenticate",
        component:Authenticate
    },
      {
        path:"profile",
        component:Profile
    },
    {
        path:"**",
        component:Welcome
    }
];
