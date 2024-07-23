/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-07-22 03:25:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-23 05:53:14
 * @FilePath: \VSCodeProject\web-projects\scripts\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-07-22 03:25:22
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2024-07-22 04:12:13
 * @FilePath: \VSCodeProject\web-projects\scripts\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// let myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello world!";

// let myImage = document.querySelector("img");
// myImage.onclick = function(){
//     let myScr = myImage.getAttribute("scr");
//     if (myScr === "images/numbertwo.jpg"){
//         myImage.setAttribute("src","images/numbertwo.jpg");
//     }
//     else{
//         myImage.setAttribute("src", "images/numbertwo.jpg");
//     }
// };

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName(){
    let myName = prompt("请输入你的名字。");
    myHeading.textContent = "Mozilla cool."+myName;
}

if (!localStorage.getItem("name")){
    setUserName();
}
else{
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "mozilla cool."+storedName;
}

myButton.onclick = function(){
    setUserName();
};