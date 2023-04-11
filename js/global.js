const block = document.querySelector(".wrapper");
const addBtn = document.querySelector(".add");
const mdBox = document.querySelector(".modal-block");
const mdClose = mdBox.querySelector(".modal-close");
const addForm = document.forms.add;
const prevTag = addForm.querySelector(".preview");
// console.log(addForm)

let name = "IlyaUdachin";
let path = `https://cats.petiteweb.dev/api/single/${name}`;

