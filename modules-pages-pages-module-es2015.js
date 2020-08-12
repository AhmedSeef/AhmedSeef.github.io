(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-pages-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-category/add-category.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-category/add-category.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">Add Ctegory</p>\r\n  \r\n      <form #catForm=\"ngForm\" (ngSubmit)=\"addCategory()\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Category name\" type=\"text\" name=\"name\" [(ngModel)]=\"category.name\"\r\n          required #name=\"ngModel\">         \r\n        </div>\r\n\r\n        <div class=\"row\">         \r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-exam/add-exam.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-exam/add-exam.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">Add Exam</p>\r\n  \r\n      <form #catForm=\"ngForm\" (ngSubmit)=\"addExam()\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"exam title\" type=\"text\" name=\"title\" [(ngModel)]=\"model.title\"\r\n          required #title=\"ngModel\">         \r\n        </div>\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"exam duration\" type=\"number\" name=\"duration\" [(ngModel)]=\"model.duration\"\r\n          required #duration=\"ngModel\">         \r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"exam mark\" type=\"number\" name=\"mark\" [(ngModel)]=\"model.mark\"\r\n          required #mark=\"ngModel\">         \r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"exam notes\" type=\"text\" name=\"notes\" [(ngModel)]=\"model.notes\"\r\n          required #notes=\"ngModel\">         \r\n        </div>\r\n        <div class=\"row\">         \r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-material/add-material.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-material/add-material.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-box\">\r\n  <div class=\"register-box-body\">\r\n    <p class=\"login-box-msg\">Add Subject</p>\r\n\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"addMaterial()\" enctype=\"multipart/form-data\">\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\"\r\n          tabindex=\"-1\" aria-hidden=\"true\" name=\"subject\" [(ngModel)]=\"model.subject\" required #subject=\"ngModel\"\r\n          (change)=\"setSubject($event.target.value)\">\r\n          <option [value]=\"0\" disabled>Select subject</option>\r\n          <option *ngFor=\"let subject of subjects\" [value]=\"subject.id\">\r\n            {{subject.name}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"title\" type=\"text\" name=\"title\" [(ngModel)]=\"model.title\"\r\n        required #title=\"ngModel\">         \r\n      </div>\r\n\r\n      \r\n      <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\">\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"notes\" type=\"text\" name=\"notes\" [(ngModel)]=\"model.notes\"\r\n        required #notes=\"ngModel\">         \r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        <!-- /.col -->\r\n        <div class=\"col-xs-4 col-md-6\">\r\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- /.form-box -->\r\n</div>\r\n\r\n<div class=\"loader\" [hidden]=\"loaderHidden\"></div> \r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-parent/add-parent.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-parent/add-parent.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">Register a new parent</p>\r\n  \r\n      <form action=\"../../index.html\" method=\"post\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"S S N\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-addon\">\r\n              <i class=\"fa fa-calendar\"></i>\r\n            </div>\r\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Adress\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n            <input class=\"form-control\" placeholder=\"Job\" type=\"text\">\r\n            <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n          </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Retype password\" type=\"password\">\r\n          <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\r\n        </div>\r\n        <div class=\"row\">         \r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Register</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-question/add-question.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-question/add-question.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\r\n  <div class=\"col-sm-12\">\r\n    <div class=\"row\">\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">code</th>\r\n            <th scope=\"col\">title</th>\r\n            <th scope=\"col\">duration</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr>\r\n            <th scope=\"row\">{{exam.id}}</th>\r\n            <td>{{exam.title}}</td>\r\n            <td>{{exam.duration}} hours</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    <div class=\"row\">\r\n\r\n    </div>\r\n    <div class=\"row\">\r\n      <br> <br>\r\n      <h2>exam questions</h2>\r\n      <table class=\"table\">\r\n        <thead>\r\n          <tr>\r\n            <th scope=\"col\">code</th>\r\n            <th scope=\"col\">title</th>\r\n            <th scope=\"col\">mark</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let que of questions\">\r\n            <th scope=\"row\">{{que.id}}</th>\r\n            <td>{{que.content}}</td>\r\n            <td>{{que.mark}}</td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n      <div class=\"register-box\">\r\n        <div class=\"register-box-body\">\r\n          <p class=\"login-box-msg\">Add Question</p>\r\n\r\n          <form #question=\"ngForm\" (ngSubmit)=\"addQuestion()\">\r\n            <div class=\"form-group has-feedback\">\r\n              <input class=\"form-control\" placeholder=\"question content\" type=\"text\" name=\"content\"\r\n                [(ngModel)]=\"model.content\" minlength=\"5\" required #content=\"ngModel\">\r\n              <div *ngIf=\"!content.valid && (content.touched ||content.dirty )\" class=\"alert-danger\">\r\n                <div *ngIf=\"content?.errors.minlength\">\r\n                  Name must be at least 5 characters long.\r\n                </div>\r\n                <div *ngIf=\"content?.errors.required\">\r\n                  content must entered.\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-group has-feedback\">\r\n              <input class=\"form-control\" placeholder=\"question mark\" type=\"number\" name=\"mark\" [(ngModel)]=\"model.mark\"\r\n                required #mark=\"ngModel\">\r\n            </div>\r\n            <div *ngIf=\"!mark.valid && (mark.touched ||mark.dirty )\" class=\"alert-danger\">\r\n              \r\n              <div *ngIf=\"mark?.errors.required\">\r\n                mark must entered.\r\n              </div>\r\n            </div>\r\n            <!-- /.col -->\r\n            <div class=\"col-xs-4 col-md-6\">\r\n              <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\"\r\n              [disabled]=\"!question.valid\">Add</button>\r\n            </div>\r\n            <!-- /.col -->\r\n\r\n          </form>\r\n        </div>\r\n        <!-- /.form-box -->\r\n      </div>\r\n      <!-- /.register-box -->\r\n    </div>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-stage/add-stage.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-stage/add-stage.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">Add Stage</p>\r\n  \r\n      <form #catForm=\"ngForm\" (ngSubmit)=\"addStage()\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"satge name\" type=\"text\" name=\"name\" [(ngModel)]=\"stage.name\"\r\n          required #name=\"ngModel\">         \r\n        </div>\r\n\r\n        <div class=\"row\">         \r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-student/add-student.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-student/add-student.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">Register a new student</p>\r\n  \r\n      <form action=\"../../index.html\" method=\"post\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"S S N\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n            <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\" tabindex=\"-1\" aria-hidden=\"true\">\r\n                <option selected=\"selected\" data-select2-id=\"3\">select parent</option>\r\n                <option>Alaska</option>\r\n                <option>California</option>\r\n                <option>Delaware</option>\r\n                <option>Tennessee</option>\r\n                <option>Texas</option>\r\n                <option>Washington</option>\r\n              </select>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-addon\">\r\n              <i class=\"fa fa-calendar\"></i>\r\n            </div>\r\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Adress\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Retype password\" type=\"password\">\r\n          <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\r\n        </div>\r\n        <div class=\"row\">         \r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Register</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-subject/add-subject.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-subject/add-subject.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">Add Subject</p>\r\n  \r\n      <form #registerForm=\"ngForm\" (ngSubmit)=\"addSubject()\">\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"subject name\" type=\"text\" name=\"name\" [(ngModel)]=\"subject.name\"\r\n          required #name=\"ngModel\">         \r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n            <input class=\"form-control\" placeholder=\"credit hour\" type=\"number\" min=\"0\"\r\n            name=\"credit_hours\" [(ngModel)]=\"subject.credit_hours\" required #credit_hours=\"ngModel\">         \r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n            <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\" tabindex=\"-1\" aria-hidden=\"true\"\r\n            name=\"stage\" [(ngModel)]=\"subject.stage\" required #stage=\"ngModel\" (change)=\"setStage($event.target.value)\">\r\n            <option [value]=\"0\" disabled>Select  satge</option>\r\n            <option *ngFor=\"let stage of satges\" [value]=\"stage.id\">\r\n              {{stage.name}}\r\n            </option>               \r\n              </select>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\" tabindex=\"-1\" aria-hidden=\"true\"\r\n          name=\"category\" [(ngModel)]=\"subject.category\" required #category=\"ngModel\" (change)=\"setcategory($event.target.value)\" >\r\n          <option [value]=\"0\" disabled>Select  category</option>\r\n          <option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n            {{category.name}}\r\n          </option>                            \r\n            </select>\r\n      </div>\r\n\r\n        <div class=\"row\">         \r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-teacher/add-teacher.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-teacher/add-teacher.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">Register a new teacher</p>\r\n  \r\n      <form action=\"../../index.html\" method=\"post\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"S S N\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-addon\">\r\n              <i class=\"fa fa-calendar\"></i>\r\n            </div>\r\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\">\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Adress\" type=\"text\">\r\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\r\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\r\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n        </div>\r\n\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Retype password\" type=\"password\">\r\n          <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\r\n        </div>\r\n        <div class=\"row\">         \r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Register</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-user/add-user.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-user/add-user.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-box\">\r\n  <div class=\"register-box-body\">\r\n    <p class=\"login-box-msg\">Register a new membership Admin</p>\r\n\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"register()\">\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"user name\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"\r\n          required #username=\"ngModel\">\r\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n      </div>\r\n\r\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n\r\n        <div *ngIf=\"username.errors.required\">\r\n          User Name is required.\r\n        </div>\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group\">\r\n        <select class=\"form-control\" name=\"user_type\" (change)=\"selected($event.target.value)\"\r\n          [(ngModel)]=\"user.user_type\" required  #user_type=\"ngModel\" >\r\n          <option disabled [value]=\"0\">select user type</option>\r\n          <option [value]='1'>ADMIN</option>\r\n          <option [value]=\"2\"> STUDENT</option>\r\n          <option [value]=\"3\">PARENT</option>\r\n          <option [value]=\"4\">TEACHER</option>\r\n        </select>\r\n      </div>\r\n      <div *ngIf=\"user_type.invalid && (user_type.dirty || user_type.touched)\" class=\"alert alert-danger\">\r\n\r\n        <div *ngIf=\"user_type.errors.required\">\r\n          User Type is required.\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"First name\" type=\"text\" name=\"first_name\"\r\n          [(ngModel)]=\"user.first_name\">\r\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"Last name\" type=\"text\" name=\"last_name\" [(ngModel)]=\"user.last_name\">\r\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"Email\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\">\r\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\" name=\"phone\" [(ngModel)]=\"user.phone\">\r\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fa fa-calendar\"></i>\r\n          </div>\r\n          <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'yyyy/dd/mm/'\" data-mask=\"\" name=\"birth_date\"\r\n            [(ngModel)]=\"user.birth_date\" required #birth_date=\"ngModel\"> \r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf=\"birth_date.invalid && (birth_date.dirty || birth_date.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"birth_date.errors.required\">\r\n          User Name is required.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"Address\" type=\"text\" name=\"adress\" [(ngModel)]=\"user.adress\">\r\n        <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\r\n      </div>\r\n\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"Password\" type=\"password\" name=\"password\" \r\n        [(ngModel)]=\"user.password\"  required #password=\"ngModel\">\r\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n      </div>\r\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"password.errors.required\">\r\n          User Name is required.\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [hidden]=\"studentHidden\">\r\n        <select class=\"form-control\" name=\"stage_id\" \r\n          [(ngModel)]=\"user.stage\">\r\n          <option [value]=\"0\" selected>select student stage</option>\r\n          <option *ngFor=\"let stage of stages\" [value]=\"stage.id\">\r\n            {{stage.name}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group\" [hidden]=\"teacherHidden\">\r\n        <select class=\"form-control\" name=\"category\" (change)=\"setcategory($event.target.value)\"\r\n          [(ngModel)]=\"user.category\">\r\n          <option [value]=\"0\" selected>select category</option>\r\n          <option *ngFor=\"let category of categories\" [value]=\"category.id\">\r\n            {{category.name}}\r\n          </option>\r\n        </select>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\" [hidden]=\"teacherHidden\">\r\n        <div class=\"input-group\">\r\n          <div class=\"input-group-addon\">\r\n            <i class=\"fa fa-calendar\"></i>\r\n          </div>\r\n          <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\" name=\"hire_date\"\r\n            [(ngModel)]=\"user.hire_date\">\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group has-feedback\" [hidden]=\"parentHidden\">\r\n        <input class=\"form-control\" placeholder=\"job\" type=\"text\" name=\"job\" [(ngModel)]=\"user.job\">\r\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\">\r\n        <!-- /.col -->\r\n        <div class=\"col-xs-4 col-md-6\">\r\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\" \r\n         [disabled]=\"!registerForm.valid\">Register</button>\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n  <!-- /.form-box -->\r\n</div>\r\n<!-- /.register-box -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"register-box\">\r\n  <div class=\"register-box-body\">\r\n    <p class=\"login-box-msg\">Add Subject</p>\r\n\r\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"addMaterial()\" enctype=\"multipart/form-data\">\r\n\r\n     \r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"title\" type=\"text\" name=\"title\" [(ngModel)]=\"model.title\"\r\n        required #title=\"ngModel\">         \r\n      </div>\r\n\r\n      \r\n      <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\">\r\n\r\n      <div class=\"form-group has-feedback\">\r\n        <input class=\"form-control\" placeholder=\"notes\" type=\"text\" name=\"notes\" [(ngModel)]=\"model.notes\"\r\n        required #notes=\"ngModel\">         \r\n      </div>\r\n\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        <!-- /.col -->\r\n        <div class=\"col-xs-4 col-md-6\">\r\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\r\n        </div>\r\n        <!-- /.col -->\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <!-- /.form-box -->\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/category-list/category-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/category-list/category-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<br>\r\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addcategory')\">create category</button>\r\n<br> <br> <br>\r\n<div class=\"box\">\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                        aria-describedby=\"example1_info\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-sort=\"ascending\"\r\n                                    aria-label=\"user name: activate to sort column descending\"\r\n                                    style=\"width: 182px;\">id</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    name</th>\r\n                                \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let cat of categories\">\r\n                                <td class=\"sorting_1\">{{cat.id}}</td>\r\n                                <td>{{cat.name}}</td>                                \r\n                                <!-- <td>\r\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\r\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\r\n                                </td> -->\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                \r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dash-board/dash-board.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dash-board/dash-board.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"content-header\">\r\n  <!-- <h1>\r\n    Blank page\r\n    <small>it all starts here</small>\r\n  </h1>\r\n  <ol class=\"breadcrumb\">\r\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\r\n    <li><a href=\"#\">Examples</a></li>\r\n    <li class=\"active\">Blank page</li>\r\n  </ol> -->\r\n</section>\r\n\r\n<!-- Main content -->\r\n<section class=\"content\">\r\n\r\n  <router-outlet></router-outlet>\r\n\r\n\r\n</section>\r\n<!-- /.content -->\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/exam-list/exam-list.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/exam-list/exam-list.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addexam')\">create exam</button> \r\n<br> <br> <br>\r\n<div class=\"box\">\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                        aria-describedby=\"example1_info\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-sort=\"ascending\"\r\n                                    aria-label=\"user name: activate to sort column descending\"\r\n                                    style=\"width: 182px;\">id</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"title: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    title</th>\r\n                                \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let exam of exams\">\r\n                                <td class=\"sorting_1\">{{exam.id}}</td>\r\n                                <td>{{exam.title}}</td>                                \r\n                                <td>                                   \r\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"select(exam)\">add questions</button>\r\n                                </td> \r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                \r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/material-list/material-list.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/material-list/material-list.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addmaterial')\">create Material</button>\r\n<br> <br> <br>\r\n\r\n\r\n  <div class=\"box\">\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                        aria-describedby=\"example1_info\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-sort=\"ascending\"\r\n                                    aria-label=\"user name: activate to sort column descending\"\r\n                                    style=\"width: 182px;\">id</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    name</th>\r\n                                \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let material of materials\">\r\n                                <td class=\"sorting_1\">{{material.title}}</td>\r\n                                <td><a href=\"{{material.path}}\" download>Download the file</a></td>  \r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                \r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages/pages.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages/pages.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <app-header></app-header>\r\n   <app-side-nav></app-side-nav> \r\n  <div class=\"content-wrapper\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n  \r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"box\">\r\n  <!-- /.box-header -->\r\n  <div class=\"box-body\">\r\n      <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n          \r\n          <div class=\"row\">\r\n              <div class=\"col-sm-12\">\r\n                  <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                      aria-describedby=\"example1_info\">\r\n                      <thead>\r\n                          <tr role=\"row\">\r\n                              <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                  aria-sort=\"ascending\"\r\n                                  aria-label=\"user name: activate to sort column descending\"\r\n                                  style=\"width: 182px;\">id</th>\r\n                              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                  aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                  name</th>\r\n                              \r\n                          </tr>\r\n                      </thead>\r\n                      <tbody>\r\n                          <tr role=\"row\" class=\"even\" *ngFor=\"let subject of subjects\">\r\n                              <td class=\"sorting_1\">{{subject.id}}</td>\r\n                              <td>{{subject.name}}</td>                                \r\n                              <td>                                   \r\n                                  <button type=\"button\" class=\"btn btn-success\"  [routerLink]=\"['../subjectMaterials/',subject.id]\">get materials</button>\r\n                                  <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['../addSubjectMaterials/',subject.id]\"\r\n                                  *ngIf=\"checkRule('TECH')==true\">add materials</button>\r\n                              </td> \r\n                          </tr>\r\n                      </tbody>\r\n                      <tfoot>\r\n                          <tr>\r\n                              \r\n                          </tr>\r\n                      </tfoot>\r\n                  </table>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/stage-List/stage-List.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/stage-List/stage-List.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<br>\r\n<br>\r\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addstage')\">create satge</button>\r\n<br> <br> <br>\r\n<div class=\"box\">\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                        aria-describedby=\"example1_info\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-sort=\"ascending\"\r\n                                    aria-label=\"user name: activate to sort column descending\"\r\n                                    style=\"width: 182px;\">id</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    name</th>\r\n                                \r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let satge of stages\">\r\n                                <td class=\"sorting_1\">{{satge.id}}</td>\r\n                                <td>{{satge.name}}</td>                                \r\n                                <!-- <td>\r\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\r\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\r\n                                </td> -->\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                \r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subject-list/subject-list.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subject-list/subject-list.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<br>\r\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addsubject')\">create subject</button>\r\n<br> <br> <br>\r\n<div class=\"box\">\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                        aria-describedby=\"example1_info\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-sort=\"ascending\" aria-label=\"user name: activate to sort column descending\"\r\n                                    style=\"width: 182px;\">id</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    name</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"stage: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    stage</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"category: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    category</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"credit_hours: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    credit_hours</th>\r\n\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let subject of subjects\">\r\n                                <td class=\"sorting_1\">{{subject.id}}</td>\r\n                                <td>{{subject.name}}</td>\r\n                                <td>{{subject.category.name}}</td>\r\n                                <td>{{subject.stage.name}}</td>\r\n                                <td>{{subject.credit_hours}}</td>\r\n\r\n                                <!-- <td>\r\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\r\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\r\n                                </td> -->\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            <tr>\r\n                                <th rowspan=\"1\" colspan=\"1\">id</th>\r\n                                <th rowspan=\"1\" colspan=\"1\">name</th>\r\n\r\n                            </tr>\r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subjectMaterials/subjectMaterials.component.html":
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subjectMaterials/subjectMaterials.component.html ***!
  \**********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/update-user/update-user.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/update-user/update-user.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br><br>\r\n<br><br>\r\n\r\n\r\n<div class=\"register-box\">    \r\n    <div class=\"register-box-body\">\r\n      <p class=\"login-box-msg\">update user</p>\r\n  \r\n      <form #registerForm=\"ngForm\" (ngSubmit)=\"update()\">\r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"user name\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"\r\n            required #username=\"ngModel\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n  \r\n        <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\r\n  \r\n          <div *ngIf=\"username.errors.required\">\r\n            User Name is required.\r\n          </div>\r\n  \r\n        </div>\r\n  \r\n  \r\n        <div class=\"form-group\">\r\n          <select class=\"form-control\" name=\"user_type\" (change)=\"selected($event.target.value)\"\r\n            [(ngModel)]=\"user.user_type\" required  #user_type=\"ngModel\" >\r\n            <option disabled selected>select user type</option>\r\n            <option [value]='1'>ADMIN</option>\r\n            <option [value]=\"2\"> STUDENT</option>\r\n            <option [value]=\"3\">PARENT</option>\r\n            <option [value]=\"4\">TEACHER</option>\r\n          </select>\r\n        </div>\r\n        <div *ngIf=\"user_type.invalid && (user_type.dirty || user_type.touched)\" class=\"alert alert-danger\">\r\n  \r\n          <div *ngIf=\"user_type.errors.required\">\r\n            User Type is required.\r\n          </div>\r\n  \r\n        </div>\r\n  \r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\" name=\"first_name\"\r\n            [(ngModel)]=\"user.first_name\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n  \r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\" name=\"last_name\" [(ngModel)]=\"user.last_name\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n  \r\n  \r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\">\r\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\r\n        </div>\r\n  \r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\" name=\"phone\" [(ngModel)]=\"user.phone\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n  \r\n        <div class=\"form-group has-feedback\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-addon\">\r\n              <i class=\"fa fa-calendar\"></i>\r\n            </div>\r\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'yyyy/dd/mm/'\" data-mask=\"\" name=\"birth_date\"\r\n              [(ngModel)]=\"user.birth_date\" required #birth_date=\"ngModel\"> \r\n          </div>\r\n        </div>\r\n  \r\n        <div *ngIf=\"birth_date.invalid && (birth_date.dirty || birth_date.touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"birth_date.errors.required\">\r\n            User Name is required.\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Address\" type=\"text\" name=\"adress\" [(ngModel)]=\"user.adress\">\r\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\r\n        </div>\r\n  \r\n  \r\n        <div class=\"form-group has-feedback\">\r\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\" name=\"password\" \r\n          [(ngModel)]=\"user.password\"  required #password=\"ngModel\">\r\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\r\n        </div>\r\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\r\n          <div *ngIf=\"password.errors.required\">\r\n            User Name is required.\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group\" [hidden]=\"studentHidden\">\r\n          <select class=\"form-control\" name=\"stage_id\" (change)=\"slectSatge($event.target.value)\"\r\n            [(ngModel)]=\"user.stage\">\r\n            <option [value]=\"0\" selected>select student stage</option>\r\n            <option *ngFor=\"let stage of stages\" [value]=\"stage.id\" [selected]=\"stage.id\">\r\n              {{stage.name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n  \r\n        <div class=\"form-group\" [hidden]=\"teacherHidden\">\r\n          <select class=\"form-control\" name=\"category\" (change)=\"selected($event.target.value)\"\r\n            [(ngModel)]=\"user.category\">\r\n            <option [value]=\"0\" selected>select category</option>\r\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\" [selected]=\"category.id\">\r\n              {{category.name}}\r\n            </option>\r\n          </select>\r\n        </div>\r\n  \r\n        <div class=\"form-group has-feedback\" [hidden]=\"teacherHidden\">\r\n          <div class=\"input-group\">\r\n            <div class=\"input-group-addon\">\r\n              <i class=\"fa fa-calendar\"></i>\r\n            </div>\r\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\" name=\"hire_date\"\r\n              [(ngModel)]=\"user.hire_date\">\r\n          </div>\r\n        </div>\r\n  \r\n        <div class=\"form-group has-feedback\" [hidden]=\"parentHidden\">\r\n          <input class=\"form-control\" placeholder=\"job\" type=\"text\" name=\"job\" [(ngModel)]=\"user.job\">\r\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\r\n        </div>\r\n  \r\n  \r\n        <div class=\"row\">\r\n          <!-- /.col -->\r\n          <div class=\"col-xs-4 col-md-6\">\r\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\" \r\n           [disabled]=\"!registerForm.valid\">Register</button>\r\n          </div>\r\n          <!-- /.col -->\r\n        </div>\r\n  \r\n  \r\n      </form>    \r\n    </div>\r\n    <!-- /.form-box -->\r\n  </div>\r\n  <!-- /.register-box -->\r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/user-subj/user-subj.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/user-subj/user-subj.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<br>\r\n<div class=\"form-group\" >\r\n    <select class=\"form-control\">\r\n      <option [value]=\"0\" selected>add subject</option>\r\n      <option *ngFor=\"let subject of subjects\" [value]=\"subject.id\" (click) = \"add(subject)\"> \r\n        {{subject.name}}\r\n      </option>\r\n    </select>\r\n  </div>\r\n\r\n<div class=\"box\">\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                        aria-describedby=\"example1_info\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-sort=\"ascending\" aria-label=\"user name: activate to sort column descending\"\r\n                                    style=\"width: 182px;\">id</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    name</th>\r\n                                <th>\r\n\r\n                                </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let subject of userSubjects\">\r\n                                <td class=\"sorting_1\">{{subject.id}}</td>\r\n                                <td>{{subject.name}}</td>\r\n                                \r\n                                <td>\r\n                                    <button class=\"danger\" (click)=\"remove(subject.name)\">Delete</button>\r\n                                </td>\r\n                                \r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                           \r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"row\">\r\n        <button class=\"btn btn-success\" (click)=\"save()\">Save</button>\r\n    </div>\r\n    <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/users-list.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/users-list.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\r\n<br>\r\n<br>\r\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/adduser')\">create user</button>\r\n<br> <br> <br>\r\n<div class=\"box\">\r\n    <!-- /.box-header -->\r\n    <div class=\"box-body\">\r\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\r\n            \r\n            <div class=\"row\">\r\n                <div class=\"col-sm-12\">\r\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\r\n                        aria-describedby=\"example1_info\">\r\n                        <thead>\r\n                            <tr role=\"row\">\r\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-sort=\"ascending\"\r\n                                    aria-label=\"user name: activate to sort column descending\"\r\n                                    style=\"width: 182px;\">user name</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"email: activate to sort column ascending\" style=\"width: 225px;\">\r\n                                    email</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"user type: activate to sort column ascending\" style=\"width: 199px;\">\r\n                                    user type</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"is superuser: activate to sort column ascending\"\r\n                                    style=\"width: 156px;\">is superuser</th>\r\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\r\n                                    aria-label=\"CSS grade: activate to sort column ascending\" style=\"width: 113px;\">Actions\r\n                                    </th>\r\n                            </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let user of users\">\r\n                                <td class=\"sorting_1\">{{user.username}}</td>\r\n                                <td>{{user.email}}</td>\r\n                                <td>{{user.user_type}}</td>\r\n                                <td>{{user.is_superuser}}</td>\r\n                                <td>\r\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\r\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\r\n                                    <a type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/home/user-subj', user.id]\">subjects</a>\r\n                                </td>\r\n                            </tr>\r\n                        </tbody>\r\n                        <tfoot>\r\n                            \r\n                        </tfoot>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- /.box-body -->\r\n</div>");

