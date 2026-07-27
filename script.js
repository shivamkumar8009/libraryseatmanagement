fetch("index.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("indexList");
    const frame = document.getElementById("pdfFrame");

    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.title;

      li.onclick = function() {
        // CALL function inside iframe (no reload)
        frame.contentWindow.goToPage(item.page);
      };

      list.appendChild(li);
    });
  });
