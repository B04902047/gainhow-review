import { deserialize, serialize, Type } from 'class-transformer';

export const BACK_COVER_BLANK_PAGENAME = '(封底裏)';
export const FORNT_COVER_BLANK_PAGENAME = '(封面裏)';


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