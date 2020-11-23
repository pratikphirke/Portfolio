webpackJsonp([0],{

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__url_url__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__define_define__ = __webpack_require__(118);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ServiceProvider = /** @class */ (function () {
    // headers: any = new HttpHeaders({ 'Content-Type': 'application/json' });
    function ServiceProvider(http, events, urlProvider, DefineProvider) {
        this.http = http;
        this.events = events;
        this.urlProvider = urlProvider;
        this.DefineProvider = DefineProvider;
        console.log('Hello ServiceProvider Provider');
        this.serverURl = this.urlProvider.serverUrl;
        this.emailValidateUrl = this.urlProvider.emailVerify;
        this.generateOtpUrl = this.urlProvider.generateOtp;
        this.registrationUrl = this.urlProvider.registration;
        this.getAccountDetailsUrl = this.urlProvider.getAccountDetails;
        this.getCountriesUrl = this.urlProvider.getCountries;
        this.getStatesUrl = this.urlProvider.getStatesByCountry;
        this.getCitiesUrl = this.urlProvider.getCitiesByState;
        this.getLanguagesUrl = this.urlProvider.getLanguages;
        this.getUserListUrl = this.urlProvider.getUserList;
        this.getUserDetailsUrl = this.urlProvider.getUserDetails;
        this.getMatrimonyUsersUrl = this.urlProvider.getMatrimonyUsers;
        this.getBusinessUsersUrl = this.urlProvider.getBusinessUsers;
        this.getNewsUrl = this.urlProvider.getNews;
    }
    ServiceProvider.prototype.checkApi = function () {
        var _this = this;
        return function (res) {
            if (res.status == 3) {
                //handle authorization errors
                //in this example I am navigating to login.
                console.log("Error_Token_Expired: redirecting to login.");
                _this.events.publish('logout');
            }
            return (res);
        };
        // console.log(res);
        // if (res.status == 1) {
        //   // this.events.publish('logout');
        //   return res;
        // }
        // else {
        //   return res;
        // }
    };
    ServiceProvider.prototype.emailVerify = function (formdata) {
        var result;
        result = this.http.post(this.serverURl + this.emailValidateUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.generateOtp = function (formdata) {
        var result;
        result = this.http.post(this.serverURl + this.generateOtpUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.login = function (formdata) {
        var result;
        result = this.http.post(this.serverURl + this.loginUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.registration = function (formdata) {
        var result;
        console.log(formdata);
        result = this.http.post(this.serverURl + this.registrationUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.getAccountDetails = function (formdata) {
        var result;
        console.log(formdata);
        result = this.http.post(this.serverURl + this.getAccountDetailsUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.getAllCountries = function () {
        var result;
        result = this.http.post(this.serverURl + this.getCountriesUrl, '');
        return result;
    };
    ServiceProvider.prototype.getLanguages = function () {
        var result;
        result = this.http.post(this.serverURl + this.getLanguagesUrl, '');
        return result;
    };
    ServiceProvider.prototype.getStates = function (formdata) {
        var result;
        result = this.http.post(this.serverURl + this.getStatesUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.getCities = function (formdata) {
        var result;
        result = this.http.post(this.serverURl + this.getCitiesUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.getUserList = function () {
        var result;
        result = this.http.post(this.serverURl + this.getUserListUrl, '');
        return result;
    };
    ServiceProvider.prototype.getUserDetails = function (formdata) {
        var result;
        result = this.http.post(this.serverURl + this.getUserDetailsUrl, (formdata)).map(this.checkApi());
        return result;
    };
    ServiceProvider.prototype.getMatrimonyUsers = function () {
        var result;
        result = this.http.post(this.serverURl + this.getMatrimonyUsersUrl, '');
        return result;
    };
    ServiceProvider.prototype.getBusinessUsers = function () {
        var result;
        result = this.http.post(this.serverURl + this.getBusinessUsersUrl, '');
        return result;
    };
    ServiceProvider.prototype.getNews = function () {
        var result;
        result = this.http.post(this.serverURl + this.getNewsUrl, '');
        return result;
    };
    ServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_4__url_url__["a" /* UrlProvider */], __WEBPACK_IMPORTED_MODULE_5__define_define__["a" /* DefineProvider */]])
    ], ServiceProvider);
    return ServiceProvider;
}());

//# sourceMappingURL=service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrothersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_validation_message_validation_message__ = __webpack_require__(14);
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
 * Generated class for the BrothersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BrothersPage = /** @class */ (function () {
    function BrothersPage(navCtrl, navParams, viewCtrl, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.validation = validation;
        this.totalBrothers = [];
        this.brothersArray = [];
        this.brothersForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            dob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            marital_status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            brotheroccupation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]),
        });
        this.validation_messages = this.validation.validationMessage();
    }
    BrothersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BrothersPage');
        this.noOfBrothers = this.navParams.get('value');
    };
    BrothersPage.prototype.ageFromDateOfBirthday = function (birthdate) {
        // if(moment().diff(birthdate, 'years') < 18) {
        //   this.invalidAgeMsg = 'You are not elligible';
        // } else this.invalidAgeMsg = null;
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()().diff(birthdate, 'years');
    };
    BrothersPage.prototype.next = function (data) {
        var _this = this;
        if (this.brothersForm.valid) {
            this.brothersArray.push(data);
        }
        else {
            console.log('form errr');
            Object.keys(this.brothersForm.controls).forEach(function (field) {
                var control = _this.brothersForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
        this.slides.slideNext();
    };
    BrothersPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    BrothersPage.prototype.close = function (data) {
        var _this = this;
        if (this.brothersForm.valid) {
            this.brothersArray.push(data);
        }
        else {
            console.log('form errr');
            Object.keys(this.brothersForm.controls).forEach(function (field) {
                var control = _this.brothersForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
        console.log('-------------Data-------------', this.brothersArray);
        this.viewCtrl.dismiss(this.brothersArray);
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Slides */])
    ], BrothersPage.prototype, "slides", void 0);
    BrothersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-brothers',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\brothers\brothers.html"*/'<!--\n\n  Generated template for the BrothersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <ion-slides #slides>\n\n    <ion-slide>\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="brothersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter brothers Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="brothersForm.get(\'name\').hasError(validation.type) && brothersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY" clearInput></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="brothersForm.get(\'dob\').hasError(validation.type) && brothersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'marital_status\').hasError(validation.type) && brothersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="brotheroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'brotheroccupation\').hasError(validation.type) && brothersForm.get(\'brotheroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="brothersForm.get(\'mobile\').hasError(validation.type) && brothersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfBrothers > 1; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(brothersForm.value)">Save & Next</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(brothersForm.value)">save & continue</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n        </div>\n\n        \n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color: blue">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="brothersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter brothers Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="brothersForm.get(\'name\').hasError(validation.type) && brothersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="brothersForm.get(\'dob\').hasError(validation.type) && brothersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'marital_status\').hasError(validation.type) && brothersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="brotheroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'brotheroccupation\').hasError(validation.type) && brothersForm.get(\'brotheroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="brothersForm.get(\'mobile\').hasError(validation.type) && brothersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfBrothers > 2; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(brothersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(brothersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="brothersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter brothers Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="brothersForm.get(\'name\').hasError(validation.type) && brothersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="brothersForm.get(\'dob\').hasError(validation.type) && brothersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'marital_status\').hasError(validation.type) && brothersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="brotheroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'brotheroccupation\').hasError(validation.type) && brothersForm.get(\'brotheroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="brothersForm.get(\'mobile\').hasError(validation.type) && brothersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfBrothers > 3; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(brothersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(brothersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="brothersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter brothers Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="brothersForm.get(\'name\').hasError(validation.type) && brothersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="brothersForm.get(\'dob\').hasError(validation.type) && brothersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'marital_status\').hasError(validation.type) && brothersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="brotheroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'brotheroccupation\').hasError(validation.type) && brothersForm.get(\'brotheroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="brothersForm.get(\'mobile\').hasError(validation.type) && brothersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfBrothers > 4; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(brothersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(brothersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="brothersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter brothers Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="brothersForm.get(\'name\').hasError(validation.type) && brothersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="brothersForm.get(\'dob\').hasError(validation.type) && brothersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'marital_status\').hasError(validation.type) && brothersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="brotheroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="brothersForm.get(\'brotheroccupation\').hasError(validation.type) && brothersForm.get(\'brotheroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="brothersForm.get(\'mobile\').hasError(validation.type) && brothersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfBrothers > 5; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(brothersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(brothersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n    </ion-slide>\n\n  \n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\brothers\brothers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], BrothersPage);
    return BrothersPage;
}());

//# sourceMappingURL=brothers.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DefineProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the DefineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var DefineProvider = /** @class */ (function () {
    function DefineProvider(http) {
        this.http = http;
        console.log('Hello DefineProvider Provider');
    }
    DefineProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DefineProvider);
    return DefineProvider;
}());

//# sourceMappingURL=define.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__step2_step2__ = __webpack_require__(357);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//@IonicPage()
var Step1Page = /** @class */ (function () {
    function Step1Page(file, camera, base64, api, navParams, navCtrl, splash, sanitizer, alertCtrl, actionSheetCtrl, validation) {
        this.file = file;
        this.camera = camera;
        this.base64 = base64;
        this.api = api;
        this.navParams = navParams;
        this.navCtrl = navCtrl;
        this.splash = splash;
        this.sanitizer = sanitizer;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.validation = validation;
        this.dataArray = {};
        var EMAILPATTERN = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            firstName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')]),
            middleName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')]),
            lastName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern('[a-zA-Z ]*')]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].pattern(EMAILPATTERN)]),
            phone1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10)]),
            phone2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]),
            selfie: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
        });
        this.validation_messages = this.validation.validationMessage();
    }
    Step1Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegisterPage');
        //this.initForm();
        this.email = this.navParams.get('email');
        this.api.getAllCountries().subscribe(function (res) {
            console.log(res);
            _this.countries = res.data;
        });
    };
    // initForm() {
    // }
    Step1Page.prototype.getPhoto = function (side) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'File Manager',
                    icon: 'folder-open',
                    cssClass: 'actionSheetButon',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY, side);
                        // this.fileChoose(side)
                    }
                },
                {
                    text: 'Camera',
                    icon: 'camera',
                    cssClass: 'actionSheetButon',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA, side);
                    }
                },]
        });
        actionSheet.present();
    };
    Step1Page.prototype.takePicture = function (sourceType, side) {
        // Create options for the Camera Dialog
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            DestinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            maxiImagesCount: 4 // defaults to 1
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.file.resolveLocalFilesystemUrl(imagePath).then(function (fileInfo) {
                var files = fileInfo;
                files.file(function () {
                    // this.fileName = success.name
                    _this.convertImageToBase64(imagePath, side);
                });
            }, function (err) {
                console.log(err);
                throw err;
            });
        });
    };
    Step1Page.prototype.convertImageToBase64 = function (base64, side) {
        var _this = this;
        this.splash.presentLoading();
        this.base64.encodeFile(base64).then(function (base64File) {
            if (side == 'selfie') {
                _this.selfie = _this.sanitizer.bypassSecurityTrustResourceUrl(base64File);
                _this.splash.dismiss();
            }
        }, function (err) {
            _this.splash.dismiss();
            console.log(err);
        });
    };
    Step1Page.prototype.signUp = function (data) {
        var _this = this;
        if (this.signUpForm.valid) {
            this.dataArray['firstname'] = data.firstName,
                this.dataArray['middlename'] = data.middleName,
                this.dataArray['lastname'] = data.lastName,
                this.dataArray['phone1'] = data.phone1,
                this.dataArray['phone2'] = data.phone2,
                this.dataArray['email'] = data.email,
                this.dataArray['photo'] = this.selfie.changingThisBreaksApplicationSecurity,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__step2_step2__["a" /* Step2Page */], { dataArray: this.dataArray, country: this.countries });
        }
        else {
            console.log('form errr');
            Object.keys(this.signUpForm.controls).forEach(function (field) {
                var control = _this.signUpForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    Step1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step1',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step1\step1.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n\n\n          <form (ngSubmit)="signUp(signUpForm.value)" [formGroup]="signUpForm">\n\n            <ion-list class="login-user-info">\n\n              \n\n              <ion-row class="gender-box">\n\n                <ion-col (click)="getPhoto(\'selfie\')" *ngIf="selfie" col-4>\n\n                    <div class="document-img-box">\n\n                        <img [src]="selfie">\n\n                    </div>\n\n                </ion-col>\n\n                <ion-col *ngIf="!selfie" (click)="getPhoto(\'selfie\')" col-4>\n\n                    <div class="document-img-box dotted-border">\n\n                        <ion-icon ios="ios-add-circle" md="md-add-circle" class="add-img-icon"></ion-icon>\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n  \n\n            <ion-input formControlName="selfie" [(ngModel)]="selfie" type="text" hidden></ion-input>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="First Name" ([ngModel])="firstName" formControlName="firstName"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.firstName" >\n\n                    <div *ngIf="signUpForm.get(\'firstName\').hasError(validation.type) && signUpForm.get(\'firstName\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="Middle Name" ([ngModel])="middleName" formControlName="middleName"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.middleName" >\n\n                    <div *ngIf="signUpForm.get(\'middleName\').hasError(validation.type) && signUpForm.get(\'middleName\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="Last Name" ([ngModel])="lastName" formControlName="lastName"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.lastName" >\n\n                    <div *ngIf="signUpForm.get(\'lastName\').hasError(validation.type) && signUpForm.get(\'lastName\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left name="mail"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="email" placeholder="Email" value="{{email}}" ([ngModel])="email" formControlName="email"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.email" >\n\n                    <div *ngIf="signUpForm.get(\'email\').hasError(validation.type) && signUpForm.get(\'email\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n                \n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="number" placeholder="Mobile No 1" ([ngModel])="phone1" formControlName="phone1"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.phone1" >\n\n                    <div *ngIf="signUpForm.get(\'phone1\').hasError(validation.type) && signUpForm.get(\'phone1\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="number" placeholder="Mobile No 2(Optional)" ([ngModel])="phone2" formControlName="phone2"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.phone2" >\n\n                    <div *ngIf="signUpForm.get(\'phone2\').hasError(validation.type) && signUpForm.get(\'phone2\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n            </ion-list>\n\n\n\n          <button ion-button round center class="login-btn">Next</button>\n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step1\step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_7__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_splash_splash__["a" /* SplashProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], Step1Page);
    return Step1Page;
}());

//# sourceMappingURL=step1.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SistersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_validation_message_validation_message__ = __webpack_require__(14);
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
 * Generated class for the SistersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var SistersPage = /** @class */ (function () {
    function SistersPage(navCtrl, navParams, viewCtrl, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.sistersArray = [];
        this.sistersForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            dob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            marital_status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            sisteroccupation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
        });
        this.validation_messages = validation.validationMessage();
    }
    SistersPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SistersPage');
        this.noOfSisters = this.navParams.get('value');
    };
    SistersPage.prototype.ageFromDateOfBirthday = function (birthdate) {
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()().diff(birthdate, 'years');
    };
    SistersPage.prototype.next = function (data) {
        var _this = this;
        if (this.sistersForm.valid) {
            this.sistersArray.push(data);
        }
        else {
            console.log('form errr');
            Object.keys(this.sistersForm.controls).forEach(function (field) {
                var control = _this.sistersForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
        this.slides.slideNext();
    };
    SistersPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    SistersPage.prototype.close = function (data) {
        var _this = this;
        if (this.sistersForm.valid) {
            this.sistersArray.push(data);
        }
        else {
            console.log('form errr');
            Object.keys(this.sistersForm.controls).forEach(function (field) {
                var control = _this.sistersForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
        console.log('-------------Data-------------', this.sistersArray);
        this.viewCtrl.dismiss(this.sistersArray);
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Slides */])
    ], SistersPage.prototype, "slides", void 0);
    SistersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sisters',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sisters\sisters.html"*/'\n\n<!--\n\n  Generated template for the BrothersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <ion-slides #slides>\n\n    <ion-slide style="background-color: green">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="sistersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter Sisters Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="sistersForm.get(\'name\').hasError(validation.type) && sistersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="sistersForm.get(\'dob\').hasError(validation.type) && sistersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'marital_status\').hasError(validation.type) && sistersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="sisteroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="housewife">House wife</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'sisteroccupation\').hasError(validation.type) && sistersForm.get(\'sisteroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="sistersForm.get(\'mobile\').hasError(validation.type) && sistersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfSisters > 1; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(sistersForm.value)">Save & Next</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(sistersForm.value)">save & continue</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n        </div>\n\n        \n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color: blue">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="sistersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter Sisters Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="sistersForm.get(\'name\').hasError(validation.type) && sistersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="sistersForm.get(\'dob\').hasError(validation.type) && sistersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'marital_status\').hasError(validation.type) && sistersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="sisteroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="housewife">House wife</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'sisteroccupation\').hasError(validation.type) && sistersForm.get(\'sisteroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="sistersForm.get(\'mobile\').hasError(validation.type) && sistersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfSisters > 2; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(sistersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(sistersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="sistersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter Sisters Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="sistersForm.get(\'name\').hasError(validation.type) && sistersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="sistersForm.get(\'dob\').hasError(validation.type) && sistersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'marital_status\').hasError(validation.type) && sistersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="sisteroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="housewife">House wife</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'sisteroccupation\').hasError(validation.type) && sistersForm.get(\'sisteroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="sistersForm.get(\'mobile\').hasError(validation.type) && sistersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfSisters > 3; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(sistersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(sistersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="sistersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter Sisters Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="sistersForm.get(\'name\').hasError(validation.type) && sistersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="sistersForm.get(\'dob\').hasError(validation.type) && sistersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'marital_status\').hasError(validation.type) && sistersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="sisteroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="housewife">House wife</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'sisteroccupation\').hasError(validation.type) && sistersForm.get(\'sisteroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="sistersForm.get(\'mobile\').hasError(validation.type) && sistersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfSisters > 4; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(sistersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(sistersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="sistersForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter Sisters Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="sistersForm.get(\'name\').hasError(validation.type) && sistersForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="sistersForm.get(\'dob\').hasError(validation.type) && sistersForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'marital_status\').hasError(validation.type) && sistersForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Occupation" formControlName="sisteroccupation">\n\n                    <ion-option value="Business">Business</ion-option>\n\n                    <ion-option value="private_job">Private Job</ion-option>\n\n                    <ion-option value="government_job">Government Job</ion-option>\n\n                    <ion-option value="housewife">House wife</ion-option>\n\n                    <ion-option value="other">other</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="sistersForm.get(\'sisteroccupation\').hasError(validation.type) && sistersForm.get(\'sisteroccupation\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="sistersForm.get(\'mobile\').hasError(validation.type) && sistersForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n              </ion-list>              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfSisters > 5; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(sistersForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(sistersForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n    </ion-slide>\n\n  \n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sisters\sisters.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], SistersPage);
    return SistersPage;
}());

//# sourceMappingURL=sisters.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_splash_splash__ = __webpack_require__(15);
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
 * Generated class for the UserInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var UserInfoPage = /** @class */ (function () {
    function UserInfoPage(navCtrl, navParams, splash, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splash = splash;
        this.api = api;
    }
    UserInfoPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        var id = this.navParams.get('id');
        var formdata = new FormData();
        formdata.append('user_id', id);
        this.splash.presentLoading();
        this.api.getUserDetails(formdata).subscribe(function (res) {
            if (res.status == "true") {
                _this.splash.dismiss();
                _this.userInfo = res.data;
                console.log(res);
            }
            else {
                _this.splash.dismiss();
            }
        });
        console.log('ionViewDidLoad UserInfoPage');
    };
    UserInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-info',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\user\user-info\user-info.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <!-- <div class="back-icon-img">\n\n                      <img src="assets/imgs/back-arrow.png">\n\n                  </div> -->\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">App Name</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                      <img src="assets/imgs/list-icon.png">\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n    \n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="ion-no-padding">\n\n          <ion-row>\n\n              <div class="slider-box">\n\n\n\n                  <div class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </div>\n\n\n\n              </div>\n\n          </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n\n\n  <div class="bg-blue">\n\n      <h3 class="title-bg-blue" *ngIf="userInfo">{{userInfo.firstname}} {{userInfo.lastname}}</h3>\n\n  </div>\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="">\n\n          <ion-row>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <!-- <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div> -->\n\n\n\n                      <div class="user-info-box">\n\n                          <h3>News Heading title</h3>\n\n                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make\n\n                              a type specimen book.\n\n\n\n                          </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n\n\n\n\n          </ion-row>\n\n\n\n          <ion-row>\n\n              <ion-col col-6>\n\n                  <button ion-button round class="login-btn">Business</button>\n\n              </ion-col>\n\n              <ion-col col-6>\n\n                  <button ion-button round class="login-btn">Matrimony</button>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n  <!-- <div class="bg-blue mrg-t-10">\n\n      <h3 class="contact-info">Contact Us - judymoodysolutions.com</h3>\n\n  </div>\n\n  <div class="bg-gray mrg-t-10">\n\n      <h3 class="email-info">Email Id - judymoodysolutions@gmail.com</h3>\n\n  </div> -->\n\n\n\n  <div class="mrg-t-40"></div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\user\user-info\user-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], UserInfoPage);
    return UserInfoPage;
}());

