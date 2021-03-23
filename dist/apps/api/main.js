(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/ReviewReception.ts":
/*!*********************************************!*\
  !*** ./apps/api/src/app/ReviewReception.ts ***!
  \*********************************************/
/*! exports provided: ReviewReception */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return ReviewReception; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gainhow-review/data */ "./libs/data/src/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! form-data */ "form-data");
/* harmony import */ var form_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(form_data__WEBPACK_IMPORTED_MODULE_4__);





class ReviewReception {
    constructor(connection) {
        this.connection = connection;
    }
    // TODO: move to libs/utils
    getRandomString(length) {
        let result = '';
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    /**
     *  根據反序列化後的reviewRegistrationInfo，初始化新的reviewItem
     *  ⇒ 把reviewItem序列化之後，用一個新的reviewId存入自己的database
     *  ⇒ 把reviewItem裡的reviewStatus序列化後回傳
     */
    register(reviewRegistrationInfo) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let newStatus = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["ReviewStatus"](reviewRegistrationInfo.numberOfModels);
            const reviewIdLength = 36;
            let reviewId = this.getRandomString(reviewIdLength);
            let itemRepo = this.connection.getRepository(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["ReviewItem"]);
            while (yield itemRepo.findOne(reviewId)) {
                reviewId = this.getRandomString(reviewIdLength);
            }
            let newReviewItem = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["ReviewItem"](newStatus, reviewId, reviewRegistrationInfo.product);
            yield itemRepo.save(newReviewItem);
            return newReviewItem.reviewId;
        });
    }
    deregister(reviewId) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let repo = this.connection.getRepository(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["ReviewItem"]);
            const itemToRemove = yield repo.findOne(reviewId);
            yield repo.softDelete(itemToRemove);
        });
    }
    uploadFile(reviewId, file) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // throw new Error('Method not implemented.');
            let reviewItemRepo = this.connection.getRepository(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["ReviewItem"]);
            let uploadFileStatusRepo = this.connection.getRepository(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["UploadFileStatus"]);
            let reviewItem = yield reviewItemRepo.findOne(reviewId, { relations: ["status"] });
            let fileStatus = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["UploadFileStatus"](reviewItem.status, file.name);
            yield uploadFileStatusRepo.save(fileStatus);
            try {
                let uploadToken = yield upload(file.path);
                fileStatus.uploadToken = uploadToken;
                fileStatus.currentStage = "GENERATING_PRINTABLE_PAGES";
                yield uploadFileStatusRepo.save(fileStatus);
            }
            catch (error) {
                fileStatus.errorStage = "UPLOADING";
                yield uploadFileStatusRepo.save(fileStatus);
                console.log(error);
            }
            let updatedReviewItem = yield reviewItemRepo.findOne(reviewId, {
                relations: [
                    "status",
                    "status.uploadFileStatuses",
                    "status.uploadFileStatuses.pageInfos"
                ]
            });
            return updatedReviewItem.status;
            // TODO: 把呼叫轉檔server的程式包到一個不管地帶
            function upload(filePath) {
                return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let readStream = fs__WEBPACK_IMPORTED_MODULE_3__["createReadStream"](filePath);
                    let form = new form_data__WEBPACK_IMPORTED_MODULE_4__();
                    form.append("secret_key", process.env.FILE_CONVERT_SERVER_UPLOAD_KEY);
                    form.append("Filedata", readStream);
                    try {
                        let response = yield axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('http://ex.gding.com.tw/test/Upload_test8/server/php/api/uploadFile.php', form, { headers: form.getHeaders() });
                        if (response.data.msg === 'success')
                            return response.data.token;
                        else
                            throw response.data.msg;
                    }
                    catch (error) {
                        console.log(error.config);
                    }
                });
            }
        });
    }
    deleteFile(reviewId, fileId) {
        throw new Error('Method not implemented.');
    }
    loadReviewStatus(reviewId) {
        throw new Error('Method not implemented.');
    }
    loadReviewItem(reviewId) {
        throw new Error('Method not implemented.');
    }
    saveReviewItem(reviewItem) {
        throw new Error('Method not implemented.');
    }
    generateFinalResults(reviewItem) {
        throw new Error('Method not implemented.');
    }
}


/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "reflect-metadata");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gainhow-review/data */ "./libs/data/src/index.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! express */ "express");
/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! express-fileupload */ "express-fileupload");
/* harmony import */ var express_fileupload__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(express_fileupload__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _app_ReviewReception__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app/ReviewReception */ "./apps/api/src/app/ReviewReception.ts");








// import { File, Fields, Files, IncomingForm } from "formidable";
const app = express__WEBPACK_IMPORTED_MODULE_4__();
console.log(process.env);
app.use(express__WEBPACK_IMPORTED_MODULE_4__["json"]());
const connectionPromise = Object(typeorm__WEBPACK_IMPORTED_MODULE_6__["createConnection"])({
    "type": "mysql",
    "host": process.env.DATABASE_HOST,
    "port": parseInt(process.env.DATABASE_PORT, 10),
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "synchronize": true,
    "logging": false,
    "entities": [
        _gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__["ReviewItem"],
        _gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__["ReviewModel"],
        _gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__["ReviewStatus"],
        _gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__["UploadFileStatus"],
        _gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__["UploadFilePageInfo"],
        _gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__["FramedPage"]
    ],
    "migrations": [],
    "subscribers": [],
    "cli": {
        "entitiesDir": "lib/data/src/Review",
        "migrationsDir": "apps/api/src/migration",
        "subscribersDir": "apps/api/src/subscriber"
    }
});
app.post('/api/register', (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    let connection;
    try {
        connection = yield connectionPromise;
    }
    catch (error) {
        res.send({
            isSuccess: false,
            error
        });
        return;
    }
    let reviewRegistrationInfo = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_2__["ReviewRegistrationInfo"], req.body.reviewRegistrationInfoJson);
    let responseBody;
    try {
        let reviewId = yield new _app_ReviewReception__WEBPACK_IMPORTED_MODULE_7__["ReviewReception"](connection).register(reviewRegistrationInfo);
        responseBody = {
            isSuccess: true,
            reviewId
        };
    }
    catch (error) {
        responseBody = {
            isSuccess: false,
            error
        };
    }
    res.send(responseBody);
}));
app.use(express_fileupload__WEBPACK_IMPORTED_MODULE_5__());
app.post('/api/upload', (req, res) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(void 0, void 0, void 0, function* () {
    let file = req.files.file;
    let reviewId = req.body.reviewId;
    let responseBody;
    try {
        let reviewReception = new _app_ReviewReception__WEBPACK_IMPORTED_MODULE_7__["ReviewReception"](Object(typeorm__WEBPACK_IMPORTED_MODULE_6__["getConnection"])());
        let reviewStatus = yield reviewReception.uploadFile(reviewId, {
            name: file.name,
            path: file.tempFilePath
        });
        responseBody = {
            isSuccess: true,
            reviewStatusInJson: Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["serialize"])(reviewStatus)
        };
    }
    catch (error) {
        responseBody = {
            isSuccess: false,
            error
        };
    }
    res.send(responseBody);
}));
const port = process.env.port || 3333;
const server = app.listen(port, () => {
    console.log('Listening at http://localhost:' + port + '/api');
});
server.on('error', console.error);


/***/ }),

/***/ "./libs/data/src/index.ts":
/*!********************************!*\
  !*** ./libs/data/src/index.ts ***!
  \********************************/
/*! exports provided: FramedPage, ReviewModel, ReviewItem, ReviewStatus, UploadFileStatus, UploadFilePageInfo, ReviewRegistrationInfo, ReviewReception, Product, SingleSheet, SaddleStichedBook, PerfectBoundBook, jsonToProduct, productToJson, PRODUCT_SUBTYPES, PRODUCT_TYPE_DISCRIMINATOR, Coat, PaperMaterial, Paper, Frame, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Review__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Review */ "./libs/data/src/lib/Review.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FramedPage", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["FramedPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewModel", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewItem", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewStatus", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatus", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["UploadFileStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFilePageInfo", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewRegistrationInfo", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewRegistrationInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewReception"]; });

/* harmony import */ var _lib_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/Product */ "./libs/data/src/lib/Product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["Product"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleSheet", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["SingleSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaddleStichedBook", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["SaddleStichedBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerfectBoundBook", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PerfectBoundBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonToProduct", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["jsonToProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productToJson", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["productToJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SUBTYPES", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_SUBTYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_TYPE_DISCRIMINATOR", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_TYPE_DISCRIMINATOR"]; });

/* harmony import */ var _lib_Material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Material */ "./libs/data/src/lib/Material.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coat", function() { return _lib_Material__WEBPACK_IMPORTED_MODULE_2__["Coat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperMaterial", function() { return _lib_Material__WEBPACK_IMPORTED_MODULE_2__["PaperMaterial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _lib_Material__WEBPACK_IMPORTED_MODULE_2__["Paper"]; });

/* harmony import */ var _lib_Frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/Frame */ "./libs/data/src/lib/Frame.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return _lib_Frame__WEBPACK_IMPORTED_MODULE_3__["Frame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _lib_Frame__WEBPACK_IMPORTED_MODULE_3__["Line"]; });







/***/ }),

/***/ "./libs/data/src/lib/Frame.ts":
/*!************************************!*\
  !*** ./libs/data/src/lib/Frame.ts ***!
  \************************************/
/*! exports provided: Frame, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Frame_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame/Frame */ "./libs/data/src/lib/Frame/Frame.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return _Frame_Frame__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Frame_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frame/Line */ "./libs/data/src/lib/Frame/Line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Frame_Line__WEBPACK_IMPORTED_MODULE_1__["default"]; });






/***/ }),

