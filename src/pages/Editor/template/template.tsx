import React, { useState } from 'react';
import { EditorContainer } from '../style/EditorTemplateStyle';
import ToastEditor from './toastEditor/tui-editor';
import CategorySelector from '../template/toastEditor/editorCategorySelector';

interface EditorInterface {
    body?: string;
}

const Editortemplate: React.FC<EditorInterface> = (): JSX.Element => {
    const [textState, setTextState] = useState(`<img src="https://picsum.photos/200" />`);

    return (
        <EditorContainer>
            <CategorySelector />
            <ToastEditor />
        </EditorContainer>
    );
};
export default Editortemplate;
