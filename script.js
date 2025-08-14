<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Animated Glassy Popup Modal</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>
    .glass {
      background: rgba(255, 255, 255, 0.05); /* More transparent */
      backdrop-filter: blur(15px); /* Enhanced glass effect */
      -webkit-backdrop-filter: blur(15px);
      border: 1px solid rgba(255, 255, 255, 0.2); /* Soft border */
    }
    /* Animation for popup */
    @keyframes popupFadeIn {
      0% {
        opacity: 0;
        transform: scale(0.7);
      }
      100% {
        opacity: 1;
        transform: scale(1);
      }
    }
    .popup-content {
      animation: popupFadeIn 0.4s ease-out forwards;
    }
  </style>
</head>
<body class="antialiased bg-gradient-to-br from-purple-900 via-indigo-800 to-blue-900 min-h-screen flex items-center justify-center">
  <!-- Popup Modal -->
  <div id="popup" class="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
    <div class="popup-content glass p-8 rounded-xl shadow-2xl max-w-md w-full relative">
      <!-- Close Button -->
      <button class="close absolute top-3 right-3 text-2xl text-white hover:text-gray-300 focus:outline-none" onclick="document.getElementById('popup').classList.add('hidden')">
        &times;
      </button>
      <!-- Popup Content -->
      <h2 class="text-3xl font-extrabold text-white mb-4">Unlock Your Future!</h2>
      <p class="text-lg text-gray-100 mb-6">Join our virtual internship program now and unleash your potential with hands-on experience.</p>
      <button class="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-white rounded-lg group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-600 group-hover:to-orange-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-pink-200">
        <span class="relative px-6 py-2.5 transition-all ease-in duration-75 bg-gray-900 rounded-md group-hover:bg-transparent">Join Now</span>
      </button>
    </div>
  </div>

  <script>
    // Show popup on page load
    window.onload = function() {
      document.getElementById('popup').classList.remove('hidden');
    };

    // Close popup when clicking outside the content
    document.getElementById('popup').addEventListener('click', function(event) {
      if (event.target === this) {
        this.classList.add('hidden');
      }
    });
  </script>
</body>
</html>