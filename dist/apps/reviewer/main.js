(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../../libs/data/src/index.ts":
/*!***********************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/index.ts ***!
  \***********************************************************************/
/*! exports provided: FramedPage, ReviewModel, ReviewItem, ReviewStatus, UploadFileStatus, UploadFilePageInfo, ReviewRegistrationInfo, ReviewReception, PRODUCT_SUBTYPES, PRODUCT_TYPE_DISCRIMINATOR, Product, SingleSheet, SaddleStichedBook, PerfectBoundBook, Coat, PaperMaterial, Paper, Frame, Line */
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_SUBTYPES", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_SUBTYPES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRODUCT_TYPE_DISCRIMINATOR", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_TYPE_DISCRIMINATOR"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Product", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["Product"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SingleSheet", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["SingleSheet"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SaddleStichedBook", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["SaddleStichedBook"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PerfectBoundBook", function() { return _lib_Product__WEBPACK_IMPORTED_MODULE_1__["PerfectBoundBook"]; });

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

class BookFrameDictionary extends _FrameDictionary__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(product) {
    super(product);
    this.coverFrame = void 0;
    this.innerPageFrames = void 0;
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

  get frameIndices() {
    return Array.from(this.frames.keys());
  }

  getFrame(frameIndex) {
    return this.frames.get(frameIndex);
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
    this.frames = void 0;
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
PerfectBoundBookFrameDictionary.INNER_PAGE_CUT_ERROR = 3;
PerfectBoundBookFrameDictionary.COVER_CUT_ERROR = 3;
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
    this.frames = void 0;
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
/*! exports provided: PRODUCT_SUBTYPES, PRODUCT_TYPE_DISCRIMINATOR, Product, SingleSheet, SaddleStichedBook, PerfectBoundBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Product */ "../../../libs/data/src/lib/Product/Product.ts");

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
    this.__productSubType = void 0;
    this.productSubTypeChineseName = "書籍";
  }
  /**
   * 書背寬度（mm）
   */


  get spineWidth() {
    return this.numberOfPages / 2 * this.innerPagesPaper.thickness;
  }

  getInfo() {
    let coverInfo = `封面：${this.coverPaper}、${this.coverCoating ? this.coverCoating.chineseName : '不上膜'}`;
    let innerPageInfo = `內頁：${this.innerPagesPaper}、${this.innerPageCoating ? this.innerPageCoating.chineseName : '不上膜'}`;
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

}

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
/* harmony import */ var _Material_Paper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Material/Paper */ "../../../libs/data/src/lib/Material/Paper.ts");
/* harmony import */ var _Material_Coat__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Material/Coat */ "../../../libs/data/src/lib/Material/Coat.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
/* harmony import */ var _FrameDictionary_PerfectBoundBookFrameDictionary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../FrameDictionary/PerfectBoundBookFrameDictionary */ "../../../libs/data/src/lib/FrameDictionary/PerfectBoundBookFrameDictionary.ts");
var _dec, _dec2, _dec3, _dec4, _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






let PerfectBoundBook = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_1__["default"]), _dec2 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _Material_Paper__WEBPACK_IMPORTED_MODULE_1__["default"]), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_2__["default"]), _dec4 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_3__["Type"])(() => _Material_Coat__WEBPACK_IMPORTED_MODULE_2__["default"]), (_class = (_temp = class PerfectBoundBook extends _Book__WEBPACK_IMPORTED_MODULE_0__["default"] {
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

    _initializerDefineProperty(this, "coverPaper", _descriptor, this);

    _initializerDefineProperty(this, "innerPagesPaper", _descriptor2, this);

    _initializerDefineProperty(this, "coverCoating", _descriptor3, this);

    _initializerDefineProperty(this, "innerPageCoating", _descriptor4, this);

    this._frameDictionary = void 0;
  }

  createFrameDictionary() {
    return new _FrameDictionary_PerfectBoundBookFrameDictionary__WEBPACK_IMPORTED_MODULE_4__["default"](this);
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

/***/ "../../../libs/data/src/lib/Product/Product.ts":
/*!*************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Product/Product.ts ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
var _dec, _class, _temp;


let Product = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec(_class = (_temp = class Product {
  constructor() {
    this.__productSubType = void 0;
    this.productSubTypeChineseName = void 0;
    this._frameDictionary = void 0;
  }

  get frameDictionary() {
    return this.getOrCreateFrameDictionary();
  }

  getOrCreateFrameDictionary() {
    if (!this._frameDictionary) return this.createAndSetFrameDictionary();
    return this._frameDictionary;
  }

  createAndSetFrameDictionary() {
    this._frameDictionary = this.createFrameDictionary();
    return this._frameDictionary;
  }

}, _temp)) || _class);


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


class SaddleStichedBook extends _Book__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(coverWidth, coverHeight, numberOfPages, pagingDirection, coverPaperTexture, innerPagesPaperTexture, coverCoating, innerPageCoating) {
    super(coverWidth, coverHeight, numberOfPages, pagingDirection, coverPaperTexture, innerPagesPaperTexture, coverCoating, innerPageCoating);
    this.__productSubType = "SaddleStichedBook";
    this._frameDictionary = void 0;
    this.productSubTypeChineseName = '騎馬釘書';
  }

  createFrameDictionary() {
    return new _FrameDictionary_SaddleStitchedBookFrameDictionary__WEBPACK_IMPORTED_MODULE_1__["default"](this);
  }

}

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

  createFrameDictionary() {
    return new _FrameDictionary_SingleSheetFrameDictionary__WEBPACK_IMPORTED_MODULE_4__["default"](this);
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
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReviewReception", function() { return _Review_ReviewReception__WEBPACK_IMPORTED_MODULE_7__["default"]; });











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
var _dec, _dec2, _dec3, _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }


let FramedPage = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec2 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Expose"])(), (_class = (_temp = class FramedPage {
  constructor(frameIndex, reviewModel, positionX = 0, positionY = 0, scaleX = 1, scaleY = 1, _rotationDegree = 0) {
    this.frameIndex = frameIndex;
    this.positionX = positionX;
    this.positionY = positionY;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.sourceFileId = void 0;
    this.sourcePageNumber = void 0;
    this.resultingJpegUrl = void 0;
    this.resultingPdfUrl = void 0;

    _initializerDefineProperty(this, "_rotationDegree", _descriptor, this);

    _initializerDefineProperty(this, "reviewModel", _descriptor2, this);

    this.reviewModel = reviewModel;
    this._rotationDegree = _rotationDegree;
  }

  getFrame() {
    return this.reviewModel.getFrame(this.frameIndex);
  }

  getSourcePageInfo() {
    if (this.sourceFileId === undefined || this.sourcePageNumber === undefined) {
      return undefined;
    }

    let fileStatus = this.reviewModel.reviewItem.status.uploadFileStatuses.get(this.sourceFileId);

    if (!fileStatus || !fileStatus.pages) {
      return undefined;
    }

    return fileStatus.pages[this.sourcePageNumber];
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
    return Object.assign(this);
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

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_rotationDegree", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "reviewModel", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "rotationDegree", [_dec3], Object.getOwnPropertyDescriptor(_class.prototype, "rotationDegree"), _class.prototype)), _class));


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
/* harmony import */ var _Product_Product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Product/Product */ "../../../libs/data/src/lib/Product/Product.ts");
/* harmony import */ var _Product__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Product */ "../../../libs/data/src/lib/Product.ts");
/* harmony import */ var _ReviewModel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ReviewModel */ "../../../libs/data/src/lib/Review/ReviewModel.ts");
/* harmony import */ var _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ReviewStatus */ "../../../libs/data/src/lib/Review/ReviewStatus.ts");
/* harmony import */ var class_transformer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! class-transformer */ "../../../node_modules/class-transformer/esm5/index.js");
var _dec, _dec2, _dec3, _dec4, _dec5, _class, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }






