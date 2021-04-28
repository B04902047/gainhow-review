(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/data/src/index.ts":
/*!***********************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/index.ts ***!
  \***********************************************************************/
/*! exports provided: FramedPage, ReviewModel, ReviewItem, ReviewStatus, UploadFileStatus, UploadFilePageInfo, ReviewRegistrationInfo, ReviewReception, Product, SingleSheet, SaddleStichedBook, PerfectBoundBook, jsonToProduct, productToJson, PRODUCT_SUBTYPES, PRODUCT_TYPE_DISCRIMINATOR, Coat, PaperMaterial, Paper, Frame, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_Review__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Review */ "../../../libs/data/src/lib/Review.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FramedPage", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["FramedPage"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewModel", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewItem", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewStatus", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatus", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["UploadFileStatus"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFilePageInfo", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewRegistrationInfo", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewRegistrationInfo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return _lib_Review__WEBPACK_IMPORTED_MODULE_0__["ReviewReception"]; });

/* harmony import */ var _lib_Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/Product */ "../../../libs/data/src/lib/Product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["Product"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleSheet", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["SingleSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaddleStichedBook", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["SaddleStichedBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerfectBoundBook", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PerfectBoundBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "jsonToProduct", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["jsonToProduct"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "productToJson", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["productToJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SUBTYPES", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_SUBTYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_TYPE_DISCRIMINATOR", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_TYPE_DISCRIMINATOR"]; });

/* harmony import */ var _lib_Material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/Material */ "../../../libs/data/src/lib/Material.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coat", function() { return _lib_Material__WEBPACK_IMPORTED_MODULE_2__["Coat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperMaterial", function() { return _lib_Material__WEBPACK_IMPORTED_MODULE_2__["PaperMaterial"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _lib_Material__WEBPACK_IMPORTED_MODULE_2__["Paper"]; });

/* harmony import */ var _lib_Frame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/Frame */ "../../../libs/data/src/lib/Frame.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return _lib_Frame__WEBPACK_IMPORTED_MODULE_3__["Frame"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _lib_Frame__WEBPACK_IMPORTED_MODULE_3__["Line"]; });






/***/ }),

/***/ "../../../libs/data/src/lib/Frame.ts":
/*!***************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame.ts ***!
  \***************************************************************************/
/*! exports provided: Frame, Line */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Frame_Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame/Frame */ "../../../libs/data/src/lib/Frame/Frame.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Frame", function() { return _Frame_Frame__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Frame_Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Frame/Line */ "../../../libs/data/src/lib/Frame/Line.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Line", function() { return _Frame_Line__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),

/***/ "../../../libs/data/src/lib/Frame/BleededRectangleFrame.ts":
/*!*************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/BleededRectangleFrame.ts ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BleededRectangleFrame; });
/* harmony import */ var _RectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RectangleFrame */ "../../../libs/data/src/lib/Frame/RectangleFrame.ts");

class BleededRectangleFrame extends _RectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(widthWithoutBleeding, // 裁切後的寬（mm）
  heightWithoutBleeding, // 裁切後的高（mm）
  cutError) // 裁切誤差／出血範圍（mm）
  {
    super(widthWithoutBleeding + 2 * cutError, heightWithoutBleeding + 2 * cutError);
    this.widthWithoutBleeding = widthWithoutBleeding;
    this.heightWithoutBleeding = heightWithoutBleeding;
    this.cutError = cutError;
    this.bleedingArea = void 0;
    this.shape = void 0;
    this.cutOutAreas = [];
    this.marks = void 0;
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
    const cutMarkWidthScale = this.maxHeight / this.maxWidth;
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
    return marks; //  return `polygon(${safeAreaX}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaX}% ${safeAreaBottom}%)`;
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

/***/ "../../../libs/data/src/lib/Frame/BookBackCoverFrame.ts":
/*!**********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/BookBackCoverFrame.ts ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookBackCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "../../../libs/data/src/lib/Frame/BookCoverFrame.ts");

class BookBackCoverFrame extends _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(bookWidth, bookHeight, cutError) {
    super(bookWidth, bookHeight, cutError);
    this.foldLines = void 0;
    this.foldLines = [];
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Frame/BookCoverFrame.ts":
/*!******************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/BookCoverFrame.ts ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookCoverFrame; });
/* harmony import */ var _BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BleededRectangleFrame */ "../../../libs/data/src/lib/Frame/BleededRectangleFrame.ts");

class BookCoverFrame extends _BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(...args) {
    super(...args);
    this.foldLines = void 0;
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Frame/BookFrontCoverFrame.ts":
/*!***********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/BookFrontCoverFrame.ts ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookFrontCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "../../../libs/data/src/lib/Frame/BookCoverFrame.ts");

class BookFrontCoverFrame extends _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(bookWidth, bookHeight, cutError) {
    super(bookWidth, bookHeight, cutError);
    this.foldLines = void 0;
    this.foldLines = [];
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Frame/Frame.ts":
/*!*********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/Frame.ts ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Frame; });
class Frame {
  // 出血範圍的css clip-path (單位：%)
  // 成品範圍的css clip-path (單位：%)
  // 鏤空範圍的css clip-paths (單位：%)
  // 其它記號的SVG strings
  constructor(maxWidth, // 最大寬度（mm）
  maxHeight // 最大高度（mm）
  ) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.bleedingArea = void 0;
    this.shape = void 0;
    this.cutOutAreas = void 0;
    this.marks = void 0;
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Frame/Line.ts":
/*!********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/Line.ts ***!
  \********************************************************************************/
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

/***/ "../../../libs/data/src/lib/Frame/PerfectBoundBookSoftCoverFrame.ts":
/*!**********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/PerfectBoundBookSoftCoverFrame.ts ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBookSoftCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "../../../libs/data/src/lib/Frame/BookCoverFrame.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "../../../libs/data/src/lib/Frame/Line.ts");


class PerfectBoundBookSoftCoverFrame extends _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(bookWidth, bookHeight, bookSpineWidth, cutError) {
    super(bookWidth * 2 + bookSpineWidth, bookHeight, cutError);
    this.bookWidth = bookWidth;
    this.bookHeight = bookHeight;
    this.bookSpineWidth = bookSpineWidth;
    this.cutError = cutError;
    this.foldLines = void 0;
    this.foldLines = this.createFoldLines();
  }

  createFoldLines() {
    let leftFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.cutError + this.bookWidth) / this.maxWidth * 100, 0, (this.cutError + this.bookWidth) / this.maxWidth * 100, this.height / this.maxHeight * 100);
    let rightFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, 0, (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, this.height / this.maxHeight * 100);
    return [leftFoldLine, rightFoldLine];
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Frame/PerfectBoundHardCoverFrame.ts":
/*!******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/PerfectBoundHardCoverFrame.ts ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBookHardCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "../../../libs/data/src/lib/Frame/BookCoverFrame.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "../../../libs/data/src/lib/Frame/Line.ts");


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
    this.foldLines = void 0;
    this.foldLines = this.createFoldLines();
  }

  createFoldLines() {
    let leftHingeLeftFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.cutError + this.bookWidth) / this.maxWidth * 100, 0, (this.cutError + this.bookWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
    let leftHingeRightFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.cutError + this.bookWidth + this.outerHingeWidth) / this.maxWidth * 100, 0, (this.cutError + this.bookWidth + this.outerHingeWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
    let rightHingeLeftFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.width - this.cutError - this.bookWidth - this.outerHingeWidth) / this.maxWidth * 100, 0, (this.width - this.cutError - this.bookWidth - this.outerHingeWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
    let rightHingeRightFoldLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"]((this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, 0, (this.width - this.cutError - this.bookWidth) / this.maxWidth * 100, this.bookHeight / this.maxHeight * 100);
    return [leftHingeLeftFoldLine, leftHingeRightFoldLine, rightHingeLeftFoldLine, rightHingeRightFoldLine];
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Frame/RectangleFrame.ts":
/*!******************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/RectangleFrame.ts ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RectangleFrame; });
/* harmony import */ var _Frame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Frame */ "../../../libs/data/src/lib/Frame/Frame.ts");

class RectangleFrame extends _Frame__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(width, height) {
    super(width, height);
    this.width = width;
    this.height = height;
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Frame/SaddleStitchedBookCoverFrame.ts":
/*!********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Frame/SaddleStitchedBookCoverFrame.ts ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaddleStitchedBookCoverFrame; });
/* harmony import */ var _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BookCoverFrame */ "../../../libs/data/src/lib/Frame/BookCoverFrame.ts");
/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Line */ "../../../libs/data/src/lib/Frame/Line.ts");


class SaddleStitchedBookCoverFrame extends _BookCoverFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(bookWidth, bookHeight, cutError) {
    super(bookWidth * 2, bookHeight, cutError);
    this.foldLines = void 0;
    this.foldLines = this.createFoldLines();
  }

  createFoldLines() {
    let middle = this.maxWidth / 2;
    let middleLine = new _Line__WEBPACK_IMPORTED_MODULE_1__["default"](middle / this.maxWidth * 100, 0, middle / this.maxWidth * 100, 100);
    return [middleLine];
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts":
/*!*********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BookFrameDictionary; });
/* harmony import */ var _FrameDictionary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/FrameDictionary.ts");
/* harmony import */ var _Frame_BookFrontCoverFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Frame/BookFrontCoverFrame */ "../../../libs/data/src/lib/Frame/BookFrontCoverFrame.ts");
/* harmony import */ var _Frame_BookBackCoverFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frame/BookBackCoverFrame */ "../../../libs/data/src/lib/Frame/BookBackCoverFrame.ts");



class BookFrameDictionary extends _FrameDictionary__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(product) {
    super(product);
    this.product = product;
    this.coverFrame = void 0;
    this.frontCoverFrame = void 0;
    this.backCoverFrame = void 0;
    this.innerPageFrames = void 0;
    this._frames = void 0;
    this.frontCoverFrame = this.createFrontCoverFrame();
    this.backCoverFrame = this.createBackCoverFrame();
  }

  createBackCoverFrame() {
    return new _Frame_BookBackCoverFrame__WEBPACK_IMPORTED_MODULE_2__["default"](this.product.width, this.product.height, BookFrameDictionary.COVER_CUT_ERROR);
  }

  createFrontCoverFrame() {
    return new _Frame_BookFrontCoverFrame__WEBPACK_IMPORTED_MODULE_1__["default"](this.product.width, this.product.height, BookFrameDictionary.COVER_CUT_ERROR);
  }

  get frames() {
    if (!this._frames) {
      let newFrames = new Map(); // frames.set('cover', this.coverFrame);

      newFrames.set('封面', this.frontCoverFrame);
      this.innerPageFrames.forEach((frame, key) => {
        newFrames.set(key, frame);
      });
      newFrames.set('封底', this.backCoverFrame);
      this._frames = newFrames;
    }

    return this._frames;
  }

  set frames(newFrames) {
    this._frames = newFrames;
  }

}
BookFrameDictionary.INNER_PAGE_CUT_ERROR = 3;
BookFrameDictionary.COVER_CUT_ERROR = 3;

/***/ }),

/***/ "../../../libs/data/src/lib/FrameDictionary/FrameDictionary.ts":
/*!*****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/FrameDictionary/FrameDictionary.ts ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FrameDictionary; });
class FrameDictionary {
  constructor(product) {
    this.product = product;
    this.frames = void 0;
  }

  get frameNames() {
    return Array.from(this.frames.keys());
  }

  getFrame(frameName) {
    return this.frames.get(frameName);
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/FrameDictionary/PerfectBoundBookFrameDictionary.ts":
/*!*********************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/FrameDictionary/PerfectBoundBookFrameDictionary.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBookFrameDictionary; });
/* harmony import */ var _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/BleededRectangleFrame */ "../../../libs/data/src/lib/Frame/BleededRectangleFrame.ts");
/* harmony import */ var _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookFrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts");
/* harmony import */ var _Frame_PerfectBoundBookSoftCoverFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frame/PerfectBoundBookSoftCoverFrame */ "../../../libs/data/src/lib/Frame/PerfectBoundBookSoftCoverFrame.ts");
/* harmony import */ var _Frame_PerfectBoundHardCoverFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Frame/PerfectBoundHardCoverFrame */ "../../../libs/data/src/lib/Frame/PerfectBoundHardCoverFrame.ts");




class PerfectBoundBookFrameDictionary extends _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(product) {
    super(product);
    this.product = product;
    this.coverFrame = void 0;
    this.innerPageFrames = void 0;
    this.innerPageFrames = this.createInnerPageFrames();
    this.coverFrame = this.createBookCoverFrame();
  }

  createInnerPageFrames() {
    let innerPageFrames = new Map();

    if (this.product.pagingDirection === "BOTTOM_TO_TOP") {
      let pageFramePrototype = this.createBottomToTopPagedPageFramePrototype();

      for (let i = 1; i <= this.product.numberOfPages; i++) {
        innerPageFrames.set(String(i), pageFramePrototype);
      }

      return innerPageFrames;
    } else {
      let leftPageFramePrototype = this.createLeftInnerPageFramePrototype();
      let rightPageFramePrototype = this.createRightInnerPageFramePrototype();

      switch (this.product.pagingDirection) {
        case "LEFT_TO_RIGHT":
          for (let i = 1; i <= this.product.numberOfPages; i++) {
            if (i % 2 === 1) {
              innerPageFrames.set(String(i), leftPageFramePrototype);
            } else {
              innerPageFrames.set(String(i), rightPageFramePrototype);
            }
          }

          return innerPageFrames;

        case "RIGHT_TO_LEFT":
          for (let i = 1; i <= this.product.numberOfPages; i++) {
            if (i % 2 === 1) {
              innerPageFrames.set(String(i), rightPageFramePrototype);
            } else {
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
        return marks; // return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
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
        return marks; //  return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
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
        return marks; //return `polygon(${safeAreaLeft}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaTop}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaLeft}% ${safeAreaBottom}%)`;
      }

    }

    return new PerfectBoundBottomToTopPagedPageFrame(this.product.width, this.product.height, PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR);
  }

  createBookCoverFrame() {
    let bookWidth = this.product.width; // 書寬

    let bookHeight = this.product.height; // 書高

    let spineWidth = this.product.spineWidth; // 書背寬

    if (this.product.hardCovered) {
      let outerHingeWidth = // 書溝寬
      spineWidth > 25 ? 14 : 10;
      return new _Frame_PerfectBoundHardCoverFrame__WEBPACK_IMPORTED_MODULE_3__["default"](bookWidth, bookHeight, spineWidth, outerHingeWidth, PerfectBoundBookFrameDictionary.COVER_CUT_ERROR);
    }

    return new _Frame_PerfectBoundBookSoftCoverFrame__WEBPACK_IMPORTED_MODULE_2__["default"](bookWidth, bookHeight, spineWidth, PerfectBoundBookFrameDictionary.COVER_CUT_ERROR);
  }

}
PerfectBoundBookFrameDictionary.BOUND_SIDE_SAFE_DISTANCE = 5;

/***/ }),

/***/ "../../../libs/data/src/lib/FrameDictionary/SaddleStitchedBookFrameDictionary.ts":
/*!***********************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/FrameDictionary/SaddleStitchedBookFrameDictionary.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaddleStitchedBookFrameDictionary; });
/* harmony import */ var _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/BleededRectangleFrame */ "../../../libs/data/src/lib/Frame/BleededRectangleFrame.ts");
/* harmony import */ var _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BookFrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/BookFrameDictionary.ts");
/* harmony import */ var _Frame_SaddleStitchedBookCoverFrame__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Frame/SaddleStitchedBookCoverFrame */ "../../../libs/data/src/lib/Frame/SaddleStitchedBookCoverFrame.ts");



class SaddleStitchedBookFrameDictionary extends _BookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(product) {
    super(product);
    this.product = product;
    this.coverFrame = void 0;
    this.innerPageFrames = void 0;
    this.innerPageFrames = this.createInnerPageFrames();
    this.coverFrame = this.createBookCoverFrame();
  }

  createBookCoverFrame() {
    return new _Frame_SaddleStitchedBookCoverFrame__WEBPACK_IMPORTED_MODULE_2__["default"](this.product.width, this.product.height, SaddleStitchedBookFrameDictionary.COVER_CUT_ERROR);
  }

  createInnerPageFrames() {
    let leftPageFramePrototype = this.createLeftPageFramePrototype();
    let rightPageFramePrototype = this.createRightPageFramePrototype();
    let innerPageFrames = new Map();

    for (let i = 1; i <= this.product.numberOfPages; i++) {
      let innerPageFramePrototype;

      switch (this.product.pagingDirection) {
        case "LEFT_TO_RIGHT":
          innerPageFramePrototype = i % 2 === 0 ? rightPageFramePrototype : leftPageFramePrototype;
          break;

        case "RIGHT_TO_LEFT":
          innerPageFramePrototype = i % 2 === 0 ? leftPageFramePrototype : rightPageFramePrototype;
          break;

        case "BOTTOM_TO_TOP":
          throw new Error("case not implemented: BOTTOM_TO_TOP");
      }

      innerPageFrames.set(String(i), innerPageFramePrototype);
    }

    return innerPageFrames;
  }

  createInnerPageFramePrototype() {
    return new _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"](this.product.width, this.product.height, SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR);
  }

  createLeftPageFramePrototype() {
    return new SaddleStichedBookLeftPageFrame(this.product.width, this.product.height, SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR);
  }

  createRightPageFramePrototype() {
    return new SaddleStichedBookRightPageFrame(this.product.width, this.product.height, SaddleStitchedBookFrameDictionary.INNER_PAGE_CUT_ERROR);
  }

}

class SaddleStichedBookLeftPageFrame extends _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    const cutMarkWidthScale = this.maxHeight / this.maxWidth;
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
    return marks; //  return `polygon(${safeAreaX}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaX}% ${safeAreaBottom}%)`;
  }

}