/***/ "./libs/data/src/lib/Frame/BleededRectangleFrame.ts":
/*!**********************************************************!*\
  !*** ./libs/data/src/lib/Frame/BleededRectangleFrame.ts ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BleededRectangleFrame; });
/* harmony import */ var _RectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RectangleFrame */ "./libs/data/src/lib/Frame/RectangleFrame.ts");

class BleededRectangleFrame extends _RectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(widthWithoutBleeding, // 裁切後的寬（mm）
    heightWithoutBleeding, // 裁切後的高（mm）
    cutError) {
        super(widthWithoutBleeding + (2 * cutError), heightWithoutBleeding + (2 * cutError));
        this.widthWithoutBleeding = widthWithoutBleeding;
        this.heightWithoutBleeding = heightWithoutBleeding;
        this.cutError = cutError;
        this.cutOutAreas = [];
        this.marks = this.createMarks();
        this.shape = this.createShape();
        this.bleedingArea = this.createBleedingArea();
    }
    createMarks() {
        let marks = [];
        let safeArea;
        let cutMark;
        let cutErrorPercentageInMaxWidth = this.cutError / this.maxWidth * 100;
        let cutErrorPercentageInMaxHeight = this.cutError / this.maxHeight * 100;
        let safeAreaX = cutErrorPercentageInMaxWidth * 2;
        let safeAreaY = cutErrorPercentageInMaxHeight * 2;
        let safeAreaWidth = 100 - cutErrorPercentageInMaxWidth * 4;
        let safeAreaHeight = 100 - cutErrorPercentageInMaxHeight * 4;
        const saveAreaSVGStyle = `
            width:100%; height:100%;
        `;
        const saveAreaRectStyle = `
            fill:none;
            stroke-width:2;
            stroke:rgb(102 102 102) ;
            stroke-dasharray:10,10;
        `;
        safeArea = {
            positionX: 0,
            positionY: 0,
            svgString: `
            <svg style='${saveAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                <rect 
                    style='${saveAreaRectStyle}'
                    x='${safeAreaX}%'
                    y='${safeAreaY}%'
                    width='${safeAreaWidth}%'
                    height='${safeAreaHeight}%' 
                />
            </svg>
        `
        };
        const cutMarkLineLength = 5;
        const cutMarkLineMargin = 3;
        const cutMarkWidthScale = (this.maxHeight / this.maxWidth);
        const cutMarkHeightScale = 1;
        const cutMarkOffsetX = (cutMarkLineLength + cutMarkLineMargin) * cutMarkWidthScale;
        const cutMarkOffsetY = (cutMarkLineLength + cutMarkLineMargin) * cutMarkHeightScale;
        const cutMarkStyle = `
            width:calc(100% ); height:calc(100% );
        `;
        const cutMarkLineStyle = `
            fill:none;
            stroke-width:1;
            stroke:rgb(51 51 51) ; 
        `;
        const cutErrorPercentageIncutMarkWidth = this.cutError / (this.maxWidth * (1 + cutMarkOffsetX * 2 / 100)) * 100;
        const cutErrorPercentageIncutMarkHeight = this.cutError / (this.maxHeight * (1 + cutMarkOffsetY * 2 / 100)) * 100;
        const cutMarkLineX = `calc(${cutErrorPercentageIncutMarkWidth}% + ${cutMarkOffsetX / (1 + cutMarkOffsetX * 2 / 100)}% )`;
        const cutMarkLineY = `calc(${cutErrorPercentageIncutMarkHeight}% + ${cutMarkOffsetY / (1 + cutMarkOffsetY * 2 / 100)}% )`;
        cutMark = {
            positionX: cutMarkOffsetX,
            positionY: cutMarkOffsetY,
            svgString: `
                <svg style='${cutMarkStyle}' xmlns='http://www.w3.org/2000/svg' >
                    <line style='${cutMarkLineStyle}'
                        x1='${cutMarkLineX}'
                        y1='0%'
                        x2='${cutMarkLineX}'
                        y2='${cutMarkLineLength * cutMarkHeightScale}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='0%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='${cutMarkLineLength * cutMarkHeightScale}%'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(100% - ${cutMarkLineX})'
                        y1='100%'
                        x2='calc(100% - ${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength * cutMarkHeightScale}%)'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='calc(${cutMarkLineX})'
                        y1='100%'
                        x2='calc(${cutMarkLineX})'
                        y2='calc(100% - ${cutMarkLineLength * cutMarkHeightScale}%)'
                    />

                    <line style='${cutMarkLineStyle}'
                        x1='0%'
                        y1='${cutMarkLineY}'
                        x2='${cutMarkLineLength * cutMarkWidthScale}%'
                        y2='${cutMarkLineY}'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='100%'
                        y1='${cutMarkLineY}'
                        x2='calc(100% - ${cutMarkLineLength * cutMarkWidthScale}%)'
                        y2='${cutMarkLineY}'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='100%'
                        y1='calc(100% - ${cutMarkLineY})'
                        x2='calc(100% - ${cutMarkLineLength * cutMarkWidthScale}%)'
                        y2='calc(100% - ${cutMarkLineY})'
                    />
                    <line style='${cutMarkLineStyle}'
                        x1='0%'
                        y1='calc(100% - ${cutMarkLineY})'
                        x2='calc(${cutMarkLineLength * cutMarkWidthScale}%)'
                        y2='calc(100% - ${cutMarkLineY})'
                    />
                    
                </svg>
            
            `
        };
        marks.push(safeArea);
        marks.push(cutMark);
        return marks;
        //  return `polygon(${safeAreaX}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaX}% ${safeAreaBottom}%)`;
    }
    createShape() {
        let cutErrorPercentageInMaxWidth = this.cutError / this.maxWidth * 100;
        let cutErrorPercentageInMaxHeight = this.cutError / this.maxHeight * 100;
        let left = cutErrorPercentageInMaxWidth;
        let right = 100 - cutErrorPercentageInMaxWidth;
        let top = cutErrorPercentageInMaxHeight;
        let bottom = 100 - cutErrorPercentageInMaxHeight;
        return `polygon(${left}% ${top}%, ${right}% ${top}%, ${right}% ${bottom}%, ${left}% ${bottom}%)`;
    }
    createBleedingArea() {
        return `polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)`;
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Frame/BookCoverFrame.ts":
/*!***************************************************!*\
  !*** ./libs/data/src/lib/Frame/BookCoverFrame.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookCoverFrame; });
/* harmony import */ var _BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BleededRectangleFrame */ "./libs/data/src/lib/Frame/BleededRectangleFrame.ts");

class BookCoverFrame extends _BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
}


/***/ }),

/***/ "./libs/data/src/lib/Frame/Frame.ts":
/*!******************************************!*\
  !*** ./libs/data/src/lib/Frame/Frame.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Frame; });
class Frame {
    constructor(maxWidth, // 最大寬度（mm）
    maxHeight // 最大高度（mm）
    ) {
        this.maxWidth = maxWidth;
        this.maxHeight = maxHeight;
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Frame/Line.ts":
/*!*****************************************!*\
  !*** ./libs/data/src/lib/Frame/Line.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Line; });
class Line {
    constructor(startX, startY, endX, endY) {
        this.startX = startX;
        this.startY = startY;
        this.endX = endX;
        this.endY = endY;
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Frame/PerfectBoundBookSoftCoverFrame.ts":
/*!*******************************************************************!*\
  !*** ./libs/data/src/lib/Frame/PerfectBoundBookSoftCoverFrame.ts ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBookSoftCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "./libs/data/src/lib/Frame/BookCoverFrame.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./libs/data/src/lib/Frame/Line.ts");


class PerfectBoundBookSoftCoverFrame extends _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(bookWidth, bookHeight, bookSpineWidth, cutError) {
        super(bookWidth * 2 + bookSpineWidth, bookHeight, cutError);
        this.bookWidth = bookWidth;
        this.bookHeight = bookHeight;
        this.bookSpineWidth = bookSpineWidth;
        this.cutError = cutError;
        this.foldLines = this.createFoldLines();
    }
    createFoldLines() {
        let leftFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.cutError + this.bookWidth) / this.maxWidth * 100, 0, (this.cutError + this.bookWidth) / this.maxWidth * 100, (this.height) / this.maxHeight * 100);
        let rightFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, 0, (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, (this.height) / this.maxHeight * 100);
        return [
            leftFoldLine,
            rightFoldLine
        ];
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Frame/PerfectBoundHardCoverFrame.ts":
/*!***************************************************************!*\
  !*** ./libs/data/src/lib/Frame/PerfectBoundHardCoverFrame.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBookHardCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "./libs/data/src/lib/Frame/BookCoverFrame.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./libs/data/src/lib/Frame/Line.ts");


class PerfectBoundBookHardCoverFrame extends _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(bookWidth, // 書的寬度（mm）
    bookHeight, // 書的高度（mm）
    bookSpineWidth, // 書背寬度（mm）
    outerHingeWidth, // 書溝寬度（mm）
    cutError // 出血範圍（mm）
    ) {
        super((bookWidth + outerHingeWidth) * 2 + bookSpineWidth, bookHeight, cutError);
        this.bookWidth = bookWidth;
        this.bookHeight = bookHeight;
        this.bookSpineWidth = bookSpineWidth;
        this.outerHingeWidth = outerHingeWidth;
        this.cutError = cutError;
        this.foldLines = this.createFoldLines();
    }
    createFoldLines() {
        let leftHingeLeftFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.cutError + this.bookWidth) / this.maxWidth * 100, 0, (this.cutError + this.bookWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
        let leftHingeRightFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.cutError + this.bookWidth + this.outerHingeWidth) / this.maxWidth * 100, 0, (this.cutError + this.bookWidth + this.outerHingeWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
        let rightHingeLeftFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.width - this.cutError - this.bookWidth - this.outerHingeWidth) / this.maxWidth * 100, 0, (this.width - this.cutError - this.bookWidth - this.outerHingeWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
        let rightHingeRightFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, 0, (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
        return [
            leftHingeLeftFoldLine,
            leftHingeRightFoldLine,
            rightHingeLeftFoldLine,
            rightHingeRightFoldLine
        ];
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Frame/RectangleFrame.ts":
/*!***************************************************!*\
  !*** ./libs/data/src/lib/Frame/RectangleFrame.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RectangleFrame; });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "./libs/data/src/lib/Frame/Frame.ts");

class RectangleFrame extends _Frame__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height) {
        super(width, height);
        this.width = width;
        this.height = height;
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Frame/SaddleStitchedBookCoverFrame.ts":
/*!*****************************************************************!*\
  !*** ./libs/data/src/lib/Frame/SaddleStitchedBookCoverFrame.ts ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaddleStitchedBookCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "./libs/data/src/lib/Frame/BookCoverFrame.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "./libs/data/src/lib/Frame/Line.ts");


class SaddleStitchedBookCoverFrame extends _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(bookWidth, bookHeight, cutError) {
        super(bookWidth * 2, bookHeight, cutError);
        this.foldLines = this.createFoldLines();
    }
    createFoldLines() {
        let middle = this.maxWidth / 2;
        let middleLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](middle / this.maxWidth * 100, 0, middle / this.maxWidth * 100, 100);
        return [middleLine];
    }
}


/***/ }),

