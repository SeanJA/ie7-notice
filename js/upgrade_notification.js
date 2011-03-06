(function(document){

    var ua = navigator.userAgent.toLowerCase(),
    client = {
        isIE:       ua.indexOf('msie') > -1,
        isIE8:      ua.indexOf('msie 8') > -1
    },
    ltIE8 = client.isIE && !client.isIE8;

    if(ltIE8){

        var addLoadEvent = function(func) {
            var oldonload = window.onload;
            if (typeof window.onload != 'function') {
                window.onload = func;
            } else {
                window.onload = function() {
                    func();
                    if (oldonload) {
                        oldonload();
                    }
                };
            }
        };

        addLoadEvent(function(){
            var oldHtml = document.body.innerHTML,
            css_a = 'text-decoration: underline; color: black; font-weight:bold;',
            warningHtml = '',
            spacerHTML = '',
            oldHTMLWrap = '';

            warningHtml += '<style>';
            warningHtml += 'html, body { ';
            warningHtml += 'overflow-y: hidden!important; ';
            warningHtml += 'height: 100%;';
            warningHtml += 'padding: 0px;';
            warningHtml += 'margin: 0px;';
            warningHtml += '</style>';
            warningHtml += '<div style="position: absolute; top:0px; bottom:auto; left:0px; right:0px; margin: 0px; height:17px; padding: 3px; font-family: Verdana, Helvetica, Geneva, Arial, sans-serif; font-size:10px; background-color:#FFFFE1; color:black; border-top: 1px solid #FFFFE1; border-bottom: 1px solid #cccccc; padding-left:15px; margin-left: -15px;">';
            warningHtml += '<div style="float:right; text-align:right; width:60px; margin: auto 5px;">';
            warningHtml += '<a style="text-decoration: none; color: black;" href="#close" onclick="this.parentNode.parentNode.style.display=\'none\'; this.parentNode.parentNode.parentNode.childNodes[0].childNodes[0].style.display=\'none\'; return false;">[ close ]</a>';
            warningHtml += '</div>';
            warningHtml += '<div style="text-align:left; margin:auto 10px;">';
            warningHtml += 'It looks like you are using an out-of-date version of Internet Explorer, <a style="'+css_a+'" target="_blank" href="http://www.microsoft.com/windows/Internet-explorer/default.aspx">click here</a> to download the latest version! Or you could try';
            warningHtml += ' <a style="'+css_a+'" target="_blank" href="http://www.mozilla.com/firefox/">Firefox</a>, ';
            warningHtml += ' <a style="'+css_a+'" target=_blank" href="http://www.google.com/chrome">Chrome</a>, ';
            warningHtml += ' <a style="'+css_a+'" target="_blank" href="http://www.opera.com/download/">Opera</a> or ';
            warningHtml += ' <a style="'+css_a+'" target="_blank" href="http://www.apple.com/safari/download/">Safari</a>.';
            warningHtml += '</div>';
            warningHtml += '</div>';

            spacerHTML += '<div style="height:25px; line-height:25px; font-size:10px; display:block; margin:0px; padding:0px;">';
            spacerHTML += '</div>';

            oldHTMLWrap += '<div style="width:100%; margin:0px; padding:0px; height:100%; overflow-y: scroll; position:relative;">';
            oldHTMLWrap += spacerHTML;
            oldHTMLWrap += oldHtml;
            oldHTMLWrap += '</div>';
            document.body.innerHTML = oldHTMLWrap + warningHtml;
        });
    }
})(document);