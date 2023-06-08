let body = document.createElement("body");
let div1 = document.createElement("div");
let ol = document.createElement("ol");
let li1 = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");
let div2 = document.createElement("div");
let ul = document.createElement("ul");
let li4 = document.createElement("li");
let li5 = document.createElement("li");
let li6 = document.createElement("li");

body.append(div1);
div1.append(ol);
ol.append(li1);
ol.append(li2);
ol.append(li3);
body.append(div2);
div2.append(ul);
ul.append(li4);
ul.append(li5);
ul.append(li6);

li1.textContent = "Item 1";
li2.textContent = "Item 2";
li3.textContent = "Item 3";
li4.textContent = "Item A";
li5.textContent = "Item B";
li6.textContent = "Item C";

document.documentElement.append(body);
