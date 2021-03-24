namespace Home {
  class Header {
    constructor () {
      const element = document.createElement('div');
      element.innerText = "Hello Header";
      document.body.appendChild(element)
    }
  }
  class Content {
    constructor () {
      const element = document.createElement('div');
      element.innerText = "Hello Content";
      document.body.appendChild(element)
    }
  }
  class Footer {
    constructor () {
      const element = document.createElement('div');
      element.innerText = "Hello Footer";
      document.body.appendChild(element)
    }
  }
  export class Page{
    constructor () {
      new Header();
      new Content();
      new Footer()
    }
  }
}