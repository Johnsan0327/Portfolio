function openPopup(popupId) {
    document.getElementById(popupId).style.display = 'block';
  }
  
  // Function to close the popup
  function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
  }
  
  // Add event listener to each anchor link
  document.querySelectorAll('.popupLink').forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default anchor behavior
      var popupId = this.getAttribute('data-popup');
      openPopup(popupId); // Open the corresponding popup
    });
  });