let ReviewItem = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Exclude"])(), _dec2 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _ReviewStatus__WEBPACK_IMPORTED_MODULE_3__["default"]), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _Product_Product__WEBPACK_IMPORTED_MODULE_0__["default"], {
  discriminator: _Product__WEBPACK_IMPORTED_MODULE_1__["PRODUCT_TYPE_DISCRIMINATOR"]
}), _dec4 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Expose"])(), _dec5 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["Type"])(() => _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"]), (_class = (_temp = class ReviewItem {
  constructor(status, product) {
    _initializerDefineProperty(this, "_models", _descriptor, this);

    _initializerDefineProperty(this, "status", _descriptor2, this);

    _initializerDefineProperty(this, "product", _descriptor3, this);

    this.status = status;
    this.product = product;
    this.createAndSetBlankModels();
  }

  get reviewId() {
    return this.status.reviewId;
  }

  get numberOfModels() {
    return this.status.numberOfModels;
  }

  getFramedPage(modelIndex, frameIndex) {
    let model = this.models.get(modelIndex);
    if (!model) return undefined;
    return model.framedPages.get(frameIndex);
  }

  set models(models) {
    if (models.size !== this.numberOfModels) {
      throw new Error(`number of models inconsistent: should be ${this.numberOfModels}, but has ${models.size}`);
    }

    this._models = models;
  }

  get models() {
    if (this._models.size !== this.numberOfModels) return this.createAndSetBlankModels();
    return this._models;
  }

  createAndSetBlankModels() {
    this.models = this.createBlankModels();
    return this.models;
  }

  createBlankModels() {
    let models = new Map();

    for (let modelIndex = 1; modelIndex <= this.numberOfModels; modelIndex++) {
      models.set(modelIndex, new _ReviewModel__WEBPACK_IMPORTED_MODULE_2__["default"](modelIndex, this));
    }

    return models;
  }

  get frameDictionary() {
    return this.product.frameDictionary;
  }

  static fromJson(text) {
    let item = Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["deserialize"])(ReviewItem, text);
    item.models.forEach(model => {
      model.reviewItem = item;
      model.framedPages.forEach(framedPage => {
        framedPage.reviewModel = model;
      });
    });
    return item;
  }

  static toJson(item) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_4__["serialize"])(item);
  }

  setReviewModelImmutably(modelIndex, model) {
    let newReviewItem = new ReviewItem(this.status, this.product);
    let newReviewModels = new Map(this.models).set(modelIndex, model);
    newReviewModels.forEach(model => {
      model.reviewItem = newReviewItem;
    });
    newReviewItem.models = newReviewModels;
    return newReviewItem;
  }

  setFramedPageImmutably(modelIndex, frameIndex, framedPage) {
    let oldModel = this.models.get(modelIndex);
    if (!oldModel) throw new Error("modelIndex out of index");
    let newModel = oldModel.setFramedPageImmutably(frameIndex, framedPage);
    return this.setReviewModelImmutably(modelIndex, newModel);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_models", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new Map();
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "status", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "product", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "models", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class.prototype, "models"), _class.prototype)), _class));


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
var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _descriptor, _descriptor2, _descriptor3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let ReviewModel = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec2 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec3 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Exclude"])(), _dec4 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Expose"])(), _dec5 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _FramedPage__WEBPACK_IMPORTED_MODULE_1__["default"]), _dec6 = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Expose"])({
  toPlainOnly: true
}), (_class = (_temp = class ReviewModel {
  constructor(modelIndexInReviewItem, reviewItem) {
    this.modelIndexInReviewItem = modelIndexInReviewItem;

    _initializerDefineProperty(this, "_framedPages", _descriptor, this);

    _initializerDefineProperty(this, "_frameDictionary", _descriptor2, this);

    _initializerDefineProperty(this, "reviewItem", _descriptor3, this);

    this.reviewItem = reviewItem;
    this.createAndSetBlankFramedPages();
  }

  getFrame(index) {
    return this.frameDictionary.getFrame(index);
  }

  setFramedPageImmutably(index, framedPage) {
    let newReviewModel = new ReviewModel(this.modelIndexInReviewItem, this.reviewItem);
    let newFramedPages = new Map(this.framedPages).set(index, framedPage);
    newFramedPages.forEach(framedPage => {
      framedPage.reviewModel = newReviewModel;
    });
    newReviewModel.framedPages = newFramedPages;
    return newReviewModel;
  }

  get framedPages() {
    if (this._framedPages.size !== this.numberOfFramedPages) return this.createAndSetBlankFramedPages();
    return this._framedPages;
  }

  get numberOfFramedPages() {
    return this.frameIndices.length;
  }

  set framedPages(framedPages) {
    if (framedPages.size !== this.numberOfFramedPages) throw new Error("map size inconsistent");
    this._framedPages = framedPages;
  }

  createAndSetBlankFramedPages() {
    this.framedPages = this.createBlankFramedPages();
    return this.framedPages;
  }

  createBlankFramedPages() {
    let framedPages = new Map();
    let frameIndices = this.frameIndices;

    for (const frameIndex of frameIndices) {
      framedPages.set(frameIndex, new _FramedPage__WEBPACK_IMPORTED_MODULE_1__["default"](frameIndex, this));
    }

    return framedPages;
  }

  get frameIndices() {
    return this.frameDictionary.frameIndices;
  }

  get frameDictionary() {
    if (!this._frameDictionary) return this.getAndSetFrameDictionary();
    return this._frameDictionary;
  }

  getAndSetFrameDictionary() {
    this._frameDictionary = this.reviewItem.frameDictionary;
    return this._frameDictionary;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "_framedPages", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return new Map();
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "_frameDictionary", [_dec2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "reviewItem", [_dec3], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _applyDecoratedDescriptor(_class.prototype, "framedPages", [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class.prototype, "framedPages"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "numberOfFramedPages", [_dec6], Object.getOwnPropertyDescriptor(_class.prototype, "numberOfFramedPages"), _class.prototype)), _class));


/***/ }),

/***/ "../../../libs/data/src/lib/Review/ReviewReception.ts":
/*!********************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/data/src/lib/Review/ReviewReception.ts ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ReviewReception; });
class ReviewReception {}

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
/* harmony import */ var _UploadFileStatus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadFileStatus */ "../../../libs/data/src/lib/Review/UploadFileStatus.ts");
var _dec, _class, _descriptor, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let ReviewStatus = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Type"])(() => _UploadFileStatus__WEBPACK_IMPORTED_MODULE_1__["default"]), (_class = (_temp = class ReviewStatus {
  // TODO: enum? string literal? serializable?
  constructor(reviewId, numberOfModels, modelIds, numberOfFiles, uploadFileStatuses, progress) {
    this.reviewId = reviewId;
    this.numberOfModels = numberOfModels;
    this.modelIds = modelIds;
    this.numberOfFiles = numberOfFiles;

    _initializerDefineProperty(this, "uploadFileStatuses", _descriptor, this);

    this.progress = void 0;
    this.uploadFileStatuses = uploadFileStatuses;
    this.progress = progress;
  }

  toJson(status) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["serialize"])(status);
  }

  fromJson(text) {
    return Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["deserialize"])(ReviewStatus, text);
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "uploadFileStatuses", [_dec], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class));


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
class UploadFilePageInfo {
  constructor(pdfAddress, jpegAddress, widthInMm, heightInMm) {
    this.pdfAddress = pdfAddress;
    this.jpegAddress = jpegAddress;
    this.widthInMm = widthInMm;
    this.heightInMm = heightInMm;
  }

}

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
var _dec, _class;

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }


let UploadFileStatus = (_dec = Object(class_transformer__WEBPACK_IMPORTED_MODULE_0__["Expose"])(), (_class = class UploadFileStatus {
  constructor(fileName, fileId, currentStage, numberOfPages, fileAddress, pages, errorStage) {
    this.fileName = fileName;
    this.fileId = fileId;
    this.currentStage = currentStage;
    this.numberOfPages = numberOfPages;
    this.fileAddress = fileAddress;
    this.pages = pages;
    this.errorStage = errorStage;
  }

  get hasError() {
    if (this.errorStage) return true;
    return false;
  }

}, (_applyDecoratedDescriptor(_class.prototype, "hasError", [_dec], Object.getOwnPropertyDescriptor(_class.prototype, "hasError"), _class.prototype)), _class));


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
  let modelIndices = Array.from(props.reviewItem.models.keys());
  let models = props.reviewItem.models;
  let modelStyle = {
    display: "inline-block"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: modelsStyle
  }, modelIndices.map(modelIndex => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: modelIndex,
      style: modelStyle
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_exporting_model_ExportingModel__WEBPACK_IMPORTED_MODULE_1__["default"], {
      onFrameSelect: frameIndex => props.onFrameSelect(modelIndex, frameIndex),
      reviewModel: models.get(modelIndex),
      selectedFrameIndex: props.selectedModelIndex === modelIndex ? props.selectedFrameIndex : undefined
    }));
  })));
}
;
/* harmony default export */ __webpack_exports__["default"] = (ExportList);

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
  let frameHeightInPx = 96;
  let frameWidthInPx = frameWidthInMm * ratio;
  let style = {
    paddingLeft: props.isSelected ? 7 : 9,
    paddingRight: props.isSelected ? 7 : 9,
    paddingTop: props.isSelected ? 5 : 9,
    paddingBottom: 0,
    display: "inline-block",
    backgroundColor: "white"
  };
  let cropStyle = {
    overflow: "hidden",
    height: frameHeightInPx,
    width: frameWidthInPx,
    border: props.isSelected ? "solid 3px #1581ff" : "solid 1px #707070"
  };
  let positionXInMm = props.framedPage.positionX;
  let positionYInMm = props.framedPage.positionY;
  let rotationDegree = props.framedPage.rotationDegree;
  let sourcePage = props.framedPage.getSourcePageInfo();
  let imageStyle = {
    marginLeft: frameWidthInPx / frameWidthInMm * positionXInMm,
    marginTop: frameHeightInPx / frameHeightInMm * positionYInMm,
    width: frameWidthInPx / frameWidthInMm * sourcePage.widthInMm,
    height: frameWidthInPx / frameWidthInMm * sourcePage.heightInMm,
    transform: `rotate(${rotationDegree}deg)`
  };
  let pageIndexStyle = {
    width: frameWidthInPx + (props.isSelected ? 6 : 0),
    color: props.isSelected ? "#1581ff" : "black",
    fontSize: 14,
    fontFamily: "arial",
    textAlign: "center"
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    onClick: props.onSelect
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: cropStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: sourcePage.jpegAddress,
    style: imageStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: pageIndexStyle
  }, props.framedPage.frameIndex));
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
  let pageIndices = props.reviewModel.frameIndices;
  let framedPages = props.reviewModel.framedPages;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: modelIndexStyle
  }, "\u7B2C ", props.reviewModel.modelIndexInReviewItem, " \u6B3E"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, pageIndices.map(frameIndex => {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_exporting_frame_ExportingFrame__WEBPACK_IMPORTED_MODULE_1__["default"], {
      key: frameIndex,
      onSelect: () => props.onFrameSelect(frameIndex),
      framedPage: framedPages.get(frameIndex),
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
  let fileIds = Array.from(props.files.keys());
  let importedFiles = fileIds.filter(fileId => {
    let fileStatus = props.files.get(fileId);
    if (searchBarValue === '' || fileStatus.fileName.includes(searchBarValue)) return true;else return false;
  }).map(fileId => {
    let fileStatus = props.files.get(fileId);
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_imported_file_ImportedFile__WEBPACK_IMPORTED_MODULE_2__["default"], {
      key: fileId,
      fileStatus: fileStatus,
      onPageSelect: pageIndex => {
        props.selectPage(fileId, pageIndex);
      },
      isSelected: pageIndex => {
        return props.isSelected(fileId, pageIndex);
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
  let pages = props.fileStatus.pages.map((pageInfo, index) => {
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
    src: props.info.jpegAddress,
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
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
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

/***/ "../../../libs/ui/src/index.ts":
/*!*********************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/index.ts ***!
  \*********************************************************************/
/*! exports provided: ModelInfo, ImportList, ExportList, Ui, ExportingModel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ModelInfo_ModelInfo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ModelInfo/ModelInfo */ "../../../libs/ui/src/ModelInfo/ModelInfo.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ModelInfo", function() { return _ModelInfo_ModelInfo__WEBPACK_IMPORTED_MODULE_0__["ModelInfo"]; });

/* harmony import */ var _ImportList_ImportList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImportList/ImportList */ "../../../libs/ui/src/ImportList/ImportList.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ImportList", function() { return _ImportList_ImportList__WEBPACK_IMPORTED_MODULE_1__["ImportList"]; });

/* harmony import */ var _ExportList_ExportList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ExportList/ExportList */ "../../../libs/ui/src/ExportList/ExportList.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportList", function() { return _ExportList_ExportList__WEBPACK_IMPORTED_MODULE_2__["ExportList"]; });

/* harmony import */ var _lib_ui__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/ui */ "../../../libs/ui/src/lib/ui.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return _lib_ui__WEBPACK_IMPORTED_MODULE_3__["Ui"]; });

/* harmony import */ var _ExportList_exporting_model_ExportingModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ExportList/exporting-model/ExportingModel */ "../../../libs/ui/src/ExportList/exporting-model/ExportingModel.tsx");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExportingModel", function() { return _ExportList_exporting_model_ExportingModel__WEBPACK_IMPORTED_MODULE_4__["ExportingModel"]; });







/***/ }),

/***/ "../../../libs/ui/src/lib/ui.module.css":
/*!******************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/lib/ui.module.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./ui.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/lib/ui.module.css");

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

/***/ "../../../libs/ui/src/lib/ui.tsx":
/*!***********************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/libs/ui/src/lib/ui.tsx ***!
  \***********************************************************************/
/*! exports provided: Ui, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Ui", function() { return Ui; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui.module.css */ "../../../libs/ui/src/lib/ui.module.css");
/* harmony import */ var _ui_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ui_module_css__WEBPACK_IMPORTED_MODULE_1__);


/* eslint-disable-next-line */

function Ui(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Welcome to ui!"));
}
/* harmony default export */ __webpack_exports__["default"] = (Ui);

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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!../../../libs/ui/src/lib/ui.module.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!/Users/lalame888/projects/gainhow-review/libs/ui/src/lib/ui.module.css ***!
  \*****************************************************************************************************************************************************************************/
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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/WorkingStage.module.css":
/*!**************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/working-stage/WorkingStage.module.css ***!
  \**************************************************************************************************************************************************/
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

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/canvans/Canvans.module.css":
/*!*****************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/working-stage/canvans/Canvans.module.css ***!
  \*****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/frame-line/FrameLine.module.css":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/working-stage/frame-line/FrameLine.module.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/frame-page-component/FramePageComponent.module.css":
/*!*****************************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/working-stage/frame-page-component/FramePageComponent.module.css ***!
  \*****************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/side-tool-bar/SideToolBar.module.css":
/*!***************************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/working-stage/side-tool-bar/SideToolBar.module.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/work-space/WorkSpace.module.css":
/*!**********************************************************************************************************************************************************!*\
  !*** /Users/lalame888/projects/gainhow-review/node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./app/working-stage/work-space/WorkSpace.module.css ***!
  \**********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "../../../node_modules/css-loader/dist/runtime/api.js");
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
/* harmony import */ var _testObjects1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./testObjects1 */ "./app/testObjects1.ts");
/* harmony import */ var _working_stage_WorkingStage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./working-stage/WorkingStage */ "./app/working-stage/WorkingStage.tsx");