/***/ }),

/***/ "./src/app/Service/category.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/category.service.ts ***!
  \*********************************************/
/*! exports provided: CategoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryService", function() { return CategoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let CategoryService = class CategoryService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://smart-school-project.herokuapp.com/api/categorys/";
        this.token = JSON.parse(localStorage.getItem('token'));
        this.headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "token " + this.token
        });
        this.httpOptions = {
            headers: this.headers_object
        };
    }
    getListCategories() {
        return this.http.get(this.baseUrl, this.httpOptions);
    }
    addCategory(category) {
        return this.http.post(this.baseUrl, category, this.httpOptions);
    }
};
CategoryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CategoryService);



/***/ }),

/***/ "./src/app/Service/exams.service.ts":
/*!******************************************!*\
  !*** ./src/app/Service/exams.service.ts ***!
  \******************************************/
/*! exports provided: ExamsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamsService", function() { return ExamsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let ExamsService = class ExamsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://smart-school-project.herokuapp.com/api/exams/";
        this.token = JSON.parse(localStorage.getItem('token'));
        this.headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "token " + this.token
        });
        this.httpOptions = {
            headers: this.headers_object
        };
    }
    addExam(exam) {
        return this.http.post(this.baseUrl, exam, this.httpOptions);
    }
    getExam(id) {
        return this.http.get(this.baseUrl + id, this.httpOptions);
    }
    getAllExam() {
        return this.http.get(this.baseUrl, this.httpOptions);
    }
    addQuestions(id, question) {
        return this.http.post(this.baseUrl + id + "/addQuestions/", question, this.httpOptions);
    }
    getExamQuestions(id) {
        return this.http.get(this.baseUrl + id + "/questions", this.httpOptions);
    }
};
ExamsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ExamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ExamsService);



/***/ }),

