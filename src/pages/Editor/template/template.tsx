import React, { useState } from 'react';
import { EditorContainer } from '../style/EditorTemplateStyle';
import ToastEditor from './toastEditor/tui-editor';

interface EditorInterface {
    body?: string;
}

const Editortemplate: React.FC<EditorInterface> = (): JSX.Element => {
    const [textState, setTextState] = useState(`<img src="https://picsum.photos/200" />`);
    const uploadImage = (): void => {
        console.log(textState);
        setTextState(textState + `<img dangerouslySetInnerHTML={ {__html: codes} } src ="/https://picsum.photos/200">`);
    };
    return (
        <EditorContainer>
            <ToastEditor />
        </EditorContainer>
    );
};
export default Editortemplate;