//# sourceMappingURL=user-info.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the NewsDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var NewsDetailsPage = /** @class */ (function () {
    function NewsDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.news = this.navParams.get('news');
    }
    NewsDetailsPage.prototype.ionViewWillEnter = function () {
        console.log('ionViewDidLoad NewsDetailsPage');
    };
    NewsDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news-details',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\news-details\news-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-grid class="no-padding">\n\n            <ion-row>\n\n                <ion-col col-2>\n\n                    <!-- <div class="back-icon-img">\n\n                        <img src="assets/imgs/back-arrow.png">\n\n                    </div> -->\n\n                </ion-col>\n\n                <ion-col col-8>\n\n                    <h2 class="header-title-2">News Details</h2>\n\n  \n\n                </ion-col>\n\n                <ion-col col-2>\n\n                    <div class="menu-list-img">\n\n                        <img src="assets/imgs/list-icon.png">\n\n                    </div>\n\n                </ion-col>\n\n            </ion-row>\n\n        </ion-grid>\n\n  \n\n    </ion-navbar>\n\n  </ion-header>\n\n\n\n<ion-content>\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="ion-no-padding">\n\n          <ion-row>\n\n              <div class="slider-box">\n\n\n\n                  <div class=" size-box-slider">\n\n                      <!-- <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card> -->\n\n                  </div>\n\n\n\n              </div>\n\n          </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n\n\n  <!-- <div class="bg-blue">\n\n      <h3 css="title-bg-blue">User Name</h3>\n\n  </div> -->\n\n\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="">\n\n          <ion-row *ngIf="news">\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                        <img src="assets/imgs/new-img-1.jpg">\n\n                    </div>\n\n\n\n                    <div class="new-cuntent-box">\n\n                        <h3>Lauren ipsum</h3>\n\n                        <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> {{news.created}}</small></div>\n\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n                          Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>\n\n\n\n                    </div>\n\n                  </div>\n\n\n\n              </div>\n\n\n\n\n\n          </ion-row>\n\n\n\n\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n  <!-- <div class="bg-blue mrg-t-10">\n\n    <h3 class="contact-info">Contact Us - judymoodysolutions.com</h3>\n\n</div>\n\n<div class="bg-gray mrg-t-10">\n\n    <h3 class="email-info">Email Id - judymoodysolutions@gmail.com</h3>\n\n</div> -->\n\n\n\n  <div class="mrg-t-40"></div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\news-details\news-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], NewsDetailsPage);
    return NewsDetailsPage;
}());

//# sourceMappingURL=news-details.js.map

/***/ }),

/***/ 134:
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
webpackEmptyAsyncContext.id = 134;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationMessageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ValidationMessageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ValidationMessageProvider = /** @class */ (function () {
    function ValidationMessageProvider(http) {
        this.http = http;
        console.log('Hello ValidationMessageProvider Provider');
    }
    ValidationMessageProvider.prototype.validationMessage = function () {
        this.validation_messages = {
            'commonmessage': [
                { type: 'required', message: 'This field should not be empty' }
            ],
            'name': [
                { type: 'required', message: 'Enter a name' },
                { type: 'pattern', message: 'Enter a valid name' }
            ],
            'firstName': [
                { type: 'required', message: 'Enter a name' },
                { type: 'pattern', message: 'Enter a valid name' }
            ],
            'lastName': [
                { type: 'required', message: 'Enter a last name' },
                { type: 'pattern', message: 'Enter a valid name' }
            ],
            'middleName': [
                { type: 'required', message: 'Enter a last name' },
                { type: 'pattern', message: 'Enter a valid name' }
            ],
            'email': [
                { type: 'required', message: 'Enter email-id' },
                { type: 'email', message: 'Enter a valid email' }
            ],
            'mobile': [
                { type: 'required', message: 'Enter mobile number' },
                { type: 'minlength', message: 'Enter a valid Mobile Number' },
                { type: 'maxlength', message: 'Enter a valid mobile Number' }
            ],
            'phone1': [
                { type: 'required', message: 'Enter mobile number' },
                { type: 'minlength', message: 'Enter a valid Number' },
                { type: 'maxlength', message: 'Enter a valid mobile Number' }
            ],
            'phone2': [
                { type: 'required', message: 'Enter mobile number' },
                { type: 'minlength', message: 'Enter a valid Number' }
            ],
            'address': [
                { type: 'required', message: 'Enter the address' },
            ],
            'fromDate': [
                { type: 'required', message: 'Select the date' },
            ],
            'milkType': [
                { type: 'required', message: 'Please select a milktype' },
            ],
            'session': [
                { type: 'required', message: 'Please Select a session' },
            ],
            'amount': [
                { type: 'required', message: 'Please Enter a amount' },
            ],
            'selectedLang': [
                { type: 'required', message: 'Select atleast one language' },
            ],
            'city': [
                { type: 'required', message: 'Select the city' },
            ],
            'state': [
                { type: 'required', message: 'Select the state' },
            ],
            'country': [
                { type: 'required', message: 'Select the country' },
            ],
            'permanent_address': [
                { type: 'required', message: 'Select the address' },
            ],
            'present_address': [
                { type: 'required', message: 'Select the address' },
            ],
            'date_of_birth': [
                { type: 'required', message: 'Select the date' },
            ],
            'gender': [
                { type: 'required', message: 'Select the gender' },
            ],
            'age': [
                { type: 'required', message: 'Select enter age' },
            ],
            'religion': [
                { type: 'required', message: 'Select the religion' },
            ],
            'caste': [
                { type: 'required', message: 'Enter the caste' },
            ],
            'marital_status': [
                { type: 'required', message: 'Select marital status' },
            ],
            'education': [
                { type: 'required', message: 'Select education' },
            ],
            'annual_income': [
                { type: 'required', message: 'Select annual income' },
            ],
            'hobbies': [
                { type: 'required', message: 'Enter hobbies seperated by comma' },
            ],
            'profession': [
                { type: 'required', message: 'Select profession status' },
            ],
            'fatherOccupation': [
                { type: 'required', message: 'Select occipation' },
            ],
        };
        return this.validation_messages;
    };
    ValidationMessageProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], ValidationMessageProvider);
    return ValidationMessageProvider;
}());

//# sourceMappingURL=validation-message.js.map

/***/ }),

/***/ 15:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_popover_popover__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__global_service_global_service__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SplashProvider = /** @class */ (function () {
    function SplashProvider(http, toastCtrl, alertCtrl, loadingCtrl, popoverCtrl, global, app) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.popoverCtrl = popoverCtrl;
        this.global = global;
        this.app = app;
    }
    SplashProvider.prototype.toast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 2000,
            position: 'bottom'
        });
        toast.present();
    };
    SplashProvider.prototype.presentLoading = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\">\n            <img src=\"assets/imgs/loader.gif\" />\n          </div>\n        </div>",
        });
        this.loading.onDidDismiss(function () {
        });
        this.loading.present();
    };
    SplashProvider.prototype.dismiss = function () {
        this.loading.dismiss();
    };
    SplashProvider.prototype.loadingShow = function () {
        this.loading = this.loadingCtrl.create({
            spinner: 'hide',
            content: "\n        <div class=\"custom-spinner-container\">\n          <div class=\"custom-spinner-box\">\n             <img src=\"assets/imgs/loader.gif\" />\n          </div>\n        </div>",
            duration: 30000
        });
        this.loading.present();
    };
    SplashProvider.prototype.presentPopover = function () {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_3__pages_popover_popover__["a" /* PopoverPage */]);
        popover.present();
    };
    SplashProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["q" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["n" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_4__global_service_global_service__["a" /* GlobalServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* App */]])
    ], SplashProvider);
    return SplashProvider;
}());

//# sourceMappingURL=splash.js.map

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export User */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var User = /** @class */ (function () {
    function User(user_id) {
        this.id = user_id;
    }
    return User;
}());

var GlobalServiceProvider = /** @class */ (function () {
    function GlobalServiceProvider(http) {
        this.http = http;
        console.log('Hello GlobleServiceProvider Provider');
    }
    GlobalServiceProvider.prototype.setUser = function (user_id) {
        console.log(user_id);
        this.id = user_id;
        window.localStorage.setItem('id', user_id);
        window.localStorage.setItem('response', JSON.stringify(user_id));
        this.currentUser = new User(user_id);
    };
    GlobalServiceProvider.prototype.getUserInfo = function () {
        return this.currentUser;
    };
    GlobalServiceProvider.prototype.setGlobleVariable = function () {
        this.id = window.localStorage.getItem('id');
        this.currentUser = new User(window.localStorage.getItem('response'));
    };
    GlobalServiceProvider.prototype.logout = function () {
        var _this = this;
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            window.localStorage.clear();
            _this.currentUser = "";
            _this.id = "";
            observer.next(true);
            observer.complete();
        });
    };
    GlobalServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], GlobalServiceProvider);
    return GlobalServiceProvider;
}());

//# sourceMappingURL=global-service.js.map

/***/ }),

/***/ 178:
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
webpackEmptyAsyncContext.id = 178;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_define_define__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__otp_otp__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sign_up_step1_step1__ = __webpack_require__(119);
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
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams, api, DefineProvider, global, events, splash, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.DefineProvider = DefineProvider;
        this.global = global;
        this.events = events;
        this.splash = splash;
        this.validation = validation;
        this.loginForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].email]),
        });
        this.validation_messages = this.validation.validationMessage();
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.signUp = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__sign_up_step1_step1__["a" /* Step1Page */]);
    };
    LoginPage.prototype.verifyEmail = function (data) {
        var _this = this;
        if (this.loginForm.valid) {
            var formdata = new FormData();
            formdata.append('email', data.email);
            this.splash.presentLoading();
            this.api.emailVerify(formdata).subscribe(function (res) {
                console.log(res);
                var user_id = res.user_id;
                if (res.flag == 0) {
                    _this.splash.toast(res.data);
                }
                if (res.flag == 1) {
                    _this.splash.dismiss();
                    _this.splash.toast(res.messsage);
                    var formdata_1 = new FormData();
                    formdata_1.append('email', data.email);
                    _this.api.generateOtp(formdata_1).subscribe(function (res) {
                        console.log(res);
                        if (res.flag == 3) {
                            //this.sendOtpToEmail(data.email, res.otp)
                            // this.splash.toast(res.data);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__otp_otp__["a" /* OtpPage */], { email: data.email, otp: res.otp, id: user_id });
                        }
                    });
                }
                if (res.flag == 2) {
                    _this.splash.dismiss();
                    _this.splash.toast(res.message);
                    var formdata_2 = new FormData();
                    formdata_2.append('email', data.email);
                    console.log('---email----', formdata_2);
                    _this.api.generateOtp(formdata_2).subscribe(function (res) {
                        if (res.flag == 3) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__otp_otp__["a" /* OtpPage */], {
                                email: data.email,
                                otp: res.otp,
                            });
                        }
                    });
                    //this.navCtrl.push(Step1Page, {email: data.email})
                }
                if (res.status == 2) {
                    _this.splash.toast('Error Occured Please Try After Some Time');
                }
                if (res.status == 3) {
                    _this.events.publish('logout');
                }
            });
        }
        else {
            console.log('form errr');
            Object.keys(this.loginForm.controls).forEach(function (field) {
                var control = _this.loginForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\login\login.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n    <div class="login-box">\n\n        <div class="logo-box">\n\n\n\n            <img src="assets/imgs/logo-1.jpg">\n\n\n\n        </div>\n\n\n\n        <form (ngSubmit)="verifyEmail(loginForm.value)" [formGroup]="loginForm">\n\n          <ion-list class="login-user-info">\n\n              <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left name="mail"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Email" [(ngModel)]="email" formControlName="email"></ion-input>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.email" >\n\n                <div *ngIf="loginForm.get(\'email\').hasError(validation.type) && loginForm.get(\'email\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n              <!-- <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left name="mail"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="password" placeholder="Username"></ion-input>\n\n              </ion-item> -->\n\n          </ion-list>\n\n\n\n          <button ion-button round center class="login-btn">Login</button>\n\n\n\n        </form>\n\n    </div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_define_define__["a" /* DefineProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_global_service_global_service__["a" /* GlobalServiceProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */],
            __WEBPACK_IMPORTED_MODULE_6__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_7__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__business_business__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__matrimony_matrimony__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__news_news__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user_list_user_list__ = __webpack_require__(370);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tabsEnabled = true;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_5__user_user_list_user_list__["a" /* UserListPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__matrimony_matrimony__["a" /* MatrimonyPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_1__business_business__["a" /* BusinessPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__news_news__["a" /* NewsPage */];
    }
    TabsPage.prototype.enableTabs = function (enable) {
        this.tabsEnabled = enable;
    };
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\tabs\tabs.html"*/'<ion-tabs  id="tabs">\n\n  <ion-tab [root]="tab1Root" tabTitle="Home" tabIcon="home"  enabled="{{tabsEnabled}}"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="User" tabIcon="contacts"  enabled="{{tabsEnabled}}"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Matrimonial" tabIcon="heart"  enabled="{{tabsEnabled}}"></ion-tab>\n\n  <ion-tab [root]="tab4Root" tabTitle="Business" tabIcon="ios-list-box"  enabled="{{tabsEnabled}}"></ion-tab>\n\n  <ion-tab [root]="tab5Root" tabTitle="News" tabIcon="paper"  enabled="{{tabsEnabled}}"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 353:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__ = __webpack_require__(17);
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
 * Generated class for the PopoverPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var PopoverPage = /** @class */ (function () {
    function PopoverPage(navCtrl, navParams, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.global = global;
    }
    PopoverPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PopoverPage');
    };
    PopoverPage.prototype.logout = function () {
        this.global.logout();
    };
    PopoverPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-popover',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\popover\popover.html"*/'<!--\n\n  Generated template for the PopoverPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <ion-list>\n\n    <h3 (click)="Logout()">Logout</h3>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\popover\popover.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__["a" /* GlobalServiceProvider */]])
    ], PopoverPage);
    return PopoverPage;
}());

//# sourceMappingURL=popover.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__business_step3_business_step3__ = __webpack_require__(355);
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
 * Generated class for the BusinessStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var BusinessStep2Page = /** @class */ (function () {
    function BusinessStep2Page(navCtrl, navParams, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validation = validation;
        this.dataArray = {};
        this.businessForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            gstin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            business_type: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            products: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            about: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            turnover: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
        });
        this.validation_messages = this.validation.validationMessage();
    }
    BusinessStep2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusinessStep2Page');
        this.dataArray = this.navParams.get('dataArray');
    };
    BusinessStep2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BusinessStep2Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.businessForm.valid) {
            this.dataArray['gstin'] = data.gstin,
                this.dataArray['business_type'] = data.business_type,
                this.dataArray['products'] = data.products,
                this.dataArray['about'] = data.about,
                this.dataArray['turnover'] = data.turnover,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__business_step3_business_step3__["a" /* BusinessStep3Page */], { dataArray: this.dataArray });
        }
        else {
            console.log('form errr');
            Object.keys(this.businessForm.controls).forEach(function (field) {
                var control = _this.businessForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    BusinessStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-business-step2',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-step2\business-step2.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n        <form [formGroup]="businessForm">\n\n          <ion-list class="login-user-info">\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="text" placeholder="GSTIN" ([ngModel])="gstin" formControlName="gstin"></ion-input>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.commonmessage" >\n\n              <div *ngIf="businessForm.get(\'gstin\').hasError(validation.type) && businessForm.get(\'gstin\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n            <ion-item>\n\n              <ion-label>\n\n                  <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n              </ion-label>\n\n              <ion-select interface="popover" placeholder="Select business type"  ([ngModel])="business_type" formControlName="business_type">\n\n                  <ion-option value="Management">Management services</ion-option>\n\n                  <ion-option value="Software">Software services</ion-option>\n\n                  <ion-option value="Consulting">Consulting services</ion-option>\n\n                  <ion-option value="Training">Training Services</ion-option>\n\n                   <ion-option value="Financial">Financial services</ion-option>\n\n                   <ion-option value="Marketing">Marketing Services</ion-option>\n\n                   <ion-option value="Travel">Travel services</ion-option>\n\n                   <ion-option value="Catering/restaurant">Catering or restaurant services</ion-option>\n\n                   <ion-option value="Trading">Trading Services</ion-option>\n\n                   <ion-option value="Designing">Designing</ion-option>\n\n                   <ion-option value="Construction">Construction Services</ion-option>\n\n                   <ion-option value="WasteManagement">Waste Management Services</ion-option>\n\n                   <ion-option value="Security">Security Services</ion-option>\n\n                   <ion-option value="Manufacturing">Manufacturing services</ion-option>\n\n                   <ion-option value="SelfEmployed">Personal Services (Self employed)</ion-option>\n\n                  <ion-option value="other">Other</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.commonmessage" >\n\n              <div *ngIf="businessForm.get(\'business_type\').hasError(validation.type) && businessForm.get(\'business_type\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="text" placeholder="Enter Products/Services" ([ngModel])="products" formControlName="products"></ion-input>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.commonmessage" >\n\n              <div *ngIf="businessForm.get(\'products\').hasError(validation.type) && businessForm.get(\'products\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="text" placeholder="About" ([ngModel])="about" formControlName="about"></ion-input>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                <div *ngIf="businessForm.get(\'about\').hasError(validation.type) && businessForm.get(\'about\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="text" placeholder="Annual Turnover" ([ngModel])="turnover" formControlName="turnover"></ion-input>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                <div *ngIf="businessForm.get(\'turnover\').hasError(validation.type) && businessForm.get(\'turnover\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n            </ion-list>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button round center class="login-btn" (click)="submitDetails(businessForm.value)">Next</button>\n\n              </ion-col>\n\n            </ion-row>\n\n        </form>\n\n      </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-step2\business-step2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], BusinessStep2Page);
    return BusinessStep2Page;
}());

//# sourceMappingURL=business-step2.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(34);
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
 * Generated class for the BusinessStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var BusinessStep3Page = /** @class */ (function () {
    function BusinessStep3Page(navCtrl, navParams, api, splash, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.splash = splash;
        this.global = global;
        this.dataArray = {};
        this.businessForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            website: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            linkedin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            facebook: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            instagram: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    BusinessStep3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusinessStep3Page');
        this.dataArray = this.navParams.get('dataArray');
        console.log('------- Business Data -------', this.dataArray);
    };
    BusinessStep3Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BusinessStep3Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.businessForm.valid) {
            this.dataArray['website'] = data.website,
                this.dataArray['linkedin'] = data.linkedin,
                this.dataArray['facebook'] = data.facebook,
                this.dataArray['instagram'] = data.instagram,
                this.splash.presentLoading();
            this.api.registration(this.dataArray).subscribe(function (res) {
                if (res.flag == 0) {
                    _this.splash.toast(res.message);
                    // this.global.setUser(res.data)
                }
                else if (res.status == "true") {
                    _this.splash.dismiss();
                    _this.global.setUser(res.userid);
                    _this.splash.toast(res.message);
                    var formdata = new FormData();
                    formdata.append('user_id', res.userid);
                    _this.api.getAccountDetails(formdata).subscribe(function (res) {
                        console.log(res);
                        if (res.status == "true") {
                            _this.global.setUser(res.data.id);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */], { data: res.data });
                        }
                    });
                }
                else if (res.flag == 7) {
                    _this.splash.toast('Registration failed');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                }
            });
        }
        else {
            console.log('form errr');
            Object.keys(this.businessForm.controls).forEach(function (field) {
                var control = _this.businessForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    BusinessStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-business-step3',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-step3\business-step3.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n          <div class="logo-box">\n\n              <img src="assets/imgs/logo-1.jpg">\n\n          </div>\n\n\n\n          <form [formGroup]="businessForm">\n\n            <ion-list class="login-user-info">\n\n                \n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Website" ([ngModel])="website" formControlName="website"></ion-input>\n\n                </ion-item>\n\n                \n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="LinkedIn Profile Url" ([ngModel])="linkedin" formControlName="linkedin"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Facebook Profile Url" ([ngModel])="facebook" formControlName="facebook"></ion-input>\n\n                </ion-item>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Instagram Profile Url" ([ngModel])="instagram" formControlName="instagram"></ion-input>\n\n                </ion-item>\n\n\n\n            </ion-list>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button round center class="login-btn" (click)="submitDetails(businessForm.value)">Next</button>\n\n              </ion-col>\n\n            </ion-row>\n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-step3\business-step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__["a" /* GlobalServiceProvider */]])
    ], BusinessStep3Page);
    return BusinessStep3Page;
}());