/***/ "./src/app/Service/material.service.ts":
/*!*********************************************!*\
  !*** ./src/app/Service/material.service.ts ***!
  \*********************************************/
/*! exports provided: MaterialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialService", function() { return MaterialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let MaterialService = class MaterialService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://smart-school-project.herokuapp.com/api/materials/";
        this.token = JSON.parse(localStorage.getItem('token'));
        this.headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "token " + this.token
        });
        this.headers_object.append('enctype', 'multipart/form-data');
        this.headers_object.set('Content-Type', 'false');
        this.headers_object.set('mimeType', 'application/json');
        this.httpOptions = {
            headers: this.headers_object
        };
    }
    getList() {
        return this.http.get(this.baseUrl, this.httpOptions);
    }
    save(material) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "Token " + this.token);
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: material,
        };
        return fetch("https://smart-school-project.herokuapp.com/api/materials/", requestOptions);
    }
};
MaterialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
MaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MaterialService);



/***/ }),

/***/ "./src/app/Service/satges.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Service/satges.service.ts ***!
  \*******************************************/
/*! exports provided: SatgesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SatgesService", function() { return SatgesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SatgesService = class SatgesService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://smart-school-project.herokuapp.com/api/stages/";
        this.token = JSON.parse(localStorage.getItem('token'));
        this.headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "token " + this.token
        });
        this.httpOptions = {
            headers: this.headers_object
        };
    }
    getListStages() {
        return this.http.get(this.baseUrl, this.httpOptions);
    }
    addStage(satge) {
        return this.http.post(this.baseUrl, satge, this.httpOptions);
    }
};
SatgesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SatgesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SatgesService);



/***/ }),

