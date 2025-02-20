document.addEventListener("DOMContentLoaded", function () {
    function setupDropdown(dropdownId, buttonClass) {
        const dropdown = document.getElementById(dropdownId);
        const dropBtn = document.querySelector(buttonClass);

        function showDropdown() {
            dropdown.classList.add("show");
        }

        function hideDropdown() {
            dropdown.classList.remove("show");
        }

        function toggleDropdown(event) {
            if (!event.target.closest(".dropdown")) {
                hideDropdown();
            }
        }

        dropBtn.addEventListener("mouseover", showDropdown);
        dropdown.addEventListener("mouseover", showDropdown);
        dropBtn.addEventListener("mouseout", showDropdown);
        dropdown.addEventListener("mouseout", hideDropdown);
        window.addEventListener("click", toggleDropdown);
    }

    setupDropdown("myDropdown", ".dropbtn");
    setupDropdown("myDropdown1", ".dropbtn1");
    setupDropdown("myDropdown2", ".dropbtn2");
    setupDropdown("myDropdown3", ".dropbtn3");
    setupDropdown("myDropdown4", ".dropbtn4");
});
document.addEventListener('DOMContentLoaded', () => {
    const counters = [
        { id: 'count', max: 230 },
        { id: 'count1', max: 20 },
        { id: 'count2', max: 30 },
        
    ];

    counters.forEach(({ id, max }) => {
        let count = 0;
        const counterElement = document.getElementById(id);
        const interval = setInterval(() => {
            counterElement.textContent = count;
            if (count >= max) {
                clearInterval(interval);
            }
            count++;
        }, 10);
    });
});
const menuButton = document.getElementById('menuButton');
    const sideSection = document.getElementById('sideSection');
    const closeButton = document.getElementById('closeButton');

    // Toggle sidebar function
    const toggleSidebar = (open) => {
        if (open) {
            sideSection.style.right = '0';
        } else {
            sideSection.style.right = window.innerWidth < 768 ? '-100%' : '-400px';
        }
    };

    menuButton.addEventListener('click', () => toggleSidebar(true));
    closeButton.addEventListener('click', () => toggleSidebar(false));

    // Close sidebar when clicking outside
    document.addEventListener('click', (e) => {
        if (!sideSection.contains(e.target) && !menuButton.contains(e.target)) {
            toggleSidebar(false);
        }
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && sideSection.style.right === '0') {
            sideSection.style.right = '0';
        } else if (sideSection.style.right === '0') {
            sideSection.style.right = '-100%';
        }
    });

    const swiperEl = document.querySelector('.swiper1')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
    swiperE1.initialize();
    const swiperE2 = document.querySelector('.swiper2')
    Object.assign(swiperEl, {
      slidesPerView: 1,
      spaceBetween: 10,
      
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
    });
    swiperE2.initialize();
    
    
    const swiperE3 = document.querySelector('swiper3')
    Object.assign(swiperE3, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        clickable: true,
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
      },
    });
    swiperE3.initialize();
    document.addEventListener('DOMContentLoaded', () => {
    const swiper = document.querySelector('.mySwiper').swiper;
    
    // Initialize with navigation
    swiper.params.navigation = {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    };
    
    // Update swiper
    swiper.update();
});
const swiperE4 = document.querySelector('.mySwiperses')
Object.assign(swiperE4, {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },
});
swiperE4.initialize();

const swiperE5 = document.querySelector('.mySwipery')
Object.assign(swiperE4, {
  slidesPerView: auto,
  spaceBetween: auto,
  pagination: {
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
  },
});
swiperE5.initialize();


//scroll bar //

