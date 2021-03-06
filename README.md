
# Projet Snapface ✌️

# ✅L'application photo SnapFace📸 realisée avec [Angular](https://angular.io/docs)13


## 🦖Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Installation](#installation) 
4. [Project Directory](#project-directory) 
5. [Angular Application](#angular-application)
6. [Les Observables](#les-observables)
7. [Les Operateurs](#les-operateurs)
8. [La communication serveur avec HttpClient](#la-communication-serveur-avec-HttpClient)
9. [La modularisation de l'arhitecture de l'appli](#la-modularisation-de-larhitecture-de-lappli)
10. [Creation d'un module](#creation-dun-module)
11. [Lazy loading](#lazy-loading)
12. [Guard - la protection des routes](#guard---la-protection-des-routes)



# General Info

![Image text](src/assets/FaceSnaps%20Module.png)
>Application photo - projet réalisé suite au nouveau cours
>Angular avancé - OpenClassrooms 👌

* Quelques mots sur l'appli :

    * l'application nécessite l'authentification.
    * les photos peuvent être consultès sous forme d'une liste complète, puis individuellement.
    * les photos peuvent être ajoutés à l'aide d'un formulaire (type FormGroup).
    * le backend tourne sur http://localhost:3000
      * npm install
      * npm run start
    * voir le JSON des FaceSnaps retournés par le backend http://localhost:3000/facesnaps
    * voir la liste des photos http://localhost:4200/
      * ng serve 
      
# 🀄Technologies

* Système d'exploitation: Windows 11
* [Node Js](https://nodejs.org/en/download/) Version 16.14.2 
* [Angular](https://angular.io/docs) Version 13.2.6
* La librairie [RxJS](https://rxjs.dev/guide/installation) Version: 7.5.5
>**  L'affichage de toutes les versions de package NPM si t'as installé avec NPM :
>npm list --depth=0

# ⬇️Installation
* git clone https://github.com/ioanamatac/fullSnapFace.git
* cd../path/to/the/file
* npm install
* ng serve
* 
# 🎬Project Directory
![Project-Directory](https://user-images.githubusercontent.com/42002179/163252050-a2c04cab-5d50-4b7f-a1d1-da2bec4787e7.png)

# 👌Angular Application 
>Installer le CLI d'Angular(Command Line Interface, ou interface en ligne de commande) :
* npm i -g @angular/cli
>Creation projet :
* ng new snapface --style=scss --skip-tests=true
>Lancer le serveur de développement sur http://localhost:4200 : 
* ng serve
>Creation d'un component:
* ng generate component nom component
>Creation d'un service :
>pour injecter un service dans un component, ajoutez un argument au constructor du component qui a le type du service, par exemple private userService: UserService

>Creation d'une landing page :
>« En marketing digital, une landing page est une page web distincte, créée spécifiquement pour les besoins d’une campagne de marketing ou de publicité. C’est sur cette page qu’un visiteur atterrit après avoir cliqué sur une publicité, un bouton d’appel à l’action ou autre. »[Unbounce](https://unbounce.com/landing-page-articles/what-is-a-landing-page/)

>L'affichage de l'heure en francais par default :

>Dans app.module.ts :
```JavaScript import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';

@NgModule({
  declarations: [
    AppComponent,
    FaceSnapComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}

```
>Creation d'un header 👇 like usual :
* ng g c header
>L'affichage des donnees dans les templates, formater la valeur sans modifier la donnée, elle-même  :
* l'utilisation des pipes : DatePipe, DecimalPipe, PercentPipe et CurrencyPipe

# 👀Les Observables 

>Quand on déclare le type de interval$ , on le déclare comme  Observable  qui émet des  number  en passant  number  entre chevrons <>.
```Typescript 
Ex: interval$!: Observable<number>;
```
>Affichage d'un Observable dans le template en utilisant le pipe async:
```Typescript 
Ex: <h1>{{ interval$ | async }}</h1>
```
# 👺Les Operateurs :

>Haut niveau - touchent aux émissions directement, généralement pour transformer ou filtrer les émissions

>Bas niveau - touchent à l'Observable lui-même

>Appliquer des opérateurs à un Observable - on les passe, dans l'ordre, à une méthode qui s'appelle  pipe() :
```Typescript 
const modifiedObservable$ = originalObservable$.pipe(
    firstOperator(),
    secondOperator(arguments),
    thirdOperator
);
```
# 📢La communication serveur avec HttpClient
>Le backend tourne sur http://localhost:3000

>Le frontend tourne sur http://localhost:4200

>Les Observables qui correspondent aux requêtes HTTP ont deux comportements possibles :
* si le serveur répond normalement, l'Observable émet la réponse et complète immédiatement ;
* si le serveur retourne une erreur, l'Observable émet cette erreur (un Observable qui émet une erreur est détruit).
# 🌳La modularisation de l'arhitecture de l'appli
>Il existe 3 types de modules:
* feature modules -  Ex : la landing page, et toute la gestion des FaceSnaps
* core modules - contient tout ce que l'on importe une seule fois dans application Ex : les services, les modèles, et les intercepteurs, le header.
* shared modules - regroupent des éléments utilisés à plusieurs endroits de l'application

# 👶Creation d'un module
* ng generate module nomModule

#  🛣️ Lazy loading
>Génère un fichier JS séparé, pour un module qui n'est chargé que si l'utilisateur visite la route correspondante.

>Pour implémenter le lazy loading, le module en question doit s'occuper de tout son routing 

>Le routing est ensuite délégué par le routeur principal avec une syntaxe particulière : 
```Typescript
{ path: 'module-route', loadChildren: () => import
('path/to/module').then(m => m.NameOfModule) }
```
# 💂‍♀️Guard - la protection des routes
>Un guard est une classe @Injectable qui implémente l'interface CanActivate et un outil de routing qui empêche des utilisateurs non autorisés d'accéder aux routes protégées de l'application.

>Ex : RoutingModule
```Typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleFaceSnapComponent } from './components/single-face-snap/single-face-snap.component';
import { FaceSnapListComponent } from './components/face-snap-list/face-snap-list.component';
import { NewFaceSnapComponent } from './components/new-face-snap/new-face-snap.component';
import { AuthGuard } from '../core/guards/auth.guard';

const routes: Routes = [
  { path: 'create', component: NewFaceSnapComponent, canActivate: [AuthGuard] },
  { path: ':id', component: SingleFaceSnapComponent, canActivate: [AuthGuard] },
  { path: '', component: FaceSnapListComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FaceSnapsRoutingModule {}
```


>Enjoy !👋
>Ioana