const App = () => {
  // const [m, setMessage] = useState<string>('');
  // useEffect(() => {
  //   fetch('/api')
  //     .then((r) => r.json())
  //     .then(setMessage);
  // }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_working_stage_WorkingStage__WEBPACK_IMPORTED_MODULE_2__["default"], {
    initialReviewItem: _testObjects1__WEBPACK_IMPORTED_MODULE_1__["reviewItem"]
  });
};
/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./app/testObjects1.ts":
/*!*****************************!*\
  !*** ./app/testObjects1.ts ***!
  \*****************************/
/*! exports provided: singleSheet1, reviewItem, reviewModel1, page1_1, uploadFileStatus2, uploadFileStatuses1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleSheet1", function() { return singleSheet1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewItem", function() { return reviewItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewModel1", function() { return reviewModel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "page1_1", function() { return page1_1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFileStatus2", function() { return uploadFileStatus2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFileStatuses1", function() { return uploadFileStatuses1; });
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/data */ "../../../libs/data/src/index.ts");
/* harmony import */ var _assets_testImages_1_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/testImages/1.jpg */ "./assets/testImages/1.jpg");
/* harmony import */ var _assets_testImages_1_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_1_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_testImages_2_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/testImages/2.jpg */ "./assets/testImages/2.jpg");
/* harmony import */ var _assets_testImages_2_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_testImages_2_jpg__WEBPACK_IMPORTED_MODULE_2__);