/***/ "./src/app/Service/sbject.service.ts":
/*!*******************************************!*\
  !*** ./src/app/Service/sbject.service.ts ***!
  \*******************************************/
/*! exports provided: SbjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SbjectService", function() { return SbjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let SbjectService = class SbjectService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://smart-school-project.herokuapp.com/api/subjects/";
        this.token = JSON.parse(localStorage.getItem('token'));
        this.headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "token " + this.token
        });
        this.httpOptions = {
            headers: this.headers_object
        };
    }
    getListSubjects() {
        return this.http.get(this.baseUrl, this.httpOptions);
    }
    addSsubject(subject) {
        return this.http.post(this.baseUrl, subject, this.httpOptions);
    }
    getUserSubjects(id) {
        return this.http.get("https://smart-school-project.herokuapp.com/api/users/" + id + "/subjects", this.httpOptions);
    }
    getSubjectMAterial(id) {
        return this.http.get("https://smart-school-project.herokuapp.com/api/subjects/" + id + "/materials", this.httpOptions);
    }
};
SbjectService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
SbjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SbjectService);



/***/ }),

/***/ "./src/app/Service/user-list.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Service/user-list.service.ts ***!
  \**********************************************/
/*! exports provided: UserListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListService", function() { return UserListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserListService = class UserListService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://smart-school-project.herokuapp.com/api/";
        this.token = JSON.parse(localStorage.getItem('token'));
        this.headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "token " + this.token
        });
        this.httpOptions = {
            headers: this.headers_object
        };
    }
    getAllUsers() {
        return this.http.get(this.baseUrl + "users", this.httpOptions);
    }
    registerUser(user) {
        return this.http.post(this.baseUrl + "users/", user, this.httpOptions);
    }
    removeUser(id) {
        id = Number(id);
        return this.http.delete(this.baseUrl + "users/" + id, this.httpOptions);
    }
    updateUser(user) {
        return this.http.patch(this.baseUrl + "users/" + Number(user.id), user, this.httpOptions);
    }
};
UserListService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserListService);



/***/ }),

/***/ "./src/app/Service/user-subjects.service.ts":
/*!**************************************************!*\
  !*** ./src/app/Service/user-subjects.service.ts ***!
  \**************************************************/
/*! exports provided: UserSubjectsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubjectsService", function() { return UserSubjectsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let UserSubjectsService = class UserSubjectsService {
    constructor(http) {
        this.http = http;
        this.baseUrl = "https://smart-school-project.herokuapp.com/api/users/";
        this.token = JSON.parse(localStorage.getItem('token'));
        this.headers_object = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'Authorization': "token " + this.token
        });
        this.httpOptions = {
            headers: this.headers_object
        };
    }
    getUserSubjects(id) {
        return this.http.get(this.baseUrl + id + "/subjects", this.httpOptions);
    }
    updateUserSubjects(id, subjects) {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", "token " + this.token);
        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: subjects
        };
        fetch("https://smart-school-project.herokuapp.com/api/users/" + id + "/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }
};
UserSubjectsService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserSubjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserSubjectsService);



/***/ }),

/***/ "./src/app/modules/pages/add-category/add-category.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/add-category/add-category.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pages/add-category/add-category.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/add-category/add-category.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function() { return AddCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/category.service */ "./src/app/Service/category.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let AddCategoryComponent = class AddCategoryComponent {
    constructor(categoryService, sharedSevice, auth) {
        this.categoryService = categoryService;
        this.sharedSevice = sharedSevice;
        this.auth = auth;
        this.category = {
            name: ""
        };
        this.auth.logOut();
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.sharedSevice.navigate("home");
        }
    }
    ngOnInit() {
    }
    addCategory() {
        this.categoryService.addCategory(this.category).subscribe(() => {
            this.sharedSevice.navigate("/home/categories");
        });
    }
};
AddCategoryComponent.ctorParameters = () => [
    { type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-category',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-category.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-category/add-category.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-category.component.scss */ "./src/app/modules/pages/add-category/add-category.component.scss")).default]
    })
], AddCategoryComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-exam/add-exam.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/pages/add-exam/add-exam.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLWV4YW0vYWRkLWV4YW0uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pages/add-exam/add-exam.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pages/add-exam/add-exam.component.ts ***!
  \**************************************************************/
