declare module "@philio/t-writer.js" {
    export default Typewriter;
    class Typewriter {
        constructor(el: any, options: any);
        el: any;
        text: string;
        queue: any[];
        options: any;
        type(str: any): this;
        strings(interval: any, ...arr: any[]): this;
        remove(num: any): this;
        clear(): this;
        clearText(): this;
        queueClearText(): this;
        clearQueue(): this;
        rest(time: any): this;
        changeOps(options: any): this;
        then(cb: any): this;
        removeCursor(): this;
        addCursor(): this;
        changeTypeColor(color: any): this;
        changeCursorColor(color: any): this;
        changeTypeClass(className: any): this;
        changeCursorClass(className: any): this;
        start(): void;
        running: boolean;
        add(content: any): any;
        timestamp: number;
        delete(count: any): any;
        deleteAll(): any;
        pause(time: any): any;
        callback(cb: any): any;
        deleteCursor(): any;
        createCursor(): any;
        clearTextAction(): any;
        changeOpsAction(options: any): any;
        typeColor(color: any): any;
        cursorColor(color: any): any;
        typeClass(className: any): any;
        cursorClass(className: any): any;
        deleteChar(): void;
        addChar(char: any): void;
        getTypeSpeed(): any;
        getDeleteSpeed(): any;
        step(idx: any): any;
        loop(idx: any): void;
        createCursorEl(): void;
        cursorEl: HTMLSpanElement;
        cursor: Cursor;
        removeCursorEl(): void;
        createTextEl(): void;
        textEl: HTMLSpanElement;
        render(): void;
    }
    class Cursor {
        constructor(el: any, speed: any);
        el: any;
        speed: any;
        faded: boolean;
        fade(): void;
        fadeIn(): void;
        initialAssignment(): void;
        logic(): void;
        start(): void;
    }
}
//# sourceMappingURL=index.d.ts.map