class SaddleStichedBookRightPageFrame extends _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    const cutMarkWidthScale = this.maxHeight / this.maxWidth;
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
                </svg>
            
            `
    };
    marks.push(safeArea);
    marks.push(cutMark);
    return marks; //  return `polygon(${safeAreaX}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaY}%, ${safeAreaRight}% ${safeAreaBottom}%, ${safeAreaX}% ${safeAreaBottom}%)`;
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/FrameDictionary/SingleSheetFrameDictionary.ts":
/*!****************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/FrameDictionary/SingleSheetFrameDictionary.ts ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleSheetFrameDictionary; });
/* harmony import */ var _Frame_BleededRectangleFrame__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Frame/BleededRectangleFrame */ "../../../libs/data/src/lib/Frame/BleededRectangleFrame.ts");
/* harmony import */ var _FrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/FrameDictionary.ts");


class SingleSheetFrameDictionary extends _FrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(product) {
    super(product);
    this.product = product;
    this.frames = void 0;
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

/***/ "../../../libs/data/src/lib/Material.ts":
/*!******************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Material.ts ***!
  \******************************************************************************/
/*! exports provided: Coat, PaperMaterial, Paper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Material_Coat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Material/Coat */ "../../../libs/data/src/lib/Material/Coat.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Coat", function() { return _Material_Coat__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Material_PaperMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Material/PaperMaterial */ "../../../libs/data/src/lib/Material/PaperMaterial.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PaperMaterial", function() { return _Material_PaperMaterial__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Material/Paper */ "../../../libs/data/src/lib/Material/Paper.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Paper", function() { return _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]; });






/***/ }),

/***/ "../../../libs/data/src/lib/Material/Coat.ts":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Material/Coat.ts ***!
  \***********************************************************************************/
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

/***/ "../../../libs/data/src/lib/Material/Paper.ts":
/*!************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Material/Paper.ts ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Paper; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _PaperMaterial__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PaperMaterial */ "../../../libs/data/src/lib/Material/PaperMaterial.ts");
var _dec, _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let Paper = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _PaperMaterial__WEBPACK_IMPORTED_MODULE_1__["default"]), (_class = (_temp = class Paper {
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

    _initializerDefineProperty(this, "material", _descriptor, this);

    this.material = material;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "material", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));


/***/ }),

/***/ "../../../libs/data/src/lib/Material/PaperMaterial.ts":
/*!********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Material/PaperMaterial.ts ***!
  \********************************************************************************************/
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

/***/ "../../../libs/data/src/lib/Product.ts":
/*!*****************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Product.ts ***!
  \*****************************************************************************/
/*! exports provided: Product, SingleSheet, SaddleStichedBook, PerfectBoundBook, jsonToProduct, productToJson, PRODUCT_SUBTYPES, PRODUCT_TYPE_DISCRIMINATOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jsonToProduct", function() { return jsonToProduct; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "productToJson", function() { return productToJson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SUBTYPES", function() { return PRODUCT_SUBTYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_TYPE_DISCRIMINATOR", function() { return PRODUCT_TYPE_DISCRIMINATOR; });
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product/Product */ "../../../libs/data/src/lib/Product/Product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Product_SingleSheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Product/SingleSheet */ "../../../libs/data/src/lib/Product/SingleSheet.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleSheet", function() { return _Product_SingleSheet__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Product_SaddleStichedBook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Product/SaddleStichedBook */ "../../../libs/data/src/lib/Product/SaddleStichedBook.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaddleStichedBook", function() { return _Product_SaddleStichedBook__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Product_PerfectBoundBook__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product/PerfectBoundBook */ "../../../libs/data/src/lib/Product/PerfectBoundBook.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerfectBoundBook", function() { return _Product_PerfectBoundBook__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");






function jsonToProduct(text) {
  let plainObject = JSON.parse(text);
  let subTypeName = plainObject.__productSubType;

  for (let {
    name,
    value
  } of PRODUCT_SUBTYPES) {
    if (subTypeName === name) return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["deserialize"])(value, text);
  }

  let validSubtypeNames = PRODUCT_SUBTYPES.map(({
    name,
    value
  }) => name);
  throw new Error(`'__productSubType' in json object should contain any value in ${validSubtypeNames.toString()}`);
}
function productToJson(product) {
  return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(product);
}
const PRODUCT_SUBTYPES = [{
  name: "SingleSheet",
  value: _Product_SingleSheet__WEBPACK_IMPORTED_MODULE_1__["default"]
}, {
  name: "SaddleStichedBook",
  value: _Product_SaddleStichedBook__WEBPACK_IMPORTED_MODULE_2__["default"]
}, {
  name: "PerfectBoundBook",
  value: _Product_PerfectBoundBook__WEBPACK_IMPORTED_MODULE_3__["default"]
}];
const PRODUCT_TYPE_DISCRIMINATOR = {
  property: '__productSubType',
  subTypes: PRODUCT_SUBTYPES
};

/***/ }),

/***/ "../../../libs/data/src/lib/Product/Book.ts":
/*!**********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Product/Book.ts ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Book; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _Material_Coat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Material/Coat */ "../../../libs/data/src/lib/Material/Coat.ts");
/* harmony import */ var _Material_Paper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Material/Paper */ "../../../libs/data/src/lib/Material/Paper.ts");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Product */ "../../../libs/data/src/lib/Product/Product.ts");
var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





let Book = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]), _dec2 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_2__["default"]), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_1__["default"]), _dec4 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_1__["default"]), (_class = (_temp = class Book extends _Product__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor(width, height, numberOfPages, pagingDirection, coverPaper, innerPagesPaper, coverCoating, innerPageCoating) {
    super();
    this.width = width;
    this.height = height;
    this.numberOfPages = numberOfPages;
    this.pagingDirection = pagingDirection;
    this.__productSubType = void 0;

    _initializerDefineProperty(this, "coverPaper", _descriptor, this);

    _initializerDefineProperty(this, "innerPagesPaper", _descriptor2, this);

    _initializerDefineProperty(this, "coverCoating", _descriptor3, this);

    _initializerDefineProperty(this, "innerPageCoating", _descriptor4, this);

    this.productSubTypeChineseName = "書籍";
    this.coverPaper = coverPaper;
    this.innerPagesPaper = innerPagesPaper;
    this.coverCoating = coverCoating;
    this.innerPageCoating = innerPageCoating;
  }
  /**
   * 書背寬度（mm）
   */


  get spineWidth() {
    return this.numberOfPages / 2 * this.innerPagesPaper.thickness;
  }

  getInfo() {
    let coverInfo = `封面：${this.coverPaper.name}、${this.coverCoating ? this.coverCoating.chineseName : '不上膜'}`;
    let innerPageInfo = `內頁：${this.innerPagesPaper.name}、${this.innerPageCoating ? this.innerPageCoating.chineseName : '不上膜'}`;
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

    return [`${this.productSubTypeChineseName}，${this.numberOfPages}頁`, `寬 ${this.width} x 長 ${this.height}`, `翻頁方向：${pagingDirectionInChineseName}翻`, `${coverInfo}`, `${innerPageInfo}`];
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "coverPaper", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "innerPagesPaper", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "coverCoating", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "innerPageCoating", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));


/***/ }),

/***/ "../../../libs/data/src/lib/Product/PerfectBoundBook.ts":
/*!**********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Product/PerfectBoundBook.ts ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PerfectBoundBook; });
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ "../../../libs/data/src/lib/Product/Book.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _FrameDictionary_PerfectBoundBookFrameDictionary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../FrameDictionary/PerfectBoundBookFrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/PerfectBoundBookFrameDictionary.ts");
var _dec, _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let PerfectBoundBook = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(), (_class = (_temp = class PerfectBoundBook extends _Book__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(width, height, numberOfPages, pagingDirection, coverPaper, innerPagesPaper, coverCoating, innerPageCoating, hardCovered = false, threadSewn = false, spineStyle = "standard") {
    super(width, height, numberOfPages, pagingDirection, coverPaper, innerPagesPaper, coverCoating, innerPageCoating);
    this.width = width;
    this.height = height;
    this.numberOfPages = numberOfPages;
    this.pagingDirection = pagingDirection;
    this.hardCovered = hardCovered;
    this.threadSewn = threadSewn;
    this.spineStyle = spineStyle;
    this.__productSubType = "PerfectBoundBook";

    _initializerDefineProperty(this, "_frameDictionary", _descriptor, this);
  }

  get frameDictionary() {
    if (!this._frameDictionary) {
      this._frameDictionary = new _FrameDictionary_PerfectBoundBookFrameDictionary__WEBPACK_IMPORTED_MODULE_2__["default"](this);
    }

    return this._frameDictionary;
  }

  clone() {
    return new PerfectBoundBook(this.width, this.height, this.numberOfPages, this.pagingDirection, this.coverPaper, this.innerPagesPaper, this.coverCoating, this.innerPageCoating, this.hardCovered, this.threadSewn, this.spineStyle);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_frameDictionary", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));


/***/ }),

/***/ "../../../libs/data/src/lib/Product/Product.ts":
/*!*************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Product/Product.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
class Product {
  constructor() {
    this.__productSubType = void 0;
    this.productSubTypeChineseName = void 0;
  }

}

/***/ }),

/***/ "../../../libs/data/src/lib/Product/SaddleStichedBook.ts":
/*!***********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Product/SaddleStichedBook.ts ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SaddleStichedBook; });
/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ "../../../libs/data/src/lib/Product/Book.ts");
/* harmony import */ var _FrameDictionary_SaddleStitchedBookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../FrameDictionary/SaddleStitchedBookFrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/SaddleStitchedBookFrameDictionary.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
var _dec, _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let SaddleStichedBook = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Exclude"])(), (_class = (_temp = class SaddleStichedBook extends _Book__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(width, height, numberOfPages, pagingDirection, coverPaper, innerPagesPaper, coverCoating, innerPageCoating) {
    super(width, height, numberOfPages, pagingDirection, coverPaper, innerPagesPaper, coverCoating, innerPageCoating);
    this.__productSubType = "SaddleStichedBook";

    _initializerDefineProperty(this, "_frameDictionary", _descriptor, this);

    this.productSubTypeChineseName = '騎馬釘書';
  }

  get frameDictionary() {
    if (!this._frameDictionary) {
      this._frameDictionary = new _FrameDictionary_SaddleStitchedBookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"](this);
    }

    return this._frameDictionary;
  }

  clone() {
    return new SaddleStichedBook(this.width, this.height, this.numberOfPages, this.pagingDirection, this.coverPaper, this.innerPagesPaper, this.coverCoating, this.innerPageCoating);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_frameDictionary", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));


/***/ }),

/***/ "../../../libs/data/src/lib/Product/SingleSheet.ts":
/*!*****************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Product/SingleSheet.ts ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SingleSheet; });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "../../../libs/data/src/lib/Product/Product.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _Material_Coat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Material/Coat */ "../../../libs/data/src/lib/Material/Coat.ts");
/* harmony import */ var _Material_Paper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Material/Paper */ "../../../libs/data/src/lib/Material/Paper.ts");
/* harmony import */ var _FrameDictionary_SingleSheetFrameDictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FrameDictionary/SingleSheetFrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/SingleSheetFrameDictionary.ts");
var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






let SingleSheet = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Exclude"])(), _dec2 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_3__["default"]), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_2__["default"]), _dec4 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_1__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_2__["default"]), (_class = (_temp = class SingleSheet extends _Product__WEBPACK_IMPORTED_MODULE_0__["default"] {
  getInfo() {
    return ["單張", `寬 ${this.width} x 長 ${this.height}`, this.paper.name, `正面：${this.frontSideCoat ? this.frontSideCoat : "不上膜"}`, `背面：${this.backSideCoat ? this.backSideCoat : "不上膜"}`];
  }

  get frameDictionary() {
    if (!this._frameDictionary) this._frameDictionary = new _FrameDictionary_SingleSheetFrameDictionary__WEBPACK_IMPORTED_MODULE_4__["default"](this);
    return this._frameDictionary;
  }

  constructor(width, height, isDoubleSided, paper, frontSideCoat, backSideCoat) {
    super();
    this.width = width;
    this.height = height;
    this.isDoubleSided = isDoubleSided;
    this.productSubTypeChineseName = "單張";
    this.__productSubType = "SingleSheet";

    _initializerDefineProperty(this, "_frameDictionary", _descriptor, this);

    _initializerDefineProperty(this, "paper", _descriptor2, this);

    _initializerDefineProperty(this, "frontSideCoat", _descriptor3, this);

    _initializerDefineProperty(this, "backSideCoat", _descriptor4, this);

    this.paper = paper;
    this.frontSideCoat = frontSideCoat;
    this.backSideCoat = backSideCoat;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_frameDictionary", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "paper", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "frontSideCoat", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "backSideCoat", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));


/***/ }),

/***/ "../../../libs/data/src/lib/Review.ts":
/*!****************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review.ts ***!
  \****************************************************************************/
/*! exports provided: FramedPage, ReviewModel, ReviewItem, ReviewStatus, UploadFileStatus, UploadFilePageInfo, ReviewRegistrationInfo, ReviewReception */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Review_FramedPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Review/FramedPage */ "../../../libs/data/src/lib/Review/FramedPage.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FramedPage", function() { return _Review_FramedPage__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Review_ReviewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Review/ReviewModel */ "../../../libs/data/src/lib/Review/ReviewModel.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewModel", function() { return _Review_ReviewModel__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Review_ReviewItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Review/ReviewItem */ "../../../libs/data/src/lib/Review/ReviewItem.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewItem", function() { return _Review_ReviewItem__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Review_ReviewStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Review/ReviewStatus */ "../../../libs/data/src/lib/Review/ReviewStatus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewStatus", function() { return _Review_ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _Review_UploadFileStatus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Review/UploadFileStatus */ "../../../libs/data/src/lib/Review/UploadFileStatus.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatus", function() { return _Review_UploadFileStatus__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Review_UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Review/UploadFilePageInfo */ "../../../libs/data/src/lib/Review/UploadFilePageInfo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFilePageInfo", function() { return _Review_UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _Review_ReviewRegistrationInfo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Review/ReviewRegistrationInfo */ "../../../libs/data/src/lib/Review/ReviewRegistrationInfo.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewRegistrationInfo", function() { return _Review_ReviewRegistrationInfo__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _Review_ReviewReception__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Review/ReviewReception */ "../../../libs/data/src/lib/Review/ReviewReception.ts");
/* harmony import */ var _Review_ReviewReception__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Review_ReviewReception__WEBPACK_IMPORTED_MODULE_7__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return _Review_ReviewReception__WEBPACK_IMPORTED_MODULE_7___default.a; });










/***/ }),

/***/ "../../../libs/data/src/lib/Review/FramedPage.ts":
/*!***************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/FramedPage.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FramedPage; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _ReviewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewModel */ "../../../libs/data/src/lib/Review/ReviewModel.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! typeorm */ "../../../node_modules/typeorm/browser/index.js");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let FramedPage = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["PrimaryColumn"])('varchar', {
  length: 255
}), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])({
  nullable: true,
  type: 'datetime'
}), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('text'), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('text'), _dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'), _dec10 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec11 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["ManyToOne"])(() => _ReviewModel__WEBPACK_IMPORTED_MODULE_1__["default"], model => model.framedPages), _dec12 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('varchar', {
  length: 16
}), _dec13 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'), _dec14 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'), _dec15 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'), _dec16 = Object(typeorm__WEBPACK_IMPORTED_MODULE_2__["Column"])('int'), _dec(_class = (_class2 = (_temp = class FramedPage {
  // 資料庫要用的primary key
  constructor(frameId, frameName, reviewModel, frameIndexInModel, positionX = 0, positionY = 0, scaleX = 1, scaleY = 1, _rotationDegree = 0) {
    this.frameIndexInModel = frameIndexInModel;

    _initializerDefineProperty(this, "frameId", _descriptor, this);

    _initializerDefineProperty(this, "lastEditRequestDate", _descriptor2, this);

    _initializerDefineProperty(this, "sourceFileIndex", _descriptor3, this);

    _initializerDefineProperty(this, "sourcePageNumber", _descriptor4, this);

    _initializerDefineProperty(this, "resultingJpegUrl", _descriptor5, this);

    _initializerDefineProperty(this, "resultingPdfUrl", _descriptor6, this);

    _initializerDefineProperty(this, "_rotationDegree", _descriptor7, this);

    _initializerDefineProperty(this, "reviewModel", _descriptor8, this);

    _initializerDefineProperty(this, "frameName", _descriptor9, this);

    _initializerDefineProperty(this, "positionX", _descriptor10, this);

    _initializerDefineProperty(this, "positionY", _descriptor11, this);

    _initializerDefineProperty(this, "scaleX", _descriptor12, this);

    _initializerDefineProperty(this, "scaleY", _descriptor13, this);

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
    if (this.sourceFileIndex === undefined || this.sourcePageNumber === undefined) {
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
  } // 旋轉


  rotate(degree) {
    this.rotationDegree = degree;
  }

  get rotationDegree() {
    return this._rotationDegree;
  }

  set rotationDegree(degree) {
    this._rotationDegree = degree % 360;
  } // 縮放


  scale(x, y) {
    if (x > 0 && y > 0) {
      this.setScale(x, y);
    } else {//TODO: 錯誤? 就默默不讓他做? 提醒? 還是0沒有關係?
    }
  }

  setScale(x, y) {
    this.scaleX = x;
    this.scaleY = y;
  } // 移動位置


  moveTo(x, y) {
    // 檢查是否超出去，最多就是剛好超出去?防呆要在這裡嗎? 還是說寫前端的時候再防就好了
    this.setPosition(x, y);
  }

  setPosition(x, y) {
    this.positionX = x;
    this.positionY = y;
  }

  clone() {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["deserialize"])(FramedPage, Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["serialize"])(this));
  } // 需要的method : setFile  getPreviewImage getResultImage getResultFlie
  // cleanFile? 空白頁? 選擇了頁是不是可以改選擇用空白頁 


  calculateInitialPostionXandPostionY() {
    let positionX;
    let positionY;
    let sourcePage = this.getSourcePageInfo();
    let frame = this.getFrame();

    if (sourcePage && frame) {
      //有指定的sourceFile
      let sourceWidth = sourcePage.widthInMm;
      let sourceHeight = sourcePage.heightInMm;
      let frameWidth = frame.maxWidth;
      let frameHeight = frame.maxHeight;
      positionX = (frameWidth - sourceWidth) / 2;
      positionY = (frameHeight - sourceHeight) / 2;
    } else {
      positionX = 0;
      positionY = 0;
    }

    return {
      positionX: positionX,
      positionY: positionY
    };
  }

  hasResults() {
    if (this.resultingJpegUrl && this.resultingPdfUrl) return true;
    return false;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "frameId", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lastEditRequestDate", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sourceFileIndex", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "sourcePageNumber", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "resultingJpegUrl", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "resultingPdfUrl", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "_rotationDegree", [_dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "reviewModel", [_dec10, _dec11], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "frameName", [_dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "positionX", [_dec13], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "positionY", [_dec14], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "scaleX", [_dec15], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "scaleY", [_dec16], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);


/***/ }),

/***/ "../../../libs/data/src/lib/Review/ReviewItem.ts":
/*!***************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/ReviewItem.ts ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewItem; });
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Product */ "../../../libs/data/src/lib/Product.ts");
/* harmony import */ var _ReviewModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewModel */ "../../../libs/data/src/lib/Review/ReviewModel.ts");
/* harmony import */ var _ReviewStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewStatus */ "../../../libs/data/src/lib/Review/ReviewStatus.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _FramedPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./FramedPage */ "../../../libs/data/src/lib/Review/FramedPage.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! typeorm */ "../../../node_modules/typeorm/browser/index.js");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }







let ReviewItem = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["PrimaryColumn"])('varchar', {
  length: 255
}), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _ReviewModel__WEBPACK_IMPORTED_MODULE_1__["default"]), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["OneToMany"])(() => _ReviewModel__WEBPACK_IMPORTED_MODULE_1__["default"], model => model.reviewItem), _dec5 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _ReviewStatus__WEBPACK_IMPORTED_MODULE_2__["default"]), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["OneToOne"])(() => _ReviewStatus__WEBPACK_IMPORTED_MODULE_2__["default"], {
  cascade: true
}), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["JoinColumn"])(), _dec8 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _Product__WEBPACK_IMPORTED_MODULE_0__["Product"], {
  discriminator: _Product__WEBPACK_IMPORTED_MODULE_0__["PRODUCT_TYPE_DISCRIMINATOR"]
}), _dec9 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Exclude"])(), _dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["Column"])('text'), _dec11 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["AfterLoad"])(), _dec12 = Object(typeorm__WEBPACK_IMPORTED_MODULE_5__["BeforeInsert"])(), _dec(_class = (_class2 = (_temp = class ReviewItem {
  // 資料庫要用的primary key
  get product() {
    return this._product;
  }

  deserializeProduct() {
    if (this._serializedProduct === undefined) throw new Error("TypeORM should have set '__serializedProduct' but didn't.");
    this._product = Object(_Product__WEBPACK_IMPORTED_MODULE_0__["jsonToProduct"])(this._serializedProduct);
  }

  serializeProduct() {
    this._serializedProduct = Object(_Product__WEBPACK_IMPORTED_MODULE_0__["productToJson"])(this._product);
  }

  constructor(status, reviewId, product) {
    _initializerDefineProperty(this, "reviewId", _descriptor, this);

    _initializerDefineProperty(this, "_models", _descriptor2, this);

    _initializerDefineProperty(this, "status", _descriptor3, this);

    _initializerDefineProperty(this, "_product", _descriptor4, this);

    _initializerDefineProperty(this, "_serializedProduct", _descriptor5, this);

    this.status = status;
    this.reviewId = reviewId;
    this._product = product;
  }

  get numberOfModels() {
    return this.status.numberOfModels;
  }

  getFramedPage(modelIndex, frameIndex) {
    let model = this.models[modelIndex];
    if (!model) return undefined;
    return model.framedPages[frameIndex];
  }

  set models(models) {
    if (models.length !== this.numberOfModels) {
      throw new Error(`number of models inconsistent: should be ${this.numberOfModels}, but has ${models.length}`);
    }

    this._models = models;
  }

  get models() {
    if (!this._models) return this.createAndSetBlankModels();
    return this._models;
  }

  createAndSetBlankModels() {
    this.models = this.createBlankModels();
    return this.models;
  }

  createBlankModels() {
    let models = [];

    for (let modelNumber = 1; modelNumber <= this.numberOfModels; modelNumber++) {
      models.push(new _ReviewModel__WEBPACK_IMPORTED_MODULE_1__["default"](generateModelIdFromReviewId(this.reviewId, modelNumber), `第${modelNumber}款`, this));
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
    let item = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["deserialize"])(ReviewItem, text);
    item.status.uploadFileStatuses.forEach(fileStatus => {
      var _fileStatus$pageInfos;

      fileStatus.reviewStatus = item.status;
      (_fileStatus$pageInfos = fileStatus.pageInfos) === null || _fileStatus$pageInfos === void 0 ? void 0 : _fileStatus$pageInfos.forEach(pageInfo => {
        pageInfo.fileStatus = fileStatus;
      });
    });
    item.models.forEach(model => {
      model.reviewItem = item;
      model.framedPages.forEach(framedPage => {
        framedPage.reviewModel = model;
      });
    });
    return item;
  }

  static toJson(item) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["serialize"])(item);
  }

  setReviewModelImmutably(modelIndex, model) {
    let newReviewItem = new ReviewItem(this.status, this.reviewId, this._product);
    newReviewItem.status = this.status;
    let newReviewModels = [...this.models];
    newReviewModels[modelIndex] = model;
    newReviewModels.forEach(model => {
      model.reviewItem = newReviewItem;
    });
    newReviewItem.models = newReviewModels;
    return newReviewItem;
  }

  setFramedPageImmutably(modelIndex, frameIndex, framedPage) {
    let oldModel = this.models[modelIndex];
    if (!oldModel) throw new Error("modelIndex out of index");
    let newModel = oldModel.setFramedPageImmutably(frameIndex, framedPage);
    return this.setReviewModelImmutably(modelIndex, newModel);
  }

  swapFramedPagesImmutably(modelIndex, frameIndex1, frameIndex2) {
    let oldModel = this.models[modelIndex];
    if (!oldModel) throw new Error("modelIndex out of index");
    let newModel = oldModel.swapFramedPagesImmutably(frameIndex1, frameIndex2);
    return this.setReviewModelImmutably(modelIndex, newModel);
  }

  allExportFilesAreGenerated() {
    for (let model of this.models) {
      for (let framedPage of model.framedPages) {
        if (framedPage.hasResults()) return false;
      }
    }

    return true;
  }

  allUploadFilesAreConverted() {
    return this.status.allUploadFilesAreConverted();
  }

  shiftFramedPagesBetween(modelIndex, startIndex, endIndex) {
    let oldModel = this.models[modelIndex];
    if (!oldModel) throw new Error("modelIndex out of index");
    let newModel = oldModel.shiftFramedPagesBetween(startIndex, endIndex);
    return this.setReviewModelImmutably(modelIndex, newModel);
  }

  setSourcePageIndexImmutably(modelIndex, frameIndex, fileIndex, pageIndex) {
    let oldFramedPage = this.getFramedPage(modelIndex, frameIndex);
    if (!oldFramedPage) throw new Error("debug: selected frame is undefined???");
    let newFramedPage = new _FramedPage__WEBPACK_IMPORTED_MODULE_4__["default"](oldFramedPage.frameId, oldFramedPage.frameName, oldFramedPage.reviewModel, frameIndex);
    newFramedPage.sourceFileIndex = fileIndex;
    newFramedPage.sourcePageNumber = pageIndex;
    let newReviewItem = this.setFramedPageImmutably(modelIndex, frameIndex, newFramedPage);
    return newReviewItem;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "reviewId", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_models", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "status", [_dec5, _dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_product", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_serializedProduct", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "deserializeProduct", [_dec11], Object.getOwnPropertyDescriptor(_class2.prototype, "deserializeProduct"), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, "serializeProduct", [_dec12], Object.getOwnPropertyDescriptor(_class2.prototype, "serializeProduct"), _class2.prototype)), _class2)) || _class);


/***/ }),

/***/ "../../../libs/data/src/lib/Review/ReviewModel.ts":
/*!****************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/ReviewModel.ts ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewModel; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _FramedPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FramedPage */ "../../../libs/data/src/lib/Review/FramedPage.ts");
/* harmony import */ var _ReviewItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewItem */ "../../../libs/data/src/lib/Review/ReviewItem.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "../../../node_modules/typeorm/browser/index.js");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





let ReviewModel = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["PrimaryColumn"])('varchar', {
  length: 255
}), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])({
  nullable: true,
  type: 'datetime'
}), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('varchar', {
  length: 16
}), _dec6 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _FramedPage__WEBPACK_IMPORTED_MODULE_1__["default"]), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["OneToMany"])(() => _FramedPage__WEBPACK_IMPORTED_MODULE_1__["default"], framedPage => framedPage.reviewModel), _dec8 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec9 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["ManyToOne"])(() => _ReviewItem__WEBPACK_IMPORTED_MODULE_2__["default"], reviewItem => reviewItem.models), _dec(_class = (_class2 = (_temp = class ReviewModel {
  // 資料庫要用的primary key
  constructor(modelId, modelName, reviewItem) {
    _initializerDefineProperty(this, "modelId", _descriptor, this);

    _initializerDefineProperty(this, "lastMergeFilesRequestDate", _descriptor2, this);

    _initializerDefineProperty(this, "modelName", _descriptor3, this);

    _initializerDefineProperty(this, "_framedPages", _descriptor4, this);

    _initializerDefineProperty(this, "_frameDictionary", _descriptor5, this);

    _initializerDefineProperty(this, "reviewItem", _descriptor6, this);

    this.modelId = modelId;
    this.modelName = modelName;
    this.reviewItem = reviewItem; // this.createAndSetBlankFramedPages();
  }

  getFrame(name) {
    return this.frameDictionary.getFrame(name);
  }

  setFramedPageImmutably(index, framedPage) {
    let newReviewModel = new ReviewModel(this.modelId, this.modelName, this.reviewItem);
    let newFramedPages = new Array();
    newFramedPages = [...this.framedPages];
    newFramedPages[index] = framedPage;
    newFramedPages.forEach(framedPage => {
      framedPage.reviewModel = newReviewModel;
    });
    newReviewModel.framedPages = newFramedPages;
    return newReviewModel;
  }

  swapFramedPagesImmutably(index1, index2) {
    let newReviewModel = new ReviewModel(this.modelId, this.modelName, this.reviewItem);
    let tempPage;
    let tempName;
    let newFramedPages = new Array();
    newFramedPages = [...this.framedPages];
    tempPage = newFramedPages[index1].clone();
    newFramedPages[index1] = newFramedPages[index2].clone();
    newFramedPages[index2] = tempPage;
    newFramedPages[index1].frameIndexInModel = index1;
    newFramedPages[index2].frameIndexInModel = index2;
    tempName = newFramedPages[index1].frameName;
    newFramedPages[index1].frameName = newFramedPages[index2].frameName;
    newFramedPages[index2].frameName = tempName;
    newFramedPages.forEach(framedPage => {
      framedPage.reviewModel = newReviewModel;
    });
    newReviewModel.framedPages = newFramedPages;
    return newReviewModel;
  }

  shiftFramedPagesBetween(startIndex, endIndex) {
    if (startIndex === endIndex) return this;
    let direction = startIndex > endIndex ? "RIGHT" : "LEFT";
    let newReviewModel = new ReviewModel(this.modelId, this.modelName, this.reviewItem);
    let newFramedPages = [...this.framedPages];
    newFramedPages[endIndex] = this.framedPages[startIndex].clone();
    newFramedPages[endIndex].frameId = this.framedPages[endIndex].frameId;
    newFramedPages[endIndex].frameName = this.framedPages[endIndex].frameName;
    newFramedPages[endIndex].frameIndexInModel = endIndex;

    if (direction === "LEFT") {
      for (let i = startIndex + 1; i <= endIndex; i++) {
        newFramedPages[i - 1] = this.framedPages[i].clone();
        newFramedPages[i - 1].frameId = this.framedPages[i - 1].frameId;
        newFramedPages[i - 1].frameName = this.framedPages[i - 1].frameName;
        newFramedPages[i - 1].frameIndexInModel = i - 1;
      }
    } else {
      for (let i = startIndex - 1; i >= endIndex; i--) {
        newFramedPages[i + 1] = this.framedPages[i].clone();
        newFramedPages[i + 1].frameId = this.framedPages[i + 1].frameId;
        newFramedPages[i + 1].frameName = this.framedPages[i + 1].frameName;
        newFramedPages[i + 1].frameIndexInModel = i + 1;
      }
    }

    newFramedPages.forEach(framedPage => {
      framedPage.reviewModel = newReviewModel;
    });
    newReviewModel.framedPages = newFramedPages;
    return newReviewModel;
  }

  get framedPages() {
    if (!this._framedPages) return this.createAndSetBlankFramedPages();
    return this._framedPages;
  }

  get numberOfFramedPages() {
    return this.frameNames.length;
  }

  set framedPages(framedPages) {
    if (framedPages.length !== this.numberOfFramedPages) throw new Error("map size inconsistent");
    this._framedPages = framedPages;
  }

  createAndSetBlankFramedPages() {
    this.framedPages = this.createBlankFramedPages();
    return this.framedPages;
  }

  createBlankFramedPages() {
    return this.frameNames.map((name, frameIndex) => {
      let frameId = generateFrameIdFromModelId(this.modelId, frameIndex + 1);
      return new _FramedPage__WEBPACK_IMPORTED_MODULE_1__["default"](frameId, name, this, frameIndex);
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
    if (!this._frameDictionary) return this.getAndSetFrameDictionary();
    return this._frameDictionary;
  }

  getAndSetFrameDictionary() {
    this._frameDictionary = this.reviewItem.frameDictionary;
    return this._frameDictionary;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "modelId", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lastMergeFilesRequestDate", [_dec3, _dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "modelName", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_framedPages", [_dec6, _dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_frameDictionary", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "reviewItem", [_dec9, _dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);


/***/ }),

/***/ "../../../libs/data/src/lib/Review/ReviewReception.ts":
/*!********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/ReviewReception.ts ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/data/src/lib/Review/ReviewRegistrationInfo.ts":
/*!***************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/ReviewRegistrationInfo.ts ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewRegistrationInfo; });
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Product/Product */ "../../../libs/data/src/lib/Product/Product.ts");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Product */ "../../../libs/data/src/lib/Product.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
var _dec, _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let ReviewRegistrationInfo = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["Type"])(() => _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"], {
  discriminator: _Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_TYPE_DISCRIMINATOR"]
}), (_class = (_temp = class ReviewRegistrationInfo {
  constructor(numberOfModels, product) {
    this.numberOfModels = numberOfModels;

    _initializerDefineProperty(this, "product", _descriptor, this);

    this.product = product;
  }

  static toJson(info) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["serialize"])(info);
  }

  static fromJson(text) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["deserialize"])(ReviewRegistrationInfo, text);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "product", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));


/***/ }),

/***/ "../../../libs/data/src/lib/Review/ReviewStatus.ts":
/*!*****************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/ReviewStatus.ts ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewStatus; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gainhow-review/interfaces */ "../../../libs/interfaces/src/index.ts");
/* harmony import */ var _UploadFileStatus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadFileStatus */ "../../../libs/data/src/lib/Review/UploadFileStatus.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "../../../node_modules/typeorm/browser/index.js");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }





let ReviewStatus = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["PrimaryGeneratedColumn"])(), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec4 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _UploadFileStatus__WEBPACK_IMPORTED_MODULE_2__["default"]), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["OneToMany"])(() => _UploadFileStatus__WEBPACK_IMPORTED_MODULE_2__["default"], fileStatus => fileStatus.reviewStatus), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])({
  type: 'enum',
  enum: _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_1__["REVIEWING_PROGRESS"]
}), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('int'), _dec(_class = (_class2 = (_temp = class ReviewStatus {
  // 資料庫用的primary key
  // TODO: enum? string literal? serializable?
  constructor(numberOfModels) {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "uploadFileStatuses", _descriptor2, this);

    _initializerDefineProperty(this, "progress", _descriptor3, this);

    _initializerDefineProperty(this, "numberOfFiles", _descriptor4, this);

    _initializerDefineProperty(this, "numberOfModels", _descriptor5, this);

    this.numberOfModels = numberOfModels;
    this.progress = "REGISTERED";
  }

  toJson(status) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["serialize"])(status);
  }

  fromJson(text) {
    let reviewStatus = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["deserialize"])(ReviewStatus, text);
    reviewStatus.uploadFileStatuses.forEach(fileStatus => {
      var _fileStatus$pageInfos;

      fileStatus.reviewStatus = reviewStatus;
      (_fileStatus$pageInfos = fileStatus.pageInfos) === null || _fileStatus$pageInfos === void 0 ? void 0 : _fileStatus$pageInfos.forEach(pageInfo => {
        pageInfo.fileStatus = fileStatus;
      });
    });
    return reviewStatus;
  }

  allUploadFilesAreConverted() {
    if (this.uploadFileStatuses === undefined) throw new Error('TypeORM should have set uploadFileStatuses.');

    for (let fileStatus of this.uploadFileStatuses) {
      if (fileStatus.pageInfos === undefined) return false;
    }

    return true;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uploadFileStatuses", [_dec4, _dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "progress", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "numberOfFiles", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "numberOfModels", [_dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);


/***/ }),

/***/ "../../../libs/data/src/lib/Review/UploadFilePageInfo.ts":
/*!***********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/UploadFilePageInfo.ts ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadFilePageInfo; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! typeorm */ "../../../node_modules/typeorm/browser/index.js");
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Review */ "../../../libs/data/src/lib/Review.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }




let UploadFilePageInfo = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["PrimaryGeneratedColumn"])(), _dec3 = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('text'), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int'), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["Column"])('int'), _dec7 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec8 = Object(typeorm__WEBPACK_IMPORTED_MODULE_1__["ManyToOne"])(() => _Review__WEBPACK_IMPORTED_MODULE_2__["UploadFileStatus"], fileStatus => fileStatus.pageInfos), _dec(_class = (_class2 = (_temp = class UploadFilePageInfo {
  constructor(fileStatus, pdfAddress, jpegAddress, widthInMm, heightInMm) {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "pdfTokenInFileConvertingServer", _descriptor2, this);

    _initializerDefineProperty(this, "jpegUrl", _descriptor3, this);

    _initializerDefineProperty(this, "widthInMm", _descriptor4, this);

    _initializerDefineProperty(this, "heightInMm", _descriptor5, this);

    _initializerDefineProperty(this, "fileStatus", _descriptor6, this);

    this.fileStatus = fileStatus;
    this.pdfTokenInFileConvertingServer = pdfAddress;
    this.jpegUrl = jpegAddress;
    this.widthInMm = widthInMm;
    this.heightInMm = heightInMm;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pdfTokenInFileConvertingServer", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "jpegUrl", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "widthInMm", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "heightInMm", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "fileStatus", [_dec7, _dec8], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class);


/***/ }),

/***/ "../../../libs/data/src/lib/Review/UploadFileStatus.ts":
/*!*********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/UploadFileStatus.ts ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return UploadFileStatus; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gainhow-review/interfaces */ "../../../libs/interfaces/src/index.ts");
/* harmony import */ var _UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadFilePageInfo */ "../../../libs/data/src/lib/Review/UploadFilePageInfo.ts");
/* harmony import */ var typeorm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! typeorm */ "../../../node_modules/typeorm/browser/index.js");
/* harmony import */ var _Review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Review */ "../../../libs/data/src/lib/Review.ts");
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






let UploadFileStatus = (_dec = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Entity"])(), _dec2 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["PrimaryGeneratedColumn"])(), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec4 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('text'), _dec5 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('varchar', {
  length: 255,
  nullable: true
}), _dec6 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])({
  type: "enum",
  enum: _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_FILE_PROCESSING_STAGES"] // default: "UPLOADING"

}), _dec7 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])('text', {
  default: null
}), _dec8 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_2__["default"]), _dec9 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["OneToMany"])(() => _UploadFilePageInfo__WEBPACK_IMPORTED_MODULE_2__["default"], pageInfo => pageInfo.fileStatus), _dec10 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["Column"])({
  type: "enum",
  enum: _gainhow_review_interfaces__WEBPACK_IMPORTED_MODULE_1__["UPLOAD_FILE_PROCESSING_STAGES"],
  nullable: true
}), _dec11 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec12 = Object(typeorm__WEBPACK_IMPORTED_MODULE_3__["ManyToOne"])(() => _Review__WEBPACK_IMPORTED_MODULE_4__["ReviewStatus"], reviewStatus => reviewStatus.uploadFileStatuses), _dec13 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Expose"])(), _dec(_class = (_class2 = (_temp = class UploadFileStatus {
  // 資料庫用的primary key
  // 跟轉檔伺服器溝通用的id
  get numberOfPages() {
    var _this$pageInfos;

    return (_this$pageInfos = this.pageInfos) === null || _this$pageInfos === void 0 ? void 0 : _this$pageInfos.length;
  }

  constructor(reviewStatus, fileName) {
    _initializerDefineProperty(this, "id", _descriptor, this);

    _initializerDefineProperty(this, "fileName", _descriptor2, this);

    _initializerDefineProperty(this, "uploadToken", _descriptor3, this);

    _initializerDefineProperty(this, "currentStage", _descriptor4, this);

    _initializerDefineProperty(this, "fileAddress", _descriptor5, this);

    _initializerDefineProperty(this, "pageInfos", _descriptor6, this);

    _initializerDefineProperty(this, "errorStage", _descriptor7, this);

    _initializerDefineProperty(this, "reviewStatus", _descriptor8, this);

    this.reviewStatus = reviewStatus;
    this.fileName = fileName;
    this.currentStage = "UPLOADING";
  }

  get hasError() {
    if (this.errorStage) return true;
    return false;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "id", [_dec2, _dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "fileName", [_dec4], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "uploadToken", [_dec5], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "currentStage", [_dec6], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "fileAddress", [_dec7], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pageInfos", [_dec8, _dec9], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "errorStage", [_dec10], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "reviewStatus", [_dec11, _dec12], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class2.prototype, "hasError", [_dec13], Object.getOwnPropertyDescriptor(_class2.prototype, "hasError"), _class2.prototype)), _class2)) || _class);


/***/ }),

/***/ "../../../libs/features/src/index.ts":
/*!***************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/features/src/index.ts ***!
  \***************************************************************************/
/*! exports provided: Features, ReviewReception, useReviewItemBusyChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_features__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/features */ "../../../libs/features/src/lib/features.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return _lib_features__WEBPACK_IMPORTED_MODULE_0__["Features"]; });

/* harmony import */ var _lib_ReviewReception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ReviewReception */ "../../../libs/features/src/lib/ReviewReception.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return _lib_ReviewReception__WEBPACK_IMPORTED_MODULE_1__["ReviewReception"]; });

/* harmony import */ var _lib_useReviewItemBusyChecker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/useReviewItemBusyChecker */ "../../../libs/features/src/lib/useReviewItemBusyChecker.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useReviewItemBusyChecker", function() { return _lib_useReviewItemBusyChecker__WEBPACK_IMPORTED_MODULE_2__["useReviewItemBusyChecker"]; });





/***/ }),

/***/ "../../../libs/features/src/lib/ReviewReception.ts":
/*!*****************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/features/src/lib/ReviewReception.ts ***!
  \*****************************************************************************************/
/*! exports provided: ReviewReception */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return ReviewReception; });
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/data */ "../../../libs/data/src/index.ts");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "../../../node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var resumablejs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! resumablejs */ "../../../node_modules/resumablejs/resumable.js");
/* harmony import */ var resumablejs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(resumablejs__WEBPACK_IMPORTED_MODULE_3__);




class ReviewReception {
  constructor(requestUrl) {
    this.requestUrl = requestUrl;
  }

  async updateReviewModel(reviewModel) {
    let requestBody = {
      reviewModelInJson: Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["serialize"])(reviewModel)
    };
    let responseBody = (await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.requestUrl + '/updateReviewModel', requestBody)).data;
    if (responseBody.isSuccess === true) return;else throw responseBody.error;
  }

  async register(reviewRegistrationInfo) {
    let requestBody = {
      reviewRegistrationInfoJson: Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["serialize"])(reviewRegistrationInfo)
    };
    let responseBody = (await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.requestUrl + '/register', requestBody)).data;
    console.log(responseBody);

    if (responseBody.isSuccess === true) {
      return responseBody.reviewId;
    } else throw responseBody.error;
  }

  deregister(reviewId) {
    throw new Error('Method not implemented.');
  }

  uploadFile(reviewId, file) {
    return new Promise((resolve, reject) => {
      let uploader = new resumablejs__WEBPACK_IMPORTED_MODULE_3___default.a({
        uploadMethod: "POST",
        target: this.requestUrl + '/upload',
        query: {
          reviewId
        },
        method: 'multipart',
        testChunks: false,
        chunkSize: 2 * 1024 * 1024 * 1024,
        maxFileSize: 2 * 1024 * 1024 * 1024
      });
      uploader.on('fileAdded', () => {
        uploader.upload();
      });
      uploader.on('fileSuccess', (file, message) => {
        let responseBody = JSON.parse(message);

        if (responseBody.isSuccess === true) {
          let reviewStatus = Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["deserialize"])(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewStatus"], responseBody.reviewStatusInJson);
          resolve(reviewStatus);
        } else {
          reject(responseBody.error);
        }
      });
      uploader.on('error', (message, file) => {
        reject(message);
      });
      uploader.addFile(file);
    });
  }

  deleteFile(reviewId, fileId) {
    throw new Error('Method not implemented.');
  }

  async loadReviewStatus(reviewId) {
    let requestBody = {
      reviewId
    };
    let responseBody = (await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.requestUrl + '/loadReviewStatus', requestBody)).data;

    if (responseBody.isSuccess === true) {
      return Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["deserialize"])(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewStatus"], responseBody.reviewStatusInJson);
    } else throw responseBody.error;
  }

  async loadReviewItem(reviewId) {
    let requestBody = {
      reviewId
    };
    let responseBody = (await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.requestUrl + '/loadReviewItem', requestBody)).data;

    if (responseBody.isSuccess === true) {
      return Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["deserialize"])(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"], responseBody.reviewItemInJson);
    } else throw responseBody.error;
  }

  async generateFinalResults(reviewItem) {
    let requestBody = {
      reviewItemInJson: Object(class_transformer__WEBPACK_IMPORTED_MODULE_2__["serialize"])(reviewItem)
    };
    let responseBody = (await axios__WEBPACK_IMPORTED_MODULE_1___default.a.post(this.requestUrl + '/generateFinalResults', requestBody)).data;

    if (responseBody.isSuccess === true) {
      return;
    } else throw responseBody.error;
  }

}

/***/ }),

/***/ "../../../libs/features/src/lib/features.module.css":
/*!******************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/features/src/lib/features.module.css ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./features.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/features/src/lib/features.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/features/src/lib/features.tsx":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/features/src/lib/features.tsx ***!
  \***********************************************************************************/
/*! exports provided: Features, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Features", function() { return Features; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _features_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features.module.css */ "../../../libs/features/src/lib/features.module.css");
/* harmony import */ var _features_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_module_css__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line */

function Features(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to features!"));
}
/* harmony default export */ __webpack_exports__["default"] = (Features);

/***/ }),

/***/ "../../../libs/features/src/lib/useReviewItemBusyChecker.ts":
/*!**************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/features/src/lib/useReviewItemBusyChecker.ts ***!
  \**************************************************************************************************/
/*! exports provided: useReviewItemBusyChecker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useReviewItemBusyChecker", function() { return useReviewItemBusyChecker; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ReviewReception__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReviewReception */ "../../../libs/features/src/lib/ReviewReception.ts");


function useReviewItemBusyChecker(reviewId, reviewItem, updateReviewItem, stop, shouldStop, isBusy) {
  let reviewReception = new _ReviewReception__WEBPACK_IMPORTED_MODULE_1__["ReviewReception"]('/api');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (!isBusy) return;
    reviewReception.loadReviewItem(reviewId).then(reviewItem => {
      if (shouldStop(reviewItem)) {
        stop(reviewItem);
      } else {
        setTimeout(() => updateReviewItem(reviewItem), 2000);
      }
    });
  }, [reviewItem, isBusy]);
}

/***/ }),

/***/ "../../../libs/interfaces/src/index.ts":
/*!*****************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/interfaces/src/index.ts ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_pricing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/pricing */ "../../../libs/interfaces/src/lib/pricing.ts");
/* harmony import */ var _lib_pricing__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_lib_pricing__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_pricing__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_pricing__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/api */ "../../../libs/interfaces/src/lib/api.ts");
/* harmony import */ var _lib_api__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lib_api__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_api__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_api__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_printer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/printer */ "../../../libs/interfaces/src/lib/printer.ts");
/* harmony import */ var _lib_printer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lib_printer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _lib_printer__WEBPACK_IMPORTED_MODULE_2__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _lib_printer__WEBPACK_IMPORTED_MODULE_2__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _lib_product__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/product */ "../../../libs/interfaces/src/lib/product.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOK_SUBTYPE_NAMES", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_3__["BOOK_SUBTYPE_NAMES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BOOK_PAGING_DIRECTIONS", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_3__["BOOK_PAGING_DIRECTIONS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BINDING_OPTIONS", function() { return _lib_product__WEBPACK_IMPORTED_MODULE_3__["BINDING_OPTIONS"]; });

/* harmony import */ var _lib_review__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/review */ "../../../libs/interfaces/src/lib/review.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REVIEWING_PROGRESS", function() { return _lib_review__WEBPACK_IMPORTED_MODULE_4__["REVIEWING_PROGRESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FILE_PROCESSING_STAGES", function() { return _lib_review__WEBPACK_IMPORTED_MODULE_4__["UPLOAD_FILE_PROCESSING_STAGES"]; });

/* harmony import */ var _lib_transaction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/transaction */ "../../../libs/interfaces/src/lib/transaction.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FailureType", function() { return _lib_transaction__WEBPACK_IMPORTED_MODULE_5__["FailureType"]; });








/***/ }),

/***/ "../../../libs/interfaces/src/lib/api.ts":
/*!*******************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/interfaces/src/lib/api.ts ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/interfaces/src/lib/pricing.ts":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/interfaces/src/lib/pricing.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "../../../libs/interfaces/src/lib/printer.ts":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/interfaces/src/lib/printer.ts ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** ============ 集單＆組版 ============ */
// 數位印刷機
; // 紙材限制

;

/***/ }),

/***/ "../../../libs/interfaces/src/lib/product.ts":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/interfaces/src/lib/product.ts ***!
  \***********************************************************************************/
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
*/
// 總共有的所有書籍類別: 騎馬釘、蝴蝶書、膠裝書
const BOOK_SUBTYPE_NAMES = ["SaddleStichedBook", // 騎馬釘
"PerfectBoundBook" // 膠裝（平裝（純膠裝）／穿線膠裝／方背精裝／圓背精裝／穿線方背精裝／穿線圓背精裝）
];
// 翻頁方式: 左翻與右翻
const BOOK_PAGING_DIRECTIONS = ["LEFT_TO_RIGHT", // 直式由左往右翻
"RIGHT_TO_LEFT", // 直式由右往左翻
"BOTTOM_TO_TOP" // 橫式
];
// 裝訂方式
const BINDING_OPTIONS = ["SaddleStichBinding", "PerfectBinding"];

/***/ }),

/***/ "../../../libs/interfaces/src/lib/review.ts":
/*!**********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/interfaces/src/lib/review.ts ***!
  \**********************************************************************************/
/*! exports provided: REVIEWING_PROGRESS, UPLOAD_FILE_PROCESSING_STAGES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REVIEWING_PROGRESS", function() { return REVIEWING_PROGRESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPLOAD_FILE_PROCESSING_STAGES", function() { return UPLOAD_FILE_PROCESSING_STAGES; });
/** ============ 審稿 ============ */
// 審稿資訊物件
// 審稿狀態
// 登記審稿資訊

/**
 * @enum
 */
// 審稿狀態
const REVIEWING_PROGRESS = ["REGISTERED", // '已登記審稿',
// "UPLOADING",                // '已經開始上傳檔案，但還有檔案沒上傳完畢',
// "GENERATING_PREVIEW_PAGES", // '所有檔案都上傳完畢，但還有檔案預覽圖在生成中',
// "WAITING_PRINTABLE_REVIEW", // '預覽圖都生成完畢，但使用者還在確認排版',
"REVIEWED", // "GENERATING_PRINTABLE_REVIEWED_PAGES", // '使用者已確認排版，但還有印刷檔在生成中',
// "WAITING_FOR_USER_CHECK", // '印刷檔都生成完畢，但使用者還沒確認最終結果',
"FINISHED" // '使用者審稿完畢'
];

/**
 * @enum
 */
// 上傳檔案的狀態
const UPLOAD_FILE_PROCESSING_STAGES = ["UPLOADING", // 已登記上傳檔案，但檔案還沒上傳完
"GENERATING_PRINTABLE_PAGES", // 已收到上傳檔，但正在生成每一頁單獨的PDF和JPEG
"FINISHED" // 處理完畢
];

/***/ }),

/***/ "../../../libs/interfaces/src/lib/transaction.ts":
/*!***************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/interfaces/src/lib/transaction.ts ***!
  \***************************************************************************************/
/*! exports provided: FailureType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FailureType", function() { return FailureType; });
/** ============ 通訊錯誤 ============ */

/** ============ 錯誤類型 ============ */
let FailureType;
/** ============ 通訊格式 ============ */

(function (FailureType) {
  FailureType["CONNECTION_FAILURE"] = "\u9023\u7DDA\u932F\u8AA4";
  FailureType["PRECONDITION_FAILURE"] = "\u524D\u7F6E\u689D\u4EF6\u4E0D\u7B26";
  FailureType["POSTCONDITION_FAILURE"] = "\u5F8C\u7F6E\u689D\u4EF6\u7121\u6CD5\u5B8C\u6210";
  FailureType["UNDEFINED_FAILURE"] = "\u672A\u80FD\u6B78\u985E\u70BA\u4EE5\u4E0A\u4E09\u7A2E";
})(FailureType || (FailureType = {}));

/***/ }),

/***/ "../../../libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.module.css":
/*!**************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.module.css ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./DrogMiddleLine.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.tsx":
/*!*******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.tsx ***!
  \*******************************************************************************************************/
/*! exports provided: DrogMiddleLine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrogMiddleLine", function() { return DrogMiddleLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _DrogMiddleLine_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DrogMiddleLine.module.css */ "../../../libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.module.css");
/* harmony import */ var _DrogMiddleLine_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_DrogMiddleLine_module_css__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line */

function DrogMiddleLine(props) {
  let [isDraggedOver, setIsDraggedOver] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "notSortable",
    style: {
      display: "inline-block",
      width: props.width || 5,
      height: props.height || 125,
      // backgroundColor: (isDraggedOver)? '#4ba3ff77' : 'inherit',
      borderRadius: '1px' // boxShadow: (isDraggedOver)? '0 0 1px 1px #4ba3ff77' : 'none'

    },
    onDragEnter: () => setIsDraggedOver(true),
    onDragLeave: () => setIsDraggedOver(false)
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (DrogMiddleLine);

/***/ }),

/***/ "../../../libs/ui/src/Canvas/frame-line/FrameLine.module.css":
/*!***************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/frame-line/FrameLine.module.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./FrameLine.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/Canvas/frame-line/FrameLine.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/Canvas/frame-line/FrameLine.tsx":
/*!********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/frame-line/FrameLine.tsx ***!
  \********************************************************************************************/
/*! exports provided: FrameLine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameLine", function() { return FrameLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FrameLine_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameLine.module.css */ "../../../libs/ui/src/Canvas/frame-line/FrameLine.module.css");
/* harmony import */ var _FrameLine_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_FrameLine_module_css__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line */

function FrameLine(props) {
  const borderStyle = {
    width: '100%',
    height: '100%',
    clipPath: props.clipPath,
    background: props.borderColor,
    position: 'absolute',
    zIndex: props.zIndex
  };
  const innerStyle = {
    top: `${props.borderWidth}px`,
    left: `${props.borderWidth}px`,
    width: `calc(100% - ${props.borderWidth * 2}px)`,
    height: `calc(100% - ${props.borderWidth * 2}px)`,
    position: 'absolute',
    background: 'white',
    clipPath: props.clipPath
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: borderStyle,
    draggable: "false"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: innerStyle
  }, props.children));
}
;
/* harmony default export */ __webpack_exports__["default"] = (FrameLine);

/***/ }),

/***/ "../../../libs/ui/src/Canvas/frame-page-component/FramePageComponent.module.css":
/*!**********************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/frame-page-component/FramePageComponent.module.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./FramePageComponent.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/Canvas/frame-page-component/FramePageComponent.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/Canvas/frame-page-component/FramePageComponent.tsx":
/*!***************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/frame-page-component/FramePageComponent.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: FramePageComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramePageComponent", function() { return FramePageComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame-line/FrameLine */ "../../../libs/ui/src/Canvas/frame-line/FrameLine.tsx");
/* harmony import */ var _FramePageComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FramePageComponent.module.css */ "../../../libs/ui/src/Canvas/frame-page-component/FramePageComponent.module.css");
/* harmony import */ var _FramePageComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FramePageComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* eslint-disable-next-line */

function FramePageComponent(props) {
  let imageScale = props.mmToPxScale;
  let frame = props.framePage.getFrame();
  const cutLineBorderWidth = 2;
  const cutLineZIndex = 20;
  const bleedingAreaBorderWidth = 1;
  const bleedingAreaZIndex = 10;
  const marksZIndex = 30;
  const imageTransformFrameZIndex = 40;
  let imageTransformFrameJSX = null;
  let orangeImageJSX = null;
  let cropedImageJSX = null;
  let imageAddress;

  if (frame) {
    let sourcePageInfo = props.framePage.getSourcePageInfo();

    if (sourcePageInfo) {
      imageAddress = sourcePageInfo.jpegUrl;
      let imageWidthInPx = `calc(${imageScale} * ${sourcePageInfo.widthInMm})`;
      let imageHeightInPx = `calc(${imageScale} * ${sourcePageInfo.heightInMm})`;
      let imagePostionXInPx = `calc(${imageScale} * calc(${props.framePage.positionX} ))`;
      let imagePostionYInPx = `calc(${imageScale} * calc(${props.framePage.positionY}))`;
      const imageStyle = {
        width: `calc(${imageWidthInPx})`,
        height: `calc(${imageHeightInPx})`,
        top: `${imagePostionYInPx}`,
        left: `${imagePostionXInPx}`,
        transform: `
          scale(${props.framePage.scaleX}, ${props.framePage.scaleY})  
          translate(50%, 50%)
          rotate(${props.framePage.rotationDegree}deg) 
          translate(-50%, -50%)
          `,
        //先依據左上角作為原點放大
        //移動圖片中央到transformOrigin
        //旋轉
        //移動回原位
        transformOrigin: '0 0',
        position: 'absolute'
      };

      const originalImageStyle = _objectSpread(_objectSpread({}, imageStyle), {}, {
        opacity: 0.5
      });

      const clipedImageStyle = _objectSpread(_objectSpread({}, imageStyle), {}, {
        top: `calc(${imagePostionYInPx} - ${bleedingAreaBorderWidth}px)`,
        left: `calc(${imagePostionXInPx}  - ${bleedingAreaBorderWidth}px)`,
        opacity: 1
      });

      const imageTransformFrameLineWidth = 6;
      const imageTransformFrameStyle = {
        width: `calc(${imageWidthInPx} * ${props.framePage.scaleX} )`,
        height: `calc(${imageHeightInPx}  * ${props.framePage.scaleY} )`,
        top: `calc(${imagePostionYInPx}  - ${imageTransformFrameLineWidth}px + ${bleedingAreaBorderWidth}px )`,
        left: `calc(${imagePostionXInPx} - ${imageTransformFrameLineWidth}px + ${bleedingAreaBorderWidth}px )`,
        transform: `rotate(${props.framePage.rotationDegree}deg) `,
        transformOrigin: '50% 50%',
        border: `${imageTransformFrameLineWidth}px solid #1581FF`,
        position: 'absolute',
        zIndex: imageTransformFrameZIndex,
        cursor: 'move'
      };
      const imageTransformFrameIconOffset = -imageTransformFrameLineWidth * 2;
      const imageTransformFrameIconMiddle = `calc(50% + calc(${imageTransformFrameIconOffset}px))`;
      const imageTransformFrameIconStyle = {
        width: `18px`,
        height: '18px',
        border: '1px soild #1581FF',
        background: '#1581FF',
        position: 'absolute'
      };
      cropedImageJSX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        key: 0,
        src: imageAddress,
        style: clipedImageStyle,
        onClick: e => props.onImageClick(e)
      });
      orangeImageJSX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        key: 0,
        src: imageAddress,
        style: originalImageStyle
      });
      let imageTransformFrameIcons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        key: 0
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 左上
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          top: imageTransformFrameIconOffset,
          left: imageTransformFrameIconOffset,
          cursor: 'nwse-resize'
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 右上
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          top: imageTransformFrameIconOffset,
          right: imageTransformFrameIconOffset,
          cursor: 'nesw-resize'
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 右下
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          bottom: imageTransformFrameIconOffset,
          right: imageTransformFrameIconOffset,
          cursor: 'nwse-resize'
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 左下
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          bottom: imageTransformFrameIconOffset,
          left: imageTransformFrameIconOffset,
          cursor: 'nesw-resize'
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 上
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          top: imageTransformFrameIconOffset,
          left: imageTransformFrameIconMiddle,
          cursor: 'ns-resize'
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 下
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          bottom: imageTransformFrameIconOffset,
          left: imageTransformFrameIconMiddle,
          cursor: 'ns-resize'
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 右
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          top: imageTransformFrameIconMiddle,
          left: imageTransformFrameIconOffset,
          cursor: 'ew-resize'
        })
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        // 右
        style: _objectSpread(_objectSpread({}, imageTransformFrameIconStyle), {}, {
          top: imageTransformFrameIconMiddle,
          right: imageTransformFrameIconOffset,
          cursor: 'ew-resize'
        })
      }));
      imageTransformFrameJSX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: imageTransformFrameStyle,
        key: 0
      }, imageTransformFrameIcons);
    }

    let shapeArea = frame.shape;
    let bleedingArea = frame.bleedingArea;
    let marks = frame.marks.map((mark, index) => {
      let svgDataUrl = `data:image/svg+xml;utf8,${mark.svgString.trim()}`;
      let style = {
        position: 'absolute',
        left: `${-mark.positionX}%`,
        top: `${-mark.positionY}%`,
        width: `calc(100% + calc(${mark.positionX * 2}%))`,
        height: `calc(100% + calc(${mark.positionY * 2}%))`,
        zIndex: marksZIndex
      };
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        key: index,
        src: svgDataUrl,
        style: style,
        draggable: "false"
      });
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: e => {
        if (imageAddress) {
          props.onImageClick(e);
        }
      }
    }, props.isEditing ? [imageTransformFrameJSX] : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_1__["FrameLine"], {
      borderWidth: cutLineBorderWidth,
      clipPath: shapeArea,
      borderColor: '#E2007F',
      zIndex: cutLineZIndex
    }, [cropedImageJSX]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_1__["FrameLine"], {
      borderWidth: bleedingAreaBorderWidth,
      clipPath: props.isEditing ? '' : bleedingArea,
      borderColor: '#333333',
      zIndex: bleedingAreaZIndex
    }, [orangeImageJSX]), marks);
  } else {
    let style;
    let blankFramePageStyle = {
      backgroundColor: 'white',
      width: '100%',
      height: '100%'
    };
    let noneFramePageStyle = {};

    if (props.framePage.frameName === '空白頁') {
      style = noneFramePageStyle;
    } else {
      style = blankFramePageStyle;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: style
    });
  }
}
;
/* harmony default export */ __webpack_exports__["default"] = (FramePageComponent);

