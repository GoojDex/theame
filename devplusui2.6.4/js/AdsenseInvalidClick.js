! function () {
    function n(e, o) {
      return null != (e = Cookie.get(e)) && parseInt(e) >= o
    }
    var l = antiBombSet.cookieKey || "ADS_CLICK",
      e = antiBombSet.adsSelectors || ".adsbygoogle",
      i = antiBombSet.timeOut || 7200,
      c = antiBombSet.maxClick || 3;
    0 < document.querySelectorAll(e).length && document.querySelectorAll(e).forEach(e => {
      e.addEventListener("click", function () {
        var e, o;
        n(l, c) ? antiBombSet.callback() : (e = l, null != (o = Cookie.get(e)) ? (o = parseInt(o) + 1, Cookie.set(e, o.toString(), {
          secure: !0,
          "max-age": i
        })) : Cookie.set(e, "1", {
          secure: !0,
          "max-age": i
        }))
      })
    }), window.addEventListener("blur", function () {
      n(l, c) && antiBombSet.callback();
      for (var e, o, t = document.querySelectorAll(antiBombSet.iframeSelectors || ".adsbygoogle iframe"), a = 0; a < t.length; a++) document.activeElement == t[a] && (n(l, c) ? antiBombSet.callback() : (e = l, null != (o = Cookie.get(e)) ? (o = parseInt(o) + 1, Cookie.set(e, o.toString(), {
        secure: !0,
        "max-age": i
      })) : Cookie.set(e, "1", {
        secure: !0,
        "max-age": i
      })))
    })
  }();
