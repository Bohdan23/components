!function(s){"use strict";var e='[data-dismiss="alert"]',o=function(t){s(t).on("click",e,this.close)};o.VERSION="3.3.5",o.TRANSITION_DURATION=150,o.prototype.close=function(t){var e=s(this),a=e.attr("data-target");a||(a=(a=e.attr("href"))&&a.replace(/.*(?=#[^\s]*$)/,""));var r=s(a);function n(){r.detach().trigger("closed.bs.alert").remove()}t&&t.preventDefault(),r.length||(r=e.closest(".alert")),r.trigger(t=s.Event("close.bs.alert")),t.isDefaultPrevented()||(r.removeClass("in"),s.support.transition&&r.hasClass("fade")?r.one("bsTransitionEnd",n).emulateTransitionEnd(o.TRANSITION_DURATION):n())};var t=s.fn.alert;s.fn.alert=function(a){return this.each(function(){var t=s(this),e=t.data("bs.alert");e||t.data("bs.alert",e=new o(this)),"string"==typeof a&&e[a].call(t)})},s.fn.alert.Constructor=o,s.fn.alert.noConflict=function(){return s.fn.alert=t,this},s(document).on("click.bs.alert.data-api",e,o.prototype.close)}(jQuery);