/***/ }),

/***/ "../../../libs/ui/src/ExportList/ExportList.module.css":
/*!*********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/ExportList.module.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ExportList.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ExportList/ExportList.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/ExportList/ExportList.tsx":
/*!**************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/ExportList.tsx ***!
  \**************************************************************************************/
/*! exports provided: ExportList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportList", function() { return ExportList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exporting_model_ExportingModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exporting-model/ExportingModel */ "../../../libs/ui/src/ExportList/exporting-model/ExportingModel.tsx");
/* harmony import */ var _ExportList_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExportList.module.css */ "../../../libs/ui/src/ExportList/ExportList.module.css");
/* harmony import */ var _ExportList_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ExportList_module_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* eslint-disable-next-line */

function ExportList(props) {
  let style = _objectSpread({
    backgroundColor: "#f7f7f7",
    border: '2px solid #E4E4E4',
    borderRight: 'none',
    paddingTop: 5,
    paddingBottom: 16,
    overflow: "auto",
    whiteSpace: "nowrap"
  }, props.style);

  let modelsStyle = {
    marginLeft: 37
  };
  let models = props.reviewItem.models;
  let modelStyle = {
    display: "inline-block"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: modelsStyle
  }, models.map((model, modelIndex) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: modelIndex,
      style: modelStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_exporting_model_ExportingModel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onFrameSelect: frameIndex => props.onFrameSelect(modelIndex, frameIndex),
      reviewModel: model,
      selectedFrameIndex: props.selectedModelIndex === modelIndex ? props.selectedFrameIndex : undefined
    }));
  })));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ExportList);

/***/ }),

/***/ "../../../libs/ui/src/ExportList/exporting-frame/CoverBlankFramePage.tsx":
/*!***************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/exporting-frame/CoverBlankFramePage.tsx ***!
  \***************************************************************************************************************/
/*! exports provided: CoverBlankFramePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoverBlankFramePage", function() { return CoverBlankFramePage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function CoverBlankFramePage(props) {
  let frameHeightInPx = props.frameHeightInPx;
  let frameWidthInPx = props.frameWidthInPx;

  let style = _objectSpread(_objectSpread({}, props.style), {}, {
    display: 'inline-block',
    padding: props.horizontalPadding ? props.horizontalPadding : 3
  });

  let cropStyle = {
    overflow: "hidden",
    height: frameHeightInPx,
    width: frameWidthInPx,
    border: "solid 1px #707070",
    backgroundColor: "white"
  };
  let pageIndexStyle = {
    width: frameWidthInPx,
    color: "black",
    fontSize: 14,
    fontFamily: "arial",
    textAlign: "center"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    className: "notSortable"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: cropStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: pageIndexStyle
  }, props.frameName));
}

/***/ }),

/***/ "../../../libs/ui/src/ExportList/exporting-frame/ExportingFrame.module.css":
/*!*****************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/exporting-frame/ExportingFrame.module.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ExportingFrame.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ExportList/exporting-frame/ExportingFrame.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/ExportList/exporting-frame/ExportingFrame.tsx":
/*!**********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/exporting-frame/ExportingFrame.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: ExportingFrame, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportingFrame", function() { return ExportingFrame; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ExportingFrame_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ExportingFrame.module.css */ "../../../libs/ui/src/ExportList/exporting-frame/ExportingFrame.module.css");
/* harmony import */ var _ExportingFrame_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ExportingFrame_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ExportingFrame(props) {
  let frame = props.framedPage.getFrame();
  let frameHeightInMm = frame.maxHeight;
  let frameWidthInMm = frame.maxWidth;
  let ratio = frameWidthInMm / frameHeightInMm;
  let frameHeightInPx = props.height || 96;
  let frameWidthInPx = frameHeightInPx * ratio;
  let horizontalPadding = 9;
  if (props.horizontalPadding !== undefined) horizontalPadding = props.horizontalPadding;
  if (props.isSelected) horizontalPadding = horizontalPadding - 2;
  let style = {
    paddingLeft: horizontalPadding,
    paddingRight: horizontalPadding,
    marginRight: props.isSelected ? -4 : 0,
    paddingTop: props.isSelected ? 5 : 9,
    paddingBottom: 0,
    display: "inline-block",
    backgroundColor: "inherit"
  };
  let cropStyle = {
    overflow: "hidden",
    height: frameHeightInPx,
    width: frameWidthInPx,
    border: props.isSelected ? "solid 3px #1581ff" : "solid 1px #707070",
    backgroundColor: "white" // boxShadow: "0 0 2px 2px Gainsboro"

  };
  let positionXInMm = props.framedPage.positionX;
  let positionYInMm = props.framedPage.positionY;
  let rotationDegree = props.framedPage.rotationDegree;
  let sourcePage = props.framedPage.getSourcePageInfo();
  let imageStyle;
  let imageJSX;

  if (sourcePage) {
    imageStyle = {
      marginLeft: frameWidthInPx / frameWidthInMm * positionXInMm,
      marginTop: frameHeightInPx / frameHeightInMm * positionYInMm,
      width: frameWidthInPx / frameWidthInMm * sourcePage.widthInMm,
      height: frameWidthInPx / frameWidthInMm * sourcePage.heightInMm,
      transform: `rotate(${rotationDegree}deg)`
    };
    imageJSX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: sourcePage.jpegUrl,
      style: imageStyle
    });
  } else {
    imageStyle = {
      width: frameHeightInPx,
      height: frameWidthInPx,
      backgroundColor: 'white'
    };
    imageJSX = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: imageStyle
    });
  }

  let pageIndexStyle = {
    width: frameWidthInPx + (props.isSelected ? 6 : 0),
    color: props.isSelected ? "#1581ff" : "#333333",
    fontSize: 14,
    fontFamily: "arial",
    textAlign: "center"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: 'xdragable',
    style: style,
    onClick: props.onSelect,
    draggable: props.isDroggable
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: cropStyle,
    onDragEnter: props.onDragEnter,
    draggable: true,
    onDragStart: props.onDragStart
  }, imageJSX), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: pageIndexStyle
  }, props.framedPage.frameName));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ExportingFrame);

/***/ }),

/***/ "../../../libs/ui/src/ExportList/exporting-model/ExportingModel.module.css":
/*!*****************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/exporting-model/ExportingModel.module.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ExportingModel.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ExportList/exporting-model/ExportingModel.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/ExportList/exporting-model/ExportingModel.tsx":
/*!**********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/exporting-model/ExportingModel.tsx ***!
  \**********************************************************************************************************/
/*! exports provided: ExportingModel, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportingModel", function() { return ExportingModel; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _exporting_frame_ExportingFrame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../exporting-frame/ExportingFrame */ "../../../libs/ui/src/ExportList/exporting-frame/ExportingFrame.tsx");
/* harmony import */ var _ExportingModel_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExportingModel.module.css */ "../../../libs/ui/src/ExportList/exporting-model/ExportingModel.module.css");
/* harmony import */ var _ExportingModel_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ExportingModel_module_css__WEBPACK_IMPORTED_MODULE_2__);



/* eslint-disable-next-line */

function ExportingModel(props) {
  let style = {
    padding: 8,
    paddingBottom: 0
  };
  let modelIndexStyle = {
    fontSize: 16,
    fontFamily: "Arial",
    fontWeight: "bold"
  };
  let framedPages = props.reviewModel.framedPages;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: modelIndexStyle
  }, props.reviewModel.modelName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: "white"
    }
  }, framedPages.map((framedPage, frameIndex) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_exporting_frame_ExportingFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: frameIndex,
      onSelect: () => props.onFrameSelect(frameIndex),
      framedPage: framedPage,
      isSelected: props.selectedFrameIndex === frameIndex
    });
  })));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ExportingModel);

/***/ }),

/***/ "../../../libs/ui/src/Icon/CaretDownIcon.svg":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Icon/CaretDownIcon.svg ***!
  \***********************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Polygon_2",
  "data-name": "Polygon 2",
  d: "M7.253.841a1,1,0,0,1,1.495,0l5.773,6.495A1,1,0,0,1,13.773,9H2.227a1,1,0,0,1-.747-1.664Z",
  transform: "translate(16 9) rotate(180)",
  fill: "#333"
});

function SvgCaretDownIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 9,
    viewBox: "0 0 16 9",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgCaretDownIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSI5IiB2aWV3Qm94PSIwIDAgMTYgOSI+CiAgPHBhdGggaWQ9IlBvbHlnb25fMiIgZGF0YS1uYW1lPSJQb2x5Z29uIDIiIGQ9Ik03LjI1My44NDFhMSwxLDAsMCwxLDEuNDk1LDBsNS43NzMsNi40OTVBMSwxLDAsMCwxLDEzLjc3Myw5SDIuMjI3YTEsMSwwLDAsMS0uNzQ3LTEuNjY0WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYgOSkgcm90YXRlKDE4MCkiIGZpbGw9IiMzMzMiLz4KPC9zdmc+Cg==");


/***/ }),

/***/ "../../../libs/ui/src/Icon/CaretRightIcon.svg":
/*!************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Icon/CaretRightIcon.svg ***!
  \************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Polygon_2",
  "data-name": "Polygon 2",
  d: "M7.253.841a1,1,0,0,1,1.495,0l5.773,6.495A1,1,0,0,1,13.773,9H2.227a1,1,0,0,1-.747-1.664Z",
  fill: "#333"
});

function SvgCaretRightIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16,
    height: 16,
    viewBox: "0 0 16 16",
    transform: "rotate(90)",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgCaretRightIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDE2IDE2IiAKdHJhbnNmb3JtPSJyb3RhdGUoOTApIgoJPgogIDxwYXRoIGlkPSJQb2x5Z29uXzIiIGRhdGEtbmFtZT0iUG9seWdvbiAyIiBkPSJNNy4yNTMuODQxYTEsMSwwLDAsMSwxLjQ5NSwwbDUuNzczLDYuNDk1QTEsMSwwLDAsMSwxMy43NzMsOUgyLjIyN2ExLDEsMCwwLDEtLjc0Ny0xLjY2NFoiIGZpbGw9IiMzMzMiCgogIAkvPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/Icon/DoubleLeftIcon.svg":
/*!************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Icon/DoubleLeftIcon.svg ***!
  \************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42907",
  "data-name": "Group 42907",
  transform: "translate(1641.425 65.544) rotate(180)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35955",
  "data-name": "Path 35955",
  d: "M13367.588-704.393l4.846,5.066,4.762-5.066",
  transform: "translate(2335.252 13432.425) rotate(-90)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35956",
  "data-name": "Path 35956",
  d: "M13367.588-704.393l4.846,5.066,4.762-5.066",
  transform: "translate(2340.252 13432.425) rotate(-90)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}));

function SvgDoubleLeftIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 11.273,
    height: 11.021,
    viewBox: "0 0 11.273 11.021",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDoubleLeftIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4yNzMiIGhlaWdodD0iMTEuMDIxIiB2aWV3Qm94PSIwIDAgMTEuMjczIDExLjAyMSI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTA3IiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTA3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNjQxLjQyNSA2NS41NDQpIHJvdGF0ZSgxODApIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1OTU1IiBkYXRhLW5hbWU9IlBhdGggMzU5NTUiIGQ9Ik0xMzM2Ny41ODgtNzA0LjM5M2w0Ljg0Niw1LjA2Niw0Ljc2Mi01LjA2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjMzNS4yNTIgMTM0MzIuNDI1KSByb3RhdGUoLTkwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMzU5NTYiIGRhdGEtbmFtZT0iUGF0aCAzNTk1NiIgZD0iTTEzMzY3LjU4OC03MDQuMzkzbDQuODQ2LDUuMDY2LDQuNzYyLTUuMDY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzQwLjI1MiAxMzQzMi40MjUpIHJvdGF0ZSgtOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/Icon/DoubleRightIcon.svg":
/*!*************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Icon/DoubleRightIcon.svg ***!
  \*************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42859",
  "data-name": "Group 42859",
  transform: "translate(-1630.152 -54.522)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35955",
  "data-name": "Path 35955",
  d: "M13367.588-704.393l4.846,5.066,4.762-5.066",
  transform: "translate(2335.252 13432.425) rotate(-90)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35956",
  "data-name": "Path 35956",
  d: "M13367.588-704.393l4.846,5.066,4.762-5.066",
  transform: "translate(2340.252 13432.425) rotate(-90)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}));

function SvgDoubleRightIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 11.273,
    height: 11.021,
    viewBox: "0 0 11.273 11.021",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDoubleRightIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMS4yNzMiIGhlaWdodD0iMTEuMDIxIiB2aWV3Qm94PSIwIDAgMTEuMjczIDExLjAyMSI+CiAgPGcgaWQ9Ikdyb3VwXzQyODU5IiBkYXRhLW5hbWU9Ikdyb3VwIDQyODU5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTYzMC4xNTIgLTU0LjUyMikiPgogICAgPHBhdGggaWQ9IlBhdGhfMzU5NTUiIGRhdGEtbmFtZT0iUGF0aCAzNTk1NSIgZD0iTTEzMzY3LjU4OC03MDQuMzkzbDQuODQ2LDUuMDY2LDQuNzYyLTUuMDY2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgyMzM1LjI1MiAxMzQzMi40MjUpIHJvdGF0ZSgtOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTk1NiIgZGF0YS1uYW1lPSJQYXRoIDM1OTU2IiBkPSJNMTMzNjcuNTg4LTcwNC4zOTNsNC44NDYsNS4wNjYsNC43NjItNS4wNjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIzNDAuMjUyIDEzNDMyLjQyNSkgcm90YXRlKC05MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/Icon/FolderIcon.svg":
/*!********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Icon/FolderIcon.svg ***!
  \********************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42983",
  "data-name": "Group 42983",
  transform: "translate(0.194 0.194)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42980",
  "data-name": "Group 42980"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42985",
  "data-name": "Group 42985"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35995",
  "data-name": "Path 35995",
  d: "M8.348,2.029,6.31.5H.5V16.7H20.374V2.029Z",
  transform: "translate(-0.194 -0.194)",
  fill: "#f8f8f8",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42982",
  "data-name": "Group 42982",
  transform: "translate(0.306 4.586)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42984",
  "data-name": "Group 42984"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35997",
  "data-name": "Path 35997",
  d: "M22.82,7.5H2.946L.5,19.424H20.374Z",
  transform: "translate(-0.5 -7.5)",
  fill: "#f8f8f8",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 0.978
}))));

function SvgFolderIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 23.309,
    height: 17.205,
    viewBox: "0 0 23.309 17.205",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgFolderIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMy4zMDkiIGhlaWdodD0iMTcuMjA1IiB2aWV3Qm94PSIwIDAgMjMuMzA5IDE3LjIwNSI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTgzIiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTgzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjE5NCAwLjE5NCkiPgogICAgPGcgaWQ9Ikdyb3VwXzQyOTgwIiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTgwIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzQyOTg1IiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTg1Ij4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8zNTk5NSIgZGF0YS1uYW1lPSJQYXRoIDM1OTk1IiBkPSJNOC4zNDgsMi4wMjksNi4zMS41SC41VjE2LjdIMjAuMzc0VjIuMDI5WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuMTk0IC0wLjE5NCkiIGZpbGw9IiNmOGY4ZjgiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzQyOTgyIiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTgyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjMwNiA0LjU4NikiPgogICAgICA8ZyBpZD0iR3JvdXBfNDI5ODQiIGRhdGEtbmFtZT0iR3JvdXAgNDI5ODQiPgogICAgICAgIDxwYXRoIGlkPSJQYXRoXzM1OTk3IiBkYXRhLW5hbWU9IlBhdGggMzU5OTciIGQ9Ik0yMi44Miw3LjVIMi45NDZMLjUsMTkuNDI0SDIwLjM3NFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjUgLTcuNSkiIGZpbGw9IiNmOGY4ZjgiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuOTc4Ii8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/Icon/MenuIcon.svg":
/*!******************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Icon/MenuIcon.svg ***!
  \******************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42956",
  "data-name": "Group 42956",
  transform: "translate(-1887 -87)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Rectangle_12533",
  "data-name": "Rectangle 12533",
  transform: "translate(1887 87)",
  fill: "#f7f7f7",
  stroke: "#666",
  strokeWidth: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  width: 22,
  height: 25,
  rx: 2,
  stroke: "none"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  x: 0.5,
  y: 0.5,
  width: 21,
  height: 24,
  rx: 1.5,
  fill: "none"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_756",
  "data-name": "Line 756",
  x2: 13,
  transform: "translate(1891.5 92.093)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_759",
  "data-name": "Line 759",
  x2: 10.369,
  transform: "translate(1891.5 99.5)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_757",
  "data-name": "Line 757",
  x2: 13,
  transform: "translate(1891.5 95.796)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_758",
  "data-name": "Line 758",
  x2: 10.369,
  transform: "translate(1891.5 103.204)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_760",
  "data-name": "Line 760",
  x2: 13,
  transform: "translate(1891.5 106.907)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}));

function SvgMenuIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 22,
    height: 25,
    viewBox: "0 0 22 25",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgMenuIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMiIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDIyIDI1Ij4KICA8ZyBpZD0iR3JvdXBfNDI5NTYiIGRhdGEtbmFtZT0iR3JvdXAgNDI5NTYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xODg3IC04NykiPgogICAgPGcgaWQ9IlJlY3RhbmdsZV8xMjUzMyIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI1MzMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE4ODcgODcpIiBmaWxsPSIjZjdmN2Y3IiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxyZWN0IHdpZHRoPSIyMiIgaGVpZ2h0PSIyNSIgcng9IjIiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8cmVjdCB4PSIwLjUiIHk9IjAuNSIgd2lkdGg9IjIxIiBoZWlnaHQ9IjI0IiByeD0iMS41IiBmaWxsPSJub25lIi8+CiAgICA8L2c+CiAgICA8bGluZSBpZD0iTGluZV83NTYiIGRhdGEtbmFtZT0iTGluZSA3NTYiIHgyPSIxMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5MS41IDkyLjA5MykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzc1OSIgZGF0YS1uYW1lPSJMaW5lIDc1OSIgeDI9IjEwLjM2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5MS41IDk5LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSBpZD0iTGluZV83NTciIGRhdGEtbmFtZT0iTGluZSA3NTciIHgyPSIxMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5MS41IDk1Ljc5NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxsaW5lIGlkPSJMaW5lXzc1OCIgZGF0YS1uYW1lPSJMaW5lIDc1OCIgeDI9IjEwLjM2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5MS41IDEwMy4yMDQpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSBpZD0iTGluZV83NjAiIGRhdGEtbmFtZT0iTGluZSA3NjAiIHgyPSIxMyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTg5MS41IDEwNi45MDcpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/Icon/SearchBarIcon.svg":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Icon/SearchBarIcon.svg ***!
  \***********************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_2807",
  "data-name": "Group 2807",
  transform: "translate(-5793.326 4189.608) rotate(-45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Ellipse_256",
  "data-name": "Ellipse 256",
  transform: "translate(7053 1140)",
  fill: "none",
  stroke: "#666",
  strokeWidth: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 6,
  cy: 6,
  r: 6,
  stroke: "none"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 6,
  cy: 6,
  r: 5.5,
  fill: "none"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_313",
  "data-name": "Path 313",
  d: "M7058.526,1151.264v6",
  transform: "translate(0.474)",
  fill: "none",
  stroke: "#666",
  strokeWidth: 1
}));

function SvgSearchBarIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 16.971,
    height: 16.97,
    viewBox: "0 0 16.971 16.97",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgSearchBarIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNi45NzEiIGhlaWdodD0iMTYuOTciIHZpZXdCb3g9IjAgMCAxNi45NzEgMTYuOTciPgogIDxnIGlkPSJHcm91cF8yODA3IiBkYXRhLW5hbWU9Ikdyb3VwIDI4MDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01NzkzLjMyNiA0MTg5LjYwOCkgcm90YXRlKC00NSkiPgogICAgPGcgaWQ9IkVsbGlwc2VfMjU2IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjU2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3MDUzIDExNDApIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMSI+CiAgICAgIDxjaXJjbGUgY3g9IjYiIGN5PSI2IiByPSI2IiBzdHJva2U9Im5vbmUiLz4KICAgICAgPGNpcmNsZSBjeD0iNiIgY3k9IjYiIHI9IjUuNSIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPHBhdGggaWQ9IlBhdGhfMzEzIiBkYXRhLW5hbWU9IlBhdGggMzEzIiBkPSJNNzA1OC41MjYsMTE1MS4yNjR2NiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NzQpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "../../../libs/ui/src/ImportList/ImportList.module.css":
/*!*********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/ImportList.module.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ImportList.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ImportList/ImportList.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/ImportList/ImportList.tsx":
/*!**************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/ImportList.tsx ***!
  \**************************************************************************************/
/*! exports provided: ImportList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportList", function() { return ImportList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImportList_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportList.module.css */ "../../../libs/ui/src/ImportList/ImportList.module.css");
/* harmony import */ var _ImportList_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImportList_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _imported_file_ImportedFile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./imported-file/ImportedFile */ "../../../libs/ui/src/ImportList/imported-file/ImportedFile.tsx");
/* harmony import */ var _Icon_SearchBarIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon/SearchBarIcon.svg */ "../../../libs/ui/src/Icon/SearchBarIcon.svg");
/* harmony import */ var _Icon_DoubleLeftIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Icon/DoubleLeftIcon.svg */ "../../../libs/ui/src/Icon/DoubleLeftIcon.svg");
/* harmony import */ var _Icon_DoubleRightIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Icon/DoubleRightIcon.svg */ "../../../libs/ui/src/Icon/DoubleRightIcon.svg");
/* harmony import */ var _Icon_FolderIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Icon/FolderIcon.svg */ "../../../libs/ui/src/Icon/FolderIcon.svg");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








/* eslint-disable-next-line */

function ImportList(props) {
  const [searchBarValue, setSearchBarValue] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  let toggleIcon = props.isHidden ? _Icon_DoubleRightIcon_svg__WEBPACK_IMPORTED_MODULE_5__["default"] : _Icon_DoubleLeftIcon_svg__WEBPACK_IMPORTED_MODULE_4__["default"];

  const style = _objectSpread({
    background: '#F7F7F7 0% 0% no-repeat padding-box',
    border: '2px solid #E4E4E4',
    borderBottom: 'none'
  }, props.style);

  const headerStyle = {
    borderBottom: '2px solid #E4E4E4',
    height: '23px'
  };
  const toggleIconStyle = {
    padding: '6px',
    float: 'right',
    marginRight: '8px',
    userSelect: 'none'
  };
  const bodyStyle = {
    margin: '0px',
    padding: '0px 15px'
  };
  const titleStyle = {
    padding: '21px 0px 10px 0px',
    borderBottom: '2px solid #E4E4E4',
    fontWeight: 'bold',
    fontSize: '18px',
    fontFamily: 'Arial'
  };
  const searchBarStyle = {
    margin: '20px 0px 0px 0px',
    width: '200px',
    height: '30px',
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    border: '1px solid #CCCCCC',
    borderRadius: '2px',
    padding: '0px',
    display: 'flex',
    alignItems: 'center'
  };
  const searchBarInputStyle = {
    border: 'none',
    outline: 'none',
    background: '#F2F2F2 0% 0% no-repeat padding-box',
    margin: '0px 0px 0px 10px',
    padding: '0px',
    width: '158px'
  };
  const searchBarIconStyle = {
    userSelect: 'none'
  };
  const fileListStyle = {
    margin: '17px 0px 0px 0px',
    height: `calc(${props.style.height} - 160px)`,
    overflow: 'auto'
  };
  const folderIconStyle = {
    width: '20px',
    padding: '16px 8px',
    userSelect: 'none'
  };
  let importedFiles = props.files.filter(fileStatus => {
    if (searchBarValue === '' || fileStatus.fileName.includes(searchBarValue)) return true;else return false;
  }).map((fileStatus, fileIndex) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imported_file_ImportedFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: fileIndex,
      fileStatus: fileStatus,
      onPageSelect: pageIndex => {
        props.selectPage(fileIndex, pageIndex);
      },
      isSelected: pageIndex => {
        return props.isSelected(fileIndex, pageIndex);
      }
    });
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: headerStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: toggleIconStyle,
    onClick: () => props.onToggle(),
    src: toggleIcon
  })), props.isHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: folderIconStyle,
    src: _Icon_FolderIcon_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    onClick: () => props.onToggle()
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: bodyStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: titleStyle
  }, " \u8F38\u5165\u6A94\u6848 "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: searchBarStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "search",
    style: searchBarInputStyle,
    value: searchBarValue,
    onChange: event => setSearchBarValue(event.target.value)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Icon_SearchBarIcon_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    style: searchBarIconStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: fileListStyle
  }, importedFiles)));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ImportList);

/***/ }),

/***/ "../../../libs/ui/src/ImportList/imported-file/ImportedFile.module.css":
/*!*************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/imported-file/ImportedFile.module.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ImportedFile.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ImportList/imported-file/ImportedFile.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/ImportList/imported-file/ImportedFile.tsx":
/*!******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/imported-file/ImportedFile.tsx ***!
  \******************************************************************************************************/
/*! exports provided: ImportedFile, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportedFile", function() { return ImportedFile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _imported_page_ImportedPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../imported-page/ImportedPage */ "../../../libs/ui/src/ImportList/imported-page/ImportedPage.tsx");
/* harmony import */ var _Icon_CaretDownIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../Icon/CaretDownIcon.svg */ "../../../libs/ui/src/Icon/CaretDownIcon.svg");
/* harmony import */ var _Icon_CaretRightIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Icon/CaretRightIcon.svg */ "../../../libs/ui/src/Icon/CaretRightIcon.svg");
/* harmony import */ var _ImportedFile_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImportedFile.module.css */ "../../../libs/ui/src/ImportList/imported-file/ImportedFile.module.css");
/* harmony import */ var _ImportedFile_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ImportedFile_module_css__WEBPACK_IMPORTED_MODULE_4__);





/* eslint-disable-next-line */

function ImportedFile(props) {
  const [isFolded, setIsFolded] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let toggleIcon = isFolded ? _Icon_CaretRightIcon_svg__WEBPACK_IMPORTED_MODULE_3__["default"] : _Icon_CaretDownIcon_svg__WEBPACK_IMPORTED_MODULE_2__["default"];
  let pages = props.fileStatus.pageInfos.map((pageInfo, index) => {
    let style = {
      margin: '0px 0px 10px 0px'
    };
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: index,
      style: style
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imported_page_ImportedPage__WEBPACK_IMPORTED_MODULE_1__["ImportedPage"], {
      info: pageInfo,
      isSelected: props.isSelected(index),
      onClick: () => props.onPageSelect(index)
    }));
  });
  let style = {
    userSelect: 'none',
    width: '210px'
  };
  let toggleIconStyle = {
    margin: '0px'
  };
  let textStyle = {
    margin: '0px 0px 10px 0px',
    wordBreak: 'break-all',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    fontSize: '16px',
    fontFamily: 'Arial'
  };
  let pagesStyle = {
    margin: '0px 0px 0px 18px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: textStyle,
    onClick: () => setIsFolded(!isFolded),
    title: props.fileStatus.fileName
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: toggleIconStyle,
    src: toggleIcon
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, " ", props.fileStatus.fileName)), !isFolded && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: pagesStyle
  }, pages));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ImportedFile);

/***/ }),

/***/ "../../../libs/ui/src/ImportList/imported-page/ImportedPage.module.css":
/*!*************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/imported-page/ImportedPage.module.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ImportedPage.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ImportList/imported-page/ImportedPage.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/ImportList/imported-page/ImportedPage.tsx":
/*!******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/imported-page/ImportedPage.tsx ***!
  \******************************************************************************************************/
/*! exports provided: ImportedPage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImportedPage", function() { return ImportedPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImportedPage_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportedPage.module.css */ "../../../libs/ui/src/ImportList/imported-page/ImportedPage.module.css");
/* harmony import */ var _ImportedPage_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ImportedPage_module_css__WEBPACK_IMPORTED_MODULE_1__);


function ImportedPage(props) {
  const widthInPx = 158;
  let style = {
    border: props.isSelected ? "3px solid #1581FF" : "1px solid #707070",
    width: widthInPx,
    height: widthInPx * props.info.heightInMm / props.info.widthInMm,
    margin: props.isSelected ? '0px' : '2px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: style,
    src: props.info.jpegUrl,
    onClick: props.onClick
  });
}
;
/* harmony default export */ __webpack_exports__["default"] = (ImportedPage);

/***/ }),

/***/ "../../../libs/ui/src/ModelInfo/ModelInfo.module.css":
/*!*******************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ModelInfo/ModelInfo.module.css ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ModelInfo.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ModelInfo/ModelInfo.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "../../../libs/ui/src/ModelInfo/ModelInfo.tsx":
/*!************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/ModelInfo/ModelInfo.tsx ***!
  \************************************************************************************/
/*! exports provided: ModelInfo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModelInfo", function() { return ModelInfo; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Icon_DoubleLeftIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Icon/DoubleLeftIcon.svg */ "../../../libs/ui/src/Icon/DoubleLeftIcon.svg");
/* harmony import */ var _Icon_DoubleRightIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Icon/DoubleRightIcon.svg */ "../../../libs/ui/src/Icon/DoubleRightIcon.svg");
/* harmony import */ var _Icon_MenuIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Icon/MenuIcon.svg */ "../../../libs/ui/src/Icon/MenuIcon.svg");
/* harmony import */ var _ModelInfo_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ModelInfo.module.css */ "../../../libs/ui/src/ModelInfo/ModelInfo.module.css");
/* harmony import */ var _ModelInfo_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ModelInfo_module_css__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* eslint-disable-next-line */

function ModelInfo(props) {
  let style = _objectSpread({
    border: "2px solid #E4E4E4",
    borderBottom: "none",
    backgroundColor: "#F7F7F7"
  }, props.style);

  let headerStyle = {
    height: 21,
    borderBottom: "2px solid #E4E4E4"
  };
  let bodyStyle = {
    padding: 27
  };
  let titleStyle = {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 18,
    paddingBottom: 10,
    borderBottom: "2px solid #E4E4E4"
  };
  let productNameStyle = {
    paddingTop: 30,
    paddingBottom: 14,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: 18
  };
  let productInfoStyle = {
    fontSize: 16,
    padding: 3
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: headerStyle
  }, props.hidable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      padding: 6
    },
    src: props.isHidden ? _Icon_DoubleLeftIcon_svg__WEBPACK_IMPORTED_MODULE_1__["default"] : _Icon_DoubleRightIcon_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    onClick: props.onToggle
  })), props.isHidden ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      width: 20,
      padding: 8
    },
    src: _Icon_MenuIcon_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    onClick: props.onToggle
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: bodyStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: titleStyle
  }, "\u8A02\u55AE\u8CC7\u8A0A"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: productNameStyle
  }, props.product.productSubTypeChineseName), props.product.getInfo().map(info => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: info,
      style: productInfoStyle
    }, info);
  })));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ModelInfo);

/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/SourceImageToolBar.tsx":
/*!******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/SourceImageToolBar.tsx ***!
  \******************************************************************************************************/
/*! exports provided: SourceImageToolBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceImageToolBar", function() { return SourceImageToolBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _icons_ToolBarHolder_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/ToolBarHolder.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/ToolBarHolder.svg");
/* harmony import */ var _icons_Lock_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/Lock.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/Lock.svg");
/* harmony import */ var _icons_Unlock_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/Unlock.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/Unlock.svg");
/* harmony import */ var _icons_ResetSize_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/ResetSize.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/ResetSize.svg");
/* harmony import */ var _icons_ResetSizeBlue_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/ResetSizeBlue.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/ResetSizeBlue.svg");
/* harmony import */ var _icons_AlignCenter_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/AlignCenter.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/AlignCenter.svg");
/* harmony import */ var _icons_AlignCenterBlue_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/AlignCenterBlue.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/AlignCenterBlue.svg");
/* harmony import */ var _icons_FullSize_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/FullSize.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/FullSize.svg");
/* harmony import */ var _icons_FullSizeBlue_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./icons/FullSizeBlue.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/FullSizeBlue.svg");
/* harmony import */ var _icons_EqualWidth_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./icons/EqualWidth.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/EqualWidth.svg");
/* harmony import */ var _icons_EqualWidthBlue_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./icons/EqualWidthBlue.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/EqualWidthBlue.svg");
/* harmony import */ var _icons_EqualHeight_svg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./icons/EqualHeight.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/EqualHeight.svg");
/* harmony import */ var _icons_EqualHeightBlue_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./icons/EqualHeightBlue.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/EqualHeightBlue.svg");
/* harmony import */ var _icons_RotateRight_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./icons/RotateRight.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/RotateRight.svg");
/* harmony import */ var _icons_RotateRightBlue_svg__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./icons/RotateRightBlue.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/RotateRightBlue.svg");
/* harmony import */ var _icons_Delete_svg__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./icons/Delete.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/Delete.svg");
/* harmony import */ var _icons_DeleteBlue_svg__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./icons/DeleteBlue.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/DeleteBlue.svg");
/* harmony import */ var _hooks__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../hooks */ "../../../libs/ui/src/hooks.ts");
/* harmony import */ var _icons_ZoomInIcon_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./icons/ZoomInIcon.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/ZoomInIcon.svg");
/* harmony import */ var _icons_ZoomOutIcon_svg__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./icons/ZoomOutIcon.svg */ "../../../libs/ui/src/SourceImageToolBar/icons/ZoomOutIcon.svg");
/* harmony import */ var _lib_buttons__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../lib/buttons */ "../../../libs/ui/src/lib/buttons.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }























function SourceImageToolBar(props) {
  let [positionX, positionY, onToolBarHolderMouseDown] = Object(_hooks__WEBPACK_IMPORTED_MODULE_18__["useDrag"])(400, 650);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      left: positionX,
      top: positionY
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 46,
      width: 690,
      backgroundColor: 'white',
      position: 'relative',
      boxShadow: "0px 3px 6px #00000029"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _icons_ToolBarHolder_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    style: {
      position: "absolute",
      top: 13,
      left: 8,
      cursor: 'move'
    },
    draggable: true,
    onMouseDown: onToolBarHolderMouseDown
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyInput, {
    style: {
      position: 'absolute',
      display: 'inline-block',
      top: 4,
      left: 35
    },
    label: "\u5BEC",
    value: "210mm",
    onChange: () => {}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(MyInput, {
    style: {
      position: 'absolute',
      display: 'inline-block',
      top: 22,
      left: 35
    },
    label: "\u9AD8",
    value: "297mm",
    onChange: () => {}
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SwitchableButton, {
    srcWhenOn: _icons_Unlock_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    srcWhenOff: _icons_Lock_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    isOn: false,
    style: {
      position: 'absolute',
      top: 8,
      left: 152
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
    style: {
      position: 'absolute',
      top: 6,
      left: 179
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZoomingToolBar, {
    zoom: () => {},
    style: {
      position: 'absolute',
      top: 3,
      left: 190
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_ResetSize_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    srcOnHover: _icons_ResetSizeBlue_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    style: {
      position: 'absolute',
      top: 13,
      left: 397
    },
    title: "\u56DE\u5FA9\u5230\u539F\u59CB\u5C3A\u5BF8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
    style: {
      position: 'absolute',
      top: 6,
      left: 437
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_AlignCenter_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    srcOnHover: _icons_AlignCenterBlue_svg__WEBPACK_IMPORTED_MODULE_7__["default"],
    style: {
      position: 'absolute',
      top: 13,
      left: 452
    },
    title: "\u539F\u5C3A\u5BF8\u7F6E\u4E2D"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_FullSize_svg__WEBPACK_IMPORTED_MODULE_8__["default"],
    srcOnHover: _icons_FullSizeBlue_svg__WEBPACK_IMPORTED_MODULE_9__["default"],
    style: {
      position: 'absolute',
      top: 13,
      left: 487
    },
    title: "\u586B\u6EFF"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_EqualWidth_svg__WEBPACK_IMPORTED_MODULE_10__["default"],
    srcOnHover: _icons_EqualWidthBlue_svg__WEBPACK_IMPORTED_MODULE_11__["default"],
    style: {
      position: 'absolute',
      top: 13,
      left: 522
    },
    title: "\u8207\u6846\u540C\u5BEC"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_EqualHeight_svg__WEBPACK_IMPORTED_MODULE_12__["default"],
    srcOnHover: _icons_EqualHeightBlue_svg__WEBPACK_IMPORTED_MODULE_13__["default"],
    style: {
      position: 'absolute',
      top: 13,
      left: 557
    },
    title: "\u8207\u5BEC\u540C\u9AD8"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
    style: {
      position: 'absolute',
      top: 6,
      left: 589
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_RotateRight_svg__WEBPACK_IMPORTED_MODULE_14__["default"],
    srcOnHover: _icons_RotateRightBlue_svg__WEBPACK_IMPORTED_MODULE_15__["default"],
    style: {
      position: 'absolute',
      top: 13,
      left: 604
    },
    title: "\u9806\u6642\u91DD\u8F4990\u5EA6"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VerticalLine, {
    style: {
      position: 'absolute',
      top: 6,
      left: 641
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_Delete_svg__WEBPACK_IMPORTED_MODULE_16__["default"],
    srcOnHover: _icons_DeleteBlue_svg__WEBPACK_IMPORTED_MODULE_17__["default"],
    style: {
      position: 'absolute',
      top: 13,
      left: 656
    },
    title: "\u7559\u767D",
    onClick: props.onDelete
  })));
}

function MyInput(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      fontSize: 14
    }, props.style)
  }, props.label, "\uFF1A", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    style: {
      width: 64,
      paddingLeft: 16,
      height: 20,
      backgroundColor: '#F8F8F8',
      borderRadius: 3,
      border: 'none',
      outline: 'none'
    },
    value: props.value,
    onChange: event => props.onChange(event.target.value)
  }));
}

function VerticalLine(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      width: 0,
      height: 34,
      borderLeft: 'solid 1px #d9d9d9'
    }, props.style)
  });
}

function SwitchableButton(props) {
  let [isHovered, setIsHovered] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.isOn ? props.srcWhenOn : props.srcWhenOff,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: _objectSpread({
      cursor: isHovered ? 'pointer' : 'inherit'
    }, props.style)
  });
}

function useTransparentImage() {
  const transparentImageSource = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  let transparentImage = new Image(0, 0);
  transparentImage.src = transparentImageSource;
  let [dragImage, _] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(transparentImage);
  return dragImage;
}