//# sourceMappingURL=business-step3.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sign_up_step1_step1__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tabs_tabs__ = __webpack_require__(34);
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
 * Generated class for the OtpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var OtpPage = /** @class */ (function () {
    function OtpPage(navCtrl, navParams, api, splash, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.splash = splash;
        this.global = global;
        this.otpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            otp: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
        });
    }
    OtpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpPage');
        this.email = this.navParams.get('email');
        this.nonExistingUser = this.navParams.get('nonExistingUser');
        this.id = this.navParams.get('id');
        this.userData = this.navParams.get('data');
        this.serverOtp = this.navParams.get('otp');
        this.splash.toast(this.serverOtp);
        console.log('user Data ', this.userData);
        console.log('OTP ', this.serverOtp);
    };
    // public verifyOtp(data) {
    //   console.log('Registration Flow');
    //   if(this.otpForm.valid) {
    //     console.log('Entered otp', data.otp)
    //     if(this.serverOtp == data.otp) {
    //       console.log('OTP1', this.serverOtp, 'OTP2', data.otp);
    //       let formdata = new FormData();
    //       formdata.append('firstname', this.userData.firstName);
    //       formdata.append('lastname', this.userData.lastName);
    //       formdata.append('email', this.userData.email);
    //       formdata.append('mobile', this.userData.phone);
    //       formdata.append('gender', this.userData.gender);
    //       formdata.append('dob', this.userData.date_of_birth);
    //       this.api.registration(formdata).subscribe(res => {
    //         console.log(res)
    //         if(res.flag == 0) {
    //           this.splash.toast(res.data);
    //         }
    //         if(res.flag == 6) {
    //           this.splash.toast(res.message);
    //           let formdata = new FormData();
    //           formdata.append('user_id', res.user_id);
    //           this.api.getAccountDetails(formdata).subscribe(res => {
    //             console.log('-----');
    //             console.log(res);
    //             if(res) {  
    //               this.global.setUser(res.data)
    //               this.navCtrl.push(JobDetailsPage)
    //             }
    //           })
    //         }
    //         if(res.flag == 7) {
    //           this.splash.toast('Registration Failed');
    //         }
    //       });
    //     }
    //   }
    //   else {
    //     console.log('form errr');
    //     Object.keys(this.otpForm.controls).forEach(field => {
    //       const control = this.otpForm.get(field);
    //       control.markAsTouched({ onlySelf: true });
    //     })
    //   }
    // }
    //same as register flow
    OtpPage.prototype.verifyLoginOtp = function (data) {
        var _this = this;
        console.log('Login Flow');
        console.log('server otp', this.serverOtp, ' ', data.otp);
        if (this.otpForm.valid) {
            if (this.serverOtp == data.otp) {
                if (this.id == undefined) {
                    this.splash.toast('Otp verified successfully!');
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__sign_up_step1_step1__["a" /* Step1Page */], {
                        email: this.email,
                    });
                }
                else {
                    var formdata = new FormData();
                    console.log(this.id);
                    this.splash.toast('Otp verified successfully!');
                    formdata.append('user_id', this.id);
                    this.splash.presentLoading();
                    this.api.getAccountDetails(formdata).subscribe(function (res) {
                        console.log(res);
                        if (res.status == "true") {
                            _this.splash.dismiss();
                            _this.global.setUser(_this.id);
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__tabs_tabs__["a" /* TabsPage */], { data: res.data });
                        }
                        else {
                            _this.splash.dismiss();
                            _this.splash.toast('Failed to load data');
                        }
                    });
                }
            }
            else {
                this.splash.toast('Invalid Otp');
            }
        }
    };
    OtpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-otp',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\otp\otp.html"*/'<!--\n\n  Generated template for the OtpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>otp</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n\n\n  \n\n    <div  class="login-box-section">\n\n      <div class="login-box">\n\n          <div class="logo-box">\n\n\n\n              <img src="assets/imgs/logo-1.jpg">\n\n\n\n          </div>\n\n\n\n          <form [formGroup]="otpForm" (ngSubmit)="verifyLoginOtp(otpForm.value)">\n\n            <ion-list class="login-user-info">\n\n                <ion-item>\n\n                    <ion-label>\n\n\n\n                        <ion-icon item-left ios="ios-lock" md="md-lock"></ion-icon>\n\n\n\n                    </ion-label>\n\n                    <ion-input type="number" placeholder="Enter login OTP" [(ngModel)]="otp" formControlName="otp"></ion-input>\n\n                </ion-item>\n\n\n\n                <!-- <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left name="mail"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="password" placeholder="Username"></ion-input>\n\n                </ion-item> -->\n\n            </ion-list>\n\n\n\n\n\n\n\n          <button ion-button round center class="login-btn">Verify OTP</button>\n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n  <!-- <div class="login-box-section">\n\n    <div class="login-box">\n\n        <div class="logo-box">\n\n\n\n            <img src="assets/imgs/logo-1.jpg">\n\n\n\n        </div>\n\n\n\n        <form [formGroup]="otpForm" (ngSubmit)="verifyOtp(otpForm.value)">\n\n          <ion-list class="login-user-info">\n\n              <ion-item>\n\n                  <ion-label>\n\n\n\n                      <ion-icon item-left ios="ios-lock" md="md-lock"></ion-icon>\n\n\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Enter signup OTP" ([ngModel])="otp" formControlName="otp"></ion-input>\n\n              </ion-item>\n\n\n\n              <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left name="mail"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="password" placeholder="Username"></ion-input>\n\n              </ion-item> \n\n          </ion-list>\n\n\n\n\n\n\n\n            <button ion-button round center class="login-btn">OTP</button>\n\n        </form>\n\n        </div>\n\n    </div>  -->\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\otp\otp.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__["a" /* SplashProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__["a" /* GlobalServiceProvider */]])
    ], OtpPage);
    return OtpPage;
}());

//# sourceMappingURL=otp.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step3_step3__ = __webpack_require__(358);
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
 * Generated class for the Step2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var Step2Page = /** @class */ (function () {
    function Step2Page(navCtrl, navParams, api, validation, splash) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.validation = validation;
        this.splash = splash;
        this.dataArray = {};
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            city: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            state: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            country: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            present_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            permanent_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
    }
    Step2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step2Page');
        this.dataArray = this.navParams.get('dataArray');
        console.log('-----------Step1 data-------------', this.dataArray);
        this.countries = this.navParams.get('country');
        // this.api.getAllCountries().subscribe(res => {
        //   console.log(res);
        //   this.countries = res.data;
        // })
    };
    Step2Page.prototype.onSelectCountry = function (id) {
        var _this = this;
        var formdata = new FormData();
        formdata.append('country_id', id);
        this.splash.presentLoading();
        this.api.getStates(formdata).subscribe(function (res) {
            console.log('-------------------States-----------', res.data);
            _this.states = res.data;
            _this.splash.dismiss();
        });
    };
    Step2Page.prototype.onSelectState = function (id) {
        var _this = this;
        var formdata = new FormData();
        formdata.append('state_id', id);
        this.splash.presentLoading();
        this.api.getCities(formdata).subscribe(function (res) {
            console.log('--------------------Cities-------------', res.data);
            _this.cities = res.data;
            _this.splash.dismiss();
        });
    };
    Step2Page.prototype.onSelectCity = function (city) {
        console.log('--------------------Selected City-------------', city.id);
    };
    Step2Page.prototype.signUp = function (data) {
        var _this = this;
        if (this.signUpForm.valid) {
            // let formdata = {
            //   country: data.country,
            //   state: data.state,
            //   city: data.city,
            //   present_address: data.present_address,
            //   permanent_address: data.permanent_address,
            // }
            //console.log('--------------form data----------------- ',formdata)
            this.dataArray['country'] = data.country,
                this.dataArray['state'] = data.state,
                this.dataArray['city'] = data.city,
                this.dataArray['present_address'] = data.present_address,
                this.dataArray['permanent_address'] = data.permanent_address;
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__step3_step3__["a" /* Step3Page */], { dataArray: this.dataArray });
        }
        else {
            console.log('form errr');
            Object.keys(this.signUpForm.controls).forEach(function (field) {
                var control = _this.signUpForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    Step2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Step2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step2',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step2\step2.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n\n\n          <form [formGroup]="signUpForm">\n\n            <ion-list class="login-user-info">\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-select interface="popover" placeholder="--Select Country--"  formControlName="country" [(ngModel)] ="selectedCountry" (ionChange)="onSelectCountry($event)">\n\n                        <ion-option *ngFor="let country of countries" [value]="country.id">{{country.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.country" >\n\n                    <div *ngIf="signUpForm.get(\'country\').hasError(validation.type) && signUpForm.get(\'country\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-select interface="popover" placeholder="--Select State--"  formControlName="state" [(ngModel)] ="selectedState" (ionChange)="onSelectState($event)">\n\n                        <ion-option *ngFor="let state of states" [value]="state.id">{{state.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.state" >\n\n                    <div *ngIf="signUpForm.get(\'state\').hasError(validation.type) && signUpForm.get(\'state\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-select interface="popover" placeholder="--Select City--"  formControlName="city" [(ngModel)] ="selectedCity" (ionChange)="onSelectCity($event)">\n\n                        <ion-option *ngFor="let city of cities" [value]="city.id">{{city.name}}</ion-option>\n\n                    </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.city" >\n\n                    <div *ngIf="signUpForm.get(\'city\').hasError(validation.type) && signUpForm.get(\'city\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n                \n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="Present Address" ([ngModel])="present_address" formControlName="present_address"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.present_address" >\n\n                    <div *ngIf="signUpForm.get(\'present_address\').hasError(validation.type) && signUpForm.get(\'present_address\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="Permanent Address" ([ngModel])="permanent_address" formControlName="permanent_address"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.permanent_address" >\n\n                    <div *ngIf="signUpForm.get(\'permanent_address\').hasError(validation.type) && signUpForm.get(\'permanent_address\').touched">\n\n                      <div class="error-message">{{validation.message}}</div>\n\n                    </div>\n\n                </div>\n\n\n\n              </ion-list>\n\n              <ion-row>\n\n                <ion-col>\n\n                  <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <button ion-button round center class="login-btn" (click)="signUp(signUpForm.value)">Next</button>\n\n                </ion-col>\n\n              </ion-row>\n\n          \n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step2\step2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__["a" /* SplashProvider */]])
    ], Step2Page);
    return Step2Page;
}());

//# sourceMappingURL=step2.js.map

/***/ }),

/***/ 358:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__step4_step4__ = __webpack_require__(359);
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
 * Generated class for the Step3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var Step3Page = /** @class */ (function () {
    function Step3Page(navCtrl, navParams, validation, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validation = validation;
        this.api = api;
        this.dataArray = {};
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            date_of_birth: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            gender: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            religion: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            caste: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
    }
    Step3Page.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad Step3Page');
        this.dataArray = this.navParams.get('dataArray');
        console.log('==========Data Step2=========== ', this.dataArray);
        this.api.getLanguages().subscribe(function (res) {
            if (res.flag == 8) {
                _this.languages = res.data;
            }
        });
    };
    Step3Page.prototype.ageFromDateOfBirthday = function (birthdate) {
        if (__WEBPACK_IMPORTED_MODULE_3_moment__().diff(birthdate, 'years') < 18) {
            this.invalidAgeMsg = 'Only 18+ are allowed';
        }
        else
            this.invalidAgeMsg = null;
        return __WEBPACK_IMPORTED_MODULE_3_moment__().diff(birthdate, 'years');
    };
    Step3Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Step3Page.prototype.signUp = function (data) {
        var _this = this;
        if (this.signUpForm.valid) {
            //this.dataArray.push(data)
            this.dataArray['dob'] = data.date_of_birth,
                this.dataArray['age'] = data.age,
                this.dataArray['gender'] = data.gender,
                this.dataArray['religion'] = data.religion,
                this.dataArray['caste'] = data.caste,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__step4_step4__["a" /* Step4Page */], { dataArray: this.dataArray, language: this.languages });
        }
        else {
            console.log('form errr');
            Object.keys(this.signUpForm.controls).forEach(function (field) {
                var control = _this.signUpForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    Step3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step3',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step3\step3.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n\n\n          <form [formGroup]="signUpForm">\n\n            <ion-list class="login-user-info">\n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                    <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                  onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                  formControlName="date_of_birth" displayFormat="DD-MM-YYYY"></ion-input>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                <div *ngIf="signUpForm.get(\'date_of_birth\').hasError(validation.type) && signUpForm.get(\'date_of_birth\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>  \n\n\n\n              <ion-item *ngIf="birthdate">\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="text" placeholder="Age" formControlName="age"\n\n                  value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n              </ion-item>\n\n              <div *ngIf="invalidAgeMsg != \'undefined\'" >\n\n                <div class="error-message">{{invalidAgeMsg}}</div>\n\n              </div>\n\n\n\n              <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Gender" ([ngModel])="gender" formControlName="gender">\n\n                      <ion-option value="male">Male</ion-option>\n\n                      <ion-option value="female">Female</ion-option>\n\n\n\n                  </ion-select>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.gender" >\n\n                <div *ngIf="signUpForm.get(\'gender\').hasError(validation.type) && signUpForm.get(\'gender\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div> \n\n\n\n              <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="religion" ([ngModel])="religion" formControlName="religion">\n\n                      <ion-option value="Hindu">Hindu</ion-option>\n\n                      <ion-option value="Muslim">Muslim</ion-option>\n\n                      <ion-option value="Christian">Christian</ion-option>\n\n                      <ion-option value="Buddhist">Buddhist</ion-option>\n\n                      <ion-option value="Jain">Jain</ion-option>\n\n                      <ion-option value="Sikh">Sikh</ion-option>\n\n                  </ion-select>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.religion" >\n\n                <div *ngIf="signUpForm.get(\'religion\').hasError(validation.type) && signUpForm.get(\'religion\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div> \n\n              \n\n              <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="caste" ([ngModel])="caste" formControlName="caste"></ion-input>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.caste" >\n\n                <div *ngIf="signUpForm.get(\'caste\').hasError(validation.type) && signUpForm.get(\'caste\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div> \n\n\n\n            </ion-list>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button round center class="login-btn" (click)="signUp(signUpForm.value)">Next</button>\n\n              </ion-col>\n\n            </ion-row>\n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step3\step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_5__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */]])
    ], Step3Page);
    return Step3Page;
}());

