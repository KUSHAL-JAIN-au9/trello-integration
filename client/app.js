console.log("connected");

document
  .getElementById("trelloCardForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var desc = document.getElementById("desc").value;
    var due = document.getElementById("due").value;
    var start = document.getElementById("start").value;

    console.log("values", name, desc, due, start);
    var key = "yourKey"; // Replace with Trello key
    var token = "yourToken"; // Replace with your Trello API token
    var idList = "idList"; // Replace with the ID of the list where the card will be created

    fetch(`https://api.trello.com/1/cards?key=${key}&token=${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        desc: desc,
        due: due,
        start: start,
        idList: idList,
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error("Error:", error));
  });
