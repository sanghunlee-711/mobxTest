import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavRepo } from '../../../../common/modules/repository/navRepository';
import { editorStore } from '../../modules/model/editroModule';
const CategorySelector = () => {
    const [navData, setNavData] = useState([]);
    const [semiDetail, setSemiDetail] = useState([]);
    const [detailValue, setDetailValue] = useState('Casual');
    const [semiDetailValue, setSemiDetailValue] = useState('Talk');
    const [title, setTitle] = useState('title');
    useEffect(() => {
        //업로드할 위치 정하기 위한 NavData를 NavRespository에서 가져옴
        const data = NavRepo.getNav();
        data.then((res) => setNavData(res.NavData.slice(2, res.NavData.length)));
    }, []);

    const onChange = (e) => {
        const { value, name } = e.target;
        let store = editorStore;
        if (name === 'detail') {
            setDetailValue(value);
            console.log(value);
            //스토어에 detail저장 백엔드로 보내기위함
            store.detail = value;

            navData.forEach((el) => {
                if (el[value]) {
                    setSemiDetail(el[value]['title']);
                }
            });
        } else if (name === 'semiDetail') {
            setSemiDetailValue(value);
            //스토어에 semiDetail저장 백엔드로 보내기위함
            store.semiDetail = value;
        } else if (name === 'title') {
            setTitle(value);
            store.title = value;
        }
    };

    return (
        <div id="toastEditor">
            <EditorTitle>
                <TitleWrapper>
                    <h1>Upload your Own Story at </h1>
                    <SelectFirstDetail onChange={(e) => onChange(e)} name="detail" value={detailValue}>
                        {navData
                            .map((el) => Object.keys(el))
                            .map((eachKey) => (
                                <option value={eachKey[0]}>{eachKey[0]}</option>
                            ))}
                    </SelectFirstDetail>
                    <h1>In </h1>
                    <SelectFirstDetail onChange={(e) => onChange(e)} name="semiDetail" value={semiDetailValue}>
                        {semiDetail?.map((el) => (
                            <option value={el}>{el}</option>
                        ))}
                    </SelectFirstDetail>
                </TitleWrapper>
                <div>
                    <input
                        type="text"
                        onChange={(e) => onChange(e)}
                        name="title"
                        placeholder="Type Your Title!"
                        autoFocus={true}
                    />
                </div>
            </EditorTitle>
        </div>
    );
};

const TitleWrapper = styled.div`
    display: flex;
`;

const SelectFirstDetail = styled.select`
    color: black;
    min-width: 100px;
    min-height: 30px;
    font-size: 1.7rem;
    margin: 0 1vw;
    border: none;
    padding: 1vh 0 0 0;

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

export default CategorySelector;