/***/ "./libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts":
/*!******************************************************************!*\
  !*** ./libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookFrameDictionary; });
/* harmony import */ var _FrameDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrameDictionary */ "./libs/data/src/lib/FrameDictionary/FrameDictionary.ts");

class BookFrameDictionary extends _FrameDictionary__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(product) {
        super(product);
        this.coverFrame = this.createBookCoverFrame();
        this.innerPageFrames = this.createInnerPageFrames();
    }
    createFrames() {
        let frames = new Map();
        frames.set('cover', this.coverFrame);
        frames = Object.assign(frames, this.innerPageFrames);
        return frames;
    }
}


/***/ }),

/***/ "./libs/data/src/lib/FrameDictionary/FrameDictionary.ts":
/*!**************************************************************!*\
  !*** ./libs/data/src/lib/FrameDictionary/FrameDictionary.ts ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrameDictionary; });
class FrameDictionary {
    constructor(product) {
        this.product = product;
    }
    get frameNames() {
        return Array.from(this.frames.keys());
    }
    getFrame(frameIndex) {
        return this.frames.get(frameIndex);
    }
}


/***/ }),

/***/ "./libs/data/src/lib/FrameDictionary/PerfectBoundBookFrameDictionary.ts":
/*!******************************************************************************!*\
  !*** ./libs/data/src/lib/FrameDictionary/PerfectBoundBookFrameDictionary.ts ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBookFrameDictionary; });
/* harmony import */ var _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/BleededRectangleFrame */ "./libs/data/src/lib/Frame/BleededRectangleFrame.ts");
/* harmony import */ var _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookFrameDictionary */ "./libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts");
/* harmony import */ var _Frame_PerfectBoundBookSoftCoverFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frame/PerfectBoundBookSoftCoverFrame */ "./libs/data/src/lib/Frame/PerfectBoundBookSoftCoverFrame.ts");
/* harmony import */ var _Frame_PerfectBoundHardCoverFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Frame/PerfectBoundHardCoverFrame */ "./libs/data/src/lib/Frame/PerfectBoundHardCoverFrame.ts");




class PerfectBoundBookFrameDictionary extends _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(product) {
        super(product);
        this.product = product;
        this.frames = this.createFrames();
    }
    createInnerPageFrames() {
        let innerPageFrames = new Map();
        if (this.product.pagingDirection === "BOTTOM_TO_TOP") {
            let pageFramePrototype = this.createBottomToTopPagedPageFramePrototype();
            for (let i = 1; i <= this.product.numberOfPages; i++) {
                innerPageFrames.set(String(i), pageFramePrototype);
            }
            return innerPageFrames;
        }
        else {
            let leftPageFramePrototype = this.createLeftInnerPageFramePrototype();
            let rightPageFramePrototype = this.createRightInnerPageFramePrototype();
            switch (this.product.pagingDirection) {
                case "LEFT_TO_RIGHT":
                    for (let i = 1; i <= this.product.numberOfPages; i++) {
                        if ((i % 2 === 1)) {
                            innerPageFrames.set(String(i), leftPageFramePrototype);
                        }
                        else {
                            innerPageFrames.set(String(i), rightPageFramePrototype);
                        }
                    }
                    return innerPageFrames;
                case "RIGHT_TO_LEFT":
                    for (let i = 1; i <= this.product.numberOfPages; i++) {
                        if ((i % 2 === 1)) {
                            innerPageFrames.set(String(i), rightPageFramePrototype);
                        }
                        else {
                            innerPageFrames.set(String(i), leftPageFramePrototype);
                        }
                    }
                    return innerPageFrames;
            }
        }
    }
    createLeftInnerPageFramePrototype() {
        class PerfectBoundLeftInnerPageFrame extends _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
            createMarks() {
                let cutErrorPercentageInMaxWidth = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxWidth = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxWidth * 100;
                let safeAreaLeft = cutErrorPercentageInMaxWidth * 2;
                let safeAreaRight = 100 - cutErrorPercentageInMaxWidth - boundSideSafeDistancePercentageInMaxWidth;
                let safeAreaTop = cutErrorPercentageInMaxHeight * 2;
                let safeAreaBottom = 100 - cutErrorPercentageInMaxHeight * 2;
                let marks = [];
                let safeArea;
                let safeAreaWidth = safeAreaRight - safeAreaLeft;
                let safeAreaHeight = safeAreaBottom - safeAreaTop;
                const safeAreaSVGStyle = `
                    width:100%; height:100%;
                `;
                const saveAreaRectStyle = `
                fill:none;
                stroke-width:2;
                stroke:rgb(102 102 102) ;
                stroke-dasharray:10,10;
                `;
                safeArea = {
                    positionX: 0,
                    positionY: 0,
                    svgString: `
                        <svg style='${safeAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                            <rect 
                                style='${saveAreaRectStyle}'
                                x='${safeAreaLeft}%'
                                y='${safeAreaTop}%'
                                width='${safeAreaWidth}%'
                                height='${safeAreaHeight}%' 
                            />
                        </svg>
                    `
                };
                marks.push(safeArea);
                return marks;
                // return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
            }
        }
        return new PerfectBoundLeftInnerPageFrame(this.product.width, this.product.height, PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR);
    }
    createRightInnerPageFramePrototype() {
        class PerfectBoundRightInnerPageFrame extends _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
            createMarks() {
                let marks = [];
                let safeArea;
                let cutErrorPercentageInMaxWidth = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxWidth = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxWidth * 100;
                let safeAreaLeft = cutErrorPercentageInMaxWidth + boundSideSafeDistancePercentageInMaxWidth;
                let safeAreaRight = 100 - cutErrorPercentageInMaxWidth * 2;
                let safeAreaTop = cutErrorPercentageInMaxHeight * 2;
                let safeAreaBottom = 100 - cutErrorPercentageInMaxHeight * 2;
                let safeAreaWidth = safeAreaRight - safeAreaLeft;
                let safeAreaHeight = safeAreaBottom - safeAreaTop;
                const safeAreaSVGStyle = `
                    width:100%; height:100%;
                `;
                const safeAreaRectStyle = `
                    fill:none;
                    stroke-width:2;
                    stroke:rgb(102 102 102) ;
                    stroke-dasharray:10,10;
                `;
                safeArea = {
                    positionX: 0,
                    positionY: 0,
                    svgString: `
                    <svg style='${safeAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                        <rect 
                            style='${safeAreaRectStyle}'
                            x='${safeAreaLeft}%'
                            y='${safeAreaTop}%'
                            width='${safeAreaWidth}%'
                            height='${safeAreaHeight}%' 
                        />
                    </svg>
                `
                };
                marks.push(safeArea);
                return marks;
                //  return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
            }
        }
        return new PerfectBoundRightInnerPageFrame(this.product.width, this.product.height, PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR);
    }
    createBottomToTopPagedPageFramePrototype() {
        class PerfectBoundBottomToTopPagedPageFrame extends _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
            createMarks() {
                let marks = [];
                let safeArea;
                let cutErrorPercentageInMaxWidth = this.cutError / this.maxWidth * 100;
                let cutErrorPercentageInMaxHeight = this.cutError / this.maxHeight * 100;
                let boundSideSafeDistancePercentageInMaxHeight = PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE / this.maxHeight * 100;
                let safeAreaLeft = cutErrorPercentageInMaxWidth * 2;
                let safeAreaRight = 100 - cutErrorPercentageInMaxWidth * 2;
                let safeAreaTop = cutErrorPercentageInMaxHeight + boundSideSafeDistancePercentageInMaxHeight;
                let safeAreaBottom = 100 - cutErrorPercentageInMaxHeight * 2;
                let safeAreaWidth = safeAreaRight - safeAreaLeft;
                let safeAreaHeight = safeAreaBottom - safeAreaTop;
                const safeAreaSVGStyle = `
                width:100%; height:100%;
                `;
                const safeAreaRectStyle = `
                    fill:none;
                    stroke-width:2;
                    stroke:rgb(102 102 102) ;
                    stroke-dasharray:10,10;
                `;
                safeArea = {
                    positionX: 0,
                    positionY: 0,
                    svgString: `
                        <svg style='${safeAreaSVGStyle}' xmlns='http://www.w3.org/2000/svg' >
                            <rect 
                                style='${safeAreaRectStyle}'
                                x='${safeAreaLeft}%'
                                y='${safeAreaTop}%'
                                width='${safeAreaWidth}%'
                                height='${safeAreaHeight}%' 
                            />
                        </svg>
                    `
                };
                marks.push(safeArea);
                return marks;
                //return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
            }
        }
        return new PerfectBoundBottomToTopPagedPageFrame(this.product.width, this.product.height, PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR);
    }
    createBookCoverFrame() {
        let bookWidth = this.product.width; // 書寬
        let bookHeight = this.product.height; // 書高
        let spineWidth = this.product.spineWidth; // 書背寬
        if (this.product.hardCovered) {
            let outerHingeWidth = (spineWidth > 25) ? 14 : 10;
            return new _Frame_PerfectBoundHardCoverFrame__WEBPACK_IMPORTED_MODULE_3__["default"](bookWidth, bookHeight, spineWidth, outerHingeWidth, PerfectBoundBookFrameDictionary.COVER_CUT_ERROR);
        }
        return new _Frame_PerfectBoundBookSoftCoverFrame__WEBPACK_IMPORTED_MODULE_2__["default"](bookWidth, bookHeight, spineWidth, PerfectBoundBookFrameDictionary.COVER_CUT_ERROR);
    }
}
PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR = 3;
PerfectBoundBookFrameDictionary.COVER_CUT_ERROR = 3;
PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE = 5;


