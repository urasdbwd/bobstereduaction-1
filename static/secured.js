let unlockedCookie = getCookie("bald");
    if (unlockedCookie !== "true") {
      let elements = document.getElementsByTagName("*");
      for (let i = 0; i < elements.length; i++) {
          elements[i].style.display = "none";
      }
        window.location.replace('./en')

    } else {
     void 0;
    }

    function getCookie(cname) {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(';');
      for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    }