//# sourceMappingURL=step3.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Step4Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__business_details_business_step1_business_step1__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__divorse_details_divorced_step1_divorced_step1__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__job_details_job_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__marriage_details_marriage_step1_marriage_step1__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tabs_tabs__ = __webpack_require__(34);
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
 * Generated class for the Step4Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var Step4Page = /** @class */ (function () {
    function Step4Page(navCtrl, navParams, api, alertCtrl, validation, splash, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.alertCtrl = alertCtrl;
        this.validation = validation;
        this.splash = splash;
        this.global = global;
        this.dataArray = {};
        this.listHobby = [];
        this.selecteHobby = '';
        this.signUpForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            langKnown: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            education: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            annual_income: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            hobbies: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            marital_status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            profession: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
        console.log(this.validation_messages);
    }
    Step4Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad Step4Page');
        this.dataArray = this.navParams.get('dataArray'),
            this.languages = this.navParams.get('language');
        console.log('----------Page3----------', this.dataArray);
        console.log('----------language----------', this.languages);
    };
    Step4Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    Step4Page.prototype.signUp = function (data) {
        var _this = this;
        //  console.log('selected HOBBIES ARE----',this.listHobby);
        if (this.signUpForm.value) {
            // let formdata = new FormData();
            // formdata.append('email', data.email);
            // this.api.generateOtp(formdata).subscribe(res => {
            //   console.log(res)
            //   if (res.flag == 3) {
            //    // this.splash.toast(res.data);
            //    this.navCtrl.push(MarriageStep1Page, {data: data, otp: res.otp});
            //   }
            // });
            this.dataArray['languages'] = data.langKnown,
                this.dataArray['education'] = data.education,
                this.dataArray['hobbies'] = this.listHobby,
                this.dataArray['annual_income'] = data.annual_income,
                this.dataArray['marital_status'] = data.marital_status,
                this.dataArray['profession'] = data.profession,
                console.log('--------------------data till--------------- ', this.dataArray);
            if (data.marital_status == 'Unmarried') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_11__marriage_details_marriage_step1_marriage_step1__["a" /* MarriageStep1Page */], {
                    dataArray: this.dataArray
                });
            }
            else if (data.marital_status == 'Married' || data.marital_status == 'Never_Married') {
                console.log('----------------Married--------------');
                if (data.profession == 'Job') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__job_details_job_details__["a" /* JobDetailsPage */], {
                        dataArray: this.dataArray,
                    });
                }
                else if (data.profession == 'Unemployed') {
                    this.splash.presentLoading();
                    this.api.registration(this.dataArray).subscribe(function (res) {
                        if (res.flag == 0) {
                            _this.splash.toast(res.message);
                            // this.global.setUser(res.data)
                        }
                        else if (res.status == "true") {
                            _this.splash.dismiss();
                            _this.global.setUser(res.userid);
                            _this.splash.toast(res.message);
                            var formdata = new FormData();
                            formdata.append('user_id', res.userid);
                            _this.api.getAccountDetails(formdata).subscribe(function (res) {
                                console.log(res);
                                if (res.status == "true") {
                                    _this.global.setUser(res.data.id);
                                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_12__tabs_tabs__["a" /* TabsPage */], { data: res.data });
                                }
                            });
                        }
                        else if (res.flag == 7) {
                            _this.splash.toast('Registration failed');
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__login_login__["a" /* LoginPage */]);
                        }
                    });
                }
                else if (data.profession == 'Business') {
                    this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__business_details_business_step1_business_step1__["a" /* BusinessStep1Page */], {
                        dataArray: this.dataArray
                    });
                }
            }
            else if (data.marital_status == 'Divorced') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__divorse_details_divorced_step1_divorced_step1__["a" /* DivorcedStep1Page */], {
                    dataArray: this.dataArray
                });
            }
        }
        else {
            console.log('form errr');
            Object.keys(this.signUpForm.controls).forEach(function (field) {
                var control = _this.signUpForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    Step4Page.prototype.addHobby = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Hobby',
            inputs: [
                {
                    name: 'hobby',
                    placeholder: 'Enter Hobby',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //   console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add TO List',
                    handler: function (data) {
                        if (!data) {
                            console.log('we have data', data.hobby);
                        }
                        else {
                            // invalid login
                            console.log('add hobby', data.hobby);
                            _this.selecteHobby = data.hobby;
                            _this.listHobby.push(_this.selecteHobby);
                            return true;
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    Step4Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-step4',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step4\step4.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n\n\n          <form [formGroup]="signUpForm">\n\n            <ion-list class="login-user-info">\n\n              <ion-item>\n\n                <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-select [(ngModel)]="selecteLang" formControlName="langKnown" placeholder="Select Language"  multiple="true">\n\n                  <span *ngIf=\'languages\'>\n\n                    <ion-option *ngFor="let lang of languages" [value]="lang.id">{{lang.lang_name}}</ion-option>\n\n                  </span>\n\n                </ion-select>\n\n                  <!-- <button item-end ion-button clear (click)="addLanguage()"><ion-icon name="add"></ion-icon></button>  -->\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.langKnown" >\n\n                <div *ngIf="signUpForm.get(\'langKnown\').hasError(validation.type) && signUpForm.get(\'langKnown\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-select interface="popover" placeholder="education" ([ngModel])="education" formControlName="education">\n\n                    <ion-option value="Masters of Arts">M.A</ion-option>\n\n                    <ion-option value="Masters of Science">M.Sc</ion-option>\n\n                    <ion-option value="Masters of Commerce">M.Com</ion-option>\n\n                    <ion-option value="Bachelor of Arts">B.A</ion-option>\n\n                    <ion-option value="Bachelor of Science">B.Sc</ion-option>\n\n                    <ion-option value="Bachelor of Commerce">B.Com</ion-option>\n\n                    <ion-option value="B.Sc Agri">B.Sc Agri</ion-option>\n\n                    <ion-option value="B.Tech">B.Tech</ion-option>\n\n                    <ion-option value="M.Tech">M.Tech</ion-option>\n\n                    <ion-option value="B.Engg">B.E</ion-option>\n\n                    <ion-option value="I.T.I">I.T.I</ion-option>\n\n                    <ion-option value="M.Engg">M.E</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.education" >\n\n                <div *ngIf="signUpForm.get(\'education\').hasError(validation.type) && signUpForm.get(\'education\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div> \n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-select interface="popover" placeholder="Annual Income" ([ngModel])="annual_income" formControlName="annual_income">\n\n                    <ion-option value="lessThanEightLac">Less than 8 lac</ion-option>\n\n                    <ion-option value="8-10lac">8 to 10 lac</ion-option>\n\n                    <ion-option value="10-12lac">10 to 12 lac</ion-option>\n\n                    <ion-option value="moreThan12Lac">12 and above</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.annual_income" >\n\n                <div *ngIf="signUpForm.get(\'annual_income\').hasError(validation.type) && signUpForm.get(\'annual_income\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div> \n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="text" placeholder="Add Hobby"\n\n                value="{{listHobby}}" multiple="true" readonly\n\n                formControlName="hobbies"></ion-input>\n\n               <!-- <ion-select [(ngModel)]="SelecteHobby" formControlName="hobbies" placeholder="Select Hobby"  multiple="true">\n\n                  <ion-option  *ngFor="let hobby of listHobby">{{hobby}}</ion-option>\n\n                  </ion-select>\n\n                  You Selected = {{SelecteHobby}}-->\n\n                  <button item-end clear ion-button (click)="addHobby()"><ion-icon name="add"></ion-icon></button> \n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.hobbies" >\n\n                <div *ngIf="signUpForm.get(\'hobbies\').hasError(validation.type) && signUpForm.get(\'hobbies\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-select interface="popover" placeholder="Marital Status" ([ngModel])="marital_status" formControlName="marital_status">\n\n                  <ion-option value="Never_Married">Never Married</ion-option>  \n\n                  <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced or widowed</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.marital_status" >\n\n                <div *ngIf="signUpForm.get(\'marital_status\').hasError(validation.type) && signUpForm.get(\'marital_status\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n\n\n              <ion-item>\n\n                <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-select interface="popover" placeholder="Profession" ([ngModel])="profession" formControlName="profession">\n\n                    <ion-option value="Job">Job</ion-option>\n\n                    <ion-option value="Unemployed">Unemployed</ion-option>\n\n                    <ion-option value="Business">Business</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.profession" >\n\n                <div *ngIf="signUpForm.get(\'profession\').hasError(validation.type) && signUpForm.get(\'profession\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n\n\n            </ion-list>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button round center class="login-btn" (click)="signUp(signUpForm.value)">Next</button>\n\n              </ion-col>\n\n            </ion-row>\n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\step4\step4.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__["a" /* SplashProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__["a" /* GlobalServiceProvider */]])
    ], Step4Page);
    return Step4Page;
}());

//# sourceMappingURL=step4.js.map

/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivorcedStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__divorced_step2_divorced_step2__ = __webpack_require__(361);
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
 * Generated class for the DivorcedStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var DivorcedStep1Page = /** @class */ (function () {
    function DivorcedStep1Page(navCtrl, navParams, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validation = validation;
        this.dataArray = {};
        this.divorcedForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            otherpics: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            fatherName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            motherName: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            fatherMobileNo: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            fatherOccupation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            motherOccupation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
    }
    DivorcedStep1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DivorcedStep1Page');
        this.dataArray = this.navParams.get('dataArray');
    };
    DivorcedStep1Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DivorcedStep1Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.divorcedForm.valid) {
            this.dataArray['otherpics'] = data.otherpics,
                this.dataArray['fatherName'] = data.fatherName,
                this.dataArray['motherName'] = data.motherName,
                this.dataArray['fatherMobileNo'] = data.fatherMobileNo,
                this.dataArray['fatherOccupation'] = data.fatherOccupation,
                this.dataArray['motherOccupation'] = data.motherOccupation,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__divorced_step2_divorced_step2__["a" /* DivorcedStep2Page */], {
                    dataArray: this.dataArray,
                });
        }
        else {
            console.log('form errr');
            Object.keys(this.divorcedForm.controls).forEach(function (field) {
                var control = _this.divorcedForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    DivorcedStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-divorced-step1',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorced-step1\divorced-step1.html"*/'<!--\n\n  Generated template for the MarriedRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-content padding>\n\n  <div class="login-box-section">\n\n    <div class="login-box">\n\n    <div class="logo-box">\n\n      <img src="assets/imgs/logo-1.jpg">\n\n    </div>\n\n\n\n    <form [formGroup]="divorcedForm">\n\n      <ion-list class="login-user-info">\n\n    \n\n        <ion-item>\n\n          <ion-label>\n\n              <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="text"  placeholder="upload Other pic" formControlName="otherpics"></ion-input>\n\n        </ion-item>\n\n\n\n        <ion-item>\n\n            <ion-label>\n\n              <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="text"  placeholder="Fatehr Name" formControlName="fatherName"></ion-input>\n\n        </ion-item>\n\n        <div *ngFor="let validation of validation_messages.name" >\n\n          <div *ngIf="divorcedForm.get(\'fatherName\').hasError(validation.type) && divorcedForm.get(\'fatherName\').touched">\n\n            <div class="error-message">{{validation.message}}</div>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="text"  placeholder="Mother Name" formControlName="motherName"></ion-input>\n\n      </ion-item>\n\n      <div *ngFor="let validation of validation_messages.name" >\n\n        <div *ngIf="divorcedForm.get(\'motherName\').hasError(validation.type) && divorcedForm.get(\'motherName\').touched">\n\n          <div class="error-message">{{validation.message}}</div>\n\n        </div>\n\n      </div>\n\n\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n          </ion-label>\n\n          <ion-input type="number"  placeholder="Father Mobile No" formControlName="fatherMobileNo"></ion-input>\n\n        </ion-item>\n\n        <div *ngFor="let validation of validation_messages.mobile" >\n\n          <div *ngIf="divorcedForm.get(\'fatherMobileNo\').hasError(validation.type) && divorcedForm.get(\'fatherMobileNo\').touched">\n\n            <div class="error-message">{{validation.message}}</div>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n          </ion-label>\n\n          <ion-select interface="popover" placeholder="Father occupation" formControlName="fatherOccupation">\n\n            <ion-option value="PE">Private emloye</ion-option>\n\n            <ion-option value="Bu">Bussiness</ion-option>\n\n            <ion-option value="O">Other</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngFor="let validation of validation_messages.fatherOccupation" >\n\n          <div *ngIf="divorcedForm.get(\'fatherOccupation\').hasError(validation.type) && divorcedForm.get(\'fatherOccupation\').touched">\n\n            <div class="error-message">{{validation.message}}</div>\n\n          </div>\n\n        </div>\n\n\n\n        <ion-item>\n\n          <ion-label>\n\n            <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n          </ion-label>\n\n          <ion-select interface="popover" placeholder="Mother occupation" formControlName="motherOccupation">\n\n            <ion-option value="private_job">Private Job</ion-option>\n\n            <ion-option value="government_job">Government Job</ion-option>\n\n            <ion-option value="business">Business</ion-option>\n\n            <ion-option value="housewife">House wife</ion-option>\n\n            <ion-option value="other">other</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n        <div *ngFor="let validation of validation_messages.fatherOccupation" >\n\n          <div *ngIf="divorcedForm.get(\'motherOccupation\').hasError(validation.type) && divorcedForm.get(\'motherOccupation\').touched">\n\n            <div class="error-message">{{validation.message}}</div>\n\n          </div>\n\n        </div>\n\n\n\n      </ion-list> \n\n      <ion-row>\n\n        <ion-col>\n\n          <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button round center class="login-btn" (click)="submitDetails(divorcedForm.value)">Next</button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </form>\n\n  </div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorced-step1\divorced-step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], DivorcedStep1Page);
    return DivorcedStep1Page;
}());

//# sourceMappingURL=divorced-step1.js.map

/***/ }),

/***/ 361:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivorcedStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brothers_brothers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sisters_sisters__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__divorced_step3_divorced_step3__ = __webpack_require__(362);
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
 * Generated class for the DivorcedStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var DivorcedStep2Page = /** @class */ (function () {
    function DivorcedStep2Page(navCtrl, navParams, modalCtrl, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.validation = validation;
        this.dataArray = {};
        this.brothersArray = [];
        this.sistesArray = [];
        this.divorcedForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            kuldevi: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            gotra: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            manglik: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            noOfBrothers: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            noOfSisters: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
    }
    DivorcedStep2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DivorcedStep2Page');
        this.dataArray = this.navParams.get('dataArray');
    };
    DivorcedStep2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DivorcedStep2Page.prototype.haveBrother = function (value) {
        var _this = this;
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__brothers_brothers__["a" /* BrothersPage */], { value: value });
        this.modal.onDidDismiss(function (data) {
            _this.brothersArray = data;
            console.log('---------------Data from modal------------ ', data);
        });
        this.modal.present();
    };
    DivorcedStep2Page.prototype.haveSister = function (value) {
        var _this = this;
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sisters_sisters__["a" /* SistersPage */], { value: value });
        this.modal.onDidDismiss(function (data) {
            _this.sistesArray = data;
            console.log('---------------Data from modal------------ ', data);
        });
        this.modal.present();
    };
    DivorcedStep2Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.divorcedForm.valid) {
            this.dataArray['kuldevi'] = data.kuldevi,
                this.dataArray['gotra'] = data.gotra,
                this.dataArray['manglik'] = data.manglik,
                this.dataArray['brothers'] = this.brothersArray,
                this.dataArray['sisters'] = this.sistesArray,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__divorced_step3_divorced_step3__["a" /* DivorcedStep3Page */], {
                    dataArray: this.dataArray
                });
        }
        else {
            console.log('form errr');
            Object.keys(this.divorcedForm.controls).forEach(function (field) {
                var control = _this.divorcedForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    DivorcedStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-divorced-step2',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorced-step2\divorced-step2.html"*/'<!--\n\n  Generated template for the MarriedRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <div class="login-box-section">\n\n    <div class="login-box">\n\n		<div class="logo-box">\n\n			<img src="assets/imgs/logo-1.jpg">\n\n		</div>\n\n\n\n		<form [formGroup]="divorcedForm">\n\n			<ion-list class="login-user-info">\n\n\n\n				<ion-item>\n\n					<ion-label>\n\n						<ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n					</ion-label>\n\n					<ion-input type="text"  placeholder="Kul Devi" formControlName="kuldevi"></ion-input>\n\n				</ion-item>\n\n				<div *ngFor="let validation of validation_messages.commonmessage" >\n\n					<div *ngIf="divorcedForm.get(\'kuldevi\').hasError(validation.type) && divorcedForm.get(\'kuldevi\').touched">\n\n					  <div class="error-message">{{validation.message}}</div>\n\n					</div>\n\n				  </div>\n\n\n\n				<ion-item>\n\n					<ion-label>\n\n						<ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n					</ion-label>\n\n					<ion-input type="text"  placeholder="Gotra" formControlName="gotra"></ion-input>\n\n				</ion-item>\n\n				<div *ngFor="let validation of validation_messages.commonmessage" >\n\n					<div *ngIf="divorcedForm.get(\'gotra\').hasError(validation.type) && divorcedForm.get(\'gotra\').touched">\n\n					  <div class="error-message">{{validation.message}}</div>\n\n					</div>\n\n				  </div>\n\n\n\n				<div formControlName="manglik" radio-group>\n\n					<p>Manglik</p>\n\n					<ion-row>\n\n						<ion-col>\n\n						<span>YES</span>\n\n						<ion-radio value="Y">Yes</ion-radio>\n\n						</ion-col>\n\n						<ion-col>\n\n						<ion-col>\n\n							<span>No</span>\n\n							<ion-radio value="N">No</ion-radio>\n\n						</ion-col>\n\n						</ion-col>\n\n					</ion-row>           \n\n				</div>\n\n				<div *ngFor="let validation of validation_messages.commonmessage" >\n\n					<div *ngIf="divorcedForm.get(\'manglik\').hasError(validation.type) && divorcedForm.get(\'manglik\').touched">\n\n					  <div class="error-message">{{validation.message}}</div>\n\n					</div>\n\n				  </div>\n\n\n\n				<ion-item>\n\n					<ion-label>\n\n						<ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n					</ion-label>\n\n					<ion-select interface="popover" placeholder="No of Brothers" formControlName="noOfBrothers" (ionChange)="haveBrother($event)">\n\n						<ion-option value="0">0</ion-option>\n\n						<ion-option value="1">1</ion-option>\n\n						<ion-option value="2">2</ion-option>\n\n						<ion-option value="3">3</ion-option>\n\n						<ion-option value="4">4</ion-option>\n\n						<ion-option value="5">5</ion-option>\n\n					</ion-select>\n\n				</ion-item>\n\n				<div *ngFor="let validation of validation_messages.commonmessage" >\n\n					<div *ngIf="divorcedForm.get(\'noOfBrothers\').hasError(validation.type) && divorcedForm.get(\'noOfBrothers\').touched">\n\n					  <div class="error-message">{{validation.message}}</div>\n\n					</div>\n\n				  </div>\n\n\n\n				<ion-item>\n\n					<ion-label>\n\n						<ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n					</ion-label>\n\n					<ion-select interface="popover" placeholder="No of Sister" formControlName="noOfSisters" (ionChange)="haveSister($event)">\n\n						<ion-option value="0">0</ion-option>\n\n						<ion-option value="1">1</ion-option>\n\n						<ion-option value="2">2</ion-option>\n\n						<ion-option value="3">3</ion-option>\n\n						<ion-option value="4">4</ion-option>\n\n						<ion-option value="5">5</ion-option>\n\n					</ion-select>\n\n				</ion-item>\n\n				<div *ngFor="let validation of validation_messages.commonmessage" >\n\n					<div *ngIf="divorcedForm.get(\'noOfSisters\').hasError(validation.type) && divorcedForm.get(\'noOfSisters\').touched">\n\n					  <div class="error-message">{{validation.message}}</div>\n\n					</div>\n\n				</div>\n\n\n\n			</ion-list> \n\n			<ion-row>\n\n				<ion-col>\n\n				<button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n				</ion-col>\n\n				<ion-col>\n\n				<button ion-button round center class="login-btn" (click)="submitDetails(divorcedForm.value)">Next</button>\n\n				</ion-col>\n\n			</ion-row>\n\n			</form>\n\n		</div>\n\n	</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorced-step2\divorced-step2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], DivorcedStep2Page);
    return DivorcedStep2Page;
}());

//# sourceMappingURL=divorced-step2.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivorcedStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__business_details_business_step1_business_step1__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__childrens_childrens__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_details_job_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(34);
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
 * Generated class for the DivorcedStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var DivorcedStep3Page = /** @class */ (function () {
    function DivorcedStep3Page(navCtrl, navParams, modalCtrl, api, global, splash) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.api = api;
        this.global = global;
        this.splash = splash;
        this.dataArray = {};
        this.childrensArray = [];
        this.divorcedForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            height: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            weight: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            skin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            about: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            noOfChildrens: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]()
        });
    }
    DivorcedStep3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DivorcedStep3Page');
        this.dataArray = this.navParams.get('dataArray');
        console.log('---------------Divorced form 3 --------', this.dataArray);
    };
    DivorcedStep3Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    DivorcedStep3Page.prototype.haveChildrens = function (value) {
        var _this = this;
        if (value > 0) {
            this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_7__childrens_childrens__["a" /* ChildrensPage */], { value: value });
            this.modal.onDidDismiss(function (data) {
                _this.childrensArray = data;
                console.log('---------------Data from modal------------ ', data);
            });
            this.modal.present();
        }
        else {
            //no action
        }
    };
    DivorcedStep3Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.divorcedForm.valid) {
            this.dataArray['height'] = data.height,
                this.dataArray['weight'] = data.weight,
                this.dataArray['skin'] = data.skin,
                this.dataArray['about'] = data.about,
                this.dataArray['totalChildrens'] = data.noOfChildrens,
                this.dataArray['childrens'] = this.childrensArray;
            if (this.dataArray['profession'] == 'Job') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__job_details_job_details__["a" /* JobDetailsPage */], { dataArray: this.dataArray });
            }
            else if (this.dataArray['profession'] == 'Business') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__business_details_business_step1_business_step1__["a" /* BusinessStep1Page */], { dataArray: this.dataArray });
            }
            else if (this.dataArray['profession'] == 'Unemployed') {
                this.splash.presentLoading();
                this.api.registration(this.dataArray).subscribe(function (res) {
                    if (res.flag == 0) {
                        _this.splash.toast(res.message);
                        // this.global.setUser(res.data)
                    }
                    else if (res.status == "true") {
                        _this.splash.dismiss();
                        _this.global.setUser(res.userid);
                        _this.splash.toast(res.message);
                        var formdata = new FormData();
                        formdata.append('user_id', res.userid);
                        _this.api.getAccountDetails(formdata).subscribe(function (res) {
                            console.log(res);
                            if (res.status == "true") {
                                _this.global.setUser(res.data.id);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */], { data: res.data });
                            }
                        });
                    }
                    else if (res.flag == 7) {
                        _this.splash.toast('Registration failed');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                    }
                });
            }
        }
        else {
            console.log('form errr');
            Object.keys(this.divorcedForm.controls).forEach(function (field) {
                var control = _this.divorcedForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    DivorcedStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-divorced-step3',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorced-step3\divorced-step3.html"*/'<!--\n\n  Generated template for the MarriedRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <div class="login-box-section">\n\n    <div class="login-box">\n\n       <div class="logo-box">\n\n            <img src="assets/imgs/logo-1.jpg">\n\n        </div>\n\n\n\n        <form [formGroup]="divorcedForm">\n\n          <ion-list class="login-user-info">		  \n\n  \n\n			<ion-item>\n\n				<ion-label>\n\n					<ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n				</ion-label>\n\n				<ion-input type="number"  placeholder="Height in cm" formControlName="height"></ion-input>\n\n			</ion-item>\n\n			<div *ngFor="let validation of validation_messages.commonmessage" >\n\n				<div *ngIf="divorcedForm.get(\'height\').hasError(validation.type) && divorcedForm.get(\'height\').touched">\n\n				  <div class="error-message">{{validation.message}}</div>\n\n				</div>\n\n			</div>\n\n		\n\n			<ion-item>\n\n				<ion-label>\n\n					<ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n				</ion-label>\n\n				<ion-input type="number"  placeholder="Weight in kg" formControlName="weight"></ion-input>\n\n			</ion-item>\n\n			<div *ngFor="let validation of validation_messages.commonmessage" >\n\n				<div *ngIf="divorcedForm.get(\'weight\').hasError(validation.type) && divorcedForm.get(\'weight\').touched">\n\n				  <div class="error-message">{{validation.message}}</div>\n\n				</div>\n\n			</div>\n\n		  \n\n			<ion-item>\n\n				<ion-label>\n\n					<ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n				</ion-label>\n\n				<ion-select interface="popover" placeholder="Skin Tone" formControlName="skin">\n\n					<ion-option value="whiteskin">white</ion-option>\n\n					<ion-option value="avgskin">Average </ion-option>\n\n					<ion-option value="darkskin">Dark</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<div *ngFor="let validation of validation_messages.commonmessage" >\n\n				<div *ngIf="divorcedForm.get(\'skin\').hasError(validation.type) && divorcedForm.get(\'skin\').touched">\n\n				  <div class="error-message">{{validation.message}}</div>\n\n				</div>\n\n			</div>\n\n	  \n\n			<ion-item>\n\n				<ion-label>\n\n					<ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n				</ion-label>\n\n				<ion-textarea type="text"  placeholder="About" formControlName="about"></ion-textarea>\n\n			</ion-item>\n\n			<div *ngFor="let validation of validation_messages.commonmessage" >\n\n				<div *ngIf="divorcedForm.get(\'about\').hasError(validation.type) && divorcedForm.get(\'about\').touched">\n\n				  <div class="error-message">{{validation.message}}</div>\n\n				</div>\n\n			</div>\n\n\n\n			<ion-item>\n\n				<ion-label>\n\n					<ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n				</ion-label>\n\n				<ion-select interface="popover" placeholder="Select No of Childrens" formControlName="noOfChildrens" (ionChange)="haveChildrens($event)">\n\n					<ion-option value="0">0</ion-option>\n\n					<ion-option value="1">1</ion-option>\n\n					<ion-option value="2">2</ion-option>\n\n					<ion-option value="3">3</ion-option>\n\n					<ion-option value="4">4</ion-option>\n\n					<ion-option value="5">5</ion-option>\n\n				</ion-select>\n\n			</ion-item>\n\n			<div *ngFor="let validation of validation_messages.commonmessage" >\n\n				<div *ngIf="divorcedForm.get(\'noOfChildrens\').hasError(validation.type) && divorcedForm.get(\'noOfChildrens\').touched">\n\n				  <div class="error-message">{{validation.message}}</div>\n\n				</div>\n\n			</div>\n\n		\n\n\n\n      	</ion-list> \n\n		<ion-row>\n\n			<ion-col>\n\n			<button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n			</ion-col>\n\n			<ion-col>\n\n			<button ion-button round center class="login-btn" (click)="submitDetails(divorcedForm.value)">Next</button>\n\n			</ion-col>\n\n		</ion-row>\n\n    </form>\n\n</div>\n\n</div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorced-step3\divorced-step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__["a" /* GlobalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__["a" /* SplashProvider */]])
    ], DivorcedStep3Page);
    return DivorcedStep3Page;
}());

