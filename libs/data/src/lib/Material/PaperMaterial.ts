
import { PaperMaterial as PaperMaterialInterface } from "@gainhow-review/interfaces";

export default class PaperMaterial implements PaperMaterialInterface {
    constructor(
        readonly name: string,
        readonly aliases?: Array<string>
    ) {}
}