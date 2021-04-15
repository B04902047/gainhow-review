import {FramedPage, ReviewModel} from '@gainhow-review/data'
import { BookPagingDirection } from 'libs/interfaces/src/lib/product';
import { deserialize, serialize, Type } from 'class-transformer';

export const BACK_COVER_BLANK_PAGENAME = '(封底裏)';
export const FORNT_COVER_BLANK_PAGENAME = '(封面裏)';
export const LEFT_PAGE = '左頁';
export const RIGHT_PAGE = '右頁';
export type GroupFramedPage  =  HorizontalGroupFramedPage  ;
  type HorizontalGroupFramedPage = {
    [LEFT_PAGE] : FramedPage,
    [RIGHT_PAGE] : FramedPage,
  }
export type SortableFramedPage ={
  id: number;
  FramedPage: FramedPage;
  disable?: boolean;
  sortable?: boolean;
}

export type SortableGroupFramedPage = {
  [LEFT_PAGE] : SortableFramedPage,
  [RIGHT_PAGE] : SortableFramedPage,
}
export function groupFramedPage(framedPages: FramedPage[], direct: BookPagingDirection) : Array<GroupFramedPage> {
    let groupArray: Array<GroupFramedPage> = [];

    if ( direct === 'RIGHT_TO_LEFT' ) {
        groupArray = rightToLeftGroupFramedPage(framedPages);
    }
    else if ( direct === 'LEFT_TO_RIGHT' ) {
        groupArray = leftToRightGroupFramedPage(framedPages);
    }
    return groupArray;
    
  }



  function leftToRightGroupFramedPage (framedPages: FramedPage[]): Array<GroupFramedPage> {
    let rightToLeftGroup = rightToLeftGroupFramedPage(framedPages);
    let result = rightToLeftGroup.map((group)=>{
      let temp = group[LEFT_PAGE];
      group[LEFT_PAGE] = group[RIGHT_PAGE] ;
      group[RIGHT_PAGE] = temp;
      return group;
    })
    return result;
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
            [LEFT_PAGE]: blankFramePage,
            [RIGHT_PAGE]: blankFramePage
        };
        let lastGroupIndex: number = (groupArray.length === 0)? 0 : groupArray.length-1;
        let lastGroup: GroupFramedPage = groupArray[lastGroupIndex];
        let isNeedUseOldGroup: boolean = false;
        if (lastGroup) {
            if(lastGroup[RIGHT_PAGE].frameName === '空白頁') isNeedUseOldGroup = true;
        }
        if (framedPage.frameName === '封面') { 
            inputGroup[RIGHT_PAGE] = framedPage;
        } else if (framedPage.frameName === '封底') {
            // TODO: 加上封底裏
            let backCoverBlankPage = new FramedPage(
                BACK_COVER_BLANK_PAGENAME,
                BACK_COVER_BLANK_PAGENAME,
                framedPage.reviewModel,
                -1
            );
            if ( isNeedUseOldGroup ) {
                lastGroup[RIGHT_PAGE] = backCoverBlankPage;
            } else {
                let backFramePageGroup = {
                    [LEFT_PAGE]: blankFramePage,
                    [RIGHT_PAGE]: backCoverBlankPage
                }
                groupArray.push(backFramePageGroup);
            }
            inputGroup[LEFT_PAGE] =  framedPage
        } else if (framedPage.frameName === '1' ) {
            let frontCoverBlankPage = new FramedPage(
                FORNT_COVER_BLANK_PAGENAME,
                FORNT_COVER_BLANK_PAGENAME,
                framedPage.reviewModel,
                -1
            );
            inputGroup = {[LEFT_PAGE]: frontCoverBlankPage, [RIGHT_PAGE]: framedPage};
        } else {
            
            if (isNeedUseOldGroup) {
                inputGroup = groupArray.pop();
                inputGroup[RIGHT_PAGE] = framedPage;
            }
            else {
                inputGroup[LEFT_PAGE] = framedPage;
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
    let pageKeyArray = [LEFT_PAGE,RIGHT_PAGE]
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

export function framedPagesToSortableFramedPages(framedPages: FramedPage[]): Array<SortableFramedPage> {
  return framedPages.map((framedPages) => {
    return {
        id: framedPages.frameIndexInModel,
        FramedPage: framedPages}
  })
}

export function sortableGroupFramedPage(sortableFramedPage: Array<SortableFramedPage>, direct: BookPagingDirection) : Array<SortableGroupFramedPage> {
  let groupArray: Array<SortableGroupFramedPage> = [];

  if ( direct === 'RIGHT_TO_LEFT' ) {
      groupArray = rightToLeftSortableGroupFramedPage(sortableFramedPage);
  }
  else if ( direct === 'LEFT_TO_RIGHT' ) {
      groupArray = leftToRightSortableGroupFramedPage(sortableFramedPage);
  }
  return groupArray;
  
}

function leftToRightSortableGroupFramedPage (sortableFramedPage: Array<SortableFramedPage>): Array<SortableGroupFramedPage>  {
  let rightToLeftGroup = rightToLeftSortableGroupFramedPage(sortableFramedPage);
  let result = rightToLeftGroup.map((group)=>{
    let temp = group[LEFT_PAGE];
    group[LEFT_PAGE] = group[RIGHT_PAGE] ;
    group[RIGHT_PAGE] = temp;
    return group;
  })
  return result;
}

function rightToLeftSortableGroupFramedPage (sortableFramedPages: Array<SortableFramedPage>): Array<SortableGroupFramedPage>  {
  let groupArray: Array<SortableGroupFramedPage> = [];
  let framedPages = sortableFramedPages[0].FramedPage
  let blankSortableFramePage: SortableFramedPage= {
    id: -1,
    FramedPage: new FramedPage(
      '空白頁',
      '空白頁',
      framedPages.reviewModel,
      -1
  )}


  for( let sortableFramedPage of sortableFramedPages) {
    let framedPage = sortableFramedPage.FramedPage
      let inputGroup: SortableGroupFramedPage = {
          [LEFT_PAGE]: blankSortableFramePage,
          [RIGHT_PAGE]: blankSortableFramePage
      };
      let lastGroupIndex: number = (groupArray.length === 0)? 0 : groupArray.length-1;
      let lastGroup: SortableGroupFramedPage = groupArray[lastGroupIndex];
      let isNeedUseOldGroup: boolean = false;
      if (lastGroup) {
          if(lastGroup[RIGHT_PAGE].FramedPage.frameName === '空白頁') isNeedUseOldGroup = true;
      }
      if (framedPage.frameName === '封面') { 
          inputGroup[RIGHT_PAGE] = sortableFramedPage;
      } else if (framedPage.frameName === '封底') {
          // TODO: 加上封底裏
          let backCoverBlankSortablePage: SortableFramedPage = {
            id: -1,
            FramedPage: new FramedPage(
              BACK_COVER_BLANK_PAGENAME,
              BACK_COVER_BLANK_PAGENAME,
              framedPage.reviewModel,
              -1
          )};
          if ( isNeedUseOldGroup ) {
              lastGroup[RIGHT_PAGE] = backCoverBlankSortablePage;
          } else {
              let backFramePageGroup = {
                  [LEFT_PAGE]: blankSortableFramePage,
                  [RIGHT_PAGE]: backCoverBlankSortablePage
              }
              groupArray.push(backFramePageGroup);
          }
          inputGroup[LEFT_PAGE] =  sortableFramedPage
      } else if (framedPage.frameName === '1' ) {
          let frontCoverBlankPage: SortableFramedPage = {
            id: -1,
            FramedPage: new FramedPage(
              FORNT_COVER_BLANK_PAGENAME,
              FORNT_COVER_BLANK_PAGENAME,
              framedPage.reviewModel,
              -1
          )};
          inputGroup = {[LEFT_PAGE]: frontCoverBlankPage, [RIGHT_PAGE]: sortableFramedPage};
      } else {
          
          if (isNeedUseOldGroup) {
              inputGroup = groupArray.pop();
              inputGroup[RIGHT_PAGE] = sortableFramedPage;
          }
          else {
              inputGroup[LEFT_PAGE] = sortableFramedPage;
          }
      }
      groupArray.push(inputGroup);
  }
  return groupArray;
}


export function getRightOrLeftPageKeyByframeName(frameName: string, direct: BookPagingDirection): typeof RIGHT_PAGE | typeof LEFT_PAGE {
  let result = getRightOrLeftPageKeyByframeNameRightToLeftPageing(frameName);
  if(direct ===  'LEFT_TO_RIGHT') {
    result = (RIGHT_PAGE)? LEFT_PAGE : RIGHT_PAGE;
  } 
  return result
}

function getRightOrLeftPageKeyByframeNameRightToLeftPageing(frameName: string):typeof RIGHT_PAGE | typeof LEFT_PAGE  {

  switch (frameName) {
    case '封面':
      return RIGHT_PAGE
    case FORNT_COVER_BLANK_PAGENAME:
      return LEFT_PAGE
    case BACK_COVER_BLANK_PAGENAME:
      return RIGHT_PAGE
    case '封底':
      return LEFT_PAGE
    default:
      let pageNumber =  parseInt(frameName, 10);
      if(pageNumber === NaN) throw new Error ('getRightOrLeftPageKeyByframeName: Error frameName:'+frameName);
      
      if(pageNumber % 2 === 0) {
        return LEFT_PAGE
      } else {
        return RIGHT_PAGE
      }
  }
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