//# sourceMappingURL=divorced-step3.js.map

/***/ }),

/***/ 363:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChildrensPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_validation_message_validation_message__ = __webpack_require__(14);
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
 * Generated class for the ChildrensPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var ChildrensPage = /** @class */ (function () {
    function ChildrensPage(navCtrl, navParams, viewCtrl, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.validation = validation;
        this.childrensArray = [];
        this.childrensForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            name: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            dob: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            age: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            marital_status: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            mobile: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]),
        });
        this.validation_messages = this.validation.validationMessage();
    }
    ChildrensPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ChildrensPage');
        this.noOfChildrens = this.navParams.get('value');
    };
    ChildrensPage.prototype.ageFromDateOfBirthday = function (birthdate) {
        if (__WEBPACK_IMPORTED_MODULE_3_moment___default()().diff(birthdate, 'years') < 18) {
            this.invalidAgeMsg = 'You are not elligible';
        }
        return __WEBPACK_IMPORTED_MODULE_3_moment___default()().diff(birthdate, 'years');
    };
    ChildrensPage.prototype.next = function (data) {
        var _this = this;
        if (this.childrensForm.valid) {
            this.childrensArray.push(data);
        }
        else {
            console.log('form errr');
            Object.keys(this.childrensForm.controls).forEach(function (field) {
                var control = _this.childrensForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
        this.slides.slideNext();
    };
    ChildrensPage.prototype.prev = function () {
        this.slides.slidePrev();
    };
    ChildrensPage.prototype.close = function (data) {
        var _this = this;
        if (this.childrensForm.valid) {
            this.childrensArray.push(data);
        }
        else {
            console.log('form errr');
            Object.keys(this.childrensForm.controls).forEach(function (field) {
                var control = _this.childrensForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
        console.log('-------------Data-------------', this.childrensArray);
        this.viewCtrl.dismiss(this.childrensArray);
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('slides'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* Slides */])
    ], ChildrensPage.prototype, "slides", void 0);
    ChildrensPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-childrens',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\childrens\childrens.html"*/'<!--\n\n  Generated template for the BrothersPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <ion-slides #slides>\n\n    <ion-slide style="background-color: green">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="childrensForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter childrens Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="childrensForm.get(\'name\').hasError(validation.type) && childrensForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="childrensForm.get(\'dob\').hasError(validation.type) && childrensForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="childrensForm.get(\'marital_status\').hasError(validation.type) && childrensForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="childrensForm.get(\'mobile\').hasError(validation.type) && childrensForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfChildrens > 1; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(childrensForm.value)">Save & Next</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(childrensForm.value)">save & continue</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n        </div>\n\n        \n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color: blue">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="childrensForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter childrens Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="childrensForm.get(\'name\').hasError(validation.type) && childrensForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="childrensForm.get(\'dob\').hasError(validation.type) && childrensForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="childrensForm.get(\'marital_status\').hasError(validation.type) && childrensForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="childrensForm.get(\'mobile\').hasError(validation.type) && childrensForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfChildrens > 2; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(childrensForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(childrensForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n  \n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="childrensForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter childrens Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="childrensForm.get(\'name\').hasError(validation.type) && childrensForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="childrensForm.get(\'dob\').hasError(validation.type) && childrensForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="childrensForm.get(\'marital_status\').hasError(validation.type) && childrensForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="childrensForm.get(\'mobile\').hasError(validation.type) && childrensForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfChildrens > 3; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(childrensForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(childrensForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="childrensForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter childrens Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="childrensForm.get(\'name\').hasError(validation.type) && childrensForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="childrensForm.get(\'dob\').hasError(validation.type) && childrensForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="childrensForm.get(\'marital_status\').hasError(validation.type) && childrensForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="childrensForm.get(\'mobile\').hasError(validation.type) && childrensForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfChildrens > 4; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="next(childrensForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(childrensForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n      \n\n    </ion-slide>\n\n\n\n    <ion-slide style="background-color: red">\n\n      <div class="login-box-section">\n\n        <div class="login-box">\n\n            <form [formGroup]="childrensForm">\n\n              <ion-list class="login-user-info">\n\n        \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text"  placeholder="Enter childrens Name" formControlName="name" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.name" >\n\n                  <div *ngIf="childrensForm.get(\'name\').hasError(validation.type) && childrensForm.get(\'name\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-calendar" md="md-calendar"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder=" Select Date of Birth" class="textbox-n" \n\n                    onfocus="(this.type=\'date\')"  [(ngModel)]="birthdate" id="date"\n\n                    formControlName="dob" displayFormat="DD-MM-YYYY"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.date_of_birth" >\n\n                  <div *ngIf="childrensForm.get(\'dob\').hasError(validation.type) && childrensForm.get(\'dob\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n  \n\n                <ion-item *ngIf="birthdate">\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Age" formControlName="age"\n\n                    value="{{ageFromDateOfBirthday(birthdate)}}" readonly></ion-input>\n\n                </ion-item>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Marital Status" formControlName="marital_status">\n\n                    <ion-option value="Married">Married</ion-option>\n\n                    <ion-option value="Unmarried">Unmarried</ion-option>\n\n                    <ion-option value="Divorced">Divorced</ion-option>\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="childrensForm.get(\'marital_status\').hasError(validation.type) && childrensForm.get(\'marital_status\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n    \n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile Number" formControlName="mobile" required></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="childrensForm.get(\'mobile\').hasError(validation.type) && childrensForm.get(\'mobile\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n                \n\n              </ion-list>\n\n              <!-- <button ion-button round center class="login-btn" type="submit">Add</button> -->\n\n              <span *ngIf="noOfChildrens > 5; else elseBlock">\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(childrensForm.value)">Save & Next</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </span>\n\n              <ng-template #elseBlock>\n\n                <button type="submit" float-right ion-button color="primary" class="btnNext" (click)="close(childrensForm.value)">save & continue</button>\n\n                <button type="submit" float-left ion-button  color="primary" class="btnPrev" (click)="prev()">Prev</button>\n\n              </ng-template>\n\n            </form>\n\n          </div>\n\n      </div>\n\n    </ion-slide>\n\n  \n\n  </ion-slides>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\childrens\childrens.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["r" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], ChildrensPage);
    return ChildrensPage;
}());

//# sourceMappingURL=childrens.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_url_url__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__business_info_business_info__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(65);
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
 * Generated class for the BusinessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var BusinessPage = /** @class */ (function () {
    function BusinessPage(navCtrl, navParams, api, global, splash, app, alertCtrl, url) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.splash = splash;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.url = url;
        this.getBusinessUsers();
    }
    BusinessPage.prototype.getBusinessUsers = function () {
        var _this = this;
        this.api.getBusinessUsers().subscribe(function (res) {
            if (res.status == "true") {
                _this.businessUsers = res.data;
            }
            else {
                //
            }
            return _this.businessUsers;
        });
    };
    BusinessPage.prototype.ionViewDidLoad = function () {
        this.getBusinessUsers();
        console.log('ionViewDidLoad BusinessPage');
    };
    BusinessPage.prototype.searchUser = function (ev) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */], {
            userType: 2
        });
    };
    BusinessPage.prototype.userDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__business_info_business_info__["a" /* BusinessInfoPage */], {
            id: id
        });
    };
    BusinessPage.prototype.logoutAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        alert.dismiss();
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.global.logout().subscribe(function (res) {
                            console.log(res);
                        });
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    BusinessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-business',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business\business.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <!-- <div class="back-icon-img">\n\n                      <img src="assets/imgs/back-arrow.png">\n\n                  </div> -->\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">Business</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                    <ion-icon name="exit" (click)="logoutAlert()"></ion-icon>\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n  <div class="search-box">\n\n    <ion-searchbar (click)="searchUser($event)"></ion-searchbar>\n\n\n\n  </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-65">\n\n      <ion-grid class="">\n\n          <ion-row *ngFor="let item of businessUsers" (click)="userDetails(item.id)">\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                        <img [src]="url?.serverUrl + \'uploads/profile_images/\' + item.profile_photo">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>{{item.firstname}} {{item.lastname}}</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <!-- <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Business Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Business Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Business Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Business Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Business Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div> -->\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business\business.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__["a" /* GlobalServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_url_url__["a" /* UrlProvider */]])
    ], BusinessPage);
    return BusinessPage;
}());

//# sourceMappingURL=business.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
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
 * Generated class for the BusinessInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var BusinessInfoPage = /** @class */ (function () {
    function BusinessInfoPage(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        var id = this.navParams.get('id');
        var formdata = new FormData();
        formdata.append('user_id', id);
        this.api.getUserDetails(formdata).subscribe(function (res) {
            if (res.status == "true") {
                _this.userDetails = res.data;
            }
        });
    }
    BusinessInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusinessInfoPage');
    };
    BusinessInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-business-info',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-info\business-info.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <!-- <div class="back-icon-img">\n\n                      <img src="assets/imgs/back-arrow.png">\n\n                  </div> -->\n\n              </ion-col>\n\n\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">Business Info</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                      <img src="assets/imgs/list-icon.png">\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="ion-no-padding">\n\n          <ion-row>\n\n              <ion-slides class="slider-box" pager="true" options="options">\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n              </ion-slides>\n\n\n\n          </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n\n\n  <!-- <div class="bg-blue">\n\n      <h3 class="title-bg-blue">Upcoming News</h3>\n\n  </div> -->\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="">\n\n          <ion-row *ngIf="userDetails">\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>{{userDetails.firstname}} {{userDetails.lastname}}</h3>\n\n                          <p>Company Name: Abcd pvt.ltd</p>\n\n                          <p>Address: {{userDetails.present_address}} {{userDetails.city}}</p>\n\n                          <p>Email-id: {{userDetails.emailid}}</p>\n\n                          <p>Profession: {{userDetails.profession}}</p>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n\n\n  <div class="mrg-t-40"></div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-info\business-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], BusinessInfoPage);
    return BusinessInfoPage;
}());

//# sourceMappingURL=business-info.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__news_details_news_details__ = __webpack_require__(122);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, splash, app, api, global, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splash = splash;
        this.app = app;
        this.api = api;
        this.global = global;
        this.alertCtrl = alertCtrl;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (window.localStorage.getItem('id')) {
            this.user_id = window.localStorage.getItem('id');
            var formdata = new FormData();
            formdata.append('user_id', this.user_id);
            this.api.getUserDetails(formdata).subscribe(function (res) {
                if (res.status == "true") {
                    _this.user = res.data;
                    console.log('login user', _this.user);
                }
                else {
                    _this.splash.toast('Unable to load your information');
                }
            });
            //get news
            this.api.getNews().subscribe(function (res) {
                if (res.status == "true") {
                    _this.news = res.data;
                }
            });
        }
    };
    HomePage.prototype.openPopover = function () {
        this.splash.presentPopover();
    };
    HomePage.prototype.newsDetails = function (news) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__news_details_news_details__["a" /* NewsDetailsPage */], {
            news: news
        });
    };
    HomePage.prototype.logoutAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        alert.dismiss();
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.global.logout().subscribe(function (res) {
                            console.log(res);
                        });
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <div class="user-info-heaser">\n\n                      <div class="user-img">\n\n                          <img src="assets/imgs/user-img.jpg">\n\n                      </div>\n\n                      <small *ngIf="user">{{user.firstname}}</small>\n\n                  </div>\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">App Name</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                      <ion-icon name="exit" (click)="logoutAlert()"></ion-icon> \n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="ion-no-padding">\n\n          <ion-row>\n\n              <ion-slides class="slider-box" pager="true" options="options">\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n\n\n\n\n\n\n              </ion-slides>\n\n\n\n          </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n\n\n  <div class="bg-blue">\n\n      <h3 class="title-bg-blue">Upcoming News</h3>\n\n  </div>\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="" *ngIf="news">\n\n          <ion-row *ngFor="let item of news" (click)="newsDetails(item)">\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Lauren ipsum</h3>\n\n                          <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> {{item.created}}</small></div>\n\n                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n                            Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s..<span>Read More</span> </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <!-- <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Heading title</h3>\n\n                          <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> 30/09/2020</small></div>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. <span>Read More</span> </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Heading title</h3>\n\n                          <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> 30/09/2020</small></div>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. <span>Read More</span> </p>\n\n\n\n                      </div>\n\n                  </div>\n\n              </div> -->\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n  <div class="bg-blue mrg-t-10">\n\n      <h3 class="contact-info">Contact Us - judymoodysolutions.com</h3>\n\n  </div>\n\n  <div class="bg-gray mrg-t-10">\n\n      <h3 class="email-info">Email Id - judymoodysolutions@gmail.com</h3>\n\n  </div>\n\n\n\n  <div class="mrg-t-40"></div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__["a" /* SplashProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__["a" /* GlobalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 367:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrimonyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_url_url__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__matrimony_details_matrimony_details__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_search__ = __webpack_require__(65);
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
 * Generated class for the MatrimonyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MatrimonyPage = /** @class */ (function () {
    function MatrimonyPage(navCtrl, navParams, splash, api, global, app, alertCtrl, url) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.splash = splash;
        this.api = api;
        this.global = global;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.url = url;
        this.searchQuery = '';
        this.getMatrimonyUsers();
    }
    MatrimonyPage.prototype.getMatrimonyUsers = function () {
        var _this = this;
        this.api.getMatrimonyUsers().subscribe(function (res) {
            if (res.status == "true") {
                _this.matrimonyUsers = res.data;
            }
            else {
                //
            }
            return _this.matrimonyUsers;
        });
    };
    MatrimonyPage.prototype.ionViewDidLoad = function () {
        this.getMatrimonyUsers();
        console.log('ionViewDidLoad MatrimonyPage');
    };
    MatrimonyPage.prototype.searchUser = function (ev) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_search__["a" /* SearchPage */], {
            userType: 3
        });
    };
    MatrimonyPage.prototype.userDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__matrimony_details_matrimony_details__["a" /* MatrimonyDetailsPage */], {
            id: id,
        });
    };
    MatrimonyPage.prototype.logoutAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        alert.dismiss();
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.global.logout().subscribe(function (res) {
                            console.log(res);
                        });
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    MatrimonyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matrimony',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\matrimony\matrimony.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <!-- <div class="back-icon-img">\n\n                      <img src="assets/imgs/back-arrow.png">\n\n                  </div> -->\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">Matrimony</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                    <ion-icon name="exit" (click)="logoutAlert()"></ion-icon>\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n  <div class="search-box">\n\n    <ion-searchbar (click)="searchUser($event)"></ion-searchbar>\n\n  </div>\n\n</ion-header>\n\n<ion-content>\n\n\n\n  <div class="pad-page-10 mrg-t-65">\n\n      <ion-grid class="">\n\n          <ion-row *ngFor="let item of matrimonyUsers" (click)="userDetails(item.id)">\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                        <img [src]="url?.serverUrl + \'uploads/profile_images/\' + item.profile_photo">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>{{item.firstname}} {{item.lastname}}</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <!-- <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Headline</h3>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div> -->\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\matrimony\matrimony.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__["a" /* SplashProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__["a" /* GlobalServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_url_url__["a" /* UrlProvider */]])
    ], MatrimonyPage);
    return MatrimonyPage;
}());

//# sourceMappingURL=matrimony.js.map

/***/ }),

/***/ 368:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatrimonyDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
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
 * Generated class for the MatrimonyDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MatrimonyDetailsPage = /** @class */ (function () {
    function MatrimonyDetailsPage(navCtrl, navParams, api) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        var id = this.navParams.get('id');
        var formdata = new FormData();
        formdata.append('user_id', id);
        this.api.getUserDetails(formdata).subscribe(function (res) {
            if (res.status == "true") {
                _this.userDetails = res.data;
            }
        });
    }
    MatrimonyDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatrimonyDetailsPage');
    };
    MatrimonyDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-matrimony-details',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\matrimony-details\matrimony-details.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <!-- <div class="back-icon-img">\n\n                      <img src="assets/imgs/back-arrow.png">\n\n                  </div> -->\n\n              </ion-col>\n\n\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">Matrimony Info</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                      <img src="assets/imgs/list-icon.png">\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="ion-no-padding">\n\n          <ion-row>\n\n              <ion-slides class="slider-box" pager="true" options="options">\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n                      </ion-card>\n\n                  </ion-slide>\n\n              </ion-slides>\n\n\n\n          </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n\n\n  <!-- <div class="bg-blue">\n\n    <h3 class="title-bg-blue">Upcoming News</h3>\n\n</div> -->\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="">\n\n          <ion-row *ngIf="userDetails">\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>{{userDetails.firstname}} {{userDetails.lastname}}</h3>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <!-- <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Heading title</h3>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Heading title</h3>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Heading title</h3>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Heading title</h3>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>Matrimony Heading title</h3>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. </p>\n\n\n\n                      </div>\n\n                  </div>\n\n              </div> -->\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n\n\n  <div class="mrg-t-40"></div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\matrimony-details\matrimony-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], MatrimonyDetailsPage);
    return MatrimonyDetailsPage;
}());

//# sourceMappingURL=matrimony-details.js.map

/***/ }),

/***/ 369:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__news_details_news_details__ = __webpack_require__(122);
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
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var NewsPage = /** @class */ (function () {
    function NewsPage(navCtrl, navParams, api, global, app, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.global = global;
        this.app = app;
        this.alertCtrl = alertCtrl;
    }
    NewsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.api.getNews().subscribe(function (res) {
            if (res.status == "true") {
                _this.news = res.data;
            }
            else {
                //
            }
        });
        console.log('ionViewDidLoad NewsPage');
    };
    NewsPage.prototype.gotoDetails = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__news_details_news_details__["a" /* NewsDetailsPage */], {
            news: item,
        });
    };
    NewsPage.prototype.logoutAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        alert.dismiss();
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.global.logout().subscribe(function (res) {
                            console.log(res);
                        });
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_4__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    NewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-news',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\news\news.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <!-- <div class="back-icon-img">\n\n                      <img src="assets/imgs/back-arrow.png">\n\n                  </div> -->\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">News</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                    <ion-icon name="exit" (click)="logoutAlert()"></ion-icon>\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n  <!-- <div class="bg-blue">\n\n    <h3 class="title-bg-blue">Upcoming News</h3>\n\n</div> -->\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="">\n\n          <ion-row *ngFor="let item of news" (click)="gotoDetails(item)">\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                        <h3>Lauren ipsum</h3>\n\n                        <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> {{item.created}}</small></div>\n\n                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n                          Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s..<span>Read More</span> </p>\n\n\n\n                    </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <!-- <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Headline</h3>\n\n                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n                          </p>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Headline</h3>\n\n                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n                          </p>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Headline</h3>\n\n                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n                          </p>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Headline</h3>\n\n                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n                          </p>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Headline</h3>\n\n                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s,\n\n                          </p>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div> -->\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\news\news.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__["a" /* GlobalServiceProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], NewsPage);
    return NewsPage;
}());

//# sourceMappingURL=news.js.map

/***/ }),

