webpackJsonp(["app/js/question-category/index"],{"6e3c0050c65a90b2276e":function(t,n,e){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var o=e("7ab4a89ebadbfdecc2bf"),i=a(o),c=e("4602c3f5fe7ad9e3e91d"),s=a(c);new(function(){function t(){(0,i.default)(this,t),this.init()}return(0,s.default)(t,[{key:"init",value:function(){this.initEvent(),this.initExpand()}},{key:"initEvent",value:function(){$(".js-category-body").on("click",".delete-btn",function(){var t=$(this).data("countUrl"),n=$(this).data("url");$.get(t,function(t){var e=t.questionCount,a=e>0?Translator.trans("question_bank.question_category.delete_confirm_hint",{count:e}):Translator.trans("admin.category.delete_hint");cd.confirm({title:Translator.trans("question_bank.question_category.delete_confirm_title"),content:a,okText:Translator.trans("site.confirm"),cancelText:Translator.trans("site.cancel")}).on("ok",function(){$.post(n,function(){window.location.reload()}).error(function(t){cd.message({type:"danger",message:Translator.trans("admin.category.delete_fail")})})}).on("cancel",function(){})})})}},{key:"initExpand",value:function(){var t=this;$(".js-toggle-show").on("click",function(n){var e=$(n.target);e.closest(".js-sortable-item").children(".js-sortable-list").animate({height:"toggle",opacity:"toggle"},"normal"),t.toggleIcon(e,"cd-icon-add","cd-icon-remove")})}},{key:"toggleIcon",value:function(t,n,e){t.hasClass(n)?t.removeClass(n).addClass(e):t.removeClass(e).addClass(n)}}]),t}())}},["6e3c0050c65a90b2276e"]);