function ZoomingToolBar(props) {
  const zoomPadMovementPerClickOnIcons = 5;
  const zoomBarLength = 110;
  let [[mousePosition, zoomPadPosition], setPositions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([0, zoomBarLength / 2]);
  let leftZoomBarStyle = {
    position: 'absolute',
    left: 30,
    top: 19,
    height: 0,
    width: zoomBarLength - zoomPadPosition,
    border: 'solid 2px #666666',
    borderRadius: 2,
    zIndex: 1
  };
  let zoomPadStyle = {
    position: 'absolute',
    top: 13,
    left: 27 + zoomBarLength - zoomPadPosition,
    width: 14,
    height: 14,
    backgroundColor: '#666666',
    border: "solid 1px #d9d9d9",
    borderRadius: '50%',
    cursor: 'grab',
    zIndex: 3
  };
  let rightZoomBarStyle = {
    height: 0,
    width: zoomPadPosition,
    position: 'absolute',
    top: 19,
    left: 35 + zoomBarLength - zoomPadPosition,
    border: 'solid 2px #d9d9d9',
    borderRadius: 2,
    zIndex: 1
  };
  let dragImage = useTransparentImage();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.zoom(zoomPadPosition / (zoomBarLength / 2));
  }, [zoomPadPosition]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({}, props.style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'relative'
    },
    onDragOver: event => setPositions(([oldMousePosition, oldZoomPadPosition]) => {
      let newMousePosition = event.pageX;
      let offset = oldMousePosition - newMousePosition;
      let newZoomPadPosition = oldZoomPadPosition + offset;
      if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
      if (newZoomPadPosition < 0) newZoomPadPosition = 0;
      return [newMousePosition, newZoomPadPosition];
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_ZoomInIcon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
    srcOnHover: _icons_ZoomInIcon_svg__WEBPACK_IMPORTED_MODULE_19__["default"],
    style: {
      position: 'absolute',
      left: 0,
      top: 9
    },
    onClick: () => {
      setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newZoomPadPosition = oldZoomPadPosition + zoomPadMovementPerClickOnIcons;
        if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
        return [oldMousePosition, newZoomPadPosition];
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: leftZoomBarStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: zoomPadStyle,
    draggable: true,
    onDragStart: event => {
      event.dataTransfer.setDragImage(dragImage, 0, 0);
      event.dataTransfer.clearData();
      let newMousePosition = event.pageX;
      setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        return [newMousePosition, oldZoomPadPosition];
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: rightZoomBarStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_21__["HoverableButton"], {
    src: _icons_ZoomOutIcon_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
    srcOnHover: _icons_ZoomOutIcon_svg__WEBPACK_IMPORTED_MODULE_20__["default"],
    style: {
      position: 'absolute',
      left: 155,
      top: 9
    },
    onClick: () => {
      setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newZoomPadPosition = oldZoomPadPosition - zoomPadMovementPerClickOnIcons;
        if (newZoomPadPosition < 0) newZoomPadPosition = 0;
        return [oldMousePosition, newZoomPadPosition];
      });
    }
  })));
} //   function ZoomingToolBar(props: ZoomingToolBarProps): JSX.Element {
//     let style: CSSProperties = {
//       ...props.style
//     }
//     let zoomIconStyle: CSSProperties = {
//       paddingTop: 5,
//       paddingBottom: 5,
//     };
//     const zoomPadMovementPerClickOnIcons: number = 5;
//     const zoomBarLength: number = 120;
//     let [[mousePosition, zoomPadPosition], setPositions]
//       = useState<[number, number]>([0, zoomBarLength / 2]);
//     let upperZoomBarStyle: CSSProperties = {
//       width: 0,
//       height: zoomBarLength - zoomPadPosition,
//       marginLeft: 24,
//       border: 'solid 2px #d9d9d9',
//       borderRadius: 2
//     };
//     let zoomPadStyle: CSSProperties = {
//       position: 'absolute',
//       left: 18,
//       top: 35 + zoomBarLength - zoomPadPosition,
//       width: 14,
//       height: 14,
//       backgroundColor: '#666666',
//       border: "solid 1px #d9d9d9",
//       borderRadius: '50%',
//       cursor: 'grab'
//     };
//     let lowerZoomBarStyle: CSSProperties = {
//       width: 0,
//       height: zoomPadPosition,
//       marginLeft: 24,
//       border: 'solid 2px #666666',
//       borderRadius: 2
//     };
//     const transparentImageSource = 
//       'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
//     let transparentImage = new Image(0, 0);
//     transparentImage.src = transparentImageSource;
//     let [dragImage, _] = useState<HTMLImageElement>(transparentImage);
//     useEffect(() => {
//       props.zoom(zoomPadPosition / (zoomBarLength / 2));
//     }, [zoomPadPosition]);
//     return (
//       <div
//         style={style}
//         onDragOver={(event) => setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//           let newMousePosition: number = event.pageY;
//           let offset: number = oldMousePosition - newMousePosition;
//           let newZoomPadPosition: number = oldZoomPadPosition + offset;
//           if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
//           if (newZoomPadPosition < 0) newZoomPadPosition = 0;
//           return [newMousePosition, newZoomPadPosition];
//         })}
//       >
//         <Icon
//           style={zoomIconStyle}
//           src={ZoomOutIcon}
//           onClick={() => {
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newZoomPadPosition: number = oldZoomPadPosition + zoomPadMovementPerClickOnIcons;
//               if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
//               return [oldMousePosition, newZoomPadPosition];
//             });
//           }}
//         />
//         <div style={upperZoomBarStyle}/>
//         <div
//           style={zoomPadStyle}
//           draggable
//           onDragStart={(event) => {
//             event.dataTransfer.setDragImage(dragImage, 0, 0);
//             event.dataTransfer.clearData();
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newMousePosition: number = event.pageY;
//               return [newMousePosition, oldZoomPadPosition];
//             });
//           }}
//         />
//         <div style={lowerZoomBarStyle}/>
//         <Icon
//           style={zoomIconStyle}
//           src={ZoomInIcon}
//           onClick={() => {
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newZoomPadPosition: number = oldZoomPadPosition - zoomPadMovementPerClickOnIcons;
//               if (newZoomPadPosition < 0) newZoomPadPosition = 0;
//               return [oldMousePosition, newZoomPadPosition];
//             });
//           }}
//         />
//         <Icon
//           src={ResetSizeIcon}
//           onClick={() => {
//             setPositions(([oldMousePosition, oldZoomPadPosition]) => {
//               let newZoomPadPosition: number = zoomBarLength / 2;
//               return [oldMousePosition, newZoomPadPosition];
//             });
//           }}
//         />
//       </div>
//     );
//   }

/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/AlignCenter.svg":
/*!*****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/AlignCenter.svg ***!
  \*****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12521",
  "data-name": "Rectangle 12521",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(0.5 0.5)",
  fill: "#fff",
  stroke: "#707070",
  strokeWidth: 1
});

function SvgAlignCenter(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgAlignCenter);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTIxIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUyMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/AlignCenterBlue.svg":
/*!*********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/AlignCenterBlue.svg ***!
  \*********************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12521",
  "data-name": "Rectangle 12521",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(0.5 0.5)",
  fill: "#fff",
  stroke: "#1581ff",
  strokeWidth: 1
});

function SvgAlignCenterBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgAlignCenterBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTIxIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUyMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiIGZpbGw9IiNmZmYiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/Delete.svg":
/*!************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/Delete.svg ***!
  \************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip-path"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12601",
  "data-name": "Rectangle 12601",
  width: 20,
  height: 20,
  transform: "translate(1284 760)",
  fill: "#fff",
  stroke: "#707070",
  strokeWidth: 1
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Mask_Group_47",
  "data-name": "Mask Group 47",
  transform: "translate(-1284 -760)",
  clipPath: "url(#clip-path)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43042",
  "data-name": "Group 43042",
  transform: "translate(1285 760)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36000",
  "data-name": "Path 36000",
  d: "M17.233,2.878H13.072V2.2a2.2,2.2,0,0,0-2.2-2.2H6.916a2.2,2.2,0,0,0-2.2,2.2v.678H.555a.555.555,0,0,0,0,1.11h1V17.031A2.973,2.973,0,0,0,4.527,20h8.734a2.973,2.973,0,0,0,2.969-2.969V3.988h1a.555.555,0,0,0,0-1.11M5.826,2.2a1.092,1.092,0,0,1,1.09-1.09h3.956a1.091,1.091,0,0,1,1.09,1.09v.678H5.826Zm9.293,14.831a1.862,1.862,0,0,1-1.859,1.859H4.527a1.862,1.862,0,0,1-1.859-1.859V3.988H15.123V17.031Z",
  fill: "#666"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43041",
  "data-name": "Group 43041"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_763",
  "data-name": "Line 763",
  y2: 10,
  transform: "translate(5.5 6.5)",
  fill: "none",
  stroke: "#707070",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_764",
  "data-name": "Line 764",
  y2: 10,
  transform: "translate(9.039 6.5)",
  fill: "none",
  stroke: "#707070",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_765",
  "data-name": "Line 765",
  y2: 10,
  transform: "translate(12.5 6.5)",
  fill: "none",
  stroke: "#707070",
  strokeLinecap: "round",
  strokeWidth: 1
}))));

function SvgDelete(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDelete);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MDEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNjAxIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyODQgNzYwKSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzQ3IiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjg0IC03NjApIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZyBpZD0iR3JvdXBfNDMwNDIiIGRhdGEtbmFtZT0iR3JvdXAgNDMwNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyODUgNzYwKSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDAwIiBkYXRhLW5hbWU9IlBhdGggMzYwMDAiIGQ9Ik0xNy4yMzMsMi44NzhIMTMuMDcyVjIuMmEyLjIsMi4yLDAsMCwwLTIuMi0yLjJINi45MTZhMi4yLDIuMiwwLDAsMC0yLjIsMi4ydi42NzhILjU1NWEuNTU1LjU1NSwwLDAsMCwwLDEuMTFoMVYxNy4wMzFBMi45NzMsMi45NzMsMCwwLDAsNC41MjcsMjBoOC43MzRhMi45NzMsMi45NzMsMCwwLDAsMi45NjktMi45NjlWMy45ODhoMWEuNTU1LjU1NSwwLDAsMCwwLTEuMTFNNS44MjYsMi4yYTEuMDkyLDEuMDkyLDAsMCwxLDEuMDktMS4wOWgzLjk1NmExLjA5MSwxLjA5MSwwLDAsMSwxLjA5LDEuMDl2LjY3OEg1LjgyNlptOS4yOTMsMTQuODMxYTEuODYyLDEuODYyLDAsMCwxLTEuODU5LDEuODU5SDQuNTI3YTEuODYyLDEuODYyLDAsMCwxLTEuODU5LTEuODU5VjMuOTg4SDE1LjEyM1YxNy4wMzFaIiBmaWxsPSIjNjY2Ii8+CiAgICAgIDxnIGlkPSJHcm91cF80MzA0MSIgZGF0YS1uYW1lPSJHcm91cCA0MzA0MSI+CiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfNzYzIiBkYXRhLW5hbWU9IkxpbmUgNzYzIiB5Mj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNSA2LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfNzY0IiBkYXRhLW5hbWU9IkxpbmUgNzY0IiB5Mj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDM5IDYuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8bGluZSBpZD0iTGluZV83NjUiIGRhdGEtbmFtZT0iTGluZSA3NjUiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNSA2LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/DeleteBlue.svg":
/*!****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/DeleteBlue.svg ***!
  \****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip-path"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12601",
  "data-name": "Rectangle 12601",
  width: 20,
  height: 20,
  transform: "translate(1284 760)",
  fill: "none",
  stroke: "#1581ff",
  strokeWidth: 1
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Mask_Group_47",
  "data-name": "Mask Group 47",
  transform: "translate(-1284 -760)",
  clipPath: "url(#clip-path)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43042",
  "data-name": "Group 43042",
  transform: "translate(1285 760)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36000",
  "data-name": "Path 36000",
  d: "M17.233,2.878H13.072V2.2a2.2,2.2,0,0,0-2.2-2.2H6.916a2.2,2.2,0,0,0-2.2,2.2v.678H.555a.555.555,0,0,0,0,1.11h1V17.031A2.973,2.973,0,0,0,4.527,20h8.734a2.973,2.973,0,0,0,2.969-2.969V3.988h1a.555.555,0,0,0,0-1.11M5.826,2.2a1.092,1.092,0,0,1,1.09-1.09h3.956a1.091,1.091,0,0,1,1.09,1.09v.678H5.826Zm9.293,14.831a1.862,1.862,0,0,1-1.859,1.859H4.527a1.862,1.862,0,0,1-1.859-1.859V3.988H15.123V17.031Z",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43041",
  "data-name": "Group 43041"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_763",
  "data-name": "Line 763",
  y2: 10,
  transform: "translate(5.5 6.5)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_764",
  "data-name": "Line 764",
  y2: 10,
  transform: "translate(9.039 6.5)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_765",
  "data-name": "Line 765",
  y2: 10,
  transform: "translate(12.5 6.5)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}))));

function SvgDeleteBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 20,
    height: 20,
    viewBox: "0 0 20 20",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDeleteBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MDEiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNjAxIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyODQgNzYwKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJNYXNrX0dyb3VwXzQ3IiBkYXRhLW5hbWU9Ik1hc2sgR3JvdXAgNDciIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMjg0IC03NjApIiBjbGlwLXBhdGg9InVybCgjY2xpcC1wYXRoKSI+CiAgICA8ZyBpZD0iR3JvdXBfNDMwNDIiIGRhdGEtbmFtZT0iR3JvdXAgNDMwNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyODUgNzYwKSI+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDAwIiBkYXRhLW5hbWU9IlBhdGggMzYwMDAiIGQ9Ik0xNy4yMzMsMi44NzhIMTMuMDcyVjIuMmEyLjIsMi4yLDAsMCwwLTIuMi0yLjJINi45MTZhMi4yLDIuMiwwLDAsMC0yLjIsMi4ydi42NzhILjU1NWEuNTU1LjU1NSwwLDAsMCwwLDEuMTFoMVYxNy4wMzFBMi45NzMsMi45NzMsMCwwLDAsNC41MjcsMjBoOC43MzRhMi45NzMsMi45NzMsMCwwLDAsMi45NjktMi45NjlWMy45ODhoMWEuNTU1LjU1NSwwLDAsMCwwLTEuMTFNNS44MjYsMi4yYTEuMDkyLDEuMDkyLDAsMCwxLDEuMDktMS4wOWgzLjk1NmExLjA5MSwxLjA5MSwwLDAsMSwxLjA5LDEuMDl2LjY3OEg1LjgyNlptOS4yOTMsMTQuODMxYTEuODYyLDEuODYyLDAsMCwxLTEuODU5LDEuODU5SDQuNTI3YTEuODYyLDEuODYyLDAsMCwxLTEuODU5LTEuODU5VjMuOTg4SDE1LjEyM1YxNy4wMzFaIiBmaWxsPSIjMTU4MWZmIi8+CiAgICAgIDxnIGlkPSJHcm91cF80MzA0MSIgZGF0YS1uYW1lPSJHcm91cCA0MzA0MSI+CiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfNzYzIiBkYXRhLW5hbWU9IkxpbmUgNzYzIiB5Mj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDUuNSA2LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPGxpbmUgaWQ9IkxpbmVfNzY0IiBkYXRhLW5hbWU9IkxpbmUgNzY0IiB5Mj0iMTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDkuMDM5IDYuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8bGluZSBpZD0iTGluZV83NjUiIGRhdGEtbmFtZT0iTGluZSA3NjUiIHkyPSIxMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTIuNSA2LjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDwvZz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/EqualHeight.svg":
/*!*****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/EqualHeight.svg ***!
  \*****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42950",
  "data-name": "Group 42950",
  transform: "translate(780 -1123) rotate(90)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12531",
  "data-name": "Rectangle 12531",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(1123.5 759.5)",
  fill: "#fff",
  stroke: "#707070",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12532",
  "data-name": "Rectangle 12532",
  width: 20,
  height: 9,
  transform: "translate(1123.5 765)",
  fill: "#d9d9d9",
  stroke: "#707070",
  strokeWidth: 1
}));

function SvgEqualHeight(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgEqualHeight);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfNDI5NTAiIGRhdGEtbmFtZT0iR3JvdXAgNDI5NTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4MCAtMTEyMykgcm90YXRlKDkwKSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTMxIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUzMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyMy41IDc1OS41KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjNzA3MDcwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI1MzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNTMyIiB3aWR0aD0iMjAiIGhlaWdodD0iOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyMy41IDc2NSkiIGZpbGw9IiNkOWQ5ZDkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/EqualHeightBlue.svg":
/*!*********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/EqualHeightBlue.svg ***!
  \*********************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42950",
  "data-name": "Group 42950",
  transform: "translate(780 -1123) rotate(90)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12531",
  "data-name": "Rectangle 12531",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(1123.5 759.5)",
  fill: "#fff",
  stroke: "#1581ff",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12532",
  "data-name": "Rectangle 12532",
  width: 20,
  height: 9,
  transform: "translate(1123.5 765)",
  fill: "#e9f3ff",
  stroke: "#1581ff",
  strokeWidth: 1
}));

function SvgEqualHeightBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgEqualHeightBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfNDI5NTAiIGRhdGEtbmFtZT0iR3JvdXAgNDI5NTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDc4MCAtMTEyMykgcm90YXRlKDkwKSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTMxIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUzMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyMy41IDc1OS41KSIgZmlsbD0iI2ZmZiIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI1MzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNTMyIiB3aWR0aD0iMjAiIGhlaWdodD0iOSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyMy41IDc2NSkiIGZpbGw9IiNlOWYzZmYiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/EqualWidth.svg":
/*!****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/EqualWidth.svg ***!
  \****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42949",
  "data-name": "Group 42949",
  transform: "translate(-1122.5 -759.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12531",
  "data-name": "Rectangle 12531",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(1123 760)",
  fill: "#fff",
  stroke: "#707070",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12532",
  "data-name": "Rectangle 12532",
  width: 20,
  height: 9,
  transform: "translate(1123 766)",
  fill: "#d9d9d9",
  stroke: "#707070",
  strokeWidth: 1
}));

function SvgEqualWidth(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgEqualWidth);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfNDI5NDkiIGRhdGEtbmFtZT0iR3JvdXAgNDI5NDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIyLjUgLTc1OS41KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTMxIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUzMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyMyA3NjApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xMjUzMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI1MzIiIHdpZHRoPSIyMCIgaGVpZ2h0PSI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIzIDc2NikiIGZpbGw9IiNkOWQ5ZDkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/EqualWidthBlue.svg":
/*!********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/EqualWidthBlue.svg ***!
  \********************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42949",
  "data-name": "Group 42949",
  transform: "translate(-1122.5 -759.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12531",
  "data-name": "Rectangle 12531",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(1123 760)",
  fill: "#fff",
  stroke: "#1581ff",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12532",
  "data-name": "Rectangle 12532",
  width: 20,
  height: 9,
  transform: "translate(1123 766)",
  fill: "#e9f3ff",
  stroke: "#1581ff",
  strokeWidth: 1
}));

function SvgEqualWidthBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgEqualWidthBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfNDI5NDkiIGRhdGEtbmFtZT0iR3JvdXAgNDI5NDkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMTIyLjUgLTc1OS41KSI+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTMxIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUzMSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEyMyA3NjApIiBmaWxsPSIjZmZmIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHJlY3QgaWQ9IlJlY3RhbmdsZV8xMjUzMiIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI1MzIiIHdpZHRoPSIyMCIgaGVpZ2h0PSI5IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMTIzIDc2NikiIGZpbGw9IiNlOWYzZmYiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/FullSize.svg":
/*!**************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/FullSize.svg ***!
  \**************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12530",
  "data-name": "Rectangle 12530",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(0.5 0.5)",
  fill: "#d9d9d9",
  stroke: "#707070",
  strokeWidth: 1
});

function SvgFullSize(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgFullSize);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTMwIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUzMCIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiIGZpbGw9IiNkOWQ5ZDkiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/FullSizeBlue.svg":
/*!******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/FullSizeBlue.svg ***!
  \******************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12595",
  "data-name": "Rectangle 12595",
  width: 20,
  height: 20,
  rx: 2,
  transform: "translate(0.5 0.5)",
  fill: "none",
  stroke: "#1581ff",
  strokeWidth: 1
});

function SvgFullSizeBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgFullSizeBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTk1IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjU5NSIgd2lkdGg9IjIwIiBoZWlnaHQ9IjIwIiByeD0iMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/Lock.svg":
/*!**********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/Lock.svg ***!
  \**********************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43022",
  "data-name": "Group 43022",
  transform: "translate(-785.625 -754.25)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42948",
  "data-name": "Group 42948",
  transform: "translate(16)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35992",
  "data-name": "Path 35992",
  d: "M4089,2887.5h4.3v6.42",
  transform: "translate(-3319 -2133)",
  fill: "none",
  stroke: "#d9d9d9",
  strokeWidth: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35993",
  "data-name": "Path 35993",
  d: "M4089,2893.92h4.3v-6.42",
  transform: "translate(-3319 -2107)",
  fill: "none",
  stroke: "#d9d9d9",
  strokeWidth: 0.5
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42974",
  "data-name": "Group 42974",
  transform: "translate(786 764)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12527",
  "data-name": "Rectangle 12527",
  width: 8.466,
  height: 6.584,
  rx: 1,
  transform: "translate(0 4.703)",
  fill: "#666",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 0.75
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35990",
  "data-name": "Path 35990",
  d: "M9.144,5.2V3.322a2.822,2.822,0,0,0-5.644,0V5.2",
  transform: "translate(-2.089 -0.5)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 0.75
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_754",
  "data-name": "Line 754",
  y2: 1.411,
  transform: "translate(4.233 7.23)",
  fill: "none",
  stroke: "#fff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 0.75
})));

function SvgLock(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 9.216,
    height: 32.92,
    viewBox: "0 0 9.216 32.92",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgLock);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5LjIxNiIgaGVpZ2h0PSIzMi45MiIgdmlld0JveD0iMCAwIDkuMjE2IDMyLjkyIj4KICA8ZyBpZD0iR3JvdXBfNDMwMjIiIGRhdGEtbmFtZT0iR3JvdXAgNDMwMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03ODUuNjI1IC03NTQuMjUpIj4KICAgIDxnIGlkPSJHcm91cF80Mjk0OCIgZGF0YS1uYW1lPSJHcm91cCA0Mjk0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTYpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzU5OTIiIGRhdGEtbmFtZT0iUGF0aCAzNTk5MiIgZD0iTTQwODksMjg4Ny41aDQuM3Y2LjQyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMzMxOSAtMjEzMykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2Q5ZDlkOSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzU5OTMiIGRhdGEtbmFtZT0iUGF0aCAzNTk5MyIgZD0iTTQwODksMjg5My45Mmg0LjN2LTYuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMzE5IC0yMTA3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDlkOWQ5IiBzdHJva2Utd2lkdGg9IjAuNSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzQyOTc0IiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTc0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg3ODYgNzY0KSI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI1MjciIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNTI3IiB3aWR0aD0iOC40NjYiIGhlaWdodD0iNi41ODQiIHJ4PSIxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDQuNzAzKSIgZmlsbD0iIzY2NiIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMC43NSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk5MCIgZGF0YS1uYW1lPSJQYXRoIDM1OTkwIiBkPSJNOS4xNDQsNS4yVjMuMzIyYTIuODIyLDIuODIyLDAsMCwwLTUuNjQ0LDBWNS4yIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi4wODkgLTAuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuNzUiLz4KICAgICAgPGxpbmUgaWQ9IkxpbmVfNzU0IiBkYXRhLW5hbWU9IkxpbmUgNzU0IiB5Mj0iMS40MTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuMjMzIDcuMjMpIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjc1Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/ResetSize.svg":
/*!***************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/ResetSize.svg ***!
  \***************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42935",
  "data-name": "Group 42935",
  transform: "translate(0.5 0.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42916",
  "data-name": "Group 42916",
  transform: "translate(0 0)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12497",
  "data-name": "Rectangle 12497",
  width: 20,
  height: 20,
  rx: 2,
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35970",
  "data-name": "Path 35970",
  d: "M3.269,15.269v2.757a.5.5,0,0,0,.5.5H6.53",
  transform: "translate(0.466 -2.266)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35971",
  "data-name": "Path 35971",
  d: "M6.531,3.269H3.775a.5.5,0,0,0-.5.5V6.531",
  transform: "translate(0.465 0.466)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35972",
  "data-name": "Path 35972",
  d: "M18.531,6.531V3.774a.5.5,0,0,0-.5-.5H15.27",
  transform: "translate(-2.267 0.466)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35973",
  "data-name": "Path 35973",
  d: "M15.269,18.531h2.757a.5.5,0,0,0,.5-.5V15.269",
  transform: "translate(-2.267 -2.266)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
})));

function SvgResetSize(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgResetSize);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfNDI5MzUiIGRhdGEtbmFtZT0iR3JvdXAgNDI5MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjUpIj4KICAgIDxnIGlkPSJHcm91cF80MjkxNiIgZGF0YS1uYW1lPSJHcm91cCA0MjkxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI0OTciIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNDk3IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM1OTcwIiBkYXRhLW5hbWU9IlBhdGggMzU5NzAiIGQ9Ik0zLjI2OSwxNS4yNjl2Mi43NTdhLjUuNSwwLDAsMCwuNS41SDYuNTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNDY2IC0yLjI2NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzU5NzEiIGRhdGEtbmFtZT0iUGF0aCAzNTk3MSIgZD0iTTYuNTMxLDMuMjY5SDMuNzc1YS41LjUsMCwwLDAtLjUuNVY2LjUzMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NjUgMC40NjYpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM1OTcyIiBkYXRhLW5hbWU9IlBhdGggMzU5NzIiIGQ9Ik0xOC41MzEsNi41MzFWMy43NzRhLjUuNSwwLDAsMC0uNS0uNUgxNS4yNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjY3IDAuNDY2KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk3MyIgZGF0YS1uYW1lPSJQYXRoIDM1OTczIiBkPSJNMTUuMjY5LDE4LjUzMWgyLjc1N2EuNS41LDAsMCwwLC41LS41VjE1LjI2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjY3IC0yLjI2NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/ResetSizeBlue.svg":
/*!*******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/ResetSizeBlue.svg ***!
  \*******************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42935",
  "data-name": "Group 42935",
  transform: "translate(0.5 0.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42916",
  "data-name": "Group 42916",
  transform: "translate(0 0)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12497",
  "data-name": "Rectangle 12497",
  width: 20,
  height: 20,
  rx: 2,
  fill: "none",
  stroke: "#1581ff",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35970",
  "data-name": "Path 35970",
  d: "M3.269,15.269v2.757a.5.5,0,0,0,.5.5H6.53",
  transform: "translate(0.466 -2.266)",
  fill: "none",
  stroke: "#1581ff",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35971",
  "data-name": "Path 35971",
  d: "M6.531,3.269H3.775a.5.5,0,0,0-.5.5V6.531",
  transform: "translate(0.465 0.466)",
  fill: "none",
  stroke: "#1581ff",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35972",
  "data-name": "Path 35972",
  d: "M18.531,6.531V3.774a.5.5,0,0,0-.5-.5H15.27",
  transform: "translate(-2.267 0.466)",
  fill: "none",
  stroke: "#1581ff",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35973",
  "data-name": "Path 35973",
  d: "M15.269,18.531h2.757a.5.5,0,0,0,.5-.5V15.269",
  transform: "translate(-2.267 -2.266)",
  fill: "none",
  stroke: "#1581ff",
  strokeMiterlimit: 10,
  strokeWidth: 1
})));

function SvgResetSizeBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 21,
    height: 21,
    viewBox: "0 0 21 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgResetSizeBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgdmlld0JveD0iMCAwIDIxIDIxIj4KICA8ZyBpZD0iR3JvdXBfNDI5MzUiIGRhdGEtbmFtZT0iR3JvdXAgNDI5MzUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjUpIj4KICAgIDxnIGlkPSJHcm91cF80MjkxNiIgZGF0YS1uYW1lPSJHcm91cCA0MjkxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI0OTciIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNDk3IiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHJ4PSIyIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM1OTcwIiBkYXRhLW5hbWU9IlBhdGggMzU5NzAiIGQ9Ik0zLjI2OSwxNS4yNjl2Mi43NTdhLjUuNSwwLDAsMCwuNS41SDYuNTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNDY2IC0yLjI2NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzU5NzEiIGRhdGEtbmFtZT0iUGF0aCAzNTk3MSIgZD0iTTYuNTMxLDMuMjY5SDMuNzc1YS41LjUsMCwwLDAtLjUuNVY2LjUzMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC40NjUgMC40NjYpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM1OTcyIiBkYXRhLW5hbWU9IlBhdGggMzU5NzIiIGQ9Ik0xOC41MzEsNi41MzFWMy43NzRhLjUuNSwwLDAsMC0uNS0uNUgxNS4yNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjY3IDAuNDY2KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk3MyIgZGF0YS1uYW1lPSJQYXRoIDM1OTczIiBkPSJNMTUuMjY5LDE4LjUzMWgyLjc1N2EuNS41LDAsMCwwLC41LS41VjE1LjI2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMjY3IC0yLjI2NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/RotateRight.svg":
/*!*****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/RotateRight.svg ***!
  \*****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42937",
  "data-name": "Group 42937",
  transform: "translate(-1040.882 -745.882)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12520",
  "data-name": "Rectangle 12520",
  d: "M3.192,0h7.172a3.191,3.191,0,0,1,3.191,3.191v7.173a3.191,3.191,0,0,1-3.191,3.191H3.191A3.191,3.191,0,0,1,0,10.364V3.192A3.192,3.192,0,0,1,3.192,0Z",
  transform: "translate(1045.72 752.617)",
  fill: "none",
  stroke: "#707070",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35986",
  "data-name": "Path 35986",
  d: "M1.351,13.036a7.05,7.05,0,0,1,10.139-9.2",
  transform: "translate(1040.882 745.381)",
  fill: "none",
  stroke: "#707070",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35987",
  "data-name": "Path 35987",
  d: "M14.037.5V3.753H10.784",
  transform: "translate(1038.46 745.882)",
  fill: "none",
  stroke: "#707070",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}));

function SvgRotateRight(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18.893,
    height: 20.79,
    viewBox: "0 0 18.893 20.79",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgRotateRight);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC44OTMiIGhlaWdodD0iMjAuNzkiIHZpZXdCb3g9IjAgMCAxOC44OTMgMjAuNzkiPgogIDxnIGlkPSJHcm91cF80MjkzNyIgZGF0YS1uYW1lPSJHcm91cCA0MjkzNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNDAuODgyIC03NDUuODgyKSI+CiAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNTIwIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUyMCIgZD0iTTMuMTkyLDBoNy4xNzJhMy4xOTEsMy4xOTEsMCwwLDEsMy4xOTEsMy4xOTF2Ny4xNzNhMy4xOTEsMy4xOTEsMCwwLDEtMy4xOTEsMy4xOTFIMy4xOTFBMy4xOTEsMy4xOTEsMCwwLDEsMCwxMC4zNjRWMy4xOTJBMy4xOTIsMy4xOTIsMCwwLDEsMy4xOTIsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDUuNzIgNzUyLjYxNykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzcwNzA3MCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzM1OTg2IiBkYXRhLW5hbWU9IlBhdGggMzU5ODYiIGQ9Ik0xLjM1MSwxMy4wMzZhNy4wNSw3LjA1LDAsMCwxLDEwLjEzOS05LjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDAuODgyIDc0NS4zODEpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTk4NyIgZGF0YS1uYW1lPSJQYXRoIDM1OTg3IiBkPSJNMTQuMDM3LjVWMy43NTNIMTAuNzg0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDM4LjQ2IDc0NS44ODIpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/RotateRightBlue.svg":
/*!*********************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/RotateRightBlue.svg ***!
  \*********************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42937",
  "data-name": "Group 42937",
  transform: "translate(-1040.882 -745.882)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12520",
  "data-name": "Rectangle 12520",
  d: "M3.192,0h7.172a3.191,3.191,0,0,1,3.191,3.191v7.173a3.191,3.191,0,0,1-3.191,3.191H3.191A3.191,3.191,0,0,1,0,10.364V3.192A3.192,3.192,0,0,1,3.192,0Z",
  transform: "translate(1045.72 752.617)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35986",
  "data-name": "Path 35986",
  d: "M1.351,13.036a7.05,7.05,0,0,1,10.139-9.2",
  transform: "translate(1040.882 745.381)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35987",
  "data-name": "Path 35987",
  d: "M14.037.5V3.753H10.784",
  transform: "translate(1038.46 745.882)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}));

function SvgRotateRightBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 18.893,
    height: 20.79,
    viewBox: "0 0 18.893 20.79",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgRotateRightBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOC44OTMiIGhlaWdodD0iMjAuNzkiIHZpZXdCb3g9IjAgMCAxOC44OTMgMjAuNzkiPgogIDxnIGlkPSJHcm91cF80MjkzNyIgZGF0YS1uYW1lPSJHcm91cCA0MjkzNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEwNDAuODgyIC03NDUuODgyKSI+CiAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNTIwIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUyMCIgZD0iTTMuMTkyLDBoNy4xNzJhMy4xOTEsMy4xOTEsMCwwLDEsMy4xOTEsMy4xOTF2Ny4xNzNhMy4xOTEsMy4xOTEsMCwwLDEtMy4xOTEsMy4xOTFIMy4xOTFBMy4xOTEsMy4xOTEsMCwwLDEsMCwxMC4zNjRWMy4xOTJBMy4xOTIsMy4xOTIsMCwwLDEsMy4xOTIsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDUuNzIgNzUyLjYxNykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzM1OTg2IiBkYXRhLW5hbWU9IlBhdGggMzU5ODYiIGQ9Ik0xLjM1MSwxMy4wMzZhNy4wNSw3LjA1LDAsMCwxLDEwLjEzOS05LjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEwNDAuODgyIDc0NS4zODEpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cGF0aCBpZD0iUGF0aF8zNTk4NyIgZGF0YS1uYW1lPSJQYXRoIDM1OTg3IiBkPSJNMTQuMDM3LjVWMy43NTNIMTAuNzg0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMDM4LjQ2IDc0NS44ODIpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/ToolBarHolder.svg":
/*!*******************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/ToolBarHolder.svg ***!
  \*******************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42938",
  "data-name": "Group 42938",
  transform: "translate(-767 -678)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5111",
  "data-name": "Ellipse 5111",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(767 678)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5119",
  "data-name": "Ellipse 5119",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(767 690)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5114",
  "data-name": "Ellipse 5114",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(767 684)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5116",
  "data-name": "Ellipse 5116",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(767 684)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5118",
  "data-name": "Ellipse 5118",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(767 696)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5112",
  "data-name": "Ellipse 5112",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(772 678)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5120",
  "data-name": "Ellipse 5120",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(772 690)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5113",
  "data-name": "Ellipse 5113",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(772 684)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5115",
  "data-name": "Ellipse 5115",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(772 684)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_5117",
  "data-name": "Ellipse 5117",
  cx: 1.5,
  cy: 1.5,
  r: 1.5,
  transform: "translate(772 696)",
  fill: "#1581ff"
}));

function SvgToolBarHolder(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 8,
    height: 21,
    viewBox: "0 0 8 21",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgToolBarHolder);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjIxIiB2aWV3Qm94PSIwIDAgOCAyMSI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTM4IiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTM4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNzY3IC02NzgpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExMSIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTEiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzY3IDY3OCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExOSIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTkiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzY3IDY5MCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExNCIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTQiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzY3IDY4NCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExNiIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTYiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzY3IDY4NCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExOCIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTgiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzY3IDY5NikiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExMiIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTIiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcyIDY3OCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTEyMCIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMjAiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcyIDY5MCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExMyIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTMiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcyIDY4NCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExNSIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTUiIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcyIDY4NCkiIGZpbGw9IiMxNTgxZmYiLz4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfNTExNyIgZGF0YS1uYW1lPSJFbGxpcHNlIDUxMTciIGN4PSIxLjUiIGN5PSIxLjUiIHI9IjEuNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzcyIDY5NikiIGZpbGw9IiMxNTgxZmYiLz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/Unlock.svg":
/*!************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/Unlock.svg ***!
  \************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43023",
  "data-name": "Group 43023",
  transform: "translate(-785.625 -754.25)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42947",
  "data-name": "Group 42947",
  transform: "translate(786 764)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12529",
  "data-name": "Rectangle 12529",
  width: 8.466,
  height: 6.584,
  rx: 1,
  transform: "translate(0 4.703)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 0.75
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35991",
  "data-name": "Path 35991",
  d: "M8.958,2.312A2.725,2.725,0,0,0,6.322.5,2.822,2.822,0,0,0,3.5,3.322V5.2",
  transform: "translate(-2.089 -0.5)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 0.75
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_755",
  "data-name": "Line 755",
  y2: 1.411,
  transform: "translate(4.233 7.23)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 0.75
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42948",
  "data-name": "Group 42948",
  transform: "translate(16)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35992",
  "data-name": "Path 35992",
  d: "M4089,2887.5h4.3v6.42",
  transform: "translate(-3319 -2133)",
  fill: "none",
  stroke: "#d9d9d9",
  strokeWidth: 0.5
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35993",
  "data-name": "Path 35993",
  d: "M4089,2893.92h4.3v-6.42",
  transform: "translate(-3319 -2107)",
  fill: "none",
  stroke: "#d9d9d9",
  strokeWidth: 0.5
})));

function SvgUnlock(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 9.216,
    height: 32.92,
    viewBox: "0 0 9.216 32.92",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgUnlock);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5LjIxNiIgaGVpZ2h0PSIzMi45MiIgdmlld0JveD0iMCAwIDkuMjE2IDMyLjkyIj4KICA8ZyBpZD0iR3JvdXBfNDMwMjMiIGRhdGEtbmFtZT0iR3JvdXAgNDMwMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC03ODUuNjI1IC03NTQuMjUpIj4KICAgIDxnIGlkPSJHcm91cF80Mjk0NyIgZGF0YS1uYW1lPSJHcm91cCA0Mjk0NyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNzg2IDc2NCkiPgogICAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTI5IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUyOSIgd2lkdGg9IjguNDY2IiBoZWlnaHQ9IjYuNTg0IiByeD0iMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCA0LjcwMykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjAuNzUiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzU5OTEiIGRhdGEtbmFtZT0iUGF0aCAzNTk5MSIgZD0iTTguOTU4LDIuMzEyQTIuNzI1LDIuNzI1LDAsMCwwLDYuMzIyLjUsMi44MjIsMi44MjIsMCwwLDAsMy41LDMuMzIyVjUuMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuMDg5IC0wLjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIwLjc1Ii8+CiAgICAgIDxsaW5lIGlkPSJMaW5lXzc1NSIgZGF0YS1uYW1lPSJMaW5lIDc1NSIgeTI9IjEuNDExIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjIzMyA3LjIzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMC43NSIvPgogICAgPC9nPgogICAgPGcgaWQ9Ikdyb3VwXzQyOTQ4IiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTQ4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNikiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk5MiIgZGF0YS1uYW1lPSJQYXRoIDM1OTkyIiBkPSJNNDA4OSwyODg3LjVoNC4zdjYuNDIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMzE5IC0yMTMzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZDlkOWQ5IiBzdHJva2Utd2lkdGg9IjAuNSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk5MyIgZGF0YS1uYW1lPSJQYXRoIDM1OTkzIiBkPSJNNDA4OSwyODkzLjkyaDQuM3YtNi40MiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMzMTkgLTIxMDcpIiBmaWxsPSJub25lIiBzdHJva2U9IiNkOWQ5ZDkiIHN0cm9rZS13aWR0aD0iMC41Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/ZoomInIcon.svg":
/*!****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/ZoomInIcon.svg ***!
  \****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42922",
  "data-name": "Group 42922",
  transform: "translate(0 12.005) rotate(-45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Ellipse_277",
  "data-name": "Ellipse 277",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 8.488,
  stroke: "none"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 7.988,
  fill: "none"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_722",
  "data-name": "Line 722",
  y2: 5.493,
  transform: "translate(8.368 16.676)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42748",
  "data-name": "Group 42748",
  transform: "translate(5.9 5.779) rotate(45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_723",
  "data-name": "Line 723",
  x2: 7.322,
  transform: "translate(0 0)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgZoomInIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24.009,
    height: 24.009,
    viewBox: "0 0 24.009 24.009",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgZoomInIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wMDkiIGhlaWdodD0iMjQuMDA5IiB2aWV3Qm94PSIwIDAgMjQuMDA5IDI0LjAwOSI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTIyIiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyLjAwNSkgcm90YXRlKC00NSkiPgogICAgPGcgaWQ9IkVsbGlwc2VfMjc3IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjc3IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgPGNpcmNsZSBjeD0iOC40ODgiIGN5PSI4LjQ4OCIgcj0iOC40ODgiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSI4LjQ4OCIgY3k9IjguNDg4IiByPSI3Ljk4OCIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGxpbmUgaWQ9IkxpbmVfNzIyIiBkYXRhLW5hbWU9IkxpbmUgNzIyIiB5Mj0iNS40OTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMzY4IDE2LjY3NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxnIGlkPSJHcm91cF80Mjc0OCIgZGF0YS1uYW1lPSJHcm91cCA0Mjc0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS45IDUuNzc5KSByb3RhdGUoNDUpIj4KICAgICAgPGxpbmUgaWQ9IkxpbmVfNzIzIiBkYXRhLW5hbWU9IkxpbmUgNzIzIiB4Mj0iNy4zMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/SourceImageToolBar/icons/ZoomOutIcon.svg":
/*!*****************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/SourceImageToolBar/icons/ZoomOutIcon.svg ***!
  \*****************************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42923",
  "data-name": "Group 42923",
  transform: "translate(0 12.005) rotate(-45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Ellipse_277",
  "data-name": "Ellipse 277",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 8.488,
  stroke: "none"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 7.988,
  fill: "none"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_722",
  "data-name": "Line 722",
  y2: 5.493,
  transform: "translate(8.368 16.676)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42748",
  "data-name": "Group 42748",
  transform: "translate(8.488 3.191) rotate(45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_723",
  "data-name": "Line 723",
  x2: 7.322,
  transform: "translate(0 3.661)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_724",
  "data-name": "Line 724",
  x2: 7.322,
  transform: "translate(3.661) rotate(90)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgZoomOutIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24.009,
    height: 24.009,
    viewBox: "0 0 24.009 24.009",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgZoomOutIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wMDkiIGhlaWdodD0iMjQuMDA5IiB2aWV3Qm94PSIwIDAgMjQuMDA5IDI0LjAwOSI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTIzIiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyLjAwNSkgcm90YXRlKC00NSkiPgogICAgPGcgaWQ9IkVsbGlwc2VfMjc3IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjc3IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgPGNpcmNsZSBjeD0iOC40ODgiIGN5PSI4LjQ4OCIgcj0iOC40ODgiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSI4LjQ4OCIgY3k9IjguNDg4IiByPSI3Ljk4OCIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGxpbmUgaWQ9IkxpbmVfNzIyIiBkYXRhLW5hbWU9IkxpbmUgNzIyIiB5Mj0iNS40OTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMzY4IDE2LjY3NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxnIGlkPSJHcm91cF80Mjc0OCIgZGF0YS1uYW1lPSJHcm91cCA0Mjc0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC40ODggMy4xOTEpIHJvdGF0ZSg0NSkiPgogICAgICA8bGluZSBpZD0iTGluZV83MjMiIGRhdGEtbmFtZT0iTGluZSA3MjMiIHgyPSI3LjMyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzLjY2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPGxpbmUgaWQ9IkxpbmVfNzI0IiBkYXRhLW5hbWU9IkxpbmUgNzI0IiB4Mj0iNy4zMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNjYxKSByb3RhdGUoOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/Upload/HiddenMultipleFileInput.tsx":
/*!***********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/HiddenMultipleFileInput.tsx ***!
  \***********************************************************************************************/