/***/ 370:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_url_url__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_search__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_info_user_info__ = __webpack_require__(121);
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
 * Generated class for the UserListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var UserListPage = /** @class */ (function () {
    function UserListPage(navCtrl, navParams, api, splash, global, app, alertCtrl, url) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.splash = splash;
        this.global = global;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.url = url;
        this.searchQuery = '';
        this.getUserList();
    }
    UserListPage.prototype.getUserList = function () {
        var _this = this;
        this.splash.presentLoading();
        this.api.getUserList().subscribe(function (res) {
            console.log('UserListPage', res);
            if (res.status == "true") {
                _this.splash.dismiss();
                _this.userlist = res.data;
            }
            else {
                _this.splash.dismiss();
                _this.flag = 0;
            }
            return _this.userlist;
        });
    };
    UserListPage.prototype.ionViewWillEnter = function () {
        console.log(' UserListPage', this.userlist);
        //  console.log('ionViewDidLoad UserListPage',JSON.parse(this.userlist.data) );
    };
    // useType 1 = AllUSers, 2 = BusinessUsers, 3 = MatrimonyUsers
    UserListPage.prototype.searchUser = function (ev) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_search__["a" /* SearchPage */], {
            userType: 1
        });
        // const val = ev.target.value;
        // // if the value is an empty string don't filter the items
        // if (val && val.trim() != '') {
        //   this.userlist = this.userlist.filter((item) => {
        //     return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1);
        //   })
        // } else {
        //   this.userlist = this.getUserList()
        // }
    };
    UserListPage.prototype.userDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__user_info_user_info__["a" /* UserInfoPage */], {
            id: id
        });
    };
    UserListPage.prototype.logoutAlert = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            message: 'Do you want logout?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                        alert.dismiss();
                    }
                },
                {
                    text: 'Logout',
                    handler: function () {
                        _this.global.logout().subscribe(function (res) {
                            console.log(res);
                        });
                        _this.app.getRootNav().setRoot(__WEBPACK_IMPORTED_MODULE_6__login_login__["a" /* LoginPage */]);
                    }
                }
            ]
        });
        alert.present();
    };
    UserListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-list',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\user\user-list\user-list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <!-- <div class="back-icon-img">\n\n                      <img src="assets/imgs/back-arrow.png">\n\n                  </div> -->\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">User List</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                    <ion-icon name="exit" (click)="logoutAlert()"></ion-icon>\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n  <div class="search-box">\n\n    <ion-searchbar (click)="searchUser($event)"></ion-searchbar>\n\n\n\n </div>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n\n\n  <div class="bg-blue">\n\n      <h3 class="title-bg-blue">Users</h3>\n\n  </div>\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-65">\n\n      <ion-grid class="">\n\n          <ion-row *ngFor="let item of userlist">\n\n              <div class="new-box">\n\n                  <div class="new-img-box" (click)="userDetails(item.id)">\n\n                      <div class="img-box">\n\n                          <img [src]="url?.serverUrl + \'uploads/profile_images/\' + item.profile_photo">\n\n                      </div>\n\n                      <!-- https://s3-sa-east-1.amazonaws.com/mybucket/cp${this.client.id}.jpg -->\n\n                      <div class="new-cuntent-box">\n\n                          <h3>{{item.firstname}}</h3>\n\n                          <div class="date-box"> </div>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <!---<div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>User Name</h3>\n\n                          <div class="date-box"> </div>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>User Name</h3>\n\n                          <div class="date-box"> </div>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>User Name</h3>\n\n                          <div class="date-box"> </div>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>User Name</h3>\n\n                          <div class="date-box"> </div>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>User Name</h3>\n\n                          <div class="date-box"> </div>\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>-->\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n\n\n\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\user\user-list\user-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_4__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_2__providers_global_service_global_service__["a" /* GlobalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */], __WEBPACK_IMPORTED_MODULE_5__providers_url_url__["a" /* UrlProvider */]])
    ], UserListPage);
    return UserListPage;
}());

//# sourceMappingURL=user-list.js.map

/***/ }),

/***/ 371:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarriageStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__marriage_step2_marriage_step2__ = __webpack_require__(372);
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
 * Generated class for the MarriageStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MarriageStep1Page = /** @class */ (function () {
    function MarriageStep1Page(navCtrl, navParams, validation, actionSheetCtrl, splash, sanitizer, imagePicker, base64, camera, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.validation = validation;
        this.actionSheetCtrl = actionSheetCtrl;
        this.splash = splash;
        this.sanitizer = sanitizer;
        this.imagePicker = imagePicker;
        this.base64 = base64;
        this.camera = camera;
        this.file = file;
        this.dataArray = {};
        this.allImages = [];
        this.marriageForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            allImages: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            fathername: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            mothername: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            fathermobileno: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            fatherOccupation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            motherOccupation: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
    }
    MarriageStep1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarriageStep1Page');
        this.dataArray = this.navParams.get('dataArray');
        console.log('---------------Data at Marriage Step1----------------- ', this.dataArray);
    };
    MarriageStep1Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    MarriageStep1Page.prototype.getPhoto = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'File Manager',
                    icon: 'folder-open',
                    cssClass: 'actionSheetButon',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Camera',
                    icon: 'camera',
                    cssClass: 'actionSheetButon',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.CAMERA);
                    }
                },]
        });
        actionSheet.present();
    };
    MarriageStep1Page.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            maximumImagesCount: 3,
            width: 100,
            height: 100,
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                var filename = results[i].substring(results[i].lastIndexOf('/') + 1);
                var path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
                _this.file.readAsDataURL(path, filename).then(function (base64string) {
                    _this.allImages.push(base64string);
                    console.log('Image URI: ' + results[i]);
                });
            }
        }, function (err) { });
    };
    MarriageStep1Page.prototype.deletePhoto = function (index) {
        this.allImages.splice(index, 1);
    };
    // private convertImageToBase64(base64: string) {
    //   this.splash.presentLoading();
    //   this.base64.encodeFile(base64).then((base64File: string) => {
    //       this.allImages.push(this.sanitizer.bypassSecurityTrustResourceUrl(base64File));
    //       this.splash.dismiss();
    //   }, (err) => {
    //     this.splash.dismiss()
    //     console.log(err);
    //   });
    MarriageStep1Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.marriageForm.valid) {
            this.dataArray['otherpics'] = this.allImages,
                this.dataArray['fathername'] = data.fathername,
                this.dataArray['mothername'] = data.mothername,
                this.dataArray['fatherMobileNo'] = data.fathermobileno,
                this.dataArray['fatherOccupation'] = data.fatherOccupation,
                this.dataArray['motherOccupation'] = data.motherOccupation,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__marriage_step2_marriage_step2__["a" /* MarriageStep2Page */], {
                    dataArray: this.dataArray
                });
        }
        else {
            console.log('form errr');
            Object.keys(this.marriageForm.controls).forEach(function (field) {
                var control = _this.marriageForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    MarriageStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marriage-step1',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-step1\marriage-step1.html"*/'<!--\n\n  Generated template for the MarriedRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <div class="login-box-section">\n\n    <div class="login-box">\n\n\n\n        <form [formGroup]="marriageForm">\n\n          <ion-list class="login-user-info">\n\n        <!--        \n\n            <ion-row>\n\n                <img class="img" [src]="url">\n\n              </ion-row>\n\n          <ion-row> \n\n            <input type="file" name="file" id="profilepic" (change)="UploadprofileImage($event)" class="inputfile" >\n\n                <label for="profilepic" class="upload">\n\n              <ion-icon ios="ios-cloud-upload" md="md-cloud-upload"></ion-icon>\n\n            </label>\n\n          </ion-row>\n\n            <ion-row>\n\n                <img class="img" [src]="url">\n\n              </ion-row>\n\n          <ion-row> \n\n            <input type="file" name="file" id="otherpic" class="inputfile" (change)="UploadOtherImage($event)" >\n\n                <label for="otherpic" class="upload">\n\n              <ion-icon ios="ios-cloud-upload" md="md-cloud-upload"></ion-icon>\n\n            </label>\n\n          </ion-row>\n\n        -->\n\n        <button item-end clear ion-button (click)="getPhoto()"><ion-icon name="add">Upload Images</ion-icon></button>\n\n        <ion-row class="gender-box">\n\n          <div *ngFor="let pics of allImages">\n\n            <ion-icon name="md-close" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n\n            <ion-col>\n\n              \n\n              <div class="document-img-box dotted-border">\n\n                <img [src]="pics">\n\n              </div>\n\n            </ion-col>\n\n          </div>\n\n        </ion-row>\n\n\n\n      <ion-input formControlName="allImages" [(ngModel)]="allImages" type="text" hidden></ion-input>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="text"  placeholder="Father Name" formControlName="fathername" required></ion-input>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.name" >\n\n              <div *ngIf="marriageForm.get(\'fathername\').hasError(validation.type) && marriageForm.get(\'fathername\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="text"  placeholder="Mother Name" formControlName="mothername" required></ion-input>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.name" >\n\n              <div *ngIf="marriageForm.get(\'mothername\').hasError(validation.type) && marriageForm.get(\'mothername\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n          \n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n              </ion-label>\n\n              <ion-input type="number"  placeholder="Father Mobile No" formControlName="fathermobileno" required></ion-input>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.mobile" >\n\n              <div *ngIf="marriageForm.get(\'fathermobileno\').hasError(validation.type) && marriageForm.get(\'fathermobileno\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n              </ion-label>\n\n              <ion-select interface="popover" placeholder="Father occupation" formControlName="fatherOccupation">\n\n                <ion-option value="Business">Business</ion-option>\n\n                <ion-option value="private_job">Private Job</ion-option>\n\n                <ion-option value="government_job">Government Job</ion-option>\n\n                <ion-option value="other">other</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.fatherOccupation" >\n\n              <div *ngIf="marriageForm.get(\'fatherOccupation\').hasError(validation.type) && marriageForm.get(\'fatherOccupation\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n              </ion-label>\n\n              <ion-select interface="popover" placeholder="Mother occupation" formControlName="motherOccupation">\n\n                <ion-option value="Business">Business</ion-option>\n\n                <ion-option value="private_job">Private Job</ion-option>\n\n                <ion-option value="government_job">Government Job</ion-option>\n\n                <ion-option value="housewife">House wife</ion-option>\n\n                <ion-option value="other">other</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n            <div *ngFor="let validation of validation_messages.fatherOccupation" >\n\n              <div *ngIf="marriageForm.get(\'motherOccupation\').hasError(validation.type) && marriageForm.get(\'motherOccupation\').touched">\n\n                <div class="error-message">{{validation.message}}</div>\n\n              </div>\n\n            </div>\n\n            \n\n          </ion-list>\n\n          <ion-row>\n\n            <ion-col>\n\n              <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <button ion-button round center class="login-btn" (click)="submitDetails(marriageForm.value)">Next</button>\n\n            </ion-col>\n\n          </ion-row>\n\n        </form>\n\n      </div>\n\n    </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-step1\marriage-step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_9__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_8__providers_splash_splash__["a" /* SplashProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
    ], MarriageStep1Page);
    return MarriageStep1Page;
}());

//# sourceMappingURL=marriage-step1.js.map

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarriageStep2Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__brothers_brothers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sisters_sisters__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__marriage_step3_marriage_step3__ = __webpack_require__(373);
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
 * Generated class for the MarriageStep2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MarriageStep2Page = /** @class */ (function () {
    function MarriageStep2Page(navCtrl, navParams, modalCtrl, validation) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.validation = validation;
        this.dataArray = {};
        this.brothersArray = [];
        this.sistersArray = [];
        this.marriageForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            noOfBrothers: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            noOfSisters: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            manglik: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            kuldevi: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            gotra: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
    }
    MarriageStep2Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarriageStep2Page');
        this.dataArray = this.navParams.get('dataArray');
        //total Brothers Arary
        this.brothersArray = this.navParams.get('brothersArray');
        //total sisters array
        this.sistersArray = this.navParams.get('sistersArray');
        console.log('--------------------Data at marriageStep2----------------- ', this.dataArray);
        //let formdata = new FormData()
        //formdata.append('brothers', this.brothersArray[0]);
    };
    MarriageStep2Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    MarriageStep2Page.prototype.haveBrothers = function (value) {
        console.log('------------have Brothers------------', value);
        if (value == 0) {
            // this.navCtrl.push(BrothersPage)
        }
        else if (value > 0) {
            //this.navCtrl.push(Brother1Page, {data: value})
            this.presentModal(value);
        }
    };
    MarriageStep2Page.prototype.presentModal = function (value) {
        var _this = this;
        this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_4__brothers_brothers__["a" /* BrothersPage */], { value: value });
        this.modal.onDidDismiss(function (data) {
            // This is going to be executed when the modal is closed, so
            // you can get the data here
            _this.brothersArray = data;
            console.log('---------------_Modal from Data------------ ', _this.brothersArray);
        });
        this.modal.present();
    };
    MarriageStep2Page.prototype.haveSisters = function (value) {
        var _this = this;
        if (value > 0) {
            this.modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__sisters_sisters__["a" /* SistersPage */], { value: value });
            this.modal.onDidDismiss(function (data) {
                // This is going to be executed when the modal is closed, so
                // you can get the data here
                _this.sistersArray = data;
                console.log('---------------Data from modal------------ ', _this.dataFromModal);
            });
            this.modal.present();
        }
        else {
            //No action
        }
    };
    MarriageStep2Page.prototype.submitDetails = function (data) {
        var _this = this;
        console.log('-----------data-----------', data);
        if (this.marriageForm.valid) {
            this.dataArray['manglik'] = data.manglik,
                this.dataArray['kuldevi'] = data.kuldevi,
                this.dataArray['gotra'] = data.gotra,
                this.dataArray['totalBrothers'] = data.noOfBrothers,
                this.dataArray['totalSisters'] = data.noOfSisters,
                this.dataArray['brothers'] = this.brothersArray,
                this.dataArray['siters'] = this.sistersArray,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__marriage_step3_marriage_step3__["a" /* MarriageStep3Page */], {
                    dataArray: this.dataArray
                });
        }
        else {
            console.log('form errr');
            Object.keys(this.marriageForm.controls).forEach(function (field) {
                var control = _this.marriageForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    MarriageStep2Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marriage-step2',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-step2\marriage-step2.html"*/'<!--\n\n  Generated template for the MarriedRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <div class="login-box-section">\n\n    <div class="login-box">\n\n\n\n      <form [formGroup]="marriageForm">\n\n        <ion-list class="login-user-info">\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="text"  placeholder="Kul Devi" formControlName="kuldevi" required></ion-input>\n\n          </ion-item>\n\n          <div *ngFor="let validation of validation_messages.commonmessage" >\n\n            <div *ngIf="marriageForm.get(\'kuldevi\').hasError(validation.type) && marriageForm.get(\'kuldevi\').touched">\n\n              <div class="error-message">{{validation.message}}</div>\n\n            </div>\n\n          </div>\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n            </ion-label>\n\n            <ion-input type="text"  placeholder="Gotra" formControlName="gotra" required></ion-input>\n\n          </ion-item>\n\n          <div *ngFor="let validation of validation_messages.commonmessage" >\n\n            <div *ngIf="marriageForm.get(\'gotra\').hasError(validation.type) && marriageForm.get(\'gotra\').touched">\n\n              <div class="error-message">{{validation.message}}</div>\n\n            </div>\n\n          </div>\n\n\n\n          <div formControlName="manglik" radio-group>\n\n            <p>Manglik</p>\n\n            <ion-row>\n\n              <ion-col>\n\n                <span>YES</span>\n\n                <ion-radio value="Y">Yes</ion-radio>\n\n              </ion-col>\n\n              <ion-col>\n\n                <ion-col>\n\n                  <span>No</span>\n\n                  <ion-radio value="N">No</ion-radio>\n\n                </ion-col>\n\n              </ion-col>\n\n            </ion-row>           \n\n          </div>\n\n          <div *ngFor="let validation of validation_messages.commonmessage" >\n\n            <div *ngIf="marriageForm.get(\'manglik\').hasError(validation.type) && marriageForm.get(\'manglik\').touched">\n\n              <div class="error-message">{{validation.message}}</div>\n\n            </div>\n\n          </div>\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n            </ion-label>\n\n            <ion-select interface="popover" placeholder="Select No of brothers" formControlName="noOfBrothers" (ionChange)="haveBrothers($event)">\n\n              <ion-option value="0">0</ion-option>\n\n              <ion-option value="1">1</ion-option>\n\n              <ion-option value="2">2</ion-option>\n\n              <ion-option value="3">3</ion-option>\n\n              <ion-option value="4">4</ion-option>\n\n              <ion-option value="5">5</ion-option>\n\n              <ion-option value="6">6</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngFor="let validation of validation_messages.commonmessage" >\n\n            <div *ngIf="marriageForm.get(\'noOfBrothers\').hasError(validation.type) && marriageForm.get(\'noOfBrothers\').touched">\n\n              <div class="error-message">{{validation.message}}</div>\n\n            </div>\n\n          </div>\n\n         \n\n          <!-- <span *ngIf="isBrothers == \'Yes\';">\n\n            <ion-item>\n\n              <ion-label>\n\n                <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n              </ion-label>\n\n              <ion-select interface="popover" placeholder="Select No of brothers">\n\n                <ion-option value="1">1</ion-option>\n\n                <ion-option value="2">2</ion-option>\n\n                <ion-option value="3">3</ion-option>\n\n              </ion-select>\n\n            </ion-item>\n\n          </span> -->\n\n\n\n          <ion-item>\n\n            <ion-label>\n\n              <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n            </ion-label>\n\n            <ion-select interface="popover" placeholder="Select No of Sisters" formControlName="noOfSisters" (ionChange)="haveSisters($event)">\n\n              <ion-option value="0">0</ion-option>\n\n              <ion-option value="1">1</ion-option>\n\n              <ion-option value="2">2</ion-option>\n\n              <ion-option value="3">3</ion-option>\n\n              <ion-option value="4">4</ion-option>\n\n              <ion-option value="5">5</ion-option>\n\n              <ion-option value="6">6</ion-option>\n\n            </ion-select>\n\n          </ion-item>\n\n          <div *ngFor="let validation of validation_messages.commonmessage" >\n\n            <div *ngIf="marriageForm.get(\'noOfSisters\').hasError(validation.type) && marriageForm.get(\'noOfSisters\').touched">\n\n              <div class="error-message">{{validation.message}}</div>\n\n            </div>\n\n          </div>\n\n          \n\n        </ion-list> \n\n        <ion-row>\n\n          <ion-col>\n\n            <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n          </ion-col>\n\n          <ion-col>\n\n            <button ion-button round center class="login-btn" (click)="submitDetails(marriageForm.value)">Next</button>\n\n          </ion-col>\n\n        </ion-row>\n\n      </form>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-step2\marriage-step2.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */]])
    ], MarriageStep2Page);
    return MarriageStep2Page;
}());

//# sourceMappingURL=marriage-step2.js.map

/***/ }),

/***/ 373:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarriageStep3Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__business_details_business_step1_business_step1__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__job_details_job_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tabs_tabs__ = __webpack_require__(34);
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
 * Generated class for the MarriageStep3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MarriageStep3Page = /** @class */ (function () {
    function MarriageStep3Page(navCtrl, navParams, api, splash, validation, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.splash = splash;
        this.validation = validation;
        this.global = global;
        this.dataArray = {};
        this.marriageForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            height: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            weight: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            skin: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            about: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
        });
        this.validation_messages = this.validation.validationMessage();
    }
    MarriageStep3Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarriageStep3Page');
        this.dataArray = this.navParams.get('dataArray');
        console.log('--------------data at marriage step3----------- ', this.dataArray);
    };
    MarriageStep3Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    MarriageStep3Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.marriageForm.valid) {
            this.dataArray['height'] = data.height,
                this.dataArray['weight'] = data.weight,
                this.dataArray['skin'] = data.skin,
                this.dataArray['about'] = data.about;
            if (this.dataArray['profession'] == 'Job') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__job_details_job_details__["a" /* JobDetailsPage */], { dataArray: this.dataArray });
            }
            else if (this.dataArray['profession'] == 'Business') {
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__business_details_business_step1_business_step1__["a" /* BusinessStep1Page */], { dataArray: this.dataArray });
            }
            else if (this.dataArray['profession'] == 'Unemployed') {
                this.splash.presentLoading();
                this.api.registration(this.dataArray).subscribe(function (res) {
                    if (res.flag == 0) {
                        _this.splash.toast(res.message);
                        // this.global.setUser(res.data)
                    }
                    else if (res.status == "true") {
                        _this.splash.dismiss();
                        _this.global.setUser(res.userid);
                        _this.splash.toast(res.message);
                        var formdata = new FormData();
                        formdata.append('user_id', res.userid);
                        _this.api.getAccountDetails(formdata).subscribe(function (res) {
                            console.log(res);
                            if (res.status == "true") {
                                _this.global.setUser(res.data.id);
                                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__tabs_tabs__["a" /* TabsPage */], { data: res.data });
                            }
                        });
                    }
                    else if (res.flag == 7) {
                        _this.splash.toast('Registration failed');
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__login_login__["a" /* LoginPage */]);
                    }
                });
            }
        }
        else {
            console.log('form errr');
            Object.keys(this.marriageForm.controls).forEach(function (field) {
                var control = _this.marriageForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    MarriageStep3Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marriage-step3',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-step3\marriage-step3.html"*/'<!--\n\n  Generated template for the MarriedRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n\n\n<ion-content padding>\n\n  <div class="login-box-section">\n\n    <div class="login-box">\n\n\n\n          <form [formGroup]="marriageForm">\n\n            <ion-list class="login-user-info">\n\n  \n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="number"  placeholder="Height in cm" formControlName="height"></ion-input>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                <div *ngIf="marriageForm.get(\'height\').hasError(validation.type) && marriageForm.get(\'height\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n  \n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-input type="number"  placeholder="Weight in Kg" formControlName="weight"></ion-input>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                <div *ngIf="marriageForm.get(\'weight\').hasError(validation.type) && marriageForm.get(\'weight\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n  \n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                </ion-label>\n\n                <ion-select interface="popover" placeholder="Skin Tone" formControlName="skin">\n\n                  <ion-option value="whiteskin">white</ion-option>\n\n                  <ion-option value="avgskin">Average </ion-option>\n\n                  <ion-option value="darkskin">Dark</ion-option>\n\n                </ion-select>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                <div *ngIf="marriageForm.get(\'skin\').hasError(validation.type) && marriageForm.get(\'skin\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n    \n\n              <ion-item>\n\n                <ion-label>\n\n                  <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                </ion-label>\n\n                <ion-textarea type="text"  placeholder="About" formControlName="about"></ion-textarea>\n\n              </ion-item>\n\n              <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                <div *ngIf="marriageForm.get(\'about\').hasError(validation.type) && marriageForm.get(\'about\').touched">\n\n                  <div class="error-message">{{validation.message}}</div>\n\n                </div>\n\n              </div>\n\n  \n\n            </ion-list> \n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button round center class="login-btn" (click)="submitDetails(marriageForm.value)">Next</button>\n\n              </ion-col>\n\n            </ion-row>\n\n      </form>\n\n    </div>\n\n  </div>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-step3\marriage-step3.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__["a" /* GlobalServiceProvider */]])
    ], MarriageStep3Page);
    return MarriageStep3Page;
}());

