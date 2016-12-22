;
(function() {

    //touchstart:     
    //touchmove:     
    //touchend:          
    //touchcancel:         

    PanLi(function() {


        var _hostName = window.location.hostname;

        PanLi(".action-bar").html('');




        var url = '';

        if (_hostName == 'localhost') {
            url = 'taobao.com';
        } else {
            url = domainURI(window.location.href);
        }



        console.log(PLElements[url]);

        PanLi(PLElements[url]).remove();

        if (_hostName == 'h5.m.taobao.com') {
            console.log("竟然是手淘 == h5.m.taobao.com")
            PanLi('body').css({ 'paddingTop': '0' });
            var dconten = PanLi(".dt-content");
            if (dconten.length) {
                PanLi('body,html').animate({ scrollTop: dconten.offset().top });
            }

        }




        if (_hostName == 'm.lifevc.com') {

            PanLi("header.avoid").css({ 'top': '0' });
            PanLi("article.item-body").removeClass('avoid');



            var nod = document.createElement("style"),
                str = ".warp-Menus.avoid {top: 4rem;}";
            nod.type = "text/css";
            if (nod.styleSheet) { //ie下  
                nod.styleSheet.cssText = str;
            } else {
                nod.innerHTML = str; //或者写成 nod.appendChild(document.createTextNode(str))  
            }
            document.getElementsByTagName("head")[0].appendChild(nod);



        }


        if (_hostName == 'detail.m.tmall.com') {
            PanLi("#content").css({ 'paddingTop': '0' });
        }


        setTimeout(function() {



            setTimeoutRemove();

        }, 500)


        function setTimeoutRemove() {

            PD("#page").show();

            var taobaoClose = PanLi("[id$='-close']");
            if (taobaoClose.length > 0) {
                taobaoClose.parent().remove();
            }

            if (_hostName == 'h5.m.taobao.com') {
                PanLi('body').css({ 'paddingTop': '0' });
            };

            PanLi(PLElements[url]).remove();

            if (_hostName == 'jhs.m.taobao.com') {
                PanLi("html.aliapp").removeClass('maskon')
            }


            setTimeout(function() {

                setTimeoutRemove();

            }, 500)



        }



    })





})();