// получить доступ к значению атрибутов href
// нужно создать переменную которая будет являться массивом, где каждый элемент это значение href
//перебирать каждый элементи проверять на наличие "/ua/"

let getLinks = document.getElementsByTagName("a");
let uaLinks = [];

function getUaLinks() {
  for (let i = 0; i < getLinks.length; i++) {
    const href = getLinks[i].getAttribute("href");
    if (href.includes("/ua/")) {
      uaLinks.push(getLinks[i].getAttribute("href"));
    }
  }

  return uaLinks;
}
