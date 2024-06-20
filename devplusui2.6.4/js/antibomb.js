// Cookie functions
  const Cookie = {
    get: (e) => { e = document.cookie.match(new RegExp("(?:^|; )" + e.replace(/([.$?*|{}()[\]\\/+^])/g, "$1") + "=([^;]*)")); return e ? decodeURIComponent(e[1]) : void 0 },
    set: (e, n, o = {}) => { o = { path: "/", ...o }, o.expires instanceof Date && (o.expires = o.expires.toUTCString()); let c = unescape(encodeURIComponent(e)) + "=" + unescape(encodeURIComponent(n)); for (var t in o) { c += "; " + t; var a = o[t]; !0 !== a && (c += "=" + a) } document.cookie = c },
    rem: (e) => { Cookie.set(e, "", { "max-age": -1 }) }
  }

  // Anti bomb config
  const antiBombSet = {
    timeOut: 3600, // Timeout in seconds, when to ads appear after maximum clicks
    maxClick: 3, // No of maximum clicks
    cookieKey: "MAX_CLICKED", // Cookie key to set
    adsSelectors: "ins.adsbygoogle", // Ads selectors
    iframeSelectors: "ins.adsbygoogle iframe", // Ads iframe selectors
    callback: () => {
      // Runs only one time if/when clicked maximum times on ads
      if (antiBombSet.executed === undefined) {
        antiBombSet.executed = !0;

        // Prevent clicks on ads placement with pointer-events:none | You can also try display:none
        const declarations = "{pointer-events:none}";
        if (document.getElementById("mxAds_stl") == null) {
          var stl = document.createElement("style");
          stl.id = "mxAds_stl";
          stl.innerHTML = (antiBombSet.adsSelectors || ".adsbygoogle") + declarations;
          document.head.appendChild(stl);
        }

        // Add your js below to execute if/when clicked maximum times on ads
        // console.warn("You have clicked the maximum times on ads. Don't click on ads if you don't want to support us.");

      }
    }
  };

  if (Cookie.get(antiBombSet.cookieKey || "ADS_CLICK") != undefined && parseInt(Cookie.get(antiBombSet.cookieKey || "ADS_CLICK")) >= (antiBombSet.maxClick || 3)) {
    antiBombSet.callback()
  };
