const body = document.querySelector("body"),
	            nav = document.querySelector("nav"),
	            modeToggle = document.querySelector(".dark-light"),
	            searchToggle = document.querySelector(".searchToggle"),
	            sidebarOpen = document.querySelector(".sidebarOpen"),
	            siderbarClose = document.querySelector(".siderbarClose");
	
	        let getMode = localStorage.getItem("mode");
	        if (getMode && getMode === "dark-mode") {
	            body.classList.add("dark");
	        }
	
	        // js code to toggle dark and light mode
	        modeToggle.addEventListener("click", () => {
	            modeToggle.classList.toggle("active");
	            body.classList.toggle("dark");
	
	            // js code to keep user selected mode even page refresh or file reopen
	            if (!body.classList.contains("dark")) {
	                localStorage.setItem("mode", "light-mode");
	            } else {
	                localStorage.setItem("mode", "dark-mode");
	            }
	        });
	
	        // js code to toggle search box
	        searchToggle.addEventListener("click", () => {
	            searchToggle.classList.toggle("active");
	        });
	
	        // js code to toggle sidebar
	        sidebarOpen.addEventListener("click", () => {
	            nav.classList.add("active");
	        });
	
	        siderbarClose.addEventListener("click", () => {
	            nav.classList.remove("active");
	        });
	
	        body.addEventListener("click", e => {
	            let clickedElm = e.target;

	            if (!clickedElm.classList.contains("sidebarOpen") && 
	                !clickedElm.classList.contains("menu") &&
	                !clickedElm.closest(".nav-links")) {
	                nav.classList.remove("active");
	            }
	        });
	
	        // Modifikasi kode untuk toggle dropdown submenu
	        const arrows = document.querySelectorAll(".arrow");
	        arrows.forEach(arrow => {
	            arrow.addEventListener("click", (e) => {
	                e.preventDefault();
	                e.stopPropagation();
	                let arrowParent = e.target.closest("li");
	                arrowParent.classList.toggle("showMenu");
	            });
	        });

	        // Modifikasi event listener untuk link di dalam dropdown
	        const dropdownLinks = document.querySelectorAll(".nav-links li a, .nav-links li span");
	        dropdownLinks.forEach(link => {
	            link.addEventListener("click", (e) => {
	                if (window.innerWidth <= 768) {
	                    e.stopPropagation();
	                    const parentLi = e.target.closest("li");
	                    if (parentLi.querySelector(".sub-menu")) {
	                        e.preventDefault();
	                        parentLi.classList.toggle("showMenu");
	                    }
	                }
	            });
	        });

	        // Tambahkan event listener khusus untuk elemen "more"
	        const moreElement = document.querySelector(".more");
	        if (moreElement) {
	            moreElement.addEventListener("click", (e) => {
	                if (window.innerWidth <= 768) {
	                    e.stopPropagation();
	                    e.preventDefault();
	                    moreElement.classList.toggle("showMenu");
	                }
	            });
	        }
