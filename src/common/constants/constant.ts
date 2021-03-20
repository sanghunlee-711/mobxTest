// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

export const idRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//https://regexr.com/3bfsi
export const pwRegEx = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,20}$/;
// '/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^*()\-_=+\\\|\[\]{};:\'",.<>\/?])*.{8,}$/i';
//추후 변경하자!

export const birthExp = /\d{8}/;