const paperMaterial1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["PaperMaterial"]("一級卡");
const paperMaterial2 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["PaperMaterial"]("象牙卡");
const paper1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["Paper"]("一級卡250µm", paperMaterial1, 250, 250, true);
const paper2 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["Paper"]("象牙卡280µm", paperMaterial1, 280, 300, true);
const singleSheet1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["SingleSheet"](90, 54, true, paper1);
const reviewId1 = "test-review-id";
const fileName1 = "test-file-name";
const fileId1 = "test-file-id1";
const pageInfo3 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"]("", "https://cdn.vox-cdn.com/thumbor/iAy4n7zv75DQ2t3EFEJUcqkg7c0=/0x0:1024x512/1820x1213/filters:focal(289x75:451x237):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67654822/halloween2020.0.jpg", 92, 61);
const pageInfo4 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"]("", "https://cdn.vox-cdn.com/thumbor/iAy4n7zv75DQ2t3EFEJUcqkg7c0=/0x0:1024x512/1820x1213/filters:focal(289x75:451x237):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67654822/halloween2020.0.jpg", 92, 61);
const uploadFileStatus1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFileStatus"](fileName1, fileId1, "GENERATING_PRINTABLE_PAGES", 2, "", [pageInfo3, pageInfo4]);
const pageInfo1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"]("", _assets_testImages_1_jpg__WEBPACK_IMPORTED_MODULE_1___default.a, 92, 56);
const pageInfo2 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFilePageInfo"]("", _assets_testImages_2_jpg__WEBPACK_IMPORTED_MODULE_2___default.a, 92, 56);
const uploadFileStatus2 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["UploadFileStatus"]('testImage13424324324234324324324324', 'file2', 'GENERATING_PRINTABLE_PAGES', 2, '', [pageInfo1, pageInfo2]);
const uploadFileStatuses1 = new Map().set(uploadFileStatus1.fileId, uploadFileStatus1).set(uploadFileStatus2.fileId, uploadFileStatus2).set("wfeads", uploadFileStatus2);
const reviewStatus1 = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewStatus"](reviewId1, 3, ["test-review-id-01", "test-review-id-02", "test-review-id-03"], 1, uploadFileStatuses1, "WAITING_PRINTABLE_REVIEW");
const reviewItem = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["ReviewItem"](reviewStatus1, singleSheet1);
let frameIndices = reviewItem.frameDictionary.frameIndices;
const reviewModel1 = reviewItem.models.get(1);
const page1_1 = reviewModel1.framedPages.get(frameIndices[0]);
page1_1.sourceFileId = fileId1;
page1_1.sourcePageNumber = 0;
page1_1.positionX = -20;
page1_1.positionY = 10;
page1_1.rotationDegree = 30;
const page1_2 = reviewModel1.framedPages.get(frameIndices[1]);
page1_2.sourceFileId = fileId1;
page1_2.sourcePageNumber = 1;
const reviewModel2 = reviewItem.models.get(2);
const page2_1 = reviewModel2.framedPages.get(frameIndices[0]);
page2_1.sourceFileId = fileId1;
page2_1.sourcePageNumber = 0;
const page2_2 = reviewModel2.framedPages.get(frameIndices[1]);
page2_2.sourceFileId = fileId1;
page2_2.sourcePageNumber = 1;
const reviewModel3 = reviewItem.models.get(3);
const page3_1 = reviewModel3.framedPages.get(frameIndices[0]);
page3_1.sourceFileId = fileId1;
page3_1.sourcePageNumber = 0;
const page3_2 = reviewModel3.framedPages.get(frameIndices[1]);
page3_2.sourceFileId = fileId1;
page3_2.sourcePageNumber = 1;


/***/ }),

/***/ "./app/working-stage/WorkingStage.module.css":
/*!***************************************************!*\
  !*** ./app/working-stage/WorkingStage.module.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./WorkingStage.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/WorkingStage.module.css");

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

/***/ "./app/working-stage/WorkingStage.tsx":
/*!********************************************!*\
  !*** ./app/working-stage/WorkingStage.tsx ***!
  \********************************************/
