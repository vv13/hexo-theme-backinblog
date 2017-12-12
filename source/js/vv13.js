(function() {
  window.onload = function() {
    var goTop = document.getElementById("goTop");
    //获取页面可视区的高度
    var clientHeight = document.documentElement.clientHeight;
    var timer = null;
    var isTop = true; //回到顶部的过程中如果滚动鼠标滚条会暂停

    //滚动条滚动时触发
    window.onscroll = function() {
      //获取滚动条距离顶部的高度，IE:document.documentElement.scrollTop  chrome:document.body.scrollTop
      var osTop = document.documentElement.scrollTop || document.body.scrollTop;
      if (osTop >= clientHeight) {
        goTop.style.display = "block";
      } else {
        goTop.style.display = "none";
      }
      if (!isTop) {
        clearInterval(timer);
      }
      isTop = false;
    };

    goTop.onclick = function() {
      scrollTo(document.documentElement, 0, 100);
    };
  };

  function scrollTo(element, to, duration) {
    if (duration < 0) return;
    var difference = to - element.scrollTop;
    var perTick = difference / duration * 2;

    setTimeout(function() {
      element.scrollTop = element.scrollTop + perTick;
      scrollTo(element, to, duration - 2);
    }, 10);
  }
})();
