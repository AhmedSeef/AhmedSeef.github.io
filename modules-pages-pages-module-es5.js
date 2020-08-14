function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-pages-pages-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-category/add-category.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-category/add-category.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddCategoryAddCategoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Add Ctegory</p>\n  \n      <form #catForm=\"ngForm\" (ngSubmit)=\"addCategory()\">\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Category name\" type=\"text\" name=\"name\" [(ngModel)]=\"category.name\"\n          required #name=\"ngModel\">         \n        </div>\n\n        <div class=\"row\">         \n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-exam/add-exam.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-exam/add-exam.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddExamAddExamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Add Exam</p>\n  \n      <form #catForm=\"ngForm\" (ngSubmit)=\"addExam()\">\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"exam title\" type=\"text\" name=\"title\" [(ngModel)]=\"model.title\"\n          required #title=\"ngModel\">         \n        </div>\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"exam duration\" type=\"number\" name=\"duration\" [(ngModel)]=\"model.duration\"\n          required #duration=\"ngModel\">         \n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"exam mark\" type=\"number\" name=\"mark\" [(ngModel)]=\"model.mark\"\n          required #mark=\"ngModel\">         \n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"exam notes\" type=\"text\" name=\"notes\" [(ngModel)]=\"model.notes\"\n          required #notes=\"ngModel\">         \n        </div>\n        <div class=\"row\">         \n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-material/add-material.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-material/add-material.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddMaterialAddMaterialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"register-box\">\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Add Subject</p>\n\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"addMaterial()\" enctype=\"multipart/form-data\">\n\n      <div class=\"form-group has-feedback\">\n        <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\"\n          tabindex=\"-1\" aria-hidden=\"true\" name=\"subject\" [(ngModel)]=\"model.subject\" required #subject=\"ngModel\"\n          (change)=\"setSubject($event.target.value)\">\n          <option [value]=\"0\" disabled>Select subject</option>\n          <option *ngFor=\"let subject of subjects\" [value]=\"subject.id\">\n            {{subject.name}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"title\" type=\"text\" name=\"title\" [(ngModel)]=\"model.title\"\n        required #title=\"ngModel\">         \n      </div>\n\n      \n      <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\">\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"notes\" type=\"text\" name=\"notes\" [(ngModel)]=\"model.notes\"\n        required #notes=\"ngModel\">         \n      </div>\n\n\n\n\n      <div class=\"row\">\n        <!-- /.col -->\n        <div class=\"col-xs-4 col-md-6\">\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n  </div>\n  <!-- /.form-box -->\n</div>\n\n<div class=\"loader\" [hidden]=\"loaderHidden\"></div> \n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-parent/add-parent.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-parent/add-parent.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddParentAddParentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Register a new parent</p>\n  \n      <form action=\"../../index.html\" method=\"post\">\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"S S N\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\">\n          </div>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Adress\" type=\"text\">\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n            <input class=\"form-control\" placeholder=\"Job\" type=\"text\">\n            <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n          </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Retype password\" type=\"password\">\n          <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\n        </div>\n        <div class=\"row\">         \n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Register</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-question/add-question.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-question/add-question.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddQuestionAddQuestionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box\">\n  <div class=\"col-sm-12\">\n    <div class=\"row\">\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">code</th>\n            <th scope=\"col\">title</th>\n            <th scope=\"col\">duration</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr>\n            <th scope=\"row\">{{exam.id}}</th>\n            <td>{{exam.title}}</td>\n            <td>{{exam.duration}} hours</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"row\">\n\n    </div>\n    <div class=\"row\">\n      <br> <br>\n      <h2>exam questions</h2>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th scope=\"col\">code</th>\n            <th scope=\"col\">title</th>\n            <th scope=\"col\">mark</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let que of questions\">\n            <th scope=\"row\">{{que.id}}</th>\n            <td>{{que.content}}</td>\n            <td>{{que.mark}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"register-box\">\n        <div class=\"register-box-body\">\n          <p class=\"login-box-msg\">Add Question</p>\n\n          <form #question=\"ngForm\" (ngSubmit)=\"addQuestion()\">\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" placeholder=\"question content\" type=\"text\" name=\"content\"\n                [(ngModel)]=\"model.content\" minlength=\"5\" required #content=\"ngModel\">\n              <div *ngIf=\"!content.valid && (content.touched ||content.dirty )\" class=\"alert-danger\">\n                <div *ngIf=\"content?.errors.minlength\">\n                  Name must be at least 5 characters long.\n                </div>\n                <div *ngIf=\"content?.errors.required\">\n                  content must entered.\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group has-feedback\">\n              <input class=\"form-control\" placeholder=\"question mark\" type=\"number\" name=\"mark\" [(ngModel)]=\"model.mark\"\n                required #mark=\"ngModel\">\n            </div>\n            <div *ngIf=\"!mark.valid && (mark.touched ||mark.dirty )\" class=\"alert-danger\">\n              \n              <div *ngIf=\"mark?.errors.required\">\n                mark must entered.\n              </div>\n            </div>\n            <!-- /.col -->\n            <div class=\"col-xs-4 col-md-6\">\n              <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\"\n              [disabled]=\"!question.valid\">Add</button>\n            </div>\n            <!-- /.col -->\n\n          </form>\n        </div>\n        <!-- /.form-box -->\n      </div>\n      <!-- /.register-box -->\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-stage/add-stage.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-stage/add-stage.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddStageAddStageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Add Stage</p>\n  \n      <form #catForm=\"ngForm\" (ngSubmit)=\"addStage()\">\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"satge name\" type=\"text\" name=\"name\" [(ngModel)]=\"stage.name\"\n          required #name=\"ngModel\">         \n        </div>\n\n        <div class=\"row\">         \n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-student/add-student.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-student/add-student.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddStudentAddStudentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Register a new student</p>\n  \n      <form action=\"../../index.html\" method=\"post\">\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"S S N\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n            <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\" tabindex=\"-1\" aria-hidden=\"true\">\n                <option selected=\"selected\" data-select2-id=\"3\">select parent</option>\n                <option>Alaska</option>\n                <option>California</option>\n                <option>Delaware</option>\n                <option>Tennessee</option>\n                <option>Texas</option>\n                <option>Washington</option>\n              </select>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\">\n          </div>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Adress\" type=\"text\">\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Retype password\" type=\"password\">\n          <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\n        </div>\n        <div class=\"row\">         \n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Register</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-subject/add-subject.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-subject/add-subject.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddSubjectAddSubjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Add Subject</p>\n  \n      <form #registerForm=\"ngForm\" (ngSubmit)=\"addSubject()\">\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"subject name\" type=\"text\" name=\"name\" [(ngModel)]=\"subject.name\"\n          required #name=\"ngModel\">         \n        </div>\n\n        <div class=\"form-group has-feedback\">\n            <input class=\"form-control\" placeholder=\"credit hour\" type=\"number\" min=\"0\"\n            name=\"credit_hours\" [(ngModel)]=\"subject.credit_hours\" required #credit_hours=\"ngModel\">         \n        </div>\n\n        <div class=\"form-group has-feedback\">\n            <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\" tabindex=\"-1\" aria-hidden=\"true\"\n            name=\"stage\" [(ngModel)]=\"subject.stage\" required #stage=\"ngModel\" (change)=\"setStage($event.target.value)\">\n            <option [value]=\"0\" disabled>Select  satge</option>\n            <option *ngFor=\"let stage of satges\" [value]=\"stage.id\">\n              {{stage.name}}\n            </option>               \n              </select>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <select class=\"form-control select2 select2-hidden-accessible\" style=\"width: 100%;\" data-select2-id=\"1\" tabindex=\"-1\" aria-hidden=\"true\"\n          name=\"category\" [(ngModel)]=\"subject.category\" required #category=\"ngModel\" (change)=\"setcategory($event.target.value)\" >\n          <option [value]=\"0\" disabled>Select  category</option>\n          <option *ngFor=\"let category of categories\" [value]=\"category.id\">\n            {{category.name}}\n          </option>                            \n            </select>\n      </div>\n\n        <div class=\"row\">         \n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-teacher/add-teacher.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-teacher/add-teacher.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddTeacherAddTeacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">Register a new teacher</p>\n  \n      <form action=\"../../index.html\" method=\"post\">\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"S S N\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\">\n          </div>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Adress\" type=\"text\">\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\">\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\">\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        </div>\n\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Retype password\" type=\"password\">\n          <span class=\"glyphicon glyphicon-log-in form-control-feedback\"></span>\n        </div>\n        <div class=\"row\">         \n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Register</button>\n          </div>\n          <!-- /.col -->\n        </div>\n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-user/add-user.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-user/add-user.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddUserAddUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"register-box\">\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Register a new membership Admin</p>\n\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"register()\">\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"user name\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"\n          required #username=\"ngModel\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n\n      <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\n\n        <div *ngIf=\"username.errors.required\">\n          User Name is required.\n        </div>\n\n      </div>\n\n\n      <div class=\"form-group\">\n        <select class=\"form-control\" name=\"user_type\" (change)=\"selected($event.target.value)\"\n          [(ngModel)]=\"user.user_type\" required  #user_type=\"ngModel\" >\n          <option disabled [value]=\"0\">select user type</option>\n          <option [value]='1'>ADMIN</option>\n          <option [value]=\"2\"> STUDENT</option>\n          <option [value]=\"3\">PARENT</option>\n          <option [value]=\"4\">TEACHER</option>\n        </select>\n      </div>\n      <div *ngIf=\"user_type.invalid && (user_type.dirty || user_type.touched)\" class=\"alert alert-danger\">\n\n        <div *ngIf=\"user_type.errors.required\">\n          User Type is required.\n        </div>\n\n      </div>\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"First name\" type=\"text\" name=\"first_name\"\n          [(ngModel)]=\"user.first_name\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Last name\" type=\"text\" name=\"last_name\" [(ngModel)]=\"user.last_name\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Email\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\">\n        <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n      </div>\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\" name=\"phone\" [(ngModel)]=\"user.phone\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n\n      <div class=\"form-group has-feedback\">\n        <div class=\"input-group\">\n          <div class=\"input-group-addon\">\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n          <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'yyyy/dd/mm/'\" data-mask=\"\" name=\"birth_date\"\n            [(ngModel)]=\"user.birth_date\" required #birth_date=\"ngModel\"> \n        </div>\n      </div>\n\n      <div *ngIf=\"birth_date.invalid && (birth_date.dirty || birth_date.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"birth_date.errors.required\">\n          birth date is required.\n        </div>\n      </div>\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Address\" type=\"text\" name=\"address\" [(ngModel)]=\"user.address\">\n        <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\n      </div>\n\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"Password\" type=\"password\" name=\"password\" \n        [(ngModel)]=\"user.password\"  required #password=\"ngModel\">\n        <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n      </div>\n      <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n        <div *ngIf=\"password.errors.required\">\n          PAssword Name is required.\n        </div>\n      </div>\n\n      <div class=\"form-group\" [hidden]=\"studentHidden\">\n        <select class=\"form-control\" name=\"stage_id\" \n          [(ngModel)]=\"user.stage\">\n          <option [value]=\"0\" selected>select student stage</option>\n          <option *ngFor=\"let stage of stages\" [value]=\"stage.id\">\n            {{stage.name}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group\" [hidden]=\"teacherHidden\">\n        <select class=\"form-control\" name=\"category\" (change)=\"setcategory($event.target.value)\"\n          [(ngModel)]=\"user.category\">\n          <option [value]=\"0\" selected>select category</option>\n          <option *ngFor=\"let category of categories\" [value]=\"category.id\">\n            {{category.name}}\n          </option>\n        </select>\n      </div>\n\n      <div class=\"form-group has-feedback\" [hidden]=\"teacherHidden\">\n        <div class=\"input-group\">\n          <div class=\"input-group-addon\">\n            <i class=\"fa fa-calendar\"></i>\n          </div>\n          <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\" name=\"hire_date\"\n            [(ngModel)]=\"user.hire_date\">\n        </div>\n      </div>\n\n      <div class=\"form-group has-feedback\" [hidden]=\"parentHidden\">\n        <input class=\"form-control\" placeholder=\"job\" type=\"text\" name=\"job\" [(ngModel)]=\"user.job\">\n        <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n      </div>\n\n\n      <div class=\"row\">\n        <!-- /.col -->\n        <div class=\"col-xs-4 col-md-6\">\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\" \n         [disabled]=\"!registerForm.valid\">Register</button>\n        </div>\n        <!-- /.col -->\n      </div>\n\n\n    </form>\n  </div>\n  <!-- /.form-box -->\n</div>\n<!-- /.register-box -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesAddSubjectMaterialAddSubjectMaterialComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"register-box\">\n  <div class=\"register-box-body\">\n    <p class=\"login-box-msg\">Add Subject</p>\n\n    <form #registerForm=\"ngForm\" (ngSubmit)=\"addMaterial()\" enctype=\"multipart/form-data\">\n\n     \n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"title\" type=\"text\" name=\"title\" [(ngModel)]=\"model.title\"\n        required #title=\"ngModel\">         \n      </div>\n\n      \n      <input type=\"file\" (change)=\"fileChange($event)\" placeholder=\"Upload file\" accept=\".pdf,.doc,.docx\">\n\n      <div class=\"form-group has-feedback\">\n        <input class=\"form-control\" placeholder=\"notes\" type=\"text\" name=\"notes\" [(ngModel)]=\"model.notes\"\n        required #notes=\"ngModel\">         \n      </div>\n\n\n\n\n      <div class=\"row\">\n        <!-- /.col -->\n        <div class=\"col-xs-4 col-md-6\">\n          <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\">Add</button>\n        </div>\n        <!-- /.col -->\n      </div>\n    </form>\n  </div>\n  <!-- /.form-box -->\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/category-list/category-list.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/category-list/category-list.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesCategoryListCategoryListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addcategory')\">create category</button>\n<br> <br> <br>\n<div class=\"box\">\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n            \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                        aria-describedby=\"example1_info\">\n                        <thead>\n                            <tr role=\"row\">\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-sort=\"ascending\"\n                                    aria-label=\"user name: activate to sort column descending\"\n                                    style=\"width: 182px;\">id</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\n                                    name</th>\n                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let cat of categories\">\n                                <td class=\"sorting_1\">{{cat.id}}</td>\n                                <td>{{cat.name}}</td>                                \n                                <!-- <td>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\n                                </td> -->\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                \n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dash-board/dash-board.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dash-board/dash-board.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesDashBoardDashBoardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<section class=\"content-header\">\n  <!-- <h1>\n    Blank page\n    <small>it all starts here</small>\n  </h1>\n  <ol class=\"breadcrumb\">\n    <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Home</a></li>\n    <li><a href=\"#\">Examples</a></li>\n    <li class=\"active\">Blank page</li>\n  </ol> -->\n</section>\n\n<!-- Main content -->\n<section class=\"content\">\n\n  <router-outlet></router-outlet>\n\n\n</section>\n<!-- /.content -->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/exam-list/exam-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/exam-list/exam-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesExamListExamListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addexam')\">create exam</button> \n<br> <br> <br>\n<div class=\"box\">\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n            \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                        aria-describedby=\"example1_info\">\n                        <thead>\n                            <tr role=\"row\">\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-sort=\"ascending\"\n                                    aria-label=\"user name: activate to sort column descending\"\n                                    style=\"width: 182px;\">id</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"title: activate to sort column ascending\" style=\"width: 225px;\">\n                                    title</th>\n                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let exam of exams\">\n                                <td class=\"sorting_1\">{{exam.id}}</td>\n                                <td>{{exam.title}}</td>                                \n                                <td>                                   \n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"select(exam)\">add questions</button>\n                                </td> \n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                \n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/material-list/material-list.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/material-list/material-list.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesMaterialListMaterialListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addmaterial')\">create Material</button>\n<br> <br> <br>\n\n\n  <div class=\"box\">\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n            \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                        aria-describedby=\"example1_info\">\n                        <thead>\n                            <tr role=\"row\">\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-sort=\"ascending\"\n                                    aria-label=\"user name: activate to sort column descending\"\n                                    style=\"width: 182px;\">id</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\n                                    name</th>\n                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let material of materials\">\n                                <td class=\"sorting_1\">{{material.title}}</td>\n                                <td><a href=\"{{material.path}}\" download>Download the file</a></td> \n                                <td>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(material.id)\">Delete</button>                                    \n                                </td> \n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                \n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages/pages.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages/pages.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesPagesPagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"wrapper\">\n  <app-header></app-header>\n   <app-side-nav></app-side-nav> \n  <div class=\"content-wrapper\">\n    <router-outlet></router-outlet>\n  </div>\n  \n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"box\">\n  <!-- /.box-header -->\n  <div class=\"box-body\">\n      <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n          \n          <div class=\"row\">\n              <div class=\"col-sm-12\">\n                  <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                      aria-describedby=\"example1_info\">\n                      <thead>\n                          <tr role=\"row\">\n                              <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                  aria-sort=\"ascending\"\n                                  aria-label=\"user name: activate to sort column descending\"\n                                  style=\"width: 182px;\">id</th>\n                              <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                  aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\n                                  name</th>\n                              \n                          </tr>\n                      </thead>\n                      <tbody>\n                          <tr role=\"row\" class=\"even\" *ngFor=\"let subject of subjects\">\n                              <td class=\"sorting_1\">{{subject.id}}</td>\n                              <td>{{subject.name}}</td>                                \n                              <td>                                   \n                                  <button type=\"button\" class=\"btn btn-success\"  [routerLink]=\"['../subjectMaterials/',subject.id]\">get materials</button>\n                                  <button type=\"button\" class=\"btn btn-success\" [routerLink]=\"['../addSubjectMaterials/',subject.id]\"\n                                  *ngIf=\"checkRule('TECH')==true\">add materials</button>\n                              </td> \n                          </tr>\n                      </tbody>\n                      <tfoot>\n                          <tr>\n                              \n                          </tr>\n                      </tfoot>\n                  </table>\n              </div>\n          </div>\n      </div>\n  </div>\n  <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/stage-List/stage-List.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/stage-List/stage-List.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesStageListStageListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<br>\n<br>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addstage')\">create satge</button>\n<br> <br> <br>\n<div class=\"box\">\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n            \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                        aria-describedby=\"example1_info\">\n                        <thead>\n                            <tr role=\"row\">\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-sort=\"ascending\"\n                                    aria-label=\"user name: activate to sort column descending\"\n                                    style=\"width: 182px;\">id</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\n                                    name</th>\n                                \n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let satge of stages\">\n                                <td class=\"sorting_1\">{{satge.id}}</td>\n                                <td>{{satge.name}}</td>                                \n                                <!-- <td>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\n                                </td> -->\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                \n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subject-list/subject-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subject-list/subject-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesSubjectListSubjectListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/addsubject')\">create subject</button>\n<br> <br> <br>\n<div class=\"box\">\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                        aria-describedby=\"example1_info\">\n                        <thead>\n                            <tr role=\"row\">\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-sort=\"ascending\" aria-label=\"user name: activate to sort column descending\"\n                                    style=\"width: 182px;\">id</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\n                                    name</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"stage: activate to sort column ascending\" style=\"width: 225px;\">\n                                    stage</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"category: activate to sort column ascending\" style=\"width: 225px;\">\n                                    category</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"credit_hours: activate to sort column ascending\" style=\"width: 225px;\">\n                                    credit_hours</th>\n\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let subject of subjects\">\n                                <td class=\"sorting_1\">{{subject.id}}</td>\n                                <td>{{subject.name}}</td>\n                                <td>{{subject.category.name}}</td>\n                                <td>{{subject.stage.name}}</td>\n                                <td>{{subject.credit_hours}}</td>\n\n                                <!-- <td>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\n                                </td> -->\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            <tr>\n                                <th rowspan=\"1\" colspan=\"1\">id</th>\n                                <th rowspan=\"1\" colspan=\"1\">name</th>\n\n                            </tr>\n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subjectMaterials/subjectMaterials.component.html":
  /*!**********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subjectMaterials/subjectMaterials.component.html ***!
    \**********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesSubjectMaterialsSubjectMaterialsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/update-user/update-user.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/update-user/update-user.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesUpdateUserUpdateUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br><br>\n<br><br>\n\n\n<div class=\"register-box\">    \n    <div class=\"register-box-body\">\n      <p class=\"login-box-msg\">update user</p>\n  \n      <form #registerForm=\"ngForm\" (ngSubmit)=\"update()\">\n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"user name\" type=\"text\" name=\"username\" [(ngModel)]=\"user.username\"\n            required #username=\"ngModel\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n  \n        <div *ngIf=\"username.invalid && (username.dirty || username.touched)\" class=\"alert alert-danger\">\n  \n          <div *ngIf=\"username.errors.required\">\n            User Name is required.\n          </div>\n  \n        </div>\n  \n  \n        <div class=\"form-group\">\n          <select class=\"form-control\" name=\"user_type\" (change)=\"selected($event.target.value)\"\n            [(ngModel)]=\"user.user_type\" required  #user_type=\"ngModel\" >\n            <option disabled selected>select user type</option>\n            <option [value]='1'>ADMIN</option>\n            <option [value]=\"2\"> STUDENT</option>\n            <option [value]=\"3\">PARENT</option>\n            <option [value]=\"4\">TEACHER</option>\n          </select>\n        </div>\n        <div *ngIf=\"user_type.invalid && (user_type.dirty || user_type.touched)\" class=\"alert alert-danger\">\n  \n          <div *ngIf=\"user_type.errors.required\">\n            User Type is required.\n          </div>\n  \n        </div>\n  \n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"First name\" type=\"text\" name=\"first_name\"\n            [(ngModel)]=\"user.first_name\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n  \n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Last name\" type=\"text\" name=\"last_name\" [(ngModel)]=\"user.last_name\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n  \n  \n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Email\" type=\"email\" name=\"email\" [(ngModel)]=\"user.email\">\n          <span class=\"glyphicon glyphicon-envelope form-control-feedback\"></span>\n        </div>\n  \n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"telephone\" type=\"tel\" name=\"phone\" [(ngModel)]=\"user.phone\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n  \n        <div class=\"form-group has-feedback\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'yyyy/dd/mm/'\" data-mask=\"\" name=\"birth_date\"\n              [(ngModel)]=\"user.birth_date\" required #birth_date=\"ngModel\"> \n          </div>\n        </div>\n  \n        <div *ngIf=\"birth_date.invalid && (birth_date.dirty || birth_date.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"birth_date.errors.required\">\n            User Name is required.\n          </div>\n        </div>\n  \n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Address\" type=\"text\" name=\"address\" [(ngModel)]=\"user.address\">\n          <span class=\"glyphicon glyphicon-map-marker form-control-feedback\"></span>\n        </div>\n  \n  \n        <div class=\"form-group has-feedback\">\n          <input class=\"form-control\" placeholder=\"Password\" type=\"password\" name=\"password\" \n          [(ngModel)]=\"user.password\"  required #password=\"ngModel\">\n          <span class=\"glyphicon glyphicon-lock form-control-feedback\"></span>\n        </div>\n        <div *ngIf=\"password.invalid && (password.dirty || password.touched)\" class=\"alert alert-danger\">\n          <div *ngIf=\"password.errors.required\">\n            User Name is required.\n          </div>\n        </div>\n  \n        <div class=\"form-group\" [hidden]=\"studentHidden\">\n          <select class=\"form-control\" name=\"stage_id\" (change)=\"slectSatge($event.target.value)\"\n            [(ngModel)]=\"user.stage\">\n            <option [value]=\"0\" selected>select student stage</option>\n            <option *ngFor=\"let stage of stages\" [value]=\"stage.id\" [selected]=\"stage.id\">\n              {{stage.name}}\n            </option>\n          </select>\n        </div>\n  \n        <div class=\"form-group\" [hidden]=\"teacherHidden\">\n          <select class=\"form-control\" name=\"category\" (change)=\"selected($event.target.value)\"\n            [(ngModel)]=\"user.category\">\n            <option [value]=\"0\" selected>select category</option>\n            <option *ngFor=\"let category of categories\" [value]=\"category.id\" [selected]=\"category.id\">\n              {{category.name}}\n            </option>\n          </select>\n        </div>\n  \n        <div class=\"form-group has-feedback\" [hidden]=\"teacherHidden\">\n          <div class=\"input-group\">\n            <div class=\"input-group-addon\">\n              <i class=\"fa fa-calendar\"></i>\n            </div>\n            <input type=\"date\" class=\"form-control\" data-inputmask=\"'alias': 'dd/mm/yyyy'\" data-mask=\"\" name=\"hire_date\"\n              [(ngModel)]=\"user.hire_date\">\n          </div>\n        </div>\n  \n        <div class=\"form-group has-feedback\" [hidden]=\"parentHidden\">\n          <input class=\"form-control\" placeholder=\"job\" type=\"text\" name=\"job\" [(ngModel)]=\"user.job\">\n          <span class=\"glyphicon glyphicon-user form-control-feedback\"></span>\n        </div>\n  \n  \n        <div class=\"row\">\n          <!-- /.col -->\n          <div class=\"col-xs-4 col-md-6\">\n            <button class=\"btn btn-primary btn-block btn-flat\" type=\"submit\" \n           [disabled]=\"!registerForm.valid\">Register</button>\n          </div>\n          <!-- /.col -->\n        </div>\n  \n  \n      </form>    \n    </div>\n    <!-- /.form-box -->\n  </div>\n  <!-- /.register-box -->\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/user-subj/user-subj.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/user-subj/user-subj.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesUsersListUserSubjUserSubjComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n<div class=\"form-group\" >\n    <select class=\"form-control\">\n      <option [value]=\"0\" selected>add subject</option>\n      <option *ngFor=\"let subject of subjects\" [value]=\"subject.id\" (click) = \"add(subject)\"> \n        {{subject.name}}\n      </option>\n    </select>\n  </div>\n\n<div class=\"box\">\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n\n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                        aria-describedby=\"example1_info\">\n                        <thead>\n                            <tr role=\"row\">\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-sort=\"ascending\" aria-label=\"user name: activate to sort column descending\"\n                                    style=\"width: 182px;\">id</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"name: activate to sort column ascending\" style=\"width: 225px;\">\n                                    name</th>\n                                <th>\n\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let subject of userSubjects\">\n                                <td class=\"sorting_1\">{{subject.id}}</td>\n                                <td>{{subject.name}}</td>\n                                \n                                <td>\n                                    <button class=\"danger\" (click)=\"remove(subject.name)\">Delete</button>\n                                </td>\n                                \n                            </tr>\n                        </tbody>\n                        <tfoot>\n                           \n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"row\">\n        <button class=\"btn btn-success\" (click)=\"save()\">Save</button>\n    </div>\n    <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/users-list.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/users-list.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesPagesUsersListUsersListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br>\n<br>\n<br>\n<button type=\"submit\" class=\"btn btn-primary\" (click)=\"get('/home/adduser')\">create user</button>\n<br> <br> <br>\n<div class=\"box\">\n    <!-- /.box-header -->\n    <div class=\"box-body\">\n        <div id=\"example1_wrapper\" class=\"dataTables_wrapper form-inline dt-bootstrap\">\n            \n            <div class=\"row\">\n                <div class=\"col-sm-12\">\n                    <table id=\"example1\" class=\"table table-bordered table-striped dataTable\" role=\"grid\"\n                        aria-describedby=\"example1_info\">\n                        <thead>\n                            <tr role=\"row\">\n                                <th class=\"sorting_asc\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-sort=\"ascending\"\n                                    aria-label=\"user name: activate to sort column descending\"\n                                    style=\"width: 182px;\">user name</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"email: activate to sort column ascending\" style=\"width: 225px;\">\n                                    email</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"user type: activate to sort column ascending\" style=\"width: 199px;\">\n                                    user type</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"is superuser: activate to sort column ascending\"\n                                    style=\"width: 156px;\">is superuser</th>\n                                <th class=\"sorting\" tabindex=\"0\" aria-controls=\"example1\" rowspan=\"1\" colspan=\"1\"\n                                    aria-label=\"CSS grade: activate to sort column ascending\" style=\"width: 113px;\">Actions\n                                    </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr role=\"row\" class=\"even\" *ngFor=\"let user of users\">\n                                <td class=\"sorting_1\">{{user.username}}</td>\n                                <td>{{user.email}}</td>\n                                <td>{{user.user_type}}</td>\n                                <td>{{user.is_superuser}}</td>\n                                <td>\n                                    <button type=\"button\" class=\"btn btn-danger\" (click)=\"remove(user.id)\">Delete</button>\n                                    <button type=\"button\" class=\"btn btn-success\" (click)=\"update(user)\">Update</button>\n                                    <a type=\"button\" class=\"btn btn-success\" [routerLink]=\"['/home/user-subj', user.id]\">subjects</a>\n                                </td>\n                            </tr>\n                        </tbody>\n                        <tfoot>\n                            \n                        </tfoot>\n                    </table>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- /.box-body -->\n</div>";
    /***/
  },

  /***/
  "./src/app/Service/category.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/Service/category.service.ts ***!
    \*********************************************/

  /*! exports provided: CategoryService */

  /***/
  function srcAppServiceCategoryServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryService", function () {
      return CategoryService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var CategoryService =
    /*#__PURE__*/
    function () {
      function CategoryService(http) {
        _classCallCheck(this, CategoryService);

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

      _createClass(CategoryService, [{
        key: "getListCategories",
        value: function getListCategories() {
          return this.http.get(this.baseUrl, this.httpOptions);
        }
      }, {
        key: "addCategory",
        value: function addCategory(category) {
          return this.http.post(this.baseUrl, category, this.httpOptions);
        }
      }]);

      return CategoryService;
    }();

    CategoryService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    CategoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CategoryService);
    /***/
  },

  /***/
  "./src/app/Service/exams.service.ts":
  /*!******************************************!*\
    !*** ./src/app/Service/exams.service.ts ***!
    \******************************************/

  /*! exports provided: ExamsService */

  /***/
  function srcAppServiceExamsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamsService", function () {
      return ExamsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var ExamsService =
    /*#__PURE__*/
    function () {
      function ExamsService(http) {
        _classCallCheck(this, ExamsService);

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

      _createClass(ExamsService, [{
        key: "addExam",
        value: function addExam(exam) {
          return this.http.post(this.baseUrl, exam, this.httpOptions);
        }
      }, {
        key: "getExam",
        value: function getExam(id) {
          return this.http.get(this.baseUrl + id, this.httpOptions);
        }
      }, {
        key: "getAllExam",
        value: function getAllExam() {
          return this.http.get(this.baseUrl, this.httpOptions);
        }
      }, {
        key: "addQuestions",
        value: function addQuestions(id, question) {
          return this.http.post(this.baseUrl + id + "/addQuestions/", question, this.httpOptions);
        }
      }, {
        key: "getExamQuestions",
        value: function getExamQuestions(id) {
          return this.http.get(this.baseUrl + id + "/questions", this.httpOptions);
        }
      }]);

      return ExamsService;
    }();

    ExamsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ExamsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ExamsService);
    /***/
  },

  /***/
  "./src/app/Service/material.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/Service/material.service.ts ***!
    \*********************************************/

  /*! exports provided: MaterialService */

  /***/
  function srcAppServiceMaterialServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialService", function () {
      return MaterialService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var MaterialService =
    /*#__PURE__*/
    function () {
      function MaterialService(http) {
        _classCallCheck(this, MaterialService);

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

      _createClass(MaterialService, [{
        key: "getList",
        value: function getList() {
          return this.http.get(this.baseUrl, this.httpOptions);
        }
      }, {
        key: "save",
        value: function save(material) {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Token " + this.token);
          var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: material
          };
          return fetch("https://smart-school-project.herokuapp.com/api/materials/", requestOptions);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          return this.http.delete(this.baseUrl + id, this.httpOptions);
        }
      }]);

      return MaterialService;
    }();

    MaterialService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    MaterialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MaterialService);
    /***/
  },

  /***/
  "./src/app/Service/satges.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/Service/satges.service.ts ***!
    \*******************************************/

  /*! exports provided: SatgesService */

  /***/
  function srcAppServiceSatgesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SatgesService", function () {
      return SatgesService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SatgesService =
    /*#__PURE__*/
    function () {
      function SatgesService(http) {
        _classCallCheck(this, SatgesService);

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

      _createClass(SatgesService, [{
        key: "getListStages",
        value: function getListStages() {
          return this.http.get(this.baseUrl, this.httpOptions);
        }
      }, {
        key: "addStage",
        value: function addStage(satge) {
          return this.http.post(this.baseUrl, satge, this.httpOptions);
        }
      }]);

      return SatgesService;
    }();

    SatgesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SatgesService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SatgesService);
    /***/
  },

  /***/
  "./src/app/Service/sbject.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/Service/sbject.service.ts ***!
    \*******************************************/

  /*! exports provided: SbjectService */

  /***/
  function srcAppServiceSbjectServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SbjectService", function () {
      return SbjectService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var SbjectService =
    /*#__PURE__*/
    function () {
      function SbjectService(http) {
        _classCallCheck(this, SbjectService);

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

      _createClass(SbjectService, [{
        key: "getListSubjects",
        value: function getListSubjects() {
          return this.http.get(this.baseUrl, this.httpOptions);
        }
      }, {
        key: "addSsubject",
        value: function addSsubject(subject) {
          return this.http.post(this.baseUrl, subject, this.httpOptions);
        }
      }, {
        key: "getUserSubjects",
        value: function getUserSubjects(id) {
          return this.http.get("https://smart-school-project.herokuapp.com/api/users/" + id + "/subjects", this.httpOptions);
        }
      }, {
        key: "getSubjectMAterial",
        value: function getSubjectMAterial(id) {
          return this.http.get("https://smart-school-project.herokuapp.com/api/subjects/" + id + "/materials", this.httpOptions);
        }
      }]);

      return SbjectService;
    }();

    SbjectService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    SbjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SbjectService);
    /***/
  },

  /***/
  "./src/app/Service/user-list.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/Service/user-list.service.ts ***!
    \**********************************************/

  /*! exports provided: UserListService */

  /***/
  function srcAppServiceUserListServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserListService", function () {
      return UserListService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserListService =
    /*#__PURE__*/
    function () {
      function UserListService(http) {
        _classCallCheck(this, UserListService);

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

      _createClass(UserListService, [{
        key: "getAllUsers",
        value: function getAllUsers() {
          return this.http.get(this.baseUrl + "users", this.httpOptions);
        }
      }, {
        key: "registerUser",
        value: function registerUser(user) {
          return this.http.post("https://smart-school-project.herokuapp.com/api/users/", user, this.httpOptions);
        }
      }, {
        key: "removeUser",
        value: function removeUser(id) {
          id = Number(id);
          return this.http.delete(this.baseUrl + "users/" + id, this.httpOptions);
        }
      }, {
        key: "updateUser",
        value: function updateUser(user) {
          return this.http.patch(this.baseUrl + "users/" + Number(user.id), user, this.httpOptions);
        }
      }]);

      return UserListService;
    }();

    UserListService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserListService);
    /***/
  },

  /***/
  "./src/app/Service/user-subjects.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/Service/user-subjects.service.ts ***!
    \**************************************************/

  /*! exports provided: UserSubjectsService */

  /***/
  function srcAppServiceUserSubjectsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSubjectsService", function () {
      return UserSubjectsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    var UserSubjectsService =
    /*#__PURE__*/
    function () {
      function UserSubjectsService(http) {
        _classCallCheck(this, UserSubjectsService);

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

      _createClass(UserSubjectsService, [{
        key: "getUserSubjects",
        value: function getUserSubjects(id) {
          return this.http.get(this.baseUrl + id + "/subjects", this.httpOptions);
        }
      }, {
        key: "updateUserSubjects",
        value: function updateUserSubjects(id, subjects) {
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "token " + this.token);
          var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: subjects
          };
          fetch("https://smart-school-project.herokuapp.com/api/users/" + id + "/", requestOptions).then(function (response) {
            return response.text();
          }).then(function (result) {
            return console.log(result);
          }).catch(function (error) {
            return console.log('error', error);
          });
        }
      }]);

      return UserSubjectsService;
    }();

    UserSubjectsService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserSubjectsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserSubjectsService);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-category/add-category.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/modules/pages/add-category/add-category.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddCategoryAddCategoryComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLWNhdGVnb3J5L2FkZC1jYXRlZ29yeS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-category/add-category.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/pages/add-category/add-category.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddCategoryComponent */

  /***/
  function srcAppModulesPagesAddCategoryAddCategoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddCategoryComponent", function () {
      return AddCategoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/category.service */
    "./src/app/Service/category.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var AddCategoryComponent =
    /*#__PURE__*/
    function () {
      function AddCategoryComponent(categoryService, sharedSevice, auth) {
        _classCallCheck(this, AddCategoryComponent);

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

      _createClass(AddCategoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCategory",
        value: function addCategory() {
          var _this = this;

          this.categoryService.addCategory(this.category).subscribe(function () {
            _this.sharedSevice.navigate("/home/categories");
          });
        }
      }]);

      return AddCategoryComponent;
    }();

    AddCategoryComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AddCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-category',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-category.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-category/add-category.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-category.component.scss */
      "./src/app/modules/pages/add-category/add-category.component.scss")).default]
    })], AddCategoryComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-exam/add-exam.component.css":
  /*!***************************************************************!*\
    !*** ./src/app/modules/pages/add-exam/add-exam.component.css ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddExamAddExamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLWV4YW0vYWRkLWV4YW0uY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-exam/add-exam.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/pages/add-exam/add-exam.component.ts ***!
    \**************************************************************/

  /*! exports provided: AddExamComponent */

  /***/
  function srcAppModulesPagesAddExamAddExamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddExamComponent", function () {
      return AddExamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/exams.service */
    "./src/app/Service/exams.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var AddExamComponent =
    /*#__PURE__*/
    function () {
      function AddExamComponent(examService, sharedservice, auth) {
        _classCallCheck(this, AddExamComponent);

        this.examService = examService;
        this.sharedservice = sharedservice;
        this.auth = auth;
        this.model = {};
        auth.logOut();
      }

      _createClass(AddExamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addExam",
        value: function addExam() {
          var _this2 = this;

          this.examService.addExam(this.model).subscribe(function () {
            alert("added success");

            _this2.sharedservice.navigate("home/exams");
          });
        }
      }]);

      return AddExamComponent;
    }();

    AddExamComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__["ExamsService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AddExamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-exam',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-exam.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-exam/add-exam.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-exam.component.css */
      "./src/app/modules/pages/add-exam/add-exam.component.css")).default]
    })], AddExamComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-material/add-material.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/pages/add-material/add-material.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddMaterialAddMaterialComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".loader {\n    border: 25px solid #f3f3f3; /* Light grey */\n    border-top: 25px solid #3498db; /* Blue */\n    border-radius: 50%;\n    width: 240px;\n    height: 240px;\n    -webkit-animation: spin 2s linear infinite;\n            animation: spin 2s linear infinite;\n    position: absolute;\n    top:32%;\n    left: 44%;\n   \n  }\n  \n  @-webkit-keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n  \n  @keyframes spin {\n    0% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n    100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hZGQtbWF0ZXJpYWwvYWRkLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSwwQkFBMEIsRUFBRSxlQUFlO0lBQzNDLDhCQUE4QixFQUFFLFNBQVM7SUFDekMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsMENBQWtDO1lBQWxDLGtDQUFrQztJQUNsQyxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFNBQVM7O0VBRVg7O0VBRUE7SUFDRSxLQUFLLCtCQUF1QixFQUF2Qix1QkFBdUIsRUFBRTtJQUM5QixPQUFPLGlDQUF5QixFQUF6Qix5QkFBeUIsRUFBRTtFQUNwQzs7RUFIQTtJQUNFLEtBQUssK0JBQXVCLEVBQXZCLHVCQUF1QixFQUFFO0lBQzlCLE9BQU8saUNBQXlCLEVBQXpCLHlCQUF5QixFQUFFO0VBQ3BDIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wYWdlcy9hZGQtbWF0ZXJpYWwvYWRkLW1hdGVyaWFsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9hZGVyIHtcbiAgICBib3JkZXI6IDI1cHggc29saWQgI2YzZjNmMzsgLyogTGlnaHQgZ3JleSAqL1xuICAgIGJvcmRlci10b3A6IDI1cHggc29saWQgIzM0OThkYjsgLyogQmx1ZSAqL1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBhbmltYXRpb246IHNwaW4gMnMgbGluZWFyIGluZmluaXRlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6MzIlO1xuICAgIGxlZnQ6IDQ0JTtcbiAgIFxuICB9XG4gIFxuICBAa2V5ZnJhbWVzIHNwaW4ge1xuICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAxMDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-material/add-material.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/pages/add-material/add-material.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddMaterialComponent */

  /***/
  function srcAppModulesPagesAddMaterialAddMaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddMaterialComponent", function () {
      return AddMaterialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/sbject.service */
    "./src/app/Service/sbject.service.ts");
    /* harmony import */


    var src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/material.service */
    "./src/app/Service/material.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var AddMaterialComponent =
    /*#__PURE__*/
    function () {
      function AddMaterialComponent(materialService, subjectService, auth) {
        _classCallCheck(this, AddMaterialComponent);

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

      _createClass(AddMaterialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.subjectService.getListSubjects().subscribe(function (response) {
            _this3.subjects = response;
          });
        }
      }, {
        key: "setSubject",
        value: function setSubject(subjectId) {
          this.model.subject = subjectId;
        }
      }, {
        key: "fileChange",
        value: function fileChange(event) {
          var fileList = event.target.files;

          if (fileList.length > 0) {
            var file = fileList[0];
            this.form.append("subject", this.model.subject.toString());
            this.form.append("material_type", "pdf");
            this.form.append("title", this.model.title);
            this.form.append("path", file, file.name);
            this.form.append("notes", this.model.notes);
          }
        }
      }, {
        key: "addMaterial",
        value: function addMaterial() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.loaderHidden = false;
                    _context.next = 3;
                    return this.delay(300);

                  case 3:
                    this.materialService.save(this.form).then(function (response) {
                      return alert("added succefully");
                    }).then(function (result) {
                      return console.log(result);
                    }).catch(function (error) {
                      return console.log('error', error);
                    });
                    this.loaderHidden = true;

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "delay",
        value: function delay(ms) {
          return new Promise(function (resolve) {
            return setTimeout(resolve, ms);
          });
        }
      }]);

      return AddMaterialComponent;
    }();

    AddMaterialComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"]
      }, {
        type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__["SbjectService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AddMaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-material',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-material.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-material/add-material.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-material.component.css */
      "./src/app/modules/pages/add-material/add-material.component.css")).default]
    })], AddMaterialComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-parent/add-parent.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/modules/pages/add-parent/add-parent.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddParentAddParentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXBhcmVudC9hZGQtcGFyZW50LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-parent/add-parent.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/pages/add-parent/add-parent.component.ts ***!
    \******************************************************************/

  /*! exports provided: AddParentComponent */

  /***/
  function srcAppModulesPagesAddParentAddParentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddParentComponent", function () {
      return AddParentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddParentComponent =
    /*#__PURE__*/
    function () {
      function AddParentComponent() {
        _classCallCheck(this, AddParentComponent);
      }

      _createClass(AddParentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddParentComponent;
    }();

    AddParentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-parent',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-parent.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-parent/add-parent.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-parent.component.scss */
      "./src/app/modules/pages/add-parent/add-parent.component.scss")).default]
    })], AddParentComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-question/add-question.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/pages/add-question/add-question.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddQuestionAddQuestionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXF1ZXN0aW9uL2FkZC1xdWVzdGlvbi5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-question/add-question.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/pages/add-question/add-question.component.ts ***!
    \**********************************************************************/

  /*! exports provided: AddQuestionComponent */

  /***/
  function srcAppModulesPagesAddQuestionAddQuestionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddQuestionComponent", function () {
      return AddQuestionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/exams.service */
    "./src/app/Service/exams.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var AddQuestionComponent =
    /*#__PURE__*/
    function () {
      function AddQuestionComponent(examservice, auth) {
        _classCallCheck(this, AddQuestionComponent);

        this.examservice = examservice;
        this.auth = auth;
        this.exam = {};
        this.questions = [];
        this.model = {};
        this.questionList = [];
        auth.logOut();
        this.exam = JSON.parse(localStorage.getItem('examdata'));
      }

      _createClass(AddQuestionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.examservice.getExamQuestions(1).subscribe(function (data) {
            _this4.questions = data.data;
            console.log(_this4.questions);
          });
        }
      }, {
        key: "addQuestion",
        value: function addQuestion() {
          var _this5 = this;

          this.model.mark = this.model.mark.toString();
          this.questionList.push(this.model);
          this.examservice.addQuestions(this.exam.id, this.questionList).subscribe(function () {
            alert("done");

            _this5.questions.push(_this5.model);
          });
        }
      }]);

      return AddQuestionComponent;
    }();

    AddQuestionComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__["ExamsService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }];
    };

    AddQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-question',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-question.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-question/add-question.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-question.component.css */
      "./src/app/modules/pages/add-question/add-question.component.css")).default]
    })], AddQuestionComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-stage/add-stage.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/pages/add-stage/add-stage.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddStageAddStageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXN0YWdlL2FkZC1zdGFnZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-stage/add-stage.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/pages/add-stage/add-stage.component.ts ***!
    \****************************************************************/

  /*! exports provided: AddStageComponent */

  /***/
  function srcAppModulesPagesAddStageAddStageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStageComponent", function () {
      return AddStageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/satges.service */
    "./src/app/Service/satges.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var AddStageComponent =
    /*#__PURE__*/
    function () {
      function AddStageComponent(satgeService, sharedSevice, auth) {
        _classCallCheck(this, AddStageComponent);

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

      _createClass(AddStageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addStage",
        value: function addStage() {
          var _this6 = this;

          this.satgeService.addStage(this.stage).subscribe(function () {
            _this6.sharedSevice.navigate("/home/stages");
          });
        }
      }]);

      return AddStageComponent;
    }();

    AddStageComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__["SatgesService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AddStageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-stage',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-stage.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-stage/add-stage.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-stage.component.css */
      "./src/app/modules/pages/add-stage/add-stage.component.css")).default]
    })], AddStageComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-student/add-student.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/pages/add-student/add-student.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddStudentAddStudentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXN0dWRlbnQvYWRkLXN0dWRlbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-student/add-student.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/pages/add-student/add-student.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddStudentComponent */

  /***/
  function srcAppModulesPagesAddStudentAddStudentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddStudentComponent", function () {
      return AddStudentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddStudentComponent =
    /*#__PURE__*/
    function () {
      function AddStudentComponent() {
        _classCallCheck(this, AddStudentComponent);
      }

      _createClass(AddStudentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddStudentComponent;
    }();

    AddStudentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-student',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-student.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-student/add-student.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-student.component.scss */
      "./src/app/modules/pages/add-student/add-student.component.scss")).default]
    })], AddStudentComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-subject/add-subject.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/pages/add-subject/add-subject.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddSubjectAddSubjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXN1YmplY3QvYWRkLXN1YmplY3QuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-subject/add-subject.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/pages/add-subject/add-subject.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddSubjectComponent */

  /***/
  function srcAppModulesPagesAddSubjectAddSubjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSubjectComponent", function () {
      return AddSubjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/sbject.service */
    "./src/app/Service/sbject.service.ts");
    /* harmony import */


    var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/satges.service */
    "./src/app/Service/satges.service.ts");
    /* harmony import */


    var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/category.service */
    "./src/app/Service/category.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AddSubjectComponent =
    /*#__PURE__*/
    function () {
      function AddSubjectComponent(router, subjectService, auth, sharedservice, stageService, categoryService) {
        var _this7 = this;

        _classCallCheck(this, AddSubjectComponent);

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
          next: function next(data) {
            return _this7.satges = data;
          },
          error: function error(err) {
            return console.error('Observer got an error: ' + err);
          },
          complete: function complete() {
            _this7.categoryService.getListCategories().subscribe(_this7.categoryObserver);
          }
        };
        this.categoryObserver = {
          next: function next(data) {
            return _this7.categories = data;
          },
          error: function error(err) {
            return console.error('Observer got an error: ' + err);
          },
          complete: function complete() {}
        };
        auth.logOut();
        var result = this.auth.getusertype();

        if (result != 'ADM') {
          this.sharedservice.navigate("home");
        }
      }

      _createClass(AddSubjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.stageService.getListStages().subscribe(this.satgesObserver);
        }
      }, {
        key: "setStage",
        value: function setStage(stage) {
          this.subject.stage = stage;
        }
      }, {
        key: "setcategory",
        value: function setcategory(cat) {
          this.subject.category = cat;
        }
      }, {
        key: "addSubject",
        value: function addSubject() {
          var _this8 = this;

          this.subjectService.addSsubject(this.subject).subscribe(function () {
            alert("Added succesfully");

            _this8.router.navigateByUrl("/home/subjects");
          });
        }
      }]);

      return AddSubjectComponent;
    }();

    AddSubjectComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__["SbjectService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__["SharedMethodService"]
      }, {
        type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_3__["SatgesService"]
      }, {
        type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }];
    };

    AddSubjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-subject',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-subject.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-subject/add-subject.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-subject.component.scss */
      "./src/app/modules/pages/add-subject/add-subject.component.scss")).default]
    })], AddSubjectComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-teacher/add-teacher.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/pages/add-teacher/add-teacher.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddTeacherAddTeacherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXRlYWNoZXIvYWRkLXRlYWNoZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-teacher/add-teacher.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/pages/add-teacher/add-teacher.component.ts ***!
    \********************************************************************/

  /*! exports provided: AddTeacherComponent */

  /***/
  function srcAppModulesPagesAddTeacherAddTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddTeacherComponent", function () {
      return AddTeacherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddTeacherComponent =
    /*#__PURE__*/
    function () {
      function AddTeacherComponent() {
        _classCallCheck(this, AddTeacherComponent);
      }

      _createClass(AddTeacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddTeacherComponent;
    }();

    AddTeacherComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-teacher',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-teacher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-teacher/add-teacher.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-teacher.component.scss */
      "./src/app/modules/pages/add-teacher/add-teacher.component.scss")).default]
    })], AddTeacherComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/add-user/add-user.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/modules/pages/add-user/add-user.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddUserAddUserComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkLXVzZXIvYWRkLXVzZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/add-user/add-user.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/modules/pages/add-user/add-user.component.ts ***!
    \**************************************************************/

  /*! exports provided: AddUserComponent */

  /***/
  function srcAppModulesPagesAddUserAddUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddUserComponent", function () {
      return AddUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/user-list.service */
    "./src/app/Service/user-list.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/category.service */
    "./src/app/Service/category.service.ts");
    /* harmony import */


    var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Service/satges.service */
    "./src/app/Service/satges.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var AddUserComponent =
    /*#__PURE__*/
    function () {
      function AddUserComponent(userl, datePipe, ctegorService, stageService, shareS, auth) {
        _classCallCheck(this, AddUserComponent);

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
          address: ""
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

      _createClass(AddUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getcategories",
        value: function getcategories() {
          var _this9 = this;

          this.ctegorService.getListCategories().subscribe(function (data) {
            _this9.categories = data;
          });
        }
      }, {
        key: "getStages",
        value: function getStages() {
          var _this10 = this;

          this.stageService.getListStages().subscribe(function (data) {
            _this10.stages = data;
          });
        } //slect user type and maping values

      }, {
        key: "selected",
        value: function selected(value) {
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
      }, {
        key: "setcategory",
        value: function setcategory(cat) {
          this.user.category = Number(cat);
        }
      }, {
        key: "register",
        value: function register() {
          var _this11 = this;

          console.log(this.user);
          this.user.user_type = this.type;
          var date = this.user.birth_date;
          var date1 = this.datePipe.transform(date, "yyyy-MM-dd");
          this.userl.registerUser(this.user).subscribe(function (resposnse) {
            console.log(resposnse);
            _this11.user.user_type = "0";

            _this11.shareS.navigate("/home/users");
          });
        }
      }]);

      return AddUserComponent;
    }();

    AddUserComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
      }, {
        type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__["SatgesService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"]
      }];
    };

    AddUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/add-user/add-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-user.component.scss */
      "./src/app/modules/pages/add-user/add-user.component.scss")).default]
    })], AddUserComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.css":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.css ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesAddSubjectMaterialAddSubjectMaterialComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvYWRkU3ViamVjdE1hdGVyaWFsL2FkZFN1YmplY3RNYXRlcmlhbC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: AddSubjectMaterialComponent */

  /***/
  function srcAppModulesPagesAddSubjectMaterialAddSubjectMaterialComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddSubjectMaterialComponent", function () {
      return AddSubjectMaterialComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sbject.service */
    "./src/app/Service/sbject.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");
    /* harmony import */


    var src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Service/material.service */
    "./src/app/Service/material.service.ts");

    var AddSubjectMaterialComponent =
    /*#__PURE__*/
    function () {
      function AddSubjectMaterialComponent(materialService, router, subjectService, auth) {
        _classCallCheck(this, AddSubjectMaterialComponent);

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

      _createClass(AddSubjectMaterialComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subjectId = this.router.snapshot.params['id'];
          this.model.subject = this.subjectId;
        }
      }, {
        key: "fileChange",
        value: function fileChange(event) {
          var fileList = event.target.files;

          if (fileList.length > 0) {
            var file = fileList[0];
            this.form.append("subject", this.model.subject.toString());
            this.form.append("material_type", "pdf");
            this.form.append("title", this.model.title);
            this.form.append("path", file, file.name);
            this.form.append("notes", this.model.notes);
          }
        }
      }, {
        key: "addMaterial",
        value: function addMaterial() {
          this.materialService.save(this.form);
        }
      }]);

      return AddSubjectMaterialComponent;
    }();

    AddSubjectMaterialComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_5__["MaterialService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__["SbjectService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    AddSubjectMaterialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-addSubjectMaterial',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./addSubjectMaterial.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./addSubjectMaterial.component.css */
      "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.css")).default]
    })], AddSubjectMaterialComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/category-list/category-list.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/pages/category-list/category-list.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesCategoryListCategoryListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvY2F0ZWdvcnktbGlzdC9jYXRlZ29yeS1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/category-list/category-list.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/pages/category-list/category-list.component.ts ***!
    \************************************************************************/

  /*! exports provided: CategoryListComponent */

  /***/
  function srcAppModulesPagesCategoryListCategoryListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CategoryListComponent", function () {
      return CategoryListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/category.service */
    "./src/app/Service/category.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var CategoryListComponent =
    /*#__PURE__*/
    function () {
      function CategoryListComponent(categoryservice, sharedservice, auth) {
        _classCallCheck(this, CategoryListComponent);

        this.categoryservice = categoryservice;
        this.sharedservice = sharedservice;
        this.auth = auth;
        auth.logOut();
        var result = this.auth.getusertype();

        if (result != 'ADM') {
          this.sharedservice.navigate("home");
        }
      }

      _createClass(CategoryListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.categoryservice.getListCategories().subscribe(function (data) {
            _this12.categories = data;
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          this.sharedservice.navigate(url);
        }
      }]);

      return CategoryListComponent;
    }();

    CategoryListComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_2__["CategoryService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    CategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-category-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./category-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/category-list/category-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./category-list.component.css */
      "./src/app/modules/pages/category-list/category-list.component.css")).default]
    })], CategoryListComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/dash-board/dash-board.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/modules/pages/dash-board/dash-board.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesDashBoardDashBoardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZGFzaC1ib2FyZC9kYXNoLWJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/dash-board/dash-board.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/pages/dash-board/dash-board.component.ts ***!
    \******************************************************************/

  /*! exports provided: DashBoardComponent */

  /***/
  function srcAppModulesPagesDashBoardDashBoardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function () {
      return DashBoardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var DashBoardComponent =
    /*#__PURE__*/
    function () {
      function DashBoardComponent(auth) {
        _classCallCheck(this, DashBoardComponent);

        this.auth = auth;
        auth.logOut();
      }

      _createClass(DashBoardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DashBoardComponent;
    }();

    DashBoardComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    DashBoardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dash-board',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dash-board.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/dash-board/dash-board.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dash-board.component.scss */
      "./src/app/modules/pages/dash-board/dash-board.component.scss")).default]
    })], DashBoardComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/exam-list/exam-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/pages/exam-list/exam-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesExamListExamListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvZXhhbS1saXN0L2V4YW0tbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/exam-list/exam-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/pages/exam-list/exam-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: ExamListComponent */

  /***/
  function srcAppModulesPagesExamListExamListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExamListComponent", function () {
      return ExamListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/exams.service */
    "./src/app/Service/exams.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var ExamListComponent =
    /*#__PURE__*/
    function () {
      function ExamListComponent(examservice, sharedservice, auth) {
        _classCallCheck(this, ExamListComponent);

        this.examservice = examservice;
        this.sharedservice = sharedservice;
        this.auth = auth;
        auth.logOut();
      }

      _createClass(ExamListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.examservice.getAllExam().subscribe(function (data) {
            _this13.exams = data;
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          this.sharedservice.navigate(url);
        }
      }, {
        key: "select",
        value: function select(exam) {
          localStorage.setItem('examdata', JSON.stringify(exam));
          this.sharedservice.navigate('/home/addquestion');
        }
      }]);

      return ExamListComponent;
    }();

    ExamListComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_exams_service__WEBPACK_IMPORTED_MODULE_2__["ExamsService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    ExamListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-exam-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./exam-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/exam-list/exam-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./exam-list.component.css */
      "./src/app/modules/pages/exam-list/exam-list.component.css")).default]
    })], ExamListComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/material-list/material-list.component.css":
  /*!*************************************************************************!*\
    !*** ./src/app/modules/pages/material-list/material-list.component.css ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesMaterialListMaterialListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvbWF0ZXJpYWwtbGlzdC9tYXRlcmlhbC1saXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/material-list/material-list.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/pages/material-list/material-list.component.ts ***!
    \************************************************************************/

  /*! exports provided: MaterialListComponent */

  /***/
  function srcAppModulesPagesMaterialListMaterialListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialListComponent", function () {
      return MaterialListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/material.service */
    "./src/app/Service/material.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var MaterialListComponent =
    /*#__PURE__*/
    function () {
      function MaterialListComponent(sharedservice, mterialService, auth) {
        var _this14 = this;

        _classCallCheck(this, MaterialListComponent);

        this.sharedservice = sharedservice;
        this.mterialService = mterialService;
        this.auth = auth;
        this.materialObserver = {
          next: function next(data) {
            return _this14.getMaterials();
          },
          error: function error(err) {
            return console.error('Observer got an error: ' + err);
          },
          complete: function complete() {
            _this14.materials.splice(_this14.materials.indexOf(_this14.matrialId), 1);
          }
        };
        auth.logOut();
      }

      _createClass(MaterialListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getMaterials();
        }
      }, {
        key: "getMaterials",
        value: function getMaterials() {
          var _this15 = this;

          this.mterialService.getList().subscribe(function (data) {
            _this15.materials = data;
            console.log(data);
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          this.sharedservice.navigate(url);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          this.matrialId = id;
          this.mterialService.remove(id).subscribe(this.materialObserver);
        }
      }]);

      return MaterialListComponent;
    }();

    MaterialListComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_2__["SharedMethodService"]
      }, {
        type: src_app_Service_material_service__WEBPACK_IMPORTED_MODULE_3__["MaterialService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    MaterialListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-material-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./material-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/material-list/material-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./material-list.component.css */
      "./src/app/modules/pages/material-list/material-list.component.css")).default]
    })], MaterialListComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/pages-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/pages/pages-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: PagesRoutingModule */

  /***/
  function srcAppModulesPagesPagesRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesRoutingModule", function () {
      return PagesRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/modules/pages/pages/pages.component.ts");
    /* harmony import */


    var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./dash-board/dash-board.component */
    "./src/app/modules/pages/dash-board/dash-board.component.ts");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/modules/pages/add-user/add-user.component.ts");
    /* harmony import */


    var _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./add-parent/add-parent.component */
    "./src/app/modules/pages/add-parent/add-parent.component.ts");
    /* harmony import */


    var _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-teacher/add-teacher.component */
    "./src/app/modules/pages/add-teacher/add-teacher.component.ts");
    /* harmony import */


    var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-student/add-student.component */
    "./src/app/modules/pages/add-student/add-student.component.ts");
    /* harmony import */


    var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-category/add-category.component */
    "./src/app/modules/pages/add-category/add-category.component.ts");
    /* harmony import */


    var _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./add-subject/add-subject.component */
    "./src/app/modules/pages/add-subject/add-subject.component.ts");
    /* harmony import */


    var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./users-list/users-list.component */
    "./src/app/modules/pages/users-list/users-list.component.ts");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/modules/pages/update-user/update-user.component.ts");
    /* harmony import */


    var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./category-list/category-list.component */
    "./src/app/modules/pages/category-list/category-list.component.ts");
    /* harmony import */


    var _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./stage-List/stage-List.component */
    "./src/app/modules/pages/stage-List/stage-List.component.ts");
    /* harmony import */


    var _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./add-stage/add-stage.component */
    "./src/app/modules/pages/add-stage/add-stage.component.ts");
    /* harmony import */


    var _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./subject-list/subject-list.component */
    "./src/app/modules/pages/subject-list/subject-list.component.ts");
    /* harmony import */


    var _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./users-list/user-subj/user-subj.component */
    "./src/app/modules/pages/users-list/user-subj/user-subj.component.ts");
    /* harmony import */


    var _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./add-material/add-material.component */
    "./src/app/modules/pages/add-material/add-material.component.ts");
    /* harmony import */


    var _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./material-list/material-list.component */
    "./src/app/modules/pages/material-list/material-list.component.ts");
    /* harmony import */


    var _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./exam-list/exam-list.component */
    "./src/app/modules/pages/exam-list/exam-list.component.ts");
    /* harmony import */


    var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./add-exam/add-exam.component */
    "./src/app/modules/pages/add-exam/add-exam.component.ts");
    /* harmony import */


    var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./add-question/add-question.component */
    "./src/app/modules/pages/add-question/add-question.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/modules/pages/profile/profile.component.ts");
    /* harmony import */


    var _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./subjectMaterials/subjectMaterials.component */
    "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts");
    /* harmony import */


    var _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./addSubjectMaterial/addSubjectMaterial.component */
    "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts");

    var routes = [{
      path: '',
      component: _pages_pages_component__WEBPACK_IMPORTED_MODULE_3__["PagesComponent"],
      children: [{
        path: '',
        component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__["DashBoardComponent"]
      }, {
        path: 'adduser',
        component: _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_5__["AddUserComponent"]
      }, {
        path: 'UpdateUser',
        component: _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_12__["UpdateUserComponent"]
      }, {
        path: 'AddParent',
        component: _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_6__["AddParentComponent"]
      }, {
        path: 'AddTeacher',
        component: _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_7__["AddTeacherComponent"]
      }, {
        path: 'AddStudent',
        component: _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_8__["AddStudentComponent"]
      }, {
        path: 'addcategory',
        component: _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_9__["AddCategoryComponent"]
      }, {
        path: 'addsubject',
        component: _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_10__["AddSubjectComponent"]
      }, {
        path: 'users',
        component: _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_11__["UsersListComponent"]
      }, {
        path: "stages",
        component: _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_14__["StageListComponent"]
      }, {
        path: "addstage",
        component: _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_15__["AddStageComponent"]
      }, {
        path: 'categories',
        component: _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_13__["CategoryListComponent"]
      }, {
        path: 'subjects',
        component: _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_16__["SubjectListComponent"]
      }, {
        path: 'user-subj/:id',
        component: _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_17__["UserSubjComponent"]
      }, {
        path: 'addmaterial',
        component: _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_18__["AddMaterialComponent"]
      }, {
        path: 'materials',
        component: _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_19__["MaterialListComponent"]
      }, {
        path: 'exams',
        component: _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_20__["ExamListComponent"]
      }, {
        path: 'addexam',
        component: _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_21__["AddExamComponent"]
      }, {
        path: 'addquestion',
        component: _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_22__["AddQuestionComponent"]
      }, {
        path: 'userMaterials',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_23__["ProfileComponent"]
      }, {
        path: 'subjectMaterials/:id',
        component: _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_24__["SubjectMaterialsComponent"]
      }, {
        path: 'addSubjectMaterials/:id',
        component: _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_25__["AddSubjectMaterialComponent"]
      }, {
        path: "**",
        component: _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_4__["DashBoardComponent"]
      }]
    }];

    var PagesRoutingModule = function PagesRoutingModule() {
      _classCallCheck(this, PagesRoutingModule);
    };

    PagesRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PagesRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/pages/pages.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/pages/pages.module.ts ***!
    \***********************************************/

  /*! exports provided: PagesModule */

  /***/
  function srcAppModulesPagesPagesModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesModule", function () {
      return PagesModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages-routing.module */
    "./src/app/modules/pages/pages-routing.module.ts");
    /* harmony import */


    var _pages_pages_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/pages.component */
    "./src/app/modules/pages/pages/pages.component.ts");
    /* harmony import */


    var _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dash-board/dash-board.component */
    "./src/app/modules/pages/dash-board/dash-board.component.ts");
    /* harmony import */


    var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../layout/layout.module */
    "./src/app/modules/layout/layout.module.ts");
    /* harmony import */


    var _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./add-user/add-user.component */
    "./src/app/modules/pages/add-user/add-user.component.ts");
    /* harmony import */


    var _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./add-parent/add-parent.component */
    "./src/app/modules/pages/add-parent/add-parent.component.ts");
    /* harmony import */


    var _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./add-teacher/add-teacher.component */
    "./src/app/modules/pages/add-teacher/add-teacher.component.ts");
    /* harmony import */


    var _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./add-student/add-student.component */
    "./src/app/modules/pages/add-student/add-student.component.ts");
    /* harmony import */


    var _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./add-category/add-category.component */
    "./src/app/modules/pages/add-category/add-category.component.ts");
    /* harmony import */


    var _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./add-subject/add-subject.component */
    "./src/app/modules/pages/add-subject/add-subject.component.ts");
    /* harmony import */


    var _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./users-list/users-list.component */
    "./src/app/modules/pages/users-list/users-list.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./update-user/update-user.component */
    "./src/app/modules/pages/update-user/update-user.component.ts");
    /* harmony import */


    var _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./category-list/category-list.component */
    "./src/app/modules/pages/category-list/category-list.component.ts");
    /* harmony import */


    var _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./stage-List/stage-List.component */
    "./src/app/modules/pages/stage-List/stage-List.component.ts");
    /* harmony import */


    var _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./add-stage/add-stage.component */
    "./src/app/modules/pages/add-stage/add-stage.component.ts");
    /* harmony import */


    var _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./subject-list/subject-list.component */
    "./src/app/modules/pages/subject-list/subject-list.component.ts");
    /* harmony import */


    var _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./users-list/user-subj/user-subj.component */
    "./src/app/modules/pages/users-list/user-subj/user-subj.component.ts");
    /* harmony import */


    var _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./add-material/add-material.component */
    "./src/app/modules/pages/add-material/add-material.component.ts");
    /* harmony import */


    var _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./material-list/material-list.component */
    "./src/app/modules/pages/material-list/material-list.component.ts");
    /* harmony import */


    var _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./exam-list/exam-list.component */
    "./src/app/modules/pages/exam-list/exam-list.component.ts");
    /* harmony import */


    var _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./add-exam/add-exam.component */
    "./src/app/modules/pages/add-exam/add-exam.component.ts");
    /* harmony import */


    var _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./add-question/add-question.component */
    "./src/app/modules/pages/add-question/add-question.component.ts");
    /* harmony import */


    var _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./profile/profile.component */
    "./src/app/modules/pages/profile/profile.component.ts");
    /* harmony import */


    var _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./subjectMaterials/subjectMaterials.component */
    "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts");
    /* harmony import */


    var _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./addSubjectMaterial/addSubjectMaterial.component */
    "./src/app/modules/pages/addSubjectMaterial/addSubjectMaterial.component.ts");

    var PagesModule = function PagesModule() {
      _classCallCheck(this, PagesModule);
    };

    PagesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_pages_component__WEBPACK_IMPORTED_MODULE_4__["PagesComponent"], _dash_board_dash_board_component__WEBPACK_IMPORTED_MODULE_5__["DashBoardComponent"], _add_user_add_user_component__WEBPACK_IMPORTED_MODULE_7__["AddUserComponent"], _add_parent_add_parent_component__WEBPACK_IMPORTED_MODULE_8__["AddParentComponent"], _add_teacher_add_teacher_component__WEBPACK_IMPORTED_MODULE_9__["AddTeacherComponent"], _add_student_add_student_component__WEBPACK_IMPORTED_MODULE_10__["AddStudentComponent"], _add_category_add_category_component__WEBPACK_IMPORTED_MODULE_11__["AddCategoryComponent"], _add_subject_add_subject_component__WEBPACK_IMPORTED_MODULE_12__["AddSubjectComponent"], _users_list_users_list_component__WEBPACK_IMPORTED_MODULE_13__["UsersListComponent"], _update_user_update_user_component__WEBPACK_IMPORTED_MODULE_15__["UpdateUserComponent"], _category_list_category_list_component__WEBPACK_IMPORTED_MODULE_16__["CategoryListComponent"], _stage_List_stage_List_component__WEBPACK_IMPORTED_MODULE_17__["StageListComponent"], _add_stage_add_stage_component__WEBPACK_IMPORTED_MODULE_18__["AddStageComponent"], _subject_list_subject_list_component__WEBPACK_IMPORTED_MODULE_19__["SubjectListComponent"], _users_list_user_subj_user_subj_component__WEBPACK_IMPORTED_MODULE_20__["UserSubjComponent"], _add_material_add_material_component__WEBPACK_IMPORTED_MODULE_21__["AddMaterialComponent"], _material_list_material_list_component__WEBPACK_IMPORTED_MODULE_22__["MaterialListComponent"], _exam_list_exam_list_component__WEBPACK_IMPORTED_MODULE_23__["ExamListComponent"], _add_exam_add_exam_component__WEBPACK_IMPORTED_MODULE_24__["AddExamComponent"], _add_question_add_question_component__WEBPACK_IMPORTED_MODULE_25__["AddQuestionComponent"], _profile_profile_component__WEBPACK_IMPORTED_MODULE_26__["ProfileComponent"], _subjectMaterials_subjectMaterials_component__WEBPACK_IMPORTED_MODULE_27__["SubjectMaterialsComponent"], _addSubjectMaterial_addSubjectMaterial_component__WEBPACK_IMPORTED_MODULE_28__["AddSubjectMaterialComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _pages_routing_module__WEBPACK_IMPORTED_MODULE_3__["PagesRoutingModule"], _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_14__["FormsModule"]]
    })], PagesModule);
    /***/
  },

  /***/
  "./src/app/modules/pages/pages/pages.component.scss":
  /*!**********************************************************!*\
    !*** ./src/app/modules/pages/pages/pages.component.scss ***!
    \**********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesPagesPagesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcGFnZXMvcGFnZXMuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/pages/pages.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/modules/pages/pages/pages.component.ts ***!
    \********************************************************/

  /*! exports provided: PagesComponent */

  /***/
  function srcAppModulesPagesPagesPagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PagesComponent", function () {
      return PagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var PagesComponent =
    /*#__PURE__*/
    function () {
      function PagesComponent(auth) {
        _classCallCheck(this, PagesComponent);

        this.auth = auth;
        auth.logOut();
      }

      _createClass(PagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          window.dispatchEvent(new Event('resize'));
          $('body').addClass('hold-transition skin-blue sidebar-mini');
        }
      }]);

      return PagesComponent;
    }();

    PagesComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }];
    };

    PagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/pages/pages.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pages.component.scss */
      "./src/app/modules/pages/pages/pages.component.scss")).default]
    })], PagesComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/profile/profile.component.css":
  /*!*************************************************************!*\
    !*** ./src/app/modules/pages/profile/profile.component.css ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesProfileProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/profile/profile.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/modules/pages/profile/profile.component.ts ***!
    \************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppModulesPagesProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");
    /* harmony import */


    var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sbject.service */
    "./src/app/Service/sbject.service.ts");

    var ProfileComponent =
    /*#__PURE__*/
    function () {
      function ProfileComponent(auth, subjectService) {
        var _this16 = this;

        _classCallCheck(this, ProfileComponent);

        this.auth = auth;
        this.subjectService = subjectService;
        this.userId = {};
        this.userId = auth.getUserId();
        auth.logOut();
        subjectService.getUserSubjects(this.userId).subscribe(function (data) {
          _this16.subjects = data;
        });
      }

      _createClass(ProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "checkRule",
        value: function checkRule(rule) {
          if (this.auth.getusertype() == rule) {
            return true;
          }
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]
      }, {
        type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__["SbjectService"]
      }];
    };

    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/profile/profile.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./profile.component.css */
      "./src/app/modules/pages/profile/profile.component.css")).default]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/stage-List/stage-List.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/pages/stage-List/stage-List.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesStageListStageListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvc3RhZ2UtTGlzdC9zdGFnZS1MaXN0LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/stage-List/stage-List.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/pages/stage-List/stage-List.component.ts ***!
    \******************************************************************/

  /*! exports provided: StageListComponent */

  /***/
  function srcAppModulesPagesStageListStageListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StageListComponent", function () {
      return StageListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/satges.service */
    "./src/app/Service/satges.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var StageListComponent =
    /*#__PURE__*/
    function () {
      function StageListComponent(stageService, sharedservice, auth) {
        _classCallCheck(this, StageListComponent);

        this.stageService = stageService;
        this.sharedservice = sharedservice;
        this.auth = auth;
        var result = this.auth.getusertype();

        if (result != 'ADM') {
          this.sharedservice.navigate("home");
        }
      }

      _createClass(StageListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.stageService.getListStages().subscribe(function (data) {
            _this17.stages = data;
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          this.sharedservice.navigate(url);
        }
      }]);

      return StageListComponent;
    }();

    StageListComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_2__["SatgesService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    StageListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stage-List',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stage-List.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/stage-List/stage-List.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stage-List.component.css */
      "./src/app/modules/pages/stage-List/stage-List.component.css")).default]
    })], StageListComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/subject-list/subject-list.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/pages/subject-list/subject-list.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesSubjectListSubjectListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvc3ViamVjdC1saXN0L3N1YmplY3QtbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/subject-list/subject-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/pages/subject-list/subject-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SubjectListComponent */

  /***/
  function srcAppModulesPagesSubjectListSubjectListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectListComponent", function () {
      return SubjectListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/sbject.service */
    "./src/app/Service/sbject.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var SubjectListComponent =
    /*#__PURE__*/
    function () {
      function SubjectListComponent(subjectService, sharedservice, auth) {
        _classCallCheck(this, SubjectListComponent);

        this.subjectService = subjectService;
        this.sharedservice = sharedservice;
        this.auth = auth;
        auth.logOut();
        var result = this.auth.getusertype();

        if (result != 'ADM') {
          this.sharedservice.navigate("home");
        }
      }

      _createClass(SubjectListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this18 = this;

          this.subjectService.getListSubjects().subscribe(function (data) {
            _this18.subjects = data;
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          this.sharedservice.navigate(url);
        }
      }]);

      return SubjectListComponent;
    }();

    SubjectListComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_2__["SbjectService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    SubjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subject-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subject-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subject-list/subject-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subject-list.component.css */
      "./src/app/modules/pages/subject-list/subject-list.component.css")).default]
    })], SubjectListComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.css":
  /*!*******************************************************************************!*\
    !*** ./src/app/modules/pages/subjectMaterials/subjectMaterials.component.css ***!
    \*******************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesSubjectMaterialsSubjectMaterialsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvc3ViamVjdE1hdGVyaWFscy9zdWJqZWN0TWF0ZXJpYWxzLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/modules/pages/subjectMaterials/subjectMaterials.component.ts ***!
    \******************************************************************************/

  /*! exports provided: SubjectMaterialsComponent */

  /***/
  function srcAppModulesPagesSubjectMaterialsSubjectMaterialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectMaterialsComponent", function () {
      return SubjectMaterialsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sbject.service */
    "./src/app/Service/sbject.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var SubjectMaterialsComponent =
    /*#__PURE__*/
    function () {
      function SubjectMaterialsComponent(router, subjectService, auth) {
        _classCallCheck(this, SubjectMaterialsComponent);

        this.router = router;
        this.subjectService = subjectService;
        this.auth = auth;
        this.materials = [];
        auth.logOut();
      }

      _createClass(SubjectMaterialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.subjectId = this.router.snapshot.params['id'];
          this.subjectService.getSubjectMAterial(2).subscribe(function (data) {
            console.log(data);
          });
        }
      }]);

      return SubjectMaterialsComponent;
    }();

    SubjectMaterialsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_3__["SbjectService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    SubjectMaterialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subjectMaterials',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subjectMaterials.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/subjectMaterials/subjectMaterials.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subjectMaterials.component.css */
      "./src/app/modules/pages/subjectMaterials/subjectMaterials.component.css")).default]
    })], SubjectMaterialsComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/update-user/update-user.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/pages/update-user/update-user.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesUpdateUserUpdateUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXBkYXRlLXVzZXIvdXBkYXRlLXVzZXIuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/pages/update-user/update-user.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/pages/update-user/update-user.component.ts ***!
    \********************************************************************/

  /*! exports provided: UpdateUserComponent */

  /***/
  function srcAppModulesPagesUpdateUserUpdateUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateUserComponent", function () {
      return UpdateUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/user-list.service */
    "./src/app/Service/user-list.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/category.service */
    "./src/app/Service/category.service.ts");
    /* harmony import */


    var src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/Service/satges.service */
    "./src/app/Service/satges.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");

    var UpdateUserComponent =
    /*#__PURE__*/
    function () {
      function UpdateUserComponent(userl, datePipe, ctegorService, stageService, shareS) {
        _classCallCheck(this, UpdateUserComponent);

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
          address: ""
        };
        this.studentHidden = true;
        this.teacherHidden = true;
        this.parentHidden = true;
        var data = localStorage.getItem("userDataupdate");
        this.user = JSON.parse(data);
        this.getval();
        this.selected(this.user.user_type);
      }

      _createClass(UpdateUserComponent, [{
        key: "getcategories",
        value: function getcategories() {
          var _this19 = this;

          this.ctegorService.getListCategories().subscribe(function (data) {
            _this19.categories = data;
          });
        }
      }, {
        key: "getStages",
        value: function getStages() {
          var _this20 = this;

          this.stageService.getListStages().subscribe(function (data) {
            _this20.stages = data;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          localStorage.removeItem("userDataupdate");
        } //slect user type and maping values

      }, {
        key: "selected",
        value: function selected(value) {
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
      }, {
        key: "slectSatge",
        value: function slectSatge(stage) {}
      }, {
        key: "getval",
        value: function getval() {
          if (this.user.user_type == "ADM") this.user.user_type = "1";
          if (this.user.user_type == "STD") this.user.user_type = "2";
          if (this.user.user_type == "PAR") this.user.user_type = "3";
          if (this.user.user_type == "TECH") this.user.user_type = "4";
        }
      }, {
        key: "update",
        value: function update() {
          this.selected(this.user.user_type);
          this.user.user_type = this.type;
          console.log(this.user);
          this.userl.updateUser(this.user).subscribe();
        }
      }]);

      return UpdateUserComponent;
    }();

    UpdateUserComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]
      }, {
        type: src_app_Service_category_service__WEBPACK_IMPORTED_MODULE_4__["CategoryService"]
      }, {
        type: src_app_Service_satges_service__WEBPACK_IMPORTED_MODULE_5__["SatgesService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_6__["SharedMethodService"]
      }];
    };

    UpdateUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-update-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./update-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/update-user/update-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./update-user.component.css */
      "./src/app/modules/pages/update-user/update-user.component.css")).default]
    })], UpdateUserComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/users-list/user-subj/user-subj.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/pages/users-list/user-subj/user-subj.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesUsersListUserSubjUserSubjComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXNlcnMtbGlzdC91c2VyLXN1YmovdXNlci1zdWJqLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/users-list/user-subj/user-subj.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/pages/users-list/user-subj/user-subj.component.ts ***!
    \***************************************************************************/

  /*! exports provided: UserSubjComponent */

  /***/
  function srcAppModulesPagesUsersListUserSubjUserSubjComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserSubjComponent", function () {
      return UserSubjComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_Service_user_subjects_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/user-subjects.service */
    "./src/app/Service/user-subjects.service.ts");
    /* harmony import */


    var src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/sbject.service */
    "./src/app/Service/sbject.service.ts");

    var UserSubjComponent =
    /*#__PURE__*/
    function () {
      function UserSubjComponent(route, user_subject, subjectService) {
        _classCallCheck(this, UserSubjComponent);

        this.route = route;
        this.user_subject = user_subject;
        this.subjectService = subjectService;
        this.sub = {};
        this.userSub = [];
        this.form = new FormData();
      }

      _createClass(UserSubjComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.id = this.route.snapshot.params['id'];
          this.user_subject.getUserSubjects(this.id).subscribe(function (data) {
            return _this21.userSubjects = data;
          }, function (error) {}, function () {
            _this21.subjectService.getListSubjects().subscribe(function (data) {
              _this21.subjects = data;
              console.log(data);
            });
          });
        }
      }, {
        key: "remove",
        value: function remove(name) {
          this.userSubjects.splice(this.userSubjects.indexOf(name), 1);
        }
      }, {
        key: "add",
        value: function add(subjecttoadd) {
          var itemAlreadyExist = this.userSubjects.find(function (item) {
            return item.id === subjecttoadd.id;
          });

          if (itemAlreadyExist) {
            alert("already added");
          } else {
            this.userSubjects.push(subjecttoadd);
          }
        }
      }, {
        key: "save",
        value: function save() {
          var form = new FormData();
          this.userSubjects.forEach(function (value) {
            form.append("subject", value.id);
            console.log(value.id + value.name);
          });
          this.user_subject.updateUserSubjects(this.id, form);
        }
      }]);

      return UserSubjComponent;
    }();

    UserSubjComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: src_app_Service_user_subjects_service__WEBPACK_IMPORTED_MODULE_3__["UserSubjectsService"]
      }, {
        type: src_app_Service_sbject_service__WEBPACK_IMPORTED_MODULE_4__["SbjectService"]
      }];
    };

    UserSubjComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-user-subj',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./user-subj.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/user-subj/user-subj.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./user-subj.component.scss */
      "./src/app/modules/pages/users-list/user-subj/user-subj.component.scss")).default]
    })], UserSubjComponent);
    /***/
  },

  /***/
  "./src/app/modules/pages/users-list/users-list.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/modules/pages/users-list/users-list.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesPagesUsersListUsersListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZXMvdXNlcnMtbGlzdC91c2Vycy1saXN0LmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/pages/users-list/users-list.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/modules/pages/users-list/users-list.component.ts ***!
    \******************************************************************/

  /*! exports provided: UsersListComponent */

  /***/
  function srcAppModulesPagesUsersListUsersListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UsersListComponent", function () {
      return UsersListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/Service/user-list.service */
    "./src/app/Service/user-list.service.ts");
    /* harmony import */


    var src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/Service/sharedMethod.service */
    "./src/app/Service/sharedMethod.service.ts");
    /* harmony import */


    var src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/Service/auth.service */
    "./src/app/Service/auth.service.ts");

    var UsersListComponent =
    /*#__PURE__*/
    function () {
      function UsersListComponent(userList, sharedservice, auth) {
        var _this22 = this;

        _classCallCheck(this, UsersListComponent);

        this.userList = userList;
        this.sharedservice = sharedservice;
        this.auth = auth;
        this.userObserver = {
          next: function next(data) {
            return _this22.getusers();
          },
          error: function error(err) {
            return console.error('Observer got an error: ' + err);
          },
          complete: function complete() {}
        };
        auth.logOut();
        var result = this.auth.getusertype();

        if (result != 'ADM') {
          this.sharedservice.navigate("home");
        }
      }

      _createClass(UsersListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getusers();
        }
      }, {
        key: "getusers",
        value: function getusers() {
          var _this23 = this;

          this.userList.getAllUsers().subscribe(function (data) {
            _this23.users = data;
          });
        }
      }, {
        key: "get",
        value: function get(url) {
          this.sharedservice.navigate(url);
        }
      }, {
        key: "remove",
        value: function remove(id) {
          this.userList.removeUser(Number(id)).subscribe(this.userObserver);
        }
      }, {
        key: "update",
        value: function update(user) {
          var data = JSON.stringify(user);
          window.localStorage.setItem("userDataupdate", data);
          this.sharedservice.navigate("home/UpdateUser");
        }
      }]);

      return UsersListComponent;
    }();

    UsersListComponent.ctorParameters = function () {
      return [{
        type: src_app_Service_user_list_service__WEBPACK_IMPORTED_MODULE_2__["UserListService"]
      }, {
        type: src_app_Service_sharedMethod_service__WEBPACK_IMPORTED_MODULE_3__["SharedMethodService"]
      }, {
        type: src_app_Service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    UsersListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-users-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./users-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/pages/users-list/users-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./users-list.component.scss */
      "./src/app/modules/pages/users-list/users-list.component.scss")).default]
    })], UsersListComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-pages-pages-module-es5.js.map