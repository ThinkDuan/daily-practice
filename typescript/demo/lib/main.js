"use strict";
var Home;
(function (Home) {
    var Header = /** @class */ (function () {
        function Header() {
            var element = document.createElement('div');
            element.innerText = "Hello Header";
            document.body.appendChild(element);
        }
        return Header;
    }());
    var Content = /** @class */ (function () {
        function Content() {
            var element = document.createElement('div');
            element.innerText = "Hello Content";
            document.body.appendChild(element);
        }
        return Content;
    }());
    var Footer = /** @class */ (function () {
        function Footer() {
            var element = document.createElement('div');
            element.innerText = "Hello Footer";
            document.body.appendChild(element);
        }
        return Footer;
    }());
    var Page = /** @class */ (function () {
        function Page() {
            new Header();
            new Content();
            new Footer();
        }
        return Page;
    }());
    Home.Page = Page;
})(Home || (Home = {}));
//# sourceMappingURL=main.js.map