//# sourceMappingURL=marriage-step3.js.map

/***/ }),

/***/ 374:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(375);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(395);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 395:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_chooser__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_about_about__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_brothers_brothers__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_business_details_business_details__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_business_details_business_step1_business_step1__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_business_details_business_step2_business_step2__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_business_details_business_step3_business_step3__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_business_info_business_info__ = __webpack_require__(365);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_business_business__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_childrens_childrens__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_divorse_details_divorced_step1_divorced_step1__ = __webpack_require__(360);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_divorse_details_divorced_step2_divorced_step2__ = __webpack_require__(361);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_divorse_details_divorced_step3_divorced_step3__ = __webpack_require__(362);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_divorse_details_divorse_details__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_home_home__ = __webpack_require__(366);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_job_details_job_details__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_marriage_details_marriage_details__ = __webpack_require__(458);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_marriage_details_marriage_step1_marriage_step1__ = __webpack_require__(371);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_marriage_details_marriage_step2_marriage_step2__ = __webpack_require__(372);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_marriage_details_marriage_step3_marriage_step3__ = __webpack_require__(373);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_match_match__ = __webpack_require__(459);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_matrimony_details_matrimony_details__ = __webpack_require__(368);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_matrimony_matrimony__ = __webpack_require__(367);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_news_details_news_details__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_news_news__ = __webpack_require__(369);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_otp_otp__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_popover_popover__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_search_search__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_sign_up_sign_up__ = __webpack_require__(460);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_sign_up_step1_step1__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_sign_up_step2_step2__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_sign_up_step3_step3__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_sign_up_step4_step4__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_sisters_sisters__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_slider_slider__ = __webpack_require__(461);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_user_user__ = __webpack_require__(462);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__pages_user_user_info_user_info__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__pages_user_user_list_user_list__ = __webpack_require__(370);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__providers_define_define__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__providers_url_url__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__app_component__ = __webpack_require__(463);
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_59__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_sign_up_step1_step1__["a" /* Step1Page */],
                __WEBPACK_IMPORTED_MODULE_44__pages_sign_up_step2_step2__["a" /* Step2Page */],
                __WEBPACK_IMPORTED_MODULE_45__pages_sign_up_step3_step3__["a" /* Step3Page */],
                __WEBPACK_IMPORTED_MODULE_46__pages_sign_up_step4_step4__["a" /* Step4Page */],
                __WEBPACK_IMPORTED_MODULE_15__pages_business_details_business_details__["a" /* BusinessDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_divorse_details_divorse_details__["a" /* DivorseDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_marriage_details_marriage_details__["a" /* MarriageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_business_details_business_step1_business_step1__["a" /* BusinessStep1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_business_details_business_step2_business_step2__["a" /* BusinessStep2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_business_details_business_step3_business_step3__["a" /* BusinessStep3Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_job_details_job_details__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_marriage_details_marriage_step1_marriage_step1__["a" /* MarriageStep1Page */],
                __WEBPACK_IMPORTED_MODULE_32__pages_marriage_details_marriage_step2_marriage_step2__["a" /* MarriageStep2Page */],
                __WEBPACK_IMPORTED_MODULE_33__pages_marriage_details_marriage_step3_marriage_step3__["a" /* MarriageStep3Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_divorse_details_divorced_step1_divorced_step1__["a" /* DivorcedStep1Page */],
                __WEBPACK_IMPORTED_MODULE_24__pages_divorse_details_divorced_step2_divorced_step2__["a" /* DivorcedStep2Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_divorse_details_divorced_step3_divorced_step3__["a" /* DivorcedStep3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_brothers_brothers__["a" /* BrothersPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_sisters_sisters__["a" /* SistersPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_childrens_childrens__["a" /* ChildrensPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_user_user_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_user_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_matrimony_matrimony__["a" /* MatrimonyPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_matrimony_details_matrimony_details__["a" /* MatrimonyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_business_business__["a" /* BusinessPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_business_info_business_info__["a" /* BusinessInfoPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_search_search__["a" /* SearchPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_59__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_12_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_59__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_13__pages_about_about__["a" /* AboutPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_contact_contact__["a" /* ContactPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_otp_otp__["a" /* OtpPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_news_news__["a" /* NewsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_match_match__["a" /* MatchPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_slider_slider__["a" /* SliderPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_sign_up_step1_step1__["a" /* Step1Page */],
                __WEBPACK_IMPORTED_MODULE_44__pages_sign_up_step2_step2__["a" /* Step2Page */],
                __WEBPACK_IMPORTED_MODULE_45__pages_sign_up_step3_step3__["a" /* Step3Page */],
                __WEBPACK_IMPORTED_MODULE_46__pages_sign_up_step4_step4__["a" /* Step4Page */],
                __WEBPACK_IMPORTED_MODULE_16__pages_business_details_business_step1_business_step1__["a" /* BusinessStep1Page */],
                __WEBPACK_IMPORTED_MODULE_17__pages_business_details_business_step2_business_step2__["a" /* BusinessStep2Page */],
                __WEBPACK_IMPORTED_MODULE_18__pages_business_details_business_step3_business_step3__["a" /* BusinessStep3Page */],
                __WEBPACK_IMPORTED_MODULE_28__pages_job_details_job_details__["a" /* JobDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_marriage_details_marriage_step1_marriage_step1__["a" /* MarriageStep1Page */],
                __WEBPACK_IMPORTED_MODULE_32__pages_marriage_details_marriage_step2_marriage_step2__["a" /* MarriageStep2Page */],
                __WEBPACK_IMPORTED_MODULE_33__pages_marriage_details_marriage_step3_marriage_step3__["a" /* MarriageStep3Page */],
                __WEBPACK_IMPORTED_MODULE_23__pages_divorse_details_divorced_step1_divorced_step1__["a" /* DivorcedStep1Page */],
                __WEBPACK_IMPORTED_MODULE_24__pages_divorse_details_divorced_step2_divorced_step2__["a" /* DivorcedStep2Page */],
                __WEBPACK_IMPORTED_MODULE_25__pages_divorse_details_divorced_step3_divorced_step3__["a" /* DivorcedStep3Page */],
                __WEBPACK_IMPORTED_MODULE_14__pages_brothers_brothers__["a" /* BrothersPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_sisters_sisters__["a" /* SistersPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_business_details_business_details__["a" /* BusinessDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_divorse_details_divorse_details__["a" /* DivorseDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_marriage_details_marriage_details__["a" /* MarriageDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_childrens_childrens__["a" /* ChildrensPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_52__pages_user_user_list_user_list__["a" /* UserListPage */],
                __WEBPACK_IMPORTED_MODULE_51__pages_user_user_info_user_info__["a" /* UserInfoPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_news_details_news_details__["a" /* NewsDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_matrimony_matrimony__["a" /* MatrimonyPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_matrimony_details_matrimony_details__["a" /* MatrimonyDetailsPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_business_business__["a" /* BusinessPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_business_info_business_info__["a" /* BusinessInfoPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_popover_popover__["a" /* PopoverPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_search_search__["a" /* SearchPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_12_ionic_angular__["f" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_57__providers_url_url__["a" /* UrlProvider */],
                __WEBPACK_IMPORTED_MODULE_55__providers_service_service__["a" /* ServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_56__providers_splash_splash__["a" /* SplashProvider */],
                __WEBPACK_IMPORTED_MODULE_54__providers_global_service_global_service__["a" /* GlobalServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_53__providers_define_define__["a" /* DefineProvider */],
                __WEBPACK_IMPORTED_MODULE_58__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_base64__["a" /* Base64 */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_file_chooser__["a" /* FileChooser */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_image_picker__["a" /* ImagePicker */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      About\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\about\about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 218,
	"./af.js": 218,
	"./ar": 219,
	"./ar-dz": 220,
	"./ar-dz.js": 220,
	"./ar-kw": 221,
	"./ar-kw.js": 221,
	"./ar-ly": 222,
	"./ar-ly.js": 222,
	"./ar-ma": 223,
	"./ar-ma.js": 223,
	"./ar-sa": 224,
	"./ar-sa.js": 224,
	"./ar-tn": 225,
	"./ar-tn.js": 225,
	"./ar.js": 219,
	"./az": 226,
	"./az.js": 226,
	"./be": 227,
	"./be.js": 227,
	"./bg": 228,
	"./bg.js": 228,
	"./bm": 229,
	"./bm.js": 229,
	"./bn": 230,
	"./bn-bd": 231,
	"./bn-bd.js": 231,
	"./bn.js": 230,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 240,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 240,
	"./dv": 243,
	"./dv.js": 243,
	"./el": 244,
	"./el.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-il": 249,
	"./en-il.js": 249,
	"./en-in": 250,
	"./en-in.js": 250,
	"./en-nz": 251,
	"./en-nz.js": 251,
	"./en-sg": 252,
	"./en-sg.js": 252,
	"./eo": 253,
	"./eo.js": 253,
	"./es": 254,
	"./es-do": 255,
	"./es-do.js": 255,
	"./es-mx": 256,
	"./es-mx.js": 256,
	"./es-us": 257,
	"./es-us.js": 257,
	"./es.js": 254,
	"./et": 258,
	"./et.js": 258,
	"./eu": 259,
	"./eu.js": 259,
	"./fa": 260,
	"./fa.js": 260,
	"./fi": 261,
	"./fi.js": 261,
	"./fil": 262,
	"./fil.js": 262,
	"./fo": 263,
	"./fo.js": 263,
	"./fr": 264,
	"./fr-ca": 265,
	"./fr-ca.js": 265,
	"./fr-ch": 266,
	"./fr-ch.js": 266,
	"./fr.js": 264,
	"./fy": 267,
	"./fy.js": 267,
	"./ga": 268,
	"./ga.js": 268,
	"./gd": 269,
	"./gd.js": 269,
	"./gl": 270,
	"./gl.js": 270,
	"./gom-deva": 271,
	"./gom-deva.js": 271,
	"./gom-latn": 272,
	"./gom-latn.js": 272,
	"./gu": 273,
	"./gu.js": 273,
	"./he": 274,
	"./he.js": 274,
	"./hi": 275,
	"./hi.js": 275,
	"./hr": 276,
	"./hr.js": 276,
	"./hu": 277,
	"./hu.js": 277,
	"./hy-am": 278,
	"./hy-am.js": 278,
	"./id": 279,
	"./id.js": 279,
	"./is": 280,
	"./is.js": 280,
	"./it": 281,
	"./it-ch": 282,
	"./it-ch.js": 282,
	"./it.js": 281,
	"./ja": 283,
	"./ja.js": 283,
	"./jv": 284,
	"./jv.js": 284,
	"./ka": 285,
	"./ka.js": 285,
	"./kk": 286,
	"./kk.js": 286,
	"./km": 287,
	"./km.js": 287,
	"./kn": 288,
	"./kn.js": 288,
	"./ko": 289,
	"./ko.js": 289,
	"./ku": 290,
	"./ku.js": 290,
	"./ky": 291,
	"./ky.js": 291,
	"./lb": 292,
	"./lb.js": 292,
	"./lo": 293,
	"./lo.js": 293,
	"./lt": 294,
	"./lt.js": 294,
	"./lv": 295,
	"./lv.js": 295,
	"./me": 296,
	"./me.js": 296,
	"./mi": 297,
	"./mi.js": 297,
	"./mk": 298,
	"./mk.js": 298,
	"./ml": 299,
	"./ml.js": 299,
	"./mn": 300,
	"./mn.js": 300,
	"./mr": 301,
	"./mr.js": 301,
	"./ms": 302,
	"./ms-my": 303,
	"./ms-my.js": 303,
	"./ms.js": 302,
	"./mt": 304,
	"./mt.js": 304,
	"./my": 305,
	"./my.js": 305,
	"./nb": 306,
	"./nb.js": 306,
	"./ne": 307,
	"./ne.js": 307,
	"./nl": 308,
	"./nl-be": 309,
	"./nl-be.js": 309,
	"./nl.js": 308,
	"./nn": 310,
	"./nn.js": 310,
	"./oc-lnc": 311,
	"./oc-lnc.js": 311,
	"./pa-in": 312,
	"./pa-in.js": 312,
	"./pl": 313,
	"./pl.js": 313,
	"./pt": 314,
	"./pt-br": 315,
	"./pt-br.js": 315,
	"./pt.js": 314,
	"./ro": 316,
	"./ro.js": 316,
	"./ru": 317,
	"./ru.js": 317,
	"./sd": 318,
	"./sd.js": 318,
	"./se": 319,
	"./se.js": 319,
	"./si": 320,
	"./si.js": 320,
	"./sk": 321,
	"./sk.js": 321,
	"./sl": 322,
	"./sl.js": 322,
	"./sq": 323,
	"./sq.js": 323,
	"./sr": 324,
	"./sr-cyrl": 325,
	"./sr-cyrl.js": 325,
	"./sr.js": 324,
	"./ss": 326,
	"./ss.js": 326,
	"./sv": 327,
	"./sv.js": 327,
	"./sw": 328,
	"./sw.js": 328,
	"./ta": 329,
	"./ta.js": 329,
	"./te": 330,
	"./te.js": 330,
	"./tet": 331,
	"./tet.js": 331,
	"./tg": 332,
	"./tg.js": 332,
	"./th": 333,
	"./th.js": 333,
	"./tk": 334,
	"./tk.js": 334,
	"./tl-ph": 335,
	"./tl-ph.js": 335,
	"./tlh": 336,
	"./tlh.js": 336,
	"./tr": 337,
	"./tr.js": 337,
	"./tzl": 338,
	"./tzl.js": 338,
	"./tzm": 339,
	"./tzm-latn": 340,
	"./tzm-latn.js": 340,
	"./tzm.js": 339,
	"./ug-cn": 341,
	"./ug-cn.js": 341,
	"./uk": 342,
	"./uk.js": 342,
	"./ur": 343,
	"./ur.js": 343,
	"./uz": 344,
	"./uz-latn": 345,
	"./uz-latn.js": 345,
	"./uz.js": 344,
	"./vi": 346,
	"./vi.js": 346,
	"./x-pseudo": 347,
	"./x-pseudo.js": 347,
	"./yo": 348,
	"./yo.js": 348,
	"./zh-cn": 349,
	"./zh-cn.js": 349,
	"./zh-hk": 350,
	"./zh-hk.js": 350,
	"./zh-mo": 351,
	"./zh-mo.js": 351,
	"./zh-tw": 352,
	"./zh-tw.js": 352
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 453;

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the BusinessDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var BusinessDetailsPage = /** @class */ (function () {
    function BusinessDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    BusinessDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusinessDetailsPage');
    };
    BusinessDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-business-details',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-details.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>Business Details</ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  '/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], BusinessDetailsPage);
    return BusinessDetailsPage;
}());

//# sourceMappingURL=business-details.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ContactPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-contact',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\contact\contact.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Contact\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <ion-list-header>Follow us on Twitter</ion-list-header>\n\n    <ion-item>\n\n      <ion-icon name="ionic" item-start></ion-icon>\n\n      @ionicframework\n\n    </ion-item>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\contact\contact.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */]])
    ], ContactPage);
    return ContactPage;
}());

//# sourceMappingURL=contact.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DivorseDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the DivorseDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var DivorseDetailsPage = /** @class */ (function () {
    function DivorseDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DivorseDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DivorseDetailsPage');
    };
    DivorseDetailsPage.prototype.submitDetails = function (data) {
    };
    DivorseDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-divorse-details',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorse-details.html"*/''/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\divorse-details\divorse-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], DivorseDetailsPage);
    return DivorseDetailsPage;
}());

//# sourceMappingURL=divorse-details.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MarriageDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the MarriageDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MarriageDetailsPage = /** @class */ (function () {
    function MarriageDetailsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MarriageDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MarriageDetailsPage');
    };
    MarriageDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-marriage-details',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-details.html"*/'<!--\n\n  Generated template for the MarriedRegisterPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Married Register</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\marriage-details\marriage-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MarriageDetailsPage);
    return MarriageDetailsPage;
}());

//# sourceMappingURL=marriage-details.js.map

/***/ }),

/***/ 459:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the MatchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var MatchPage = /** @class */ (function () {
    function MatchPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MatchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MatchPage');
    };
    MatchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-match',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\match\match.html"*/'<!--\n\n  Generated template for the MatchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>match</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\match\match.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], MatchPage);
    return MatchPage;
}());

//# sourceMappingURL=match.js.map

/***/ }),

/***/ 460:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-sign-up',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\sign-up.html"*/'<!--\n\n  Generated template for the SignUpPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>signUp</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 461:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the SliderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var SliderPage = /** @class */ (function () {
    function SliderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.options = {
            centeredSlides: true,
            slidesPerView: 1,
        };
        this.categories = {
            slidesPerView: 2.5,
        };
    }
    SliderPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SliderPage');
    };
    SliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-slider',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\slider\slider.html"*/'<ion-header>\n\n  <ion-navbar>\n\n      <ion-grid class="no-padding">\n\n          <ion-row>\n\n              <ion-col col-2>\n\n                  <div class="user-info-heaser">\n\n                      <div class="user-img">\n\n                          <img src="assets/imgs/user-img.jpg">\n\n                      </div>\n\n                      <small>User-Name</small>\n\n                  </div>\n\n              </ion-col>\n\n              <ion-col col-8>\n\n                  <h2 class="header-title-2">App Name</h2>\n\n\n\n              </ion-col>\n\n              <ion-col col-2>\n\n                  <div class="menu-list-img">\n\n                      <img src="assets/imgs/list-icon.png">\n\n                  </div>\n\n              </ion-col>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="ion-no-padding">\n\n          <ion-row>\n\n              <ion-slides class="slider-box" pager="true" options="options">\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n\n\n                  <ion-slide class=" size-box-slider">\n\n                      <ion-card>\n\n\n\n\n\n                          <ion-img src="assets/imgs/slider-img-1.png"></ion-img>\n\n\n\n\n\n                      </ion-card>\n\n                  </ion-slide>\n\n\n\n\n\n\n\n\n\n              </ion-slides>\n\n\n\n          </ion-row>\n\n      </ion-grid>\n\n  </div>\n\n\n\n  <div class="bg-blue">\n\n      <h3 class="title-bg-blue">Upcoming News</h3>\n\n  </div>\n\n\n\n\n\n\n\n  <div class="pad-page-10 mrg-t-15">\n\n      <ion-grid class="">\n\n          <ion-row>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Heading title</h3>\n\n                          <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> 30/09/2020</small></div>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. <span>Read More</span> </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Heading title</h3>\n\n                          <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> 30/09/2020</small></div>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. <span>Read More</span> </p>\n\n\n\n                      </div>\n\n                  </div>\n\n\n\n              </div>\n\n              <div class="new-box">\n\n                  <div class="new-img-box">\n\n                      <div class="img-box">\n\n                          <img src="assets/imgs/new-img-1.jpg">\n\n                      </div>\n\n\n\n                      <div class="new-cuntent-box">\n\n                          <h3>News Heading title</h3>\n\n                          <div class="date-box"> <img src="assets/imgs/calendar-icon.png"><small> 30/09/2020</small></div>\n\n                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse luctus dui sed leo cursus dignissim. <span>Read More</span> </p>\n\n\n\n                      </div>\n\n                  </div>\n\n              </div>\n\n          </ion-row>\n\n      </ion-grid>\n\n\n\n\n\n  </div>\n\n  <div class="bg-blue mrg-t-10">\n\n      <h3 class="contact-info">Contact Us - judymoodysolutions.com</h3>\n\n  </div>\n\n  <div class="bg-gray mrg-t-10">\n\n      <h3 class="email-info">Email Id - judymoodysolutions@gmail.com</h3>\n\n  </div>\n\n\n\n  <div class="mrg-t-40"></div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\slider\slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], SliderPage);
    return SliderPage;
}());

