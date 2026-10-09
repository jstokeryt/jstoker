function xss() {
    console.log(
  "%cHold Up!", 
  "color: purple; font-size: 42px; font-weight: bold; -webkit-text-stroke: 1px black;"
);

console.log(
  "%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. Do not enter or paste code that you do not understand.", 
  "font-size: 16px; font-family: sans-serif; line-height: 1.5;"
);

}
function xss3() {
console.log(
  "%cHold Up!", 
  "color: purple; font-size: 42px; font-weight: bold; -webkit-text-stroke: 1px black;"
);
    console.log(
  "%cUsing this console may allow attackers to impersonate you and steal your information using an attack called Self-XSS. Do not enter or paste code that you do not understand.", 
  "font-size: 16px; font-family: sans-serif; line-height: 1.5;"
);
console.log(
  "%cIf you know exactly what you are doing, you should come work with us.", 
  "font-size: 16px; font-family: sans-serif; line-height: 1.5;"
);
}
function xss2() {
    console.log(
  "%cHold Up!", 
  "color: purple; font-size: 42px; font-weight: bold; -webkit-text-stroke: 1px black;"
);
    console.log(
  "%cThis tool is intended for developers and developmental purposes, if you are not one of these, just close this window.", 
  "font-size: 16px; font-family: sans-serif; line-height: 1.5;"
);
}
xss();
setTimeout(() => {
    // This code runs after 2 seconds
    xss2();
}, 2000); 
setTimeout(() => {
    // This code runs after 2 seconds
    xss3();
}, 4000); 