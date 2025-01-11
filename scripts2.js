document.addEventListener('DOMContentLoaded', function () {
  const cookiePopup = document.getElementById('cookie-popup');
  const yesButton = document.getElementById('yes-please');
  const noButton = document.getElementById('no-thanks');

  // Überprüfen, ob der Benutzer eine Wahl getroffen hat
  if (!localStorage.getItem('cookieChoice')) {
    cookiePopup.classList.add('show');
  }

  // Funktion zum Tracken der Auswahl
  function trackCookieChoice(choice) {
    // Speichere die Auswahl in localStorage
    localStorage.setItem('cookieChoice', choice);

    // Tracking mit Google Analytics
    gtag('event', 'click', {
      'event_name': 'cookies',
      'choice': choice
    });

    // Debugging
    console.log(`Cookie Choice: ${choice}`);

    // Verstecke das Pop-up
    cookiePopup.classList.remove('show');
  }

  // Event-Listener für die Buttons
  yesButton.addEventListener('click', () => trackCookieChoice('yes'));
  noButton.addEventListener('click', () => trackCookieChoice('no'));
});