// Minimal JavaScript for interactive elements (e.g., announcement toggle)
document.addEventListener('DOMContentLoaded', function() {
    var announcementBanner = document.getElementById('announcement');
    var closeBtn = document.getElementById('ann-close');
    if (closeBtn && announcementBanner) {
      closeBtn.addEventListener('click', function() {
        announcementBanner.style.display = 'none';
      });
    }
  });
  