/*! exports provided: HiddenMultipleFileInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HiddenMultipleFileInput", function() { return HiddenMultipleFileInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function HiddenMultipleFileInput(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    type: "file",
    multiple: true,
    style: {
      display: 'none'
    },
    ref: props.inputRef,
    onChange: event => {
      let files = event.target.files;
      let newFiles = [];

      for (let i = 0; i < files.length; i++) {
        newFiles.push(files[i]);
      }

      props.onChange(newFiles);
      event.target.value = null;
    }
  });
}

/***/ }),

/***/ "../../../libs/ui/src/Upload/NoneFileUpload.tsx":
/*!**************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/NoneFileUpload.tsx ***!
  \**************************************************************************************/
/*! exports provided: NoneFileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoneFileUpload", function() { return NoneFileUpload; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Upload_icons_UploadToCloud_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Upload/icons/UploadToCloud.svg */ "../../../libs/ui/src/Upload/icons/UploadToCloud.svg");
/* harmony import */ var _HiddenMultipleFileInput__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HiddenMultipleFileInput */ "../../../libs/ui/src/Upload/HiddenMultipleFileInput.tsx");



function NoneFileUpload(props) {
  const inputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  let style = {
    position: 'relative',
    width: 'calc(100% - 40px)',
    height: 'calc(100% - 40px)',
    userSelect: 'none'
  };
  let iconStyle = {
    display: 'flex',
    width: '100%',
    height: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column'
  };
  let borderSVGStyle = {
    width: 'calc(100%)',
    height: 'calc(100%)',
    margin: '20px',
    position: 'absolute'
  };
  let rectBorderStyle = {
    fill: 'none',
    strokeWidth: 2,
    stroke: '#707070',
    strokeDasharray: '6,6',
    backgroundColor: 'white',
    width: '100%',
    height: '100%'
  };
  let uploadFileCloudIconStyle = {
    display: 'block',
    zIndex: 4,
    cursor: 'pointer'
  };
  let textStyle = {
    fontSize: '18px',
    color: '#333333',
    margin: '18px',
    zIndex: 20
  };

  function onFileAdd(event) {
    event.preventDefault();
    inputRef.current.click();
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", {
    style: borderSVGStyle,
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("rect", {
    style: rectBorderStyle,
    rx: "6"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: iconStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _Upload_icons_UploadToCloud_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    style: uploadFileCloudIconStyle,
    onClick: onFileAdd
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: textStyle
  }, "\u5C07\u6A94\u6848\u62D6\u66F3\u81F3\u6B64\u8655\uFF0C\u6216", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: '',
    onClick: onFileAdd
  }, "\u9EDE\u64CA\u4E0A\u50B3")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HiddenMultipleFileInput__WEBPACK_IMPORTED_MODULE_2__["HiddenMultipleFileInput"], {
    inputRef: inputRef,
    onChange: props.register
  })));
}

/***/ }),

/***/ "../../../libs/ui/src/Upload/UploadFileRegistration.tsx":
/*!**********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/UploadFileRegistration.tsx ***!
  \**********************************************************************************************/
/*! exports provided: UploadFileRegistration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileRegistration", function() { return UploadFileRegistration; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NoneFileUpload__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NoneFileUpload */ "../../../libs/ui/src/Upload/NoneFileUpload.tsx");
/* harmony import */ var _UploadFileStatusRow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UploadFileStatusRow */ "../../../libs/ui/src/Upload/UploadFileStatusRow.tsx");
/* harmony import */ var _UploadNewFileButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./UploadNewFileButton */ "../../../libs/ui/src/Upload/UploadNewFileButton.tsx");




function UploadFileRegistration(props) {
  let [filesToUpload, setFilesToUpload] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'white',
      width: props.width,
      height: props.height,
      borderRadius: 10,
      boxShadow: '0px 2px 3px #00000029'
    }
  }, filesToUpload.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoneFileUpload__WEBPACK_IMPORTED_MODULE_1__["NoneFileUpload"], {
    register: addFile
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingLeft: 28,
      paddingTop: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadNewFileButton__WEBPACK_IMPORTED_MODULE_3__["UploadNewFileButton"], {
    onFilesSelected: addFile
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 400,
      overflow: 'auto'
    }
  }, filesToUpload.map((file, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_UploadFileStatusRow__WEBPACK_IMPORTED_MODULE_2__["UploadFileStatusRow"], {
      key: file.name,
      status: "REGISTERED",
      progress: 0,
      fileName: file.name,
      width: "1058px",
      onCancel: () => deleteFile(index)
    });
  }))));

  function addFile(newFiles) {
    setFilesToUpload(currentFiles => [...currentFiles, ...newFiles]);
  }

  function deleteFile(indexToDelete) {
    setFilesToUpload(currentFiles => {
      let newFiles = [];
      currentFiles.forEach((file, index) => {
        if (index !== indexToDelete) newFiles.push(file);
      });
      return newFiles;
    });
  }
}

/***/ }),

/***/ "../../../libs/ui/src/Upload/UploadFileStatuesTable.tsx":
/*!**********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/UploadFileStatuesTable.tsx ***!
  \**********************************************************************************************/
/*! exports provided: UploadFileStatusesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatusesTable", function() { return UploadFileStatusesTable; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .. */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _NoneFileUpload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./NoneFileUpload */ "../../../libs/ui/src/Upload/NoneFileUpload.tsx");



function UploadFileStatusesTable(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      backgroundColor: 'white',
      width: props.width,
      height: props.height,
      borderRadius: 10,
      boxShadow: '0px 2px 3px #00000029'
    }
  }, props.files.length === 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NoneFileUpload__WEBPACK_IMPORTED_MODULE_2__["NoneFileUpload"], {
    register: props.addFiles
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      paddingLeft: 28,
      paddingTop: 19
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__["UploadNewFileButton"], {
    onFilesSelected: props.addFiles
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: 400,
      overflow: 'auto'
    }
  }, props.files.map((file, index) => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(___WEBPACK_IMPORTED_MODULE_1__["UploadFileStatusRow"], {
      key: file.fileObject.name,
      status: file.status,
      progress: file.progress,
      fileName: file.fileObject.name,
      width: "1058px",
      onCancel: () => file.onDelete()
    });
  }))));
}

/***/ }),

/***/ "../../../libs/ui/src/Upload/UploadFileStatusRow.tsx":
/*!*******************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/UploadFileStatusRow.tsx ***!
  \*******************************************************************************************/
/*! exports provided: UploadFileStatusRow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatusRow", function() { return UploadFileStatusRow; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/buttons */ "../../../libs/ui/src/lib/buttons.tsx");
/* harmony import */ var _icons_Redo_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/Redo.svg */ "../../../libs/ui/src/Upload/icons/Redo.svg");
/* harmony import */ var _icons_RedoBlue_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/RedoBlue.svg */ "../../../libs/ui/src/Upload/icons/RedoBlue.svg");
/* harmony import */ var _icons_Close_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/Close.svg */ "../../../libs/ui/src/Upload/icons/Close.svg");
/* harmony import */ var _icons_CloseBlue_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/CloseBlue.svg */ "../../../libs/ui/src/Upload/icons/CloseBlue.svg");






function UploadFileStatusRow(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      borderBottom: '1px solid #D9D9D9',
      paddingTop: 20,
      paddingBottom: 15,
      width: props.width,
      position: 'relative'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: 16,
      color: '#333333',
      width: `calc(${props.width} - 400px)`,
      display: 'inline-block',
      whiteSpace: 'nowrap'
    }
  }, props.fileName), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ProgressionBar, {
    progress: props.progress,
    width: "130px",
    style: {
      display: 'inline-block',
      marginLeft: 83,
      marginBottom: 2
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      fontSize: 16,
      marginLeft: 25,
      width: 66,
      textAlign: 'center',
      color: props.status === "CANCELED" || props.status === "FAILED" ? '#D34242' : '#666666',
      display: 'inline-block'
    }
  }, props.status === "CANCELED" ? "取消上傳" : props.status === "FAILED" ? "上傳失敗" : props.status === "UPLOADING" ? `${props.progress}%` : props.status === "FINISHED" ? "上傳成功" : ""), props.status === "CANCELED" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_1__["HoverableButton"], {
    src: _icons_Redo_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    srcOnHover: _icons_RedoBlue_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    style: {
      marginBottom: -6,
      marginLeft: 18
    },
    onClick: props.onResume
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'inline-block',
      width: 42
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_lib_buttons__WEBPACK_IMPORTED_MODULE_1__["HoverableButton"], {
    src: _icons_Close_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    srcOnHover: _icons_CloseBlue_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    style: {
      marginBottom: -6,
      marginLeft: 7
    },
    onClick: props.onCancel
  }));
}

function ProgressionBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: props.width,
      height: 6,
      backgroundColor: props.progress ? '#F8F8F8' : 'inherit',
      borderRadius: 4
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: `calc(${props.width} * (${props.progress} / 100))`,
      height: 6,
      backgroundColor: '#1581FF',
      borderRadius: 4
    }
  })));
}

/***/ }),

/***/ "../../../libs/ui/src/Upload/UploadNewFileButton.tsx":
/*!*******************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/UploadNewFileButton.tsx ***!
  \*******************************************************************************************/
/*! exports provided: UploadNewFileButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadNewFileButton", function() { return UploadNewFileButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HiddenMultipleFileInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HiddenMultipleFileInput */ "../../../libs/ui/src/Upload/HiddenMultipleFileInput.tsx");
/* harmony import */ var _icons_PlusBlue_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/PlusBlue.svg */ "../../../libs/ui/src/Upload/icons/PlusBlue.svg");



function UploadNewFileButton(props) {
  let hiddenInputRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: 134,
      height: 40,
      borderRadius: 20,
      backgroundColor: '#D0E6FF',
      cursor: 'pointer'
    },
    onClick: () => hiddenInputRef.current.click()
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      margin: 8,
      backgroundColor: 'white',
      width: 24,
      height: 24,
      borderRadius: '50% 50%',
      display: 'inline-block'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    style: {
      marginLeft: 4,
      marginBottom: 1
    },
    src: _icons_PlusBlue_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "inline-block",
      marginLeft: 2,
      position: 'relative',
      bottom: 2,
      fontSize: 18,
      color: '#1581ff',
      fontWeight: 'bold'
    }
  }, "\u65B0\u589E\u6A94\u6848"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_HiddenMultipleFileInput__WEBPACK_IMPORTED_MODULE_1__["HiddenMultipleFileInput"], {
    inputRef: hiddenInputRef,
    onChange: props.onFilesSelected
  }));
}

/***/ }),

/***/ "../../../libs/ui/src/Upload/icons/Close.svg":
/*!***********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/icons/Close.svg ***!
  \***********************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42610",
  "data-name": "Group 42610",
  transform: "translate(-0.08)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_269",
  "data-name": "Ellipse 269",
  cx: 12,
  cy: 12,
  r: 12,
  transform: "translate(0.08)",
  fill: "#f8f8f8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42606",
  "data-name": "Group 42606",
  transform: "translate(12.396 2.809) rotate(45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_651",
  "data-name": "Line 651",
  x2: 13.558,
  transform: "translate(0 6.779)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_652",
  "data-name": "Line 652",
  x2: 13.558,
  transform: "translate(6.779) rotate(90)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgClose(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgClose);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNDI2MTAiIGRhdGEtbmFtZT0iR3JvdXAgNDI2MTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjA4KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzI2OSIgZGF0YS1uYW1lPSJFbGxpcHNlIDI2OSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4KSIgZmlsbD0iI2Y4ZjhmOCIvPgogICAgPGcgaWQ9Ikdyb3VwXzQyNjA2IiBkYXRhLW5hbWU9Ikdyb3VwIDQyNjA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4zOTYgMi44MDkpIHJvdGF0ZSg0NSkiPgogICAgICA8bGluZSBpZD0iTGluZV82NTEiIGRhdGEtbmFtZT0iTGluZSA2NTEiIHgyPSIxMy41NTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNi43NzkpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxsaW5lIGlkPSJMaW5lXzY1MiIgZGF0YS1uYW1lPSJMaW5lIDY1MiIgeDI9IjEzLjU1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi43NzkpIHJvdGF0ZSg5MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/Upload/icons/CloseBlue.svg":
/*!***************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/icons/CloseBlue.svg ***!
  \***************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42611",
  "data-name": "Group 42611",
  transform: "translate(-0.08)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_269",
  "data-name": "Ellipse 269",
  cx: 12,
  cy: 12,
  r: 12,
  transform: "translate(0.08)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42606",
  "data-name": "Group 42606",
  transform: "translate(12.396 2.809) rotate(45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_651",
  "data-name": "Line 651",
  x2: 13.558,
  transform: "translate(0 6.779)",
  fill: "none",
  stroke: "#fff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_652",
  "data-name": "Line 652",
  x2: 13.558,
  transform: "translate(6.779) rotate(90)",
  fill: "none",
  stroke: "#fff",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgCloseBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgCloseBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNDI2MTEiIGRhdGEtbmFtZT0iR3JvdXAgNDI2MTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0wLjA4KSI+CiAgICA8Y2lyY2xlIGlkPSJFbGxpcHNlXzI2OSIgZGF0YS1uYW1lPSJFbGxpcHNlIDI2OSIgY3g9IjEyIiBjeT0iMTIiIHI9IjEyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjA4KSIgZmlsbD0iIzE1ODFmZiIvPgogICAgPGcgaWQ9Ikdyb3VwXzQyNjA2IiBkYXRhLW5hbWU9Ikdyb3VwIDQyNjA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMi4zOTYgMi44MDkpIHJvdGF0ZSg0NSkiPgogICAgICA8bGluZSBpZD0iTGluZV82NTEiIGRhdGEtbmFtZT0iTGluZSA2NTEiIHgyPSIxMy41NTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNi43NzkpIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxsaW5lIGlkPSJMaW5lXzY1MiIgZGF0YS1uYW1lPSJMaW5lIDY1MiIgeDI9IjEzLjU1OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNi43NzkpIHJvdGF0ZSg5MCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "../../../libs/ui/src/Upload/icons/PlusBlue.svg":
/*!**************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/icons/PlusBlue.svg ***!
  \**************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42606",
  "data-name": "Group 42606",
  transform: "translate(0.5 0.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_651",
  "data-name": "Line 651",
  x2: 13.558,
  transform: "translate(0 6.779)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_652",
  "data-name": "Line 652",
  x2: 13.558,
  transform: "translate(6.779) rotate(90)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}));

function SvgPlusBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 14.558,
    height: 14.558,
    viewBox: "0 0 14.558 14.558",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgPlusBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNC41NTgiIGhlaWdodD0iMTQuNTU4IiB2aWV3Qm94PSIwIDAgMTQuNTU4IDE0LjU1OCI+CiAgPGcgaWQ9Ikdyb3VwXzQyNjA2IiBkYXRhLW5hbWU9Ikdyb3VwIDQyNjA2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUgMC41KSI+CiAgICA8bGluZSBpZD0iTGluZV82NTEiIGRhdGEtbmFtZT0iTGluZSA2NTEiIHgyPSIxMy41NTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgNi43NzkpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8bGluZSBpZD0iTGluZV82NTIiIGRhdGEtbmFtZT0iTGluZSA2NTIiIHgyPSIxMy41NTgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDYuNzc5KSByb3RhdGUoOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "../../../libs/ui/src/Upload/icons/Redo.svg":
/*!**********************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/icons/Redo.svg ***!
  \**********************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42830",
  "data-name": "Group 42830",
  transform: "translate(-1416 -554)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_269",
  "data-name": "Ellipse 269",
  cx: 12,
  cy: 12,
  r: 12,
  transform: "translate(1416 554)",
  fill: "#f8f8f8"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42832",
  "data-name": "Group 42832",
  transform: "translate(1421.5 559.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42833",
  "data-name": "Group 42833"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_2665",
  "data-name": "Path 2665",
  d: "M8.921.921A6.179,6.179,0,1,1,6.675.5",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_2666",
  "data-name": "Path 2666",
  d: "M8.892,4.736V.89h3.846",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}))));

function SvgRedo(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgRedo);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNDI4MzAiIGRhdGEtbmFtZT0iR3JvdXAgNDI4MzAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDE2IC01NTQpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMjY5IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjY5IiBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MTYgNTU0KSIgZmlsbD0iI2Y4ZjhmOCIvPgogICAgPGcgaWQ9Ikdyb3VwXzQyODMyIiBkYXRhLW5hbWU9Ikdyb3VwIDQyODMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDIxLjUgNTU5LjUpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzQyODMzIiBkYXRhLW5hbWU9Ikdyb3VwIDQyODMzIj4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yNjY1IiBkYXRhLW5hbWU9IlBhdGggMjY2NSIgZD0iTTguOTIxLjkyMUE2LjE3OSw2LjE3OSwwLDEsMSw2LjY3NS41IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjY2NiIgZGF0YS1uYW1lPSJQYXRoIDI2NjYiIGQ9Ik04Ljg5Miw0LjczNlYuODloMy44NDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "../../../libs/ui/src/Upload/icons/RedoBlue.svg":
/*!**************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/icons/RedoBlue.svg ***!
  \**************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43028",
  "data-name": "Group 43028",
  transform: "translate(-1416 -554)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  id: "Ellipse_269",
  "data-name": "Ellipse 269",
  cx: 12,
  cy: 12,
  r: 12,
  transform: "translate(1416 554)",
  fill: "#1581ff"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42832",
  "data-name": "Group 42832",
  transform: "translate(1421.5 559.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42833",
  "data-name": "Group 42833"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_2665",
  "data-name": "Path 2665",
  d: "M8.921.921A6.179,6.179,0,1,1,6.675.5",
  fill: "none",
  stroke: "#fff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_2666",
  "data-name": "Path 2666",
  d: "M8.892,4.736V.89h3.846",
  fill: "none",
  stroke: "#fff",
  strokeLinecap: "round",
  strokeWidth: 1
}))));

function SvgRedoBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgRedoBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8ZyBpZD0iR3JvdXBfNDMwMjgiIGRhdGEtbmFtZT0iR3JvdXAgNDMwMjgiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xNDE2IC01NTQpIj4KICAgIDxjaXJjbGUgaWQ9IkVsbGlwc2VfMjY5IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjY5IiBjeD0iMTIiIGN5PSIxMiIgcj0iMTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0MTYgNTU0KSIgZmlsbD0iIzE1ODFmZiIvPgogICAgPGcgaWQ9Ikdyb3VwXzQyODMyIiBkYXRhLW5hbWU9Ikdyb3VwIDQyODMyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDIxLjUgNTU5LjUpIj4KICAgICAgPGcgaWQ9Ikdyb3VwXzQyODMzIiBkYXRhLW5hbWU9Ikdyb3VwIDQyODMzIj4KICAgICAgICA8cGF0aCBpZD0iUGF0aF8yNjY1IiBkYXRhLW5hbWU9IlBhdGggMjY2NSIgZD0iTTguOTIxLjkyMUE2LjE3OSw2LjE3OSwwLDEsMSw2LjY3NS41IiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHBhdGggaWQ9IlBhdGhfMjY2NiIgZGF0YS1uYW1lPSJQYXRoIDI2NjYiIGQ9Ik04Ljg5Miw0LjczNlYuODloMy44NDYiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPC9nPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "../../../libs/ui/src/Upload/icons/UploadToCloud.svg":
/*!*******************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/Upload/icons/UploadToCloud.svg ***!
  \*******************************************************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42601",
  "data-name": "Group 42601",
  transform: "translate(0.5 0.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_341",
  "data-name": "Path 341",
  d: "M81.615,170.5H41.237a41.236,41.236,0,1,1,31.615-67.712,2.54,2.54,0,1,1-3.893,3.263A36.157,36.157,0,1,0,41.237,165.42H81.615a2.54,2.54,0,0,1,0,5.08",
  transform: "translate(0 -38.341)",
  fill: "#d9d9d9",
  stroke: "#d9d9d9",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_342",
  "data-name": "Path 342",
  d: "M183.379,132.16H147.006a2.54,2.54,0,1,1,0-5.08h36.373c21.783,0,39.5-18.685,39.5-41.652,0-21.67-16.042-39.907-36.52-41.521l-1.627-.128-.559-1.532A56.776,56.776,0,0,0,131.016,5.08a56.1,56.1,0,0,0-33.85,11.239A57.055,57.055,0,0,0,76.982,44.833a2.54,2.54,0,0,1-4.851-1.509A62.186,62.186,0,0,1,94.124,12.251,61.14,61.14,0,0,1,131.016,0a61.883,61.883,0,0,1,57.361,39,43.736,43.736,0,0,1,27.665,14.627,47.8,47.8,0,0,1,11.921,31.8c0,25.768-20,46.732-44.584,46.732",
  transform: "translate(-31.367)",
  fill: "#d9d9d9",
  stroke: "#d9d9d9",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_343",
  "data-name": "Path 343",
  d: "M137.723,174.41a2.54,2.54,0,0,1-1.8-4.336l19.728-19.728a2.539,2.539,0,0,1,3.592,0l19.728,19.728a2.54,2.54,0,1,1-3.592,3.592l-17.932-17.932-17.931,17.932a2.532,2.532,0,0,1-1.8.744",
  transform: "translate(-58.88 -65.16)",
  fill: "#d9d9d9",
  stroke: "#d9d9d9",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12272",
  "data-name": "Rectangle 12272",
  width: 5.08,
  height: 68.687,
  transform: "translate(96.031 86.982)",
  fill: "#d9d9d9",
  stroke: "#d9d9d9",
  strokeWidth: 1
}));

function SvgUploadToCloud(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 197.597,
    height: 156.669,
    viewBox: "0 0 197.597 156.669",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgUploadToCloud);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOTcuNTk3IiBoZWlnaHQ9IjE1Ni42NjkiIHZpZXdCb3g9IjAgMCAxOTcuNTk3IDE1Ni42NjkiPgogIDxnIGlkPSJHcm91cF80MjYwMSIgZGF0YS1uYW1lPSJHcm91cCA0MjYwMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC41IDAuNSkiPgogICAgPHBhdGggaWQ9IlBhdGhfMzQxIiBkYXRhLW5hbWU9IlBhdGggMzQxIiBkPSJNODEuNjE1LDE3MC41SDQxLjIzN2E0MS4yMzYsNDEuMjM2LDAsMSwxLDMxLjYxNS02Ny43MTIsMi41NCwyLjU0LDAsMSwxLTMuODkzLDMuMjYzQTM2LjE1NywzNi4xNTcsMCwxLDAsNDEuMjM3LDE2NS40Mkg4MS42MTVhMi41NCwyLjU0LDAsMCwxLDAsNS4wOCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAtMzguMzQxKSIgZmlsbD0iI2Q5ZDlkOSIgc3Ryb2tlPSIjZDlkOWQ5IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxwYXRoIGlkPSJQYXRoXzM0MiIgZGF0YS1uYW1lPSJQYXRoIDM0MiIgZD0iTTE4My4zNzksMTMyLjE2SDE0Ny4wMDZhMi41NCwyLjU0LDAsMSwxLDAtNS4wOGgzNi4zNzNjMjEuNzgzLDAsMzkuNS0xOC42ODUsMzkuNS00MS42NTIsMC0yMS42Ny0xNi4wNDItMzkuOTA3LTM2LjUyLTQxLjUyMWwtMS42MjctLjEyOC0uNTU5LTEuNTMyQTU2Ljc3Niw1Ni43NzYsMCwwLDAsMTMxLjAxNiw1LjA4YTU2LjEsNTYuMSwwLDAsMC0zMy44NSwxMS4yMzlBNTcuMDU1LDU3LjA1NSwwLDAsMCw3Ni45ODIsNDQuODMzYTIuNTQsMi41NCwwLDAsMS00Ljg1MS0xLjUwOUE2Mi4xODYsNjIuMTg2LDAsMCwxLDk0LjEyNCwxMi4yNTEsNjEuMTQsNjEuMTQsMCwwLDEsMTMxLjAxNiwwYTYxLjg4Myw2MS44ODMsMCwwLDEsNTcuMzYxLDM5LDQzLjczNiw0My43MzYsMCwwLDEsMjcuNjY1LDE0LjYyNyw0Ny44LDQ3LjgsMCwwLDEsMTEuOTIxLDMxLjhjMCwyNS43NjgtMjAsNDYuNzMyLTQ0LjU4NCw0Ni43MzIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0zMS4zNjcpIiBmaWxsPSIjZDlkOWQ5IiBzdHJva2U9IiNkOWQ5ZDkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMzQzIiBkYXRhLW5hbWU9IlBhdGggMzQzIiBkPSJNMTM3LjcyMywxNzQuNDFhMi41NCwyLjU0LDAsMCwxLTEuOC00LjMzNmwxOS43MjgtMTkuNzI4YTIuNTM5LDIuNTM5LDAsMCwxLDMuNTkyLDBsMTkuNzI4LDE5LjcyOGEyLjU0LDIuNTQsMCwxLDEtMy41OTIsMy41OTJsLTE3LjkzMi0xNy45MzItMTcuOTMxLDE3LjkzMmEyLjUzMiwyLjUzMiwwLDAsMS0xLjguNzQ0IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNTguODggLTY1LjE2KSIgZmlsbD0iI2Q5ZDlkOSIgc3Ryb2tlPSIjZDlkOWQ5IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTIyNzIiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyMjcyIiB3aWR0aD0iNS4wOCIgaGVpZ2h0PSI2OC42ODciIHRyYW5zZm9ybT0idHJhbnNsYXRlKDk2LjAzMSA4Ni45ODIpIiBmaWxsPSIjZDlkOWQ5IiBzdHJva2U9IiNkOWQ5ZDkiIHN0cm9rZS13aWR0aD0iMSIvPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "../../../libs/ui/src/hooks.ts":
/*!*********************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/hooks.ts ***!
  \*********************************************************************/
/*! exports provided: useDrag */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useDrag", function() { return useDrag; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useDrag(initialPositionX, initialPositionY) {
  let [isDragging, setIsDragging] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  let [[positionX, positionY], setPosition] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([initialPositionX, initialPositionY]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    if (isDragging) {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
  });
  return [positionX, positionY, onDraggedObjectMouseDown];

  function onMouseMove(event) {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    let newPositionX = Math.max(Math.min(event.pageX, vw - 200), 20);
    let newPositionY = Math.max(Math.min(event.pageY, vh - 200), 20);
    setPosition([newPositionX, newPositionY]);
  }

  function onMouseUp(event) {
    setIsDragging(false);
  }

  function onDraggedObjectMouseDown(event) {
    setIsDragging(true);
  }
}

/***/ }),

/***/ "../../../libs/ui/src/index.ts":
/*!*********************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/index.ts ***!
  \*********************************************************************/
/*! exports provided: ModelInfo, ImportList, ExportList, ExportingFrame, CoverBlankFramePage, FramePageComponent, FrameLine, ExportingModel, Button, HoverableButton, DrogMiddleLine, SourceImageToolBar, UploadFileStatusRow, NoneFileUpload, UploadNewFileButton, UploadFileRegistration, UploadFileStatusesTable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModelInfo_ModelInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelInfo/ModelInfo */ "../../../libs/ui/src/ModelInfo/ModelInfo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelInfo", function() { return _ModelInfo_ModelInfo__WEBPACK_IMPORTED_MODULE_0__["ModelInfo"]; });

/* harmony import */ var _ImportList_ImportList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportList/ImportList */ "../../../libs/ui/src/ImportList/ImportList.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportList", function() { return _ImportList_ImportList__WEBPACK_IMPORTED_MODULE_1__["ImportList"]; });

/* harmony import */ var _ExportList_ExportList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExportList/ExportList */ "../../../libs/ui/src/ExportList/ExportList.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportList", function() { return _ExportList_ExportList__WEBPACK_IMPORTED_MODULE_2__["ExportList"]; });

/* harmony import */ var _ExportList_exporting_frame_ExportingFrame__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExportList/exporting-frame/ExportingFrame */ "../../../libs/ui/src/ExportList/exporting-frame/ExportingFrame.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportingFrame", function() { return _ExportList_exporting_frame_ExportingFrame__WEBPACK_IMPORTED_MODULE_3__["ExportingFrame"]; });

/* harmony import */ var _ExportList_exporting_frame_CoverBlankFramePage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExportList/exporting-frame/CoverBlankFramePage */ "../../../libs/ui/src/ExportList/exporting-frame/CoverBlankFramePage.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoverBlankFramePage", function() { return _ExportList_exporting_frame_CoverBlankFramePage__WEBPACK_IMPORTED_MODULE_4__["CoverBlankFramePage"]; });

/* harmony import */ var _Canvas_frame_page_component_FramePageComponent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Canvas/frame-page-component/FramePageComponent */ "../../../libs/ui/src/Canvas/frame-page-component/FramePageComponent.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FramePageComponent", function() { return _Canvas_frame_page_component_FramePageComponent__WEBPACK_IMPORTED_MODULE_5__["FramePageComponent"]; });

/* harmony import */ var _Canvas_frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Canvas/frame-line/FrameLine */ "../../../libs/ui/src/Canvas/frame-line/FrameLine.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FrameLine", function() { return _Canvas_frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_6__["FrameLine"]; });

/* harmony import */ var _ExportList_exporting_model_ExportingModel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ExportList/exporting-model/ExportingModel */ "../../../libs/ui/src/ExportList/exporting-model/ExportingModel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportingModel", function() { return _ExportList_exporting_model_ExportingModel__WEBPACK_IMPORTED_MODULE_7__["ExportingModel"]; });

/* harmony import */ var _lib_buttons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/buttons */ "../../../libs/ui/src/lib/buttons.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return _lib_buttons__WEBPACK_IMPORTED_MODULE_8__["Button"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HoverableButton", function() { return _lib_buttons__WEBPACK_IMPORTED_MODULE_8__["HoverableButton"]; });

/* harmony import */ var _Canvas_drog_middle_line_DrogMiddleLine__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./Canvas/drog-middle-line/DrogMiddleLine */ "../../../libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrogMiddleLine", function() { return _Canvas_drog_middle_line_DrogMiddleLine__WEBPACK_IMPORTED_MODULE_9__["DrogMiddleLine"]; });

/* harmony import */ var _SourceImageToolBar_SourceImageToolBar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./SourceImageToolBar/SourceImageToolBar */ "../../../libs/ui/src/SourceImageToolBar/SourceImageToolBar.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SourceImageToolBar", function() { return _SourceImageToolBar_SourceImageToolBar__WEBPACK_IMPORTED_MODULE_10__["SourceImageToolBar"]; });

/* harmony import */ var _Upload_UploadFileStatusRow__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Upload/UploadFileStatusRow */ "../../../libs/ui/src/Upload/UploadFileStatusRow.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatusRow", function() { return _Upload_UploadFileStatusRow__WEBPACK_IMPORTED_MODULE_11__["UploadFileStatusRow"]; });

/* harmony import */ var _Upload_NoneFileUpload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Upload/NoneFileUpload */ "../../../libs/ui/src/Upload/NoneFileUpload.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NoneFileUpload", function() { return _Upload_NoneFileUpload__WEBPACK_IMPORTED_MODULE_12__["NoneFileUpload"]; });

/* empty/unused harmony star reexport *//* harmony import */ var _Upload_UploadNewFileButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Upload/UploadNewFileButton */ "../../../libs/ui/src/Upload/UploadNewFileButton.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadNewFileButton", function() { return _Upload_UploadNewFileButton__WEBPACK_IMPORTED_MODULE_13__["UploadNewFileButton"]; });

/* harmony import */ var _Upload_UploadFileRegistration__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Upload/UploadFileRegistration */ "../../../libs/ui/src/Upload/UploadFileRegistration.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileRegistration", function() { return _Upload_UploadFileRegistration__WEBPACK_IMPORTED_MODULE_14__["UploadFileRegistration"]; });

/* harmony import */ var _Upload_UploadFileStatuesTable__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Upload/UploadFileStatuesTable */ "../../../libs/ui/src/Upload/UploadFileStatuesTable.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UploadFileStatusesTable", function() { return _Upload_UploadFileStatuesTable__WEBPACK_IMPORTED_MODULE_15__["UploadFileStatusesTable"]; });



















/***/ }),

/***/ "../../../libs/ui/src/lib/buttons.tsx":
/*!****************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/lib/buttons.tsx ***!
  \****************************************************************************/
/*! exports provided: Button, HoverableButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return Button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HoverableButton", function() { return HoverableButton; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


function Button(props) {
  const blue = '#1581ff';

  let style = _objectSpread({
    backgroundColor: props.disabled ? 'gray' : props.isPrimary ? blue : 'inherit',
    border: `solid 2px ${props.disabled ? 'gray' : blue}`,
    width: 184,
    height: 40,
    borderRadius: 20,
    fontSize: 18,
    outline: 'none',
    color: props.isPrimary ? 'white' : blue,
    cursor: 'pointer'
  }, props.style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    style: style,
    onClick: props.onClick,
    disabled: props.disabled
  }, props.children);
}
function HoverableButton(props) {
  let [isHovered, setIsHovered] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);

  let style = _objectSpread({
    cursor: isHovered ? 'pointer' : 'inherit'
  }, props.style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: isHovered ? props.srcOnHover : props.src,
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    style: style,
    title: props.title,
    onClick: props.onClick
  });
}

/***/ }),

/***/ "../../../libs/utils/src/index.ts":
/*!************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/utils/src/index.ts ***!
  \************************************************************************/
