import {FramedPage, ReviewModel} from '@gainhow-review/data'
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
import { deserialize, serialize, Type } from 'class-transformer';


export type GroupFramedPage  =  HorizontalGroupFramedPage | StraightGroupFramedPage ;
  type HorizontalGroupFramedPage = {
    '左頁' : FramedPage,
    '右頁' : FramedPage,
  }
  type StraightGroupFramedPage = {
    '上頁' : FramedPage,
    '下頁' : FramedPage,
  }
export function groupFramedPage(framedPages: FramedPage[], direct: BookPagingDirection) : Array<GroupFramedPage> {
    let groupArray: Array<GroupFramedPage> = [];

    if ( direct === 'RIGHT_TO_LEFT' ) {
        groupArray = rightToLeftGroupFramedPage(framedPages);
    }
    else if ( direct === 'LEFT_TO_RIGHT' ) {
        groupArray = leftToRightGroupFramedPage(framedPages);
    }
    else {
        groupArray = bottomToTopGroupFramedPage(framedPages);
    }
    return groupArray;
    
  }

  function bottomToTopGroupFramedPage (framedPages: FramedPage[]): Array<GroupFramedPage> {
    return [];
  }

  function leftToRightGroupFramedPage (framedPages: FramedPage[]): Array<GroupFramedPage> {
    return [];
  }

  function rightToLeftGroupFramedPage (framedPages: FramedPage[]): Array<HorizontalGroupFramedPage> {
    let groupArray: Array<HorizontalGroupFramedPage> = [];
    let blankFramePage = new FramedPage(
        '空白頁',
        '空白頁',
        framedPages[0].reviewModel,
        -1
    );
    for( let framedPage of framedPages) {
        let inputGroup: HorizontalGroupFramedPage = {
            '左頁': blankFramePage,
            '右頁': blankFramePage
        };
        let lastGroupIndex: number = (groupArray.length === 0)? 0 : groupArray.length-1;
        let lastGroup: GroupFramedPage = groupArray[lastGroupIndex];
        let isNeedUseOldGroup: boolean = false;
        if (lastGroup) {
            if(lastGroup['右頁'].frameName === '空白頁') isNeedUseOldGroup = true;
        }
        if (framedPage.frameName === '封面') { 
            inputGroup['右頁'] = framedPage;
        } else if (framedPage.frameName === '封底') {
            // TODO: 加上封底裏
            let backCoverBlankPage = new FramedPage(
                '封底裏',
                '封底裏',
                framedPage.reviewModel,
                -1
            );
            if ( isNeedUseOldGroup ) {
                lastGroup['右頁'] = backCoverBlankPage;
            } else {
                let backFramePageGroup = {
                    '左頁': blankFramePage,
                    '右頁': backCoverBlankPage
                }
                groupArray.push(backFramePageGroup);
            }
            inputGroup['左頁'] =  framedPage
        } else if (framedPage.frameName === '1' ) {
            let frontCoverBlankPage = new FramedPage(
                '封面裏',
                '封面裏',
                framedPage.reviewModel,
                -1
            );
            inputGroup = {'左頁': frontCoverBlankPage, '右頁': framedPage};
        } else {
            
            if (isNeedUseOldGroup) {
                inputGroup = groupArray.pop();
                inputGroup['右頁'] = framedPage;
            }
            else {
                inputGroup['左頁'] = framedPage;
            }
        }
        groupArray.push(inputGroup);
    }
    return groupArray;
  }


export function findGroupFramedPageWithFramedPage(groups:Array<GroupFramedPage>, framedPage: FramedPage): GroupFramedPage {
  let result:GroupFramedPage;
  let index:number = framedPage.frameIndexInModel;
  for (let i=0;i<groups.length ; i++) {
    let pageKeyArray = ['左頁','右頁']
    for(let j=0;j<pageKeyArray.length;j++) {
      let key:string = pageKeyArray[j];
      if(groups[i][key].frameIndexInModel === index) {
        result = groups[i];
        break;
      }
      if(result) break;
    }
  }
  if(!result) throw Error('findGroupFramedPageWithFramedPage找不到GroupFramedPage');
  return result
}

export function keepTryingTo<X, Y>(
  doSomething: (input: X) => Promise<Y | "NOT_FINISHED_YET">,
  input: X,
  timeout: number = 2000
): Promise<Y> {
  return new Promise((resolve, reject) => {
      setTimeout(async () => {
          let doSomethingResult = await doSomething(input);
          if (doSomethingResult === "NOT_FINISHED_YET") resolve(
              keepTryingTo(
                  doSomething,
                  input,
                  timeout
              )
          );
          else resolve(doSomethingResult);
      }, timeout)
  })

}

export class History<T> {
  private buffer: Array<T>;
  private end: number;
  private _size: number;
  private memoryBound: number;
  constructor(
    private readonly capacity: number
  ) {
    this.buffer = new Array<T>(capacity);
    this.end = 0;
    this._size = 0;
    this.memoryBound = 0;
  }
  public get isUndoable(): boolean {
    return (this._size > 0);
  }
  public get isRedoable(): boolean {
    return (this.memoryBound != this.end);
  }
  public act(item: T): void {
    this.buffer[this.end] = item;
    this.end = (this.end + 1) % this.capacity;
    this.memoryBound = this.end;
    if (this._size < this.capacity) this._size += 1;
  }
  public undo(): T | null {
    console.log(this);
    if (!this.isUndoable) return null;
    let indexToPop = this.end;
    this.end = (this.end - 1 + this.capacity) % this.capacity;
    this._size -= 1;
    return this.buffer[indexToPop];
  }
  public redo(): T | null {
    if (!this.isRedoable) return null;
    this.end = (this.end + 1) % this.capacity;
    return this.buffer[this.end];
  }
  public get size(): number {
    return this._size;
  }
}

export class TextHistory {
  private buffer: Array<string>;
  private end: number;
  private _size: number;
  private memoryBound: number;
  constructor(
    private readonly capacity: number
  ) {
    this.buffer = new Array<string>(capacity);
    this.end = 0;
    this._size = 0;
    this.memoryBound = 0;
  }
  public get isUndoable(): boolean {
    return (this._size > 1);
  }
  public get isRedoable(): boolean {
    return (this.memoryBound != (this.end) % this.capacity);
  }
  public act(item: string): void {
    this.buffer[this.end] = item;
    this.end = (this.end + 1) % this.capacity;
    this.memoryBound = this.end;
    if (this._size < this.capacity) this._size += 1;
  }
  public undo(): string | null {

    if (!this.isUndoable) return null;
    this.end = (this.end - 1 + this.capacity) % this.capacity;
    this._size -= 1;
    return this.buffer[(this.end - 1 + this.capacity) % this.capacity];
  }
  public redo(): string | null {
    if (!this.isRedoable) return null;
    let currentPosition = this.end;
    this.end = (this.end + 1) % this.capacity;
    this._size += 1;
    return this.buffer[currentPosition];
  }
  public get size(): number {
    return this._size;
  }
  public clone(): TextHistory {
    return deserialize(TextHistory, serialize(this));
  }
}