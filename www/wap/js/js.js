$(function(){    function Myslide(){    }    Myslide.prototype.phoneSlide = function(slideBoxName){        TouchSlide({            slideCell:"#" + slideBoxName,            titCell:".hd ul",            mainCell:".bd ul",            effect:"leftLoop",            autoPage:true,            autoPlay:true        });    };    var slide1 = new Myslide();    var slide2 = new Myslide();    var slide3 = new Myslide();    var slide4 = new Myslide();    slide1.phoneSlide('slideBox');    slide2.phoneSlide('slideBox2');    slide3.phoneSlide('slideBox3');    slide4.phoneSlide('slideBox4');    function Myprice(){    }       Myprice.prototype.price = function(addName, reduceName, inputName, priceName, numName, priceNum){        $('.' + addName).click(function(){            var n = parseInt($('.' + inputName).val());            if(n > 7) {                n = 7;                $(this).css({'color': '#cbc9c9', 'backgroundColor': 'rgba(203,201,201,.5)'});            } else {                $(this).css({'color': '#aaa', 'backgroundColor': '#440007'});            }            $('.' + inputName).val(parseInt(n + 1));            $('.' + priceName).text(((n + 1) * (priceNum*10000))/10000);            $('.' + numName).text('×'+parseInt(n + 1));            var total = parseFloat($('.priceNum1').text()) + parseFloat($('.priceNum2').text()) + parseFloat($('.priceNum3').text()) + parseFloat($('.priceNum4').text());            $('.price').text(total + '元');        });        $('.' + reduceName).click(function(){            $('.' + addName).css({'color': '#aaa', 'backgroundColor': '#440007'});            var n = parseInt($('.' + inputName).val());            if(n < 1) {                n = 1            }            $('.' + inputName).val(parseInt(n - 1));            $('.' + priceName).text(((n - 1) * (priceNum*10000))/10000);            $('.' + numName).text('×'+parseInt(n - 1));            var total = parseFloat($('.priceNum1').text()) + parseFloat($('.priceNum2').text()) + parseFloat($('.priceNum3').text()) + parseFloat($('.priceNum4').text());            $('.price').text(total + '元');        });    };    var price1 = new Myprice();    var price2 = new Myprice();    var price3 = new Myprice();    var price4 = new Myprice();    price1.price('add1', 'reduce1', 'moonInput1', 'priceNum1', 'number1', '58.2');    price2.price('add2', 'reduce2', 'moonInput2', 'priceNum2', 'number2', '74.3');    price3.price('add3', 'reduce3', 'moonInput3', 'priceNum3', 'number3', '96.0');    price4.price('add4', 'reduce4', 'moonInput4', 'priceNum4', 'number4', '133.5');    $('.circle li').empty();});