/*! exports provided: BACK_COVER_BLANK_PAGENAME, FORNT_COVER_BLANK_PAGENAME, keepTryingTo, History, TextHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/utils */ "../../../libs/utils/src/lib/utils.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BACK_COVER_BLANK_PAGENAME", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["BACK_COVER_BLANK_PAGENAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FORNT_COVER_BLANK_PAGENAME", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["FORNT_COVER_BLANK_PAGENAME"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "keepTryingTo", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["keepTryingTo"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "History", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["History"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TextHistory", function() { return _lib_utils__WEBPACK_IMPORTED_MODULE_0__["TextHistory"]; });



/***/ }),

/***/ "../../../libs/utils/src/lib/utils.ts":
/*!****************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/utils/src/lib/utils.ts ***!
  \****************************************************************************/
/*! exports provided: BACK_COVER_BLANK_PAGENAME, FORNT_COVER_BLANK_PAGENAME, keepTryingTo, History, TextHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACK_COVER_BLANK_PAGENAME", function() { return BACK_COVER_BLANK_PAGENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FORNT_COVER_BLANK_PAGENAME", function() { return FORNT_COVER_BLANK_PAGENAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keepTryingTo", function() { return keepTryingTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "History", function() { return History; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextHistory", function() { return TextHistory; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");

const BACK_COVER_BLANK_PAGENAME = '(封底裏)';
const FORNT_COVER_BLANK_PAGENAME = '(封面裏)';
function keepTryingTo(doSomething, input, timeout = 2000) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      let doSomethingResult = await doSomething(input);
      if (doSomethingResult === "NOT_FINISHED_YET") resolve(keepTryingTo(doSomething, input, timeout));else resolve(doSomethingResult);
    }, timeout);
  });
}
class History {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = void 0;
    this.end = void 0;
    this._size = void 0;
    this.memoryBound = void 0;
    this.buffer = new Array(capacity);
    this.end = 0;
    this._size = 0;
    this.memoryBound = 0;
  }

  get isUndoable() {
    return this._size > 0;
  }

  get isRedoable() {
    return this.memoryBound != this.end;
  }

  act(item) {
    this.buffer[this.end] = item;
    this.end = (this.end + 1) % this.capacity;
    this.memoryBound = this.end;
    if (this._size < this.capacity) this._size += 1;
  }

  undo() {
    console.log(this);
    if (!this.isUndoable) return null;
    let indexToPop = this.end;
    this.end = (this.end - 1 + this.capacity) % this.capacity;
    this._size -= 1;
    return this.buffer[indexToPop];
  }

  redo() {
    if (!this.isRedoable) return null;
    this.end = (this.end + 1) % this.capacity;
    return this.buffer[this.end];
  }

  get size() {
    return this._size;
  }

}
class TextHistory {
  constructor(capacity) {
    this.capacity = capacity;
    this.buffer = void 0;
    this.end = void 0;
    this._size = void 0;
    this.memoryBound = void 0;
    this.buffer = new Array(capacity);
    this.end = 0;
    this._size = 0;
    this.memoryBound = 0;
  }

  get isUndoable() {
    return this._size > 1;
  }

  get isRedoable() {
    return this.memoryBound != this.end % this.capacity;
  }

  act(item) {
    this.buffer[this.end] = item;
    this.end = (this.end + 1) % this.capacity;
    this.memoryBound = this.end;
    if (this._size < this.capacity) this._size += 1;
  }

  undo() {
    if (!this.isUndoable) return null;
    this.end = (this.end - 1 + this.capacity) % this.capacity;
    this._size -= 1;
    return this.buffer[(this.end - 1 + this.capacity) % this.capacity];
  }

  redo() {
    if (!this.isRedoable) return null;
    let currentPosition = this.end;
    this.end = (this.end + 1) % this.capacity;
    this._size += 1;
    return this.buffer[currentPosition];
  }

  get size() {
    return this._size;
  }

  clone() {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["deserialize"])(TextHistory, Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["serialize"])(this));
  }

}

/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/features/src/lib/features.module.css":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/features/src/lib/features.module.css ***!
  \*****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.module.css":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/drog-middle-line/DrogMiddleLine.module.css ***!
  \*************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/Canvas/frame-line/FrameLine.module.css":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/frame-line/FrameLine.module.css ***!
  \**************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/Canvas/frame-page-component/FramePageComponent.module.css":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/Canvas/frame-page-component/FramePageComponent.module.css ***!
  \*********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ExportList/ExportList.module.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/ExportList.module.css ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ExportList/exporting-frame/ExportingFrame.module.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/exporting-frame/ExportingFrame.module.css ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ExportList/exporting-model/ExportingModel.module.css":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/ExportList/exporting-model/ExportingModel.module.css ***!
  \****************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ImportList/ImportList.module.css":
/*!********************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/ImportList.module.css ***!
  \********************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ImportList/imported-file/ImportedFile.module.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/imported-file/ImportedFile.module.css ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ImportList/imported-page/ImportedPage.module.css":
/*!************************************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/ImportList/imported-page/ImportedPage.module.css ***!
  \************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/ModelInfo/ModelInfo.module.css":
/*!******************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/ModelInfo/ModelInfo.module.css ***!
  \******************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/book-reviewer/reviewing-stage/canvans/Canvans.module.css":
/*!*********************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/book-reviewer/reviewing-stage/canvans/Canvans.module.css ***!
  \*********************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.module.css":
/*!*************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.module.css ***!
  \*************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.module.css":
/*!************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.module.css ***!
  \************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.module.css":
/*!***************************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.module.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./app/app.tsx":
/*!*********************!*\
  !*** ./app/app.tsx ***!
  \*********************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! reflect-metadata */ "../../../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _testObjects2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./testObjects2 */ "./app/testObjects2.ts");
/* harmony import */ var _book_reviewer_reviewing_stage_BookReviewingStage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-reviewer/reviewing-stage/BookReviewingStage */ "./app/book-reviewer/reviewing-stage/BookReviewingStage.tsx");




// import * as webpack from 'webpack';
// const plugins = []
// plugins.push(new webpack.IgnorePlugin(/log4js/))
// let log = log4js.getLogger();
const App = () => {
  // return <ApiTester/>;
  // return <SingleSheetReviewer reviewItem={singleSheetReviewItem} saveReviewItem={()=>{}}/>
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_book_reviewer_reviewing_stage_BookReviewingStage__WEBPACK_IMPORTED_MODULE_3__["BookReviewingStage"], {
    initialReviewItem: _testObjects2__WEBPACK_IMPORTED_MODULE_2__["reviewItem"],
    saveReviewItem: async () => {},
    onFinished: () => {}
  });
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/book-reviewer/reviewing-stage/BookReviewingStage.tsx":
/*!******************************************************************!*\
  !*** ./app/book-reviewer/reviewing-stage/BookReviewingStage.tsx ***!
  \******************************************************************/
/*! exports provided: BookReviewingStage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookReviewingStage", function() { return BookReviewingStage; });
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/data */ "../../../libs/data/src/index.ts");
/* harmony import */ var _gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gainhow-review/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_DoublePageViewMode_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/DoublePageViewMode.svg */ "./assets/icons/DoublePageViewMode.svg");
/* harmony import */ var _assets_icons_DoublePageViewModeBlue_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/DoublePageViewModeBlue.svg */ "./assets/icons/DoublePageViewModeBlue.svg");
/* harmony import */ var _assets_icons_OverviewMode_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/OverviewMode.svg */ "./assets/icons/OverviewMode.svg");
/* harmony import */ var _assets_icons_OverviewModeBlue_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/icons/OverviewModeBlue.svg */ "./assets/icons/OverviewModeBlue.svg");
/* harmony import */ var _single_sheet_reviewer_reviewing_stage_side_tool_bar_SideToolBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar */ "./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.tsx");
/* harmony import */ var _export_overview_ExportOverview__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./export-overview/ExportOverview */ "./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.tsx");
/* harmony import */ var _double_page_view_DoublePageView__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./double-page-view/DoublePageView */ "./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.tsx");
/* harmony import */ var _gainhow_review_features__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @gainhow-review/features */ "../../../libs/features/src/index.ts");
/* harmony import */ var _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @gainhow-review/utils */ "../../../libs/utils/src/index.ts");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














function useReviewItemHistory(reviewItem, setReviewItem, capacity = 20) {
  let [history, setHistory] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(new _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_11__["TextHistory"](capacity));
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    record(reviewItem);
  }, []);
  return {
    isUndoable: history.isUndoable,
    isRedoable: history.isRedoable,
    record,
    redo,
    undo
  };

  function redo() {
    setHistory(history => {
      let newHistory = history.clone();
      let reviewItemJson = newHistory.redo();
      if (reviewItemJson === null) throw new Error("redo out of history memory");
      let reviewItem = _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"].fromJson(reviewItemJson);
      setReviewItem(reviewItem);
      return newHistory;
    });
  }

  function undo() {
    setHistory(history => {
      let newHistory = history.clone();
      let reviewItemJson = newHistory.undo();
      if (reviewItemJson === null) throw new Error("undo out of history memory");
      let reviewItem = _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"].fromJson(reviewItemJson);
      setReviewItem(reviewItem);
      return newHistory;
    });
  }

  function record(reviewItem) {
    setHistory(history => {
      let newHistory = history.clone();
      newHistory.act(_gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"].toJson(reviewItem));
      return newHistory;
    });
  }
}

function BookReviewingStage(props) {
  let [bufferedReviewItem, updateBufferedReviewItem] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.initialReviewItem);
  const initialViewPercentage = 100;
  const [viewPercentage, setViewPercentage] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(initialViewPercentage);
  let [isLoading, setIsLoading] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.initialReviewItem.allUploadFilesAreConverted()); // busy checking
  // useReviewItemBusyChecker(
  //     bufferedReviewItem.reviewId,
  //     bufferedReviewItem,
  //     updateBufferedReviewItem,
  //     (reviewItem) => { 
  //         setIsLoading(false);
  //         let initializedReviewItem = initFramedPagesWithUploadFiles(reviewItem)
  //         updateBufferedReviewItem(initializedReviewItem);
  //         props.saveReviewItem(initializedReviewItem);
  //     },
  //     (reviewItem) => reviewItem.allUploadFilesAreConverted(),
  //     isLoading
  // );

  let {
    isRedoable,
    isUndoable,
    record,
    undo,
    redo
  } = useReviewItemHistory(props.initialReviewItem, updateBufferedReviewItem);
  let [selectedFrameIndex, selectFrame] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0);
  let selectedFramedPage = bufferedReviewItem.getFramedPage(0, selectedFrameIndex);
  if (!selectedFramedPage) throw new Error("debug: selected frame is undefined???");
  let [importListIsHidden, setImportListIsHidden] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(true);
  let importListStyle = {
    display: "inline-block",
    verticalAlign: "top",
    width: importListIsHidden ? 40 : 240,
    height: '100vh'
  };
  let rightAreaStyle = {
    display: "inline-block",
    verticalAlign: "top"
  };
  let modelInfoStyle = {
    width: 300,
    height: 'calc(100vh - 182px)'
  };
  let downRightAreaStyle = {
    display: 'inline-block',
    width: 300,
    height: 180,
    verticalAlign: 'top',
    border: "solid 2px #E4E4E4",
    borderTop: "none",
    backgroundColor: "#F7F7F7"
  };
  let [nextStepButtonIsTriggered, setNextStepButtonIsTriggered] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  let nextStepButtonStyle = {
    marginBottom: 10,
    marginTop: 50,
    marginLeft: 58
  };
  let previousStepButtonStyle = {
    marginLeft: 58
  };
  let workSpaceStyle = {
    display: "inline-block",
    height: "100vh",
    verticalAlign: "top",
    backgroundColor: "#f4f4f4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    userSelect: "none",
    overflow: 'auto',
    width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 14px - 50px)`
  };
  let [viewMode, setViewMode] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("OVERVIEW");

  function delectFrame() {
    updateBufferedReviewItem(bufferedReviewItem => {
      let newReviewItem = bufferedReviewItem.setSourcePageIndexImmutably(0, selectedFrameIndex, undefined, undefined);
      record(newReviewItem);
      return newReviewItem;
    });
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, isLoading && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(UploadFileConvertingModal, {
    reviewItem: bufferedReviewItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["ImportList"], {
    style: importListStyle,
    files: bufferedReviewItem.status.uploadFileStatuses,
    selectPage: (fileIndex, pageIndex) => {
      updateBufferedReviewItem(bufferedReviewItem => {
        let newBufferedReviewItem = bufferedReviewItem.setSourcePageIndexImmutably(0, selectedFrameIndex, fileIndex, pageIndex);
        record(newBufferedReviewItem);
        return newBufferedReviewItem;
      });
    },
    isSelected: (fileNumber, pageIndex) => {
      return fileNumber === selectedFramedPage.sourceFileIndex && pageIndex === selectedFramedPage.sourcePageNumber;
    },
    isHidden: importListIsHidden,
    onToggle: () => setImportListIsHidden(!importListIsHidden)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SideToolBar, {
    style: {
      height: '100vh',
      display: 'inline-block',
      userSelect: 'none'
    },
    zoom: ratio => setViewPercentage(Math.pow(initialViewPercentage, ratio)),
    viewMode: viewMode,
    setViewMode: setViewMode,
    onRedo: () => {
      if (isRedoable) redo();
    },
    onUndo: () => {
      if (isUndoable) undo();
    }
  }), viewMode === "OVERVIEW" ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_export_overview_ExportOverview__WEBPACK_IMPORTED_MODULE_8__["ExportOverview"], {
    style: workSpaceStyle,
    reviewItem: bufferedReviewItem,
    selectedFrameIndex: selectedFrameIndex,
    onFrameSelect: frameIndex => selectFrame(frameIndex),
    onFrameEdit: frameIndex => onEdit(frameIndex),
    onSwapFrames: (frameIndex1, frameIndex2) => {
      updateBufferedReviewItem(reviewItem => {
        let newReviewItem = reviewItem.swapFramedPagesImmutably(0, frameIndex1, frameIndex2);
        record(newReviewItem);
        return newReviewItem;
      });
    },
    onInsertBlankPageAfter: insertBlankFramedPageAfter,
    onShiftFramesBetween: shiftFramesBetween,
    onDeleteFrame: deleteFrame
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_double_page_view_DoublePageView__WEBPACK_IMPORTED_MODULE_9__["default"], {
    style: workSpaceStyle,
    reviewItem: bufferedReviewItem,
    selectedModelIndex: 0,
    selectedFrameIndex: selectedFrameIndex,
    onSelect: (modelIndex, frameIndex) => selectFrame(frameIndex),
    onDeleteSorceFileImage: () => {
      delectFrame();
    },
    updateReviewItem: updateBufferedReviewItem,
    viewPercentage: viewPercentage,
    onShiftFramesBetween: shiftFramesBetween
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: rightAreaStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["ModelInfo"], {
    product: bufferedReviewItem.product,
    isHidden: false,
    onToggle: () => {},
    style: modelInfoStyle,
    hidable: false
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: downRightAreaStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: nextStepButtonStyle,
    isPrimary: true,
    disabled: nextStepButtonIsTriggered,
    onClick: async () => {
      let reviewReception = new _gainhow_review_features__WEBPACK_IMPORTED_MODULE_10__["ReviewReception"]('/api');
      setNextStepButtonIsTriggered(true);

      try {
        await props.saveReviewItem(bufferedReviewItem);
        await reviewReception.generateFinalResults(bufferedReviewItem);
        setNextStepButtonIsTriggered(false);
        props.onFinished(bufferedReviewItem);
      } catch (error) {// TODO: 提醒使用者可以再按一次
        // setNextStepButtonIsTriggered(false);
      }
    }
  }, nextStepButtonIsTriggered ? "印刷檔生成中..." : "預覽列印"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: previousStepButtonStyle,
    onClick: () => {}
  }, "\u4E0A\u4E00\u9801"))));

  function onEdit(frameIndex) {
    selectFrame(frameIndex);
    setViewMode("DOUBLE_PAGE");
  }

  function shiftFramesBetween(frameIndex1, frameIndex2) {
    updateBufferedReviewItem(bufferedReviewItem => {
      let newReviewItem = bufferedReviewItem.shiftFramedPagesBetween(0, frameIndex1, frameIndex2);
      record(newReviewItem);
      return newReviewItem;
    });
  }

  function insertBlankFramedPageAfter(position) {
    updateBufferedReviewItem(bufferedReviewItem => {
      let newBook = bufferedReviewItem.product.clone();
      newBook.numberOfPages += 1;
      let newReviewItem = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"](bufferedReviewItem.status, bufferedReviewItem.reviewId, newBook);
      let oldFramedPages = bufferedReviewItem.models[0].framedPages;
      let newFramedPages = newReviewItem.models[0].framedPages;

      for (let i = 0; i <= position; i++) {
        let oldFramedPage = oldFramedPages[i];
        let newFramedPage = newFramedPages[i];
        cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
      }

      for (let i = position + 1; i < oldFramedPages.length; i++) {
        let oldFramedPage = oldFramedPages[i];
        let newFramedPage = newFramedPages[i + 1];
        cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
      }

      newReviewItem.models[0].framedPages = newFramedPages;
      record(newReviewItem);
      return newReviewItem;
    });
  }

  function insertBlankFramedPageBefore(position) {}

  function cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage) {
    newFramedPage.sourceFileIndex = oldFramedPage.sourceFileIndex;
    newFramedPage.sourcePageNumber = oldFramedPage.sourcePageNumber;
    newFramedPage.positionX = oldFramedPage.positionX;
    newFramedPage.positionY = oldFramedPage.positionY;
    newFramedPage.scaleX = oldFramedPage.scaleX;
    newFramedPage.scaleY = oldFramedPage.scaleY;
    newFramedPage.rotationDegree = oldFramedPage.rotationDegree;
  }

  function deleteFrame(frameIndex) {
    updateBufferedReviewItem(bufferedReviewItem => {
      let newBook = bufferedReviewItem.product.clone();
      if (newBook.numberOfPages <= 0) return bufferedReviewItem;
      newBook.numberOfPages -= 1;
      let newReviewItem = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"](bufferedReviewItem.status, bufferedReviewItem.reviewId, newBook);
      let oldFramedPages = bufferedReviewItem.models[0].framedPages;
      let newFramedPages = newReviewItem.models[0].framedPages;

      for (let i = 0; i < frameIndex; i++) {
        let oldFramedPage = oldFramedPages[i];
        let newFramedPage = newFramedPages[i];
        cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
      }

      for (let i = frameIndex + 1; i < oldFramedPages.length; i++) {
        let oldFramedPage = oldFramedPages[i];
        let newFramedPage = newFramedPages[i - 1];
        cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage);
      }

      newReviewItem.models[0].framedPages = newFramedPages;
      record(newReviewItem);
      /** 刪頁的時候 如果當前選擇的frameIndex是最後一個，要把它往前 */

      return newReviewItem;

      function cloneFramedPageExceptForNameAndIdAndIndexInto(oldFramedPage, newFramedPage) {
        newFramedPage.sourceFileIndex = oldFramedPage.sourceFileIndex;
        newFramedPage.sourcePageNumber = oldFramedPage.sourcePageNumber;
        newFramedPage.positionX = oldFramedPage.positionX;
        newFramedPage.positionY = oldFramedPage.positionY;
        newFramedPage.scaleX = oldFramedPage.scaleX;
        newFramedPage.scaleY = oldFramedPage.scaleY;
        newFramedPage.rotationDegree = oldFramedPage.rotationDegree;
      }
    });
  }
}

function initFramedPagesWithUploadFiles(reviewItem) {}

function UploadFileConvertingModal(props) {
  /** TODO: 畫一個可愛的等待畫面 */
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null);
}

function SideToolBar(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: _objectSpread({
      position: 'relative'
    }, props.style)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_single_sheet_reviewer_reviewing_stage_side_tool_bar_SideToolBar__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    style: {
      position: 'absolute',
      bottom: 510
    },
    src: _assets_icons_OverviewMode_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    srcWhenSelected: _assets_icons_OverviewModeBlue_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    isSelected: props.viewMode === "OVERVIEW",
    onClick: () => props.setViewMode("OVERVIEW")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_single_sheet_reviewer_reviewing_stage_side_tool_bar_SideToolBar__WEBPACK_IMPORTED_MODULE_7__["Icon"], {
    style: {
      position: 'absolute',
      bottom: 465
    },
    src: _assets_icons_DoublePageViewMode_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    srcWhenSelected: _assets_icons_DoublePageViewModeBlue_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    isSelected: props.viewMode === "DOUBLE_PAGE",
    onClick: () => props.setViewMode("DOUBLE_PAGE")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("hr", {
    style: {
      position: 'absolute',
      bottom: 450,
      width: 33,
      margin: 8,
      border: 'solid 1px #d9d9d9'
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_single_sheet_reviewer_reviewing_stage_side_tool_bar_SideToolBar__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      height: '100vh'
    },
    zoom: props.zoom,
    onRedo: props.onRedo,
    onUndo: props.onUndo
  }));
}

/***/ }),

/***/ "./app/book-reviewer/reviewing-stage/canvans/Canvans.module.css":
/*!**********************************************************************!*\
  !*** ./app/book-reviewer/reviewing-stage/canvans/Canvans.module.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./Canvans.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/book-reviewer/reviewing-stage/canvans/Canvans.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/book-reviewer/reviewing-stage/canvans/Canvans.tsx":
/*!***************************************************************!*\
  !*** ./app/book-reviewer/reviewing-stage/canvans/Canvans.tsx ***!
  \***************************************************************/
/*! exports provided: Canvas, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvas", function() { return Canvas; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Canvans_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvans.module.css */ "./app/book-reviewer/reviewing-stage/canvans/Canvans.module.css");
/* harmony import */ var _Canvans_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Canvans_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _gainhow_review_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gainhow-review/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _assets_icons_LineDiscription_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/icons/LineDiscription.svg */ "./assets/icons/LineDiscription.svg");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





/* eslint-disable-next-line */

function Canvas(props) {
  const defaultRatio = 0.8;
  const myRef = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  const [preViewPercentaeg, setPreViewPercentae] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(props.viewPercentage);

  const scrollToMiddle = () => {
    console.log(myRef);
    let canvasDiv = myRef.current.childNodes[0];
    let thisDivHeight = myRef.current.clientHeight;
    let thisDivWidth = myRef.current.clientWidth;
    let canvasDivHeight = canvasDiv.clientHeight * props.viewPercentage / 100;
    let canvasDivWidth = canvasDiv.clientWidth * props.viewPercentage / 100;
    let scrollX = (canvasDivWidth - thisDivWidth) / 2;
    let scrollY = (canvasDivHeight - thisDivHeight) / 2;
    myRef.current.scrollTo(scrollX, scrollY); // 目前是直接移動到圖片中間
    // 但理想上是原本看的地方直接放大
    //  => 看能不能取得原本正在看的範圍中心座標，再根據該範圍的中心移動
    //scrollHeight scrollLeft scrollTop scrollWidth 
  };

  const scrollToViewCenter = () => {
    let canvasDiv = myRef.current.childNodes[0];
    let canvasDivHeight = canvasDiv.clientHeight * props.viewPercentage / 100;
    let canvasDivWidth = canvasDiv.clientWidth * props.viewPercentage / 100;
    let oldCanvasDivHeight = canvasDiv.clientHeight * preViewPercentaeg / 100;
    let oldCanvasDivWidth = canvasDiv.clientWidth * preViewPercentaeg / 100;
    let scrollX = (canvasDivWidth - oldCanvasDivWidth) / 2;
    let scrollY = (canvasDivHeight - oldCanvasDivHeight) / 2;
    myRef.current.scroll(scrollX, scrollY); //console.log(scrollX,scrollY);

    console.log(canvasDiv.clientHeight); // console.log(preViewPercentaeg, props.viewPercentage);

    setPreViewPercentae(props.viewPercentage);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(scrollToMiddle, [props.viewPercentage]);
  let frame = props.leftFramePage.getFrame();

  if (!frame) {
    frame = props.rightFramePage.getFrame();
  }

  let frameWidthtInPx = calcFrameWidth();
  let frameHeightInPx = calcFrameheight();
  let imageScale = `calc(${frameWidthtInPx} / ${frame.maxWidth})`;
  const pageMargin = '20px';
  const textHeight = `${20}px`;

  function calcFrameWidth() {
    let calcWidthByMaxWidth = `calc(${props.style.width} * ${defaultRatio} / 2)`;
    let calcWidthByMaxHeight = `calc(${frame.maxWidth} * ${props.style.height}  * ${defaultRatio} / ${frame.maxHeight}  )`;
    return `min(${calcWidthByMaxWidth} , ${calcWidthByMaxHeight})`;
  }

  function calcFrameheight() {
    let calcHeightByMaxHeight = `calc(${props.style.height} * ${defaultRatio} )`;
    let calcHeightByMaxWidth = `calc(${frame.maxHeight} * ${props.style.width} * ${defaultRatio} / 2 / ${frame.maxWidth} )`;
    return `min(${calcHeightByMaxHeight} , ${calcHeightByMaxWidth})`;
  }

  const style = _objectSpread({
    userSelect: 'none',
    position: 'relative',
    overflow: 'auto'
  }, props.style);

  const CanvansStyle = {
    transform: `scale(${props.viewPercentage / 100})`,
    transformOrigin: '0 0',
    width: `calc(${props.style.width})`,
    height: `calc(${props.style.height})`,
    top: `max(calc(50% - calc(calc(${props.style.height})  * ${props.viewPercentage / 100}) /2 ), 0px)`,
    left: `max(calc(50% - calc(calc(${props.style.width})  * ${props.viewPercentage / 100}) /2 ), 0px)`,
    position: 'absolute',
    overflow: props.isLeftPageEditing ? 'visible' : 'hidden'
  };
  const editingFrameNameMargin = 5;
  const editingFrameNameStyle = {
    userSelect: 'none',
    position: 'absolute',
    top: `calc(50% - calc(${frameHeightInPx} / 2) + calc(${frameHeightInPx} ) + ${editingFrameNameMargin}px)`,
    textAlign: 'center',
    width: '100%',
    fontSize: '20px'
  };
  const twoPageWidth = `calc(${frameWidthtInPx} * 2 + ${pageMargin})`;
  const twoPageHeight = `calc(${frameHeightInPx} + ${textHeight})`;
  const twoPageAreaStyle = {
    position: 'relative',
    width: twoPageWidth,
    height: twoPageHeight,
    top: `calc(calc(100% - ${twoPageHeight}) / 2)`,
    left: `min(calc(calc(100% - ${twoPageWidth}) / 2),calc(100% - ${twoPageWidth} - 60px - 205px))`
  };
  const leftPageStyle = {
    position: 'relative',
    float: 'left',
    textAlign: 'left',
    width: `50%`,
    height: '100%'
  };
  const rightPageStyle = {
    position: 'relative',
    float: 'right',
    textAlign: 'right',
    width: `50%`,
    height: '100%'
  };
  const framePageComponentStyle = {
    width: `calc(${frameWidthtInPx})`,
    height: `calc(${frameHeightInPx} )`,
    position: 'absolute',
    zIndex: 100
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    ref: myRef,
    onClick: () => {
      props.setIsLeftPageEditing(false);
      props.setIsRightPageEditing(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: CanvansStyle,
    onClick: () => {
      if (props.isLeftPageEditing) props.setIsLeftPageEditing(false);
      if (props.isRightPageEditing) props.setIsRightPageEditing(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: twoPageAreaStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: leftPageStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: framePageComponentStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_2__["FramePageComponent"], {
    mmToPxScale: imageScale,
    framePage: props.leftFramePage,
    isEditing: props.isLeftPageEditing,
    onImageClick: e => {
      props.setIsLeftPageEditing(true);
      e.stopPropagation();
    }
  })), props.leftFramePage.frameName !== '空白頁' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: editingFrameNameStyle
  }, props.leftFramePage.frameName)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: rightPageStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: framePageComponentStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_2__["FramePageComponent"], {
    mmToPxScale: imageScale,
    framePage: props.rightFramePage,
    isEditing: props.isRightPageEditing,
    onImageClick: e => {
      props.setIsRightPageEditing(true);
      e.stopPropagation();
    }
  })), props.rightFramePage.frameName !== '空白頁' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: editingFrameNameStyle
  }, props.rightFramePage.frameName))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _assets_icons_LineDiscription_svg__WEBPACK_IMPORTED_MODULE_3__["default"],
    style: {
      position: 'absolute',
      right: '3px',
      top: '10px'
    }
  })));
}
/* harmony default export */ __webpack_exports__["default"] = (Canvas);

/***/ }),

/***/ "./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.module.css":
/*!**************************************************************************************!*\
  !*** ./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.module.css ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./DoublePageView.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.tsx":
/*!*******************************************************************************!*\
  !*** ./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.tsx ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/data */ "../../../libs/data/src/index.ts");
/* harmony import */ var _gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gainhow-review/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @gainhow-review/utils */ "../../../libs/utils/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _canvans_Canvans__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../canvans/Canvans */ "./app/book-reviewer/reviewing-stage/canvans/Canvans.tsx");
/* harmony import */ var _sortable_export_list_SortableExportList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../sortable-export-list/SortableExportList */ "./app/book-reviewer/sortable-export-list/SortableExportList.tsx");
/* harmony import */ var _DoublePageView_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DoublePageView.module.css */ "./app/book-reviewer/reviewing-stage/double-page-view/DoublePageView.module.css");
/* harmony import */ var _DoublePageView_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_DoublePageView_module_css__WEBPACK_IMPORTED_MODULE_6__);








function DoublePageView(props) {
  let framePage = props.reviewItem.getFramedPage(props.selectedModelIndex, props.selectedFrameIndex);
  let product = props.reviewItem.product;
  let groupFramedPages = groupFramedPage(framePage.reviewModel.framedPages, product.pagingDirection);
  let pages = findGroupFramedPageWithFramedPage(groupFramedPages, framePage);
  let exportListStyle = {
    //display: 'inline-block',
    verticalAlign: 'top',
    width: props.style.width,
    height: '180px'
  };
  let workSpaceStyle = {
    width: props.style.width,
    height: `calc(100vh - ${exportListStyle.height} - 2px)`
  };

  function changeEditingPage(framedPage) {
    let frameIndex = framedPage.frameIndexInModel;

    if (frameIndex !== -1) {
      props.onSelect(props.selectedModelIndex, frameIndex);
    }
  }

  function groupFramedPage(framedPages, direct) {
    let groupArray = [];

    if (direct === 'RIGHT_TO_LEFT') {
      groupArray = rightToLeftGroupFramedPage(framedPages);
    } else if (direct === 'LEFT_TO_RIGHT') {
      groupArray = leftToRightGroupFramedPage(framedPages);
    }

    return groupArray;

    function leftToRightGroupFramedPage(framedPages) {
      let rightToLeftGroup = rightToLeftGroupFramedPage(framedPages);
      let result = rightToLeftGroup.map(group => {
        let temp = group.leftPage;
        group.leftPage = group.rightPage;
        group.rightPage = temp;
        return group;
      });
      return result;
    }

    function rightToLeftGroupFramedPage(framedPages) {
      let groupArray = [];
      let blankFramePage = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["FramedPage"]('空白頁', '空白頁', framedPages[0].reviewModel, -1);

      for (let framedPage of framedPages) {
        let inputGroup = {
          leftPage: blankFramePage,
          rightPage: blankFramePage
        };
        let lastGroupIndex = groupArray.length === 0 ? 0 : groupArray.length - 1;
        let lastGroup = groupArray[lastGroupIndex];
        let isNeedUseOldGroup = false;

        if (lastGroup) {
          if (lastGroup.rightPage.frameName === '空白頁') isNeedUseOldGroup = true;
        }

        if (framedPage.frameName === '封面') {
          inputGroup.rightPage = framedPage;
        } else if (framedPage.frameName === '封底') {
          // TODO: 加上封底裏
          let backCoverBlankPage = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["FramedPage"](_gainhow_review_utils__WEBPACK_IMPORTED_MODULE_2__["BACK_COVER_BLANK_PAGENAME"], _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_2__["BACK_COVER_BLANK_PAGENAME"], framedPage.reviewModel, -1);

          if (isNeedUseOldGroup) {
            lastGroup.rightPage = backCoverBlankPage;
          } else {
            let backFramePageGroup = {
              leftPage: blankFramePage,
              rightPage: backCoverBlankPage
            };
            groupArray.push(backFramePageGroup);
          }

          inputGroup.leftPage = framedPage;
        } else if (framedPage.frameName === '1') {
          let frontCoverBlankPage = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["FramedPage"](_gainhow_review_utils__WEBPACK_IMPORTED_MODULE_2__["FORNT_COVER_BLANK_PAGENAME"], _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_2__["FORNT_COVER_BLANK_PAGENAME"], framedPage.reviewModel, -1);
          inputGroup = {
            leftPage: frontCoverBlankPage,
            rightPage: framedPage
          };
        } else {
          if (isNeedUseOldGroup) {
            inputGroup = groupArray.pop();
            inputGroup.rightPage = framedPage;
          } else {
            inputGroup.leftPage = framedPage;
          }
        }

        groupArray.push(inputGroup);
      }

      return groupArray;
    }
  }

  function findGroupFramedPageWithFramedPage(groups, framedPage) {
    let result;
    let index = framedPage.frameIndexInModel;

    for (let i = 0; i < groups.length; i++) {
      let pageKeyArray = Object.keys(groups[i]);

      for (let j = 0; j < pageKeyArray.length; j++) {
        let key = pageKeyArray[j];

        if (groups[i][key].frameIndexInModel === index) {
          result = groups[i];
          break;
        }

        if (result) break;
      }
    }

    if (!result) throw Error('findGroupFramedPageWithFramedPage找不到GroupFramedPage');
    return result;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DoublePageWorkSpace, {
    style: workSpaceStyle,
    leftFramePage: pages.leftPage,
    rightFramePage: pages.rightPage,
    changeEditingPage: changeEditingPage,
    viewPercentage: props.viewPercentage,
    selectedFrameIndex: props.selectedFrameIndex,
    onDeleteSorceFileImage: props.onDeleteSorceFileImage
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_sortable_export_list_SortableExportList__WEBPACK_IMPORTED_MODULE_5__["SortableExportList"], {
    selectedModelIndex: props.selectedModelIndex,
    selectedFrameIndex: props.selectedFrameIndex,
    reviewItem: props.reviewItem,
    style: exportListStyle,
    onFrameSelect: props.onSelect,
    updateReviewItem: newReviewItem => props.updateReviewItem(newReviewItem),
    onShiftFramesBetween: props.onShiftFramesBetween
  }));
}

function DoublePageWorkSpace(props) {
  const [isLeftPageEditing, setIsLeftPageEditing] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);
  const [isRightPageEditing, setIsRightPageEditing] = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false);

  function setRightIsEditing() {
    setIsLeftPageEditing(false);
    setIsRightPageEditing(true);
  }

  function setLeftIsEditing() {
    setIsRightPageEditing(false);
    setIsLeftPageEditing(true);
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(() => {
    if (props.selectedFrameIndex === props.leftFramePage.frameIndexInModel && isRightPageEditing) {
      setLeftIsEditing();
    }

    if (props.selectedFrameIndex === props.rightFramePage.frameIndexInModel && isLeftPageEditing) {
      setRightIsEditing();
    }
  }, [props.selectedFrameIndex]);
  let canvasStyle = {
    display: "inline-block",
    verticalAlign: "top",
    height: props.style.height,
    backgroundColor: "#E4E4E4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    width: `calc(${props.style.width})`
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_canvans_Canvans__WEBPACK_IMPORTED_MODULE_4__["default"], {
    style: canvasStyle,
    leftFramePage: props.leftFramePage,
    rightFramePage: props.rightFramePage,
    viewPercentage: props.viewPercentage,
    isLeftPageEditing: isLeftPageEditing,
    isRightPageEditing: isRightPageEditing,
    setIsLeftPageEditing: isEditing => {
      setIsLeftPageEditing(isEditing);

      if (isEditing) {
        setIsRightPageEditing(false);
        props.changeEditingPage(props.leftFramePage);
      }
    },
    setIsRightPageEditing: isEditing => {
      setIsRightPageEditing(isEditing);

      if (isEditing) {
        setIsLeftPageEditing(false);
        props.changeEditingPage(props.rightFramePage);
      }
    }
  }), (isLeftPageEditing || isRightPageEditing) && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["SourceImageToolBar"], {
    onDelete: () => {
      props.onDeleteSorceFileImage();
      setIsLeftPageEditing(false);
      setIsRightPageEditing(false);
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (DoublePageView);

/***/ }),

/***/ "./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.module.css":
/*!*************************************************************************************!*\
  !*** ./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.module.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ExportOverview.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.tsx":
/*!******************************************************************************!*\
  !*** ./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.tsx ***!
  \******************************************************************************/
/*! exports provided: ExportOverview, default, PagePair */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportOverview", function() { return ExportOverview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagePair", function() { return PagePair; });
/* harmony import */ var _gainhow_review_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "../../../node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var _ExportOverview_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ExportOverview.module.css */ "./app/book-reviewer/reviewing-stage/export-overview/ExportOverview.module.css");
/* harmony import */ var _ExportOverview_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ExportOverview_module_css__WEBPACK_IMPORTED_MODULE_3__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function ExportOverview(props) {
  let reviewModel = props.reviewItem.models[0];
  let frameDictionary = props.reviewItem.product.frameDictionary;
  let book = frameDictionary.product;
  let pagingDirection = book.pagingDirection;
  let pagePairs = [];
  pagePairs.push({
    [pagingDirection == "RIGHT_TO_LEFT" ? "right" : "left"]: _objectSpread(_objectSpread({}, getNamedFramedPage(0)), {}, {
      name: '封面'
    })
  });

  if (book.numberOfPages > 0) {
    pagePairs.push({
      [pagingDirection == "RIGHT_TO_LEFT" ? "left" : "right"]: {
        name: '（封面裏）',
        isSelected: false
      },
      [pagingDirection == "RIGHT_TO_LEFT" ? "right" : "left"]: getNamedFramedPage(1)
    });

    for (let i = 2; i <= book.numberOfPages; i += 2) {
      let first = getNamedFramedPage(i);
      let second = i + 1 <= book.numberOfPages ? getNamedFramedPage(i + 1) : {
        name: '（封底裏）',
        isSelected: false
      };
      pagePairs.push({
        left: pagingDirection == "RIGHT_TO_LEFT" ? first : second,
        right: pagingDirection == "RIGHT_TO_LEFT" ? second : first
      });
    }

    if (book.numberOfPages % 2 !== 0) {
      pagePairs.push({
        [pagingDirection == "RIGHT_TO_LEFT" ? "right" : "left"]: {
          name: '（封底裏）',
          isSelected: false
        }
      });
    }
  } else {
    pagePairs.push({
      [pagingDirection == "RIGHT_TO_LEFT" ? "left" : "right"]: {
        name: '（封面裏）',
        isSelected: false
      },
      [pagingDirection == "RIGHT_TO_LEFT" ? "right" : "left"]: {
        name: '（封底裏）',
        isSelected: false
      }
    });
  }

  pagePairs.push({
    [pagingDirection == "RIGHT_TO_LEFT" ? "left" : "right"]: _objectSpread(_objectSpread({}, getNamedFramedPage(book.numberOfPages + 1)), {}, {
      name: '封底'
    })
  });
  let pagePairStyle = {
    // paddingLeft: 10,
    // paddingRight: 10,
    paddingTop: 20,
    height: 200
  };
  let pagePairsStyle = {
    padding: 30,
    paddingTop: 30
  };

  let style = _objectSpread({
    backgroundColor: "#F7F7F7"
  }, props.style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: pagePairsStyle
  }, pagePairs.map(pair => {
    var _pair$left, _pair$right;

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PagePair, {
      style: pagePairStyle,
      key: ((_pair$left = pair.left) === null || _pair$left === void 0 ? void 0 : _pair$left.name) || ((_pair$right = pair.right) === null || _pair$right === void 0 ? void 0 : _pair$right.name),
      pair: pair,
      pageWidthInMm: frameDictionary.frontCoverFrame.maxWidth,
      pageHeightInMm: frameDictionary.frontCoverFrame.maxHeight
    });
  })));

  function getNamedFramedPage(frameIndex) {
    return {
      name: String(frameIndex),
      frameIndex,
      framedPage: reviewModel.framedPages[frameIndex],
      isSelected: frameIndex == props.selectedFrameIndex,
      onSelect: () => props.onFrameSelect(frameIndex),
      onEdit: () => props.onFrameEdit(frameIndex),
      onInsert: () => props.onInsertBlankPageAfter(frameIndex),
      onDelete: () => props.onDeleteFrame(frameIndex),
      onShift: () => props.onShiftFramesBetween(props.selectedFrameIndex, frameIndex),
      onReplaceSourcePage: () => {},
      onDrop: () => props.onSwapFrames(frameIndex, props.selectedFrameIndex)
    };
  }
}
/* harmony default export */ __webpack_exports__["default"] = (ExportOverview);
function PagePair(props) {
  var _props$pair$left, _props$pair$right;

  let style = _objectSpread(_objectSpread({
    display: "inline-block",
    verticalAlign: "top"
  }, props.style), {}, {
    whiteSpace: "nowrap"
  });

  let height = 160;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MiddleLine, {
    onDrop: (_props$pair$left = props.pair.left) === null || _props$pair$left === void 0 ? void 0 : _props$pair$left.onShift,
    width: 25
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleFrame, {
    namedFramePage: props.pair.left,
    widthInMm: props.pageWidthInMm,
    heightInMm: props.pageHeightInMm,
    height: height
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MiddleLine, {
    onDrop: (_props$pair$right = props.pair.right) === null || _props$pair$right === void 0 ? void 0 : _props$pair$right.onShift
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleFrame, {
    namedFramePage: props.pair.right,
    widthInMm: props.pageWidthInMm,
    heightInMm: props.pageHeightInMm,
    height: height
  }));
}

function MiddleLine(props) {
  let [isDraggedOver, setIsDraggedOver] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "inline-block",
      position: 'relative',
      width: props.width || 5,
      margin: 1,
      marginTop: 20,
      height: 187
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "inline-block",
      width: props.width || 5,
      position: 'absolute',
      top: 0,
      left: 0,
      height: 187,
      zIndex: 2
    },
    onDragEnter: () => setIsDraggedOver(true),
    onDragLeave: () => setIsDraggedOver(false),
    onDragOver: event => {
      event.preventDefault();
      event.stopPropagation();
    },
    onDrop: () => {
      setIsDraggedOver(false);
      props.onDrop();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: 5,
      height: 187,
      position: 'relative',
      left: ((props.width || 5) - 5) / 2,
      backgroundColor: isDraggedOver && props.onDrop ? '#4ba3ff77' : 'inherit',
      borderRadius: '1px',
      boxShadow: isDraggedOver && props.onDrop ? '0 0 1px 1px #4ba3ff77' : 'none',
      zIndex: 1
    }
  }));
}

function useImage(source) {
  let image = new Image(0, 0);
  image.src = source;
  let [statedImage, setStatedImage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(image);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    image = new Image(0, 0);
    image.src = source;
    setStatedImage(image);
  }, [source]);
  return statedImage;
}

function SingleFrame(props) {
  var _props$namedFramePage, _props$namedFramePage2, _props$namedFramePage3, _props$namedFramePage4, _props$namedFramePage5;

  let [showToolBar, setShowToolBar] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let [isDroppable, setIsDroppable] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false); // let dragImage = useImage(
  //     (props.namedFramePage?.framedPage?.getSourcePageInfo()?.jpegUrl) || ""
  // );
  // let dragImage = useImage("");

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "inline-block",
      verticalAlign: "top",
      position: "relative",
      left: 0,
      top: 0
    },
    onMouseEnter: () => setShowToolBar(true),
    onMouseLeave: () => setShowToolBar(false),
    title: "\u62D6\u66F3\u4EE5\u8ABF\u63DB\u9801\u5E8F"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleFrameToolBar, {
    isHidden: !showToolBar || ((_props$namedFramePage = props.namedFramePage) === null || _props$namedFramePage === void 0 ? void 0 : _props$namedFramePage.framedPage) === undefined,
    onEdit: (_props$namedFramePage2 = props.namedFramePage) === null || _props$namedFramePage2 === void 0 ? void 0 : _props$namedFramePage2.onEdit,
    onInsert: (_props$namedFramePage3 = props.namedFramePage) === null || _props$namedFramePage3 === void 0 ? void 0 : _props$namedFramePage3.onInsert,
    onDelete: (_props$namedFramePage4 = props.namedFramePage) === null || _props$namedFramePage4 === void 0 ? void 0 : _props$namedFramePage4.onDelete,
    onReplaceSourcePage: (_props$namedFramePage5 = props.namedFramePage) === null || _props$namedFramePage5 === void 0 ? void 0 : _props$namedFramePage5.onReplaceSourcePage
  }), !props.namedFramePage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(NoFrame, {
    widthInMm: props.widthInMm,
    heightInMm: props.heightInMm,
    height: props.height
  }) : !props.namedFramePage.framedPage ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlankFrame, {
    widthInMm: props.widthInMm,
    heightInMm: props.heightInMm,
    withBorder: true,
    isSelected: props.namedFramePage.isSelected,
    name: props.namedFramePage.name,
    height: props.height
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: 'relative',
      cursor: 'move'
    },
    onClick: () => props.namedFramePage.onSelect(),
    onDoubleClick: () => props.namedFramePage.onEdit() // draggable
    // onDragStart={(event) => {
    //     console.log(event);
    //     event.dataTransfer.setDragImage(dragImage, 0, 0);
    //     props.namedFramePage.onSelect();
    // }}

  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_0__["ExportingFrame"], {
    shadowed: true,
    framedPage: props.namedFramePage.framedPage,
    isSelected: props.namedFramePage.isSelected,
    onSelect: () => props.namedFramePage.onSelect(),
    horizontalPadding: 0,
    height: props.height,
    onDragEnter: () => setIsDroppable(true),
    onDragStart: event => {
      console.log(event); // event.dataTransfer.setDragImage(dragImage, 0, 0);

      props.namedFramePage.onSelect();
    }
  }), isDroppable && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      position: "absolute",
      top: props.namedFramePage.isSelected ? -4 : 0,
      left: 0,
      border: `solid ${props.namedFramePage.isSelected ? 3 : 1}px #ffffff00`
    },
    onDragOver: event => {
      //event.stopPropagation();
      event.preventDefault();
    },
    onDragLeave: event => {
      event.preventDefault();
      setIsDroppable(false);
    },
    onDrop: event => {
      setIsDroppable(false);
      props.namedFramePage.onDrop();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ShadowingFrame, {
    widthInMm: props.widthInMm,
    heightInMm: props.heightInMm,
    height: props.height
  }))));
}