/*! exports provided: AddExamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddExamComponent", function() { return AddExamComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/exams.service */ "./src/app/Service/exams.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let AddExamComponent = class AddExamComponent {
    constructor(examService, sharedservice, auth) {
        this.examService = examService;
        this.sharedservice = sharedservice;
        this.auth = auth;
        this.model = {};
        auth.logOut();
    }
    ngOnInit() {
    }
    addExam() {
        this.examService.addExam(this.model).subscribe(() => { alert("added success"); this.sharedservice.navigate("home/exams"); });
    }
};
AddExamComponent.ctorParameters = () => [
    { type: src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__["ExamsService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AddExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-exam',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-exam.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-exam/add-exam.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-exam.component.css */ "./src/app/modules/pages/add-exam/add-exam.component.css")).default]
    })
], AddExamComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-material/add-material.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pages/add-material/add-material.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loader {\r\n    border: 25px solid #f3f3f3; /* Light grey */\r\n    border-top: 25px solid #3498db; /* Blue */\r\n    border-radius: 50%;\r\n    width: 240px;\r\n    height: 240px;\r\n    -webkit-animation: spin 2s linear infinite;\r\n            animation: spin 2s linear infinite;\r\n    position: absolute;\r\n    top:32%;\r\n    left: 44%;\r\n   \r\n  }\r\n  \r\n  @-webkit-keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes spin {\r\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hZGQtbWF0ZXJpYWwvYWRkLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEIsRUFBRSxlQUFlO0lBQzNDLDhCQUE4QixFQUFFLFNBQVM7SUFDekMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7O0VBRVg7O0VBRUE7SUFDRSxLQUFLLCtCQUF1QixFQUF2Qix1QkFBdUIsRUFBRTtJQUM5QixPQUFPLGlDQUF5QixFQUF6Qix5QkFBeUIsRUFBRTtFQUNwQzs7RUFIQTtJQUNFLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0VBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hZGQtbWF0ZXJpYWwvYWRkLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcclxuICAgIGJvcmRlcjogMjVweCBzb2xpZCAjZjNmM2YzOyAvKiBMaWdodCBncmV5ICovXHJcbiAgICBib3JkZXItdG9wOiAyNXB4IHNvbGlkICMzNDk4ZGI7IC8qIEJsdWUgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHdpZHRoOiAyNDBweDtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOjMyJTtcclxuICAgIGxlZnQ6IDQ0JTtcclxuICAgXHJcbiAgfVxyXG4gIFxyXG4gIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDBkZWcpOyB9XHJcbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/modules/pages/add-material/add-material.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/add-material/add-material.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddMaterialComponent", function() { return AddMaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/sbject.service */ "./src/app/Service/sbject.service.ts");
/* harmony import */ var src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/material.service */ "./src/app/Service/material.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let AddMaterialComponent = class AddMaterialComponent {
    constructor(materialService, subjectService, auth) {
        this.materialService = materialService;
        this.subjectService = subjectService;
        this.auth = auth;
        this.loaderHidden = true;
        this.subjects = [];
        this.model = {
            subject: 0,
            material_type: "pdf",
            title: "",
            path: null,
            notes: ""
        };
        this.form = new FormData();
        auth.logOut();
    }
    ngOnInit() {
        this.subjectService.getListSubjects().subscribe((response) => { this.subjects = response; });
    }
    setSubject(subjectId) {
        this.model.subject = subjectId;
    }
    fileChange(event) {
        let fileList = event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            this.form.append("subject", this.model.subject.toString());
            this.form.append("material_type", "pdf");
            this.form.append("title", this.model.title);
            this.form.append("path", file, file.name);
            this.form.append("notes", this.model.notes);
        }
    }
    addMaterial() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loaderHidden = false;
            yield this.delay(300);
            this.materialService.save(this.form).then(response => alert("added succefully"))
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            this.loaderHidden = true;
        });
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
};
AddMaterialComponent.ctorParameters = () => [
    { type: src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"] },
    { type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__["SbjectService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AddMaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-material',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-material.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-material/add-material.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-material.component.css */ "./src/app/modules/pages/add-material/add-material.component.css")).default]
    })
], AddMaterialComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-parent/add-parent.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/add-parent/add-parent.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXBhcmVudC9hZGQtcGFyZW50LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/add-parent/add-parent.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/pages/add-parent/add-parent.component.ts ***!
  \******************************************************************/
/*! exports provided: AddParentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddParentComponent", function() { return AddParentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddParentComponent = class AddParentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-parent',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-parent.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-parent/add-parent.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-parent.component.scss */ "./src/app/modules/pages/add-parent/add-parent.component.scss")).default]
    })
], AddParentComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-question/add-question.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pages/add-question/add-question.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/add-question/add-question.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/add-question/add-question.component.ts ***!
  \**********************************************************************/
/*! exports provided: AddQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function() { return AddQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/exams.service */ "./src/app/Service/exams.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");




let AddQuestionComponent = class AddQuestionComponent {
    constructor(examservice, auth) {
        this.examservice = examservice;
        this.auth = auth;
        this.exam = {};
        this.questions = [];
        this.model = {};
        this.questionList = [];
        auth.logOut();
        this.exam = JSON.parse(localStorage.getItem('examdata'));
    }
    ngOnInit() {
        this.examservice.getExamQuestions(1).subscribe((data) => { this.questions = data.data; console.log(this.questions); });
    }
    addQuestion() {
        this.model.mark = this.model.mark.toString();
        this.questionList.push(this.model);
        this.examservice.addQuestions(this.exam.id, this.questionList).subscribe(() => {
            alert("done");
            this.questions.push(this.model);
        });
    }
};
AddQuestionComponent.ctorParameters = () => [
    { type: src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__["ExamsService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
AddQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-question',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-question.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-question/add-question.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-question.component.css */ "./src/app/modules/pages/add-question/add-question.component.css")).default]
    })
], AddQuestionComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-stage/add-stage.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/pages/add-stage/add-stage.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXN0YWdlL2FkZC1zdGFnZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/add-stage/add-stage.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/pages/add-stage/add-stage.component.ts ***!
  \****************************************************************/
/*! exports provided: AddStageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStageComponent", function() { return AddStageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/satges.service */ "./src/app/Service/satges.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let AddStageComponent = class AddStageComponent {
    constructor(satgeService, sharedSevice, auth) {
        this.satgeService = satgeService;
        this.sharedSevice = sharedSevice;
        this.auth = auth;
        this.stage = {
            name: ""
        };
        auth.logOut();
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.sharedSevice.navigate("home");
        }
    }
    ngOnInit() {
    }
    addStage() {
        this.satgeService.addStage(this.stage).subscribe(() => { this.sharedSevice.navigate("/home/stages"); });
    }
};
AddStageComponent.ctorParameters = () => [
    { type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__["SatgesService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AddStageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-stage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-stage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-stage/add-stage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-stage.component.css */ "./src/app/modules/pages/add-stage/add-stage.component.css")).default]
    })
], AddStageComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-student/add-student.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/add-student/add-student.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXN0dWRlbnQvYWRkLXN0dWRlbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/add-student/add-student.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/add-student/add-student.component.ts ***!
  \********************************************************************/
/*! exports provided: AddStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function() { return AddStudentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddStudentComponent = class AddStudentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-student',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-student/add-student.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-student.component.scss */ "./src/app/modules/pages/add-student/add-student.component.scss")).default]
    })
], AddStudentComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-subject/add-subject.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/add-subject/add-subject.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXN1YmplY3QvYWRkLXN1YmplY3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/add-subject/add-subject.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/add-subject/add-subject.component.ts ***!
  \********************************************************************/
/*! exports provided: AddSubjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectComponent", function() { return AddSubjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/sbject.service */ "./src/app/Service/sbject.service.ts");
/* harmony import */ var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/satges.service */ "./src/app/Service/satges.service.ts");
/* harmony import */ var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/category.service */ "./src/app/Service/category.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");








let AddSubjectComponent = class AddSubjectComponent {
    constructor(router, subjectService, auth, sharedservice, stageService, categoryService) {
        this.router = router;
        this.subjectService = subjectService;
        this.auth = auth;
        this.sharedservice = sharedservice;
        this.stageService = stageService;
        this.categoryService = categoryService;
        this.subject = {
            name: "",
            credit_hours: null,
            stage: 0,
            category: 0
        };
        this.satgesObserver = {
            next: (data) => this.satges = data,
            error: (err) => console.error('Observer got an error: ' + err),
            complete: () => { this.categoryService.getListCategories().subscribe(this.categoryObserver); },
        };
        this.categoryObserver = {
            next: (data) => this.categories = data,
            error: (err) => console.error('Observer got an error: ' + err),
            complete: () => { },
        };
        auth.logOut();
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.sharedservice.navigate("home");
        }
    }
    ngOnInit() {
        this.stageService.getListStages().subscribe(this.satgesObserver);
    }
    setStage(stage) {
        this.subject.stage = stage;
    }
    setcategory(cat) {
        this.subject.category = cat;
    }
    addSubject() {
        this.subjectService.addSsubject(this.subject).subscribe(() => { alert("Added succesfully"); this.router.navigateByUrl("/home/subjects"); });
    }
};
AddSubjectComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__["SbjectService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__["SharedMethodService"] },
    { type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_3__["SatgesService"] },
    { type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] }
];
AddSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-subject',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-subject.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-subject/add-subject.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-subject.component.scss */ "./src/app/modules/pages/add-subject/add-subject.component.scss")).default]
    })
], AddSubjectComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-teacher/add-teacher.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/add-teacher/add-teacher.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXRlYWNoZXIvYWRkLXRlYWNoZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/add-teacher/add-teacher.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/add-teacher/add-teacher.component.ts ***!
  \********************************************************************/
/*! exports provided: AddTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTeacherComponent", function() { return AddTeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AddTeacherComponent = class AddTeacherComponent {
    constructor() { }
    ngOnInit() {
    }
};
AddTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-teacher',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-teacher/add-teacher.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-teacher.component.scss */ "./src/app/modules/pages/add-teacher/add-teacher.component.scss")).default]
    })
], AddTeacherComponent);



/***/ }),

/***/ "./src/app/modules/pages/add-user/add-user.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/modules/pages/add-user/add-user.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/add-user/add-user.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/pages/add-user/add-user.component.ts ***!
  \**************************************************************/
/*! exports provided: AddUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddUserComponent", function() { return AddUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/user-list.service */ "./src/app/Service/user-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/category.service */ "./src/app/Service/category.service.ts");
/* harmony import */ var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Service/satges.service */ "./src/app/Service/satges.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");








