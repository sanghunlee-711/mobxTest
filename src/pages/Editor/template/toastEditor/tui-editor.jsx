import React, { Component, useState, useEffect } from 'react';
import Editor from '@toast-ui/editor';
// import Editor from 'tui-editor';
import styled from 'styled-components';

// import 'tui-color-picker/dist/tui-color-picker.min';
import '@toast-ui/editor/dist/toastui-editor.css'; // Editor's Style
// import 'tui-editor/dist/tui-editor-extColorSyntax';
import 'codemirror/lib/codemirror.css';
// import 'tui-editor/dist/tui-editor-contents.css';
// import 'highlight.js/styles/github.css';
// import 'tui-color-picker/dist/tui-color-picker.min.css';
// import './ToastEditor.css';
import { editorStore } from '../../modules/model/editroModule';

const ToastEditor = () => {
    const [content, setContent] = useState('');

    const [toastEditor, setToastEditor] = useState('');

    useEffect(() => {
        setToastEditor(
            new Editor({
                el: document.querySelector('#editSection'),
                initialEditType: 'wysiwyg', // 'markdown'
                previewStyle: 'vertical',
                height: '80vh',
                exts: ['colorSyntax'],
            }),
        );
    }, []);

    const saveArticle = () => {
        const content = toastEditor.getHtml();
        const store = editorStore;
        store.contents = content;
        setContent(content);

        console.log(store);
    };

    return (
        <div id="toastEditor">
            <EditorWrapper>
                <div id="editSection"></div>
            </EditorWrapper>
            <ButtonWrapper>
                <button onClick={saveArticle}>Save</button>
            </ButtonWrapper>
            <div>
                <h2>result</h2>
                <textarea className="tf_result" value={`${content}`} readOnly="readOnly"></textarea>
            </div>
        </div>
    );
};

const EditorWrapper = styled.section`
    img {
        max-width: 60vw;
        max-height: 90vh;
    }
`;

const ButtonWrapper = styled.div`
    width: 10vw;
    height: 5vh;
    margin: 10vh auto;
    display: flex;
    justify-content: center;
    align-items: center;
    button {
        width: 10vw;
        height: 5vh;
        border: 1px solid black;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: all 0.5s ease-in-out;
        background-color: white;

        &:hover {
            color: white;
            background-color: black;
        }
    }
`;

export default ToastEditor;
