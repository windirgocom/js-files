(function() {
      // Check if we've already redirected to avoid loops
      if (sessionStorage.getItem('redirected')) {
        return; // Skip redirect if we've already tried once
      }
      
      // Function to detect if the device is mobile
      function isMobile() {
        const ua = navigator.userAgent;
        
        // Clearer mobile detection - specific to smartphones
        // iPhone, Android phones, Windows Phone, BlackBerry, etc.
        const isMobileDevice = /iPhone|Android.*Mobile|Windows Phone|BlackBerry|webOS/i.test(ua);
        
        // Debugging - log user agent and detection result to console
        console.log('User Agent:', ua);
        console.log('Is Mobile Device:', isMobileDevice);
        
        return isMobileDevice;
      }
      
      // Save the detection result
      const mobileDetected = isMobile();
      
      // Add visible debug info for testing (will only show briefly)
      if (mobileDetected) {
        document.addEventListener('DOMContentLoaded', function() {
          const debugDiv = document.createElement('div');
          debugDiv.style.position = 'fixed';
          debugDiv.style.top = '0';
          debugDiv.style.left = '0';
          debugDiv.style.padding = '10px';
          debugDiv.style.backgroundColor = 'green';
          debugDiv.style.color = 'white';
          debugDiv.style.zIndex = '9999';
          debugDiv.innerHTML = 'Mobile device detected - staying on site';
          document.body.appendChild(debugDiv);
          setTimeout(function() { debugDiv.style.display = 'none'; }, 5000);
        });
      }
      
      // Redirect ONLY if not a mobile device
      if (!mobileDetected) {
        // Set flag to prevent redirect loops
        sessionStorage.setItem('redirected', 'true');
        window.location.href = "https://google.com";
      }
    })();
