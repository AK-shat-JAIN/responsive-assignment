document.getElementById('toggle-menu').addEventListener('click', function () {
    const leftMenu = document.querySelector('.left-menu');
    const menuItems = document.getElementById('menu-items');
    const toggleButton = document.getElementById('toggle-menu');
  
    if (leftMenu.classList.contains('collapsed')) {
      // Expand menu
      leftMenu.classList.remove('collapsed');
      menuItems.style.display = 'block';
      toggleButton.innerHTML = '<i class="fas fa-times"></i> Close Menu'; // Icon and text for expanded
    } else {
      // Collapse menu
      leftMenu.classList.add('collapsed');
      menuItems.style.display = 'none';
      toggleButton.innerHTML = '<i class="fas fa-bars"></i>'; // Icon and text for collapsed
    }
  });
  
  
  // Dynamic Scaling Function
  function adjustScale() {
    const width = window.innerWidth;
    let scale = 1;
  
    if (width >= 992 && width <= 1600) {
      scale = 0.9;
    } else if (width >= 700 && width < 992) {
      scale = 0.8;
    } else if (width >= 600 && width < 700) {
      scale = 0.75;
    } else if (width <= 600) {
      scale = 0.5;
    }
  
    document.body.style.transform = `scale(${scale})`;
  }
  
  // Apply scaling on load and resize
  window.addEventListener('resize', adjustScale);
  window.addEventListener('load', adjustScale);
  