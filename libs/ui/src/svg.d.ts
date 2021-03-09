declare module '*.svg' {
    // 為了讓.svg檔用import匯入的時候，可以被TypeScript當成普通的string
    const content: string;
    export default content;
}
