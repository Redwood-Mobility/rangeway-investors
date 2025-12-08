/**
 * Rangeway Investor Hub - Authentication
 * Client-side password protection
 */

(function() {
  'use strict';

  // SHA-256 hash of the password - must match login.html
  // To generate: echo -n "YourPassword" | shasum -a 256
  const PASSWORD_HASH = '8fbc475b6d8587c9c4d96bb479145144beb1e012084d1b701217f96d883d019a';

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
