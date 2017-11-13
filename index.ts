type PartialDeep<T> = {
    [P in keyof T]?: PartialDeep<T[P]>;
};
interface Struct {
    a: number;
    b: string;
    c: boolean;
}

declare function f<T>(): PartialDeep<T>;
var result: Partial<Struct> = f();
