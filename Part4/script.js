let link = document.createElement("a");
link.id = "link";
link.href = "https://dom.spec.whatwg.org/";

let h1 = document.querySelector("h1");
link.appendChild(h1);

document.body.appendChild(link);
