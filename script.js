
    button.addEventListener("click", function () {
      let name = document.getElementById("name").value;
      let year = document.getElementById("year").value;

      let baseURL = "https://localhost:8080/";
      let query = [];

      if (name) query.push("name=" + encodeURIComponent(name));
      if (year) query.push("year=" + encodeURIComponent(year));

      let finalURL = baseURL;

      if (query.length > 0) {
        finalURL += "?" + query.join("&");
      }

      document.getElementById("url").innerText = finalURL;
    });
