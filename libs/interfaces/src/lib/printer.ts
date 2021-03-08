
/** ============ 集單＆組版 ============ */



// 數位印刷機
export interface Printer {
	needJdf: boolean;
	jdfRequestUrl?: string;
	paperStockLimits: PaperStockLimits;
	validPaperNames: string[];
};
// 紙材限制
interface PaperStockLimits {
	stockType: "sheet" | "roll";    // 紙材類型：單張／卷裝
	maxWidth: number;               // 寬度上限
	minWidth: number;               // 寬度下限
	maxHeight: number;              // 高度上限
	minHeight: number;              // 高度下限
	maxThickness: number;           // 厚度上限
	minThickness: number;           // 厚度下限
};
