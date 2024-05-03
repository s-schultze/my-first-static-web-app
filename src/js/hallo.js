document.addEventListener("DOMContentLoaded", function() {
    // Funktion, um den Text "Hallo" in der Textbox anzuzeigen
    function displayText() {
      var textbox = document.getElementById("textbox");
      textbox.value = "Hallo";
    }
  
    // Den Button auswählen und ihm einen Eventlistener hinzufügen
    var button = document.getElementById("button");
    button.addEventListener("click", displayText);
  });
  