function BlankFrame(props) {
  let frameWidthInPx = props.height / props.heightInMm * props.widthInMm;
  let pageIndexStyle = {
    width: frameWidthInPx + (props.isSelected ? 6 : 0),
    color: props.isSelected ? "#1581ff" : "black",
    fontSize: 14,
    fontFamily: "arial",
    textAlign: "center"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      display: "inline-block",
      verticalAlign: "top"
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      width: frameWidthInPx,
      height: props.height,
      border: !props.withBorder ? "none" : props.isSelected ? "solid 3px #1581ff" : "solid 1px #707070",
      marginTop: props.isSelected ? 5 : 9,
      paddingBottom: 0,
      backgroundColor: props.backgroundColor ? props.backgroundColor : props.withBorder ? "white" : "inherit"
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: pageIndexStyle
  }, props.name));
}

function NoFrame(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlankFrame, {
    widthInMm: props.widthInMm,
    heightInMm: props.heightInMm,
    withBorder: false,
    isSelected: false,
    height: props.height
  });
}

function ShadowingFrame(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(BlankFrame, {
    widthInMm: props.widthInMm,
    heightInMm: props.heightInMm,
    withBorder: false,
    isSelected: false,
    height: props.height,
    backgroundColor: "#4ba3ff77"
  });
}

function SingleFrameToolBar(props) {
  let style = {
    height: 20,
    fontSize: 18,
    color: "#777777"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: style
  }, !props.isHidden && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, "\u2009", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleFrameToolBarButton, {
    onClick: props.onInsert,
    title: "\u5F80\u53F3\u65B0\u589E\u9801\u9762"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], null)), "\u2009", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleFrameToolBarButton, {
    onClick: props.onReplaceSourcePage,
    title: "\u7F6E\u5165\u9801\u9762"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SwapOutlined"], null)), "\u2009", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleFrameToolBarButton, {
    onClick: props.onEdit,
    title: "\u7DE8\u8F2F\u9801\u9762"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], null)), "\u2009", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(SingleFrameToolBarButton, {
    onClick: props.onDelete,
    title: "\u522A\u9664\u9801\u9762"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["DeleteOutlined"], null))));
}

function SingleFrameToolBarButton(props) {
  let [isHovered, setIsHovered] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: {
      borderRadius: '30% 30%',
      padding: '0px 3px',
      backgroundColor: isHovered ? 'LightGray' : 'inherit',
      display: 'inline-block',
      cursor: 'pointer'
    },
    onMouseEnter: () => setIsHovered(true),
    onMouseLeave: () => setIsHovered(false),
    onClick: props.onClick,
    title: props.title
  }, props.children);
}

/***/ }),

/***/ "./app/book-reviewer/sortable-export-list/SortableExportList.tsx":
/*!***********************************************************************!*\
  !*** ./app/book-reviewer/sortable-export-list/SortableExportList.tsx ***!
  \***********************************************************************/
/*! exports provided: SortableExportList, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortableExportList", function() { return SortableExportList; });
/* harmony import */ var _gainhow_review_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gainhow-review/data */ "../../../libs/data/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @gainhow-review/utils */ "../../../libs/utils/src/index.ts");
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-sortablejs */ "../../../node_modules/react-sortablejs/dist/index.js");
/* harmony import */ var react_sortablejs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function SortableExportList(props) {
  let product = props.reviewItem.product;
  let [sortableFramedPages, setSortable] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(sortableFramedPagesWithFramedPages(props.reviewItem.models[props.selectedModelIndex].framedPages, product.pagingDirection));
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    setSortable(sortableFramedPagesWithFramedPages(props.reviewItem.models[props.selectedModelIndex].framedPages, product.pagingDirection));
  }, [props.reviewItem]);

  let style = _objectSpread({
    backgroundColor: "#f7f7f7",
    border: '2px solid #E4E4E4',
    borderLeft: 'none',
    overflow: "auto",
    whiteSpace: "nowrap",
    userSelect: 'none'
  }, props.style);

  let modelsStyle = {
    marginLeft: 30,
    marginRight: 30,
    display: "inline-block",
    marginTop: 27
  };

  function isSelected(props, modelIndex, frameIndex) {
    if (props.selectedModelIndex === modelIndex && props.selectedFrameIndex === frameIndex) {
      return true;
    }

    return false;
  }

  function onDragStart(props, evt) {
    let frameNames = props.reviewItem.models[0].frameNames;
    let oldIndex = frameNames.indexOf(evt.clone.innerText.toString());
    if (oldIndex === -1) return;
    props.onFrameSelect(props.selectedModelIndex, oldIndex);
  }

  function onDragEnd(props, evt) {
    let sortableFramedPage = sortableFramedPagesWithFramedPages(props.reviewItem.models[0].framedPages, product.pagingDirection);
    let newIndex = sortableFramedPage[evt.newIndex].FramedPage.frameIndexInModel;
    let oldIndex = sortableFramedPage[evt.oldIndex].FramedPage.frameIndexInModel;
    console.log(newIndex);

    if (newIndex != -1 && oldIndex != -1) {
      props.onFrameSelect(props.selectedModelIndex, newIndex);
      props.onShiftFramesBetween(oldIndex, newIndex);
    }
  }

  function onchange(props, evt) {
    let sortableFramedPage = sortableFramedPagesWithFramedPages(props.reviewItem.models[0].framedPages, product.pagingDirection);
    let newIndex = sortableFramedPage[evt.newIndex].FramedPage.frameIndexInModel;

    if (newIndex === -1) {
      console.log('-1~~');
    }
  }

  function sortableFramedPagesWithFramedPages(framedPages, direct) {
    let sortableFramedPages = [];

    if (direct === 'RIGHT_TO_LEFT') {
      sortableFramedPages = rightToLeftSortableFramedPage(framedPages);
    } else if (direct === 'LEFT_TO_RIGHT') {
      sortableFramedPages = leftToRightSortableFramedPage(framedPages);
    }

    return sortableFramedPages;

    function rightToLeftSortableFramedPage(framedPages) {
      let sortableArray = [];
      let reviewModel = framedPages[0].reviewModel;
      let blankSortableFramePage = {
        id: '空白頁',
        FramedPage: new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["FramedPage"]('空白頁', '空白頁', reviewModel, -1),
        filtered: true
      };
      let frontCoverBlankPage = {
        id: _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["FORNT_COVER_BLANK_PAGENAME"],
        FramedPage: new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["FramedPage"](_gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["FORNT_COVER_BLANK_PAGENAME"], _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["FORNT_COVER_BLANK_PAGENAME"], reviewModel, -1),
        filtered: true
      };
      let backCoverBlankSortablePage = {
        id: _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["BACK_COVER_BLANK_PAGENAME"],
        FramedPage: new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_1__["FramedPage"](_gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["BACK_COVER_BLANK_PAGENAME"], _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["BACK_COVER_BLANK_PAGENAME"], reviewModel, -1),
        filtered: true
      };
      let lastFramedPageName = (framedPages.length - 2).toString();

      for (let i = 0; i < framedPages.length; i++) {
        let framedPage = framedPages[i];
        let frameName = framedPage.frameName;
        let sortableFramedPage = {
          id: frameName,
          FramedPage: framedPage
        };

        switch (frameName) {
          case '封面':
            sortableArray.push(blankSortableFramePage); //先插入空白頁

            sortableArray.push(sortableFramedPage); //插入自己

            break;

          case '1':
            sortableArray.push(frontCoverBlankPage); //先插入封面裏

            sortableArray.push(sortableFramedPage); //插入自己

            break;

          case lastFramedPageName:
            sortableArray.push(sortableFramedPage); //插入自己

            sortableArray.push(backCoverBlankSortablePage); //插入封面裏

            break;

          case '封底':
            sortableArray.push(sortableFramedPage); //插入自己

            sortableArray.push(blankSortableFramePage); //插入空白頁

            break;

          default:
            sortableArray.push(sortableFramedPage);
          //插入自己
        }
      }

      return sortableArray;
    }

    function leftToRightSortableFramedPage(framedPages) {
      let rightToLeftArray = rightToLeftSortableFramedPage(framedPages);
      let result = [];

      for (let i = 0; i < rightToLeftArray.length; i++) {
        let rightPage = rightToLeftArray[i];
        result.push(rightPage);

        if (i + 1 < rightToLeftArray.length) {
          i = i + 1;
          let leftPage = rightToLeftArray[i];
          result.push(leftPage);
        }
      }

      return result;
    }
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: modelsStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_sortablejs__WEBPACK_IMPORTED_MODULE_4__["ReactSortable"], {
    list: sortableFramedPages,
    setList: () => {},
    onStart: event => onDragStart(props, event),
    onEnd: event => onDragEnd(props, event),
    filter: '.notSortable',
    onChange: event => onchange(props, event)
  }, sortableFramedPages.map((sortableFramedPage, index) => {
    let page = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(ShingleSortableFrame, {
      sortableFramedPage: sortableFramedPage,
      onSelect: frameIndex => {
        props.onFrameSelect(0, frameIndex);
      },
      isSelected: frameIndex => {
        return isSelected(props, 0, frameIndex);
      }
    });
    let marginDiv = null;

    if (index % 2 === 1) {
      marginDiv = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          width: 25,
          height: '100%',
          display: 'inline-block'
        }
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        display: 'inline-block'
      },
      key: index
    }, page, marginDiv);
  }))));
}
;

function ShingleSortableFrame(props) {
  let framedPage = props.sortableFramedPage.FramedPage;

  if (framedPage.frameName === '空白頁') {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      className: "notSortable"
    });
  } else if (framedPage.frameName === _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["FORNT_COVER_BLANK_PAGENAME"] || framedPage.frameName === _gainhow_review_utils__WEBPACK_IMPORTED_MODULE_3__["BACK_COVER_BLANK_PAGENAME"]) {
    let coverFrame = framedPage.reviewModel.getFrame('封面');
    let frameHeightInMm = coverFrame.maxHeight;
    let frameWidthInMm = coverFrame.maxWidth;
    let ratio = frameWidthInMm / frameHeightInMm;
    let frameHeightInPx = props.height || 96;
    let frameWidthInPx = frameHeightInPx * ratio;
    let coverBlankFramePageStyle;
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
      style: {
        display: 'inline-block'
      },
      key: framedPage.frameIndexInModel
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_0__["CoverBlankFramePage"], {
      frameName: framedPage.frameName,
      style: coverBlankFramePageStyle,
      frameHeightInPx: frameHeightInPx,
      frameWidthInPx: frameWidthInPx,
      horizontalPadding: 3
    }));
  } else {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_0__["ExportingFrame"], {
      framedPage: framedPage,
      isSelected: props.isSelected(framedPage.frameIndexInModel),
      onSelect: () => {
        props.onSelect(framedPage.frameIndexInModel);
      },
      height: props.height,
      horizontalPadding: 3,
      isDroggable: true
    }), framedPage.frameName === '封底' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_0__["DrogMiddleLine"], {
      height: props.height
    }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null));
  }
}

/* harmony default export */ __webpack_exports__["default"] = (SortableExportList);

/***/ }),

/***/ "./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.module.css":
/*!****************************************************************************************!*\
  !*** ./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.module.css ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./SideToolBar.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.tsx":
/*!*********************************************************************************!*\
  !*** ./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.tsx ***!
  \*********************************************************************************/
/*! exports provided: SideToolBar, default, Icon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideToolBar", function() { return SideToolBar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return Icon; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_UndoIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/icons/UndoIcon.svg */ "./assets/icons/UndoIcon.svg");
/* harmony import */ var _assets_icons_RedoIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/icons/RedoIcon.svg */ "./assets/icons/RedoIcon.svg");
/* harmony import */ var _assets_icons_SaveIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/icons/SaveIcon.svg */ "./assets/icons/SaveIcon.svg");
/* harmony import */ var _assets_icons_ZoomInIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../assets/icons/ZoomInIcon.svg */ "./assets/icons/ZoomInIcon.svg");
/* harmony import */ var _assets_icons_ZoomOutIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../assets/icons/ZoomOutIcon.svg */ "./assets/icons/ZoomOutIcon.svg");
/* harmony import */ var _assets_icons_ResetSizeIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../assets/icons/ResetSizeIcon.svg */ "./assets/icons/ResetSizeIcon.svg");
/* harmony import */ var _SideToolBar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideToolBar.module.css */ "./app/single-sheet-reviewer/reviewing-stage/side-tool-bar/SideToolBar.module.css");
/* harmony import */ var _SideToolBar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SideToolBar_module_css__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function SideToolBar(props) {
  let style = _objectSpread({
    width: 50,
    backgroundColor: '#F7F7F7',
    overflow: 'auto'
  }, props.style);

  let hrStyle = {
    margin: 8,
    border: 'solid 1px #d9d9d9'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      height: `calc(${props.style.height} - 445px)`
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: _assets_icons_UndoIcon_svg__WEBPACK_IMPORTED_MODULE_1__["default"],
    onClick: props.onUndo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: _assets_icons_RedoIcon_svg__WEBPACK_IMPORTED_MODULE_2__["default"],
    onClick: props.onRedo
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: hrStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: _assets_icons_SaveIcon_svg__WEBPACK_IMPORTED_MODULE_3__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", {
    style: hrStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ZoomingToolBar, {
    zoom: props.zoom
  }));
}
;
/* harmony default export */ __webpack_exports__["default"] = (SideToolBar);
function Icon(props) {
  let style = _objectSpread({
    width: 50,
    height: 30,
    textAlign: 'center',
    paddingTop: 10,
    paddingBottom: 10
  }, props.style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.isSelected && props.srcWhenSelected ? props.srcWhenSelected : props.src,
    onClick: props.onClick,
    style: {
      cursor: 'pointer'
    }
  }));
}

function ZoomingToolBar(props) {
  let style = {
    position: 'relative'
  };
  let zoomIconStyle = {
    paddingTop: 5,
    paddingBottom: 5
  };
  const zoomPadMovementPerClickOnIcons = 5;
  const zoomBarLength = 120;
  let [[mousePosition, zoomPadPosition], setPositions] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([0, zoomBarLength / 2]);
  let upperZoomBarStyle = {
    width: 0,
    height: zoomBarLength - zoomPadPosition,
    marginLeft: 24,
    border: 'solid 2px #d9d9d9',
    borderRadius: 2
  };
  let zoomPadStyle = {
    position: 'absolute',
    left: 18,
    top: 35 + zoomBarLength - zoomPadPosition,
    width: 14,
    height: 14,
    backgroundColor: '#666666',
    border: "solid 1px #d9d9d9",
    borderRadius: '50%',
    cursor: 'grab'
  };
  let lowerZoomBarStyle = {
    width: 0,
    height: zoomPadPosition,
    marginLeft: 24,
    border: 'solid 2px #666666',
    borderRadius: 2
  };
  const transparentImageSource = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
  let transparentImage = new Image(0, 0);
  transparentImage.src = transparentImageSource;
  let [dragImage, _] = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(transparentImage);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    props.zoom(zoomPadPosition / (zoomBarLength / 2));
  }, [zoomPadPosition]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    onDragOver: event => setPositions(([oldMousePosition, oldZoomPadPosition]) => {
      let newMousePosition = event.pageY;
      let offset = oldMousePosition - newMousePosition;
      let newZoomPadPosition = oldZoomPadPosition + offset;
      if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
      if (newZoomPadPosition < 0) newZoomPadPosition = 0;
      return [newMousePosition, newZoomPadPosition];
    })
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    style: zoomIconStyle,
    src: _assets_icons_ZoomOutIcon_svg__WEBPACK_IMPORTED_MODULE_5__["default"],
    onClick: () => {
      setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newZoomPadPosition = oldZoomPadPosition + zoomPadMovementPerClickOnIcons;
        if (newZoomPadPosition > zoomBarLength) newZoomPadPosition = zoomBarLength;
        return [oldMousePosition, newZoomPadPosition];
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: upperZoomBarStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: zoomPadStyle,
    draggable: true,
    onDragStart: event => {
      event.dataTransfer.setDragImage(dragImage, 0, 0);
      event.dataTransfer.clearData();
      setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newMousePosition = event.pageY;
        return [newMousePosition, oldZoomPadPosition];
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: lowerZoomBarStyle
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    style: zoomIconStyle,
    src: _assets_icons_ZoomInIcon_svg__WEBPACK_IMPORTED_MODULE_4__["default"],
    onClick: () => {
      setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newZoomPadPosition = oldZoomPadPosition - zoomPadMovementPerClickOnIcons;
        if (newZoomPadPosition < 0) newZoomPadPosition = 0;
        return [oldMousePosition, newZoomPadPosition];
      });
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: _assets_icons_ResetSizeIcon_svg__WEBPACK_IMPORTED_MODULE_6__["default"],
    onClick: () => {
      setPositions(([oldMousePosition, oldZoomPadPosition]) => {
        let newZoomPadPosition = zoomBarLength / 2;
        return [oldMousePosition, newZoomPadPosition];
      });
    }
  }));
}

/***/ }),

/***/ "./app/testObjects2.ts":
/*!*****************************!*\
  !*** ./app/testObjects2.ts ***!
  \*****************************/
/*! exports provided: reviewItem, uploadFileStatuses1, reviewRegistrationInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewItem", function() { return reviewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFileStatuses1", function() { return uploadFileStatuses1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewRegistrationInfo", function() { return reviewRegistrationInfo; });
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/data */ "../../../libs/data/src/index.ts");
/* harmony import */ var _assets_testImages_to_one_with_life_front_cover_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/testImages/to-one-with-life/front-cover.jpg */ "./assets/testImages/to-one-with-life/front-cover.jpg");
/* harmony import */ var _assets_testImages_to_one_with_life_front_cover_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_to_one_with_life_front_cover_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_testImages_to_one_with_life_1_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/testImages/to-one-with-life/1.jpg */ "./assets/testImages/to-one-with-life/1.jpg");
/* harmony import */ var _assets_testImages_to_one_with_life_1_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_to_one_with_life_1_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_testImages_to_one_with_life_2_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/testImages/to-one-with-life/2.jpg */ "./assets/testImages/to-one-with-life/2.jpg");
/* harmony import */ var _assets_testImages_to_one_with_life_2_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_to_one_with_life_2_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_testImages_to_one_with_life_3_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/testImages/to-one-with-life/3.jpg */ "./assets/testImages/to-one-with-life/3.jpg");
/* harmony import */ var _assets_testImages_to_one_with_life_3_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_to_one_with_life_3_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_testImages_to_one_with_life_4_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/testImages/to-one-with-life/4.jpg */ "./assets/testImages/to-one-with-life/4.jpg");
/* harmony import */ var _assets_testImages_to_one_with_life_4_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_to_one_with_life_4_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _assets_testImages_to_one_with_life_5_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/testImages/to-one-with-life/5.jpg */ "./assets/testImages/to-one-with-life/5.jpg");
/* harmony import */ var _assets_testImages_to_one_with_life_5_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_to_one_with_life_5_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _assets_testImages_to_one_with_life_6_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/testImages/to-one-with-life/6.jpg */ "./assets/testImages/to-one-with-life/6.jpg");
/* harmony import */ var _assets_testImages_to_one_with_life_6_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_to_one_with_life_6_jpg__WEBPACK_IMPORTED_MODULE_7__);








const paperMaterial1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["PaperMaterial"]("一級卡");
const paperMaterial2 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["PaperMaterial"]("象牙卡");
const paper1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["Paper"]("雲彩紙", paperMaterial1, 250, 250, true);
const paper2 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["Paper"]("銅版紙120g", paperMaterial1, 280, 300, true);
const coat1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["Coat"]('壓紋', '壓紋');
const book = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["SaddleStichedBook"](210, 297, 20, "RIGHT_TO_LEFT", paper1, paper2, coat1);
const reviewRegistrationInfo = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewRegistrationInfo"](1, book);
const reviewStatus = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewStatus"](1);
const fileName1 = "獻給一切生靈-封面";
let frontCoverFileStatus = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFileStatus"](reviewStatus, fileName1);
frontCoverFileStatus.pageInfos = [new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"](frontCoverFileStatus, "", _assets_testImages_to_one_with_life_front_cover_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, 210, 297)];
const fileName2 = "獻給一切生靈-內頁";
let innerPagesFileStatus = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFileStatus"](reviewStatus, fileName2);
innerPagesFileStatus.pageInfos = [_assets_testImages_to_one_with_life_1_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, _assets_testImages_to_one_with_life_2_jpg__WEBPACK_IMPORTED_MODULE_3___default.a, _assets_testImages_to_one_with_life_3_jpg__WEBPACK_IMPORTED_MODULE_4___default.a, _assets_testImages_to_one_with_life_4_jpg__WEBPACK_IMPORTED_MODULE_5___default.a, _assets_testImages_to_one_with_life_5_jpg__WEBPACK_IMPORTED_MODULE_6___default.a, _assets_testImages_to_one_with_life_6_jpg__WEBPACK_IMPORTED_MODULE_7___default.a].map(jpegSource => new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"](innerPagesFileStatus, "", jpegSource, 210, 297));
const uploadFileStatuses1 = [frontCoverFileStatus, innerPagesFileStatus];
reviewStatus.numberOfModels = 1; // reviewStatus1.modelIds = ["test-review-id-01", "test-review-id-02", "test-review-id-03"];

reviewStatus.numberOfFiles = 2;
reviewStatus.uploadFileStatuses = uploadFileStatuses1;
reviewStatus.progress = "REGISTERED";
const reviewItem = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"](reviewStatus, 'reviewIdwedwewqe', book);
const reviewModel = reviewItem.models[0];
const frontCover = reviewModel.framedPages[0];
frontCover.sourceFileIndex = 0;
frontCover.sourcePageNumber = 0;
frontCover.positionX = -90;
frontCover.positionY = 10;
frontCover.rotationDegree = 0;

for (let i = 1; i <= book.numberOfPages; i++) {
  reviewModel.framedPages[i].sourceFileIndex = 1;
  reviewModel.framedPages[i].sourcePageNumber = (i + 5) % 6;
}



/***/ }),

