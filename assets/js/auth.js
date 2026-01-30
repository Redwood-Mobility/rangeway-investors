/**
 * Rangeway Investor Hub - Authentication
 * Client-side password protection
 */

(function() {
  'use strict';

  // SHA-256 hash of the password - must match login.html
  // To generate: echo -n "YourPassword" | shasum -a 256
  const PASSWORD_HASH = '16f67eebf5ddf17322cfc185a65f94a5ec6823828bd81525605f59d577d241a7';

  // Check authentication on page load
  // Supports both sessionStorage (temporary) and localStorage (Remember Me)
  function checkAuth() {
    const sessionAuth = sessionStorage.getItem('rangeway-investor-auth');
    const localAuth = localStorage.getItem('rangeway-investor-auth');

    if (sessionAuth !== PASSWORD_HASH && localAuth !== PASSWORD_HASH) {
      // Not authenticated - redirect to login
      window.location.href = '/login.html';
      return false;
    }

    return true;
  }

  // Logout function (available globally)
  // Clears both storage types to ensure complete logout
  window.rangewayLogout = function() {
    sessionStorage.removeItem('rangeway-investor-auth');
    localStorage.removeItem('rangeway-investor-auth');
    window.location.href = '/login.html';
  };

  // Run auth check
  checkAuth();
})();
