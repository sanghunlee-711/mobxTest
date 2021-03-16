const makeUpperStart = (text: string): string => {
    const checkEnglish = /[a-zA-z]/;
    if (!checkEnglish.test(text)) {
        //영어 아니면 그냥 반환
        return text;
    }
    const start = text?.slice(0, 1).toUpperCase();
    const end = text?.slice(1, text.length);
    const returnString: string = start + end;

    return returnString;
};

// const getDate = (): string => {
//     const date = new Date();
//     const year = date.getFullYear();
//     console.log(date);
//     const month = ('0' + (1 + date.getMonth())).slice(-2);
//     const day = ('0' + date.getDate()).slice(-2);
//     const result = year + month + day;
//     console.log(result);
//     return result;
// };

const ChangeDate = (date: string): string => {
    const GmtIdx = date.indexOf('GMT');
    const dotIdx = date.indexOf(':');
    const getDate = date.slice(0, dotIdx - 2);
    const getLen = getDate.length;
    const year = getDate.slice(getLen - 5, getLen);

    console.log(year);
    return '';
};

const makeScrolluntilNav = (height: number): void => {
    window.scrollBy({
        top: height ? height : 200,
        left: 0,
        behavior: 'smooth',
    });
};

export { makeUpperStart, makeScrolluntilNav };
