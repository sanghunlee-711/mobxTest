const makeUpperStart = (text: string): string => {
    const checkEnglish = /[a-zA-z]/;
    if (!checkEnglish.test(text)) {
        //영어 아니면 그냥 반환
        return text;
    }
    const start = text?.slice(0, 1).toUpperCase();
    const end = text?.slice(1, text.length);
    const returnString: string = start + end;
    console.log(returnString);

    return returnString;
};

export { makeUpperStart };