/*! exports provided: WorkingStage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkingStage", function() { return WorkingStage; });
/* harmony import */ var _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @gainhow-review/data */ "../../../libs/data/src/index.ts");
/* harmony import */ var _gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @gainhow-review/ui */ "../../../libs/ui/src/index.ts");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _work_space_WorkSpace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./work-space/WorkSpace */ "./app/working-stage/work-space/WorkSpace.tsx");
/* harmony import */ var _WorkingStage_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./WorkingStage.module.css */ "./app/working-stage/WorkingStage.module.css");
/* harmony import */ var _WorkingStage_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_WorkingStage_module_css__WEBPACK_IMPORTED_MODULE_4__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* eslint-disable-next-line */

function WorkingStage(props) {
  let [bufferedReviewItem, updateBufferedReviewItem] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(props.initialReviewItem);
  let firstModelIndex = 1;
  let firstFrameIndex = bufferedReviewItem.frameDictionary.frameIndices[0];
  let [[selectedModelIndex, selectedFrameIndex], selectFrame] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([firstModelIndex, firstFrameIndex]);
  let selectedFramedPage = bufferedReviewItem.getFramedPage(selectedModelIndex, selectedFrameIndex);
  if (!selectedFramedPage) throw new Error("debug: selected frame is undefined???å");
  let [importListIsHidden, setImportListIsHidden] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  let middleAreaHeight = "calc(100vh - 182px)";
  let importListStyle = {
    display: "inline-block",
    verticalAlign: "top",
    width: importListIsHidden ? 40 : 240,
    height: middleAreaHeight
  };
  const [modelInfoIsHidden, setModelInfoIsHidden] = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  let modelInfoStyle = {
    display: "inline-block",
    verticalAlign: "top",
    width: modelInfoIsHidden ? 40 : 300,
    height: middleAreaHeight
  };
  let workSpaceStyle = {
    display: "inline-block",
    height: middleAreaHeight,
    verticalAlign: "top",
    backgroundColor: "#E4E4E4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    width: `calc(100vw - ${importListStyle.width}px - ${modelInfoStyle.width}px - 14px)`
  };
  let exportListStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    width: `calc(100vw - 300px - 6px)`,
    height: 160
  };
  let downRightAreaStyle = {
    display: 'inline-block',
    width: 300,
    height: 180,
    verticalAlign: 'top',
    border: "solid 2px #E4E4E4",
    borderLeft: "none",
    backgroundColor: "#F7F7F7"
  };
  let nextStepButtonStyle = {
    marginBottom: 10,
    marginTop: 50,
    marginLeft: 58
  };
  let previousStepButtonStyle = {
    marginLeft: 58
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      whiteSpace: 'nowrap'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["ImportList"], {
    style: importListStyle,
    files: bufferedReviewItem.status.uploadFileStatuses,
    selectPage: (fileId, pageIndex) => {
      let newFramedPage = new _gainhow_review_data__WEBPACK_IMPORTED_MODULE_0__["FramedPage"](selectedFramedPage.frameIndex, selectedFramedPage.reviewModel);
      newFramedPage.sourceFileId = fileId;
      newFramedPage.sourcePageNumber = pageIndex;
      let newReviewItemForBuffering = bufferedReviewItem.setFramedPageImmutably(newFramedPage.reviewModel.modelIndexInReviewItem, newFramedPage.frameIndex, newFramedPage);
      updateBufferedReviewItem(newReviewItemForBuffering);
    },
    isSelected: (fileId, pageIndex) => {
      return fileId === selectedFramedPage.sourceFileId && pageIndex === selectedFramedPage.sourcePageNumber;
    },
    isHidden: importListIsHidden,
    onToggle: () => setImportListIsHidden(!importListIsHidden)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_work_space_WorkSpace__WEBPACK_IMPORTED_MODULE_3__["default"], {
    style: workSpaceStyle,
    framedPage: bufferedReviewItem.getFramedPage(selectedModelIndex, selectedFrameIndex)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["ModelInfo"], {
    product: bufferedReviewItem.product,
    isHidden: modelInfoIsHidden,
    onToggle: () => setModelInfoIsHidden(!modelInfoIsHidden),
    style: modelInfoStyle
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_gainhow_review_ui__WEBPACK_IMPORTED_MODULE_1__["ExportList"], {
    style: exportListStyle,
    reviewItem: bufferedReviewItem,
    selectedModelIndex: selectedModelIndex,
    selectedFrameIndex: selectedFrameIndex,
    onFrameSelect: (modelIndex, frameIndex) => selectFrame([modelIndex, frameIndex])
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: downRightAreaStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    style: nextStepButtonStyle,
    isPrimary: true
  }, "\u9810\u89BD\u5217\u5370"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Button, {
    style: previousStepButtonStyle
  }, "\u4E0B\u4E00\u6B65")));
}
;
/* harmony default export */ __webpack_exports__["default"] = (WorkingStage);

function Button(props) {
  const blue = '#1581ff';

  let style = _objectSpread({
    backgroundColor: props.isPrimary ? blue : 'none',
    border: `solid 2px ${blue}`,
    width: 184,
    height: 40,
    borderRadius: 20,
    fontSize: 18,
    color: props.isPrimary ? 'white' : blue
  }, props.style);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("button", {
    style: style
  }, props.children);
}

/***/ }),

/***/ "./app/working-stage/canvans/Canvans.module.css":
/*!******************************************************!*\
  !*** ./app/working-stage/canvans/Canvans.module.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./Canvans.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/canvans/Canvans.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/working-stage/canvans/Canvans.tsx":
/*!***********************************************!*\
  !*** ./app/working-stage/canvans/Canvans.tsx ***!
  \***********************************************/
/*! exports provided: Canvans, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Canvans", function() { return Canvans; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Canvans_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Canvans.module.css */ "./app/working-stage/canvans/Canvans.module.css");
/* harmony import */ var _Canvans_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Canvans_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _frame_page_component_FramePageComponent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../frame-page-component/FramePageComponent */ "./app/working-stage/frame-page-component/FramePageComponent.tsx");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* eslint-disable-next-line */