/***/ "./assets/icons/DoublePageViewMode.svg":
/*!*********************************************!*\
  !*** ./assets/icons/DoublePageViewMode.svg ***!
  \*********************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip-path"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12616",
  "data-name": "Rectangle 12616",
  width: 24,
  height: 24,
  transform: "translate(0 0)",
  fill: "none"
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43049",
  "data-name": "Group 43049",
  transform: "translate(0.622 2.622)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43048",
  "data-name": "Group 43048",
  transform: "translate(-0.622 -2.622)",
  clipPath: "url(#clip-path)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36002",
  "data-name": "Path 36002",
  d: "M1.048,5.957C7.817,5.5,11.654,7.172,11.654,7.172V21.261A43.045,43.045,0,0,0,1.086,20.09.589.589,0,0,1,.5,19.505V6.545A.591.591,0,0,1,1.048,5.957Z",
  transform: "translate(0.346 -0.043)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36003",
  "data-name": "Path 36003",
  d: "M30.105,5.957C23.337,5.5,19.5,7.172,19.5,7.172V21.261A43.045,43.045,0,0,1,30.068,20.09a.589.589,0,0,0,.586-.585V6.545A.591.591,0,0,0,30.105,5.957Z",
  transform: "translate(-7.5 -0.043)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36004",
  "data-name": "Path 36004",
  d: "M4.554.513C11.153.224,13.1,4.951,13.1,4.951V19.04s-1.941-4.161-8.522-4.393A.591.591,0,0,1,4,14.062V1.1A.587.587,0,0,1,4.554.513",
  transform: "translate(-1.099 2.178)",
  fill: "#f6f6f6",
  stroke: "#666",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36005",
  "data-name": "Path 36005",
  d: "M4.554.513C11.153.224,13.1,4.951,13.1,4.951V19.04s-1.941-4.161-8.522-4.393A.591.591,0,0,1,4,14.062V1.1A.587.587,0,0,1,4.554.513Z",
  transform: "translate(-1.099 2.178)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36006",
  "data-name": "Path 36006",
  d: "M28.046.513C21.447.224,19.5,4.951,19.5,4.951V19.04s1.941-4.161,8.522-4.393a.591.591,0,0,0,.577-.585V1.1a.587.587,0,0,0-.554-.588",
  transform: "translate(-7.5 2.178)",
  fill: "#f6f6f6",
  stroke: "#666",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36007",
  "data-name": "Path 36007",
  d: "M28.046.513C21.447.224,19.5,4.951,19.5,4.951V19.04s1.941-4.161,8.522-4.393a.591.591,0,0,0,.577-.585V1.1A.587.587,0,0,0,28.046.513Z",
  transform: "translate(-7.5 2.178)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36008",
  "data-name": "Path 36008",
  d: "M27.2,17.082a7.032,7.032,0,0,0-4.7,1.761",
  transform: "translate(-8.739 -4.67)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36009",
  "data-name": "Path 36009",
  d: "M27.2,13.082a7.032,7.032,0,0,0-4.7,1.761",
  transform: "translate(-8.739 -3.018)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36010",
  "data-name": "Path 36010",
  d: "M27.2,9.082a7.032,7.032,0,0,0-4.7,1.761",
  transform: "translate(-8.739 -1.366)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36011",
  "data-name": "Path 36011",
  d: "M8.5,17.082a7.032,7.032,0,0,1,4.7,1.761",
  transform: "translate(-2.957 -4.67)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36012",
  "data-name": "Path 36012",
  d: "M8.5,13.082a7.032,7.032,0,0,1,4.7,1.761",
  transform: "translate(-2.957 -3.018)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36013",
  "data-name": "Path 36013",
  d: "M8.5,9.082a7.032,7.032,0,0,1,4.7,1.761",
  transform: "translate(-2.957 -1.366)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgDoublePageViewMode(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDoublePageViewMode);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MTYiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNjE2IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9Im5vbmUiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF80MzA0OSIgZGF0YS1uYW1lPSJHcm91cCA0MzA0OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC42MjIgMi42MjIpIj4KICAgIDxnIGlkPSJHcm91cF80MzA0OCIgZGF0YS1uYW1lPSJHcm91cCA0MzA0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNjIyIC0yLjYyMikiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzYwMDIiIGRhdGEtbmFtZT0iUGF0aCAzNjAwMiIgZD0iTTEuMDQ4LDUuOTU3QzcuODE3LDUuNSwxMS42NTQsNy4xNzIsMTEuNjU0LDcuMTcyVjIxLjI2MUE0My4wNDUsNDMuMDQ1LDAsMCwwLDEuMDg2LDIwLjA5LjU4OS41ODksMCwwLDEsLjUsMTkuNTA1VjYuNTQ1QS41OTEuNTkxLDAsMCwxLDEuMDQ4LDUuOTU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zNDYgLTAuMDQzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAwMyIgZGF0YS1uYW1lPSJQYXRoIDM2MDAzIiBkPSJNMzAuMTA1LDUuOTU3QzIzLjMzNyw1LjUsMTkuNSw3LjE3MiwxOS41LDcuMTcyVjIxLjI2MUE0My4wNDUsNDMuMDQ1LDAsMCwxLDMwLjA2OCwyMC4wOWEuNTg5LjU4OSwwLDAsMCwuNTg2LS41ODVWNi41NDVBLjU5MS41OTEsMCwwLDAsMzAuMTA1LDUuOTU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuNSAtMC4wNDMpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDA0IiBkYXRhLW5hbWU9IlBhdGggMzYwMDQiIGQ9Ik00LjU1NC41MTNDMTEuMTUzLjIyNCwxMy4xLDQuOTUxLDEzLjEsNC45NTFWMTkuMDRzLTEuOTQxLTQuMTYxLTguNTIyLTQuMzkzQS41OTEuNTkxLDAsMCwxLDQsMTQuMDYyVjEuMUEuNTg3LjU4NywwLDAsMSw0LjU1NC41MTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjA5OSAyLjE3OCkiIGZpbGw9IiNmNmY2ZjYiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDA1IiBkYXRhLW5hbWU9IlBhdGggMzYwMDUiIGQ9Ik00LjU1NC41MTNDMTEuMTUzLjIyNCwxMy4xLDQuOTUxLDEzLjEsNC45NTFWMTkuMDRzLTEuOTQxLTQuMTYxLTguNTIyLTQuMzkzQS41OTEuNTkxLDAsMCwxLDQsMTQuMDYyVjEuMUEuNTg3LjU4NywwLDAsMSw0LjU1NC41MTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wOTkgMi4xNzgpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDA2IiBkYXRhLW5hbWU9IlBhdGggMzYwMDYiIGQ9Ik0yOC4wNDYuNTEzQzIxLjQ0Ny4yMjQsMTkuNSw0Ljk1MSwxOS41LDQuOTUxVjE5LjA0czEuOTQxLTQuMTYxLDguNTIyLTQuMzkzYS41OTEuNTkxLDAsMCwwLC41NzctLjU4NVYxLjFhLjU4Ny41ODcsMCwwLDAtLjU1NC0uNTg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNy41IDIuMTc4KSIgZmlsbD0iI2Y2ZjZmNiIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzYwMDciIGRhdGEtbmFtZT0iUGF0aCAzNjAwNyIgZD0iTTI4LjA0Ni41MTNDMjEuNDQ3LjIyNCwxOS41LDQuOTUxLDE5LjUsNC45NTFWMTkuMDRzMS45NDEtNC4xNjEsOC41MjItNC4zOTNhLjU5MS41OTEsMCwwLDAsLjU3Ny0uNTg1VjEuMUEuNTg3LjU4NywwLDAsMCwyOC4wNDYuNTEzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuNSAyLjE3OCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzYwMDgiIGRhdGEtbmFtZT0iUGF0aCAzNjAwOCIgZD0iTTI3LjIsMTcuMDgyYTcuMDMyLDcuMDMyLDAsMCwwLTQuNywxLjc2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTguNzM5IC00LjY3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAwOSIgZGF0YS1uYW1lPSJQYXRoIDM2MDA5IiBkPSJNMjcuMiwxMy4wODJhNy4wMzIsNy4wMzIsMCwwLDAtNC43LDEuNzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOC43MzkgLTMuMDE4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAxMCIgZGF0YS1uYW1lPSJQYXRoIDM2MDEwIiBkPSJNMjcuMiw5LjA4MmE3LjAzMiw3LjAzMiwwLDAsMC00LjcsMS43NjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjczOSAtMS4zNjYpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDExIiBkYXRhLW5hbWU9IlBhdGggMzYwMTEiIGQ9Ik04LjUsMTcuMDgyYTcuMDMyLDcuMDMyLDAsMCwxLDQuNywxLjc2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuOTU3IC00LjY3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAxMiIgZGF0YS1uYW1lPSJQYXRoIDM2MDEyIiBkPSJNOC41LDEzLjA4MmE3LjAzMiw3LjAzMiwwLDAsMSw0LjcsMS43NjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjk1NyAtMy4wMTgpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDEzIiBkYXRhLW5hbWU9IlBhdGggMzYwMTMiIGQ9Ik04LjUsOS4wODJhNy4wMzIsNy4wMzIsMCwwLDEsNC43LDEuNzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi45NTcgLTEuMzY2KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./assets/icons/DoublePageViewModeBlue.svg":
/*!*************************************************!*\
  !*** ./assets/icons/DoublePageViewModeBlue.svg ***!
  \*************************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip-path"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12616",
  "data-name": "Rectangle 12616",
  width: 24,
  height: 24,
  transform: "translate(0 0)",
  fill: "none"
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43049",
  "data-name": "Group 43049",
  transform: "translate(0.622 2.622)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43048",
  "data-name": "Group 43048",
  transform: "translate(-0.622 -2.622)",
  clipPath: "url(#clip-path)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36002",
  "data-name": "Path 36002",
  d: "M1.048,5.957C7.817,5.5,11.654,7.172,11.654,7.172V21.261A43.045,43.045,0,0,0,1.086,20.09.589.589,0,0,1,.5,19.505V6.545A.591.591,0,0,1,1.048,5.957Z",
  transform: "translate(0.346 -0.043)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36003",
  "data-name": "Path 36003",
  d: "M30.105,5.957C23.337,5.5,19.5,7.172,19.5,7.172V21.261A43.045,43.045,0,0,1,30.068,20.09a.589.589,0,0,0,.586-.585V6.545A.591.591,0,0,0,30.105,5.957Z",
  transform: "translate(-7.5 -0.043)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36004",
  "data-name": "Path 36004",
  d: "M4.554.513C11.153.224,13.1,4.951,13.1,4.951V19.04s-1.941-4.161-8.522-4.393A.591.591,0,0,1,4,14.062V1.1A.587.587,0,0,1,4.554.513",
  transform: "translate(-1.099 2.178)",
  fill: "#f6f6f6",
  stroke: "#1581ff",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36005",
  "data-name": "Path 36005",
  d: "M4.554.513C11.153.224,13.1,4.951,13.1,4.951V19.04s-1.941-4.161-8.522-4.393A.591.591,0,0,1,4,14.062V1.1A.587.587,0,0,1,4.554.513Z",
  transform: "translate(-1.099 2.178)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36006",
  "data-name": "Path 36006",
  d: "M28.046.513C21.447.224,19.5,4.951,19.5,4.951V19.04s1.941-4.161,8.522-4.393a.591.591,0,0,0,.577-.585V1.1a.587.587,0,0,0-.554-.588",
  transform: "translate(-7.5 2.178)",
  fill: "#f6f6f6",
  stroke: "#1581ff",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36007",
  "data-name": "Path 36007",
  d: "M28.046.513C21.447.224,19.5,4.951,19.5,4.951V19.04s1.941-4.161,8.522-4.393a.591.591,0,0,0,.577-.585V1.1A.587.587,0,0,0,28.046.513Z",
  transform: "translate(-7.5 2.178)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36008",
  "data-name": "Path 36008",
  d: "M27.2,17.082a7.032,7.032,0,0,0-4.7,1.761",
  transform: "translate(-8.739 -4.67)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36009",
  "data-name": "Path 36009",
  d: "M27.2,13.082a7.032,7.032,0,0,0-4.7,1.761",
  transform: "translate(-8.739 -3.018)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36010",
  "data-name": "Path 36010",
  d: "M27.2,9.082a7.032,7.032,0,0,0-4.7,1.761",
  transform: "translate(-8.739 -1.366)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36011",
  "data-name": "Path 36011",
  d: "M8.5,17.082a7.032,7.032,0,0,1,4.7,1.761",
  transform: "translate(-2.957 -4.67)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36012",
  "data-name": "Path 36012",
  d: "M8.5,13.082a7.032,7.032,0,0,1,4.7,1.761",
  transform: "translate(-2.957 -3.018)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_36013",
  "data-name": "Path 36013",
  d: "M8.5,9.082a7.032,7.032,0,0,1,4.7,1.761",
  transform: "translate(-2.957 -1.366)",
  fill: "none",
  stroke: "#1581ff",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgDoublePageViewModeBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgDoublePageViewModeBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MTYiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNjE2IiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9Im5vbmUiLz4KICAgIDwvY2xpcFBhdGg+CiAgPC9kZWZzPgogIDxnIGlkPSJHcm91cF80MzA0OSIgZGF0YS1uYW1lPSJHcm91cCA0MzA0OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC42MjIgMi42MjIpIj4KICAgIDxnIGlkPSJHcm91cF80MzA0OCIgZGF0YS1uYW1lPSJHcm91cCA0MzA0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNjIyIC0yLjYyMikiIGNsaXAtcGF0aD0idXJsKCNjbGlwLXBhdGgpIj4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzYwMDIiIGRhdGEtbmFtZT0iUGF0aCAzNjAwMiIgZD0iTTEuMDQ4LDUuOTU3QzcuODE3LDUuNSwxMS42NTQsNy4xNzIsMTEuNjU0LDcuMTcyVjIxLjI2MUE0My4wNDUsNDMuMDQ1LDAsMCwwLDEuMDg2LDIwLjA5LjU4OS41ODksMCwwLDEsLjUsMTkuNTA1VjYuNTQ1QS41OTEuNTkxLDAsMCwxLDEuMDQ4LDUuOTU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4zNDYgLTAuMDQzKSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAwMyIgZGF0YS1uYW1lPSJQYXRoIDM2MDAzIiBkPSJNMzAuMTA1LDUuOTU3QzIzLjMzNyw1LjUsMTkuNSw3LjE3MiwxOS41LDcuMTcyVjIxLjI2MUE0My4wNDUsNDMuMDQ1LDAsMCwxLDMwLjA2OCwyMC4wOWEuNTg5LjU4OSwwLDAsMCwuNTg2LS41ODVWNi41NDVBLjU5MS41OTEsMCwwLDAsMzAuMTA1LDUuOTU3WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuNSAtMC4wNDMpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDA0IiBkYXRhLW5hbWU9IlBhdGggMzYwMDQiIGQ9Ik00LjU1NC41MTNDMTEuMTUzLjIyNCwxMy4xLDQuOTUxLDEzLjEsNC45NTFWMTkuMDRzLTEuOTQxLTQuMTYxLTguNTIyLTQuMzkzQS41OTEuNTkxLDAsMCwxLDQsMTQuMDYyVjEuMUEuNTg3LjU4NywwLDAsMSw0LjU1NC41MTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xLjA5OSAyLjE3OCkiIGZpbGw9IiNmNmY2ZjYiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDA1IiBkYXRhLW5hbWU9IlBhdGggMzYwMDUiIGQ9Ik00LjU1NC41MTNDMTEuMTUzLjIyNCwxMy4xLDQuOTUxLDEzLjEsNC45NTFWMTkuMDRzLTEuOTQxLTQuMTYxLTguNTIyLTQuMzkzQS41OTEuNTkxLDAsMCwxLDQsMTQuMDYyVjEuMUEuNTg3LjU4NywwLDAsMSw0LjU1NC41MTNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMS4wOTkgMi4xNzgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDA2IiBkYXRhLW5hbWU9IlBhdGggMzYwMDYiIGQ9Ik0yOC4wNDYuNTEzQzIxLjQ0Ny4yMjQsMTkuNSw0Ljk1MSwxOS41LDQuOTUxVjE5LjA0czEuOTQxLTQuMTYxLDguNTIyLTQuMzkzYS41OTEuNTkxLDAsMCwwLC41NzctLjU4NVYxLjFhLjU4Ny41ODcsMCwwLDAtLjU1NC0uNTg4IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtNy41IDIuMTc4KSIgZmlsbD0iI2Y2ZjZmNiIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzYwMDciIGRhdGEtbmFtZT0iUGF0aCAzNjAwNyIgZD0iTTI4LjA0Ni41MTNDMjEuNDQ3LjIyNCwxOS41LDQuOTUxLDE5LjUsNC45NTFWMTkuMDRzMS45NDEtNC4xNjEsOC41MjItNC4zOTNhLjU5MS41OTEsMCwwLDAsLjU3Ny0uNTg1VjEuMUEuNTg3LjU4NywwLDAsMCwyOC4wNDYuNTEzWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTcuNSAyLjE3OCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzYwMDgiIGRhdGEtbmFtZT0iUGF0aCAzNjAwOCIgZD0iTTI3LjIsMTcuMDgyYTcuMDMyLDcuMDMyLDAsMCwwLTQuNywxLjc2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTguNzM5IC00LjY3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAwOSIgZGF0YS1uYW1lPSJQYXRoIDM2MDA5IiBkPSJNMjcuMiwxMy4wODJhNy4wMzIsNy4wMzIsMCwwLDAtNC43LDEuNzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtOC43MzkgLTMuMDE4KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAxMCIgZGF0YS1uYW1lPSJQYXRoIDM2MDEwIiBkPSJNMjcuMiw5LjA4MmE3LjAzMiw3LjAzMiwwLDAsMC00LjcsMS43NjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC04LjczOSAtMS4zNjYpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDExIiBkYXRhLW5hbWU9IlBhdGggMzYwMTEiIGQ9Ik04LjUsMTcuMDgyYTcuMDMyLDcuMDMyLDAsMCwxLDQuNywxLjc2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIuOTU3IC00LjY3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNjAxMiIgZGF0YS1uYW1lPSJQYXRoIDM2MDEyIiBkPSJNOC41LDEzLjA4MmE3LjAzMiw3LjAzMiwwLDAsMSw0LjcsMS43NjEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yLjk1NyAtMy4wMTgpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM2MDEzIiBkYXRhLW5hbWU9IlBhdGggMzYwMTMiIGQ9Ik04LjUsOS4wODJhNy4wMzIsNy4wMzIsMCwwLDEsNC43LDEuNzYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMi45NTcgLTEuMzY2KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./assets/icons/LineDiscription.svg":
/*!******************************************!*\
  !*** ./assets/icons/LineDiscription.svg ***!
  \******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42766",
  "data-name": "Group 42766",
  transform: "translate(-1395.5 -65)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42764",
  "data-name": "Group 42764",
  transform: "translate(13 -14)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", {
  id: "\\u51FA\\u8840\\u7DDA",
  transform: "translate(1457 96)",
  fill: "#333",
  fontSize: 16,
  fontFamily: "PingFangTC-Regular, PingFang TC",
  letterSpacing: "0.025em"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tspan", {
  x: 0,
  y: 0
}, "\u51FA\u8840\u7DDA")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", {
  id: "\\u5BE6\\u969B\\u88C1\\u5207\\u7BC4\\u570D",
  transform: "translate(1457 127)",
  fill: "#333",
  fontSize: 16,
  fontFamily: "PingFangTC-Regular, PingFang TC",
  letterSpacing: "0.025em"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tspan", {
  x: 0,
  y: 0
}, "\u5BE6\u969B\u88C1\u5207\u7BC4\u570D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", {
  id: "\\u91CD\\u8981\\u8A0A\\u606F\\u5B89\\u5168\\u7BC4\\u570D",
  transform: "translate(1457 157)",
  fill: "#333",
  fontSize: 16,
  fontFamily: "PingFangTC-Regular, PingFang TC",
  letterSpacing: "0.025em"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("tspan", {
  x: 0,
  y: 0
}, "\u91CD\u8981\u8A0A\u606F\u5B89\u5168\u7BC4\u570D")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_726",
  "data-name": "Line 726",
  x2: 61,
  transform: "translate(1382.5 91.5)",
  fill: "none",
  stroke: "#333",
  strokeWidth: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_728",
  "data-name": "Line 728",
  x2: 61,
  transform: "translate(1382.5 122.5)",
  fill: "none",
  stroke: "#e2007f",
  strokeWidth: 2
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_727",
  "data-name": "Line 727",
  x2: 61,
  transform: "translate(1382.5 154.5)",
  fill: "none",
  stroke: "#666",
  strokeWidth: 2,
  strokeDasharray: 5
})));

function SvgLineDiscription(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 205.5,
    height: 83,
    viewBox: "0 0 205.5 83",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgLineDiscription);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMDUuNSIgaGVpZ2h0PSI4MyIgdmlld0JveD0iMCAwIDIwNS41IDgzIj4KICA8ZyBpZD0iR3JvdXBfNDI3NjYiIGRhdGEtbmFtZT0iR3JvdXAgNDI3NjYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xMzk1LjUgLTY1KSI+CiAgICA8ZyBpZD0iR3JvdXBfNDI3NjQiIGRhdGEtbmFtZT0iR3JvdXAgNDI3NjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEzIC0xNCkiPgogICAgICA8dGV4dCBpZD0i5Ye66KGA57eaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNDU3IDk2KSIgZmlsbD0iIzMzMyIgZm9udC1zaXplPSIxNiIgZm9udC1mYW1pbHk9IlBpbmdGYW5nVEMtUmVndWxhciwgUGluZ0ZhbmcgVEMiIGxldHRlci1zcGFjaW5nPSIwLjAyNWVtIj48dHNwYW4geD0iMCIgeT0iMCI+5Ye66KGA57eaPC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IGlkPSLlr6bpmpvoo4HliIfnr4TlnI0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NTcgMTI3KSIgZmlsbD0iIzMzMyIgZm9udC1zaXplPSIxNiIgZm9udC1mYW1pbHk9IlBpbmdGYW5nVEMtUmVndWxhciwgUGluZ0ZhbmcgVEMiIGxldHRlci1zcGFjaW5nPSIwLjAyNWVtIj48dHNwYW4geD0iMCIgeT0iMCI+5a+m6Zqb6KOB5YiH56+E5ZyNPC90c3Bhbj48L3RleHQ+CiAgICAgIDx0ZXh0IGlkPSLph43opoHoqIrmga/lronlhajnr4TlnI0iIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0NTcgMTU3KSIgZmlsbD0iIzMzMyIgZm9udC1zaXplPSIxNiIgZm9udC1mYW1pbHk9IlBpbmdGYW5nVEMtUmVndWxhciwgUGluZ0ZhbmcgVEMiIGxldHRlci1zcGFjaW5nPSIwLjAyNWVtIj48dHNwYW4geD0iMCIgeT0iMCI+6YeN6KaB6KiK5oGv5a6J5YWo56+E5ZyNPC90c3Bhbj48L3RleHQ+CiAgICAgIDxsaW5lIGlkPSJMaW5lXzcyNiIgZGF0YS1uYW1lPSJMaW5lIDcyNiIgeDI9IjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzgyLjUgOTEuNSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgICAgIDxsaW5lIGlkPSJMaW5lXzcyOCIgZGF0YS1uYW1lPSJMaW5lIDcyOCIgeDI9IjYxIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMzgyLjUgMTIyLjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiNlMjAwN2YiIHN0cm9rZS13aWR0aD0iMiIvPgogICAgICA8bGluZSBpZD0iTGluZV83MjciIGRhdGEtbmFtZT0iTGluZSA3MjciIHgyPSI2MSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTM4Mi41IDE1NC41KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1kYXNoYXJyYXk9IjUiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/icons/OverviewMode.svg":
/*!***************************************!*\
  !*** ./assets/icons/OverviewMode.svg ***!
  \***************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip-path"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12615",
  "data-name": "Rectangle 12615",
  width: 23,
  height: 23,
  transform: "translate(-1 -1)",
  fill: "none"
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43047",
  "data-name": "Group 43047",
  transform: "translate(1 1)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43045",
  "data-name": "Group 43045",
  clipPath: "url(#clip-path)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43050",
  "data-name": "Group 43050",
  transform: "translate(0.6 0.6)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12611",
  "data-name": "Rectangle 12611",
  d: "M1.017,0H7.344A1.016,1.016,0,0,1,8.36,1.016V7.343A1.016,1.016,0,0,1,7.344,8.359H1.017A1.017,1.017,0,0,1,0,7.342V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(0.4 0.4)",
  fill: "none",
  stroke: "#666",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12612",
  "data-name": "Rectangle 12612",
  d: "M1.017,0H7.344A1.017,1.017,0,0,1,8.361,1.017V7.343A1.016,1.016,0,0,1,7.345,8.359H1.017A1.017,1.017,0,0,1,0,7.342V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(11.24 0.4)",
  fill: "none",
  stroke: "#666",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12613",
  "data-name": "Rectangle 12613",
  d: "M1.017,0H7.343A1.017,1.017,0,0,1,8.36,1.017V7.344A1.016,1.016,0,0,1,7.344,8.36H1.016A1.016,1.016,0,0,1,0,7.344V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(0.4 11.24)",
  fill: "none",
  stroke: "#666",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12614",
  "data-name": "Rectangle 12614",
  d: "M1.017,0H7.344A1.017,1.017,0,0,1,8.361,1.017V7.344A1.016,1.016,0,0,1,7.345,8.36H1.017A1.017,1.017,0,0,1,0,7.343V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(11.24 11.24)",
  fill: "none",
  stroke: "#707070",
  strokeWidth: 1
}))));

function SvgOverviewMode(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 23,
    height: 23,
    viewBox: "0 0 23 23",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgOverviewMode);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MTUiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNjE1IiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0ibm9uZSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzQzMDQ3IiBkYXRhLW5hbWU9Ikdyb3VwIDQzMDQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIj4KICAgIDxnIGlkPSJHcm91cF80MzA0NSIgZGF0YS1uYW1lPSJHcm91cCA0MzA0NSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgICA8ZyBpZD0iR3JvdXBfNDMwNTAiIGRhdGEtbmFtZT0iR3JvdXAgNDMwNTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNiAwLjYpIj4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNjExIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjYxMSIgZD0iTTEuMDE3LDBINy4zNDRBMS4wMTYsMS4wMTYsMCwwLDEsOC4zNiwxLjAxNlY3LjM0M0ExLjAxNiwxLjAxNiwwLDAsMSw3LjM0NCw4LjM1OUgxLjAxN0ExLjAxNywxLjAxNywwLDAsMSwwLDcuMzQyVjEuMDE3QTEuMDE3LDEuMDE3LDAsMCwxLDEuMDE3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjQgMC40KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNjEyIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjYxMiIgZD0iTTEuMDE3LDBINy4zNDRBMS4wMTcsMS4wMTcsMCwwLDEsOC4zNjEsMS4wMTdWNy4zNDNBMS4wMTYsMS4wMTYsMCwwLDEsNy4zNDUsOC4zNTlIMS4wMTdBMS4wMTcsMS4wMTcsMCwwLDEsMCw3LjM0MlYxLjAxN0ExLjAxNywxLjAxNywwLDAsMSwxLjAxNywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMjQgMC40KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNjEzIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjYxMyIgZD0iTTEuMDE3LDBINy4zNDNBMS4wMTcsMS4wMTcsMCwwLDEsOC4zNiwxLjAxN1Y3LjM0NEExLjAxNiwxLjAxNiwwLDAsMSw3LjM0NCw4LjM2SDEuMDE2QTEuMDE2LDEuMDE2LDAsMCwxLDAsNy4zNDRWMS4wMTdBMS4wMTcsMS4wMTcsMCwwLDEsMS4wMTcsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNCAxMS4yNCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV8xMjYxNCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI2MTQiIGQ9Ik0xLjAxNywwSDcuMzQ0QTEuMDE3LDEuMDE3LDAsMCwxLDguMzYxLDEuMDE3VjcuMzQ0QTEuMDE2LDEuMDE2LDAsMCwxLDcuMzQ1LDguMzZIMS4wMTdBMS4wMTcsMS4wMTcsMCwwLDEsMCw3LjM0M1YxLjAxN0ExLjAxNywxLjAxNywwLDAsMSwxLjAxNywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMjQgMTEuMjQpIiBmaWxsPSJub25lIiBzdHJva2U9IiM3MDcwNzAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "./assets/icons/OverviewModeBlue.svg":
/*!*******************************************!*\
  !*** ./assets/icons/OverviewModeBlue.svg ***!
  \*******************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("defs", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("clipPath", {
  id: "clip-path"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12615",
  "data-name": "Rectangle 12615",
  width: 23,
  height: 23,
  transform: "translate(-1 -1)",
  fill: "none"
})));

var _ref3 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43047",
  "data-name": "Group 43047",
  transform: "translate(1 1)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43045",
  "data-name": "Group 43045",
  clipPath: "url(#clip-path)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43050",
  "data-name": "Group 43050",
  transform: "translate(0.6 0.6)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12611",
  "data-name": "Rectangle 12611",
  d: "M1.017,0H7.344A1.016,1.016,0,0,1,8.36,1.016V7.343A1.016,1.016,0,0,1,7.344,8.359H1.017A1.017,1.017,0,0,1,0,7.342V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(0.4 0.4)",
  fill: "none",
  stroke: "#1581ff",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12612",
  "data-name": "Rectangle 12612",
  d: "M1.017,0H7.344A1.017,1.017,0,0,1,8.361,1.017V7.343A1.016,1.016,0,0,1,7.345,8.359H1.017A1.017,1.017,0,0,1,0,7.342V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(11.24 0.4)",
  fill: "none",
  stroke: "#1581ff",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12613",
  "data-name": "Rectangle 12613",
  d: "M1.017,0H7.343A1.017,1.017,0,0,1,8.36,1.017V7.344A1.016,1.016,0,0,1,7.344,8.36H1.016A1.016,1.016,0,0,1,0,7.344V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(0.4 11.24)",
  fill: "none",
  stroke: "#1581ff",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Rectangle_12614",
  "data-name": "Rectangle 12614",
  d: "M1.017,0H7.344A1.017,1.017,0,0,1,8.361,1.017V7.344A1.016,1.016,0,0,1,7.345,8.36H1.017A1.017,1.017,0,0,1,0,7.343V1.017A1.017,1.017,0,0,1,1.017,0Z",
  transform: "translate(11.24 11.24)",
  fill: "none",
  stroke: "#1581ff",
  strokeWidth: 1
}))));

function SvgOverviewModeBlue(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: 23,
    height: 23,
    viewBox: "0 0 23 23",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2, _ref3);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgOverviewModeBlue);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHZpZXdCb3g9IjAgMCAyMyAyMyI+CiAgPGRlZnM+CiAgICA8Y2xpcFBhdGggaWQ9ImNsaXAtcGF0aCI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI2MTUiIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNjE1IiB3aWR0aD0iMjMiIGhlaWdodD0iMjMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0xIC0xKSIgZmlsbD0ibm9uZSIvPgogICAgPC9jbGlwUGF0aD4KICA8L2RlZnM+CiAgPGcgaWQ9Ikdyb3VwXzQzMDQ3IiBkYXRhLW5hbWU9Ikdyb3VwIDQzMDQ3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIj4KICAgIDxnIGlkPSJHcm91cF80MzA0NSIgZGF0YS1uYW1lPSJHcm91cCA0MzA0NSIgY2xpcC1wYXRoPSJ1cmwoI2NsaXAtcGF0aCkiPgogICAgICA8ZyBpZD0iR3JvdXBfNDMwNTAiIGRhdGEtbmFtZT0iR3JvdXAgNDMwNTAiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNiAwLjYpIj4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNjExIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjYxMSIgZD0iTTEuMDE3LDBINy4zNDRBMS4wMTYsMS4wMTYsMCwwLDEsOC4zNiwxLjAxNlY3LjM0M0ExLjAxNiwxLjAxNiwwLDAsMSw3LjM0NCw4LjM1OUgxLjAxN0ExLjAxNywxLjAxNywwLDAsMSwwLDcuMzQyVjEuMDE3QTEuMDE3LDEuMDE3LDAsMCwxLDEuMDE3LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjQgMC40KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNjEyIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjYxMiIgZD0iTTEuMDE3LDBINy4zNDRBMS4wMTcsMS4wMTcsMCwwLDEsOC4zNjEsMS4wMTdWNy4zNDNBMS4wMTYsMS4wMTYsMCwwLDEsNy4zNDUsOC4zNTlIMS4wMTdBMS4wMTcsMS4wMTcsMCwwLDEsMCw3LjM0MlYxLjAxN0ExLjAxNywxLjAxNywwLDAsMSwxLjAxNywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMjQgMC40KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMTU4MWZmIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgICA8cGF0aCBpZD0iUmVjdGFuZ2xlXzEyNjEzIiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjYxMyIgZD0iTTEuMDE3LDBINy4zNDNBMS4wMTcsMS4wMTcsMCwwLDEsOC4zNiwxLjAxN1Y3LjM0NEExLjAxNiwxLjAxNiwwLDAsMSw3LjM0NCw4LjM2SDEuMDE2QTEuMDE2LDEuMDE2LDAsMCwxLDAsNy4zNDRWMS4wMTdBMS4wMTcsMS4wMTcsMCwwLDEsMS4wMTcsMFoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNCAxMS4yNCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzE1ODFmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgICAgPHBhdGggaWQ9IlJlY3RhbmdsZV8xMjYxNCIgZGF0YS1uYW1lPSJSZWN0YW5nbGUgMTI2MTQiIGQ9Ik0xLjAxNywwSDcuMzQ0QTEuMDE3LDEuMDE3LDAsMCwxLDguMzYxLDEuMDE3VjcuMzQ0QTEuMDE2LDEuMDE2LDAsMCwxLDcuMzQ1LDguMzZIMS4wMTdBMS4wMTcsMS4wMTcsMCwwLDEsMCw3LjM0M1YxLjAxN0ExLjAxNywxLjAxNywwLDAsMSwxLjAxNywwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTEuMjQgMTEuMjQpIiBmaWxsPSJub25lIiBzdHJva2U9IiMxNTgxZmYiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8L2c+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "./assets/icons/RedoIcon.svg":
/*!***********************************!*\
  !*** ./assets/icons/RedoIcon.svg ***!
  \***********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42927",
  "data-name": "Group 42927",
  transform: "translate(-0.058 -0.107)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43011",
  "data-name": "Group 43011",
  transform: "translate(0 0)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35985",
  "data-name": "Path 35985",
  d: "M17.105,6.086V.5l9.2,10.332-9.2,10.332v-5.2S3.01,14.595.579,25.534C.579,25.534-1.618,7.3,17.105,6.086Z",
  transform: "translate(0.107 0.107)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
})));

function SvgRedoIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 26.855,
    height: 26.034,
    viewBox: "0 0 26.855 26.034",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgRedoIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi44NTUiIGhlaWdodD0iMjYuMDM0IiB2aWV3Qm94PSIwIDAgMjYuODU1IDI2LjAzNCI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTI3IiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTI3IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4wNTggLTAuMTA3KSI+CiAgICA8ZyBpZD0iR3JvdXBfNDMwMTEiIGRhdGEtbmFtZT0iR3JvdXAgNDMwMTEiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk4NSIgZGF0YS1uYW1lPSJQYXRoIDM1OTg1IiBkPSJNMTcuMTA1LDYuMDg2Vi41bDkuMiwxMC4zMzItOS4yLDEwLjMzMnYtNS4yUzMuMDEsMTQuNTk1LjU3OSwyNS41MzRDLjU3OSwyNS41MzQtMS42MTgsNy4zLDE3LjEwNSw2LjA4NloiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMTA3IDAuMTA3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9nPgogIDwvZz4KPC9zdmc+Cg==");


/***/ }),

/***/ "./assets/icons/ResetSizeIcon.svg":
/*!****************************************!*\
  !*** ./assets/icons/ResetSizeIcon.svg ***!
  \****************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42915",
  "data-name": "Group 42915",
  transform: "translate(0.5 0.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42916",
  "data-name": "Group 42916",
  transform: "translate(0 0)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12497",
  "data-name": "Rectangle 12497",
  width: 18.75,
  height: 18.75,
  rx: 2,
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35970",
  "data-name": "Path 35970",
  d: "M3.269,15.269v2.757a.5.5,0,0,0,.5.5H6.53",
  transform: "translate(0.187 -3.237)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35971",
  "data-name": "Path 35971",
  d: "M6.531,3.269H3.775a.5.5,0,0,0-.5.5V6.531",
  transform: "translate(0.186 0.187)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35972",
  "data-name": "Path 35972",
  d: "M18.531,6.531V3.774a.5.5,0,0,0-.5-.5H15.27",
  transform: "translate(-3.238 0.187)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35973",
  "data-name": "Path 35973",
  d: "M15.269,18.531h2.757a.5.5,0,0,0,.5-.5V15.269",
  transform: "translate(-3.238 -3.237)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
})));

function SvgResetSizeIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 19.75,
    height: 19.75,
    viewBox: "0 0 19.75 19.75",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgResetSizeIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOS43NSIgaGVpZ2h0PSIxOS43NSIgdmlld0JveD0iMCAwIDE5Ljc1IDE5Ljc1Ij4KICA8ZyBpZD0iR3JvdXBfNDI5MTUiIGRhdGEtbmFtZT0iR3JvdXAgNDI5MTUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjUpIj4KICAgIDxnIGlkPSJHcm91cF80MjkxNiIgZGF0YS1uYW1lPSJHcm91cCA0MjkxNiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAwKSI+CiAgICAgIDxyZWN0IGlkPSJSZWN0YW5nbGVfMTI0OTciIGRhdGEtbmFtZT0iUmVjdGFuZ2xlIDEyNDk3IiB3aWR0aD0iMTguNzUiIGhlaWdodD0iMTguNzUiIHJ4PSIyIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM1OTcwIiBkYXRhLW5hbWU9IlBhdGggMzU5NzAiIGQ9Ik0zLjI2OSwxNS4yNjl2Mi43NTdhLjUuNSwwLDAsMCwuNS41SDYuNTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMTg3IC0zLjIzNykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPHBhdGggaWQ9IlBhdGhfMzU5NzEiIGRhdGEtbmFtZT0iUGF0aCAzNTk3MSIgZD0iTTYuNTMxLDMuMjY5SDMuNzc1YS41LjUsMCwwLDAtLjUuNVY2LjUzMSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xODYgMC4xODcpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICAgIDxwYXRoIGlkPSJQYXRoXzM1OTcyIiBkYXRhLW5hbWU9IlBhdGggMzU5NzIiIGQ9Ik0xOC41MzEsNi41MzFWMy43NzRhLjUuNSwwLDAsMC0uNS0uNUgxNS4yNyIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMjM4IDAuMTg3KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk3MyIgZGF0YS1uYW1lPSJQYXRoIDM1OTczIiBkPSJNMTUuMjY5LDE4LjUzMWgyLjc1N2EuNS41LDAsMCwwLC41LS41VjE1LjI2OSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTMuMjM4IC0zLjIzNykiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/icons/SaveIcon.svg":
/*!***********************************!*\
  !*** ./assets/icons/SaveIcon.svg ***!
  \***********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42924",
  "data-name": "Group 42924",
  transform: "translate(0.5 0.5)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35982",
  "data-name": "Path 35982",
  d: "M21.5,24.5H3.5a3,3,0,0,1-3-3V3.5a3,3,0,0,1,3-3H20.1l4.4,5v16A3,3,0,0,1,21.5,24.5Z",
  transform: "translate(-0.5 -0.5)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35983",
  "data-name": "Path 35983",
  d: "M17.767,9.5H7.233A1.233,1.233,0,0,1,6,8.267V.5H19V8.267A1.233,1.233,0,0,1,17.767,9.5Z",
  transform: "translate(-0.5 -0.5)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35984",
  "data-name": "Path 35984",
  d: "M5.429,13.5H19.572a1.571,1.571,0,0,1,1.571,1.571V24.5H3.857V15.071A1.572,1.572,0,0,1,5.429,13.5Z",
  transform: "translate(-0.5 -0.5)",
  fill: "none",
  stroke: "#666",
  strokeMiterlimit: 10,
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("rect", {
  id: "Rectangle_12506",
  "data-name": "Rectangle 12506",
  width: 2,
  height: 5,
  transform: "translate(14 2)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
}));

function SvgSaveIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 25,
    height: 25,
    viewBox: "0 0 25 25",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgSaveIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNSIgaGVpZ2h0PSIyNSIgdmlld0JveD0iMCAwIDI1IDI1Ij4KICA8ZyBpZD0iR3JvdXBfNDI5MjQiIGRhdGEtbmFtZT0iR3JvdXAgNDI5MjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuNSAwLjUpIj4KICAgIDxwYXRoIGlkPSJQYXRoXzM1OTgyIiBkYXRhLW5hbWU9IlBhdGggMzU5ODIiIGQ9Ik0yMS41LDI0LjVIMy41YTMsMywwLDAsMS0zLTNWMy41YTMsMywwLDAsMSwzLTNIMjAuMWw0LjQsNXYxNkEzLDMsMCwwLDEsMjEuNSwyNC41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMzU5ODMiIGRhdGEtbmFtZT0iUGF0aCAzNTk4MyIgZD0iTTE3Ljc2Nyw5LjVINy4yMzNBMS4yMzMsMS4yMzMsMCwwLDEsNiw4LjI2N1YuNUgxOVY4LjI2N0ExLjIzMywxLjIzMywwLDAsMSwxNy43NjcsOS41WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTAuNSAtMC41KSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNjY2IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPHBhdGggaWQ9IlBhdGhfMzU5ODQiIGRhdGEtbmFtZT0iUGF0aCAzNTk4NCIgZD0iTTUuNDI5LDEzLjVIMTkuNTcyYTEuNTcxLDEuNTcxLDAsMCwxLDEuNTcxLDEuNTcxVjI0LjVIMy44NTdWMTUuMDcxQTEuNTcyLDEuNTcyLDAsMCwxLDUuNDI5LDEzLjVaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC41IC0wLjUpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8cmVjdCBpZD0iUmVjdGFuZ2xlXzEyNTA2IiBkYXRhLW5hbWU9IlJlY3RhbmdsZSAxMjUwNiIgd2lkdGg9IjIiIGhlaWdodD0iNSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTQgMikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/icons/UndoIcon.svg":
/*!***********************************!*\
  !*** ./assets/icons/UndoIcon.svg ***!
  \***********************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42926",
  "data-name": "Group 42926",
  transform: "translate(-0.108 -0.108)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_43010",
  "data-name": "Group 43010"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  id: "Path_35985",
  "data-name": "Path 35985",
  d: "M9.7,6.086V.5L.5,10.832,9.7,21.164v-5.2S23.8,14.595,26.226,25.534C26.226,25.534,28.424,7.3,9.7,6.086Z",
  transform: "translate(0.108 0.108)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 1
})));

function SvgUndoIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 26.855,
    height: 26.034,
    viewBox: "0 0 26.855 26.034",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgUndoIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNi44NTUiIGhlaWdodD0iMjYuMDM0IiB2aWV3Qm94PSIwIDAgMjYuODU1IDI2LjAzNCI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTI2IiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTI2IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMC4xMDggLTAuMTA4KSI+CiAgICA8ZyBpZD0iR3JvdXBfNDMwMTAiIGRhdGEtbmFtZT0iR3JvdXAgNDMwMTAiPgogICAgICA8cGF0aCBpZD0iUGF0aF8zNTk4NSIgZGF0YS1uYW1lPSJQYXRoIDM1OTg1IiBkPSJNOS43LDYuMDg2Vi41TC41LDEwLjgzMiw5LjcsMjEuMTY0di01LjJTMjMuOCwxNC41OTUsMjYuMjI2LDI1LjUzNEMyNi4yMjYsMjUuNTM0LDI4LjQyNCw3LjMsOS43LDYuMDg2WiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMC4xMDggMC4xMDgpIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "./assets/icons/ZoomInIcon.svg":
/*!*************************************!*\
  !*** ./assets/icons/ZoomInIcon.svg ***!
  \*************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42922",
  "data-name": "Group 42922",
  transform: "translate(0 12.005) rotate(-45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Ellipse_277",
  "data-name": "Ellipse 277",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 8.488,
  stroke: "none"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 7.988,
  fill: "none"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_722",
  "data-name": "Line 722",
  y2: 5.493,
  transform: "translate(8.368 16.676)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42748",
  "data-name": "Group 42748",
  transform: "translate(5.9 5.779) rotate(45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_723",
  "data-name": "Line 723",
  x2: 7.322,
  transform: "translate(0 0)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgZoomInIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24.009,
    height: 24.009,
    viewBox: "0 0 24.009 24.009",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgZoomInIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wMDkiIGhlaWdodD0iMjQuMDA5IiB2aWV3Qm94PSIwIDAgMjQuMDA5IDI0LjAwOSI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTIyIiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTIyIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyLjAwNSkgcm90YXRlKC00NSkiPgogICAgPGcgaWQ9IkVsbGlwc2VfMjc3IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjc3IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgPGNpcmNsZSBjeD0iOC40ODgiIGN5PSI4LjQ4OCIgcj0iOC40ODgiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSI4LjQ4OCIgY3k9IjguNDg4IiByPSI3Ljk4OCIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGxpbmUgaWQ9IkxpbmVfNzIyIiBkYXRhLW5hbWU9IkxpbmUgNzIyIiB5Mj0iNS40OTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMzY4IDE2LjY3NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxnIGlkPSJHcm91cF80Mjc0OCIgZGF0YS1uYW1lPSJHcm91cCA0Mjc0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNS45IDUuNzc5KSByb3RhdGUoNDUpIj4KICAgICAgPGxpbmUgaWQ9IkxpbmVfNzIzIiBkYXRhLW5hbWU9IkxpbmUgNzIzIiB4Mj0iNy4zMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=");


/***/ }),

/***/ "./assets/icons/ZoomOutIcon.svg":
/*!**************************************!*\
  !*** ./assets/icons/ZoomOutIcon.svg ***!
  \**************************************/
/*! exports provided: default, ReactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReactComponent", function() { return ForwardRef; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



var _ref2 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42923",
  "data-name": "Group 42923",
  transform: "translate(0 12.005) rotate(-45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Ellipse_277",
  "data-name": "Ellipse 277",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 8.488,
  stroke: "none"
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: 8.488,
  cy: 8.488,
  r: 7.988,
  fill: "none"
})), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_722",
  "data-name": "Line 722",
  y2: 5.493,
  transform: "translate(8.368 16.676)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("g", {
  id: "Group_42748",
  "data-name": "Group 42748",
  transform: "translate(8.488 3.191) rotate(45)"
}, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_723",
  "data-name": "Line 723",
  x2: 7.322,
  transform: "translate(0 3.661)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("line", {
  id: "Line_724",
  "data-name": "Line 724",
  x2: 7.322,
  transform: "translate(3.661) rotate(90)",
  fill: "none",
  stroke: "#666",
  strokeLinecap: "round",
  strokeWidth: 1
})));

function SvgZoomOutIcon(_ref, svgRef) {
  var title = _ref.title,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["title", "titleId"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("svg", _extends({
    xmlns: "http://www.w3.org/2000/svg",
    width: 24.009,
    height: 24.009,
    viewBox: "0 0 24.009 24.009",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", {
    id: titleId
  }, title) : null, _ref2);
}

var ForwardRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](SvgZoomOutIcon);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNC4wMDkiIGhlaWdodD0iMjQuMDA5IiB2aWV3Qm94PSIwIDAgMjQuMDA5IDI0LjAwOSI+CiAgPGcgaWQ9Ikdyb3VwXzQyOTIzIiBkYXRhLW5hbWU9Ikdyb3VwIDQyOTIzIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDEyLjAwNSkgcm90YXRlKC00NSkiPgogICAgPGcgaWQ9IkVsbGlwc2VfMjc3IiBkYXRhLW5hbWU9IkVsbGlwc2UgMjc3IiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIj4KICAgICAgPGNpcmNsZSBjeD0iOC40ODgiIGN5PSI4LjQ4OCIgcj0iOC40ODgiIHN0cm9rZT0ibm9uZSIvPgogICAgICA8Y2lyY2xlIGN4PSI4LjQ4OCIgY3k9IjguNDg4IiByPSI3Ljk4OCIgZmlsbD0ibm9uZSIvPgogICAgPC9nPgogICAgPGxpbmUgaWQ9IkxpbmVfNzIyIiBkYXRhLW5hbWU9IkxpbmUgNzIyIiB5Mj0iNS40OTMiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDguMzY4IDE2LjY3NikiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgIDxnIGlkPSJHcm91cF80Mjc0OCIgZGF0YS1uYW1lPSJHcm91cCA0Mjc0OCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOC40ODggMy4xOTEpIHJvdGF0ZSg0NSkiPgogICAgICA8bGluZSBpZD0iTGluZV83MjMiIGRhdGEtbmFtZT0iTGluZSA3MjMiIHgyPSI3LjMyMiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMCAzLjY2MSkiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzY2NiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2Utd2lkdGg9IjEiLz4KICAgICAgPGxpbmUgaWQ9IkxpbmVfNzI0IiBkYXRhLW5hbWU9IkxpbmUgNzI0IiB4Mj0iNy4zMjIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNjYxKSByb3RhdGUoOTApIiBmaWxsPSJub25lIiBzdHJva2U9IiM2NjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIxIi8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K");


/***/ }),

/***/ "./assets/testImages/to-one-with-life/1.jpg":
/*!**************************************************!*\
  !*** ./assets/testImages/to-one-with-life/1.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.9b25526.jpg";

/***/ }),

/***/ "./assets/testImages/to-one-with-life/2.jpg":
/*!**************************************************!*\
  !*** ./assets/testImages/to-one-with-life/2.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2.4bd78d5.jpg";

/***/ }),

/***/ "./assets/testImages/to-one-with-life/3.jpg":
/*!**************************************************!*\
  !*** ./assets/testImages/to-one-with-life/3.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "3.0402b5f.jpg";

/***/ }),

/***/ "./assets/testImages/to-one-with-life/4.jpg":
/*!**************************************************!*\
  !*** ./assets/testImages/to-one-with-life/4.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "4.b666554.jpg";

/***/ }),

/***/ "./assets/testImages/to-one-with-life/5.jpg":
/*!**************************************************!*\
  !*** ./assets/testImages/to-one-with-life/5.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "5.7c72d35.jpg";

/***/ }),

/***/ "./assets/testImages/to-one-with-life/6.jpg":
/*!**************************************************!*\
  !*** ./assets/testImages/to-one-with-life/6.jpg ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6.9e88967.jpg";

/***/ }),

/***/ "./assets/testImages/to-one-with-life/front-cover.jpg":
/*!************************************************************!*\
  !*** ./assets/testImages/to-one-with-life/front-cover.jpg ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "front-cover.0d33d8c.jpg";

/***/ }),

/***/ "./main.tsx":
/*!******************!*\
  !*** ./main.tsx ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "../../../node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! reflect-metadata */ "../../../node_modules/reflect-metadata/Reflect.js");
/* harmony import */ var reflect_metadata__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(reflect_metadata__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app */ "./app/app.tsx");




react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.StrictMode, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_app_app__WEBPACK_IMPORTED_MODULE_3__["default"], null)), document.getElementById('root'));

/***/ }),

/***/ 0:
/*!************************!*\
  !*** multi ./main.tsx ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/lalame888/projects/gainhow-review/apps/reviewer/src/main.tsx */"./main.tsx");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map