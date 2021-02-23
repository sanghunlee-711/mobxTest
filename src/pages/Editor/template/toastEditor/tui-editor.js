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

// const ToastEditor = () => {
//     let toastEditor;

//     const [content, setContent] = useState('');
//     const [title, setTitle] = useState('');

//     useEffect(() => {
//         toastEditor = new Editor({
//             el: document.querySelector('#editSection'),
//             initialEditType: 'wysiwyg', // 'markdown'
//             previewStyle: 'vertical',
//             height: '80vh',
//             exts: ['colorSyntax'],
//         });
//     }, []);

//      saveArticle = () => {
//         const content = toastEditor.getHtml();
//         // console.log({ title, content });
//         this.setState({
//             content,
//         });

//         console.log(`title: ${this.state.title}, content: ${this.state.content}`);
//     }
//     onChange = (e) => {
//         this.setState({ title: e.target.value });
//     }
//     onClick = (e) => {
//         //글을 업로드할 위치 분류를 정하기 위함
//         //bigCategory, smallCategory로 나뉘어서 세부까지 받아내고 백으로 title, content, big, small을 보내자
//         console.log(e.target.value);
//     }

//     return (
//         <div>
//             <span></span>
//         </div>
//     );
// };
let toastEditor;
class ToastEditor extends Component {
    constructor() {
        super();
        this.state = {
            content: '',
            title: '',
        };

        this.saveArticle = this.saveArticle.bind(this);
    }

    componentDidMount() {
        toastEditor = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'wysiwyg', // 'markdown'
            previewStyle: 'vertical',
            height: '80vh',
            exts: ['colorSyntax'],
        });
    }

    saveArticle() {
        const content = toastEditor.getHtml();
        // console.log({ title, content });
        this.setState({
            content,
        });

        console.log(`title: ${this.state.title}, content: ${this.state.content}`);
    }

    onChange(e) {
        this.setState({ title: e.target.value });
    }
    onClick(e) {
        //글을 업로드할 위치 분류를 정하기 위함
        //bigCategory, smallCategory로 나뉘어서 세부까지 받아내고 백으로 title, content, big, small을 보내자
        console.log(e.target.value);
    }

    render() {
        return (
            <div id="toastEditor">
                <EditorTitle>
                    <TitleWrapper>
                        <h1>Upload your Own Story at</h1>
                        <SelectFirstDetail onClick={(e) => this.onClick(e)} id="cars" name="cars">
                            <option value="Pictures">Pictures</option>
                            <option value="Column">Column</option>
                            <option value="Folks">Folks</option>
                        </SelectFirstDetail>
                    </TitleWrapper>
                    <div>
                        <input
                            type="text"
                            onChange={(e) => this.onChange(e)}
                            placeholder="Type Your Title!"
                            autoFocus={true}
                        />
                    </div>
                </EditorTitle>
                <EditorWrapper>
                    <div id="editSection"></div>
                </EditorWrapper>
                <ButtonWrapper>
                    <button onClick={this.saveArticle} className="btn_save">
                        Save
                    </button>
                </ButtonWrapper>
                <div>
                    <h2>result</h2>
                    <textarea
                        className="tf_result"
                        value={`${this.state.title}${this.state.content}`}
                        readOnly="readOnly"
                    ></textarea>
                </div>
            </div>
        );
    }
}

const TitleWrapper = styled.div`
    display: flex;
`;

const SelectFirstDetail = styled.select`
    color: red;
    min-width: 100px;
    min-height: 30px;
    option {
        color: red;
        min-width: 100px;
        min-height: 30px;
    }
`;

const EditorTitle = styled.section`
    color: black;
    font-family: 'Playfair Display', serif;
    font-size: 3rem;

    div {
        display: flex;
    }

    input {
        margin: 5vh 0 5vh 0;
        font-size: 3rem;
        border: none;
    }
`;

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
