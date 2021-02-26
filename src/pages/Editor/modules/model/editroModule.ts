interface EditorInterface {
    title?: string;
    detail?: string;
    semiDetail?: string;
    contents?: HTMLElement;
}
class EditorModule implements EditorInterface {
    title?: string = 'Hello';
    detail?: string = 'Hello';
    semiDetail?: string = 'Hello';
    contents?: HTMLElement;

    constructor(title?: string, detail?: string, semiDetail?: string, contents?: HTMLElement) {
        this.title = title;
        this.detail = detail;
        this.semiDetail = semiDetail;
        this.contents = contents;
    }
}

export const editorStore = new EditorModule();
