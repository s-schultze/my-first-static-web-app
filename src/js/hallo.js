document.addEventListener("DOMContentLoaded", function() {
    // Array mit den Texten, die angezeigt werden sollen
    var texts = ["Hallo", "Anja", "Steffen", "Hallo"];
    // Zähler, um den aktuellen Index im Array zu verfolgen
    var counter = 0;
  
    // Funktion, um den nächsten Text aus dem Array anzuzeigen
    function displayText() {
      var textbox = document.getElementById("textbox");
      // Text aus dem Array anzeigen und den Zähler aktualisieren
      textbox.value = texts[counter];
      counter = (counter + 1) % texts.length; // Umschalten zum nächsten Text, wobei der Index innerhalb der Array-Grenzen bleibt
    }
  
    // Den Button auswählen und ihm einen Eventlistener hinzufügen
    var button = document.getElementById("button");
    button.addEventListener("click", displayText);
  });
  