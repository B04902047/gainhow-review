
import { Coat as CoatInterface } from "@gainhow-review/interfaces";

export default class Coat implements CoatInterface {
    constructor (
        readonly name: string,
        readonly chineseName: string
    ) {}
}