let AddUserComponent = class AddUserComponent {
    constructor(userl, datePipe, ctegorService, stageService, shareS, auth) {
        this.userl = userl;
        this.datePipe = datePipe;
        this.ctegorService = ctegorService;
        this.stageService = stageService;
        this.shareS = shareS;
        this.auth = auth;
        this.user = {
            username: "",
            first_name: "",
            last_name: "",
            user_type: "0",
            email: "",
            password: "",
            phone: "",
            birth_date: null,
            job: "",
            stage: null,
            category: null,
            hire_date: null,
            adress: ""
        };
        this.studentHidden = true;
        this.teacherHidden = true;
        this.parentHidden = true;
        auth.logOut();
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.shareS.navigate("home");
        }
    }
    ngOnInit() {
    }
    getcategories() {
        this.ctegorService.getListCategories().subscribe((data) => { this.categories = data; });
    }
    getStages() {
        this.stageService.getListStages().subscribe((data) => { this.stages = data; });
    }
    //slect user type and maping values
    selected(value) {
        if (value == 1) {
            this.type = "ADM";
            this.studentHidden = this.parentHidden = this.teacherHidden = true;
        }
        if (value == 2) {
            this.type = "STD";
            this.studentHidden = false;
            this.parentHidden = this.teacherHidden = true;
            this.user.stage = 0;
            this.getStages();
        }
        if (value == 3) {
            this.type = "PAR";
            this.parentHidden = false;
            this.studentHidden = this.teacherHidden = true;
        }
        if (value == 4) {
            this.type = "TECH";
            this.teacherHidden = false;
            this.studentHidden = this.parentHidden = true;
            this.user.category = 0;
            this.getcategories();
        }
        console.log(this.type);
    }
    setcategory(cat) {
        this.user.category = Number(cat);
    }
    register() {
        console.log(this.user);
        this.user.user_type = this.type;
        var date = this.user.birth_date;
        var date1 = this.datePipe.transform(date, "yyyy-MM-dd");
        this.userl.registerUser(this.user).subscribe((resposnse) => { console.log(resposnse); this.user.user_type = "0"; this.shareS.navigate("/home/users"); });
    }
};
AddUserComponent.ctorParameters = () => [
    { type: src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__["SatgesService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }
];
AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-user/add-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-user.component.scss */ "./src/app/modules/pages/add-user/add-user.component.scss")).default]
    })
], AddUserComponent);



/***/ }),

/***/ "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.css ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkU3ViamVjdE1hdGVyaWFsL2FkZFN1YmplY3RNYXRlcmlhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts ***!
  \**********************************************************************************/
/*! exports provided: AddSubjectMaterialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddSubjectMaterialComponent", function() { return AddSubjectMaterialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sbject.service */ "./src/app/Service/sbject.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Service/material.service */ "./src/app/Service/material.service.ts");






let AddSubjectMaterialComponent = class AddSubjectMaterialComponent {
    constructor(materialService, router, subjectService, auth) {
        this.materialService = materialService;
        this.router = router;
        this.subjectService = subjectService;
        this.auth = auth;
        this.model = {
            subject: 0,
            material_type: "pdf",
            title: "",
            path: null,
            notes: ""
        };
        this.form = new FormData();
        auth.logOut();
    }
    ngOnInit() {
        this.subjectId = this.router.snapshot.params['id'];
        this.model.subject = this.subjectId;
    }
    fileChange(event) {
        let fileList = event.target.files;
        if (fileList.length > 0) {
            let file = fileList[0];
            this.form.append("subject", this.model.subject.toString());
            this.form.append("material_type", "pdf");
            this.form.append("title", this.model.title);
            this.form.append("path", file, file.name);
            this.form.append("notes", this.model.notes);
        }
    }
    addMaterial() {
        this.materialService.save(this.form);
    }
};
AddSubjectMaterialComponent.ctorParameters = () => [
    { type: src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__["SbjectService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
AddSubjectMaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-addSubjectMaterial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./addSubjectMaterial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./addSubjectMaterial.component.css */ "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.css")).default]
    })
], AddSubjectMaterialComponent);



/***/ }),

/***/ "./src/app/modules/pages/category-list/category-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/category-list/category-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/category-list/category-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/category-list/category-list.component.ts ***!
  \************************************************************************/
/*! exports provided: CategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function() { return CategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/category.service */ "./src/app/Service/category.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let CategoryListComponent = class CategoryListComponent {
    constructor(categoryservice, sharedservice, auth) {
        this.categoryservice = categoryservice;
        this.sharedservice = sharedservice;
        this.auth = auth;
        auth.logOut();
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.sharedservice.navigate("home");
        }
    }
    ngOnInit() {
        this.categoryservice.getListCategories().subscribe((data) => { this.categories = data; });
    }
    get(url) {
        this.sharedservice.navigate(url);
    }
};
CategoryListComponent.ctorParameters = () => [
    { type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-category-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./category-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/category-list/category-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./category-list.component.css */ "./src/app/modules/pages/category-list/category-list.component.css")).default]
    })
], CategoryListComponent);



/***/ }),

/***/ "./src/app/modules/pages/dash-board/dash-board.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/dash-board/dash-board.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGFzaC1ib2FyZC9kYXNoLWJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/dash-board/dash-board.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/pages/dash-board/dash-board.component.ts ***!
  \******************************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");



let DashBoardComponent = class DashBoardComponent {
    constructor(auth) {
        this.auth = auth;
        auth.logOut();
    }
    ngOnInit() {
    }
};
DashBoardComponent.ctorParameters = () => [
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
DashBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dash-board',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dash-board.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dash-board/dash-board.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dash-board.component.scss */ "./src/app/modules/pages/dash-board/dash-board.component.scss")).default]
    })
], DashBoardComponent);



/***/ }),

/***/ "./src/app/modules/pages/exam-list/exam-list.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/modules/pages/exam-list/exam-list.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZXhhbS1saXN0L2V4YW0tbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/exam-list/exam-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/pages/exam-list/exam-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ExamListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamListComponent", function() { return ExamListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/exams.service */ "./src/app/Service/exams.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let ExamListComponent = class ExamListComponent {
    constructor(examservice, sharedservice, auth) {
        this.examservice = examservice;
        this.sharedservice = sharedservice;
        this.auth = auth;
        auth.logOut();
    }
    ngOnInit() {
        this.examservice.getAllExam().subscribe((data) => { this.exams = data; });
    }
    get(url) {
        this.sharedservice.navigate(url);
    }
    select(exam) {
        localStorage.setItem('examdata', JSON.stringify(exam));
        this.sharedservice.navigate('/home/addquestion');
    }
};
ExamListComponent.ctorParameters = () => [
    { type: src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__["ExamsService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
ExamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-exam-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./exam-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/exam-list/exam-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./exam-list.component.css */ "./src/app/modules/pages/exam-list/exam-list.component.css")).default]
    })
], ExamListComponent);



/***/ }),

/***/ "./src/app/modules/pages/material-list/material-list.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/modules/pages/material-list/material-list.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWF0ZXJpYWwtbGlzdC9tYXRlcmlhbC1saXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/material-list/material-list.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/pages/material-list/material-list.component.ts ***!
  \************************************************************************/
/*! exports provided: MaterialListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialListComponent", function() { return MaterialListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/material.service */ "./src/app/Service/material.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let MaterialListComponent = class MaterialListComponent {
    constructor(sharedservice, mterialService, auth) {
        this.sharedservice = sharedservice;
        this.mterialService = mterialService;
        this.auth = auth;
        auth.logOut();
    }
    ngOnInit() {
        this.mterialService.getList().subscribe((data) => { this.materials = data; console.log(data); });
    }
    get(url) {
        this.sharedservice.navigate(url);
    }
};
MaterialListComponent.ctorParameters = () => [
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_2__["SharedMethodService"] },
    { type: src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
MaterialListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-material-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./material-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/material-list/material-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./material-list.component.css */ "./src/app/modules/pages/material-list/material-list.component.css")).default]
    })
], MaterialListComponent);



/***/ }),

/***/ "./src/app/modules/pages/pages-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/pages/pages-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: PagesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function() { return PagesRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/modules/pages/pages/pages.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dash-board/dash-board.component */ "./src/app/modules/pages/dash-board/dash-board.component.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/modules/pages/add-user/add-user.component.ts");
/* harmony import */ var _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-parent/add-parent.component */ "./src/app/modules/pages/add-parent/add-parent.component.ts");
/* harmony import */ var _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-teacher/add-teacher.component */ "./src/app/modules/pages/add-teacher/add-teacher.component.ts");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-student/add-student.component */ "./src/app/modules/pages/add-student/add-student.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/modules/pages/add-category/add-category.component.ts");
/* harmony import */ var _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-subject/add-subject.component */ "./src/app/modules/pages/add-subject/add-subject.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/modules/pages/users-list/users-list.component.ts");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./update-user/update-user.component */ "./src/app/modules/pages/update-user/update-user.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/modules/pages/category-list/category-list.component.ts");
/* harmony import */ var _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./stage-List/stage-List.component */ "./src/app/modules/pages/stage-List/stage-List.component.ts");
/* harmony import */ var _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./add-stage/add-stage.component */ "./src/app/modules/pages/add-stage/add-stage.component.ts");
/* harmony import */ var _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./subject-list/subject-list.component */ "./src/app/modules/pages/subject-list/subject-list.component.ts");
/* harmony import */ var _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./users-list/user-subj/user-subj.component */ "./src/app/modules/pages/users-list/user-subj/user-subj.component.ts");
/* harmony import */ var _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-material/add-material.component */ "./src/app/modules/pages/add-material/add-material.component.ts");
/* harmony import */ var _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./material-list/material-list.component */ "./src/app/modules/pages/material-list/material-list.component.ts");
/* harmony import */ var _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./exam-list/exam-list.component */ "./src/app/modules/pages/exam-list/exam-list.component.ts");
/* harmony import */ var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-exam/add-exam.component */ "./src/app/modules/pages/add-exam/add-exam.component.ts");
/* harmony import */ var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./add-question/add-question.component */ "./src/app/modules/pages/add-question/add-question.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/pages/profile/profile.component.ts");
/* harmony import */ var _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./subjectMaterials/subjectMaterials.component */ "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts");
/* harmony import */ var _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./addSubjectMaterial/addSubjectMaterial.component */ "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts");


























