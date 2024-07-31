const body = document.querySelector("body"),
      nav = document.querySelector("nav"),
      modeToggle = document.querySelector(".dark-light"),
      searchToggle = document.querySelector(".searchToggle"),
      sidebarOpen = document.querySelector(".sidebarOpen"),
      siderbarClose = document.querySelector(".siderbarClose");

      let getMode = localStorage.getItem("mode");
          if(getMode && getMode === "dark-mode"){
            body.classList.add("dark");
          }

// js code to toggle dark and light mode
      modeToggle.addEventListener("click" , () =>{
        modeToggle.classList.toggle("active");
        body.classList.toggle("dark");

        // js code to keep user selected mode even page refresh or file reopen
        if(!body.classList.contains("dark")){
            localStorage.setItem("mode" , "light-mode");
        }else{
            localStorage.setItem("mode" , "dark-mode");
        }
      });

// js code to toggle search box
        searchToggle.addEventListener("click" , () =>{
        searchToggle.classList.toggle("active");
      });
 
      
//   js code to toggle sidebar
sidebarOpen.addEventListener("click" , () =>{
    nav.classList.add("active");
});

siderbarClose.addEventListener("click", () => {
    nav.classList.remove("active");
});

body.addEventListener("click" , e =>{
    let clickedElm = e.target;

    if (!clickedElm.classList.contains("sidebarOpen") && 
        !clickedElm.classList.contains("menu") && 
        !clickedElm.closest('.menu')) {
        nav.classList.remove("active");
    }
});

document.addEventListener("DOMContentLoaded", function() {
            const dropdownToggles = document.querySelectorAll(".dropdown-toggle");

            dropdownToggles.forEach(toggle => {
                toggle.addEventListener("click", function(event) {
                    event.preventDefault();
                    this.classList.toggle("active");
                    const dropdownMenu = this.nextElementSibling;
                    dropdownMenu.classList.toggle("show");

                    // Menutup dropdown lain yang terbuka
                    dropdownToggles.forEach(otherToggle => {
                        if (otherToggle !== toggle) {
                            otherToggle.classList.remove("active");
                            otherToggle.nextElementSibling.classList.remove("show");
                        }
                    });
                });
            });

            // Menutup dropdown saat mengklik di luar dropdown
            document.addEventListener("click", function(event) {
                if (!event.target.closest('.dropdown')) {
                    document.querySelectorAll('.dropdown-menu').forEach(menu => {
                        menu.classList.remove('show');
                    });
                }
            });
        });
