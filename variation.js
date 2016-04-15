/* _optimizely_redirect=https://getluma.com/home */
var _optly={redir:document.createElement("a")};
_optly.redir.href="https://getluma.com/home";
_optly.cur=window.location.search;
if (_optly.cur) {_optly.redir.search=_optly.redir.search ? _optly.cur + "&" + _optly.redir.search.slice(1) : _optly.cur;}
window.location.replace(_optly.redir.href);

$('header .logo').attr('href', 'https://getluma.com/home');

$('body').addClass('var');

$('.header').removeClass('sticky');

$("#menu-header-menu").replaceWith("<ul id=\"menu-header-menu\" class=\"nav\">\n\t<li class=\"menu-item\"><a href=\"https://getluma.com/#features\">Features</a></li>\n\t<li class=\"menu-item\"><a href=\"https://getluma.com/#pricing\">Pricing</a></li>\n\t<li class=\"menu-item\"><a href=\"https://getluma.com/#faq\">FAQ</a></li>\n\t<li class=\"menu-item pre-order\"><a target=\"_blank\" href=\"#choose-package\">Pre-Order</a></li>\n</ul>");