webpackJsonp([3],{

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};








var HomePage = /** @class */ (function () {
    function HomePage(AFauth, navCtrl, alertCtrl, platform, keyboard, stBar, storage) {
        var _this = this;
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.platform = platform;
        this.keyboard = keyboard;
        this.stBar = stBar;
        this.storage = storage;
        this.todo = { email: "", password: "" };
        platform.ready().then(function () {
            // Here I'm using the keyboard class from ionic native.
            _this.keyboard.disableScroll(true);
            _this.stBar.styleDefault();
        });
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.storage.get('state').then(function (val) {
            console.log(val);
            if (val == 'logged') {
                _this.storage.get('email').then(function (email) {
                    _this.storage.get('password').then(function (password) {
                        _this.todo.email = email;
                        _this.todo.password = password;
                        _this.authenticate(_this.todo);
                    });
                });
            }
        });
    };
    HomePage.prototype.logForm = function () {
        console.log(this.todo);
        this.checkFields(this.todo);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    HomePage.prototype.checkFields = function (field) {
        if (field.email == null || field.name == "" ||
            field.password == null || field.password == "") {
            console.log('check fields');
            this.alert("Both fields are required! If you do not have an account please register a new one.");
        }
        else {
            this.authenticate(this.todo);
        }
    };
    HomePage.prototype.alert = function (comment) {
        console.log(comment);
        var ALERT = this.alertCtrl.create({
            title: "Alert",
            message: comment,
            buttons: [{ text: " OK!" }]
        });
        ALERT.present();
    };
    HomePage.prototype.authenticate = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        field.email = field.email.replace(/\s/g, '');
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.AFauth.auth.signInWithEmailAndPassword(field.email, field.password)];
                    case 2:
                        result = _a.sent();
                        if (result) {
                            this.setLoginData(field.email, field.password);
                            this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */]);
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        error_1 = _a.sent();
                        this.alert("Please check your email and password!");
                        this.navCtrl.setRoot(HomePage_1);
                        console.log(error_1);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    HomePage.prototype.setLoginData = function (email, password) {
        this.storage.set('email', email);
        this.storage.set('password', password);
        this.storage.set('state', 'logged');
        console.log('Storing details(SUCCESS)');
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\home\home.html"*/'\n\n<ion-content no-bounce  >\n\n  <ion-grid style="padding:0px;height:100%;" ion-fixed>\n\n    <form (ngSubmit)="logForm()"  >\n    <ion-row justify-content-center>\n\n        <!-- <h1 class="header">SnapCard</h1> -->\n        <!-- <ion-img [width]="150" [height]="150" src="images/logo.png" ></ion-img> -->\n        <img style="height:200px" src="images/logo.png" >\n\n    </ion-row>\n\n    <!-- THIS IS  THE FORM  -->\n    <ion-row justify-content-center padding>\n      <ion-col>\n        <ion-list>\n          <ion-item ion-fixed>\n            <ion-label color="primary" stacked>Email</ion-label>\n            <ion-input type="email" placeholder="example@gmail.com" type="email" [(ngModel)]="todo.email" name="email" ></ion-input>\n          </ion-item>\n          <br>\n          <ion-item>\n            <ion-label color="primary" stacked>Password</ion-label>\n            <ion-input type="password" placeholder="example123" [(ngModel)]="todo.password" name="password"></ion-input>\n          </ion-item>\n        </ion-list>\n    </ion-col>\n    </ion-row>\n    <br>\n    <ion-row justify-content-center >\n      <button ion-button type="submit" round outline>Login</button>\n    </ion-row>\n  </form>\n  <!-- FORM ENDS HERE -->\n\n\n\n\n\n<br>\n<br>\n<br>\n<br>\n\n<ion-row class="flyer" justify-content-center style="height:34%;float:bottom">\n<!-- <div class="flyer" style="width:100%;height:100%" text-center> -->\n\n    <h3  style="color:white">Dont have an account?</h3>\n    <button ion-button  (click)="register()" round color="white"><p  class="button-content">Create a new account<p></button>\n\n<!-- </div> -->\n</ion-row>\n\n\n\n\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_keyboard__["a" /* Keyboard */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_main__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardPage = /** @class */ (function () {
    function CardPage(navCtrl, navParams, AFauth, afDB) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.AFauth = AFauth;
        this.afDB = afDB;
        this.colors = [{ name: "Purple", code: "#d60eed" },
            { name: "Orange", code: "#ff6e00" },
            { name: "Blue", code: "#1e4fff" },
            { name: "Green", code: "#03d600" },
            { name: "Red", code: "#ff2b2b" },
            { name: "Brown", code: "#843919" },
            { name: "Black", code: "#000000" },
            { name: "Pink", code: "#ff4fa4" }
        ];
        this.card = {};
    }
    CardPage.prototype.ionViewWillLoad = function () {
    };
    CardPage.prototype.logForm = function () {
        console.log(this.card);
        this.createCard();
    };
    CardPage.prototype.createCard = function () {
        var _this = this;
        this.AFauth.authState.subscribe(function (auth) {
            _this.afDB.list("card/" + auth.uid).push(_this.card).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_0__main_main__["a" /* MainPage */]); });
        });
    };
    CardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-card',template:/*ion-inline-start:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\card\card.html"*/'<!--\n  Generated template for the CardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Add card</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-grid>\n  <form (ngSubmit)="logForm()">\n    <ion-row justify-content-center padding>\n      <ion-item class="input">\n        <ion-label color="primary" stacked>Company</ion-label>\n        <ion-input type="text" placeholder="Company\'s name" [(ngModel)]="card.company" name="company" ></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row justify-content-center padding>\n      <ion-item class="input">\n        <ion-label color="primary" stacked>Display name</ion-label>\n        <ion-input type="text" placeholder="The name you would like to display" [(ngModel)]="card.display_name" name="display_name"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row justify-content-center padding>\n      <ion-item class="input">\n        <ion-label color="primary" stacked>Occupation</ion-label>\n        <ion-input type="text" placeholder="Ex: Doctor & surgeon" [(ngModel)]="card.occupation" name="occupation"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row justify-content-center padding>\n      <ion-item class="input">\n        <ion-label color="primary" stacked>Description</ion-label>\n        <ion-input type="text" placeholder="Ex: Brain surgeon" [(ngModel)]="card.description" name="description"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row justify-content-center padding>\n      <ion-item class="input">\n        <ion-label color="primary" stacked>Telefon</ion-label>\n        <ion-input type="number" placeholder="Telephone number" [(ngModel)]="card.telefon" name="telefon"></ion-input>\n      </ion-item>\n    </ion-row>\n    <ion-row justify-content-center padding>\n      <ion-item class="input">\n        <ion-label color="primary" stacked>Telefax</ion-label>\n        <ion-input type="number" placeholder="Fax number" [(ngModel)]="card.telefax" name="telefax"></ion-input>\n      </ion-item>\n      </ion-row>\n      <ion-row justify-content-center padding>\n        <ion-item class="input">\n          <ion-label color="primary" stacked>Address 1</ion-label>\n          <ion-input type="email" placeholder="Street" [(ngModel)]="card.address1" name="address1"></ion-input>\n        </ion-item>\n      </ion-row>\n      <ion-row justify-content-center padding>\n          <ion-item class="input">\n            <ion-label color="primary" stacked>Address 2</ion-label>\n            <ion-input type="text" placeholder="City/Town" [(ngModel)]="card.address2" name="address2"></ion-input>\n          </ion-item>\n        </ion-row>\n        <ion-row justify-content-center padding>\n            <ion-item class="input">\n              <ion-label color="primary" stacked>Address 3</ion-label>\n              <ion-input type="text" placeholder="Country" [(ngModel)]="card.address3" name="address3"></ion-input>\n            </ion-item>\n          </ion-row>\n          <ion-row justify-content-center padding>\n            <ion-item class="input">\n              <ion-label color="primary" stacked>Website</ion-label>\n              <ion-input type="text" placeholder="Website link(URL)" [(ngModel)]="card.website" name="website"></ion-input>\n            </ion-item>\n          </ion-row>\n          <ion-row >\n              <ion-label color="primary" stacked>Choose your card color (optional)</ion-label>\n\n          </ion-row>\n          <ion-row justify-content-left padding>\n                <!-- <ion-label color="primary" stacked>Choose your card color</ion-label> -->\n                <!-- *ngFor ="let color of colors" -->\n                <div class="selector" padding>\n                <ion-list radio-group [(ngModel)]="card.color" name="color">\n                    <ion-item class="option" color="white" *ngFor ="let color of colors">\n                      <ion-label color={{color.name}}>{{color.name}}</ion-label>\n                      <ion-radio value={{color.code}}  ></ion-radio>\n                    </ion-item>\n                  </ion-list>\n                </div>\n          </ion-row>\n          <br>\n          <br>\n          <ion-row justify-content-center >\n              <button ion-button outline round type="submit"  color="primary"><p  class="button-content" >Submit<p></button>\n          </ion-row>\n  </form>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\card\card.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object])
    ], CardPage);
    return CardPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=card.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__main_main__ = __webpack_require__(91);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(AFauth, navCtrl, navParams, alertCtrl, afDB) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.afDB = afDB;
        this.profile = {};
        this.todo = { password1: "", password2: "", name: "", surname: "", email: "" };
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.logForm = function () {
        console.log(this.todo);
        var fields = this.todo;
        this.checkFields(fields);
    };
    RegisterPage.prototype.checkFields = function (field) {
        var string = this.todo.password1;
        if (this.profile.name == null || this.profile.name == "" ||
            this.profile.surname == null || this.profile.surname == "" ||
            field.email == null || field.email == "" ||
            field.password1 == null || field.password1 == "" ||
            field.password2 == null || field.password2 == "") {
            this.alert("All fields are required, please make sure that you have provided all fields");
        }
        else if (field.password1 != field.password2) {
            this.alert("Passwords do not match, please make sure that both passwords are the same");
        }
        else if (string.length < 6) {
            this.alert("The password has to be at least 6 charachters!");
        }
        else {
            var fields = this.todo;
            this.register(fields);
        }
    };
    RegisterPage.prototype.alert = function (comment) {
        console.log(comment);
        var ALERT = this.alertCtrl.create({
            title: "Alert",
            message: comment,
            buttons: [{ text: " OK!" }]
        });
        ALERT.present();
    };
    RegisterPage.prototype.register = function (field) {
        return __awaiter(this, void 0, void 0, function () {
            var result, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.AFauth.auth.createUserWithEmailAndPassword(field.email, field.password1)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.createProfile();
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        this.alert("This email has already been registered!");
                        console.error(error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage.prototype.createProfile = function () {
        var _this = this;
        this.AFauth.authState.take(1).subscribe(function (auth) {
            _this.afDB.object("profile/" + auth.uid).set(_this.profile).then(function () { return _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__main_main__["a" /* MainPage */]); });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-content padding class="flyer">\n\n    <ion-grid style="padding:0px;height:100%;" >\n      <br>\n      <br>\n      <br>\n      <ion-row justify-content-center>\n        <ion-col text-center >\n          <h1 class="header">Register</h1>\n        </ion-col>\n      </ion-row>\n      <!-- <ion-img [width]="150" [height]="150" src="images/logo.png" ></ion-img> -->\n      <br>\n      <br>\n      <br>\n      <!-- THIS IS  THE FORM  -->\n      <form (ngSubmit)="logForm()">\n      <ion-row justify-content-center padding>\n        <ion-col>\n            <ion-item class="input">\n              <ion-label color="primary" stacked>Name</ion-label>\n              <ion-input type="text" placeholder="Your name" [(ngModel)]="profile.name" name="name" required></ion-input>\n            </ion-item>\n          </ion-col>\n          &nbsp;\n\n\n          <ion-col>\n            <ion-item class="input">\n              <ion-label color="primary" stacked>Surname</ion-label>\n              <ion-input  type="text" placeholder="Your last name"  [(ngModel)]="profile.surname" name="surname"required></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n\n      <ion-row justify-content-center padding>\n        <ion-col>\n            <ion-item class="input">\n              <ion-label color="primary" stacked>Email</ion-label>\n              <ion-input type="email" placeholder="example@gmail.com" [(ngModel)]="todo.email" name="email"required ></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n      <ion-row justify-content-center padding>\n        <ion-col>\n            <ion-item class="input">\n              <ion-label color="primary" stacked>Password</ion-label>\n              <ion-input type="password" placeholder="At least 6 charachters" [(ngModel)]="todo.password1" name="password1"required ></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n      <ion-row justify-content-center padding>\n        <ion-col>\n            <ion-item class="input">\n              <ion-label color="primary" stacked>Confirm password</ion-label>\n              <ion-input type="password" placeholder="Re-enter password" [(ngModel)]="todo.password2" name="password2" required></ion-input>\n            </ion-item>\n          </ion-col>\n      </ion-row>\n      <br>\n      <ion-row justify-content-center >\n          <button ion-button  type="submit" round color="white"><p  class="button-content" required>Submit<p></button>\n      </ion-row>\n    </form>\n    <!-- FORM ENDS HERE -->\n\n\n\n    </ion-grid>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\register\register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 174:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 174;

/***/ }),

/***/ 219:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/card/card.module": [
		715,
		2
	],
	"../pages/main/main.module": [
		716,
		1
	],
	"../pages/register/register.module": [
		717,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 219;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_take__);



Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic_storage__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__ = __webpack_require__(712);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__ = __webpack_require__(322);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_firebase_config__ = __webpack_require__(713);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_main_main__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__app_component__ = __webpack_require__(714);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_register_register__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_card_card__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_card_card__["a" /* CardPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/card/card.module#CardPageModule', name: 'CardPage', segment: 'card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__app_firebase_config__["a" /* FIREBASE_CONFIG */]),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_9_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_0__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_13__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_main_main__["a" /* MainPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_card_card__["a" /* CardPage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_native_page_transitions__["a" /* NativePageTransitions */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_keyboard__["a" /* Keyboard */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 713:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FIREBASE_CONFIG; });
var config = {
    apiKey: "AIzaSyDNxuWJ3HLdrcVyE2TUnvwFiIRRlG1z-Q0",
    authDomain: "snapcard-2b103.firebaseapp.com",
    databaseURL: "https://snapcard-2b103.firebaseio.com",
    projectId: "snapcard-2b103",
    storageBucket: "snapcard-2b103.appspot.com",
    messagingSenderId: "970529005812"
};
var FIREBASE_CONFIG = config;
//# sourceMappingURL=app.firebase.config.js.map

/***/ }),