/***/ }),

/***/ "./libs/data/src/lib/FrameDictionary/SaddleStitchedBookFrameDictionary.ts":
/*!********************************************************************************!*\
  !*** ./libs/data/src/lib/FrameDictionary/SaddleStitchedBookFrameDictionary.ts ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaddleStitchedBookFrameDictionary; });
/* harmony import */ var _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/BleededRectangleFrame */ "./libs/data/src/lib/Frame/BleededRectangleFrame.ts");
/* harmony import */ var _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookFrameDictionary */ "./libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts");
/* harmony import */ var _Frame_SaddleStitchedBookCoverFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frame/SaddleStitchedBookCoverFrame */ "./libs/data/src/lib/Frame/SaddleStitchedBookCoverFrame.ts");



class SaddleStitchedBookFrameDictionary extends _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(product) {
        super(product);
        this.product = product;
        this.frames = this.createFrames();
    }
    createBookCoverFrame() {
        return new _Frame_SaddleStitchedBookCoverFrame__WEBPACK_IMPORTED_MODULE_2__["default"](this.product.width, this.product.height, SaddleStitchedBookFrameDictionary.COVER_CUT_ERROR);
    }
    createInnerPageFrames() {
        let innerFramePrototype = this.createInnerPageFramePrototype();
        let innerPageFrames = new Map();
        for (let i = 1; i <= this.product.numberOfPages; i++) {
            this.innerPageFrames.set(String(i), innerFramePrototype);
        }
        return innerPageFrames;
    }
    createInnerPageFramePrototype() {
        return new _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"](this.product.width, this.product.height, SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR);
    }
}
SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR = 3;
SaddleStitchedBookFrameDictionary.COVER_CUT_ERROR = 3;


/***/ }),

/***/ "./libs/data/src/lib/FrameDictionary/SingleSheetFrameDictionary.ts":
/*!*************************************************************************!*\
  !*** ./libs/data/src/lib/FrameDictionary/SingleSheetFrameDictionary.ts ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleSheetFrameDictionary; });
/* harmony import */ var _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/BleededRectangleFrame */ "./libs/data/src/lib/Frame/BleededRectangleFrame.ts");
/* harmony import */ var _FrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameDictionary */ "./libs/data/src/lib/FrameDictionary/FrameDictionary.ts");


class SingleSheetFrameDictionary extends _FrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(product) {
        super(product);
        this.product = product;
        this.frames = this.createFrames();
    }
    createFrames() {
        let frame = new _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"](this.product.width, this.product.height, SingleSheetFrameDictionary.CUT_ERROR);
        let frames = new Map();
        frames.set("正面", frame);
        if (this.product.isDoubleSided) {
            frames.set("背面", frame);
        }
        return frames;
    }
}
SingleSheetFrameDictionary.CUT_ERROR = 2;


/***/ }),

/***/ "./libs/data/src/lib/Material.ts":
/*!***************************************!*\
  !*** ./libs/data/src/lib/Material.ts ***!
  \***************************************/
/*! exports provided: Coat, PaperMaterial, Paper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Material_Coat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Material/Coat */ "./libs/data/src/lib/Material/Coat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coat", function() { return _Material_Coat__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Material_PaperMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Material/PaperMaterial */ "./libs/data/src/lib/Material/PaperMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperMaterial", function() { return _Material_PaperMaterial__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Material/Paper */ "./libs/data/src/lib/Material/Paper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]; });







/***/ }),

/***/ "./libs/data/src/lib/Material/Coat.ts":
/*!********************************************!*\
  !*** ./libs/data/src/lib/Material/Coat.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Coat; });
class Coat {
    constructor(name, chineseName) {
        this.name = name;
        this.chineseName = chineseName;
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Material/Paper.ts":
/*!*********************************************!*\
  !*** ./libs/data/src/lib/Material/Paper.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paper; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _PaperMaterial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PaperMaterial */ "./libs/data/src/lib/Material/PaperMaterial.ts");
var _a;



class Paper {
    constructor(name, material, // 材質
    thickness, // 厚度（mm）
    weight, // 單位面積重（g/m^2）
    isSmooth, // 表面是否光滑（會影響能否上膜）
    description) {
        this.name = name;
        this.thickness = thickness;
        this.weight = weight;
        this.isSmooth = isSmooth;
        this.description = description;
        this.material = material;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _PaperMaterial__WEBPACK_IMPORTED_MODULE_2__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _PaperMaterial__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && _PaperMaterial__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _a : Object)
], Paper.prototype, "material", void 0);


/***/ }),

/***/ "./libs/data/src/lib/Material/PaperMaterial.ts":
/*!*****************************************************!*\
  !*** ./libs/data/src/lib/Material/PaperMaterial.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PaperMaterial; });
class PaperMaterial {
    constructor(name, aliases) {
        this.name = name;
        this.aliases = aliases;
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Product.ts":
/*!**************************************!*\
  !*** ./libs/data/src/lib/Product.ts ***!
  \**************************************/
/*! exports provided: Product, SingleSheet, SaddleStichedBook, PerfectBoundBook, jsonToProduct, productToJson, PRODUCT_SUBTYPES, PRODUCT_TYPE_DISCRIMINATOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToProduct", function() { return jsonToProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productToJson", function() { return productToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SUBTYPES", function() { return PRODUCT_SUBTYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_TYPE_DISCRIMINATOR", function() { return PRODUCT_TYPE_DISCRIMINATOR; });
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product/Product */ "./libs/data/src/lib/Product/Product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Product_SingleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product/SingleSheet */ "./libs/data/src/lib/Product/SingleSheet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleSheet", function() { return _Product_SingleSheet__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Product_SaddleStichedBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product/SaddleStichedBook */ "./libs/data/src/lib/Product/SaddleStichedBook.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaddleStichedBook", function() { return _Product_SaddleStichedBook__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Product_PerfectBoundBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product/PerfectBoundBook */ "./libs/data/src/lib/Product/PerfectBoundBook.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerfectBoundBook", function() { return _Product_PerfectBoundBook__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_4__);






function jsonToProduct(text) {
    let plainObject = JSON.parse(text);
    let subTypeName = plainObject.__productSubType;
    for (let { name, value } of PRODUCT_SUBTYPES) {
        if (subTypeName === name)
            return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["deserialize"])(value, text);
    }
    let validSubtypeNames = PRODUCT_SUBTYPES.map(({ name, value }) => name);
    throw new Error(`'__productSubType' in json object should contain any value in ${validSubtypeNames.toString()}`);
}
function productToJson(product) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(product);
}
const PRODUCT_SUBTYPES = [
    { name: "SingleSheet", value: _Product_SingleSheet__WEBPACK_IMPORTED_MODULE_1__["default"] },
    { name: "SaddleStichedBook", value: _Product_SaddleStichedBook__WEBPACK_IMPORTED_MODULE_2__["default"] },
    { name: "PerfectBoundBook", value: _Product_PerfectBoundBook__WEBPACK_IMPORTED_MODULE_3__["default"] }
];
const PRODUCT_TYPE_DISCRIMINATOR = {
    property: '__productSubType',
    subTypes: PRODUCT_SUBTYPES
};


/***/ }),

