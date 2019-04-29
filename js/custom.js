//$('.carousel').carousel();

/* var text = document.getElementById('text');
var newDom = '';
var animationDelay = 6;

for (var i = 0; i < text.innerText.length; i++) {
    newDom += '<span class="char">' + (text.innerText[i] == ' ' ? '&nbsp;' : text.innerText[i]) + '</span>';
}

text.innerHTML = newDom;
var length = text.children.length;

for (var i = 0; i < length; i++) {
    text.children[i].style['animation-delay'] = animationDelay * i + 'ms';
} */

/* function scrollPosition() {
    var elem = document.getElementById("solutions"),
        sectionTopPosition = elem.offsetTop,
        sectionHeight = elem.clientHeight;

    if (document.documentElement.scrollTop > (sectionTopPosition - sectionHeight)) {
        $(".info-box").addClass("show");
    }
} */
/* $(window).load(function() {
    $(window).scroll(function() {
        console.log('scroll');
        var elem = $("#solutions"),
            sectionTopPosition = elem.offset().top,
            sectionHeight = elem.height();
        console.log("sectionTopPosition: " + sectionTopPosition + " sectionHeight: " + sectionHeight);
        if ($(window).scrollTop() > (sectionTopPosition - sectionHeight)) {
            $(".info-box").addClass("show");
        } else {
            $(".info-box").removeClass("show");
        }
    });
}); */