function Canvans(props) {
  const defaultRatio = 0.6;
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
  let frame = props.framePage.getFrame();
  let frameWidthtInPx = calcFrameWidth();
  let frameHeightInPx = calcFrameheight();
  let imageScale = `calc(${frameWidthtInPx} / ${frame.maxWidth})`;

  function calcFrameWidth() {
    let calcWidthByMaxWidth = `calc(${props.style.width} * ${defaultRatio})`;
    let calcWidthByMaxHeight = `calc(${frame.maxWidth} * ${props.style.height}  * ${defaultRatio} / ${frame.maxHeight} )`;
    return `min(${calcWidthByMaxWidth} , ${calcWidthByMaxHeight})`;
  }

  function calcFrameheight() {
    let calcHeightByMaxHeight = `calc(${props.style.height} * ${defaultRatio} )`;
    let calcHeightByMaxWidth = `calc(${frame.maxHeight} * ${props.style.width} * ${defaultRatio}  / ${frame.maxWidth} )`;
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
    top: `max(calc(50% - calc(calc(${props.style.height}) * ${props.viewPercentage / 100}) / 2), 0px)`,
    left: `max(calc(50% - calc(calc(${props.style.width}) * ${props.viewPercentage / 100}) /2 ), 0px)`,
    position: 'absolute',
    overflow: props.isEditing ? 'visible' : 'hidden'
  };
  const framePageComponentStyle = {
    width: `calc(${frameWidthtInPx})`,
    height: `calc(${frameHeightInPx} )`,
    top: `calc(50% - calc(${frameHeightInPx} / 2))`,
    left: `calc(50% - calc(${frameWidthtInPx} / 2))`,
    position: 'absolute',
    zIndex: 100,
    background: 'white'
  };
  const editingFrameNameMargin = 35;
  const editingFrameNameStyle = {
    userSelect: 'none',
    position: 'absolute',
    top: `calc(50% - calc(${frameHeightInPx} / 2) + calc(${frameHeightInPx} ) + ${editingFrameNameMargin}px)`,
    textAlign: 'center',
    width: '100%',
    fontSize: '20px'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: style,
    ref: myRef
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: CanvansStyle,
    onClick: () => {
      if (props.isEditing) props.setIsEditing(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: framePageComponentStyle
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_frame_page_component_FramePageComponent__WEBPACK_IMPORTED_MODULE_2__["FramePageComponent"], {
    mmToPxScale: imageScale,
    framePage: props.framePage,
    isEditing: props.isEditing,
    onImageClick: e => {
      props.setIsEditing(true);
      e.stopPropagation();
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: editingFrameNameStyle
  }, props.framePage.frameIndex)));
}
/* harmony default export */ __webpack_exports__["default"] = (Canvans);

/***/ }),

/***/ "./app/working-stage/frame-line/FrameLine.module.css":
/*!***********************************************************!*\
  !*** ./app/working-stage/frame-line/FrameLine.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./FrameLine.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/frame-line/FrameLine.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/working-stage/frame-line/FrameLine.tsx":
/*!****************************************************!*\
  !*** ./app/working-stage/frame-line/FrameLine.tsx ***!
  \****************************************************/
/*! exports provided: FrameLine, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameLine", function() { return FrameLine; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FrameLine_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FrameLine.module.css */ "./app/working-stage/frame-line/FrameLine.module.css");
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

/***/ "./app/working-stage/frame-page-component/FramePageComponent.module.css":
/*!******************************************************************************!*\
  !*** ./app/working-stage/frame-page-component/FramePageComponent.module.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./FramePageComponent.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/frame-page-component/FramePageComponent.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/working-stage/frame-page-component/FramePageComponent.tsx":
/*!***********************************************************************!*\
  !*** ./app/working-stage/frame-page-component/FramePageComponent.tsx ***!
  \***********************************************************************/
/*! exports provided: FramePageComponent, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FramePageComponent", function() { return FramePageComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../frame-line/FrameLine */ "./app/working-stage/frame-line/FrameLine.tsx");
/* harmony import */ var _FramePageComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FramePageComponent.module.css */ "./app/working-stage/frame-page-component/FramePageComponent.module.css");
/* harmony import */ var _FramePageComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_FramePageComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* eslint-disable-next-line */

function FramePageComponent(props) {
  let frame = props.framePage.getFrame();
  let shapeArea = frame.shape;
  let bleedingArea = frame.bleedingArea;
  let sourcePageInfo = props.framePage.getSourcePageInfo();
  let imageScale = props.mmToPxScale;
  let imageAddress = sourcePageInfo.jpegAddress;
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
  const imageTransformFrameLineWidth = 6;
  const cutLineBorderWidth = 2;
  const cutLineZIndex = 20;
  const bleedingAreaBorderWidth = 1;
  const bleedingAreaZIndex = 10;
  const marksZIndex = 30;
  const imageTransformFrameZIndex = 40;

  const originalImageStyle = _objectSpread(_objectSpread({}, imageStyle), {}, {
    opacity: 0.3
  });

  const clipedImageStyle = _objectSpread(_objectSpread({}, imageStyle), {}, {
    top: `calc(${imagePostionYInPx} - ${bleedingAreaBorderWidth}px)`,
    left: `calc(${imagePostionXInPx}  - ${bleedingAreaBorderWidth}px)`,
    opacity: 1
  });

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
  const imageTransformFrameIconStyle = {
    width: `18px`,
    height: '18px',
    border: '1px soild #1581FF',
    background: '#1581FF',
    position: 'absolute'
  };
  const imageTransformFrameIconOffset = -imageTransformFrameLineWidth * 2;
  const imageTransformFrameIconMiddle = `calc(50% + calc(${imageTransformFrameIconOffset}px))`;
  let imageTransformFrameIcons = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
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
    onClick: e => props.onImageClick(e)
  }, props.isEditing ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: imageTransformFrameStyle
  }, imageTransformFrameIcons) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_1__["FrameLine"], {
    borderWidth: cutLineBorderWidth,
    clipPath: shapeArea,
    borderColor: '#E2007F',
    zIndex: cutLineZIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageAddress,
    style: clipedImageStyle,
    onClick: e => props.onImageClick(e)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_frame_line_FrameLine__WEBPACK_IMPORTED_MODULE_1__["FrameLine"], {
    borderWidth: bleedingAreaBorderWidth,
    clipPath: props.isEditing ? '' : bleedingArea,
    borderColor: '#333333',
    zIndex: bleedingAreaZIndex
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: imageAddress,
    style: originalImageStyle
  })), marks);
}
;
/* harmony default export */ __webpack_exports__["default"] = (FramePageComponent);