/***/ "./libs/data/src/lib/Product/Book.ts":
/*!*******************************************!*\
  !*** ./libs/data/src/lib/Product/Book.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Book; });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "./libs/data/src/lib/Product/Product.ts");

class Book extends _Product__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height, numberOfPages, pagingDirection, coverPaper, innerPagesPaper, coverCoating, innerPageCoating) {
        super();
        this.width = width;
        this.height = height;
        this.numberOfPages = numberOfPages;
        this.pagingDirection = pagingDirection;
        this.coverPaper = coverPaper;
        this.innerPagesPaper = innerPagesPaper;
        this.coverCoating = coverCoating;
        this.innerPageCoating = innerPageCoating;
        this.productSubTypeChineseName = "書籍";
    }
    /**
     * 書背寬度（mm）
     */
    get spineWidth() {
        return this.numberOfPages / 2 * this.innerPagesPaper.thickness;
    }
    getInfo() {
        let coverInfo = `封面：${this.coverPaper}、${(this.coverCoating) ? this.coverCoating.chineseName : '不上膜'}`;
        let innerPageInfo = `內頁：${this.innerPagesPaper}、${(this.innerPageCoating) ? this.innerPageCoating.chineseName : '不上膜'}`;
        let pagingDirectionInChineseName;
        switch (this.pagingDirection) {
            case "LEFT_TO_RIGHT":
                pagingDirectionInChineseName = '由左往右';
                break;
            case "RIGHT_TO_LEFT":
                pagingDirectionInChineseName = '由右往左';
                break;
            case "BOTTOM_TO_TOP":
                pagingDirectionInChineseName = '由下往上';
                break;
        }
        return [
            `${this.productSubTypeChineseName}，${this.numberOfPages}頁`,
            `寬 ${this.width} x 長 ${this.height}`,
            `翻頁方向：${pagingDirectionInChineseName}翻`,
            `${coverInfo}`,
            `${innerPageInfo}`
        ];
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Product/PerfectBoundBook.ts":
/*!*******************************************************!*\
  !*** ./libs/data/src/lib/Product/PerfectBoundBook.ts ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBook; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Book */ "./libs/data/src/lib/Product/Book.ts");
/* harmony import */ var _Material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Material/Paper */ "./libs/data/src/lib/Material/Paper.ts");
/* harmony import */ var _Material_Coat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Material/Coat */ "./libs/data/src/lib/Material/Coat.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _FrameDictionary_PerfectBoundBookFrameDictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FrameDictionary/PerfectBoundBookFrameDictionary */ "./libs/data/src/lib/FrameDictionary/PerfectBoundBookFrameDictionary.ts");
var _a, _b, _c, _d;






class PerfectBoundBook extends _Book__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(width, height, numberOfPages, pagingDirection, coverPaperTexture, innerPagesPaperTexture, coverCoating, innerPageCoating, hardCovered = false, threadSewn = false, spineStyle = "standard") {
        super(width, height, numberOfPages, pagingDirection, coverPaperTexture, innerPagesPaperTexture, coverCoating, innerPageCoating);
        this.width = width;
        this.height = height;
        this.numberOfPages = numberOfPages;
        this.pagingDirection = pagingDirection;
        this.hardCovered = hardCovered;
        this.threadSewn = threadSewn;
        this.spineStyle = spineStyle;
        this.__productSubType = "PerfectBoundBook";
    }
    createFrameDictionary() {
        return new _FrameDictionary_PerfectBoundBookFrameDictionary__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _a : Object)
], PerfectBoundBook.prototype, "coverPaper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _b : Object)
], PerfectBoundBook.prototype, "innerPagesPaper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"] !== "undefined" && _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]) === "function" ? _c : Object)
], PerfectBoundBook.prototype, "coverCoating", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_d = typeof _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"] !== "undefined" && _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]) === "function" ? _d : Object)
], PerfectBoundBook.prototype, "innerPageCoating", void 0);


/***/ }),

/***/ "./libs/data/src/lib/Product/Product.ts":
/*!**********************************************!*\
  !*** ./libs/data/src/lib/Product/Product.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FrameDictionary_FrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FrameDictionary/FrameDictionary */ "./libs/data/src/lib/FrameDictionary/FrameDictionary.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
var _a;



class Product {
    get frameDictionary() {
        return this.getOrCreateFrameDictionary();
    }
    getOrCreateFrameDictionary() {
        if (!this._frameDictionary)
            return this.createAndSetFrameDictionary();
        return this._frameDictionary;
    }
    createAndSetFrameDictionary() {
        this._frameDictionary = this.createFrameDictionary();
        return this._frameDictionary;
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _FrameDictionary_FrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"] !== "undefined" && _FrameDictionary_FrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"]) === "function" ? _a : Object)
], Product.prototype, "_frameDictionary", void 0);


/***/ }),

/***/ "./libs/data/src/lib/Product/SaddleStichedBook.ts":
/*!********************************************************!*\
  !*** ./libs/data/src/lib/Product/SaddleStichedBook.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaddleStichedBook; });
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ "./libs/data/src/lib/Product/Book.ts");
/* harmony import */ var _FrameDictionary_SaddleStitchedBookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FrameDictionary/SaddleStitchedBookFrameDictionary */ "./libs/data/src/lib/FrameDictionary/SaddleStitchedBookFrameDictionary.ts");


class SaddleStichedBook extends _Book__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(coverWidth, coverHeight, numberOfPages, pagingDirection, coverPaperTexture, innerPagesPaperTexture, coverCoating, innerPageCoating) {
        super(coverWidth, coverHeight, numberOfPages, pagingDirection, coverPaperTexture, innerPagesPaperTexture, coverCoating, innerPageCoating);
        this.__productSubType = "SaddleStichedBook";
        this.productSubTypeChineseName = '騎馬釘書';
    }
    createFrameDictionary() {
        return new _FrameDictionary_SaddleStitchedBookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }
}


/***/ }),

/***/ "./libs/data/src/lib/Product/SingleSheet.ts":
/*!**************************************************!*\
  !*** ./libs/data/src/lib/Product/SingleSheet.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleSheet; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product */ "./libs/data/src/lib/Product/Product.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Material_Coat__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Material/Coat */ "./libs/data/src/lib/Material/Coat.ts");
/* harmony import */ var _Material_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Material/Paper */ "./libs/data/src/lib/Material/Paper.ts");
/* harmony import */ var _FrameDictionary_SingleSheetFrameDictionary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../FrameDictionary/SingleSheetFrameDictionary */ "./libs/data/src/lib/FrameDictionary/SingleSheetFrameDictionary.ts");
var _a, _b, _c, _d;






class SingleSheet extends _Product__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(width, height, isDoubleSided, paper, frontSideCoat, backSideCoat) {
        super();
        this.width = width;
        this.height = height;
        this.isDoubleSided = isDoubleSided;
        this.productSubTypeChineseName = "單張";
        this.__productSubType = "SingleSheet";
        this.paper = paper;
        this.frontSideCoat = frontSideCoat;
        this.backSideCoat = backSideCoat;
    }
    getInfo() {
        return [
            "單張",
            `寬 ${this.width} x 長 ${this.height}`,
            this.paper.name,
            `正面：${(this.frontSideCoat) ? this.frontSideCoat : "不上膜"}`,
            `背面：${(this.backSideCoat) ? this.backSideCoat : "不上膜"}`
        ];
    }
    createFrameDictionary() {
        return new _FrameDictionary_SingleSheetFrameDictionary__WEBPACK_IMPORTED_MODULE_5__["default"](this);
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _FrameDictionary_SingleSheetFrameDictionary__WEBPACK_IMPORTED_MODULE_5__["default"] !== "undefined" && _FrameDictionary_SingleSheetFrameDictionary__WEBPACK_IMPORTED_MODULE_5__["default"]) === "function" ? _a : Object)
], SingleSheet.prototype, "_frameDictionary", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_4__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _Material_Paper__WEBPACK_IMPORTED_MODULE_4__["default"] !== "undefined" && _Material_Paper__WEBPACK_IMPORTED_MODULE_4__["default"]) === "function" ? _b : Object)
], SingleSheet.prototype, "paper", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"] !== "undefined" && _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]) === "function" ? _c : Object)
], SingleSheet.prototype, "frontSideCoat", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_d = typeof _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"] !== "undefined" && _Material_Coat__WEBPACK_IMPORTED_MODULE_3__["default"]) === "function" ? _d : Object)
], SingleSheet.prototype, "backSideCoat", void 0);


/***/ }),

/***/ "./libs/data/src/lib/Review.ts":
/*!*************************************!*\
  !*** ./libs/data/src/lib/Review.ts ***!
  \*************************************/