const routes = [
    {
        path: '', component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"], children: [
            { path: '', component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__["DashBoardComponent"] },
            { path: 'adduser', component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"] },
            { path: 'UpdateUser', component: _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_12__["UpdateUserComponent"] },
            { path: 'AddParent', component: _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_6__["AddParentComponent"] },
            { path: 'AddTeacher', component: _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_7__["AddTeacherComponent"] },
            { path: 'AddStudent', component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_8__["AddStudentComponent"] },
            { path: 'addcategory', component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"] },
            { path: 'addsubject', component: _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_10__["AddSubjectComponent"] },
            { path: 'users', component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__["UsersListComponent"] },
            { path: "stages", component: _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_14__["StageListComponent"] },
            { path: "addstage", component: _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_15__["AddStageComponent"] },
            { path: 'categories', component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_13__["CategoryListComponent"] },
            { path: 'subjects', component: _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_16__["SubjectListComponent"] },
            { path: 'user-subj/:id', component: _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_17__["UserSubjComponent"] },
            { path: 'addmaterial', component: _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_18__["AddMaterialComponent"] },
            { path: 'materials', component: _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_19__["MaterialListComponent"] },
            { path: 'exams', component: _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_20__["ExamListComponent"] },
            { path: 'addexam', component: _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_21__["AddExamComponent"] },
            { path: 'addquestion', component: _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_22__["AddQuestionComponent"] },
            { path: 'userMaterials', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"] },
            { path: 'subjectMaterials/:id', component: _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_24__["SubjectMaterialsComponent"] },
            { path: 'addSubjectMaterials/:id', component: _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_25__["AddSubjectMaterialComponent"] },
            { path: "**", component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__["DashBoardComponent"] }
        ]
    }
];
let PagesRoutingModule = class PagesRoutingModule {
};
PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PagesRoutingModule);



/***/ }),

/***/ "./src/app/modules/pages/pages.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/pages/pages.module.ts ***!
  \***********************************************/
/*! exports provided: PagesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesModule", function() { return PagesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages-routing.module */ "./src/app/modules/pages/pages-routing.module.ts");
/* harmony import */ var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/pages.component */ "./src/app/modules/pages/pages/pages.component.ts");
/* harmony import */ var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dash-board/dash-board.component */ "./src/app/modules/pages/dash-board/dash-board.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/modules/layout/layout.module.ts");
/* harmony import */ var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./add-user/add-user.component */ "./src/app/modules/pages/add-user/add-user.component.ts");
/* harmony import */ var _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./add-parent/add-parent.component */ "./src/app/modules/pages/add-parent/add-parent.component.ts");
/* harmony import */ var _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./add-teacher/add-teacher.component */ "./src/app/modules/pages/add-teacher/add-teacher.component.ts");
/* harmony import */ var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add-student/add-student.component */ "./src/app/modules/pages/add-student/add-student.component.ts");
/* harmony import */ var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-category/add-category.component */ "./src/app/modules/pages/add-category/add-category.component.ts");
/* harmony import */ var _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./add-subject/add-subject.component */ "./src/app/modules/pages/add-subject/add-subject.component.ts");
/* harmony import */ var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./users-list/users-list.component */ "./src/app/modules/pages/users-list/users-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./update-user/update-user.component */ "./src/app/modules/pages/update-user/update-user.component.ts");
/* harmony import */ var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./category-list/category-list.component */ "./src/app/modules/pages/category-list/category-list.component.ts");
/* harmony import */ var _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./stage-List/stage-List.component */ "./src/app/modules/pages/stage-List/stage-List.component.ts");
/* harmony import */ var _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./add-stage/add-stage.component */ "./src/app/modules/pages/add-stage/add-stage.component.ts");
/* harmony import */ var _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./subject-list/subject-list.component */ "./src/app/modules/pages/subject-list/subject-list.component.ts");
/* harmony import */ var _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./users-list/user-subj/user-subj.component */ "./src/app/modules/pages/users-list/user-subj/user-subj.component.ts");
/* harmony import */ var _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./add-material/add-material.component */ "./src/app/modules/pages/add-material/add-material.component.ts");
/* harmony import */ var _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./material-list/material-list.component */ "./src/app/modules/pages/material-list/material-list.component.ts");
/* harmony import */ var _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./exam-list/exam-list.component */ "./src/app/modules/pages/exam-list/exam-list.component.ts");
/* harmony import */ var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./add-exam/add-exam.component */ "./src/app/modules/pages/add-exam/add-exam.component.ts");
/* harmony import */ var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./add-question/add-question.component */ "./src/app/modules/pages/add-question/add-question.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/modules/pages/profile/profile.component.ts");
/* harmony import */ var _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./subjectMaterials/subjectMaterials.component */ "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts");
/* harmony import */ var _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./addSubjectMaterial/addSubjectMaterial.component */ "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts");





























let PagesModule = class PagesModule {
};
PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"],
            _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__["DashBoardComponent"],
            _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"],
            _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_8__["AddParentComponent"],
            _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_9__["AddTeacherComponent"],
            _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_10__["AddStudentComponent"],
            _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__["AddCategoryComponent"],
            _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_12__["AddSubjectComponent"],
            _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"],
            _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_15__["UpdateUserComponent"],
            _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__["CategoryListComponent"],
            _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_17__["StageListComponent"],
            _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_18__["AddStageComponent"],
            _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_19__["SubjectListComponent"],
            _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_20__["UserSubjComponent"],
            _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_21__["AddMaterialComponent"],
            _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_22__["MaterialListComponent"],
            _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_23__["ExamListComponent"],
            _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_24__["AddExamComponent"],
            _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_25__["AddQuestionComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"],
            _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_27__["SubjectMaterialsComponent"],
            _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_28__["AddSubjectMaterialComponent"]
        ],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"],
            _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]
        ]
    })
], PagesModule);



/***/ }),

/***/ "./src/app/modules/pages/pages/pages.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/modules/pages/pages/pages.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/pages/pages.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/pages/pages/pages.component.ts ***!
  \********************************************************/
/*! exports provided: PagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesComponent", function() { return PagesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");



let PagesComponent = class PagesComponent {
    constructor(auth) {
        this.auth = auth;
        auth.logOut();
    }
    ngOnInit() {
        window.dispatchEvent(new Event('resize'));
        $('body').addClass('hold-transition skin-blue sidebar-mini');
    }
};
PagesComponent.ctorParameters = () => [
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pages',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pages.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages/pages.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pages.component.scss */ "./src/app/modules/pages/pages/pages.component.scss")).default]
    })
], PagesComponent);



/***/ }),

/***/ "./src/app/modules/pages/profile/profile.component.css":
/*!*************************************************************!*\
  !*** ./src/app/modules/pages/profile/profile.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/profile/profile.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/pages/profile/profile.component.ts ***!
  \************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");
/* harmony import */ var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sbject.service */ "./src/app/Service/sbject.service.ts");




let ProfileComponent = class ProfileComponent {
    constructor(auth, subjectService) {
        this.auth = auth;
        this.subjectService = subjectService;
        this.userId = {};
        this.userId = auth.getUserId();
        auth.logOut();
        subjectService.getUserSubjects(this.userId).subscribe((data) => { this.subjects = data; });
    }
    ngOnInit() {
    }
    checkRule(rule) {
        if (this.auth.getusertype() == rule) {
            return true;
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__["SbjectService"] }
];
ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./profile.component.css */ "./src/app/modules/pages/profile/profile.component.css")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/modules/pages/stage-List/stage-List.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/modules/pages/stage-List/stage-List.component.css ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvc3RhZ2UtTGlzdC9zdGFnZS1MaXN0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/stage-List/stage-List.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/pages/stage-List/stage-List.component.ts ***!
  \******************************************************************/
/*! exports provided: StageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StageListComponent", function() { return StageListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/satges.service */ "./src/app/Service/satges.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let StageListComponent = class StageListComponent {
    constructor(stageService, sharedservice, auth) {
        this.stageService = stageService;
        this.sharedservice = sharedservice;
        this.auth = auth;
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.sharedservice.navigate("home");
        }
    }
    ngOnInit() {
        this.stageService.getListStages().subscribe((data) => { this.stages = data; });
    }
    get(url) {
        this.sharedservice.navigate(url);
    }
};
StageListComponent.ctorParameters = () => [
    { type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__["SatgesService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
StageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stage-List',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stage-List.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/stage-List/stage-List.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stage-List.component.css */ "./src/app/modules/pages/stage-List/stage-List.component.css")).default]
    })
], StageListComponent);



/***/ }),

