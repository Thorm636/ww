
/* 禁止双击 */
window.ondblclick = function () {
    return false;
}

// 禁止页面拖拽
document.addEventListener("touchmove", function (e) {
    e.preventDefault();
}, {
    passive: false
});

/* 判断是否是横屏方法 */
function judgePage(hint) {
    if (window.innerHeight > window.innerWidth) {
        $("body .homebox").get(0).style.transform = "translate(100vw,0) rotateZ(90deg)";
        $("body .homebox").get(0).style.width = "100vh";
        $("body .homebox").get(0).style.height = "100vw";
        $(hint).addClass("dn")
    } else {
        $("body .homebox").get(0).style.transform = "translate(0,0) rotateZ(0deg)";
        $("body .homebox").get(0).style.width = "100vw";
        $("body .homebox").get(0).style.height = "100vh";
        $(hint).removeClass("dn");
    }
}

/* 监听屏幕 */
window.onresize = function () {
    judgePage(".hint");
}
$(function () {
    /* 3秒后监听是否是横屏 */
    setTimeout(function () {
        judgePage(".hint");
        loadingAnimate();
    }, 3000)
    /* loading动画方法 */
    function loadingAnimate() {
        var sum = 0;
        var imgNum = 0;
        tiem = setInterval(function () {
            sum++;
            if (sum >= 100) {
                window.clearTimeout(tiem);
                $(".page1").removeClass("dn");
                $(".loading").addClass("dn");
            }
            $(".loading .bd-box2 img").get(imgNum).style.opacity = 1;
            $(".loading .bd-box2 img").get(imgNum).style.transform = "translateX(0)";
            $(".loading .bd-box2 img").get(imgNum).style.transition = "1s";
            $(".loading .lad-line").get(0).style.transform = `translateX(${-(100 - sum) + "%"})`;
            $(".loading .numbox").get(0).innerHTML = sum + "%";
            if (sum % 20 == 0) {
                imgNum++;
            }
        }, 50);
    } 
});
