// index.d.ts
export default 0;
declare global {
  interface NumberConstructor {
    isNaN(target: any): boolean;
  }
  function isNaN(target: any): boolean;
}