/***/ "./src/app/modules/pages/subject-list/subject-list.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/modules/pages/subject-list/subject-list.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvc3ViamVjdC1saXN0L3N1YmplY3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/subject-list/subject-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/modules/pages/subject-list/subject-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: SubjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function() { return SubjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/sbject.service */ "./src/app/Service/sbject.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let SubjectListComponent = class SubjectListComponent {
    constructor(subjectService, sharedservice, auth) {
        this.subjectService = subjectService;
        this.sharedservice = sharedservice;
        this.auth = auth;
        auth.logOut();
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.sharedservice.navigate("home");
        }
    }
    ngOnInit() {
        this.subjectService.getListSubjects().subscribe((data) => { this.subjects = data; });
    }
    get(url) {
        this.sharedservice.navigate(url);
    }
};
SubjectListComponent.ctorParameters = () => [
    { type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__["SbjectService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subject-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subject-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subject-list/subject-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subject-list.component.css */ "./src/app/modules/pages/subject-list/subject-list.component.css")).default]
    })
], SubjectListComponent);



/***/ }),

/***/ "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pages/subjectMaterials/subjectMaterials.component.css ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvc3ViamVjdE1hdGVyaWFscy9zdWJqZWN0TWF0ZXJpYWxzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts ***!
  \******************************************************************************/
/*! exports provided: SubjectMaterialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubjectMaterialsComponent", function() { return SubjectMaterialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sbject.service */ "./src/app/Service/sbject.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let SubjectMaterialsComponent = class SubjectMaterialsComponent {
    constructor(router, subjectService, auth) {
        this.router = router;
        this.subjectService = subjectService;
        this.auth = auth;
        this.materials = [];
        auth.logOut();
    }
    ngOnInit() {
        this.subjectId = this.router.snapshot.params['id'];
        this.subjectService.getSubjectMAterial(2).subscribe((data) => { console.log(data); });
    }
};
SubjectMaterialsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__["SbjectService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
SubjectMaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-subjectMaterials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./subjectMaterials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subjectMaterials/subjectMaterials.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./subjectMaterials.component.css */ "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.css")).default]
    })
], SubjectMaterialsComponent);



/***/ }),

/***/ "./src/app/modules/pages/update-user/update-user.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/modules/pages/update-user/update-user.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/pages/update-user/update-user.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/update-user/update-user.component.ts ***!
  \********************************************************************/
/*! exports provided: UpdateUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function() { return UpdateUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/user-list.service */ "./src/app/Service/user-list.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/category.service */ "./src/app/Service/category.service.ts");
/* harmony import */ var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/Service/satges.service */ "./src/app/Service/satges.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");







let UpdateUserComponent = class UpdateUserComponent {
    constructor(userl, datePipe, ctegorService, stageService, shareS) {
        this.userl = userl;
        this.datePipe = datePipe;
        this.ctegorService = ctegorService;
        this.stageService = stageService;
        this.shareS = shareS;
        this.user = {
            username: "",
            first_name: "",
            last_name: "",
            user_type: "",
            email: "",
            password: "",
            phone: "",
            birth_date: null,
            job: "",
            stage: null,
            category: null,
            hire_date: null,
            adress: ""
        };
        this.studentHidden = true;
        this.teacherHidden = true;
        this.parentHidden = true;
        var data = localStorage.getItem("userDataupdate");
        this.user = JSON.parse(data);
        this.getval();
        this.selected(this.user.user_type);
    }
    getcategories() {
        this.ctegorService.getListCategories().subscribe((data) => { this.categories = data; });
    }
    getStages() {
        this.stageService.getListStages().subscribe((data) => { this.stages = data; });
    }
    ngOnInit() {
    }
    ngOnDestroy() {
        localStorage.removeItem("userDataupdate");
    }
    //slect user type and maping values
    selected(value) {
        if (value == 1) {
            this.type = "ADM";
            this.studentHidden = this.parentHidden = this.teacherHidden = true;
        }
        if (value == 2) {
            this.type = "STD";
            this.studentHidden = false;
            this.parentHidden = this.teacherHidden = true;
            this.user.stage = 0;
            this.getStages();
        }
        if (value == 3) {
            this.type = "PAR";
            this.parentHidden = false;
            this.studentHidden = this.teacherHidden = true;
        }
        if (value == 4) {
            this.type = "TECH";
            this.teacherHidden = false;
            this.studentHidden = this.parentHidden = true;
            this.user.category = 0;
            this.getcategories();
        }
    }
    slectSatge(stage) {
    }
    getval() {
        if (this.user.user_type == "ADM")
            this.user.user_type = "1";
        if (this.user.user_type == "STD")
            this.user.user_type = "2";
        if (this.user.user_type == "PAR")
            this.user.user_type = "3";
        if (this.user.user_type == "TECH")
            this.user.user_type = "4";
    }
    update() {
        this.selected(this.user.user_type);
        this.user.user_type = this.type;
        console.log(this.user);
        this.userl.updateUser(this.user).subscribe();
    }
};
UpdateUserComponent.ctorParameters = () => [
    { type: src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"] },
    { type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"] },
    { type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__["SatgesService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__["SharedMethodService"] }
];
UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-update-user',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./update-user.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/update-user/update-user.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./update-user.component.css */ "./src/app/modules/pages/update-user/update-user.component.css")).default]
    })
], UpdateUserComponent);



/***/ }),

/***/ "./src/app/modules/pages/users-list/user-subj/user-subj.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pages/users-list/user-subj/user-subj.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXNlcnMtbGlzdC91c2VyLXN1YmovdXNlci1zdWJqLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/users-list/user-subj/user-subj.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/modules/pages/users-list/user-subj/user-subj.component.ts ***!
  \***************************************************************************/
/*! exports provided: UserSubjComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSubjComponent", function() { return UserSubjComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_Service_user_subjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/user-subjects.service */ "./src/app/Service/user-subjects.service.ts");
/* harmony import */ var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/sbject.service */ "./src/app/Service/sbject.service.ts");





let UserSubjComponent = class UserSubjComponent {
    constructor(route, user_subject, subjectService) {
        this.route = route;
        this.user_subject = user_subject;
        this.subjectService = subjectService;
        this.sub = {};
        this.userSub = [];
        this.form = new FormData();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.user_subject.getUserSubjects(this.id).subscribe((data) => this.userSubjects = data, (error) => { }, () => {
            this.subjectService.getListSubjects().subscribe((data) => { this.subjects = data; console.log(data); });
        });
    }
    remove(name) {
        this.userSubjects.splice(this.userSubjects.indexOf(name), 1);
    }
    add(subjecttoadd) {
        let itemAlreadyExist = this.userSubjects.find(item => item.id === subjecttoadd.id);
        if (itemAlreadyExist) {
            alert("already added");
        }
        else {
            this.userSubjects.push(subjecttoadd);
        }
        console.log(this.userSub);
    }
    save() {
        var form = new FormData();
        form.append("subject", "1");
        this.userSubjects.forEach(function (value) {
            form.append("subject", value.id);
            console.log(value.id + value.name);
        });
        this.user_subject.updateUserSubjects(this.id, form);
    }
};
UserSubjComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_Service_user_subjects_service__WEBPACK_IMPORTED_MODULE_3__["UserSubjectsService"] },
    { type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_4__["SbjectService"] }
];
UserSubjComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-user-subj',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./user-subj.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/user-subj/user-subj.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./user-subj.component.scss */ "./src/app/modules/pages/users-list/user-subj/user-subj.component.scss")).default]
    })
], UserSubjComponent);



/***/ }),

/***/ "./src/app/modules/pages/users-list/users-list.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/modules/pages/users-list/users-list.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/pages/users-list/users-list.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/modules/pages/users-list/users-list.component.ts ***!
  \******************************************************************/
/*! exports provided: UsersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersListComponent", function() { return UsersListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/Service/user-list.service */ "./src/app/Service/user-list.service.ts");
/* harmony import */ var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/Service/sharedMethod.service */ "./src/app/Service/sharedMethod.service.ts");
/* harmony import */ var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/Service/auth.service */ "./src/app/Service/auth.service.ts");





let UsersListComponent = class UsersListComponent {
    constructor(userList, sharedservice, auth) {
        this.userList = userList;
        this.sharedservice = sharedservice;
        this.auth = auth;
        this.userObserver = {
            next: (data) => this.getusers(),
            error: (err) => console.error('Observer got an error: ' + err),
            complete: () => { },
        };
        auth.logOut();
        var result = this.auth.getusertype();
        if (result != 'ADM') {
            this.sharedservice.navigate("home");
        }
    }
    ngOnInit() {
        this.getusers();
    }
    getusers() {
        this.userList.getAllUsers().subscribe((data) => { this.users = data; });
    }
    get(url) {
        this.sharedservice.navigate(url);
    }
    remove(id) {
        this.userList.removeUser(Number(id)).subscribe(this.userObserver);
    }
    update(user) {
        var data = JSON.stringify(user);
        window.localStorage.setItem("userDataupdate", data);
        this.sharedservice.navigate("home/UpdateUser");
    }
};
UsersListComponent.ctorParameters = () => [
    { type: src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"] },
    { type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"] },
    { type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }
];
UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./users-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/users-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./users-list.component.scss */ "./src/app/modules/pages/users-list/users-list.component.scss")).default]
    })
], UsersListComponent);



/***/ })

}]);
//# sourceMappingURL=modules-pages-pages-module-es2015.js.map