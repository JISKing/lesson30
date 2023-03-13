const ul = document.querySelector("ul");

const li0 = document.createElement("li");
li0.id = "null";
li0.textContent = "0";
ul.appendChild(li0);

const li2 = document.createElement("li");
li2.id = "second";
li2.textContent = "2";
ul.appendChild(li2);

const li4 = document.createElement("li");
li4.id = "fourth";
li4.textContent = "4";
ul.appendChild(li4);

ul.insertBefore(document.querySelector("#first"), li2);
ul.insertBefore(document.querySelector("#third"), li4);