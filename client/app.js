console.log("connected");
document.getElementById("due").placeholder = "";

document
  .getElementById("trelloCardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var desc = document.getElementById("desc").value;
    var due = document.getElementById("due").value;
    var start = document.getElementById("start").value;

    console.log("values", name, desc, due, start);

    fetch(`https://trello-addcard.onrender.com/create-card`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        desc: desc,
        due: due,
        start: start,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        document.getElementById("name").value = "";
        document.getElementById("desc").value = "";
        document.getElementById("due").value = "";
        document.getElementById("start").value = "";
        console.log(data);
      })
      .catch((error) => console.error("Error:", error));
  });
