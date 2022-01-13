var Dofactory={namespace:function(n){for(var r=n.split("."),t=this,i=0,u=r.length;i<u;i++)t[r[i]]=t[r[i]]||{},t=t[r[i]];return t}};Dofactory.namespace("Local").DoIt=function(){var n=function(){};return{start:n}}();Dofactory.namespace("Utils").Alert=function(){var n=function(){$("#alert-success").fadeIn(500).delay(4e3).fadeOut(1e3,function(){$(this).remove()});$("#alert-failure").fadeIn(500).delay(1e4).fadeOut(1e3,function(){$(this).remove()});$("#alert-info").fadeIn(500).delay(6e3).fadeOut(1e3,function(){$(this).remove()})};return{start:n}}();Dofactory.namespace("Utils").ScrollToTop=function(){var n=function(){setInterval(function(){$(".scroll-up").css("right","30px")},1500);$(window).scroll(function(){$(this).scrollTop()>500?$(".scroll-up").fadeIn():$(".scroll-up").fadeOut()});$(".scroll-up").click(function(){return $("html, body").animate({scrollTop:0},800,"swing"),!1})};return{start:n}}();Dofactory.namespace("Utils").ScrollToTarget=function(){var n=function(){$(".scrollToTarget").click(function(n){return n.preventDefault(),$("html, body").animate({scrollTop:$('[name="'+$.attr(this,"href").substr(1)+'"]').offset().top},800,"swing"),!1})};return{start:n}}();Dofactory.namespace("Utils").ScrollSpy=function(){var n=function(){$("body").scrollspy({target:".js-spylist",offset:0});$("body").on("activate.bs.scrollspy",function(){$(".js-spyitem").removeClass("active")});$(".js-spyitem").on("click",function(n){$(".js-spyitem").removeClass("active");$(this).addClass("active");var t=$(this).data("href");return $("html, body").animate({scrollTop:$(t).offset().top+20},700,"swing"),n.preventDefault(),!1})};return{start:n}}();Dofactory.namespace("Utils").Buttons=function(){var n=function(){$(".js-delete").on("click",function(n){var t=$(this).data("prompt");return t===null&&(t="this item"),confirm("Delete "+t+"?")?void 0:(n.preventDefault(),null)});$(".js-undelete").on("click",function(n){var t=$(this).data("prompt");return t===null&&(t="this item"),confirm("Undelete "+t+"?")?void 0:(n.preventDefault(),null)})};return{start:n}}();Dofactory.namespace("Utils").TimeTicker=function(){function n(n,t){var f=n,u,e,o,s,r,i;setInterval(function(){u=parseInt(f/86400,10);i=f%86400;e=parseInt(i/3600,10);i=i%3600;o=parseInt(i/60,10);i=i%60;s=parseInt(i,10);r="";u>0&&(r+=u+(u==1?" day, ":" days, "));(u>0||e>0)&&(r+=e+(e==1?" hr, ":" hrs, "));(u>0||e>0||o>0)&&(r+=o+(o==1?" min, ":" mins, "));r+=" and "+s+(s==1?" sec":" secs");f==0&&(r=" a few moments");t.text(r);--f<0&&(f=0)},1e3)}return{start:n}}();Dofactory.namespace("Utils").AddToCart=function(){var n=function(){$(".js-dropdown-quantity").on("click.bs.dropdown",function(n){n.target.innerHTML!=="Select"&&(n.stopPropagation(),n.preventDefault())});$(".js-quantity").on("keydown",function(n){if(n.which===13){var t=$(this).data("id");return $("#button-"+t).click(),!1}});$(".js-select-quantity").click(function(){var t=$(this).data("id"),n=$("#q-"+t).val();return n>0&&n<51&&($("#quantity-"+t).text(n),$.get("/api/getvolumeprice?id="+t+"&quantity="+n,function(i){var r=$("#symbol").val(),u="<span class='text-red line-through'>"+r+i.price+"<\/span>&nbsp;&nbsp;&nbsp;"+r+i.volumeprice;n<=1&&(u=r+i.price);$("#price-"+t).html(u)})),!0});$(".js-add-to-cart").click(function(n){if(n.clientX>0){var t=$(this).data("id"),i=$("#quantity-"+t).text();return $("#id").val(t),$("#quantity").val(i),$(this).submit(),!0}n.stopPropagation();n.preventDefault()})};return{start:n}}();Dofactory.namespace("Utils").FixedSubHeader=function(){var n=function(){$(window).on("scroll",function(){var n=$("#scroller"),t=n.hasClass("scroller1-fixed"),i=$(this).scrollTop();i>450&&!t?(n.addClass("scroller1-fixed"),$("body").css("margin-top","120px")):i<=450&&t&&(n.removeClass("scroller1-fixed"),$("body").css("margin-top","70px"))})};return{start:n}}();Dofactory.namespace("Utils").FooterEmail=function(){var n=function(){$(".js-footer-email").on("click",function(n){var r=$(this).closest("form"),t=$('input[name="__RequestVerificationToken"]',r).val(),u={__RequestVerificationToken:t},i=$("#footer-email").val();return/^([\w-\.]+@([\w-]+\.)+[\w-]{2,20})?$/.test(i)?($.ajax({url:"/emaillist",type:"POST",data:{email:i,__RequestVerificationToken:t}}),$(".js-footer-input").addClass("d-none"),$(".js-footer-output").removeClass("d-none")):alert("Sorry, incorrect email. Please correct and try again."),n.preventDefault(),!1})};return{start:n}}();Dofactory.namespace("Utils").Interest=function(){var n=function(){$(".js-interest").on("click",function(n){var t=$(this).data("topic"),i=$("#"+t).val();return $.get("/interest?email="+i+"&topic="+t),$("#"+t).val("Success! Thank you.").css("color","#00ae7a"),n.preventDefault(),!1})};return{start:n}}();Dofactory.namespace("Utils").ListPages=function(){var n=function(){$(".js-filter").on("click",function(){return $("#Page").val(1),!0});$("[data-sort]").on("click",function(){var n=$(this).data("sort");$("#Sort").val(n);$("#Page").val(1);$(this).closest("form").submit()});$("[data-page]").on("click",function(){var n=$(this).data("page");$("#Page").val(n);$(this).closest("form").submit()})};return{start:n}}();Dofactory.namespace("Utils").InlineEditing=function(){var n=function(){var n=parseInt($("#last-visible-row").val())+1;$(".row-"+n).show();$(".hide-"+n).val("false");$("#last-visible-row").val(n)},t=function(){var n=parseInt($(this).data("row"));$(".row-"+n).hide();$(".hide-"+n).val("true")},i=function(){$(".js-row-add").on("click",n);$(".js-row-delete").on("click",t)};return{start:i,addRow:n}}();Dofactory.namespace("Utils").SnapProductMenuToTop=function(){var n=function(){function t(){window.pageYOffset>=i?(n.addClass("sticky"),n.children().first().removeClass("border-bottom")):(n.removeClass("sticky"),n.children().first().addClass("border-bottom"))}$(window).on("scroll",function(){t()});var n=$("#sub-menu"),i=document.getElementById("sub-menu").offsetTop;t()};return{start:n}}();Dofactory.namespace("Utils").ScriptToIFrame=function(){var n=function(){$('script[type="text/template"]').each(function(){var r=$(this).html(),i=$(this).attr("id"),n=document.getElementById("iframe-"+i).contentWindow.document,t;n.open();n.write(r);n.close();t=$("#iframe-"+i);t.removeClass("invisible");t.addClass("visible")})};return{start:n}}();Dofactory.namespace("Utils").Misc=function(){var n=function(){$(".js-date-picker").datepicker({format:"mm/dd/yyyy",autoclose:!0});$(".nav-tabs a").on("click",function(n){var t=$(this).attr("href").substr(1),i=window.location.href.split("?")[0];return history.pushState({},"",i+"?tab="+t),$(this).tab("show"),n.preventDefault(),!1});$(".js-filter").on("click",function(){$("#Page").val(1)});$(".advanced-toggle").on("click",function(){$(".advanced-toggle").hasClass("active")?$("#advanced-filter").slideUp():$("#advanced-filter").slideDown()});$('[data-toggle="popover"]').popover({trigger:"hover",html:!0});$('[data-toggle="tooltip"]').tooltip()},t=function(n){var r=window.location.href,i,t;return(n=n.replace(/[\[\]]/g,"\\$&"),i=new RegExp("[?&]"+n+"(=([^&#]*)|&|#|$)"),t=i.exec(r),!t)?null:t[2]?decodeURIComponent(t[2].replace(/\+/g," ")):""};return{start:n,getUrlParameter:t}}();Dofactory.namespace("Utils").MenuOverflow=function(){var n=function(){function i(n,t){var i=new Date,r;i.setTime(i.getTime()+4e3);r="expires="+i.toUTCString();document.cookie=n+"="+t+";"+r+";path=/"}function r(n){for(var t,r=n+"=",f=decodeURIComponent(document.cookie),u=f.split(";"),i=0;i<u.length;i++){for(t=u[i];t.charAt(0)==" ";)t=t.substring(1);if(t.indexOf(r)==0)return t.substring(r.length,t.length)}return""}var n=r("s"),t=$("#ScrollOffset").val();if((!n||n===0&&t>0)&&(n=t-32),n){n>0&&$("#scroll-list").scrollTop(n);$("#scroll-list").addClass("overflow-show");$("#scroll-list").on("mouseout",function(){$("#scroll-list").removeClass("overflow-show")});setTimeout(function(){$("#scroll-list").removeClass("overflow-show")},1e4)}$(".list-group-item-action").on("click",function(){if($(this).data("isexternallink")){i("s",0);return}var n=$("#scroll-list").scrollTop();i("s",n)})};return{start:n}}();Dofactory.namespace("Utils").LazyloadImages=function(){var n=function(){document.addEventListener("DOMContentLoaded",function(){var n=[].slice.call(document.querySelectorAll("img.lazy"));if("IntersectionObserver"in window){let t=new IntersectionObserver(function(n){n.forEach(function(n){if(n.isIntersecting){let i=n.target;i.src=i.dataset.src;i.classList.remove("lazy");t.unobserve(i)}})});n.forEach(function(n){t.observe(n)})}else n.forEach(function(n){n.src=n.dataset.src;n.classList.remove("lazy")})})};return{start:n}}();$(function(){Dofactory.Utils.Alert.start();Dofactory.Utils.ScrollToTop.start();Dofactory.Utils.ListPages.start();Dofactory.Utils.Buttons.start();Dofactory.Utils.Misc.start();Dofactory.Utils.FooterEmail.start();prettyPrint();$.queryParam=function(n){var t=new RegExp("[?&]"+n+"=([^&#]*)").exec(window.location.search);return t!==null?t[1]||0:!1}});