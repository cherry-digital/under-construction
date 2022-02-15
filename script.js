if($.browser.mozilla||$.browser.opera){document.removeEventListener("DOMContentLoaded",$.ready,false);document.addEventListener("DOMContentLoaded",function(){$.ready()},false)}$.event.remove(window,"load",$.ready);$.event.add( window,"load",function(){$.ready()});$.extend({includeStates:{},include:function(url,callback,dependency){if(typeof callback!='function'&&!dependency){dependency=callback;callback=null}url=url.replace('\n','');$.includeStates[url]=false;var script=document.createElement('script');script.type='text/javascript';script.onload=function(){$.includeStates[url]=true;if(callback)callback.call(script)};script.onreadystatechange=function(){if(this.readyState!="complete"&&this.readyState!="loaded")return;$.includeStates[url]=true;if(callback)callback.call(script)};script.src=url;if(dependency){if(dependency.constructor!=Array)dependency=[dependency];setTimeout(function(){var valid=true;$.each(dependency,function(k,v){if(!v()){valid=false;return false}});if(valid)document.getElementsByTagName('head')[0].appendChild(script);else setTimeout(arguments.callee,10)},10)}else document.getElementsByTagName('head')[0].appendChild(script);return function(){return $.includeStates[url]}},readyOld:$.ready,ready:function(){if($.isReady) return;imReady=true;$.each($.includeStates,function(url,state){if(!state)return imReady=false});if(imReady){$.readyOld.apply($,arguments)}else{setTimeout(arguments.callee,10)}}});
$.include('js/cufon-yui.js')
$.include('js/cufon-replace.js')
$.include('js/Aller_700.font.js')
$.include('js/Aller_5F400.font.js')
$.include('js/Helvetica_LT_Std_900.font.js')
$.include('js/Yanone_Kaffeesatz_Regular_5F400.font.js')
$.include('js/jquery.easing.1.3.js')
$.include('js/tabs.js')
$.include('js/underconstruction.js')
$.include('js/forms.js')
$.include('js/hover-image.js')
$.include('js/jquery.prettyPhoto.js')

/*======= Top Scroller =======*/ 
    $(document).ready(function() {
   
     $("#blok-top").hide();

    $(window).scroll(function () {
     if ($(this).scrollTop() > 400) {
      $('#blok-top').fadeIn();
     } else {
      $('#blok-top').fadeOut();
     }
    });

    $('#blok-top .top').click(function () {
     $('body,html').stop().animate({
      scrollTop: 0
     }, 300);
     return false;
    });
    });

/*======= Pretty Photo =======*/ 
    $(document).ready(function() { 
     $("a[data-gal^='prettyPhoto']").prettyPhoto({theme:'facebook'});
    }); 
