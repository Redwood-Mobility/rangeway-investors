/**
 * Rangeway Investor Hub - Authentication
 * Client-side password protection
 */

(function() {
  'use strict';

  // SHA-256 hash of the password - must match login.html
  // To generate: echo -n "YourPassword" | shasum -a 256
  const PASSWORD_HASH = '5e884898da28047d9169e1809a62bd85e1e3dd91a5e76a6baa6c1b5e3c2e0f1a';

  // Check authentication on page load
  function checkAuth() {
    const auth = sessionStorage.getItem('rangeway-investor-auth');

    if (auth !== PASSWORD_HASH) {
      // Not authenticated - redirect to login
      window.location.href = '/login.html';
      return false;
    }

    return true;
  }

  // Logout function (available globally)
  window.rangewayLogout = function() {
    sessionStorage.removeItem('rangeway-investor-auth');
    window.location.href = '/login.html';
  };

  // Run auth check
  checkAuth();
})();
