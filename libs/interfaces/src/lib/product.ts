
export type ProductSubtypeName
    = "SingleSheet"
    | BookSubtypeName;

export interface Product {
    readonly __productSubType: ProductSubtypeName;
}

/**
* 書籍
* @enum  
* 
*/
// 總共有的所有書籍類別: 騎馬釘、蝴蝶書、膠裝書
export const BOOK_SUBTYPE_NAMES = [
    "SaddleStichedBook",    // 騎馬釘
    "PerfectBoundBook",     // 膠裝（平裝（純膠裝）／穿線膠裝／方背精裝／圓背精裝／穿線方背精裝／穿線圓背精裝）
] as const;
export type BookSubtypeName = typeof BOOK_SUBTYPE_NAMES[number];

// 翻頁方式: 左翻與右翻
export const BOOK_PAGING_DIRECTIONS = [
    "LEFT_TO_RIGHT",    // 直式由左往右翻
    "RIGHT_TO_LEFT",    // 直式由右往左翻
    "BOTTOM_TO_TOP"     // 橫式
] as const;
export type BookPagingDirection = typeof BOOK_PAGING_DIRECTIONS[number];

// 書籍參數
export interface Book extends Product {
    readonly __productSubType: BookSubtypeName;
    readonly width: number;                         // 成品寬
    readonly height: number;                        // 成品高
    readonly numberOfPages: number;                 // 總頁數
    readonly pagingDirection: BookPagingDirection;  // 翻頁方向
    readonly coverPaper: Paper;              // 封面紙張種類
    readonly innerPagesPaper: Paper;         // 內頁紙張種類
    readonly coverCoating?: Coat;                   // 封面上膜
    readonly innerPageCoating?: Coat;               // 內頁上膜
}

/**
* 膠裝書
*/
export interface PerfectBoundBook extends Book {
    readonly __productSubType: "PerfectBoundBook";
    readonly hardCovered: boolean;      // 是否精裝（外加硬殼）
    readonly threadSewn: boolean;       // 是否穿線
    readonly spineStyle: "standard" | "rounded";    // 書背：方背／圓背
}

/**
* 騎馬釘書
*/
export interface SaddleStichedBook extends Book {
    readonly __productSubType: "SaddleStichedBook";
}


/**
* 單張
*/
export interface SingleSheet extends Product  {
    readonly __productSubType: "SingleSheet";
    readonly width: number,
    readonly height: number,
    readonly isDoubleSided: boolean,
    readonly paper: Paper,
    readonly frontSideCoat?: Coat,
    readonly backSideCoat?: Coat
}

/** ============ 產品組成 ============ */
// 紙張
export interface Paper {
    name: string;
    material: PaperMaterial;
    thickness: number; // 厚度（mm）
    weight: number;    // 單位面積重量（g/m^2）
    isSmooth: boolean; // 表面是否光滑（會影響能否上膜）
    description?: string;
}

// 紙質
export interface PaperMaterial {
    name: string;
    aliases?: Array<string>;
}

// 上模
export interface Coat {
    readonly name: string;
    readonly chineseName: string;
}
// 裝訂方式
export const BINDING_OPTIONS = [
    "SaddleStichBinding",
    "ButterflyBinding",
    "PerfectBinding"
] as const;
export type BindingOption = typeof BINDING_OPTIONS[number];

/** ============ 產品參數選項 ============ */
// 書籍可用選項:可用的紙質以及上膜
export interface BookProductionOptions {
    readonly validPaperTexturesForInnerPages: Array<Paper>;
    readonly validPaperTexturesForCover: Array<Paper>;
    readonly validCoatingStylesForInnerPages: Array<Coat>;
    readonly validCoatingStylesorCover: Array<Coat>;
}
// 單張可用選項:可用的紙質以及上膜
export interface SingleSheetProductionOptions {
    readonly validPaperTextures: Array<Paper>;
    readonly validCoatingStyles: Array<Paper>;
}
