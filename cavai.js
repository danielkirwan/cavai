setTimeout(function(){ 
(function() {
    function async_load(target){
        var s = target.document.createElement('script');
        s.type = 'text/javascript';
        s.id = 'cavai-script';
        var theUrl = 'https://bannerboyz.cavai.com/js/converses/widgets/converse-widget.089cd4c67af73e8fdf103c8b4fe59c17.min.js?bust=' + Date.now();
        s.src = theUrl;
        s.async = true;
       
        s.dataset.clickMacro = 'MACRO_PLACEHOLDER';
        s.dataset.bubbleAppearance = 'custom'

        target.document.body.appendChild(s);
    }
    try {
      async_load(window.top)
    } catch (error) {
      async_load(window)
    }
})();

var target = document.querySelectorAll('.ayl_v_ckr_b')[0];
var clickElement = document.createElement("div");
clickElement.style.position = "absolute";
clickElement.style.left = "0px";
clickElement.style.top = "0px";
clickElement.style.width = "100%";
clickElement.style.height = "100%";
if(target != null){
    target.appendChild(clickElement);    
}else{
    target = document.querySelectorAll('.ayl_v_ckr_b')[0];
}

var clickFunction = function() {
    
    /*cavai code for clicking*/
    const openBubble = new MouseEvent('click');
    document.querySelector('.adbotic-chatbot-bubble-mob').dispatchEvent(openBubble);

    event.preventDefault();
    event.stopPropagation();
    return false;
}


setTimeout(function(){
    target.addEventListener('click', clickFunction, true);
target.addEventListener('touchstart', clickFunction, true);
},3000);

}, 2000);
