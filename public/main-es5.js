function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./presentation/presentation.component */
    "./src/app/presentation/presentation.component.ts");
    /* harmony import */


    var _avantapres_avantapres_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./avantapres/avantapres.component */
    "./src/app/avantapres/avantapres.component.ts");
    /* harmony import */


    var _images_images_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./images/images.component */
    "./src/app/images/images.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _demandedevis_demandedevis_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./demandedevis/demandedevis.component */
    "./src/app/demandedevis/demandedevis.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _realisations_realisations_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./realisations/realisations.component */
    "./src/app/realisations/realisations.component.ts");
    /* harmony import */


    var _services_enduitdecoratif_enduitdecoratif_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./services/enduitdecoratif/enduitdecoratif.component */
    "./src/app/services/enduitdecoratif/enduitdecoratif.component.ts");
    /* harmony import */


    var _services_nettoyagetoiture_nettoyagetoiture_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./services/nettoyagetoiture/nettoyagetoiture.component */
    "./src/app/services/nettoyagetoiture/nettoyagetoiture.component.ts");
    /* harmony import */


    var _services_renovationfacade_renovationfacade_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./services/renovationfacade/renovationfacade.component */
    "./src/app/services/renovationfacade/renovationfacade.component.ts");
    /* harmony import */


    var _services_renovationinterieur_renovationinterieur_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./services/renovationinterieur/renovationinterieur.component */
    "./src/app/services/renovationinterieur/renovationinterieur.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'accueil',
      pathMatch: "full"
    }, {
      path: 'Enduit-decoratif',
      component: _services_enduitdecoratif_enduitdecoratif_component__WEBPACK_IMPORTED_MODULE_10__["EnduitdecoratifComponent"]
    }, {
      path: 'Nettoyage-toiture',
      component: _services_nettoyagetoiture_nettoyagetoiture_component__WEBPACK_IMPORTED_MODULE_11__["NettoyagetoitureComponent"]
    }, {
      path: 'Renovation-facade',
      component: _services_renovationfacade_renovationfacade_component__WEBPACK_IMPORTED_MODULE_12__["RenovationfacadeComponent"]
    }, {
      path: 'Renovation-interieur',
      component: _services_renovationinterieur_renovationinterieur_component__WEBPACK_IMPORTED_MODULE_13__["RenovationinterieurComponent"]
    }, {
      path: 'accueil',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"]
    }, {
      path: 'Presentation',
      component: _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_3__["PresentationComponent"]
    }, {
      path: 'Avantapres',
      component: _avantapres_avantapres_component__WEBPACK_IMPORTED_MODULE_4__["AvantapresComponent"]
    }, {
      path: 'Images',
      component: _images_images_component__WEBPACK_IMPORTED_MODULE_5__["ImagesComponent"]
    }, {
      path: 'Services',
      component: _services_services_component__WEBPACK_IMPORTED_MODULE_6__["ServicesComponent"]
    }, {
      path: 'Demandedevis',
      component: _demandedevis_demandedevis_component__WEBPACK_IMPORTED_MODULE_7__["DemandedevisComponent"]
    }, {
      path: 'Contact',
      component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]
    }, {
      path: 'Realisations',
      component: _realisations_realisations_component__WEBPACK_IMPORTED_MODULE_9__["RealisationsComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(router) {
        var _this = this;

        _classCallCheck(this, AppComponent);

        this.router = router;
        this.title = 'aaconcept-angular';
        this.routePath = "";
        this.routePath = localStorage.getItem("routePath");
        this.router.events.subscribe(function (event) {
          //  this.initFacebookService();
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            // if(event.url != this.routePath && event.url != "/accueil"){
            if (event.url != _this.routePath) {
              localStorage.setItem("routePath", event.url); //location.reload();

              window.scroll(0, 0); //document.body.scrollTop = 0;
            }
          }
        });
      }

      _createClass(AppComponent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
        /*
          private initFacebookService(): void {
            const initParams: InitParams = {xfbml:true, version:'v3.2'};
            this.facebookService.init(initParams);
          }
        */

      }, {
        key: "scrollTop",
        value: function scrollTop() {
          window.scrollTo(0, 0);
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      consts: [["id", "pagebody"], ["type", "button", 1, "btn", "btn-success", "btn-scroll-top", 3, "click"], [1, "fas", "fa-arrow-up"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-footer");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener() {
            return ctx.scrollTop();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]],
      styles: [".btn-scroll-top[_ngcontent-%COMP%]{\r\n  position:fixed;\r\n  bottom: 20px;\r\n  right: 20px; \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsWUFBWTtFQUNaLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1zY3JvbGwtdG9we1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIGJvdHRvbTogMjBweDtcclxuICByaWdodDogMjBweDsgXHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.css']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/navbar/navbar.component */
    "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */


    var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/slider/slider.component */
    "./src/app/components/slider/slider.component.ts");
    /* harmony import */


    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/footer/footer.component */
    "./src/app/components/footer/footer.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _home_components_aboute_home_aboute_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home/components/aboute-home/aboute-home.component */
    "./src/app/home/components/aboute-home/aboute-home.component.ts");
    /* harmony import */


    var _home_components_blog1_home_blog1_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/components/blog1-home/blog1-home.component */
    "./src/app/home/components/blog1-home/blog1-home.component.ts");
    /* harmony import */


    var _home_components_blog2_home_blog2_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./home/components/blog2-home/blog2-home.component */
    "./src/app/home/components/blog2-home/blog2-home.component.ts");
    /* harmony import */


    var _home_components_blog3_home_blog3_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/components/blog3-home/blog3-home.component */
    "./src/app/home/components/blog3-home/blog3-home.component.ts");
    /* harmony import */


    var _home_components_blog4_home_blog4_home_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/components/blog4-home/blog4-home.component */
    "./src/app/home/components/blog4-home/blog4-home.component.ts");
    /* harmony import */


    var _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./presentation/presentation.component */
    "./src/app/presentation/presentation.component.ts");
    /* harmony import */


    var _avantapres_avantapres_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./avantapres/avantapres.component */
    "./src/app/avantapres/avantapres.component.ts");
    /* harmony import */


    var _images_images_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./images/images.component */
    "./src/app/images/images.component.ts");
    /* harmony import */


    var _services_services_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./services/services.component */
    "./src/app/services/services.component.ts");
    /* harmony import */


    var _demandedevis_demandedevis_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./demandedevis/demandedevis.component */
    "./src/app/demandedevis/demandedevis.component.ts");
    /* harmony import */


    var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./contact/contact.component */
    "./src/app/contact/contact.component.ts");
    /* harmony import */


    var _realisations_realisations_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./realisations/realisations.component */
    "./src/app/realisations/realisations.component.ts");
    /* harmony import */


    var _home_components_partenaire_partenaire_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./home/components/partenaire/partenaire.component */
    "./src/app/home/components/partenaire/partenaire.component.ts");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");
    /* harmony import */


    var _services_enduitdecoratif_enduitdecoratif_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./services/enduitdecoratif/enduitdecoratif.component */
    "./src/app/services/enduitdecoratif/enduitdecoratif.component.ts");
    /* harmony import */


    var _services_nettoyagetoiture_nettoyagetoiture_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/nettoyagetoiture/nettoyagetoiture.component */
    "./src/app/services/nettoyagetoiture/nettoyagetoiture.component.ts");
    /* harmony import */


    var _services_renovationfacade_renovationfacade_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/renovationfacade/renovationfacade.component */
    "./src/app/services/renovationfacade/renovationfacade.component.ts");
    /* harmony import */


    var _services_renovationinterieur_renovationinterieur_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/renovationinterieur/renovationinterieur.component */
    "./src/app/services/renovationinterieur/renovationinterieur.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _home_components_aboute_home_aboute_home_component__WEBPACK_IMPORTED_MODULE_8__["AbouteHomeComponent"], _home_components_blog1_home_blog1_home_component__WEBPACK_IMPORTED_MODULE_9__["Blog1HomeComponent"], _home_components_blog2_home_blog2_home_component__WEBPACK_IMPORTED_MODULE_10__["Blog2HomeComponent"], _home_components_blog3_home_blog3_home_component__WEBPACK_IMPORTED_MODULE_11__["Blog3HomeComponent"], _home_components_blog4_home_blog4_home_component__WEBPACK_IMPORTED_MODULE_12__["Blog4HomeComponent"], _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_13__["PresentationComponent"], _avantapres_avantapres_component__WEBPACK_IMPORTED_MODULE_14__["AvantapresComponent"], _images_images_component__WEBPACK_IMPORTED_MODULE_15__["ImagesComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"], _demandedevis_demandedevis_component__WEBPACK_IMPORTED_MODULE_17__["DemandedevisComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], _realisations_realisations_component__WEBPACK_IMPORTED_MODULE_19__["RealisationsComponent"], _home_components_partenaire_partenaire_component__WEBPACK_IMPORTED_MODULE_20__["PartenaireComponent"], _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_21__["SliderpageComponent"], _services_enduitdecoratif_enduitdecoratif_component__WEBPACK_IMPORTED_MODULE_22__["EnduitdecoratifComponent"], _services_nettoyagetoiture_nettoyagetoiture_component__WEBPACK_IMPORTED_MODULE_23__["NettoyagetoitureComponent"], _services_renovationfacade_renovationfacade_component__WEBPACK_IMPORTED_MODULE_24__["RenovationfacadeComponent"], _services_renovationinterieur_renovationinterieur_component__WEBPACK_IMPORTED_MODULE_25__["RenovationinterieurComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_4__["NavbarComponent"], _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_5__["SliderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], _home_components_aboute_home_aboute_home_component__WEBPACK_IMPORTED_MODULE_8__["AbouteHomeComponent"], _home_components_blog1_home_blog1_home_component__WEBPACK_IMPORTED_MODULE_9__["Blog1HomeComponent"], _home_components_blog2_home_blog2_home_component__WEBPACK_IMPORTED_MODULE_10__["Blog2HomeComponent"], _home_components_blog3_home_blog3_home_component__WEBPACK_IMPORTED_MODULE_11__["Blog3HomeComponent"], _home_components_blog4_home_blog4_home_component__WEBPACK_IMPORTED_MODULE_12__["Blog4HomeComponent"], _presentation_presentation_component__WEBPACK_IMPORTED_MODULE_13__["PresentationComponent"], _avantapres_avantapres_component__WEBPACK_IMPORTED_MODULE_14__["AvantapresComponent"], _images_images_component__WEBPACK_IMPORTED_MODULE_15__["ImagesComponent"], _services_services_component__WEBPACK_IMPORTED_MODULE_16__["ServicesComponent"], _demandedevis_demandedevis_component__WEBPACK_IMPORTED_MODULE_17__["DemandedevisComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"], _realisations_realisations_component__WEBPACK_IMPORTED_MODULE_19__["RealisationsComponent"], _home_components_partenaire_partenaire_component__WEBPACK_IMPORTED_MODULE_20__["PartenaireComponent"], _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_21__["SliderpageComponent"], _services_enduitdecoratif_enduitdecoratif_component__WEBPACK_IMPORTED_MODULE_22__["EnduitdecoratifComponent"], _services_nettoyagetoiture_nettoyagetoiture_component__WEBPACK_IMPORTED_MODULE_23__["NettoyagetoitureComponent"], _services_renovationfacade_renovationfacade_component__WEBPACK_IMPORTED_MODULE_24__["RenovationfacadeComponent"], _services_renovationinterieur_renovationinterieur_component__WEBPACK_IMPORTED_MODULE_25__["RenovationinterieurComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/avantapres/avantapres.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/avantapres/avantapres.component.ts ***!
    \****************************************************/

  /*! exports provided: AvantapresComponent */

  /***/
  function srcAppAvantapresAvantapresComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AvantapresComponent", function () {
      return AvantapresComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");

    var AvantapresComponent =
    /*#__PURE__*/
    function () {
      function AvantapresComponent() {
        _classCallCheck(this, AvantapresComponent);
      }

      _createClass(AvantapresComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AvantapresComponent;
    }();

    AvantapresComponent.ɵfac = function AvantapresComponent_Factory(t) {
      return new (t || AvantapresComponent)();
    };

    AvantapresComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AvantapresComponent,
      selectors: [["app-avantapres"]],
      decls: 40,
      vars: 0,
      consts: [["name", "Avant-Apr\xE8s"], [1, "container", 2, "padding-top", "50px", "padding-bottom", "50px"], [1, "col-12"], [1, "row"], [1, "col-sm-6", "item-realisation"], ["src", "assets/images/banner1.jpg", "alt", "product", 1, "img-fluid"], [1, "style-animation-image"], [1, "style-animation-text"], ["src", "assets/images/banner2.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/nettoyage de toiture/apresavant1.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/nettoyage de toiture/service3.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/renovation interieur/apresavant2.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/renovation interieur/apresavant3.jpg", "alt", "product", 1, "img-fluid"]],
      template: function AvantapresComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Projet-1 (Avant)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Projet-1 (Apr\xE8s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Projet-2 (Avant)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Projet-2 (Apr\xE8s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Projet-3 (Avant)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Projet-3 (Apr\xE8s)");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"]],
      styles: [".item-realisation[_ngcontent-%COMP%]{\r\n     \r\n}\r\n\r\n.item-realisation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n    border: green solid 1px;\r\n    overflow: hidden;\r\n    margin:5px;\r\n    text-align:center;\r\n}\r\n\r\n.item-realisation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to top, black, #77BB0C);\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    transition: transform 1s;\r\n}\r\n\r\n.item-realisation[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%]{\r\n    transform: scale(1.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXZhbnRhcHJlcy9hdmFudGFwcmVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksbURBQW1EO0FBQ3ZEOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2F2YW50YXByZXMvYXZhbnRhcHJlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLml0ZW0tcmVhbGlzYXRpb257XHJcbiAgICAgXHJcbn1cclxuXHJcbi5pdGVtLXJlYWxpc2F0aW9uIGRpdntcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IGdyZWVuIHNvbGlkIDFweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuXHJcbi5pdGVtLXJlYWxpc2F0aW9uIGRpdiBkaXZ7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgIzc3QkIwQyk7XHJcbn1cclxuXHJcbmgye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW1nLWZsdWlke1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG59XHJcblxyXG4uaXRlbS1yZWFsaXNhdGlvbjpob3ZlciAuaW1nLWZsdWlke1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AvantapresComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-avantapres',
          templateUrl: './avantapres.component.html',
          styleUrls: ['./avantapres.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Presentation"];
    };

    var _c1 = function _c1() {
      return ["/accueil"];
    };

    var _c2 = function _c2() {
      return ["/Realisations"];
    };

    var _c3 = function _c3() {
      return ["/Services"];
    };

    var _c4 = function _c4() {
      return ["/Avantapres"];
    };

    var _c5 = function _c5() {
      return ["/Images"];
    };

    var _c6 = function _c6() {
      return ["/Contact"];
    };

    var _c7 = function _c7() {
      return ["/Demandedevis"];
    };

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };

    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 109,
      vars: 26,
      consts: [[1, "footer-22"], [1, "gallery-inner", "container", "py-md-5", "py-3"], [1, "row", "stats-con"], [1, "col-lg-3", "stats_info", "counter_grid", "class1-footer", 2, "text-align", "center"], ["href", "/contact", 1, "footer-button"], [1, "col-lg-3", "stats_info", "counter_grid", "class2-footer"], ["href", "tel:+33535542658", 1, "tel"], ["href", "mailto:contact@archenergie.fr", 1, "mail"], [1, "col-lg-3", "stats_info", "counter_grid", "mt-lg-0", "mt-5", "class3-footer"], ["href", "https://www.facebook.com/Archenergie/", "target", "_blank", "title", "Suivre notre actualit\xE9 sur Facebook", 1, "social"], ["src", "./assets/images/fb.png"], ["href", "https://www.youtube.com/channel/UC-jUFEeO03CQKlc3GkJ6jNw", "target", "_blank", "title", "Visionner nos vid\xE9os", 1, "social"], ["src", "./assets/images/ink.png"], ["href", "https://www.pinterest.fr/archenergie/", "target", "_blank", "title", "Suivre notre actualit\xE9 sur Pinterest", "id", "yt", 1, "social"], ["src", "./assets/images/inst.png"], [1, "col-lg-3", "stats_info", "counter_grid", "mt-lg-0", "mt-5", "class4-footer"], [1, "column1", "align-self"], [1, "footer-title-29", "mb-1"], [1, "column1"], ["action", "#", "method", "post", 1, "subscribe"], [1, "input-group", "mb-3"], ["type", "text", "placeholder", "Recipient's username", "aria-label", "Recipient's username", "aria-describedby", "button-addon2", 1, "form-control"], ["type", "button", "id", "button-addon2", 1, "btn", "btn-outline-secondary", 2, "color", "white", "border", "white 2px solid"], ["aria-hidden", "true", 1, "fa", "fa-paper-plane"], [1, "w3l-footer-29-main", 2, "background-color", "#1b1a1a"], [1, "footer-29", "py-5"], [1, "container", "py-lg-4"], [1, "row", "footer-top-29"], [1, "footer-list-29", "col-lg-4"], [1, "footer-title-29"], [3, "routerLink"], [1, "col-lg-2", "col-md-6", "col-sm-4", "footer-list-29", "footer-2", "mt-lg-0", "mt-5"], [1, "col-lg-3", "col-md-6", "footer-list-29", "footer-3", "mt-lg-0", "mt-5"], [1, "col-lg-3", "col-md-6", "col-sm-8", "footer-list-29", "footer-1", "mt-lg-0", "mt-5"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11046.97163744175!2d6.215172189417566!3d46.195674465860726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6fd432ec967f%3A0x408ab2ae4baa630!2sAmbilly%2C%20France!5e0!3m2!1sfr!2stn!4v1638309006273!5m2!1sfr!2stn", "width", "100%", "height", "400px", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Contactez-nous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Un projet\xA0? Une question\xA0?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Soci\xE9t\xE9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Aa.concept-Renov");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Ambilly 74 100 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "06 45 35 96 66 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " 06 89 96 92 92");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "info@aaconcept-renov.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Suivez-nous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h6", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Subscribe to our Newsletter ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Enter your email and receive the latest news from us.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "form", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "section", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pr\xE9sentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "La soci\xE9t\xE9 A.a.concept renov est fond\xE9e en 2015 ,nous mettons \xE0 votre disposition une \xE9quipe fiable et d\xE9vou\xE9e. Notre entreprise de r\xE9novation vous propose un service hautement professionnel pour la r\xE9novation int\xE9rieure et ext\xE9rieure... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Lire suite");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Site-Maps");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Accueil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Pr\xE9sentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "R\xE9alisations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Avant/Apr\xE8s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "a", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "h6", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Contact Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "iframe", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](59);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".w3l-footer-29-main[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.w3l-footer-29-main[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: white;\r\n    margin-left: 5px;\r\n}\r\n\r\n.w3l-footer-29-main[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.w3l-footer-29-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    list-style-type: none;\r\n    display: block;\r\n    width: 100%;\r\n    padding-left: 0px !important;\r\n}\r\n\r\n.w3l-footer-29-main[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    float:left;\r\n    width: 100%;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.w3l-footer-29-main[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    color: #C2C5DB;\r\n    font-weight: 300;\r\n    font-size: 14px;\r\n    -webkit-text-decoration: underline transparent;\r\n            text-decoration: underline transparent;\r\n}\r\n\r\nh6[_ngcontent-%COMP%]{\r\n    color: #C2C5DB;   \r\n}\r\n\r\n.footer-22[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.459), #77BB0C), url(/assets/images/banner1.jpg) center no-repeat;\r\n    \r\n}\r\n\r\n.class1-footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    font-size: 1.5em;\r\n    font-weight: 700;\r\n    text-transform: uppercase;\r\n    color: #fff;\r\n}\r\n\r\n.class1-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  color:white;\r\n}\r\n\r\n.footer-button[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    border: 0.15em solid #fff;\r\n    background: none;\r\n    color: #fff;\r\n    font: Montserrat, sans-serif;\r\n    padding: 0.37em 1.4em 0.3em;\r\n    cursor: pointer;\r\n    transition: background 2s, color .4s;\r\n    display: inline-block;\r\n    text-align: center;\r\n    text-transform: uppercase;\r\n    font-weight: 700;\r\n}\r\n\r\n.footer-button[_ngcontent-%COMP%]:hover {\r\n    background: white;\r\n    color: green;\r\n}\r\n\r\n.class2-footer[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.class2-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color:white;\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n    font-size: 20px;\r\n}\r\n\r\n.class3-footer[_ngcontent-%COMP%]{\r\n    color: white;\r\n    text-align: center;\r\n}\r\n\r\n.class3-footer[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 40px;\r\n}\r\n\r\n.class3-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin: 10px;\r\n}\r\n\r\n.class3-footer[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background-color: black;\r\n    border-radius: 50%;\r\n    padding: 30px;\r\n}\r\n\r\n.class4-footer[_ngcontent-%COMP%]{\r\n    text-align: center;\r\n}\r\n\r\n.class4-footer[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 25px;\r\n    font-weight: 600;\r\n}\r\n\r\n.class4-footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: rgb(255, 255, 255);\r\n    font-size: 17px;\r\n    line-height: 28px;\r\n    text-transform: capitalize;\r\n    margin-bottom: 25px;\r\n    font-weight: 600;\r\n}\r\n\r\n.footer-title-29[_ngcontent-%COMP%]{\r\n    font-size: 1.3rem;\r\n    color: #ffffff;\r\n    text-transform: uppercase;\r\n    font-family: 'Montserrat', sans-serif !important;\r\n    font-weight: 700;\r\n    border-bottom: 1px solid #eaeaea;\r\n}\r\n\r\n.footer-list-29[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    font-size: 20px !important;\r\n    color: #ffffff !important;\r\n    font-weight: 500;\r\n    \r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdCQUFnQjtBQUNwQjs7QUFJQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLFdBQVc7SUFDWCw0QkFBNEI7QUFDaEM7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsV0FBVztJQUNYLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLGVBQWU7SUFDZiw4Q0FBc0M7WUFBdEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLHVIQUF1SDs7QUFFM0g7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLFdBQVc7QUFDYjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQix5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsMkJBQTJCO0lBQzNCLGVBQWU7SUFDZixvQ0FBb0M7SUFDcEMscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLG1CQUFtQjtJQUNuQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLGdEQUFnRDtJQUNoRCxnQkFBZ0I7SUFDaEIsZ0NBQWdDO0FBQ3BDOztBQUVBO0lBQ0ksMEJBQTBCO0lBQzFCLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0FBRXBCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudzNsLWZvb3Rlci0yOS1tYWluIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi53M2wtZm9vdGVyLTI5LW1haW4gYXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnczbC1mb290ZXItMjktbWFpbiBoNHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnczbC1mb290ZXItMjktbWFpbiB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4udzNsLWZvb3Rlci0yOS1tYWluIGxpe1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLnczbC1mb290ZXItMjktbWFpbiB1bCBhe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBjb2xvcjogI0MyQzVEQjtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuaDZ7XHJcbiAgICBjb2xvcjogI0MyQzVEQjsgICBcclxufVxyXG5cclxuLmZvb3Rlci0yMntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC40NTkpLCAjNzdCQjBDKSwgdXJsKC9hc3NldHMvaW1hZ2VzL2Jhbm5lcjEuanBnKSBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgXHJcbn1cclxuXHJcbi5jbGFzczEtZm9vdGVyIGgye1xyXG4gICAgZm9udC1zaXplOiAxLjVlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5jbGFzczEtZm9vdGVyIHB7XHJcbiAgbWFyZ2luLXRvcDogMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIGNvbG9yOndoaXRlO1xyXG59XHJcblxyXG4uZm9vdGVyLWJ1dHRvbiB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXI6IDAuMTVlbSBzb2xpZCAjZmZmO1xyXG4gICAgYmFja2dyb3VuZDogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udDogTW9udHNlcnJhdCwgc2Fucy1zZXJpZjtcclxuICAgIHBhZGRpbmc6IDAuMzdlbSAxLjRlbSAwLjNlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQgMnMsIGNvbG9yIC40cztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG4uZm9vdGVyLWJ1dHRvbjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIGNvbG9yOiBncmVlbjtcclxufVxyXG5cclxuLmNsYXNzMi1mb290ZXJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbGFzczItZm9vdGVyIGF7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5jbGFzczMtZm9vdGVye1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uY2xhc3MzLWZvb3RlciBpbWd7XHJcbiAgICB3aWR0aDogNDBweDtcclxufVxyXG5cclxuLmNsYXNzMy1mb290ZXIgYXtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNsYXNzMy1mb290ZXIgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxufVxyXG5cclxuLmNsYXNzNC1mb290ZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jbGFzczQtZm9vdGVyIGg2e1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuXHJcbi5jbGFzczQtZm9vdGVyIHB7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI4cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uZm9vdGVyLXRpdGxlLTI5e1xyXG4gICAgZm9udC1zaXplOiAxLjNyZW07XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlYWVhZWE7XHJcbn1cclxuXHJcbi5mb290ZXItbGlzdC0yOSBhe1xyXG4gICAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIFxyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/accueil"];
    };

    var _c1 = function _c1() {
      return ["/Presentation"];
    };

    var _c2 = function _c2() {
      return ["/Realisations"];
    };

    var _c3 = function _c3() {
      return ["/Services"];
    };

    var _c4 = function _c4() {
      return ["/Avantapres"];
    };

    var _c5 = function _c5() {
      return ["/Images"];
    };

    var _c6 = function _c6() {
      return ["/Contact"];
    };

    var _c7 = function _c7() {
      return ["/Demandedevis"];
    };

    var NavbarComponent =
    /*#__PURE__*/
    function () {
      function NavbarComponent() {
        _classCallCheck(this, NavbarComponent);
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "displaySousMenu",
        value: function displaySousMenu() {
          var buttons = document.getElementsByClassName("icon-menu");
          var listMobile = document.getElementsByClassName("navbar-list-mobile");
          var backgroundMobile = document.getElementsByClassName("backround-class");

          if (buttons[0].getAttribute("class").indexOf("desactive") == -1) {
            buttons[0].setAttribute("class", "fas fa-bars icon-menu desactive");
            buttons[1].setAttribute("class", "fas fa-times icon-menu active");
            listMobile[0].setAttribute("class", "navbar-list-mobile active active-list-mobile");
            backgroundMobile[0].setAttribute("class", "content backround-class active-backround");
          } else {
            buttons[0].setAttribute("class", "fas fa-bars icon-menu active");
            buttons[1].setAttribute("class", "fas fa-times icon-menu desactive");
            listMobile[0].setAttribute("class", "navbar-list-mobile");
            backgroundMobile[0].setAttribute("class", "content backround-class");
          }
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };

    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 88,
      vars: 32,
      consts: [["id", "navbar", 1, "navbar", "navbar-blanc"], [1, "content", "backround-class"], [1, "container", "active-container"], [2, "position", "absolute", "background-color", "#fe5a0e", "top", "0px", "left", "0px", "height", "5px", "width", "100%"], [1, "topbar"], ["title", "06 45 35 96 66", "href", "tel:0645359666", 1, ""], ["src", "/assets/images/icon1.png"], [1, "d-none", "d-md-block"], ["title", "CONTACT", "href", "/contact", 1, ""], ["src", "/assets/images/icon2.png"], [1, "navbar-list", 2, "padding", "0px"], [1, "item-sous-navbar"], ["src", "./assets/images/Untitled-2.png", "alt", "", 1, "img-fluid"], [2, "margin-top", "40px"], [2, "margin-top", "40px", "color", "transparent"], [1, "fa", "fa-moon", 2, "margin-top", "40px", "margin-left", "100px"], [1, "content", "active-container"], [1, "item-sous-navbar-2", "linear-gradient"], [1, "navbar-list2"], [3, "routerLink"], [1, "content", "active-content"], [1, "navbar-list", 2, "margin", "0px", "padding", "0px"], ["src", "./assets/images/Untitled-2.png", "alt", "", 1, "img-fluid", 2, "height", "80px"], [1, "item-sous-navbar", 2, "margin-top", "50px", "margin-bottom", "10px"], [1, "fa", "fa-moon"], [1, "icon-small-navbar", 3, "click"], [1, "fas", "fa-bars", "icon-menu", "active"], [1, "fas", "fa-times", "icon-menu", "desactive"], [1, "navbar-list-mobile"], [2, "height", "50px", "width", "100%"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "06 45 35 96 66 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " 06 89 96 92 92");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "info@aaconcept-renov.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u201C\u201D La qualit\xE9 de notre travail est le produit de notre professionnalisme \u201C\u201D");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u201C\u201D La qualit\xE9 de notre travail est le pr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "i", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Accueil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Pr\xE9sentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "R\xE9alisations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Avant/Apr\xE8s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "ul", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "li", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "i", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "span", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_span_click_59_listener() {
            return ctx.displaySousMenu();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "ul", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Accueil");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Pr\xE9sentation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "R\xE9alisations");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "Avant/Apr\xE8s");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Blog");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "div", 29);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](27, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](28, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](29, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](30, _c6));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](31, _c7));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]],
      styles: [".navbar[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    position: fixed;\r\n    color: white;\r\n    padding: 0px;\r\n    padding-top: 10px;\r\n    z-index: 5;\r\n}\r\n\r\n.navbar-blanc[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n    color: #000;\r\n}\r\n\r\n.navbar-list[_ngcontent-%COMP%]{\r\n    width: 100%; \r\n    display: flex; \r\n    justify-content: space-between;\r\n}\r\n\r\n.item-sous-navbar[_ngcontent-%COMP%]{\r\n    display: inline-flex;\r\n }\r\n\r\n.item-sous-navbar-2[_ngcontent-%COMP%]{\r\n    margin-left: auto; \r\n    background-color: #77BB0C;\r\n }\r\n\r\n.linear-gradient[_ngcontent-%COMP%] {\r\n    background: linear-gradient(to top, black, #77BB0C);\r\n  }\r\n\r\n.navbar-list2[_ngcontent-%COMP%]{\r\n    justify-content: center; display: flex; \r\n    margin-bottom:0px;\r\n}\r\n\r\n.navbar-list2[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n   display: inline;\r\n   margin: 10px 0px;\r\n   font-weight: 700;\r\n   font-size: 20px;\r\n   color: white;\r\n}\r\n\r\n.navbar-list2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    padding: 10px 20px;\r\n    color: white;\r\n }\r\n\r\n.navbar-list2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    background: linear-gradient(to top, #77BB0C, #77BB0C);\r\n }\r\n\r\n.navbar-list-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: white;\r\n }\r\n\r\n.navbar-list-mobile[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    color: black;\r\n}\r\n\r\n.item-sous-navbar[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    font-size: 20px;\r\n}\r\n\r\n.icon-small-navbar[_ngcontent-%COMP%]{\r\n   margin-left: 30px;  \r\n   display: none;\r\n   background-color: #fe5a0e;\r\n   border-radius: 5px;\r\n   padding: 10px;\r\n   color: white;\r\n   width: 40px;\r\n   text-align: center;\r\n   margin-top: -10px;\r\n}\r\n\r\n.navbar-list-mobile[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    max-height: 0;\r\n    transition: max-height 0.25s ease-out;\r\n    overflow: hidden;\r\n    margin: 0px;\r\n}\r\n\r\n.active-list-mobile[_ngcontent-%COMP%]{\r\n    max-height: 500px;\r\n    transition: max-height 0.25s ease-in;\r\n}\r\n\r\n.backround-class[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top:0px;\r\n    left:0px;\r\n    z-index: 0;\r\n    width: 100%;\r\n    height: 0;\r\n    transition: height 0.25s ease-out;\r\n    overflow: hidden;\r\n    background-color: rgba(0, 0, 0, 0.432);\r\n}\r\n\r\n.navbar-blanc[_ngcontent-%COMP%]   .backround-class[_ngcontent-%COMP%]{\r\n    background-color:transparent ;\r\n}\r\n\r\n.active-backround[_ngcontent-%COMP%]{\r\n    height: 100%;\r\n    transition: height 0.25s ease-in;\r\n    background-color: rgba(0, 0, 0, 0.479);\r\n}\r\n\r\n.navbar-list-mobile[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: block;\r\n    text-align: center;\r\n    margin: 10px;\r\n    font-weight: 800;\r\n}\r\n\r\n.active-container[_ngcontent-%COMP%]{\r\n   display: block;\r\n   width: 100%;\r\n   z-index: 1;\r\n}\r\n\r\n.item-sous-navbar[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    font-family: 'Comforter Brush', cursive;\r\n}\r\n\r\n.active-content[_ngcontent-%COMP%]{\r\n   display: none;\r\n   width: 100%;\r\n   padding: 0px 10px;\r\n   z-index: 1;\r\n}\r\n\r\n@media screen and (max-width: 964px) {\r\n    \r\n    .navbar[_ngcontent-%COMP%]{\r\n        padding-top: 10px;\r\n    }\r\n\r\n    .icon-small-navbar[_ngcontent-%COMP%]{\r\n        margin-left: 15px;  \r\n        display: block;\r\n    }\r\n\r\n    \r\n\r\n    .active[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n    \r\n    .desactive[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n\r\n    .active-container[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n     \r\n    .active-content[_ngcontent-%COMP%]{\r\n        display: block;\r\n    }\r\n\r\n}\r\n\r\n.item-sous-navbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n  height: 100px;\r\n}\r\n\r\n.topbar[_ngcontent-%COMP%] {\r\n    background-image: url(/assets/images/adress.png);\r\n    background-repeat: no-repeat;\r\n    background-size: contain;\r\n    float: right;\r\n    width: 500px;\r\n    height: 65px;\r\n    font-size: 14px;\r\n    background-position: top;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: absolute;\r\n    top:0px;\r\n    left:0px;\r\n    right: 0px;\r\n    margin-left: auto;\r\n    margin-right: 100px;\r\n}\r\n\r\n.topbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    height: 40px;\r\n}\r\n\r\n.topbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    margin-top: -5px;\r\n    margin-left: 10px;\r\n   display: flex;\r\n   direction: row;\r\n   color: #538109;\r\n   font-weight: 700;\r\n}\r\n\r\n.topbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:last-child   span[_ngcontent-%COMP%]{\r\n    margin-top: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztJQUNYLGVBQWU7SUFDZixZQUFZO0lBQ1osWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsNEVBQTRFO0lBQzVFLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksb0JBQW9CO0NBQ3ZCOztBQUVBO0lBQ0csaUJBQWlCO0lBQ2pCLHlCQUF5QjtDQUM1Qjs7QUFFQTtJQUNHLG1EQUFtRDtFQUNyRDs7QUFFRjtJQUNJLHVCQUF1QixFQUFFLGFBQWE7SUFDdEMsaUJBQWlCO0FBQ3JCOztBQUVBO0dBQ0csZUFBZTtHQUNmLGdCQUFnQjtHQUNoQixnQkFBZ0I7R0FDaEIsZUFBZTtHQUNmLFlBQVk7QUFDZjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsWUFBWTtDQUNmOztBQUVBO0lBQ0cscURBQXFEO0NBQ3hEOztBQUlBO0lBQ0cscUJBQXFCO0lBQ3JCLFlBQVk7Q0FDZjs7QUFFQTtJQUNHLHFCQUFxQjtJQUNyQixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtHQUNHLGlCQUFpQjtHQUNqQixhQUFhO0dBQ2IseUJBQXlCO0dBQ3pCLGtCQUFrQjtHQUNsQixhQUFhO0dBQ2IsWUFBWTtHQUNaLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsaUJBQWlCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsZ0JBQWdCO0lBQ2hCLHNDQUFzQztBQUMxQzs7QUFFQTtJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCOztBQUVBO0dBQ0csY0FBYztHQUNkLFdBQVc7R0FDWCxVQUFVO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7QUFFQTtHQUNHLGFBQWE7R0FDYixXQUFXO0dBQ1gsaUJBQWlCO0dBQ2pCLFVBQVU7QUFDYjs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGlCQUFpQjtRQUNqQixjQUFjO0lBQ2xCOztJQUVBOztNQUVFOztJQUVGO1FBQ0ksY0FBYztJQUNsQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksY0FBYztJQUNsQjs7QUFFSjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFHQTtJQUNJLGdEQUFnRDtJQUNoRCw0QkFBNEI7SUFDNUIsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxRQUFRO0lBQ1IsVUFBVTtJQUNWLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtHQUNsQixhQUFhO0dBQ2IsY0FBYztHQUNkLGNBQWM7R0FDZCxnQkFBZ0I7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm5hdmJhcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMHB4O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICB6LWluZGV4OiA1O1xyXG59XHJcblxyXG4ubmF2YmFyLWJsYW5je1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlzdHtcclxuICAgIHdpZHRoOiAxMDAlOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7IFxyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG59XHJcblxyXG4uaXRlbS1zb3VzLW5hdmJhcntcclxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gfVxyXG5cclxuIC5pdGVtLXNvdXMtbmF2YmFyLTJ7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bzsgXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzdCQjBDO1xyXG4gfVxyXG5cclxuIC5saW5lYXItZ3JhZGllbnQge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssICM3N0JCMEMpO1xyXG4gIH1cclxuXHJcbi5uYXZiYXItbGlzdDJ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgZGlzcGxheTogZmxleDsgXHJcbiAgICBtYXJnaW4tYm90dG9tOjBweDtcclxufVxyXG5cclxuLm5hdmJhci1saXN0MiBsaXtcclxuICAgZGlzcGxheTogaW5saW5lO1xyXG4gICBtYXJnaW46IDEwcHggMHB4O1xyXG4gICBmb250LXdlaWdodDogNzAwO1xyXG4gICBmb250LXNpemU6IDIwcHg7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLm5hdmJhci1saXN0MiBhe1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gfVxyXG5cclxuIC5uYXZiYXItbGlzdDIgYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsICM3N0JCMEMsICM3N0JCMEMpO1xyXG4gfVxyXG4gXHJcblxyXG5cclxuIC5uYXZiYXItbGlzdC1tb2JpbGUgYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuIH1cclxuXHJcbiAubmF2YmFyLWxpc3QtbW9iaWxlIGF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4uaXRlbS1zb3VzLW5hdmJhciBpIHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmljb24tc21hbGwtbmF2YmFye1xyXG4gICBtYXJnaW4tbGVmdDogMzBweDsgIFxyXG4gICBkaXNwbGF5OiBub25lO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1YTBlO1xyXG4gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgIGNvbG9yOiB3aGl0ZTtcclxuICAgd2lkdGg6IDQwcHg7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWFyZ2luLXRvcDogLTEwcHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlzdC1tb2JpbGV7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2Utb3V0O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMHB4O1xyXG59XHJcblxyXG4uYWN0aXZlLWxpc3QtbW9iaWxle1xyXG4gICAgbWF4LWhlaWdodDogNTAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuMjVzIGVhc2UtaW47XHJcbn1cclxuXHJcbi5iYWNrcm91bmQtY2xhc3N7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6MHB4O1xyXG4gICAgbGVmdDowcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4yNXMgZWFzZS1vdXQ7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQzMik7XHJcbn1cclxuXHJcbi5uYXZiYXItYmxhbmMgLmJhY2tyb3VuZC1jbGFzc3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQgO1xyXG59XHJcblxyXG4uYWN0aXZlLWJhY2tyb3VuZHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjI1cyBlYXNlLWluO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQ3OSk7XHJcbn1cclxuXHJcbi5uYXZiYXItbGlzdC1tb2JpbGUgbGl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbn1cclxuXHJcbi5hY3RpdmUtY29udGFpbmVye1xyXG4gICBkaXNwbGF5OiBibG9jaztcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5pdGVtLXNvdXMtbmF2YmFyIHB7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0ZXIgQnJ1c2gnLCBjdXJzaXZlO1xyXG59XHJcblxyXG4uYWN0aXZlLWNvbnRlbnR7XHJcbiAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgei1pbmRleDogMTtcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTY0cHgpIHtcclxuICAgIFxyXG4gICAgLm5hdmJhcntcclxuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuaWNvbi1zbWFsbC1uYXZiYXJ7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7ICBcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbiAgICAvKi5pdGVtLXNvdXMtbmF2YmFyOm50aC1jaGlsZCgyKXtcclxuICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9Ki9cclxuXHJcbiAgICAuYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAuZGVzYWN0aXZle1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLmFjdGl2ZS1jb250YWluZXJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgICBcclxuICAgIC5hY3RpdmUtY29udGVudHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5pdGVtLXNvdXMtbmF2YmFyIGltZ3tcclxuICBoZWlnaHQ6IDEwMHB4O1xyXG59XHJcblxyXG5cclxuLnRvcGJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pbWFnZXMvYWRyZXNzLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA2NXB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowcHg7XHJcbiAgICBsZWZ0OjBweDtcclxuICAgIHJpZ2h0OiAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi50b3BiYXIgaW1ne1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcblxyXG4udG9wYmFyIGF7XHJcbiAgICBtYXJnaW4tdG9wOiAtNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgIGRpcmVjdGlvbjogcm93O1xyXG4gICBjb2xvcjogIzUzODEwOTtcclxuICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG5cclxuLnRvcGJhciBhOmxhc3QtY2hpbGQgc3BhbntcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/slider/slider.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/slider/slider.component.ts ***!
    \*******************************************************/

  /*! exports provided: SliderComponent */

  /***/
  function srcAppComponentsSliderSliderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderComponent", function () {
      return SliderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Demandedevis"];
    };

    var _c1 = function _c1() {
      return ["/Contact"];
    };

    var SliderComponent =
    /*#__PURE__*/
    function () {
      function SliderComponent() {
        _classCallCheck(this, SliderComponent);

        this.sliders = [];
        this.slideIndex = 1;
        this.isClick = false;
        this.nbrIsAuto = 0;
      }

      _createClass(SliderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          var timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
          timer.subscribe(function (n) {
            _this2.carouselAuto();
          });
        }
      }, {
        key: "carouselAuto",
        value: function carouselAuto() {
          if (this.nbrIsAuto == 0) {
            this.showDivs(this.slideIndex + 1);
          }
        }
      }, {
        key: "plusDivs",
        value: function plusDivs(n) {
          var _this3 = this;

          this.nbrIsAuto++;

          if (!this.isClick) {
            this.showDivs(this.slideIndex + n);
          }

          setTimeout(function () {
            _this3.nbrIsAuto--;
          }, 5000);
        }
      }, {
        key: "setDivs",
        value: function setDivs(n) {
          var _this4 = this;

          this.nbrIsAuto++;
          this.showDivs(n + 1);
          setTimeout(function () {
            _this4.nbrIsAuto--;
          }, 5000);
        }
      }, {
        key: "showDivs",
        value: function showDivs(slideIndexSuivant) {
          var _this5 = this;

          this.isClick = true;
          var x = document.getElementsByClassName("item-slider");

          if (slideIndexSuivant > x.length) {
            slideIndexSuivant = 1;
          } else if (slideIndexSuivant < 1) {
            slideIndexSuivant = x.length;
          }

          for (var i = 0; i < x.length; i++) {
            x[i].setAttribute("style", "transform :translateX(" + -100 * (slideIndexSuivant - 1) + "%)");
          }

          this.slideIndex = slideIndexSuivant;
          setTimeout(function () {
            _this5.isClick = false;
          }, 800);
        }
      }]);

      return SliderComponent;
    }();

    SliderComponent.ɵfac = function SliderComponent_Factory(t) {
      return new (t || SliderComponent)();
    };

    SliderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderComponent,
      selectors: [["app-slider"]],
      decls: 52,
      vars: 16,
      consts: [[2, "position", "relative", "width", "100%"], [2, "position", "absolute", "height", "100%", "width", "100%", "top", "0px", "left", "0px", "background-color", "rgba(0, 0, 0, 0.507)"], [1, "conteneur-slider"], [1, "item-slider", "slider1"], [1, "container"], [1, "banner-info-bg"], [1, "mt-4", "pr-lg-4", 2, "color", "transparent"], [1, "btn", "btn-style", "btn-white", "mt-sm-5", "mt-4", 3, "routerLink"], [1, "btn", "btn-style", "btn-primary", "mt-sm-5", "mt-4", "mr-2", 3, "routerLink"], [1, "item-slider", "slider2"], [1, "item-slider", "slider3"], [1, "item-slider", "slider4"], [2, "position", "absolute", "width", "100%", "height", "10%", "margin", "auto", "top", "0px", "bottom", "0px", "padding", "10px"], [1, "w3-button", "w3-display-left", 3, "click"], [1, "w3-button", "w3-display-right", 2, "float", "right", 3, "click"]],
      template: function SliderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Votre Satisfaction est notre priorit\xE9");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, doloremque placeat aut numquam ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Demande Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Les particuliers et les professionneles parlent de nous");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, doloremque placeat aut numquam ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Demande Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Votre maison de demain passe entre nos belles mains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, doloremque placeat aut numquam ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Demande Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Votre maison de demain passe entre nos belles mains");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, doloremque placeat aut numquam ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Demande Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Contact");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_48_listener() {
            return ctx.plusDivs(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "\u276E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SliderComponent_Template_button_click_50_listener() {
            return ctx.plusDivs(1 - 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "\u276F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: [".item-slider[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n}\r\n\r\n.item-slider[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n    transition: transform 1000ms ease-in-out;\r\n    position: relative;\r\n    flex-shrink: 0;\r\n}\r\n\r\n.conteneur-slider[_ngcontent-%COMP%]{\r\n    width: 100%; \r\n    overflow-x: hidden; \r\n    display: flex; \r\n    flex-direction: row; \r\n    flex-wrap: nowrap;\r\n}\r\n\r\n.w3-button[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n    background-color: transparent;\r\n    border: none;\r\n    color: rgba(#ffffff, 0.8);\r\n    text-shadow: 1px 1px 1px #1f1e1e;\r\n    font-weight: 800;\r\n  }\r\n\r\n.w3-button[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    text-shadow: 2px 2px 3px #1f1e1e;\r\n  }\r\n\r\n.banner-info-bg[_ngcontent-%COMP%]{\r\n      color: white;\r\n      margin: 200px auto;\r\n      margin-bottom: 150px;\r\n      max-width: 700px;\r\n      float:left;\r\n  }\r\n\r\nh5[_ngcontent-%COMP%]{\r\n  font-size: 85px;\r\n  line-height: 90px;\r\n  font-weight: 700;\r\n}\r\n\r\n@media (max-width: 1000px){\r\n    .banner-info-bg[_ngcontent-%COMP%]{\r\n      margin: 150px auto;\r\n      margin-bottom: 120px;\r\n    }\r\n\r\n    h5[_ngcontent-%COMP%]{\r\n      font-size: 50px;\r\n      line-height: 50px;\r\n    }\r\n  }\r\n\r\n@media (max-width: 750px){\r\n    .banner-info-bg[_ngcontent-%COMP%]{\r\n      margin: 100px auto;\r\n      margin-bottom: 80px;\r\n    }\r\n  }\r\n\r\n@media (max-width: 568px){\r\n    .banner-info-bg[_ngcontent-%COMP%]{\r\n      margin: 80px auto;\r\n      margin-bottom: 50px;\r\n    }\r\n  }\r\n\r\n.slider1[_ngcontent-%COMP%]{\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.425)), url(/assets/images/banner1.jpg) center no-repeat;\r\n}\r\n\r\n.slider2[_ngcontent-%COMP%]{\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.425)), url(/assets/images/banner2.jpg) center no-repeat;\r\n}\r\n\r\n.slider3[_ngcontent-%COMP%]{\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.425)), url(/assets/images/banner3.jpg) center no-repeat;\r\n}\r\n\r\n.slider4[_ngcontent-%COMP%]{\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.425)), url(/assets/images/banner4.jpg) center no-repeat;\r\n}\r\n\r\n.slider5[_ngcontent-%COMP%]{\r\n  background: linear-gradient(0deg, rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.425)), url(/assets/images/renovation_de_facade/243140707_400781178296405_5815398119265706037_n.jpg) center no-repeat;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n  font-size: 18px;\r\n  font-weight: 600;\r\n}\r\n\r\n.banner-info-bg[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n  padding: 12px 36px;\r\n  font-size: 16px;\r\n  line-height: 26px;\r\n  font-weight: 600;\r\n  transition: 0.3s ease-in;\r\n  border-radius: 6px;\r\n  cursor: pointer !important;\r\n  font-family: 'Barlow', sans-serif;\r\n  color: #fff;\r\n  background-color: #fe5a0e;\r\n  border-color: #fe5a0e;\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.btn-white[_ngcontent-%COMP%]{\r\n  color:  #fe5a0e !important;\r\n  background-color: #fff !important;\r\n  border-color: #fe5a0e !important;\r\n}\r\n\r\nselect[_ngcontent-%COMP%]{\r\n  width: auto;\r\n  display: inline-flex;\r\n  margin-top: 3rem !important;\r\n  margin-right: 0.5rem !important;\r\n}\r\n\r\n.blog-demande-devis[_ngcontent-%COMP%]{\r\n  display: flex;\r\n  flex-direction: row;\r\n  flex-wrap: nowrap;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXIvc2xpZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLFlBQVk7SUFDWixnQ0FBZ0M7RUFDbEM7O0FBRUE7TUFDSSxZQUFZO01BQ1osa0JBQWtCO01BQ2xCLG9CQUFvQjtNQUNwQixnQkFBZ0I7TUFDaEIsVUFBVTtFQUNkOztBQUdGO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUU7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixvQkFBb0I7SUFDdEI7O0lBRUE7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO0lBQ25CO0VBQ0Y7O0FBR0E7SUFDRTtNQUNFLGtCQUFrQjtNQUNsQixtQkFBbUI7SUFDckI7RUFDRjs7QUFFQTtJQUNFO01BQ0UsaUJBQWlCO01BQ2pCLG1CQUFtQjtJQUNyQjtFQUNGOztBQUdGO0VBQ0UsK0hBQStIO0FBQ2pJOztBQUVBO0VBQ0UsK0hBQStIO0FBQ2pJOztBQUVBO0VBQ0UsK0hBQStIO0FBQ2pJOztBQUVBO0VBQ0UsK0hBQStIO0FBQ2pJOztBQUVBO0VBQ0UsNExBQTRMO0FBQzlMOztBQUdBO0VBQ0UsZUFBZTtFQUNmLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsa0JBQWtCO0VBQ2xCLDBCQUEwQjtFQUMxQixpQ0FBaUM7RUFDakMsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGlDQUFpQztFQUNqQyxnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLDJCQUEyQjtFQUMzQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVyL3NsaWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5pdGVtLXNsaWRlciBpbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLml0ZW0tc2xpZGVye1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDAwbXMgZWFzZS1pbi1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxufVxyXG5cclxuLmNvbnRlbmV1ci1zbGlkZXJ7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG59XHJcblxyXG4udzMtYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSgjZmZmZmZmLCAwLjgpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMxZjFlMWU7XHJcbiAgICBmb250LXdlaWdodDogODAwO1xyXG4gIH1cclxuICBcclxuICAudzMtYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMWYxZTFlO1xyXG4gIH1cclxuXHJcbiAgLmJhbm5lci1pbmZvLWJne1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIG1hcmdpbjogMjAwcHggYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XHJcbiAgICAgIG1heC13aWR0aDogNzAwcHg7XHJcbiAgICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG5cclxuICBcclxuaDV7XHJcbiAgZm9udC1zaXplOiA4NXB4O1xyXG4gIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbn1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDEwMDBweCl7XHJcbiAgICAuYmFubmVyLWluZm8tYmd7XHJcbiAgICAgIG1hcmdpbjogMTUwcHggYXV0bztcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgaDV7XHJcbiAgICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDc1MHB4KXtcclxuICAgIC5iYW5uZXItaW5mby1iZ3tcclxuICAgICAgbWFyZ2luOiAxMDBweCBhdXRvO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDU2OHB4KXtcclxuICAgIC5iYW5uZXItaW5mby1iZ3tcclxuICAgICAgbWFyZ2luOiA4MHB4IGF1dG87XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbi5zbGlkZXIxe1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDU5KSwgcmdiYSgwLCAwLCAwLCAwLjQyNSkpLCB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFubmVyMS5qcGcpIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zbGlkZXIye1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDU5KSwgcmdiYSgwLCAwLCAwLCAwLjQyNSkpLCB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFubmVyMi5qcGcpIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zbGlkZXIze1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDU5KSwgcmdiYSgwLCAwLCAwLCAwLjQyNSkpLCB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFubmVyMy5qcGcpIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zbGlkZXI0e1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDU5KSwgcmdiYSgwLCAwLCAwLCAwLjQyNSkpLCB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFubmVyNC5qcGcpIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbi5zbGlkZXI1e1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDU5KSwgcmdiYSgwLCAwLCAwLCAwLjQyNSkpLCB1cmwoL2Fzc2V0cy9pbWFnZXMvcmVub3ZhdGlvbl9kZV9mYWNhZGUvMjQzMTQwNzA3XzQwMDc4MTE3ODI5NjQwNV81ODE1Mzk4MTE5MjY1NzA2MDM3X24uanBnKSBjZW50ZXIgbm8tcmVwZWF0O1xyXG59XHJcblxyXG5cclxucHtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmJhbm5lci1pbmZvLWJnIGF7XHJcbiAgcGFkZGluZzogMTJweCAzNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBsaW5lLWhlaWdodDogMjZweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZTVhMGU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmU1YTBlO1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5idG4td2hpdGV7XHJcbiAgY29sb3I6ICAjZmU1YTBlICFpbXBvcnRhbnQ7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZiAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1jb2xvcjogI2ZlNWEwZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5zZWxlY3R7XHJcbiAgd2lkdGg6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAgbWFyZ2luLXRvcDogM3JlbSAhaW1wb3J0YW50O1xyXG4gIG1hcmdpbi1yaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5ibG9nLWRlbWFuZGUtZGV2aXN7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-slider',
          templateUrl: './slider.component.html',
          styleUrls: ['./slider.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/components/sliderpage/sliderpage.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/sliderpage/sliderpage.component.ts ***!
    \***************************************************************/

  /*! exports provided: SliderpageComponent */

  /***/
  function srcAppComponentsSliderpageSliderpageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SliderpageComponent", function () {
      return SliderpageComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SliderpageComponent =
    /*#__PURE__*/
    function () {
      function SliderpageComponent() {
        _classCallCheck(this, SliderpageComponent);

        this.name = "";
      }

      _createClass(SliderpageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SliderpageComponent;
    }();

    SliderpageComponent.ɵfac = function SliderpageComponent_Factory(t) {
      return new (t || SliderpageComponent)();
    };

    SliderpageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SliderpageComponent,
      selectors: [["app-sliderpage"]],
      inputs: {
        name: "name"
      },
      decls: 14,
      vars: 1,
      consts: [[1, "item-slider", "slider1"], [1, "container"], [1, "banner-info-bg"], [1, "mt-4", "pr-lg-4", 2, "color", "transparent"]],
      template: function SliderpageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, doloremque placeat aut numquam ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, doloremque placeat aut numquam ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h5");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit quisquam, doloremque placeat aut numquam ipsam. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        }
      },
      styles: [".slider1[_ngcontent-%COMP%]{\r\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.425)), url(/assets/images/banner1.jpg) center no-repeat;\r\n}\r\n\r\nh5[_ngcontent-%COMP%]{\r\n    font-size: 85px;\r\n    line-height: 90px;\r\n    font-weight: 700;\r\n    margin-top: 50px;\r\n    color: white;\r\n}\r\n\r\n.sub-titlehny[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 12px;\r\n    color: #cacaca;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.hny-title[_ngcontent-%COMP%]{\r\n    font-size: 34px;\r\n    font-weight: 600;\r\n    line-height: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    line-height: 26px;\r\n    color: #0f0f0f;\r\n    font-family: 'Barlow', sans-serif;\r\n}\r\n\r\nli[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    line-height: 26px;\r\n    color: #0f0f0f;\r\n    font-family: 'Barlow', sans-serif;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    font-family: 'Comforter Brush', cursive;\r\n}\r\n\r\na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 36px;\r\n    margin-bottom: 10px;\r\n    font-weight: 900;\r\n    color: #fe5a0e;\r\n}\r\n\r\na[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 26px;\r\n    line-height: 35px; \r\n    color: #000;\r\n    margin-top: 1rem !important; \r\n    text-decoration: none;  \r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    border-radius: 15px;\r\n}\r\n\r\n.grid-block[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    background-color: #fe5a0e;\r\n    -webkit-animation-name: example;\r\n            animation-name: example;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n\r\n@-webkit-keyframes example {\r\n    0%   {background-color: white;}\r\n    100% {background-color: #fe5a0e;}\r\n  }\r\n\r\n@keyframes example {\r\n    0%   {background-color: white;}\r\n    100% {background-color: #fe5a0e;}\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zbGlkZXJwYWdlL3NsaWRlcnBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtIQUErSDtBQUNuSTs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGlDQUFpQztBQUNyQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsdUNBQXVDO0FBQzNDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsV0FBVztJQUNYLDJCQUEyQjtJQUMzQixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsOEJBQXNCO1lBQXRCLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsTUFBTSx5QkFBeUIsQ0FBQztFQUNsQzs7QUFIRjtJQUNJLE1BQU0sdUJBQXVCLENBQUM7SUFDOUIsTUFBTSx5QkFBeUIsQ0FBQztFQUNsQzs7QUFFRjtJQUNJLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2xpZGVycGFnZS9zbGlkZXJwYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyMXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDU5KSwgcmdiYSgwLCAwLCAwLCAwLjQyNSkpLCB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFubmVyMS5qcGcpIGNlbnRlciBuby1yZXBlYXQ7XHJcbn1cclxuXHJcbmg1e1xyXG4gICAgZm9udC1zaXplOiA4NXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDkwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnN1Yi10aXRsZWhueXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4uaG55LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxucHtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgY29sb3I6ICMwZjBmMGY7XHJcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbn1cclxuXHJcbmxpe1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBjb2xvcjogIzBmMGYwZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuaDN7XHJcbiAgICBmb250LXNpemU6IDI1cHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb21mb3J0ZXIgQnJ1c2gnLCBjdXJzaXZlO1xyXG59XHJcblxyXG5hIHNwYW57XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGNvbG9yOiAjZmU1YTBlO1xyXG59XHJcblxyXG5hIGg0e1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7IFxyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBtYXJnaW4tdG9wOiAxcmVtICFpbXBvcnRhbnQ7IFxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAgXHJcbn1cclxuXHJcbmF7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uZ3JpZC1ibG9ja3tcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbmE6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1YTBlO1xyXG4gICAgYW5pbWF0aW9uLW5hbWU6IGV4YW1wbGU7XHJcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDFzO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGV4YW1wbGUge1xyXG4gICAgMCUgICB7YmFja2dyb3VuZC1jb2xvcjogd2hpdGU7fVxyXG4gICAgMTAwJSB7YmFja2dyb3VuZC1jb2xvcjogI2ZlNWEwZTt9XHJcbiAgfVxyXG5cclxuYTpob3ZlciBwe1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG5cclxuYTpob3ZlciBzcGFue1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uaW1nLWZsdWlke1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SliderpageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sliderpage',
          templateUrl: './sliderpage.component.html',
          styleUrls: ['./sliderpage.component.css']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/contact/contact.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/contact/contact.component.ts ***!
    \**********************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");

    var ContactComponent =
    /*#__PURE__*/
    function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };

    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 141,
      vars: 0,
      consts: [["name", "Contact"], ["id", "slider", 2, "margin-top", "56px"], [1, "container", "slider-1"], ["id", "content", 1, "col-sm-12", 2, "background-color", "rgba(255, 255, 255, 0.685)", "margin", "0px auto", "padding", "30px 10px"], [2, "color", "black", "text-align", "center"], [1, "form-horizontal"], [1, "row"], [1, "col-sm-6"], [1, "form-group", "required"], ["for", "input-name", 1, "control-label"], [1, ""], ["type", "text", "id", "input-name", "value", "", "name", "name", 1, "form-control"], ["for", "input-email", 1, "control-label"], ["type", "email", "id", "input-email", "value", "", "name", "email", 1, "form-control"], ["for", "input-enquiry", 1, "control-label"], [1, "form-check"], ["type", "checkbox", "value", "", "id", "defaultCheck1", 1, "form-check-input"], ["for", "defaultCheck1", 1, "form-check-label"], ["id", "input-enquiry", "rows", "3", "name", "enquiry", 1, "form-control"], [1, "buttons"], [2, "text-align", "center"], ["type", "submit", "value", "Envoyer", 1, "btn", "btn-primary"], ["id", "slider", 2, "margin-top", "56px", "background-color", "rgba(0,0,0,0.05) !important"], [1, "container"], ["id", "content", 1, "col-sm-12", 2, "margin", "0px auto", "padding", "30px 10px"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11046.97163744175!2d6.215172189417566!3d46.195674465860726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c6fd432ec967f%3A0x408ab2ae4baa630!2sAmbilly%2C%20France!5e0!3m2!1sfr!2stn!4v1638309006273!5m2!1sfr!2stn", "width", "100%", "height", "400px", "allowfullscreen", "", "loading", "lazy", 2, "border", "0"], ["src", "./assets/images/Untitled-2.png", "alt", "", 1, "img-fluid"], [1, "address"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Un projet ? Une question ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Nous vous r\xE9pondrons ou rappellerons dans les 24 heures.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Nom + Pr\xE9nom");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Adresse");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Code postal");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Ville");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "E-Mail ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "T\xE9l\xE9phone");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Votre projet concerne :");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Nettoyage & Hydrofuge de toiture et fa\xE7ade ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Sanitaire ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " placo-platre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " isolation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " R\xE9novation totale ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " cloisons s\xE8ches ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " rev\xEAtements de sol ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, " carrelage ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](84, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, " parquet ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](88, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " peinture ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, " d\xE9coration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " \xE9lectricit\xE9 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "input", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "label", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " Crepi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "label", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Message");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](107, "textarea", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "input", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "section", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "iframe", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](121, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](122, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "T\xE9l: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, " 06 45 35 96 66, 06 89 96 92 92");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, "Mail: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, " info@aaconcept-renov.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "Adresse: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, " Ambilly 74 100");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "div", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](139, "Pays:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " France");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"]],
      styles: [".navbar-9[_ngcontent-%COMP%]{\r\n    float:right;\r\n    margin: 18px 22px;\r\n   \r\n    font-family: Raleway, sans-serif;\r\n    line-height: 0;\r\n    cursor: pointer;\r\n    position: relative;\r\n    z-index: 1;\r\n    text-transform: inherit !important;\r\n    color: rgb(19, 15, 255) !important;\r\n    font-size: 16px !important;\r\n    font-weight: 600 !important;\r\n    background: rgb(202, 202, 202);\r\n    padding: 22px 32px;\r\n    border-radius: 0px;\r\n    transition: color 0.4s linear 0s;\r\n    border-width: 0px;\r\n    border-style: initial;\r\n    border-color: initial;\r\n    -o-border-image: initial;\r\n       border-image: initial;\r\n    overflow: hidden;\r\n}\r\n\r\n.slider-1[_ngcontent-%COMP%]{\r\n    position: relative;\r\n}\r\n\r\n.slider-2[_ngcontent-%COMP%]{\r\n   padding: 20vw 10vw;\r\n}\r\n\r\n.slider-3[_ngcontent-%COMP%]{\r\n    background-color: #3a3af7;\r\n    padding: 20px;\r\n}\r\n\r\n.slider-4[_ngcontent-%COMP%]{\r\n    background-color: white;\r\n}\r\n\r\n.slider-3[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    font-weight: 900;\r\n    font-size: 60px;\r\n}\r\n\r\n.slider-4[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    color: #3a3af7;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\nstrong[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n}\r\n\r\nimg[_ngcontent-%COMP%]{\r\n    height: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsaUJBQWlCOztJQUVqQixnQ0FBZ0M7SUFDaEMsY0FBYztJQUNkLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGtDQUFrQztJQUNsQyxrQ0FBa0M7SUFDbEMsMEJBQTBCO0lBQzFCLDJCQUEyQjtJQUMzQiw4QkFBOEI7SUFDOUIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixnQ0FBZ0M7SUFDaEMsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDckIsd0JBQXFCO09BQXJCLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7R0FDRyxrQkFBa0I7QUFDckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtBQUNqQjs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixlQUFlO0FBQ25COztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdmJhci05e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtYXJnaW46IDE4cHggMjJweDtcclxuICAgXHJcbiAgICBmb250LWZhbWlseTogUmFsZXdheSwgc2Fucy1zZXJpZjtcclxuICAgIGxpbmUtaGVpZ2h0OiAwO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiBpbmhlcml0ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogcmdiKDE5LCAxNSwgMjU1KSAhaW1wb3J0YW50O1xyXG4gICAgZm9udC1zaXplOiAxNnB4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogNjAwICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjAyLCAyMDIsIDIwMik7XHJcbiAgICBwYWRkaW5nOiAyMnB4IDMycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjRzIGxpbmVhciAwcztcclxuICAgIGJvcmRlci13aWR0aDogMHB4O1xyXG4gICAgYm9yZGVyLXN0eWxlOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLWNvbG9yOiBpbml0aWFsO1xyXG4gICAgYm9yZGVyLWltYWdlOiBpbml0aWFsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnNsaWRlci0xe1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uc2xpZGVyLTJ7XHJcbiAgIHBhZGRpbmc6IDIwdncgMTB2dztcclxufVxyXG5cclxuLnNsaWRlci0ze1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNhM2FmNztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uc2xpZGVyLTR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnNsaWRlci0zIGgxe1xyXG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICAgIGZvbnQtc2l6ZTogNjBweDtcclxufVxyXG5cclxuLnNsaWRlci00IGgxe1xyXG4gICAgY29sb3I6ICMzYTNhZjc7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbnN0cm9uZ3tcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuaW1ne1xyXG4gICAgaGVpZ2h0OiAxNTBweDtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/demandedevis/demandedevis.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/demandedevis/demandedevis.component.ts ***!
    \********************************************************/

  /*! exports provided: DemandedevisComponent */

  /***/
  function srcAppDemandedevisDemandedevisComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DemandedevisComponent", function () {
      return DemandedevisComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");

    var DemandedevisComponent =
    /*#__PURE__*/
    function () {
      function DemandedevisComponent() {
        _classCallCheck(this, DemandedevisComponent);

        this.slideIndex = 1;
      }

      _createClass(DemandedevisComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showDivs",
        value: function showDivs(slideIndexSuivant) {
          var x = document.getElementsByClassName("block1");

          if (slideIndexSuivant > x.length) {
            slideIndexSuivant = 1;
          } else if (slideIndexSuivant < 1) {
            slideIndexSuivant = x.length;
          }

          for (var i = 0; i < x.length; i++) {
            x[i].setAttribute("style", "transform :translateX(" + -100 * (slideIndexSuivant - 1) + "%)");
          }

          this.slideIndex = slideIndexSuivant;
        }
      }]);

      return DemandedevisComponent;
    }();

    DemandedevisComponent.ɵfac = function DemandedevisComponent_Factory(t) {
      return new (t || DemandedevisComponent)();
    };

    DemandedevisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DemandedevisComponent,
      selectors: [["app-demandedevis"]],
      decls: 192,
      vars: 0,
      consts: [["name", "Demande Devis"], [1, "container", 2, "text-align", "center"], [1, "row"], [1, "col-lg-3"], [1, "col-lg-6"], [1, "content"], [1, "row", "style-ligne"], [1, "col-3", "icon-top"], [1, "fas", "fa-home"], [2, "background-color", "green"], [1, "fas", "fa-box-open"], [1, "fas", "fa-clipboard-check"], [1, "far", "fa-comment-dots"], [2, "float", "right"], [1, "far", "fa-handshake"], [1, "slider-formulaire", "col-12"], [1, "block1"], [2, "width", "100%"], [1, "col-sm-3", "icon-list"], ["src", "./assets/images/icons/picto_univ-construction-renovation_hover.png"], ["src", "./assets/images/icons/picto_univ-energies-renouvelables_hover.png"], ["src", "./assets/images/icons/picto_univ-exterieur-jardins_hover.png"], ["src", "./assets/images/icons/picto_univ-interieurs_hover.png"], ["src", "./assets/images/icons/picto_univ-isolation_hover.png"], ["src", "./assets/images/icons/picto_univ-maconnerie_hover.png"], ["src", "./assets/images/icons/picto_univ-menuiseries_hover.png"], ["src", "./assets/images/icons/picto_univ-plomberie-chauffage_hover.png"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "col-12"], [1, "col-sm-3", "icon-list2"], ["type", "button", 1, "btn", "btn-primary", 2, "margin-right", "10px", 3, "click"], [1, "form-group", 2, "width", "100%"], ["id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control"], [1, "col"], ["type", "text", "placeholder", "First name", 1, "form-control"], ["type", "text", "placeholder", "Last name", 1, "form-control"], [1, "form-check", "form-check-inline"], ["type", "checkbox", "id", "inlineCheckbox1", "value", "option1", 1, "form-check-input"], ["for", "inlineCheckbox1", 1, "form-check-label"], ["type", "button", 1, "btn", "btn-primary"]],
      template: function DemandedevisComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "1 - Le type de vos travaux");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "2 - La nature de vos travaux");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "3 - Votre projet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "i", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "4 - Vos coordonn\xE9es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " 1- S\xE9lectionnez le type de travaux que vous souhaitez r\xE9aliser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Construction Renovation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Energies Renouvelables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Exterieur Jardins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Renovation Interieurs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Renovation Isolation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "Renovation Maconnerie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Renovation Menuiseries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Plomberie Chauffage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemandedevisComponent_Template_button_click_84_listener() {
            return ctx.showDivs(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Suivant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " 2- S\xE9lectionnez la nature de travaux que vous souhaitez r\xE9aliser");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Construction Renovation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](101, "Energies Renouvelables");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Exterieur Jardins");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Renovation Interieurs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](114, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "Renovation Isolation");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](119, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Renovation Maconnerie");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Renovation Menuiseries");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 29);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "img", 26);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "Plomberie Chauffage");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemandedevisComponent_Template_button_click_134_listener() {
            return ctx.showDivs(1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Pr\xE9c\xE9dent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemandedevisComponent_Template_button_click_136_listener() {
            return ctx.showDivs(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Suivant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](141, " 3- D\xE9crivez-nous votre projet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "textarea", 32);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](144, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemandedevisComponent_Template_button_click_145_listener() {
            return ctx.showDivs(2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, "Pr\xE9c\xE9dent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](147, "button", 27);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemandedevisComponent_Template_button_click_147_listener() {
            return ctx.showDivs(4);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](148, "Suivant");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 28);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " 4- Compl\xE9ter vos coordonn\xE9es");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](156, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](158, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](161, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](163, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](167, "input", 34);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "div", 33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](169, "input", 35);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " J'accepte les Conditions G\xE9n\xE9rales d'Utilisation et la Charte sur la protection des donn\xE9es personnelles ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](176, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178, " J'accepte de recevoir des communications par voie \xE9lectronique sur des offres de produits ou services d'Habitatpresto ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 36);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "input", 37);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "label", 38);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, " J'accepte de recevoir des communications par voie \xE9lectronique sur des offres de produits ou services de Partenaires ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](183, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "button", 30);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DemandedevisComponent_Template_button_click_185_listener() {
            return ctx.showDivs(3);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "Pr\xE9c\xE9dent");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "button", 39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, "Demande Devis");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](189, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "br");
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"]],
      styles: [".icon-top[_ngcontent-%COMP%]{\r\n   padding: 0px;\r\n   position: relative;\r\n}\r\n\r\n.style-ligne[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    float: left;\r\n    font-size: 30px;\r\n    font-weight: 700;\r\n    font-family: cursive;\r\n}\r\n\r\n.style-ligne[_ngcontent-%COMP%]{\r\n    overflow: hidden;\r\n    position: relative;\r\n}\r\n\r\n.icon-top[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    border:green solid 2px;\r\n    width: 100%;\r\n    height: 10px;\r\n    margin-top: 20px; \r\n    position: absolute;\r\n    top: 20px !important;\r\n}\r\n\r\n.icon-top[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    margin-top: 60px;\r\n    font-family: cursive;\r\n}\r\n\r\n\r\n\r\n.sub-titlehny[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 12px;\r\n    color: #cacaca;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.hny-title[_ngcontent-%COMP%]{\r\n    font-size: 34px;\r\n    font-weight: 600;\r\n    line-height: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.block1[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{  \r\n    color: #9b9b9b;\r\n    font-size: 18px;\r\n    line-height: 26.5px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 5px;\r\n    max-width: 760px;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    max-height: 200px;\r\n    transition: transform 1s;\r\n}\r\n\r\n.galler-top[_ngcontent-%COMP%]{\r\n    margin-top: 30px !important;\r\n}\r\n\r\nfigure[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n.style-animation-image[_ngcontent-%COMP%]{\r\n    z-index:3;\r\n    position: absolute;\r\n    left:0px; \r\n    top:0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.356); \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n   \r\n    visibility: visible;\r\n    opacity: 1; \r\n    transition: visibility 0s, opacity 1s linear;\r\n}\r\n\r\nfigure[_ngcontent-%COMP%]:hover   .style-animation-image[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n.style-animation-text[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    font-size: 2.5vw;   \r\n    color: white;\r\n}\r\n\r\nfigure[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%]{\r\n    transform: scale(1.5);\r\n}\r\n\r\n\r\n\r\nlabel[_ngcontent-%COMP%]{\r\n    font-weight: 500;\r\n    font-size: 17px;\r\n    font-family: cursive;\r\n}\r\n\r\nh4[_ngcontent-%COMP%]{\r\n    font-family: cursive;\r\n}\r\n\r\n.slider-formulaire[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: nowrap;\r\n    padding:0px;\r\n}\r\n\r\n.block1[_ngcontent-%COMP%]{\r\n    width: 100% !important;\r\n    transition: transform 1000ms ease-in-out;\r\n    position: relative;\r\n    flex-shrink: 0;\r\n    overflow: hidden;\r\n}\r\n\r\n.icon-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background-color: rgb(21, 228, 21);\r\n    text-align: center;\r\n   \r\n    \r\n}\r\n\r\n.icon-list[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n}\r\n\r\n.icon-list[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    transition: transform .2s; \r\n}\r\n\r\n.icon-list[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.icon-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(7, 63, 7);\r\n}\r\n\r\n.icon-list[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: scale(1.2);\r\n}\r\n\r\n.icon-list2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background-color: rgb(218, 221, 35);\r\n    text-align: center;\r\n}\r\n\r\n.icon-list2[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n    font-size: 13px;\r\n    font-weight: 500;\r\n}\r\n\r\n.icon-list2[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    width: 50px;\r\n    transition: transform .2s; \r\n}\r\n\r\n.icon-list2[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n    display: inline-block;\r\n}\r\n\r\n.icon-list2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover{\r\n    background-color: rgb(116, 117, 20);\r\n}\r\n\r\n.icon-list2[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{\r\n    transform: scale(1.2);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGVtYW5kZWRldmlzL2RlbWFuZGVkZXZpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0dBQ0csWUFBWTtHQUNaLGtCQUFrQjtBQUNyQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIsV0FBVztJQUNYLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixvQkFBb0I7QUFDeEI7O0FBRUEsYUFBYTs7QUFDYjtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0FBR0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDViw0Q0FBNEM7QUFDaEQ7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBLGFBQWE7O0FBRWI7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qix3Q0FBd0M7SUFDeEMsa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQ0FBa0M7SUFDbEMsa0JBQWtCOzs7QUFHdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUIsRUFBRSxjQUFjO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLCtCQUErQjtBQUNuQzs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1DQUFtQztJQUNuQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCx5QkFBeUIsRUFBRSxjQUFjO0FBQzdDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLG1DQUFtQztBQUN2Qzs7QUFDQTtJQUNJLHFCQUFxQjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL2RlbWFuZGVkZXZpcy9kZW1hbmRlZGV2aXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLXRvcHtcclxuICAgcGFkZGluZzogMHB4O1xyXG4gICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5zdHlsZS1saWduZSBzcGFue1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5zdHlsZS1saWduZXtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5pY29uLXRvcCBkaXZ7XHJcbiAgICBib3JkZXI6Z3JlZW4gc29saWQgMnB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4OyBcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uaWNvbi10b3AgcHtcclxuICAgIG1hcmdpbi10b3A6IDYwcHg7XHJcbiAgICBmb250LWZhbWlseTogY3Vyc2l2ZTtcclxufVxyXG5cclxuLyppbWFnZXMgLSAxKi9cclxuLnN1Yi10aXRsZWhueXtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMnB4O1xyXG4gICAgY29sb3I6ICNjYWNhY2E7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG5cclxuLmhueS10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcblxyXG4uYmxvY2sxIHB7ICBcclxuICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2LjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA3NjBweDtcclxufVxyXG5cclxuLmltZy1mbHVpZHtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG59XHJcblxyXG4uZ2FsbGVyLXRvcHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuZmlndXJle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0eWxlLWFuaW1hdGlvbi1pbWFnZXtcclxuICAgIHotaW5kZXg6MztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MHB4OyBcclxuICAgIHRvcDowcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNTYpOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbmZpZ3VyZTpob3ZlciAuc3R5bGUtYW5pbWF0aW9uLWltYWdle1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnN0eWxlLWFuaW1hdGlvbi10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7ICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmZpZ3VyZTpob3ZlciAuaW1nLWZsdWlke1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG4vKmltYWdlcyAtIDEqL1xyXG5cclxubGFiZWx7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbmg0e1xyXG4gICAgZm9udC1mYW1pbHk6IGN1cnNpdmU7XHJcbn1cclxuXHJcbi5zbGlkZXItZm9ybXVsYWlyZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBwYWRkaW5nOjBweDtcclxufVxyXG5cclxuLmJsb2NrMXtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMTAwMG1zIGVhc2UtaW4tb3V0O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uaWNvbi1saXN0IGRpdntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMSwgMjI4LCAyMSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5pY29uLWxpc3QgcHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5pY29uLWxpc3QgaW1ne1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjJzOyAvKiBBbmltYXRpb24gKi9cclxufVxyXG5cclxuLmljb24tbGlzdHtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmljb24tbGlzdCBkaXY6aG92ZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNywgNjMsIDcpO1xyXG59XHJcbi5pY29uLWxpc3QgZGl2OmhvdmVyIGltZ3tcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufVxyXG5cclxuLmljb24tbGlzdDIgZGl2e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOCwgMjIxLCAzNSk7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5pY29uLWxpc3QyIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4uaWNvbi1saXN0MiBpbWd7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMnM7IC8qIEFuaW1hdGlvbiAqL1xyXG59XHJcblxyXG4uaWNvbi1saXN0MntcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmljb24tbGlzdDIgZGl2OmhvdmVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMTE3LCAyMCk7XHJcbn1cclxuLmljb24tbGlzdDIgZGl2OmhvdmVyIGltZ3tcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DemandedevisComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-demandedevis',
          templateUrl: './demandedevis.component.html',
          styleUrls: ['./demandedevis.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/aboute-home/aboute-home.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/components/aboute-home/aboute-home.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AbouteHomeComponent */

  /***/
  function srcAppHomeComponentsAbouteHomeAbouteHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AbouteHomeComponent", function () {
      return AbouteHomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AbouteHomeComponent =
    /*#__PURE__*/
    function () {
      function AbouteHomeComponent() {
        _classCallCheck(this, AbouteHomeComponent);
      }

      _createClass(AbouteHomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AbouteHomeComponent;
    }();

    AbouteHomeComponent.ɵfac = function AbouteHomeComponent_Factory(t) {
      return new (t || AbouteHomeComponent)();
    };

    AbouteHomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AbouteHomeComponent,
      selectors: [["app-aboute-home"]],
      decls: 46,
      vars: 0,
      consts: [["id", "about", 1, "w3l-grids-3", "py-5"], [2, "color", "#293f05", "text-align", "center"], [1, "container", "py-md-5", "py-3", 2, "padding-top", "0px !important"], [1, "row", "bottom-ab-grids", "align-items-center"], [1, "col-lg-6", "bottom-ab-left"], [1, "sub-titlehny"], ["src", "./assets/images/Untitled-2.png", "alt", "", 1, "img-fluid"], [1, "hny-title"], [1, "my-3"], [1, "col-lg-6", "bottom-ab-right", "mt-lg-0", "mt-3", "pl-lg-4"], [1, "mt-3"], [1, "row", "bottom_grids", "pt-md-3", "text-left"], [1, "col-lg-4", "col-md-6", "mt-5"], [1, "grid-block"], ["href", "#", 1, "d-block", "p-lg-4", "p-3"], ["aria-hidden", "true", 1, "fa", "fa-cubes"], [1, ""], ["aria-hidden", "true", 1, "fa", "fa-building"], ["aria-hidden", "true", 1, "fa", "fa-podcast"]],
      template: function AbouteHomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Qui somme nous ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "La qualit\xE9 de notre travail est le produit de notre professionnalisme ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " La soci\xE9t\xE9 A.a.concept renov est fond\xE9e en 2015 ,nous mettons \xE0 votre disposition une \xE9quipe fiable et d\xE9vou\xE9e. Notre entreprise de r\xE9novation vous propose un service hautement professionnel pour la r\xE9novation int\xE9rieure et ext\xE9rieure qui r\xE9alise tous travaux dans les domaines suivants : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Nettoyage & Hydrofuge de toiture et fa\xE7ade, Sanitaire , placo-platre, isolation, R\xE9novation totale, cloisons s\xE8ches, rev\xEAtements de sol, carrelage, parquet, peinture, d\xE9coration, \xE9lectricit\xE9, ,Crepi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Confier vos travaux de r\xE9novation \xE0 A.a.concept renov c'est vous assurer un r\xE9sultat de qualit\xE9 \xE0 des prix attractifs et des d\xE9lais respect\xE9s.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Lire la suite ...");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "span", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Une client\xE8le diversifi\xE9e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Nous travaillons aussi bien pour les particuliers que pour les professionnels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "La qualit\xE9 de services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Nous garantissons un r\xE9sultat de qualit\xE9 pour votre satisfaction.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "span", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h4", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Notre polyvalence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Nous r\xE9alisons tout type de projet : construction et r\xE9novation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".grid-block[_ngcontent-%COMP%]{\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n\r\n.sub-titlehny[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 12px;\r\n    color: #cacaca;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.hny-title[_ngcontent-%COMP%]{\r\n    font-size: 34px;\r\n    font-weight: 600;\r\n    line-height: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\np[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    line-height: 26px;\r\n    color: #0f0f0f;\r\n    font-family: 'Barlow', sans-serif;\r\n}\r\n\r\nh3[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    font-family: 'Comforter Brush', cursive;\r\n}\r\n\r\na[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 36px;\r\n    margin-bottom: 10px;\r\n    font-weight: 900;\r\n    color: #fe5a0e;\r\n}\r\n\r\na[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 26px;\r\n    line-height: 35px; \r\n    color: #000;\r\n    margin-top: 1rem !important; \r\n    text-decoration: none;  \r\n}\r\n\r\na[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    border-radius: 15px;\r\n}\r\n\r\n.grid-block[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover{\r\n    background-color: #fe5a0e;\r\n    -webkit-animation-name: example;\r\n            animation-name: example;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n\r\n@-webkit-keyframes example {\r\n    0%   {background-color: white;}\r\n    100% {background-color: #fe5a0e;}\r\n  }\r\n\r\n@keyframes example {\r\n    0%   {background-color: white;}\r\n    100% {background-color: #fe5a0e;}\r\n  }\r\n\r\na[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\na[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Fib3V0ZS1ob21lL2Fib3V0ZS1ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw0RUFBNEU7QUFDaEY7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixjQUFjO0lBQ2QsaUNBQWlDO0FBQ3JDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix1Q0FBdUM7QUFDM0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsMkJBQTJCO0lBQzNCLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksTUFBTSx1QkFBdUIsQ0FBQztJQUM5QixNQUFNLHlCQUF5QixDQUFDO0VBQ2xDOztBQUhGO0lBQ0ksTUFBTSx1QkFBdUIsQ0FBQztJQUM5QixNQUFNLHlCQUF5QixDQUFDO0VBQ2xDOztBQUVGO0lBQ0ksWUFBWTtBQUNoQjs7QUFHQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Fib3V0ZS1ob21lL2Fib3V0ZS1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZC1ibG9ja3tcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5zdWItdGl0bGVobnl7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTJweDtcclxuICAgIGNvbG9yOiAjY2FjYWNhO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLmhueS10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbnB7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGNvbG9yOiAjMGYwZjBmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRlciBCcnVzaCcsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmEgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZTVhMGU7XHJcbn1cclxuXHJcbmEgaDR7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDsgXHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICBcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5ncmlkLWJsb2Nre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTVhMGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhhbXBsZSB7XHJcbiAgICAwJSAgIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1YTBlO31cclxuICB9XHJcblxyXG5hOmhvdmVyIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5hOmhvdmVyIHNwYW57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AbouteHomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-aboute-home',
          templateUrl: './aboute-home.component.html',
          styleUrls: ['./aboute-home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/blog1-home/blog1-home.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/components/blog1-home/blog1-home.component.ts ***!
    \********************************************************************/

  /*! exports provided: Blog1HomeComponent */

  /***/
  function srcAppHomeComponentsBlog1HomeBlog1HomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog1HomeComponent", function () {
      return Blog1HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Blog1HomeComponent =
    /*#__PURE__*/
    function () {
      function Blog1HomeComponent() {
        _classCallCheck(this, Blog1HomeComponent);
      }

      _createClass(Blog1HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Blog1HomeComponent;
    }();

    Blog1HomeComponent.ɵfac = function Blog1HomeComponent_Factory(t) {
      return new (t || Blog1HomeComponent)();
    };

    Blog1HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Blog1HomeComponent,
      selectors: [["app-blog1-home"]],
      decls: 22,
      vars: 0,
      consts: [[1, "w3l-cwp4-sec", "py-5", 2, "background-color", "#f7f9fa"], [1, "container", "py-md-5", "py-3"], [1, "cwp4-two", "row", "align-items-center"], [1, "cwp4-text", "col-lg-6"], [1, "sub-titlehny"], [1, "hny-title"], [1, "cont-4", "mt-lg-5", "mt-4"], [1, "fa", "fa-check-circle-o"], [1, "cwp4-image", "col-lg-6", "pl-lg-5", "mt-lg-0", "mt-5"], ["src", "./assets/images/1.jpg", "alt", "", 1, "img-fluid"]],
      template: function Blog1HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h6", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Industry Corporation!");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h3", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Best A Grade Commercial & Residential Services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Lorem ipsum dolor sit amet, consectetur adipisicingelit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ul", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Quality Control System, 100% Satisfaction Guarantee");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Highly Professional Staff, Accurate Testing Processes");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Unrivalled workmanship, Professional and Qualified");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".sub-titlehny[_ngcontent-%COMP%]{    \r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 12px;\r\n    color: #cacaca;\r\n    text-transform: uppercase;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Jsb2cxLWhvbWUvYmxvZzEtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ibG9nMS1ob21lL2Jsb2cxLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWItdGl0bGVobnl7ICAgIFxyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjb2xvcjogI2NhY2FjYTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5pbWctZmx1aWR7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blog1HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog1-home',
          templateUrl: './blog1-home.component.html',
          styleUrls: ['./blog1-home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/blog2-home/blog2-home.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/components/blog2-home/blog2-home.component.ts ***!
    \********************************************************************/

  /*! exports provided: Blog2HomeComponent */

  /***/
  function srcAppHomeComponentsBlog2HomeBlog2HomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog2HomeComponent", function () {
      return Blog2HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Blog2HomeComponent =
    /*#__PURE__*/
    function () {
      function Blog2HomeComponent() {
        _classCallCheck(this, Blog2HomeComponent);
      }

      _createClass(Blog2HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Blog2HomeComponent;
    }();

    Blog2HomeComponent.ɵfac = function Blog2HomeComponent_Factory(t) {
      return new (t || Blog2HomeComponent)();
    };

    Blog2HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Blog2HomeComponent,
      selectors: [["app-blog2-home"]],
      decls: 48,
      vars: 0,
      consts: [[1, "w3l-portfolio-8", "py-5"], [1, "portfolio-main", "py-md-5", "py-3"], [1, "container"], [1, "header-section", "text-center", "mx-auto"], [1, "hny-title"], [1, "my-3"], [1, "row", "galler-top", "mt-lg-5", "mt-4"], [1, "col-md-4", "protfolio-item", "hover14"], ["data-lightbox", "example-set", "data-title", "lorem ipsum dolor sit amet", 1, "mb-4"], [2, "position", "relative"], ["src", "assets/images/enduit decoratif/service1.jpg", "alt", "product", 1, "img-fluid"], [1, "style-animation-image"], [1, "style-animation-text"], ["data-lightbox", "example-set", "data-title", "lorem ipsum dolor sit amet", 1, "mb-md-0", "mb-4"], ["src", "assets/images/enduit decoratif/service2.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/nettoyage de toiture/243209429_673265273656598_3735081411463269413_n.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/renovation_de_facade/service4.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/nettoyage de toiture/service3.jpg", "alt", "product", 1, "img-fluid"], ["data-lightbox", "example-set", "data-title", "lorem ipsum dolor sit amet"], ["src", "assets/images/renovation interieur/service5.jpg", "alt", "product", 1, "img-fluid"]],
      template: function Blog2HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DEVIS TRAVAUX LES PLUS DEMAND\xC9S");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Choisissez les travaux que vous souhaitez r\xE9aliser : nous vous accompagnons dans le choix du prestataire et nous vous donnons de nombreux conseils pour les r\xE9ussir.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "figure", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "figure");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".sub-titlehny[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 12px;\r\n    color: #cacaca;\r\n    text-transform: uppercase;\r\n}\r\n\r\n\r\n.hny-title[_ngcontent-%COMP%]{\r\n    font-size: 34px;\r\n    font-weight: 600;\r\n    line-height: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n\r\np[_ngcontent-%COMP%]{  \r\n    color: #9b9b9b;\r\n    font-size: 18px;\r\n    line-height: 26.5px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-top: 5px;\r\n    max-width: 760px;\r\n}\r\n\r\n\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    max-height: 200px;\r\n    transition: transform 1s;\r\n}\r\n\r\n\r\n.galler-top[_ngcontent-%COMP%]{\r\n    margin-top: 30px !important;\r\n}\r\n\r\n\r\nfigure[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n\r\n\r\n.style-animation-image[_ngcontent-%COMP%]{\r\n    z-index:3;\r\n    position: absolute;\r\n    left:0px; \r\n    top:0px;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: rgba(0, 0, 0, 0.356); \r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n   \r\n    visibility: visible;\r\n    opacity: 1; \r\n    transition: visibility 0s, opacity 1s linear;\r\n}\r\n\r\n\r\nfigure[_ngcontent-%COMP%]:hover   .style-animation-image[_ngcontent-%COMP%]{\r\n    visibility: hidden;\r\n    opacity: 0;\r\n}\r\n\r\n\r\n.style-animation-text[_ngcontent-%COMP%]{\r\n    font-weight: 700;\r\n    font-size: 2.5vw;   \r\n    color: white;\r\n}\r\n\r\n\r\nfigure[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%]{\r\n    transform: scale(1.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Jsb2cyLWhvbWUvYmxvZzItaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7SUFDbkIsY0FBYztJQUNkLHlCQUF5QjtBQUM3Qjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOzs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQix3QkFBd0I7QUFDNUI7OztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixnQkFBZ0I7QUFDcEI7OztBQUVBO0lBQ0ksU0FBUztJQUNULGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0NBQXNDO0lBQ3RDLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1COztJQUVuQixtQkFBbUI7SUFDbkIsVUFBVTtJQUNWLDRDQUE0QztBQUNoRDs7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOzs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjs7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9ob21lL2NvbXBvbmVudHMvYmxvZzItaG9tZS9ibG9nMi1ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3ViLXRpdGxlaG55e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjb2xvcjogI2NhY2FjYTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcblxyXG4uaG55LXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAzNHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuXHJcbnB7ICBcclxuICAgIGNvbG9yOiAjOWI5YjliO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2LjVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWF4LXdpZHRoOiA3NjBweDtcclxufVxyXG5cclxuLmltZy1mbHVpZHtcclxuICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzO1xyXG59XHJcblxyXG4uZ2FsbGVyLXRvcHtcclxuICAgIG1hcmdpbi10b3A6IDMwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuZmlndXJle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxuLnN0eWxlLWFuaW1hdGlvbi1pbWFnZXtcclxuICAgIHotaW5kZXg6MztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6MHB4OyBcclxuICAgIHRvcDowcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zNTYpOyBcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgIFxyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIG9wYWNpdHk6IDE7IFxyXG4gICAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eSAwcywgb3BhY2l0eSAxcyBsaW5lYXI7XHJcbn1cclxuXHJcbmZpZ3VyZTpob3ZlciAuc3R5bGUtYW5pbWF0aW9uLWltYWdle1xyXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgb3BhY2l0eTogMDtcclxufVxyXG5cclxuLnN0eWxlLWFuaW1hdGlvbi10ZXh0e1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtc2l6ZTogMi41dnc7ICAgXHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbmZpZ3VyZTpob3ZlciAuaW1nLWZsdWlke1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blog2HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog2-home',
          templateUrl: './blog2-home.component.html',
          styleUrls: ['./blog2-home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/blog3-home/blog3-home.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/components/blog3-home/blog3-home.component.ts ***!
    \********************************************************************/

  /*! exports provided: Blog3HomeComponent */

  /***/
  function srcAppHomeComponentsBlog3HomeBlog3HomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog3HomeComponent", function () {
      return Blog3HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Blog3HomeComponent =
    /*#__PURE__*/
    function () {
      function Blog3HomeComponent() {
        _classCallCheck(this, Blog3HomeComponent);
      }

      _createClass(Blog3HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Blog3HomeComponent;
    }();

    Blog3HomeComponent.ɵfac = function Blog3HomeComponent_Factory(t) {
      return new (t || Blog3HomeComponent)();
    };

    Blog3HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Blog3HomeComponent,
      selectors: [["app-blog3-home"]],
      decls: 27,
      vars: 0,
      consts: [["id", "stats", 1, "w3l-stats", "py-lg-5", "py-5", 2, "background-color", "#f7f9fa"], [1, "gallery-inner", "container", "py-md-5", "py-3"], [1, "row", "stats-con"], [1, "col-lg-3", "col-6", "stats_info", "counter_grid"], [1, "fa", "fa-laptop"], ["akhi", "1000", 1, "value"], [1, "fa", "fa-users"], ["akhi", "500", 1, "value"], [1, "col-lg-3", "col-6", "stats_info", "counter_grid", "mt-lg-0", "mt-5"], [1, "fa", "fa-trophy"], ["akhi", "700", 1, "value"], [1, "fa", "fa-smile-o"], ["akhi", "999", 1, "value"]],
      template: function Blog3HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "1000");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Projects & Residentials Completed in 2020");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "500");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Qualified Employees & Workers With Us");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "700");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Satisfied Clients We Served Globally");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "span", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "999");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Years Of Experience In The Industry");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["span[_ngcontent-%COMP%]{\r\n    font-size: 2.5em;\r\n    color: #77BB0C;\r\n    margin: 0;\r\n}\r\n\r\n.value[_ngcontent-%COMP%]{\r\n    font-size: 50px;\r\n    line-height: 60px;\r\n    font-weight: 600;\r\n    color: var(--heading-color);\r\n    margin-top: 20px;\r\n    margin-bottom: 0;\r\n}\r\n\r\nh4[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    line-height: 27px;\r\n    text-transform: capitalize;\r\n    color: #9b9b9b;\r\n    margin-top: 10px;\r\n    font-family: 'Barlow', sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.stats_info[_ngcontent-%COMP%]{\r\n  text-align: center;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL2Jsb2czLWhvbWUvYmxvZzMtaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsMEJBQTBCO0lBQzFCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsaUNBQWlDO0lBQ2pDLGdCQUFnQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ibG9nMy1ob21lL2Jsb2czLWhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInNwYW57XHJcbiAgICBmb250LXNpemU6IDIuNWVtO1xyXG4gICAgY29sb3I6ICM3N0JCMEM7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi52YWx1ZXtcclxuICAgIGZvbnQtc2l6ZTogNTBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGNvbG9yOiB2YXIoLS1oZWFkaW5nLWNvbG9yKTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG59XHJcblxyXG5oNHtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyN3B4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBjb2xvcjogIzliOWI5YjtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ0JhcmxvdycsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uc3RhdHNfaW5mb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blog3HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog3-home',
          templateUrl: './blog3-home.component.html',
          styleUrls: ['./blog3-home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/blog4-home/blog4-home.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/components/blog4-home/blog4-home.component.ts ***!
    \********************************************************************/

  /*! exports provided: Blog4HomeComponent */

  /***/
  function srcAppHomeComponentsBlog4HomeBlog4HomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Blog4HomeComponent", function () {
      return Blog4HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var Blog4HomeComponent =
    /*#__PURE__*/
    function () {
      function Blog4HomeComponent() {
        _classCallCheck(this, Blog4HomeComponent);
      }

      _createClass(Blog4HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return Blog4HomeComponent;
    }();

    Blog4HomeComponent.ɵfac = function Blog4HomeComponent_Factory(t) {
      return new (t || Blog4HomeComponent)();
    };

    Blog4HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: Blog4HomeComponent,
      selectors: [["app-blog4-home"]],
      decls: 44,
      vars: 0,
      consts: [["id", "faq", 1, "w3l-faq-block", "py-5"], [1, "container", "py-lg-4"], [1, "row", "mt-5"], [1, "col-lg-6"], [1, "faq-image"], ["src", "assets/images/2.jpg", "alt", "", 1, "img-fluid"], [1, "col-lg-6", "mt-lg-0", "mt-5", "pl-lg-5"], [1, "sub-titlehny"], [1, "hny-title"], [1, "my-3"], ["id", "accordionFlushExample", 1, "accordion", "accordion-flush"], [1, "accordion-item"], ["id", "flush-headingOne", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseOne", "aria-expanded", "false", "aria-controls", "flush-collapseOne", 1, "accordion-button", "collapsed"], ["id", "flush-collapseOne", "aria-labelledby", "flush-headingOne", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], [1, "accordion-body"], ["id", "flush-headingTwo", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseTwo", "aria-expanded", "false", "aria-controls", "flush-collapseTwo", 1, "accordion-button", "collapsed"], ["id", "flush-collapseTwo", "aria-labelledby", "flush-headingTwo", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"], ["id", "flush-headingThree", 1, "accordion-header"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#flush-collapseThree", "aria-expanded", "false", "aria-controls", "flush-collapseThree", 1, "accordion-button", "collapsed"], ["id", "flush-collapseThree", "aria-labelledby", "flush-headingThree", "data-bs-parent", "#accordionFlushExample", 1, "accordion-collapse", "collapse"]],
      template: function Blog4HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "FaQs");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Experts with experience ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Vestibulum ante ipsum primis in faucibus orci luctus turpis sodales quis. Integer sit amet mattis quam.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Accordion Item #1 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Placeholder content for this accordion, which is intended to demonstrate the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, ".accordion-flush");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " class. This is the first item's accordion body.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h2", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Accordion Item #2 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Placeholder content for this accordion, which is intended to demonstrate the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, ".accordion-flush");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " class. This is the second item's accordion body. Let's imagine this being filled with some actual content.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h2", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Accordion Item #3 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Placeholder content for this accordion, which is intended to demonstrate the ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "code");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, ".accordion-flush");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9ibG9nNC1ob21lL2Jsb2c0LWhvbWUuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](Blog4HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog4-home',
          templateUrl: './blog4-home.component.html',
          styleUrls: ['./blog4-home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/components/partenaire/partenaire.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/home/components/partenaire/partenaire.component.ts ***!
    \********************************************************************/

  /*! exports provided: PartenaireComponent */

  /***/
  function srcAppHomeComponentsPartenairePartenaireComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PartenaireComponent", function () {
      return PartenaireComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PartenaireComponent =
    /*#__PURE__*/
    function () {
      function PartenaireComponent() {
        _classCallCheck(this, PartenaireComponent);

        this.sliders = [];
        this.slideIndex = 1;
        this.isClick = false;
        this.nbrIsAuto = 0;
      }

      _createClass(PartenaireComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          var timer = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["interval"])(5000);
          timer.subscribe(function (n) {
            _this6.carouselAuto();
          });
        }
      }, {
        key: "carouselAuto",
        value: function carouselAuto() {
          if (this.nbrIsAuto == 0) {
            this.showDivs(this.slideIndex + 1);
          }
        }
      }, {
        key: "plusDivs",
        value: function plusDivs(n) {
          var _this7 = this;

          this.nbrIsAuto++;

          if (!this.isClick) {
            this.showDivs(this.slideIndex + n);
          }

          setTimeout(function () {
            _this7.nbrIsAuto--;
          }, 5000);
        }
      }, {
        key: "setDivs",
        value: function setDivs(n) {
          var _this8 = this;

          this.nbrIsAuto++;
          this.showDivs(n + 1);
          setTimeout(function () {
            _this8.nbrIsAuto--;
          }, 5000);
        }
      }, {
        key: "showDivs",
        value: function showDivs(slideIndexSuivant) {
          var _this9 = this;

          this.isClick = true;
          var x = document.getElementsByClassName("item-partenaire");

          if (slideIndexSuivant > x.length) {
            slideIndexSuivant = 1;
          } else if (slideIndexSuivant < 1) {
            slideIndexSuivant = x.length;
          }

          for (var i = 0; i < x.length; i++) {
            x[i].setAttribute("style", "transform :translateX(" + -100 * (slideIndexSuivant - 1) + "%)");
          }

          this.slideIndex = slideIndexSuivant;
          setTimeout(function () {
            _this9.isClick = false;
          }, 800);
        }
      }]);

      return PartenaireComponent;
    }();

    PartenaireComponent.ɵfac = function PartenaireComponent_Factory(t) {
      return new (t || PartenaireComponent)();
    };

    PartenaireComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PartenaireComponent,
      selectors: [["app-partenaire"]],
      decls: 35,
      vars: 0,
      consts: [["id", "partenaire", 1, "w3l-stats", "py-lg-5", "py-5", 2, "background-color", "#f7f9fa"], [2, "text-align", "center"], [1, "gallery-inner", "container", 2, "position", "relative", "padding", "0px 20px"], [1, "row", "conteneur-items"], [1, "col-lg-3", "col-6", "item-partenaire"], ["src", "assets/images/7.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/1.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/2.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/3.jpg", "alt", "product", 1, "img-fluid"], [2, "position", "absolute", "width", "100%", "left", "0px", "height", "10%", "margin", "auto", "top", "0px", "bottom", "0px", "padding", "10px"], [1, "w3-button", "w3-display-left", 3, "click"], [1, "w3-button", "w3-display-right", 2, "float", "right", 3, "click"]],
      template: function PartenaireComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Nos Partenaires");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartenaireComponent_Template_button_click_31_listener() {
            return ctx.plusDivs(0 - 1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u276E ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PartenaireComponent_Template_button_click_33_listener() {
            return ctx.plusDivs(1 - 0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "\u276F");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".conteneur-items[_ngcontent-%COMP%]{\r\n    width: 100%; \r\n    overflow-x: hidden; \r\n    display: flex; \r\n    flex-direction: row; \r\n    flex-wrap: nowrap;\r\n    position: relative;\r\n}\r\n\r\n.w3-button[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n    background-color: transparent;\r\n    border: none;\r\n    color: rgba(#ffffff, 0.8);\r\n    text-shadow: 1px 1px 1px #1f1e1e;\r\n    border-radius: 25%;\r\n    background-color: white;\r\n    border: solid 3px black;\r\n    font-weight: 800;\r\n    height: 50px;\r\n}\r\n\r\n.w3-button[_ngcontent-%COMP%]:hover {\r\n    color: white;\r\n    text-shadow: 2px 2px 3px #1f1e1e;\r\n}\r\n\r\n.item-partenaire[_ngcontent-%COMP%]{\r\n    transition: transform 1000ms ease-in-out;\r\n    position: relative;\r\n    flex-shrink: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9jb21wb25lbnRzL3BhcnRlbmFpcmUvcGFydGVuYWlyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsNkJBQTZCO0lBQzdCLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsZ0NBQWdDO0lBQ2hDLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsdUJBQXVCO0lBQ3ZCLGdCQUFnQjtJQUNoQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLHdDQUF3QztJQUN4QyxrQkFBa0I7SUFDbEIsY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvY29tcG9uZW50cy9wYXJ0ZW5haXJlL3BhcnRlbmFpcmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5ldXItaXRlbXN7XHJcbiAgICB3aWR0aDogMTAwJTsgXHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gICAgZGlzcGxheTogZmxleDsgXHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyBcclxuICAgIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udzMtYnV0dG9ue1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogcmdiYSgjZmZmZmZmLCAwLjgpO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMXB4ICMxZjFlMWU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogc29saWQgM3B4IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcclxuICAgIGhlaWdodDogNTBweDtcclxufVxyXG4gIFxyXG4udzMtYnV0dG9uOmhvdmVyIHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDNweCAjMWYxZTFlO1xyXG59XHJcblxyXG4uaXRlbS1wYXJ0ZW5haXJle1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMDBtcyBlYXNlLWluLW91dDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG59XHJcblxyXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PartenaireComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-partenaire',
          templateUrl: './partenaire.component.html',
          styleUrls: ['./partenaire.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_slider_slider_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/slider/slider.component */
    "./src/app/components/slider/slider.component.ts");
    /* harmony import */


    var _components_aboute_home_aboute_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/aboute-home/aboute-home.component */
    "./src/app/home/components/aboute-home/aboute-home.component.ts");
    /* harmony import */


    var _components_blog1_home_blog1_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/blog1-home/blog1-home.component */
    "./src/app/home/components/blog1-home/blog1-home.component.ts");
    /* harmony import */


    var _components_blog2_home_blog2_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/blog2-home/blog2-home.component */
    "./src/app/home/components/blog2-home/blog2-home.component.ts");
    /* harmony import */


    var _components_blog3_home_blog3_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/blog3-home/blog3-home.component */
    "./src/app/home/components/blog3-home/blog3-home.component.ts");
    /* harmony import */


    var _components_blog4_home_blog4_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/blog4-home/blog4-home.component */
    "./src/app/home/components/blog4-home/blog4-home.component.ts");
    /* harmony import */


    var _components_partenaire_partenaire_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/partenaire/partenaire.component */
    "./src/app/home/components/partenaire/partenaire.component.ts");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 7,
      vars: 0,
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-slider");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-aboute-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-blog1-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-blog2-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-blog3-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-blog4-home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-partenaire");
        }
      },
      directives: [_components_slider_slider_component__WEBPACK_IMPORTED_MODULE_1__["SliderComponent"], _components_aboute_home_aboute_home_component__WEBPACK_IMPORTED_MODULE_2__["AbouteHomeComponent"], _components_blog1_home_blog1_home_component__WEBPACK_IMPORTED_MODULE_3__["Blog1HomeComponent"], _components_blog2_home_blog2_home_component__WEBPACK_IMPORTED_MODULE_4__["Blog2HomeComponent"], _components_blog3_home_blog3_home_component__WEBPACK_IMPORTED_MODULE_5__["Blog3HomeComponent"], _components_blog4_home_blog4_home_component__WEBPACK_IMPORTED_MODULE_6__["Blog4HomeComponent"], _components_partenaire_partenaire_component__WEBPACK_IMPORTED_MODULE_7__["PartenaireComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/images/images.component.ts":
  /*!********************************************!*\
    !*** ./src/app/images/images.component.ts ***!
    \********************************************/

  /*! exports provided: ImagesComponent */

  /***/
  function srcAppImagesImagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImagesComponent", function () {
      return ImagesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");

    var ImagesComponent =
    /*#__PURE__*/
    function () {
      function ImagesComponent() {
        _classCallCheck(this, ImagesComponent);
      }

      _createClass(ImagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ImagesComponent;
    }();

    ImagesComponent.ɵfac = function ImagesComponent_Factory(t) {
      return new (t || ImagesComponent)();
    };

    ImagesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ImagesComponent,
      selectors: [["app-images"]],
      decls: 1,
      vars: 0,
      consts: [["name", "Blog"]],
      template: function ImagesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlcy9pbWFnZXMuY29tcG9uZW50LmNzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImagesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-images',
          templateUrl: './images.component.html',
          styleUrls: ['./images.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/presentation/presentation.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/presentation/presentation.component.ts ***!
    \********************************************************/

  /*! exports provided: PresentationComponent */

  /***/
  function srcAppPresentationPresentationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PresentationComponent", function () {
      return PresentationComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");

    var PresentationComponent =
    /*#__PURE__*/
    function () {
      function PresentationComponent() {
        _classCallCheck(this, PresentationComponent);
      }

      _createClass(PresentationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PresentationComponent;
    }();

    PresentationComponent.ɵfac = function PresentationComponent_Factory(t) {
      return new (t || PresentationComponent)();
    };

    PresentationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PresentationComponent,
      selectors: [["app-presentation"]],
      decls: 81,
      vars: 0,
      consts: [["name", "Pr\xE9sentation"], ["id", "about", 1, "w3l-grids-3", "py-5"], [2, "color", "#293f05", "text-align", "center"], [1, "container", "py-md-5", "py-3", 2, "padding-top", "0px !important"], [1, "row", "bottom-ab-grids", "align-items-center"], [1, "col-lg-6", "bottom-ab-left"], [1, "sub-titlehny"], ["src", "./assets/images/Untitled-2.png", "alt", "", 1, "img-fluid"], [1, "hny-title"], [1, "my-3"], [1, "col-lg-6", "bottom-ab-right", "mt-lg-0", "mt-3", "pl-lg-4"], [1, "mt-3"], [1, "col-lg-6"], [1, "row", "bottom_grids", "pt-md-3", "text-left"], [1, "col-lg-4", "col-md-6", "mt-5"], [1, "grid-block"], ["href", "#", 1, "d-block", "p-lg-4", "p-3"], ["aria-hidden", "true", 1, "fa", "fa-cubes"], [1, ""], ["aria-hidden", "true", 1, "fa", "fa-building"], ["aria-hidden", "true", 1, "fa", "fa-podcast"]],
      template: function PresentationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Qui somme nous ? ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h6", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "La qualit\xE9 de notre travail est le produit de notre professionnalisme ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " La soci\xE9t\xE9 A.a.concept renov est fond\xE9e en 2015 ,nous mettons \xE0 votre disposition une \xE9quipe fiable et d\xE9vou\xE9e. Notre entreprise de r\xE9novation vous propose un service hautement professionnel pour la r\xE9novation int\xE9rieure et ext\xE9rieure qui r\xE9alise tous travaux dans les domaines suivants : ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Nettoyage & Hydrofuge de toiture et fa\xE7ade, Sanitaire , placo-platre, isolation, R\xE9novation totale, cloisons s\xE8ches, rev\xEAtements de sol, carrelage, parquet, peinture, d\xE9coration, \xE9lectricit\xE9, ,Crepi ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Confier vos travaux de r\xE9novation \xE0 A.a.concept renov c'est vous assurer un r\xE9sultat de qualit\xE9 \xE0 des prix attractifs et des d\xE9lais respect\xE9s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " La soci\xE9t\xE9 A.a.concept renov et son \xE9quipe, sont \xE0 votre service pour vous accompagner dans tous vos projets jusqu\u2019\xE0 livraison du chantier. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Notre personnel dispose des comp\xE9tences et de l'exp\xE9rience pour mener \xE0 bien l\u2019ensemble de vos travaux de r\xE9novation ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Nos prestations ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " R\xE9novation Mur : tout type de support (Reconstruction, Jointement, Enduit...). ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Sol (Terrasse, Chemin etc.) : B\xE9ton, Pierres, Briques, Carrelages, Pav\xE9s. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Peinture : Selon vos besoins ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Carrelage : Sol avec r\xE9agr\xE9age si n\xE9cessaire et sur support mural. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Cloisons : Pl\xE2tre, B\xE9ton cellulaire, Parpaing, Brique... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Isolation : Selon vos besoins apr\xE8s \xE9tat des lieux ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Cr\xE9ation ou R\xE9novation : Cuisine, Salle de bain et WC... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Tranch\xE9e pour fondation, Terrassement ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " R\xE9novation de Mur, Consolidation, Jointement, Enduit... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " Montage de cloisons en Carreaux de Pl\xE2tre ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Pose de Plaque de BA13 ou Isolant... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " D\xE9blayage quotidien des gravats pendant les travaux. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "span", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Une client\xE8le diversifi\xE9e");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Nous travaillons aussi bien pour les particuliers que pour les professionnels.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "span", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "La qualit\xE9 de services");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Nous garantissons un r\xE9sultat de qualit\xE9 pour votre satisfaction.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "a", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "span", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h4", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Notre polyvalence");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Nous r\xE9alisons tout type de projet : construction et r\xE9novation.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"]],
      styles: [".slider1[_ngcontent-%COMP%]{\r\n    background: linear-gradient(0deg, rgba(0, 0, 0, 0.459), rgba(0, 0, 0, 0.425)), url(/assets/images/banner1.jpg) center no-repeat;\r\n  }\r\n\r\n  h5[_ngcontent-%COMP%]{\r\n    font-size: 85px;\r\n    line-height: 90px;\r\n    font-weight: 700;\r\n    margin-top: 50px;\r\n    color: white;\r\n  }\r\n\r\n  .sub-titlehny[_ngcontent-%COMP%]{\r\n    font-size: 20px;\r\n    font-weight: 600;\r\n    margin-bottom: 12px;\r\n    color: #cacaca;\r\n    text-transform: uppercase;\r\n}\r\n\r\n  .hny-title[_ngcontent-%COMP%]{\r\n    font-size: 34px;\r\n    font-weight: 600;\r\n    line-height: 40px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n  p[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    line-height: 26px;\r\n    color: #0f0f0f;\r\n    font-family: 'Barlow', sans-serif;\r\n}\r\n\r\n  li[_ngcontent-%COMP%]{\r\n    font-size: 17px;\r\n    line-height: 26px;\r\n    color: #0f0f0f;\r\n    font-family: 'Barlow', sans-serif;\r\n}\r\n\r\n  h3[_ngcontent-%COMP%]{\r\n    font-size: 25px;\r\n    font-weight: 700;\r\n    font-family: 'Comforter Brush', cursive;\r\n}\r\n\r\n  a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    font-size: 36px;\r\n    margin-bottom: 10px;\r\n    font-weight: 900;\r\n    color: #fe5a0e;\r\n}\r\n\r\n  a[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 26px;\r\n    line-height: 35px; \r\n    color: #000;\r\n    margin-top: 1rem !important; \r\n    text-decoration: none;  \r\n}\r\n\r\n  a[_ngcontent-%COMP%]{\r\n    text-decoration: none;\r\n    border-radius: 15px;\r\n}\r\n\r\n  .grid-block[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n}\r\n\r\n  a[_ngcontent-%COMP%]:hover{\r\n    background-color: #fe5a0e;\r\n    -webkit-animation-name: example;\r\n            animation-name: example;\r\n    -webkit-animation-duration: 1s;\r\n            animation-duration: 1s;\r\n}\r\n\r\n  @-webkit-keyframes example {\r\n    0%   {background-color: white;}\r\n    100% {background-color: #fe5a0e;}\r\n  }\r\n\r\n  @keyframes example {\r\n    0%   {background-color: white;}\r\n    100% {background-color: #fe5a0e;}\r\n  }\r\n\r\n  a[_ngcontent-%COMP%]:hover   p[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n  a[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n  .img-fluid[_ngcontent-%COMP%]{\r\n    height: 100px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJlc2VudGF0aW9uL3ByZXNlbnRhdGlvbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksK0hBQStIO0VBQ2pJOztFQUVBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7O0VBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkI7O0VBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0VBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQ0FBaUM7QUFDckM7O0VBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHVDQUF1QztBQUMzQzs7RUFFQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGNBQWM7QUFDbEI7O0VBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IscUJBQXFCO0FBQ3pCOztFQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLG1CQUFtQjtBQUN2Qjs7RUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7RUFFQTtJQUNJLHlCQUF5QjtJQUN6QiwrQkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLDhCQUFzQjtZQUF0QixzQkFBc0I7QUFDMUI7O0VBRUE7SUFDSSxNQUFNLHVCQUF1QixDQUFDO0lBQzlCLE1BQU0seUJBQXlCLENBQUM7RUFDbEM7O0VBSEY7SUFDSSxNQUFNLHVCQUF1QixDQUFDO0lBQzlCLE1BQU0seUJBQXlCLENBQUM7RUFDbEM7O0VBRUY7SUFDSSxZQUFZO0FBQ2hCOztFQUdBO0lBQ0ksWUFBWTtBQUNoQjs7RUFFQTtJQUNJLGFBQWE7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9wcmVzZW50YXRpb24vcHJlc2VudGF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2xpZGVyMXtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDAsIDAsIDAsIDAuNDU5KSwgcmdiYSgwLCAwLCAwLCAwLjQyNSkpLCB1cmwoL2Fzc2V0cy9pbWFnZXMvYmFubmVyMS5qcGcpIGNlbnRlciBuby1yZXBlYXQ7XHJcbiAgfVxyXG5cclxuICBoNXtcclxuICAgIGZvbnQtc2l6ZTogODVweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA5MHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxuICAuc3ViLXRpdGxlaG55e1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEycHg7XHJcbiAgICBjb2xvcjogI2NhY2FjYTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5obnktdGl0bGV7XHJcbiAgICBmb250LXNpemU6IDM0cHg7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5we1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICBjb2xvcjogIzBmMGYwZjtcclxuICAgIGZvbnQtZmFtaWx5OiAnQmFybG93Jywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxubGl7XHJcbiAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgIGNvbG9yOiAjMGYwZjBmO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYXJsb3cnLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG5oM3tcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0NvbWZvcnRlciBCcnVzaCcsIGN1cnNpdmU7XHJcbn1cclxuXHJcbmEgc3BhbntcclxuICAgIGZvbnQtc2l6ZTogMzZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogOTAwO1xyXG4gICAgY29sb3I6ICNmZTVhMGU7XHJcbn1cclxuXHJcbmEgaDR7XHJcbiAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzVweDsgXHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIG1hcmdpbi10b3A6IDFyZW0gIWltcG9ydGFudDsgXHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7ICBcclxufVxyXG5cclxuYXtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5ncmlkLWJsb2Nre1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxufVxyXG5cclxuYTpob3ZlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZTVhMGU7XHJcbiAgICBhbmltYXRpb24tbmFtZTogZXhhbXBsZTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMXM7XHJcbn1cclxuXHJcbkBrZXlmcmFtZXMgZXhhbXBsZSB7XHJcbiAgICAwJSAgIHtiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTt9XHJcbiAgICAxMDAlIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZmU1YTBlO31cclxuICB9XHJcblxyXG5hOmhvdmVyIHB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcblxyXG5hOmhvdmVyIHNwYW57XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWctZmx1aWR7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PresentationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-presentation',
          templateUrl: './presentation.component.html',
          styleUrls: ['./presentation.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/realisations/realisations.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/realisations/realisations.component.ts ***!
    \********************************************************/

  /*! exports provided: RealisationsComponent */

  /***/
  function srcAppRealisationsRealisationsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RealisationsComponent", function () {
      return RealisationsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");

    var RealisationsComponent =
    /*#__PURE__*/
    function () {
      function RealisationsComponent() {
        _classCallCheck(this, RealisationsComponent);
      }

      _createClass(RealisationsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RealisationsComponent;
    }();

    RealisationsComponent.ɵfac = function RealisationsComponent_Factory(t) {
      return new (t || RealisationsComponent)();
    };

    RealisationsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RealisationsComponent,
      selectors: [["app-realisations"]],
      decls: 40,
      vars: 0,
      consts: [["name", "R\xE9alisation"], [1, "container", 2, "padding-top", "50px", "padding-bottom", "50px"], [1, "col-12"], [1, "row"], [1, "col-sm-6", "item-realisation"], ["src", "assets/images/enduit decoratif/service1.jpg", "alt", "product", 1, "img-fluid"], [1, "style-animation-image"], [1, "style-animation-text"], ["src", "assets/images/enduit decoratif/service2.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/nettoyage de toiture/243209429_673265273656598_3735081411463269413_n.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/renovation_de_facade/service4.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/nettoyage de toiture/service3.jpg", "alt", "product", 1, "img-fluid"], ["src", "assets/images/renovation interieur/service5.jpg", "alt", "product", 1, "img-fluid"]],
      template: function RealisationsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h2", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"]],
      styles: [".item-realisation[_ngcontent-%COMP%]{\r\n     \r\n}\r\n\r\n.item-realisation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    border-radius: 15px;\r\n    border: green solid 1px;\r\n    overflow: hidden;\r\n    margin:5px;\r\n    text-align:center;\r\n}\r\n\r\n.item-realisation[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\r\n    background: linear-gradient(to top, black, #77BB0C);\r\n}\r\n\r\nh2[_ngcontent-%COMP%]{\r\n    color: white;\r\n}\r\n\r\n.img-fluid[_ngcontent-%COMP%]{\r\n    transition: transform 1s;\r\n}\r\n\r\n.item-realisation[_ngcontent-%COMP%]:hover   .img-fluid[_ngcontent-%COMP%]{\r\n    transform: scale(1.5);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVhbGlzYXRpb25zL3JlYWxpc2F0aW9ucy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsVUFBVTtJQUNWLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1EQUFtRDtBQUN2RDs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9yZWFsaXNhdGlvbnMvcmVhbGlzYXRpb25zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaXRlbS1yZWFsaXNhdGlvbntcclxuICAgICBcclxufVxyXG5cclxuLml0ZW0tcmVhbGlzYXRpb24gZGl2e1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogZ3JlZW4gc29saWQgMXB4O1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjo1cHg7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG5cclxuLml0ZW0tcmVhbGlzYXRpb24gZGl2IGRpdntcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIGJsYWNrLCAjNzdCQjBDKTtcclxufVxyXG5cclxuaDJ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5pbWctZmx1aWR7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMXM7XHJcbn1cclxuXHJcbi5pdGVtLXJlYWxpc2F0aW9uOmhvdmVyIC5pbWctZmx1aWR7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RealisationsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-realisations',
          templateUrl: './realisations.component.html',
          styleUrls: ['./realisations.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/enduitdecoratif/enduitdecoratif.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/services/enduitdecoratif/enduitdecoratif.component.ts ***!
    \***********************************************************************/

  /*! exports provided: EnduitdecoratifComponent */

  /***/
  function srcAppServicesEnduitdecoratifEnduitdecoratifComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EnduitdecoratifComponent", function () {
      return EnduitdecoratifComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Enduit-decoratif"];
    };

    var _c1 = function _c1() {
      return ["/Nettoyage-toiture"];
    };

    var _c2 = function _c2() {
      return ["/Renovation-facade"];
    };

    var _c3 = function _c3() {
      return ["/Renovation-interieur"];
    };

    var EnduitdecoratifComponent =
    /*#__PURE__*/
    function () {
      function EnduitdecoratifComponent() {
        _classCallCheck(this, EnduitdecoratifComponent);
      }

      _createClass(EnduitdecoratifComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EnduitdecoratifComponent;
    }();

    EnduitdecoratifComponent.ɵfac = function EnduitdecoratifComponent_Factory(t) {
      return new (t || EnduitdecoratifComponent)();
    };

    EnduitdecoratifComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EnduitdecoratifComponent,
      selectors: [["app-enduitdecoratif"]],
      decls: 30,
      vars: 8,
      consts: [["name", "Services"], [1, "content"], [1, "row", 2, "margin", "0px"], [1, "col-sm-3", 2, "background-color", "rgba(0, 0, 0, 0.767)"], [3, "routerLink"], [1, "col-sm-9"], [2, "text-align", "center"], [1, "row"], [1, "col-lg-4", "col-md-12", "mb-4", "mb-lg-0"], ["src", "assets/images/enduit decoratif/242963312_828143791200304_4137933202361114300_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/enduit decoratif/245045517_557405018923006_8645785800294514939_n.jpg", "alt", "Wintry Mountain Landscape", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], [1, "col-lg-4", "mb-4", "mb-lg-0"], ["src", "assets/images/enduit decoratif/245052998_172726015043162_5163240498457809739_n.jpg", "alt", "Mountains in the Clouds", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/enduit decoratif/245105391_273333218006523_6755481009458264955_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/enduit decoratif/245216799_2039346669555042_1272558352253162249_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"]],
      template: function EnduitdecoratifComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["ul[_ngcontent-%COMP%]{\r\n    list-style: decimal;\r\n    color: honeydew;\r\n    margin-top: 1em;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n   \r\n   width: 100%;\r\n   text-align: center;\r\n   margin-top: 15px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding:0px 30px;\r\n    text-align: center;\r\n    width: 100% !important;\r\n    color: honeydew;\r\n    font-weight: 700;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(4, 109, 4), 0 0 1em rgb(9, 95, 9);\r\n }\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(6, 216, 6), 0 0 1em rgb(15, 218, 15);\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvZW5kdWl0ZGVjb3JhdGlmL2VuZHVpdGRlY29yYXRpZi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0FBQ25COztBQUVBOztHQUVHLFdBQVc7R0FDWCxrQkFBa0I7R0FDbEIsZ0JBQWdCO0FBQ25COztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQiw4Q0FBOEM7SUFDOUMsNkVBQTZFO0NBQ2hGOztBQUVBO0lBQ0csZ0ZBQWdGOztDQUVuRiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzL2VuZHVpdGRlY29yYXRpZi9lbmR1aXRkZWNvcmF0aWYuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVse1xyXG4gICAgbGlzdC1zdHlsZTogZGVjaW1hbDtcclxuICAgIGNvbG9yOiBob25leWRldztcclxuICAgIG1hcmdpbi10b3A6IDFlbTtcclxufVxyXG5cclxudWwgbGl7XHJcbiAgIFxyXG4gICB3aWR0aDogMTAwJTtcclxuICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICBtYXJnaW4tdG9wOiAxNXB4O1xyXG59XHJcblxyXG51bCBsaSBhe1xyXG4gICAgcGFkZGluZzowcHggMzBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjogaG9uZXlkZXc7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgZm9udC1mYW1pbHk6ICdDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZSwgMCAwIDFlbSByZ2IoNCwgMTA5LCA0KSwgMCAwIDFlbSByZ2IoOSwgOTUsIDkpO1xyXG4gfVxyXG5cclxuIHVsIGxpIGE6aG92ZXJ7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGUsIDAgMCAxZW0gcmdiKDYsIDIxNiwgNiksIDAgMCAxZW0gcmdiKDE1LCAyMTgsIDE1KTtcclxuXHJcbiB9Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EnduitdecoratifComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-enduitdecoratif',
          templateUrl: './enduitdecoratif.component.html',
          styleUrls: ['./enduitdecoratif.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/nettoyagetoiture/nettoyagetoiture.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/services/nettoyagetoiture/nettoyagetoiture.component.ts ***!
    \*************************************************************************/

  /*! exports provided: NettoyagetoitureComponent */

  /***/
  function srcAppServicesNettoyagetoitureNettoyagetoitureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NettoyagetoitureComponent", function () {
      return NettoyagetoitureComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Enduit-decoratif"];
    };

    var _c1 = function _c1() {
      return ["/Nettoyage-toiture"];
    };

    var _c2 = function _c2() {
      return ["/Renovation-facade"];
    };

    var _c3 = function _c3() {
      return ["/Renovation-interieur"];
    };

    var NettoyagetoitureComponent =
    /*#__PURE__*/
    function () {
      function NettoyagetoitureComponent() {
        _classCallCheck(this, NettoyagetoitureComponent);
      }

      _createClass(NettoyagetoitureComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NettoyagetoitureComponent;
    }();

    NettoyagetoitureComponent.ɵfac = function NettoyagetoitureComponent_Factory(t) {
      return new (t || NettoyagetoitureComponent)();
    };

    NettoyagetoitureComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NettoyagetoitureComponent,
      selectors: [["app-nettoyagetoiture"]],
      decls: 41,
      vars: 8,
      consts: [["name", "Services"], [1, "content"], [1, "row", 2, "margin", "0px"], [1, "col-sm-3", 2, "background-color", "rgba(0, 0, 0, 0.767)"], [3, "routerLink"], [1, "col-sm-9"], [2, "text-align", "center"], [1, "row"], [1, "col-lg-4", "col-md-12", "mb-4", "mb-lg-0"], ["src", "assets/images/nettoyage de toiture/242963312_386119546547489_3670760419349480541_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/243113873_222495623206371_2321874364698643264_n.jpg", "alt", "Wintry Mountain Landscape", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/243209429_673265273656598_3735081411463269413_n.jpg", "alt", "Mountains in the Clouds", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/243529151_1077987913015353_5278394926116661356_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245048409_576237576954694_2150104398141491063_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245051897_1188330798321346_8860901168198335740_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], [1, "col-lg-4", "mb-4", "mb-lg-0"], ["src", "assets/images/nettoyage de toiture/245054737_268500888502555_3309443269232755976_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245055764_1024556734762800_656663447056091079_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245057579_581810533264877_3996289314027631986_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245073136_930107897713852_4411981918757320031_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245075906_1079154612837072_688406560433268482_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245078783_394357845473840_3781199504103532978_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245094812_562966885030523_1037788564888580515_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245225141_1061364324632117_3612475433739087047_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245413415_617881972717448_6042871495913891_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/nettoyage de toiture/245532348_1826107537592478_4401664391926898567_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"]],
      template: function NettoyagetoitureComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["ul[_ngcontent-%COMP%]{\r\n    list-style: decimal;\r\n    color: honeydew;\r\n    margin-top: 1em;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n   \r\n   width: 100%;\r\n   text-align: center;\r\n   margin-top: 15px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding:0px 30px;\r\n    text-align: center;\r\n    width: 100% !important;\r\n    color: honeydew;\r\n    font-weight: 700;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(4, 109, 4), 0 0 1em rgb(9, 95, 9);\r\n }\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(6, 216, 6), 0 0 1em rgb(15, 218, 15);\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvbmV0dG95YWdldG9pdHVyZS9uZXR0b3lhZ2V0b2l0dXJlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7O0dBRUcsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixnQkFBZ0I7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5Qyw2RUFBNkU7Q0FDaEY7O0FBRUE7SUFDRyxnRkFBZ0Y7O0NBRW5GIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvbmV0dG95YWdldG9pdHVyZS9uZXR0b3lhZ2V0b2l0dXJlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcbiAgICBjb2xvcjogaG9uZXlkZXc7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gICBcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxudWwgbGkgYXtcclxuICAgIHBhZGRpbmc6MHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGUsIDAgMCAxZW0gcmdiKDQsIDEwOSwgNCksIDAgMCAxZW0gcmdiKDksIDk1LCA5KTtcclxuIH1cclxuXHJcbiB1bCBsaSBhOmhvdmVye1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlLCAwIDAgMWVtIHJnYig2LCAyMTYsIDYpLCAwIDAgMWVtIHJnYigxNSwgMjE4LCAxNSk7XHJcblxyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NettoyagetoitureComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nettoyagetoiture',
          templateUrl: './nettoyagetoiture.component.html',
          styleUrls: ['./nettoyagetoiture.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/renovationfacade/renovationfacade.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/services/renovationfacade/renovationfacade.component.ts ***!
    \*************************************************************************/

  /*! exports provided: RenovationfacadeComponent */

  /***/
  function srcAppServicesRenovationfacadeRenovationfacadeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenovationfacadeComponent", function () {
      return RenovationfacadeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Enduit-decoratif"];
    };

    var _c1 = function _c1() {
      return ["/Nettoyage-toiture"];
    };

    var _c2 = function _c2() {
      return ["/Renovation-facade"];
    };

    var _c3 = function _c3() {
      return ["/Renovation-interieur"];
    };

    var RenovationfacadeComponent =
    /*#__PURE__*/
    function () {
      function RenovationfacadeComponent() {
        _classCallCheck(this, RenovationfacadeComponent);
      }

      _createClass(RenovationfacadeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RenovationfacadeComponent;
    }();

    RenovationfacadeComponent.ɵfac = function RenovationfacadeComponent_Factory(t) {
      return new (t || RenovationfacadeComponent)();
    };

    RenovationfacadeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RenovationfacadeComponent,
      selectors: [["app-renovationfacade"]],
      decls: 41,
      vars: 8,
      consts: [["name", "Services"], [1, "content"], [1, "row", 2, "margin", "0px"], [1, "col-sm-3", 2, "background-color", "rgba(0, 0, 0, 0.767)"], [3, "routerLink"], [1, "col-sm-9"], [2, "text-align", "center"], [1, "row"], [1, "col-lg-4", "col-md-12", "mb-4", "mb-lg-0"], ["src", "assets/images/renovation_de_facade/243140707_400781178296405_5815398119265706037_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245039451_561469238271921_2742018048788782285_n.jpg", "alt", "Wintry Mountain Landscape", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/244991470_2886372838293298_2509868276961887530_n.jpg", "alt", "Mountains in the Clouds", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245053511_1958642014290771_5304853573811692574_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245075909_946834919203377_587260765702211649_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245092992_304055711123061_7657800286937282275_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], [1, "col-lg-4", "mb-4", "mb-lg-0"], ["src", "assets/images/renovation_de_facade/245105389_994905357744183_5901856726215735777_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245138666_262940392424454_8053330746784004184_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245209008_2969508559977847_8533214740092095960_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245242470_1402839066804720_672242354373824123_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245301239_159679363036521_7087410465663812608_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245353796_3038887689691474_8994383024846244517_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245422645_367898588351248_5875173887744013258_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245491496_400749785008296_6937018892890031754_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/IMG-20211010-WA0004.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation_de_facade/245312369_427081118837360_628618179676255964_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"]],
      template: function RenovationfacadeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "img", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "img", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "img", 25);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["ul[_ngcontent-%COMP%]{\r\n    list-style: decimal;\r\n    color: honeydew;\r\n    margin-top: 1em;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n   \r\n   width: 100%;\r\n   text-align: center;\r\n   margin-top: 15px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding:0px 30px;\r\n    text-align: center;\r\n    width: 100% !important;\r\n    color: honeydew;\r\n    font-weight: 700;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(4, 109, 4), 0 0 1em rgb(9, 95, 9);\r\n }\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(6, 216, 6), 0 0 1em rgb(15, 218, 15);\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvcmVub3ZhdGlvbmZhY2FkZS9yZW5vdmF0aW9uZmFjYWRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7O0dBRUcsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixnQkFBZ0I7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5Qyw2RUFBNkU7Q0FDaEY7O0FBRUE7SUFDRyxnRkFBZ0Y7O0NBRW5GIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvcmVub3ZhdGlvbmZhY2FkZS9yZW5vdmF0aW9uZmFjYWRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcbiAgICBjb2xvcjogaG9uZXlkZXc7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gICBcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxudWwgbGkgYXtcclxuICAgIHBhZGRpbmc6MHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGUsIDAgMCAxZW0gcmdiKDQsIDEwOSwgNCksIDAgMCAxZW0gcmdiKDksIDk1LCA5KTtcclxuIH1cclxuXHJcbiB1bCBsaSBhOmhvdmVye1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlLCAwIDAgMWVtIHJnYig2LCAyMTYsIDYpLCAwIDAgMWVtIHJnYigxNSwgMjE4LCAxNSk7XHJcblxyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenovationfacadeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-renovationfacade',
          templateUrl: './renovationfacade.component.html',
          styleUrls: ['./renovationfacade.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/renovationinterieur/renovationinterieur.component.ts":
  /*!*******************************************************************************!*\
    !*** ./src/app/services/renovationinterieur/renovationinterieur.component.ts ***!
    \*******************************************************************************/

  /*! exports provided: RenovationinterieurComponent */

  /***/
  function srcAppServicesRenovationinterieurRenovationinterieurComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenovationinterieurComponent", function () {
      return RenovationinterieurComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Enduit-decoratif"];
    };

    var _c1 = function _c1() {
      return ["/Nettoyage-toiture"];
    };

    var _c2 = function _c2() {
      return ["/Renovation-facade"];
    };

    var _c3 = function _c3() {
      return ["/Renovation-interieur"];
    };

    var RenovationinterieurComponent =
    /*#__PURE__*/
    function () {
      function RenovationinterieurComponent() {
        _classCallCheck(this, RenovationinterieurComponent);
      }

      _createClass(RenovationinterieurComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RenovationinterieurComponent;
    }();

    RenovationinterieurComponent.ɵfac = function RenovationinterieurComponent_Factory(t) {
      return new (t || RenovationinterieurComponent)();
    };

    RenovationinterieurComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RenovationinterieurComponent,
      selectors: [["app-renovationinterieur"]],
      decls: 34,
      vars: 8,
      consts: [["name", "Services"], [1, "content"], [1, "row", 2, "margin", "0px"], [1, "col-sm-3", 2, "background-color", "rgba(0, 0, 0, 0.767)"], [3, "routerLink"], [1, "col-sm-9"], [2, "text-align", "center"], [1, "row"], [1, "col-lg-4", "col-md-12", "mb-4", "mb-lg-0"], ["src", "assets/images/renovation interieur/245032708_1196679287497810_1289846761921114913_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation interieur/245036773_252012653551589_7981291383659713207_n.jpg", "alt", "Wintry Mountain Landscape", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], [1, "col-lg-4", "mb-4", "mb-lg-0"], ["src", "assets/images/renovation interieur/245061118_251887790204884_3987748038000271492_n.jpg", "alt", "Mountains in the Clouds", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation interieur/245111445_561406048301043_7208869307182391713_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation interieur/245244474_169965721974848_6225583639261440387_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation interieur/245277748_626447242071413_7792198939603740170_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation interieur/jbnjknjkn.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/renovation interieur/245496903_638787930619688_1940978214046299345_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"]],
      template: function RenovationinterieurComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["ul[_ngcontent-%COMP%]{\r\n    list-style: decimal;\r\n    color: honeydew;\r\n    margin-top: 1em;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n   \r\n   width: 100%;\r\n   text-align: center;\r\n   margin-top: 15px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding:0px 30px;\r\n    text-align: center;\r\n    width: 100% !important;\r\n    color: honeydew;\r\n    font-weight: 700;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(4, 109, 4), 0 0 1em rgb(9, 95, 9);\r\n }\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(6, 216, 6), 0 0 1em rgb(15, 218, 15);\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvcmVub3ZhdGlvbmludGVyaWV1ci9yZW5vdmF0aW9uaW50ZXJpZXVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGVBQWU7QUFDbkI7O0FBRUE7O0dBRUcsV0FBVztHQUNYLGtCQUFrQjtHQUNsQixnQkFBZ0I7QUFDbkI7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLDhDQUE4QztJQUM5Qyw2RUFBNkU7Q0FDaEY7O0FBRUE7SUFDRyxnRkFBZ0Y7O0NBRW5GIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXMvcmVub3ZhdGlvbmludGVyaWV1ci9yZW5vdmF0aW9uaW50ZXJpZXVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ1bHtcclxuICAgIGxpc3Qtc3R5bGU6IGRlY2ltYWw7XHJcbiAgICBjb2xvcjogaG9uZXlkZXc7XHJcbiAgICBtYXJnaW4tdG9wOiAxZW07XHJcbn1cclxuXHJcbnVsIGxpe1xyXG4gICBcclxuICAgd2lkdGg6IDEwMCU7XHJcbiAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgbWFyZ2luLXRvcDogMTVweDtcclxufVxyXG5cclxudWwgbGkgYXtcclxuICAgIHBhZGRpbmc6MHB4IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDFweCAycHggd2hpdGUsIDAgMCAxZW0gcmdiKDQsIDEwOSwgNCksIDAgMCAxZW0gcmdiKDksIDk1LCA5KTtcclxuIH1cclxuXHJcbiB1bCBsaSBhOmhvdmVye1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlLCAwIDAgMWVtIHJnYig2LCAyMTYsIDYpLCAwIDAgMWVtIHJnYigxNSwgMjE4LCAxNSk7XHJcblxyXG4gfSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RenovationinterieurComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-renovationinterieur',
          templateUrl: './renovationinterieur.component.html',
          styleUrls: ['./renovationinterieur.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/services.component.ts":
  /*!************************************************!*\
    !*** ./src/app/services/services.component.ts ***!
    \************************************************/

  /*! exports provided: ServicesComponent */

  /***/
  function srcAppServicesServicesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServicesComponent", function () {
      return ServicesComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../components/sliderpage/sliderpage.component */
    "./src/app/components/sliderpage/sliderpage.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["/Enduit-decoratif"];
    };

    var _c1 = function _c1() {
      return ["/Nettoyage-toiture"];
    };

    var _c2 = function _c2() {
      return ["/Renovation-facade"];
    };

    var _c3 = function _c3() {
      return ["/Renovation-interieur"];
    };

    var ServicesComponent =
    /*#__PURE__*/
    function () {
      function ServicesComponent() {
        _classCallCheck(this, ServicesComponent);
      }

      _createClass(ServicesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ServicesComponent;
    }();

    ServicesComponent.ɵfac = function ServicesComponent_Factory(t) {
      return new (t || ServicesComponent)();
    };

    ServicesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ServicesComponent,
      selectors: [["app-services"]],
      decls: 30,
      vars: 8,
      consts: [["name", "Services"], [1, "content"], [1, "row", 2, "margin", "0px"], [1, "col-sm-3", 2, "background-color", "rgba(0, 0, 0, 0.767)"], [3, "routerLink"], [1, "col-sm-9"], [2, "text-align", "center"], [1, "row"], [1, "col-lg-4", "col-md-12", "mb-4", "mb-lg-0"], ["src", "assets/images/enduit decoratif/242963312_828143791200304_4137933202361114300_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/enduit decoratif/245045517_557405018923006_8645785800294514939_n.jpg", "alt", "Wintry Mountain Landscape", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], [1, "col-lg-4", "mb-4", "mb-lg-0"], ["src", "assets/images/enduit decoratif/245052998_172726015043162_5163240498457809739_n.jpg", "alt", "Mountains in the Clouds", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/enduit decoratif/245105391_273333218006523_6755481009458264955_n.jpg", "alt", "Boat on Calm Water", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"], ["src", "assets/images/enduit decoratif/245216799_2039346669555042_1272558352253162249_n.jpg", "alt", "Waves at Sea", 1, "w-100", "shadow-1-strong", "rounded", "mb-4"]],
      template: function ServicesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sliderpage", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Nettoyage Toiture");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Renovation Facade");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Renovation Interieur");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h2", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Enduit Decoratif");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c3));
        }
      },
      directives: [_components_sliderpage_sliderpage_component__WEBPACK_IMPORTED_MODULE_1__["SliderpageComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      styles: ["ul[_ngcontent-%COMP%]{\r\n    list-style: decimal;\r\n    color: honeydew;\r\n    margin-top: 1em;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n   \r\n   width: 100%;\r\n   text-align: center;\r\n   margin-top: 15px;\r\n}\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    padding:0px 30px;\r\n    text-align: center;\r\n    width: 100% !important;\r\n    color: honeydew;\r\n    font-weight: 700;\r\n    font-family: 'Courier New', Courier, monospace;\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(4, 109, 4), 0 0 1em rgb(9, 95, 9);\r\n }\r\n\r\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\r\n    text-shadow: 1px 1px 2px white, 0 0 1em rgb(6, 216, 6), 0 0 1em rgb(15, 218, 15);\r\n\r\n }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZUFBZTtBQUNuQjs7QUFFQTs7R0FFRyxXQUFXO0dBQ1gsa0JBQWtCO0dBQ2xCLGdCQUFnQjtBQUNuQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsOENBQThDO0lBQzlDLDZFQUE2RTtDQUNoRjs7QUFFQTtJQUNHLGdGQUFnRjs7Q0FFbkYiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWx7XHJcbiAgICBsaXN0LXN0eWxlOiBkZWNpbWFsO1xyXG4gICAgY29sb3I6IGhvbmV5ZGV3O1xyXG4gICAgbWFyZ2luLXRvcDogMWVtO1xyXG59XHJcblxyXG51bCBsaXtcclxuICAgXHJcbiAgIHdpZHRoOiAxMDAlO1xyXG4gICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbn1cclxuXHJcbnVsIGxpIGF7XHJcbiAgICBwYWRkaW5nOjBweCAzMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiBob25leWRldztcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDFweCAxcHggMnB4IHdoaXRlLCAwIDAgMWVtIHJnYig0LCAxMDksIDQpLCAwIDAgMWVtIHJnYig5LCA5NSwgOSk7XHJcbiB9XHJcblxyXG4gdWwgbGkgYTpob3ZlcntcclxuICAgIHRleHQtc2hhZG93OiAxcHggMXB4IDJweCB3aGl0ZSwgMCAwIDFlbSByZ2IoNiwgMjE2LCA2KSwgMCAwIDFlbSByZ2IoMTUsIDIxOCwgMTUpO1xyXG5cclxuIH0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServicesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-services',
          templateUrl: './services.component.html',
          styleUrls: ['./services.component.css']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\MediaPlus\Laravel\aaconcept-angular\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map