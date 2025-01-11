// Hole den gemeinsamen Container, der die Warenkörbe enthält
const container = document.querySelector('#bag-container');

// Füge einen Klick-Event-Listener für den Container hinzu
container.addEventListener('click', function(event) {
  // Prüfe, ob das geklickte Element die Klasse 'trackable-bag' hat
  if (event.target.classList.contains('trackable-bag')) {
    // Google Analytics Ereignis 'add_to_cart' auslösen
    gtag('event', 'add_to_cart', {
      'event_category': 'E-Commerce', // Kategorie des Ereignisses
      'event_label': 'Warenkorb Klick', // Beschreibung des Ereignisses
      'value': 1 // Optionaler Wert (z. B. Anzahl der Klicks)
    });

    // Debugging: Zeige in der Konsole, dass das Event ausgelöst wurde
    console.log('Tracking: add_to_cart ausgelöst');
  }
});.