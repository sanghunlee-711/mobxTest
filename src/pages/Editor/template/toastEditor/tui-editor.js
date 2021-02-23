import React, { Component } from 'react';
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
                <select onClick={(e) => this.onClick(e)} id="cars" name="cars">
                    <option value="Pictures">Pictures</option>
                    <option value="Column">Column</option>
                    <option value="Folks">Folks</option>
                </select>

                <EditorTitle>
                    <h1>Upload your Own Story</h1>
                    <div>
                        <input
                            type="text"
                            onChange={(e) => this.onChange(e)}
                            placeholder="Type Your Title!"
                            autoFocus={true}
                        />
                    </div>
                </EditorTitle>
                <div id="editSection"></div>
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

const ButtonWrapper = styled.div`
    width: 10vw;
    height: 5vh;
    margin: 10vh auto;
    display: flex;
    justify-content: center;
    align-items:center;
    button {
        width: 10vw;
        height: 5vh;
        border: 1px solid black;
        width: 100%
        height: height: 100%;
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