/*! exports provided: FramedPage, ReviewModel, ReviewItem, ReviewStatus, UploadFileStatus, UploadFilePageInfo, ReviewRegistrationInfo, ReviewReception */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Review_FramedPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Review/FramedPage */ "./libs/data/src/lib/Review/FramedPage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FramedPage", function() { return _Review_FramedPage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Review_ReviewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review/ReviewModel */ "./libs/data/src/lib/Review/ReviewModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewModel", function() { return _Review_ReviewModel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Review_ReviewItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review/ReviewItem */ "./libs/data/src/lib/Review/ReviewItem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewItem", function() { return _Review_ReviewItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Review_ReviewStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Review/ReviewStatus */ "./libs/data/src/lib/Review/ReviewStatus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewStatus", function() { return _Review_ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Review_UploadFileStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Review/UploadFileStatus */ "./libs/data/src/lib/Review/UploadFileStatus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatus", function() { return _Review_UploadFileStatus__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Review_UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Review/UploadFilePageInfo */ "./libs/data/src/lib/Review/UploadFilePageInfo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFilePageInfo", function() { return _Review_UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Review_ReviewRegistrationInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Review/ReviewRegistrationInfo */ "./libs/data/src/lib/Review/ReviewRegistrationInfo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewRegistrationInfo", function() { return _Review_ReviewRegistrationInfo__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Review_ReviewReception__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Review/ReviewReception */ "./libs/data/src/lib/Review/ReviewReception.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return _Review_ReviewReception__WEBPACK_IMPORTED_MODULE_7__["default"]; });












/***/ }),

/***/ "./libs/data/src/lib/Review/FramedPage.ts":
/*!************************************************!*\
  !*** ./libs/data/src/lib/Review/FramedPage.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ReviewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewModel */ "./libs/data/src/lib/Review/ReviewModel.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_3__);
var _a, _b;




let FramedPage = class FramedPage {
    constructor(frameId, frameName, reviewModel, positionX = 0, positionY = 0, scaleX = 1, scaleY = 1, _rotationDegree = 0) {
        this.frameId = frameId;
        this.frameName = frameName;
        this.reviewModel = reviewModel;
        this.positionX = positionX;
        this.positionY = positionY;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this._rotationDegree = _rotationDegree;
    }
    getFrame() {
        return this.reviewModel.getFrame(this.frameName);
    }
    getSourcePageInfo() {
        if (this.sourceFileIndex === undefined
            || this.sourcePageNumber === undefined) {
            return undefined;
        }
        let fileStatus = this.reviewModel.reviewItem.status.uploadFileStatuses[this.sourceFileIndex];
        if (!fileStatus || !fileStatus.pageInfos) {
            return undefined;
        }
        return fileStatus.pageInfos[this.sourcePageNumber];
    }
    reset() {
        this.rotate(0); // 回到原本的角度
        this.moveTo(0, 0); // 回到預設原點
        this.scale(1, 1); // 回到原本的縮放
    }
    // 旋轉
    rotate(degree) {
        this.rotationDegree = degree;
    }
    get rotationDegree() {
        return this._rotationDegree;
    }
    set rotationDegree(degree) {
        this._rotationDegree = degree % 360;
    }
    // 縮放
    scale(x, y) {
        if (x > 0 && y > 0) {
            this.setScale(x, y);
        }
        else {
            //TODO: 錯誤? 就默默不讓他做? 提醒? 還是0沒有關係?
        }
    }
    setScale(x, y) {
        this.scaleX = x;
        this.scaleY = y;
    }
    // 移動位置
    moveTo(x, y) {
        // 檢查是否超出去，最多就是剛好超出去?防呆要在這裡嗎? 還是說寫前端的時候再防就好了
        this.setPosition(x, y);
    }
    setPosition(x, y) {
        this.positionX = x;
        this.positionY = y;
    }
    clone() {
        return Object.assign(this);
    }
    // 需要的method : setFile  getPreviewImage getResultImage getResultFlie
    // cleanFile? 空白頁? 選擇了頁是不是可以改選擇用空白頁 
    calculateInitialPostionXandPostionY() {
        let positionX;
        let positionY;
        let sourcePage = this.getSourcePageInfo();
        let frame = this.getFrame();
        if (sourcePage && frame) { //有指定的sourceFile
            let sourceWidth = sourcePage.widthInMm;
            let sourceHeight = sourcePage.heightInMm;
            let frameWidth = frame.maxWidth;
            let frameHeight = frame.maxHeight;
            positionX = (frameWidth - sourceWidth) / 2;
            positionY = (frameHeight - sourceHeight) / 2;
        }
        else {
            positionX = 0;
            positionY = 0;
        }
        return ({
            positionX: positionX,
            positionY: positionY
        });
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["PrimaryColumn"])('varchar', { length: 255 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], FramedPage.prototype, "frameId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], FramedPage.prototype, "sourceFileIndex", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], FramedPage.prototype, "sourcePageNumber", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('text'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], FramedPage.prototype, "resultingJpegUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('text'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], FramedPage.prototype, "resultingPdfUrl", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], FramedPage.prototype, "_rotationDegree", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["ManyToOne"])(() => _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"], (model) => model.framedPages),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _a : Object)
], FramedPage.prototype, "reviewModel", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('varchar', { length: 16 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], FramedPage.prototype, "frameName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], FramedPage.prototype, "positionX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], FramedPage.prototype, "positionY", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], FramedPage.prototype, "scaleX", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], FramedPage.prototype, "scaleY", void 0);
FramedPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Entity"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String, typeof (_b = typeof _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _b : Object, Number, Number, Number, Number, Number])
], FramedPage);
/* harmony default export */ __webpack_exports__["default"] = (FramedPage);


/***/ }),

/***/ "./libs/data/src/lib/Review/ReviewItem.ts":
/*!************************************************!*\
  !*** ./libs/data/src/lib/Review/ReviewItem.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Product */ "./libs/data/src/lib/Product.ts");
/* harmony import */ var _ReviewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewModel */ "./libs/data/src/lib/Review/ReviewModel.ts");
/* harmony import */ var _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewStatus */ "./libs/data/src/lib/Review/ReviewStatus.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_5__);
var ReviewItem_1, _a, _b, _c, _d, _e;






let ReviewItem = ReviewItem_1 = class ReviewItem {
    constructor(status, reviewId, product) {
        this.status = status;
        this.reviewId = reviewId;
        this._product = product;
    }
    get product() {
        return this._product;
    }
    deserializeProduct() {
        if (this._serializedProduct === undefined)
            throw new Error("TypeORM should have set '__serializedProduct' but didn't.");
        this._product = Object(_Product__WEBPACK_IMPORTED_MODULE_1__["jsonToProduct"])(this._serializedProduct);
    }
    serializeProduct() {
        this._serializedProduct = Object(_Product__WEBPACK_IMPORTED_MODULE_1__["productToJson"])(this._product);
    }
    get numberOfModels() {
        return this.status.numberOfModels;
    }
    getFramedPage(modelIndex, frameIndex) {
        let model = this.models[modelIndex];
        if (!model)
            return undefined;
        return model.framedPages[frameIndex];
    }
    set models(models) {
        if (models.length !== this.numberOfModels) {
            throw new Error(`number of models inconsistent: should be ${this.numberOfModels}, but has ${models.length}`);
        }
        this._models = models;
    }
    get models() {
        if (!this._models)
            return this.createAndSetBlankModels();
        return this._models;
    }
    createAndSetBlankModels() {
        this.models = this.createBlankModels();
        return this.models;
    }
    createBlankModels() {
        let models = [];
        for (let modelNumber = 1; modelNumber <= this.numberOfModels; modelNumber++) {
            models.push(new _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"](generateModelIdFromReviewId(this.reviewId, modelNumber), `第${modelNumber}款`, this));
        }
        return models;
        function generateModelIdFromReviewId(reviewId, modelNumber) {
            let modelNumberInString = modelNumber.toString();
            let numberOfModelNumberDigits = modelNumberInString.length;
            const modelIdMaximalLength = 3;
            let numberOfZerosToAppend = modelIdMaximalLength - numberOfModelNumberDigits;
            let modelId = reviewId + '0'.repeat(numberOfZerosToAppend) + modelNumberInString;
            return modelId;
        }
    }
    get frameDictionary() {
        return this._product.frameDictionary;
    }
    static fromJson(text) {
        let item = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["deserialize"])(ReviewItem_1, text);
        item.models.forEach((model) => {
            model.reviewItem = item;
            model.framedPages.forEach((framedPage) => {
                framedPage.reviewModel = model;
            });
        });
        item.status.uploadFileStatuses.forEach((fileStatus) => {
            var _a;
            fileStatus.reviewStatus = item.status;
            (_a = fileStatus.pageInfos) === null || _a === void 0 ? void 0 : _a.forEach((pageInfo) => {
                pageInfo.fileStatus = fileStatus;
            });
        });
        return item;
    }
    static toJson(item) {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(item);
    }
    setReviewModelImmutably(modelIndex, model) {
        let newReviewItem = new ReviewItem_1(this.status, this.reviewId, this._product);
        newReviewItem.status = this.status;
        let newReviewModels = [...this.models];
        newReviewModels[modelIndex] = model;
        newReviewModels.forEach((model) => {
            model.reviewItem = newReviewItem;
        });
        newReviewItem.models = newReviewModels;
        return newReviewItem;
    }
    setFramedPageImmutably(modelIndex, frameIndex, framedPage) {
        let oldModel = this.models[modelIndex];
        if (!oldModel)
            throw new Error("modelIndex out of index");
        let newModel = oldModel.setFramedPageImmutably(frameIndex, framedPage);
        return this.setReviewModelImmutably(modelIndex, newModel);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["PrimaryColumn"])('varchar', { length: 255 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ReviewItem.prototype, "reviewId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"]),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["OneToMany"])(() => _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"], (model) => model.reviewItem),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ReviewItem.prototype, "_models", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["OneToOne"])(() => _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"], {
        cascade: true
    }),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["JoinColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"] !== "undefined" && _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"]) === "function" ? _b : Object)
], ReviewItem.prototype, "status", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _Product__WEBPACK_IMPORTED_MODULE_1__["Product"], {
        discriminator: _Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_TYPE_DISCRIMINATOR"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof _Product__WEBPACK_IMPORTED_MODULE_1__["Product"] !== "undefined" && _Product__WEBPACK_IMPORTED_MODULE_1__["Product"]) === "function" ? _c : Object)
], ReviewItem.prototype, "_product", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Exclude"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Column"])('text'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ReviewItem.prototype, "_serializedProduct", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["AfterLoad"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ReviewItem.prototype, "deserializeProduct", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["BeforeInsert"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], ReviewItem.prototype, "serializeProduct", null);
ReviewItem = ReviewItem_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Entity"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"] !== "undefined" && _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"]) === "function" ? _d : Object, String, typeof (_e = typeof _Product__WEBPACK_IMPORTED_MODULE_1__["Product"] !== "undefined" && _Product__WEBPACK_IMPORTED_MODULE_1__["Product"]) === "function" ? _e : Object])
], ReviewItem);
/* harmony default export */ __webpack_exports__["default"] = (ReviewItem);


