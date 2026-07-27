fetch("index.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("indexList");

    data.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.title;

      li.onclick = function() {
        document.getElementById("pdfViewer").src =
          "Trsbook.pdf#page=" + item.page;
      };

      list.appendChild(li);
    });
  });
