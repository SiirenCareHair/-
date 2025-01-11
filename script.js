// Hole alle Körbe mit der Klasse 'trackable-bag'
const allBags = document.querySelectorAll('.trackable-bag');

// Füge jedem Korb einen Klick-Event-Listener hinzu
allBags.forEach(function(bag) {
  bag.addEventListener('click', function(event) {
    gtag('event', 'add_to_cart', {
      'event_category': 'E-Commerce',
      'event_label': 'Warenkorb Klick',
      'value': 1
    });
    console.log('Tracking: add_to_cart ausgelöst');
  });
});