/***/ }),

/***/ "./libs/data/src/lib/Review/ReviewModel.ts":
/*!*************************************************!*\
  !*** ./libs/data/src/lib/Review/ReviewModel.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _FrameDictionary_FrameDictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FrameDictionary/FrameDictionary */ "./libs/data/src/lib/FrameDictionary/FrameDictionary.ts");
/* harmony import */ var _FramedPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FramedPage */ "./libs/data/src/lib/Review/FramedPage.ts");
/* harmony import */ var _ReviewItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReviewItem */ "./libs/data/src/lib/Review/ReviewItem.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_5__);
var ReviewModel_1, _a, _b, _c, _d;






let ReviewModel = ReviewModel_1 = class ReviewModel {
    constructor(modelId, modelName, reviewItem) {
        this.modelId = modelId;
        this.modelName = modelName;
        this.reviewItem = reviewItem;
        // this.createAndSetBlankFramedPages();
    }
    getFrame(name) {
        return this.frameDictionary.getFrame(name);
    }
    setFramedPageImmutably(index, framedPage) {
        let newReviewModel = new ReviewModel_1(this.modelId, this.modelName, this.reviewItem);
        let newFramedPages = new Array();
        newFramedPages = [...this.framedPages];
        newFramedPages[index] = framedPage;
        newFramedPages.forEach((framedPage) => {
            framedPage.reviewModel = newReviewModel;
        });
        newReviewModel.framedPages = newFramedPages;
        return newReviewModel;
    }
    get framedPages() {
        if (!this._framedPages)
            return this.createAndSetBlankFramedPages();
        return this._framedPages;
    }
    get numberOfFramedPages() {
        return this.frameNames.length;
    }
    set framedPages(framedPages) {
        if (framedPages.length !== this.numberOfFramedPages)
            throw new Error("map size inconsistent");
        this._framedPages = framedPages;
    }
    createAndSetBlankFramedPages() {
        this.framedPages = this.createBlankFramedPages();
        return this.framedPages;
    }
    createBlankFramedPages() {
        return this.frameNames.map((name, frameIndex) => {
            let frameId = generateFrameIdFromModelId(this.modelId, frameIndex + 1);
            return new _FramedPage__WEBPACK_IMPORTED_MODULE_3__["default"](frameId, name, this);
        });
        function generateFrameIdFromModelId(modelId, frameNumber) {
            let frameNumberInString = frameNumber.toString();
            let numberOfFrameNumberDigits = frameNumberInString.length;
            const frameNumberMaximalLength = 4;
            let numberOfZerosToAppend = frameNumberMaximalLength - numberOfFrameNumberDigits;
            let frameId = modelId + '0'.repeat(numberOfZerosToAppend) + frameNumberInString;
            return frameId;
        }
    }
    get frameNames() {
        return this.frameDictionary.frameNames;
    }
    get frameDictionary() {
        if (!this._frameDictionary)
            return this.getAndSetFrameDictionary();
        return this._frameDictionary;
    }
    getAndSetFrameDictionary() {
        this._frameDictionary = this.reviewItem.frameDictionary;
        return this._frameDictionary;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["PrimaryColumn"])('varchar', { length: 255 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ReviewModel.prototype, "modelId", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Column"])('varchar', { length: 16 }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], ReviewModel.prototype, "modelName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _FramedPage__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["OneToMany"])(() => _FramedPage__WEBPACK_IMPORTED_MODULE_3__["default"], (framedPage) => framedPage.reviewModel),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof Array !== "undefined" && Array) === "function" ? _a : Object)
], ReviewModel.prototype, "_framedPages", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof _FrameDictionary_FrameDictionary__WEBPACK_IMPORTED_MODULE_2__["default"] !== "undefined" && _FrameDictionary_FrameDictionary__WEBPACK_IMPORTED_MODULE_2__["default"]) === "function" ? _b : Object)
], ReviewModel.prototype, "_frameDictionary", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["ManyToOne"])(() => _ReviewItem__WEBPACK_IMPORTED_MODULE_4__["default"], (reviewItem) => reviewItem.models),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof _ReviewItem__WEBPACK_IMPORTED_MODULE_4__["default"] !== "undefined" && _ReviewItem__WEBPACK_IMPORTED_MODULE_4__["default"]) === "function" ? _c : Object)
], ReviewModel.prototype, "reviewItem", void 0);
ReviewModel = ReviewModel_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Entity"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String, typeof (_d = typeof _ReviewItem__WEBPACK_IMPORTED_MODULE_4__["default"] !== "undefined" && _ReviewItem__WEBPACK_IMPORTED_MODULE_4__["default"]) === "function" ? _d : Object])
], ReviewModel);
/* harmony default export */ __webpack_exports__["default"] = (ReviewModel);


/***/ }),

/***/ "./libs/data/src/lib/Review/ReviewReception.ts":
/*!*****************************************************!*\
  !*** ./libs/data/src/lib/Review/ReviewReception.ts ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/data/src/lib/Review/ReviewRegistrationInfo.ts":
/*!************************************************************!*\
  !*** ./libs/data/src/lib/Review/ReviewRegistrationInfo.ts ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewRegistrationInfo; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Product/Product */ "./libs/data/src/lib/Product/Product.ts");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Product */ "./libs/data/src/lib/Product.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_3__);
var _a;




class ReviewRegistrationInfo {
    constructor(numberOfModels, product) {
        this.numberOfModels = numberOfModels;
        this.product = product;
    }
    static toJson(info) {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["serialize"])(info);
    }
    static fromJson(text) {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(ReviewRegistrationInfo, text);
    }
}
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _Product_Product__WEBPACK_IMPORTED_MODULE_1__["default"], {
        discriminator: _Product__WEBPACK_IMPORTED_MODULE_2__["PRODUCT_TYPE_DISCRIMINATOR"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _Product_Product__WEBPACK_IMPORTED_MODULE_1__["default"] !== "undefined" && _Product_Product__WEBPACK_IMPORTED_MODULE_1__["default"]) === "function" ? _a : Object)
], ReviewRegistrationInfo.prototype, "product", void 0);


/***/ }),

/***/ "./libs/data/src/lib/Review/ReviewStatus.ts":
/*!**************************************************!*\
  !*** ./libs/data/src/lib/Review/ReviewStatus.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gainhow-review/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var _UploadFileStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UploadFileStatus */ "./libs/data/src/lib/Review/UploadFileStatus.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
var ReviewStatus_1, _a;





let ReviewStatus = ReviewStatus_1 = class ReviewStatus {
    constructor(numberOfModels) {
        this.numberOfFiles = 0;
        this.numberOfModels = numberOfModels;
        this.progress = "REGISTERED";
    }
    toJson(status) {
        return Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["serialize"])(status);
    }
    fromJson(text) {
        let reviewStatus = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["deserialize"])(ReviewStatus_1, text);
        reviewStatus.uploadFileStatuses.forEach((fileStatus) => {
            var _a;
            fileStatus.reviewStatus = reviewStatus;
            (_a = fileStatus.pageInfos) === null || _a === void 0 ? void 0 : _a.forEach((pageInfo) => {
                pageInfo.fileStatus = fileStatus;
            });
        });
        return reviewStatus;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["PrimaryGeneratedColumn"])() // 由typeorm在第一次存到資料庫的時候幫忙生成
    ,
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ReviewStatus.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _UploadFileStatus__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["OneToMany"])(() => _UploadFileStatus__WEBPACK_IMPORTED_MODULE_3__["default"], (fileStatus) => fileStatus.reviewStatus),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
], ReviewStatus.prototype, "uploadFileStatuses", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({
        type: 'enum',
        enum: _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["REVIEWING_PROGRESS"]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["ReviewingProgress"] !== "undefined" && _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["ReviewingProgress"]) === "function" ? _a : Object)
], ReviewStatus.prototype, "progress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ReviewStatus.prototype, "numberOfFiles", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], ReviewStatus.prototype, "numberOfModels", void 0);
ReviewStatus = ReviewStatus_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Entity"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Number])
], ReviewStatus);
/* harmony default export */ __webpack_exports__["default"] = (ReviewStatus);


/***/ }),

/***/ "./libs/data/src/lib/Review/UploadFilePageInfo.ts":
/*!********************************************************!*\
  !*** ./libs/data/src/lib/Review/UploadFilePageInfo.ts ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Review */ "./libs/data/src/lib/Review.ts");
var _a, _b;




let UploadFilePageInfo = class UploadFilePageInfo {
    constructor(fileStatus, pdfAddress, jpegAddress, widthInMm, heightInMm) {
        this.fileStatus = fileStatus;
        this.pdfAddress = pdfAddress;
        this.jpegAddress = jpegAddress;
        this.widthInMm = widthInMm;
        this.heightInMm = heightInMm;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["PrimaryGeneratedColumn"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UploadFilePageInfo.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('text'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UploadFilePageInfo.prototype, "pdfAddress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('text'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UploadFilePageInfo.prototype, "jpegAddress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UploadFilePageInfo.prototype, "widthInMm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UploadFilePageInfo.prototype, "heightInMm", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["ManyToOne"])(() => _Review__WEBPACK_IMPORTED_MODULE_3__["UploadFileStatus"], (fileStatus) => fileStatus.pageInfos),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _Review__WEBPACK_IMPORTED_MODULE_3__["UploadFileStatus"] !== "undefined" && _Review__WEBPACK_IMPORTED_MODULE_3__["UploadFileStatus"]) === "function" ? _a : Object)
], UploadFilePageInfo.prototype, "fileStatus", void 0);
UploadFilePageInfo = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Entity"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _Review__WEBPACK_IMPORTED_MODULE_3__["UploadFileStatus"] !== "undefined" && _Review__WEBPACK_IMPORTED_MODULE_3__["UploadFileStatus"]) === "function" ? _b : Object, String, String, Number, Number])
], UploadFilePageInfo);
/* harmony default export */ __webpack_exports__["default"] = (UploadFilePageInfo);