//# sourceMappingURL=slider.js.map

/***/ }),

/***/ 462:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var UserPage = /** @class */ (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserPage');
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\user\user.html"*/'<!--\n\n  Generated template for the UserPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>user</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\user\user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 463:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_global_service_global_service__ = __webpack_require__(17);
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
    function MyApp(platform, events, statusBar, splashScreen, global, menu, app) {
        var _this = this;
        this.events = events;
        this.global = global;
        this.menu = menu;
        this.app = app;
        platform.ready().then(function () {
            statusBar.overlaysWebView(false);
            statusBar.backgroundColorByHexString('#F6F8FB');
            statusBar.styleDefault();
            splashScreen.hide();
            if (window.localStorage.getItem('id')) {
                _this.user_id = window.localStorage.getItem('id');
                _this.global.setGlobleVariable();
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */];
            }
            else {
                window.localStorage.clear();
                // this.rootPage = Step4Page;
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["m" /* Platform */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_6__providers_global_service_global_service__["a" /* GlobalServiceProvider */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* App */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UrlProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// flags
// no data - 0
// email exists - 1
// email not exists - 2
// otp send - 3
// login true - 4
// login false - 5
// register true - 6
// register false - 7
var UrlProvider = /** @class */ (function () {
    function UrlProvider(http) {
        this.http = http;
        this.serverUrl = 'https://moderni-projects.in/projects/codeigniter/portfolio/';
        this.loginUrl = 'api/mobile/login';
        this.emailVerify = 'api/authentication/check_email_exist'; //email exist check
        this.generateOtp = 'api/authentication/generate_otp';
        this.registration = 'api/authentication/registration';
        this.getAccountDetails = 'api/authentication/get_account_details';
        this.getCountries = 'api/authentication/get_countries';
        this.getStatesByCountry = 'api/authentication/get_state';
        this.getCitiesByState = 'api/authentication/get_city';
        this.getLanguages = 'api/authentication/get_languages';
        this.getUserList = 'api/user/userList';
        this.getUserDetails = 'api/user/get_UsersDetailsByProfession';
        this.getBusinessUsers = 'api/user/get_businessUsers';
        this.getMatrimonyUsers = 'api/user/get_unmarriedUsers';
        this.getNews = 'api/user/get_newsList';
        //http://moderni-projects.in/projects/codeigniter/portfolio/api/user/get_user_post
    }
    UrlProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], UrlProvider);
    return UrlProvider;
}());

//# sourceMappingURL=url.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BusinessStep1Page; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__business_step2_business_step2__ = __webpack_require__(354);
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
 * Generated class for the BusinessStep1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var BusinessStep1Page = /** @class */ (function () {
    function BusinessStep1Page(navCtrl, navParams, imagePicker, camera, actionSheetCtrl, sanitizer, splash, base64, validation, file) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.imagePicker = imagePicker;
        this.camera = camera;
        this.actionSheetCtrl = actionSheetCtrl;
        this.sanitizer = sanitizer;
        this.splash = splash;
        this.base64 = base64;
        this.validation = validation;
        this.file = file;
        this.dataArray = {};
        this.allImages = [];
        this.businessForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            selfie: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            otherpics_business: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](),
            company: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            office_address: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            email: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            mobile1: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]),
            mobile2: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].minLength(10), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].maxLength(10)]),
        });
        this.validation_messages = this.validation.validationMessage();
    }
    BusinessStep1Page.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad BusinessStep1Page');
        this.dataArray = this.navParams.get('dataArray');
    };
    BusinessStep1Page.prototype.getPhoto = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'File Manager',
                    icon: 'folder-open',
                    cssClass: 'actionSheetButon',
                    handler: function () {
                        _this.takePicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }],
        });
        actionSheet.present();
    };
    BusinessStep1Page.prototype.takePicture = function (sourceType) {
        var _this = this;
        var options = {
            maximumImagesCount: 3,
            width: 100,
            height: 100,
        };
        this.imagePicker.getPictures(options).then(function (results) {
            for (var i = 0; i < results.length; i++) {
                var filename = results[i].substring(results[i].lastIndexOf('/') + 1);
                var path = results[i].substring(0, results[i].lastIndexOf('/') + 1);
                _this.file.readAsDataURL(path, filename).then(function (base64string) {
                    _this.allImages.push(base64string);
                    console.log('Image URI: ' + results[i]);
                });
            }
        }, function (err) { });
    };
    BusinessStep1Page.prototype.deletePhoto = function (index) {
        this.allImages.splice(index, 1);
    };
    BusinessStep1Page.prototype.getLogo = function (side) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            buttons: [{
                    text: 'File Manager',
                    icon: 'folder-open',
                    cssClass: 'actionSheetButon',
                    handler: function () {
                        _this.selectLogo(_this.camera.PictureSourceType.PHOTOLIBRARY, side);
                        // this.fileChoose(side)
                    }
                }],
        });
        actionSheet.present();
    };
    BusinessStep1Page.prototype.selectLogo = function (sourceType, side) {
        // Create options for the Camera Dialog
        var _this = this;
        var options = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: true,
            correctOrientation: true,
            DestinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            maxiImagesCount: 4 // defaults to 1
        };
        this.camera.getPicture(options).then(function (imagePath) {
            _this.file.resolveLocalFilesystemUrl(imagePath).then(function (fileInfo) {
                var files = fileInfo;
                files.file(function () {
                    // this.fileName = success.name
                    _this.convertImageToBase64(imagePath, side);
                });
            }, function (err) {
                console.log(err);
                throw err;
            });
        });
    };
    BusinessStep1Page.prototype.convertImageToBase64 = function (base64, side) {
        var _this = this;
        this.splash.presentLoading();
        this.base64.encodeFile(base64).then(function (base64File) {
            if (side == 'selfie') {
                _this.selfie = _this.sanitizer.bypassSecurityTrustResourceUrl(base64File);
                _this.splash.dismiss();
            }
        }, function (err) {
            _this.splash.dismiss();
            console.log(err);
        });
    };
    BusinessStep1Page.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    BusinessStep1Page.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.businessForm.valid) {
            this.dataArray['otherpics_business'] = this.allImages,
                this.dataArray['company'] = data.company,
                this.dataArray['office_address'] = data.office_address,
                this.dataArray['email'] = data.email,
                this.dataArray['mobile1'] = data.mobile1,
                this.dataArray['mobile2'] = data.mobile2,
                this.dataArray['business_logo'] = this.selfie.changingThisBreaksApplicationSecurity,
                this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__business_step2_business_step2__["a" /* BusinessStep2Page */], { dataArray: this.dataArray });
        }
        else {
            console.log('form errr');
            Object.keys(this.businessForm.controls).forEach(function (field) {
                var control = _this.businessForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    BusinessStep1Page = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-business-step1',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-step1\business-step1.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n\n\n          <form [formGroup]="businessForm">\n\n            <ion-list class="login-user-info">\n\n              <ion-row class="gender-box">\n\n                <span *ngIf="selfie; else elseBlock">\n\n                  <ion-col  col-4>\n\n                    <div class="document-img-box">\n\n                        <img [src]="selfie">\n\n                    </div>\n\n                  </ion-col>\n\n                </span>\n\n                <ng-template #elseBlock>\n\n                  <ion-col col-4>\n\n                    <div class="document-img-box dotted-border">\n\n                      <button item-end clear ion-button (click)="getLogo(\'selfie\')"><ion-icon name="add">Upload Logo</ion-icon></button>\n\n                    </div>\n\n                  </ion-col>\n\n                </ng-template>\n\n                \n\n            </ion-row>\n\n  \n\n            <ion-input formControlName="selfie" [(ngModel)]="selfie" type="text" hidden></ion-input>\n\n\n\n              <button item-end clear ion-button (click)="getPhoto()"><ion-icon name="add">Upload Other Pics</ion-icon></button>\n\n                <ion-row class="gender-box">\n\n                  <div *ngFor="let pics of allImages">\n\n                    <ion-icon name="md-close" class="deleteIcon" (click)="deletePhoto(id)"></ion-icon>\n\n                    <ion-col>\n\n                      \n\n                      <div class="document-img-box dotted-border">\n\n                        <img [src]="pics">\n\n                      </div>\n\n                    </ion-col>\n\n                  </div>\n\n                </ion-row>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Company Name" ([ngModel])="company" formControlName="company"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="businessForm.get(\'company\').hasError(validation.type) && businessForm.get(\'company\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="text" placeholder="Office Address" ([ngModel])="office_address" formControlName="office_address"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="businessForm.get(\'office_address\').hasError(validation.type) && businessForm.get(\'office_address\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left name="mail"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="email" placeholder="Email Id" ([ngModel])="email" formControlName="email"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.email" >\n\n                  <div *ngIf="businessForm.get(\'email\').hasError(validation.type) && businessForm.get(\'email\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile 1" ([ngModel])="mobile1" formControlName="mobile1"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="businessForm.get(\'mobile1\').hasError(validation.type) && businessForm.get(\'mobile1\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                    <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-input type="number" placeholder="Mobile 2" ([ngModel])="mobile2" formControlName="mobile2"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.mobile" >\n\n                  <div *ngIf="businessForm.get(\'mobile2\').hasError(validation.type) && businessForm.get(\'mobile2\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n               \n\n            </ion-list>\n\n\n\n            <ion-row>\n\n              <ion-col>\n\n                <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n              </ion-col>\n\n              <ion-col>\n\n                <button ion-button round center class="login-btn" (click)="submitDetails(businessForm.value)">Next</button>\n\n              </ion-col>\n\n            </ion-row>\n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\business-details\business-step1\business-step1.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_8__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_base64__["a" /* Base64 */],
            __WEBPACK_IMPORTED_MODULE_9__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */]])
    ], BusinessStep1Page);
    return BusinessStep1Page;
}());

//# sourceMappingURL=business-step1.js.map

/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return JobDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_validation_message_validation_message__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tabs_tabs__ = __webpack_require__(34);
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
 * Generated class for the JobDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var JobDetailsPage = /** @class */ (function () {
    function JobDetailsPage(navCtrl, navParams, api, splash, validation, global) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
        this.splash = splash;
        this.validation = validation;
        this.global = global;
        this.dataArray = {};
        this.jobDetailsForm = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            experience: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            company: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            achievements: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            awards: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            noticePeriod: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            totalExperience: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            currentSalary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required]),
            expectedSalary: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["g" /* Validators */].required])
        });
        this.validation_messages = this.validation.validationMessage();
    }
    JobDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad JobDetailsPage');
        this.dataArray = this.navParams.get('dataArray');
    };
    JobDetailsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    JobDetailsPage.prototype.submitDetails = function (data) {
        var _this = this;
        if (this.jobDetailsForm.valid) {
            this.dataArray['experience'] = data.experience,
                this.dataArray['company'] = data.company,
                this.dataArray['achievements'] = data.achievements,
                this.dataArray['noticePeriod'] = data.noticePeriod,
                this.dataArray['totalExperience'] = data.totalExperience,
                this.dataArray['currentSalary'] = data.currentSalary,
                this.dataArray['expectedSalary'] = data.expectedSalary,
                this.dataArray['awards'] = data.awards;
            this.splash.presentLoading();
            this.api.registration(this.dataArray).subscribe(function (res) {
                if (res.flag == 0) {
                    _this.splash.toast(res.message);
                    // this.global.setUser(res.data)
                }
                else if (res.status == "true") {
                    _this.splash.dismiss();
                    _this.global.setUser(res.userid);
                    _this.splash.toast(res.message);
                    var formdata = new FormData();
                    formdata.append('user_id', res.userid);
                    _this.api.getAccountDetails(formdata).subscribe(function (res) {
                        console.log(res);
                        if (res.status == "true") {
                            _this.global.setUser(res.data.id);
                            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_8__tabs_tabs__["a" /* TabsPage */], { data: res.data });
                        }
                    });
                }
                else if (res.flag == 7) {
                    _this.splash.toast('Registration failed');
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__login_login__["a" /* LoginPage */]);
                }
            });
        }
        else {
            console.log('form errr');
            Object.keys(this.jobDetailsForm.controls).forEach(function (field) {
                var control = _this.jobDetailsForm.get(field);
                control.markAsTouched({ onlySelf: true });
            });
            return;
        }
    };
    JobDetailsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-job-details',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\job-details\job-details.html"*/'<!--\n\n  Generated template for the LoginPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>login</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content padding>\n\n\n\n\n\n  <div class="login-box-section">\n\n      <div class="login-box">\n\n          <form [formGroup]="jobDetailsForm">\n\n            <ion-list class="login-user-info">\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="Experience" ([ngModel])="experience" formControlName="experience"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'experience\').hasError(validation.type) && jobDetailsForm.get(\'experience\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-person" md="md-person"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder=" Current company details" ([ngModel])="company" formControlName="company"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'company\').hasError(validation.type) && jobDetailsForm.get(\'company\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left name="mail"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="Achievements" ([ngModel])="achievements" formControlName="achievements"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'achievements\').hasError(validation.type) && jobDetailsForm.get(\'achievements\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-call" md="md-call"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-input type="text" placeholder="Awards" ([ngModel])="awards" formControlName="awards"></ion-input>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'awards\').hasError(validation.type) && jobDetailsForm.get(\'awards\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                    <ion-label>\n\n                        <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                    </ion-label>\n\n                    <ion-select interface="popover" placeholder="Notice Period" ([ngModel])="noticePeriod" formControlName="noticePeriod">\n\n                        <ion-option value="1 Month">1 Month</ion-option>\n\n                        <ion-option value="2 Month">2 Month</ion-option>\n\n                        <ion-option value="3 Month">3 Month</ion-option>\n\n                        <ion-option value="4 Month">4 Month</ion-option>\n\n                        <ion-option value="5 Month">5 Month</ion-option>\n\n                        <ion-option value="6 Month">6 Month</ion-option>\n\n\n\n                    </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'noticePeriod\').hasError(validation.type) && jobDetailsForm.get(\'noticePeriod\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Total Experience" ([ngModel])="totalExperience" formControlName="totalExperience">\n\n                      <ion-option value="less than 1 Year">Less than 1 year</ion-option>\n\n                      <ion-option value="1 year">1 Year</ion-option>\n\n                      <ion-option value="2 year">2 Year</ion-option>\n\n                      <ion-option value="3 year">3 Year</ion-option>\n\n                      <ion-option value="4 year">4 Year</ion-option>\n\n                      <ion-option value="5 year">5 Year</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'totalExperience\').hasError(validation.type) && jobDetailsForm.get(\'totalExperience\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Current Salary" ([ngModel])="currentSalary" formControlName="currentSalary">\n\n                      <ion-option value="In Lac">In Lac</ion-option>\n\n                      <ion-option value="In Thousand">In Thousand</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'currentSalary\').hasError(validation.type) && jobDetailsForm.get(\'currentSalary\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n                <ion-item>\n\n                  <ion-label>\n\n                      <ion-icon item-left ios="ios-transgender" md="md-transgender"></ion-icon>\n\n                  </ion-label>\n\n                  <ion-select interface="popover" placeholder="Expected Salary" ([ngModel])="expectedSalary" formControlName="expectedSalary">\n\n                      <ion-option value="In Lac">In Lac</ion-option>\n\n                      <ion-option value="In Thousand">In Thousand</ion-option>\n\n\n\n                  </ion-select>\n\n                </ion-item>\n\n                <div *ngFor="let validation of validation_messages.commonmessage" >\n\n                  <div *ngIf="jobDetailsForm.get(\'expectedSalary\').hasError(validation.type) && jobDetailsForm.get(\'expectedSalary\').touched">\n\n                    <div class="error-message">{{validation.message}}</div>\n\n                  </div>\n\n                </div>\n\n\n\n            </ion-list>\n\n\n\n            <ion-row>\n\n                <ion-col>\n\n                  <button ion-button start round center class="login-btn" (click)="goBack()">Prev</button>\n\n                </ion-col>\n\n                <ion-col>\n\n                  <button ion-button round center class="login-btn" (click)="submitDetails(jobDetailsForm.value)">Next</button>\n\n                </ion-col>\n\n              </ion-row>\n\n        </form>\n\n      </div>\n\n  </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\job-details\job-details.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_4__providers_service_service__["a" /* ServiceProvider */], __WEBPACK_IMPORTED_MODULE_5__providers_splash_splash__["a" /* SplashProvider */], __WEBPACK_IMPORTED_MODULE_6__providers_validation_message_validation_message__["a" /* ValidationMessageProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_global_service_global_service__["a" /* GlobalServiceProvider */]])
    ], JobDetailsPage);
    return JobDetailsPage;
}());

//# sourceMappingURL=job-details.js.map

/***/ }),

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_service_service__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_info_user_info__ = __webpack_require__(121);
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
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, api) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.api = api;
    }
    SearchPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.userType = this.navParams.get('userType');
        console.log(this.userType);
        if (this.userType == 1) {
            this.api.getUserList().subscribe(function (res) {
                if (res.status == "true") {
                    _this.userList = res.data;
                    console.log('Search Result ', _this.userList);
                }
            });
        }
        else if (this.userType == 2) {
            this.api.getBusinessUsers().subscribe(function (res) {
                if (res.status == "true") {
                    _this.userList = res.data;
                    console.log('Search Result ', _this.userList);
                }
            });
        }
        else if (this.userType == 3) {
            this.api.getMatrimonyUsers().subscribe(function (res) {
                if (res.status == "true") {
                    _this.userList = res.data;
                    console.log('Search Result ', _this.userList);
                }
            });
        }
        setTimeout(function () {
            _this.searchbar.setFocus();
        }, 600);
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage.prototype.searchUser = function (ev) {
        var val = ev.target.value;
        if (val && val.trim() != '') {
            if (this.userList) {
                this.searchedUsers = this.userList.filter(function (item) {
                    return (item.firstname.toLowerCase().indexOf(val.toLowerCase()) > -1 ||
                        item.lastname.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
            }
        }
        else {
            this.searchedUsers = undefined;
        }
    };
    SearchPage.prototype.userDetails = function (id) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__user_user_info_user_info__["a" /* UserInfoPage */], {
            id: id
        });
    };
    SearchPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* Searchbar */])
    ], SearchPage.prototype, "searchbar", void 0);
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\search\search.html"*/'<!--\n\n  Generated template for the SearchPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<!-- <ion-header>\n\n  <ion-navbar>\n\n    <ion-title>search</ion-title>\n\n  </ion-navbar>\n\n</ion-header> -->\n\n\n\n<ion-content>\n\n  <div class="search-box">\n\n    <ion-searchbar (ionInput)="searchUser($event)" #searchbar></ion-searchbar>\n\n    <button ion-button clear icon-only small class="cancelbtn" (click)="goBack()">\n\n      <ion-icon name="close"></ion-icon>\n\n    </button>\n\n  </div>\n\n \n\n<div class="pad-page-10 mrg-t-65">\n\n    <ion-grid class="">\n\n        <ion-row *ngFor="let item of searchedUsers">\n\n            <div class="new-box">\n\n                <div class="new-img-box" (click)="userDetails(item.id)">\n\n                    <div class="img-box">\n\n                      <img src="assets/imgs/new-img-1.jpg">\n\n                    </div>\n\n\n\n                    <div class="new-cuntent-box">\n\n                      <h3>{{item.firstname}}</h3>\n\n                      <div class="date-box"> </div>\n\n                    </div>\n\n                </div>\n\n\n\n            </div>\n\n        </ion-row>\n\n    </ion-grid>\n\n\n\n\n\n</div>\n\n</ion-content>\n\n'/*ion-inline-end:"E:\IONIC App\ionic3 project 2020\Portfolio\Matrimonial_App\src\pages\search\search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_service_service__["a" /* ServiceProvider */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

},[374]);
//# sourceMappingURL=main.js.map