/***/ }),

/***/ "./app/working-stage/side-tool-bar/SideToolBar.module.css":
/*!****************************************************************!*\
  !*** ./app/working-stage/side-tool-bar/SideToolBar.module.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./SideToolBar.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/side-tool-bar/SideToolBar.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/working-stage/side-tool-bar/SideToolBar.tsx":
/*!*********************************************************!*\
  !*** ./app/working-stage/side-tool-bar/SideToolBar.tsx ***!
  \*********************************************************/
/*! exports provided: SideToolBar, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideToolBar", function() { return SideToolBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_icons_UndoIcon_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/icons/UndoIcon.svg */ "./assets/icons/UndoIcon.svg");
/* harmony import */ var _assets_icons_RedoIcon_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/icons/RedoIcon.svg */ "./assets/icons/RedoIcon.svg");
/* harmony import */ var _assets_icons_SaveIcon_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/icons/SaveIcon.svg */ "./assets/icons/SaveIcon.svg");
/* harmony import */ var _assets_icons_ZoomInIcon_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../assets/icons/ZoomInIcon.svg */ "./assets/icons/ZoomInIcon.svg");
/* harmony import */ var _assets_icons_ZoomOutIcon_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/icons/ZoomOutIcon.svg */ "./assets/icons/ZoomOutIcon.svg");
/* harmony import */ var _assets_icons_ResetSizeIcon_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../assets/icons/ResetSizeIcon.svg */ "./assets/icons/ResetSizeIcon.svg");
/* harmony import */ var _SideToolBar_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SideToolBar.module.css */ "./app/working-stage/side-tool-bar/SideToolBar.module.css");
/* harmony import */ var _SideToolBar_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_SideToolBar_module_css__WEBPACK_IMPORTED_MODULE_7__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









/* eslint-disable-next-line */

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
      height: `calc(${props.style.height} - 435px)`
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: _assets_icons_UndoIcon_svg__WEBPACK_IMPORTED_MODULE_1__["default"]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Icon, {
    src: _assets_icons_RedoIcon_svg__WEBPACK_IMPORTED_MODULE_2__["default"]
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
    src: props.src,
    onClick: props.onClick
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
    borderRadius: '50%'
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

/***/ "./app/working-stage/work-space/WorkSpace.module.css":
/*!***********************************************************!*\
  !*** ./app/working-stage/work-space/WorkSpace.module.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-oneOf-0-1!./WorkSpace.module.css */ "../../../node_modules/css-loader/dist/cjs.js?!./app/working-stage/work-space/WorkSpace.module.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./app/working-stage/work-space/WorkSpace.tsx":
/*!****************************************************!*\
  !*** ./app/working-stage/work-space/WorkSpace.tsx ***!
  \****************************************************/
/*! exports provided: WorkSpace, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkSpace", function() { return WorkSpace; });
/* harmony import */ var _canvans_Canvans__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../canvans/Canvans */ "./app/working-stage/canvans/Canvans.tsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "../../../node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _side_tool_bar_SideToolBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../side-tool-bar/SideToolBar */ "./app/working-stage/side-tool-bar/SideToolBar.tsx");
/* harmony import */ var _WorkSpace_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./WorkSpace.module.css */ "./app/working-stage/work-space/WorkSpace.module.css");
/* harmony import */ var _WorkSpace_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_WorkSpace_module_css__WEBPACK_IMPORTED_MODULE_3__);




/* eslint-disable-next-line */

function WorkSpace(props) {
  const initialViewPercentage = 100;
  const [viewPercentage, setViewPercentage] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(initialViewPercentage);
  const [isEditing, setIsEditing] = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false);
  let leftToolBarStyle = {
    display: "inline-block",
    width: '50px',
    height: props.style.height,
    verticalAlign: "top"
  };
  let canvasStyle = {
    display: "inline-block",
    verticalAlign: "top",
    height: props.style.height,
    backgroundColor: "#E4E4E4",
    border: "solid 2px #E4E4E4",
    borderBottom: "none",
    width: `calc(${props.style.width} - ${leftToolBarStyle.width} - 5px)`
  };
  console.log(props.style.width, leftToolBarStyle.width, canvasStyle.width);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    style: props.style
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_side_tool_bar_SideToolBar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    style: leftToolBarStyle,
    zoom: ratio => setViewPercentage(Math.pow(initialViewPercentage, ratio))
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_canvans_Canvans__WEBPACK_IMPORTED_MODULE_0__["Canvans"], {
    style: canvasStyle,
    framePage: props.framedPage,
    viewPercentage: viewPercentage,
    isEditing: isEditing,
    setIsEditing: isEditing => setIsEditing(isEditing)
  }));
}
;
/* harmony default export */ __webpack_exports__["default"] = (WorkSpace);

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

/***/ "./assets/testImages/1.jpg":
/*!*********************************!*\
  !*** ./assets/testImages/1.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "1.761cf0e.jpg";

/***/ }),

/***/ "./assets/testImages/2.jpg":
/*!*********************************!*\
  !*** ./assets/testImages/2.jpg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2.ba4129f.jpg";

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