/***/ }),

/***/ "./libs/data/src/lib/Review/UploadFileStatus.ts":
/*!******************************************************!*\
  !*** ./libs/data/src/lib/Review/UploadFileStatus.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "class-transformer");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(class_transformer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gainhow-review/interfaces */ "./libs/interfaces/src/index.ts");
/* harmony import */ var _UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UploadFilePageInfo */ "./libs/data/src/lib/Review/UploadFilePageInfo.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! typeorm */ "typeorm");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(typeorm__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Review */ "./libs/data/src/lib/Review.ts");
var _a, _b, _c, _d, _e;






let UploadFileStatus = class UploadFileStatus {
    constructor(reviewStatus, fileName) {
        this.reviewStatus = reviewStatus;
        this.fileName = fileName;
        this.currentStage = "UPLOADING";
    }
    get hasError() {
        if (this.errorStage)
            return true;
        return false;
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["PrimaryGeneratedColumn"])() // 由typeorm在第一次存到資料庫的時候幫忙生成
    ,
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UploadFileStatus.prototype, "id", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])('text'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UploadFileStatus.prototype, "fileName", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])('varchar', {
        length: 255,
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UploadFileStatus.prototype, "uploadToken", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({
        type: "enum",
        enum: _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_FILE_PROCESSING_STAGES"],
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["UploadFileProcessingStage"] !== "undefined" && _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["UploadFileProcessingStage"]) === "function" ? _a : Object)
], UploadFileStatus.prototype, "currentStage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])('int', {
        nullable: true
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Number)
], UploadFileStatus.prototype, "numberOfPages", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])('text', {
        default: null
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], UploadFileStatus.prototype, "fileAddress", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_3__["default"]),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["OneToMany"])(() => _UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_3__["default"], (pageInfo) => pageInfo.fileStatus),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_b = typeof Array !== "undefined" && Array) === "function" ? _b : Object)
], UploadFileStatus.prototype, "pageInfos", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Column"])({
        type: "enum",
        enum: _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["UPLOAD_FILE_PROCESSING_STAGES"],
        default: undefined
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_c = typeof _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["UploadFileProcessingStage"] !== "undefined" && _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_2__["UploadFileProcessingStage"]) === "function" ? _c : Object)
], UploadFileStatus.prototype, "errorStage", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["ManyToOne"])(() => _Review__WEBPACK_IMPORTED_MODULE_5__["ReviewStatus"], (reviewStatus) => reviewStatus.uploadFileStatuses),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_d = typeof _Review__WEBPACK_IMPORTED_MODULE_5__["ReviewStatus"] !== "undefined" && _Review__WEBPACK_IMPORTED_MODULE_5__["ReviewStatus"]) === "function" ? _d : Object)
], UploadFileStatus.prototype, "reviewStatus", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Expose"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UploadFileStatus.prototype, "hasError", null);
UploadFileStatus = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(typeorm__WEBPACK_IMPORTED_MODULE_4__["Entity"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _Review__WEBPACK_IMPORTED_MODULE_5__["ReviewStatus"] !== "undefined" && _Review__WEBPACK_IMPORTED_MODULE_5__["ReviewStatus"]) === "function" ? _e : Object, String])
], UploadFileStatus);
/* harmony default export */ __webpack_exports__["default"] = (UploadFileStatus);


/***/ }),

/***/ "./libs/interfaces/src/index.ts":
/*!**************************************!*\
  !*** ./libs/interfaces/src/index.ts ***!
  \**************************************/
/*! exports provided: BOOK_SUBTYPE_NAMES, BOOK_PAGING_DIRECTIONS, BINDING_OPTIONS, REVIEWING_PROGRESS, UPLOAD_FILE_PROCESSING_STAGES, FailureType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/pricing */ "./libs/interfaces/src/lib/pricing.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/api */ "./libs/interfaces/src/lib/api.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_printer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/printer */ "./libs/interfaces/src/lib/printer.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/product */ "./libs/interfaces/src/lib/product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOK_SUBTYPE_NAMES", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_3__["BOOK_SUBTYPE_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOK_PAGING_DIRECTIONS", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_3__["BOOK_PAGING_DIRECTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BINDING_OPTIONS", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_3__["BINDING_OPTIONS"]; });

/* harmony import */ var _lib_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/review */ "./libs/interfaces/src/lib/review.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REVIEWING_PROGRESS", function() { return _lib_review__WEBPACK_IMPORTED_MODULE_4__["REVIEWING_PROGRESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FILE_PROCESSING_STAGES", function() { return _lib_review__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_FILE_PROCESSING_STAGES"]; });

/* harmony import */ var _lib_transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/transaction */ "./libs/interfaces/src/lib/transaction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FailureType", function() { return _lib_transaction__WEBPACK_IMPORTED_MODULE_5__["FailureType"]; });









/***/ }),

/***/ "./libs/interfaces/src/lib/api.ts":
/*!****************************************!*\
  !*** ./libs/interfaces/src/lib/api.ts ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/interfaces/src/lib/pricing.ts":
/*!********************************************!*\
  !*** ./libs/interfaces/src/lib/pricing.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/interfaces/src/lib/printer.ts":
/*!********************************************!*\
  !*** ./libs/interfaces/src/lib/printer.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** ============ 集單＆組版 ============ */
;
;



/***/ }),

/***/ "./libs/interfaces/src/lib/product.ts":
/*!********************************************!*\
  !*** ./libs/interfaces/src/lib/product.ts ***!
  \********************************************/
/*! exports provided: BOOK_SUBTYPE_NAMES, BOOK_PAGING_DIRECTIONS, BINDING_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK_SUBTYPE_NAMES", function() { return BOOK_SUBTYPE_NAMES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BOOK_PAGING_DIRECTIONS", function() { return BOOK_PAGING_DIRECTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BINDING_OPTIONS", function() { return BINDING_OPTIONS; });
/**
* 書籍
* @enum
*
*/
// 總共有的所有書籍類別: 騎馬釘、蝴蝶書、膠裝書
const BOOK_SUBTYPE_NAMES = [
    "SaddleStichedBook",
    "PerfectBoundBook",
];
// 翻頁方式: 左翻與右翻
const BOOK_PAGING_DIRECTIONS = [
    "LEFT_TO_RIGHT",
    "RIGHT_TO_LEFT",
    "BOTTOM_TO_TOP" // 橫式
];
// 裝訂方式
const BINDING_OPTIONS = [
    "SaddleStichBinding",
    "ButterflyBinding",
    "PerfectBinding"
];


/***/ }),

/***/ "./libs/interfaces/src/lib/review.ts":
/*!*******************************************!*\
  !*** ./libs/interfaces/src/lib/review.ts ***!
  \*******************************************/
/*! exports provided: REVIEWING_PROGRESS, UPLOAD_FILE_PROCESSING_STAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REVIEWING_PROGRESS", function() { return REVIEWING_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FILE_PROCESSING_STAGES", function() { return UPLOAD_FILE_PROCESSING_STAGES; });
/**
 * @enum
 */
// 審稿狀態
const REVIEWING_PROGRESS = [
    "REGISTERED",
    // "UPLOADING",                // '已經開始上傳檔案，但還有檔案沒上傳完畢',
    // "GENERATING_PREVIEW_PAGES", // '所有檔案都上傳完畢，但還有檔案預覽圖在生成中',
    // "WAITING_PRINTABLE_REVIEW", // '預覽圖都生成完畢，但使用者還在確認排版',
    "REVIEWED",
    // "GENERATING_PRINTABLE_REVIEWED_PAGES", // '使用者已確認排版，但還有印刷檔在生成中',
    // "WAITING_FOR_USER_CHECK", // '印刷檔都生成完畢，但使用者還沒確認最終結果',
    "FINISHED",
];
/**
 * @enum
 */
// 上傳檔案的狀態
const UPLOAD_FILE_PROCESSING_STAGES = [
    "UPLOADING",
    "GENERATING_PRINTABLE_PAGES",
    "FINISHED" // 處理完畢
];


/***/ }),

/***/ "./libs/interfaces/src/lib/transaction.ts":
/*!************************************************!*\
  !*** ./libs/interfaces/src/lib/transaction.ts ***!
  \************************************************/
/*! exports provided: FailureType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureType", function() { return FailureType; });
/** ============ 錯誤類型 ============ */
var FailureType;
(function (FailureType) {
    FailureType["CONNECTION_FAILURE"] = "\u9023\u7DDA\u932F\u8AA4";
    FailureType["PRECONDITION_FAILURE"] = "\u524D\u7F6E\u689D\u4EF6\u4E0D\u7B26";
    FailureType["POSTCONDITION_FAILURE"] = "\u5F8C\u7F6E\u689D\u4EF6\u7121\u6CD5\u5B8C\u6210";
    FailureType["UNDEFINED_FAILURE"] = "\u672A\u80FD\u6B78\u985E\u70BA\u4EE5\u4E0A\u4E09\u7A2E";
})(FailureType || (FailureType = {}));


/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/vince/gainhow-review/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("class-transformer");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),

/***/ "express-fileupload":
/*!*************************************!*\
  !*** external "express-fileupload" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("express-fileupload");

/***/ }),

/***/ "form-data":
/*!****************************!*\
  !*** external "form-data" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("form-data");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("typeorm");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map