/***/ 714:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(138);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__card_card__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(96);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = /** @class */ (function () {
    function MainPage(AFauth, navCtrl, navParams, storage) {
        this.AFauth = AFauth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.storage = storage;
    }
    MainPage.prototype.ionViewDidLoad = function () {
        this.AFauth.authState.subscribe(function (data) { return console.log(data); });
    };
    MainPage.prototype.addCard = function () {
        console.log('Opening card form');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_0__card_card__["a" /* CardPage */]);
    };
    MainPage.prototype.logout = function () {
        this.storage.set('state', 'loggedout');
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
    };
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-main',template:/*ion-inline-start:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\main\main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <button clear ion-button style="float:right" round color="white" (click)="logout()">Sign out</button>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content >\n  <ion-slides style="height: 85%"  pager>\n    <ion-slide>\n      <div class="emptycard" style="height: 500px;">\n        <ion-grid style="height: 100%;">\n          <ion-row style="height: 100%;" align-items-center >\n            <ion-col>\n              <button color="primary" ion-button default round outline (click)="addCard()"><ion-icon name="md-add"></ion-icon>&nbsp; Add card</button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n    </ion-slide>\n  </ion-slides>\n</ion-content>\n'/*ion-inline-end:"C:\Users\Mohammad\Desktop\apps\SnapCard\src\pages\main\main.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["a" /* AngularFireAuth */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.js.map