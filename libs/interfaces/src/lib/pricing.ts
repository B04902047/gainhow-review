import { Paper, Coat, BindingOption } from './product'


/** ============ 計價參數 ============ */

export interface ComponentPricingConfig {
    unitPrice: number;
    unit: string;
}
// 單張計價參數
export interface SingleSheetPricingConfig {
    readonly coating: Array<CoatingPricingConfig>;
    readonly printing: PrintingPricingConfig;
    readonly paper: Array<PaperPricingConfig>;
}
// 書籍計價參數
export interface BookPricingConfig {
    readonly coating: Array<CoatingPricingConfig>;
    readonly printing: PrintingPricingConfig;
    readonly binding: Array<BookBindingPricingConfig>;
    readonly paper: Array<PaperPricingConfig>;
}
// 紙材計價
export interface PaperPricingConfig extends ComponentPricingConfig {
    unit: "Meter" | "SquareMeter"   // 以「一公尺／一平方公尺」為單位
    paper: Paper;
}
// 上膜計價
export interface CoatingPricingConfig extends ComponentPricingConfig {
    unit: "Page" | "SquareMeter"    // 以「一面／一平方公尺」為單位
    coat: Coat;
}
// 印工計價
export interface PrintingPricingConfig extends ComponentPricingConfig {
    unit: "Meter" | "SquareMeter"   // 以「一公尺／一平方公尺」為單位
}

// 裝訂計價
export interface BookBindingPricingConfig extends ComponentPricingConfig {
    unit: "Copy";                   // 以「一份（一本書）」為單位
    bindingStyle: BindingOption;
}


