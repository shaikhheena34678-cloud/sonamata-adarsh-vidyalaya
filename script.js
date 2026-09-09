/*=========================================================
    SONAMATA ADARSH VIDYALAYA
    MAIN JAVASCRIPT
=========================================================*/

document.addEventListener("DOMContentLoaded", function () {


    /*=====================================================
        MOBILE NAVIGATION
    =====================================================*/

    const menuToggle = document.getElementById("menuToggle");
    const navLinks = document.getElementById("navLinks");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("active");

            menuToggle.setAttribute(
                "aria-expanded",
                isOpen ? "true" : "false"
            );

            /* Change menu icon */
            menuToggle.textContent = isOpen ? "✕" : "☰";

        });


        /* Close menu after clicking a navigation link */

        const navigationLinks = navLinks.querySelectorAll("a");

        navigationLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            });

        });


        /* Close menu when clicking outside */

        document.addEventListener("click", function (event) {

            if (
                navLinks.classList.contains("active") &&
                !navLinks.contains(event.target) &&
                !menuToggle.contains(event.target)
            ) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        });


        /* Close menu when screen becomes desktop size */

        window.addEventListener("resize", function () {

            if (window.innerWidth > 900) {

                navLinks.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

                menuToggle.textContent = "☰";

            }

        });

    }



    /*=====================================================
        HERO SLIDER
    =====================================================*/

    const slides = document.querySelectorAll(".slide");
    const heroImages = document.querySelectorAll(".hero-bg");

    let currentSlide = 0;

    function showSlide(index) {

        if (!slides.length) {
            return;
        }

        /* Remove active class */

        slides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        heroImages.forEach(function (image) {
            image.classList.remove("active");
        });


        /* Add active class */

        if (slides[index]) {
            slides[index].classList.add("active");
        }

        if (heroImages[index]) {
            heroImages[index].classList.add("active");
        }

    }


    if (slides.length > 0) {

        /* Show first slide */

        showSlide(0);


        /* Automatic slider */

        if (slides.length > 1) {

            setInterval(function () {

                currentSlide++;

                if (currentSlide >= slides.length) {
                    currentSlide = 0;
                }

                showSlide(currentSlide);

            }, 4000);

        }

    }



    /*=====================================================
        SCROLL REVEAL ANIMATION
    =====================================================*/

    const reveals = document.querySelectorAll(".reveal");


    function revealSections() {

        const windowHeight = window.innerHeight;

        reveals.forEach(function (section) {

            const sectionTop =
                section.getBoundingClientRect().top;

            if (sectionTop < windowHeight - 100) {

                section.classList.add("active");

            }

        });

    }


    if (reveals.length > 0) {

        revealSections();

        window.addEventListener(
            "scroll",
            revealSections,
            { passive: true }
        );

    }



    /*=====================================================
        PRINCIPAL MODAL
    =====================================================*/

    const modal = document.getElementById("principalModal");


    window.openPrincipal = function (event) {

        if (event) {
            event.stopPropagation();
        }

        if (!modal) {
            return;
        }

        modal.style.display = "flex";

        document.body.classList.add("modal-open");

        document.body.style.overflow = "hidden";

    };


    window.closePrincipal = function () {

        if (!modal) {
            return;
        }

        modal.style.display = "none";

        document.body.classList.remove("modal-open");

        document.body.style.overflow = "";

    };


    if (modal) {

        /* Close when clicking outside modal content */

        modal.addEventListener("click", function (event) {

            if (event.target === modal) {
                window.closePrincipal();
            }

        });

    }


    /* Close modal with Escape key */

    document.addEventListener("keydown", function (event) {

        if (
            event.key === "Escape" &&
            modal &&
            modal.style.display === "flex"
        ) {

            window.closePrincipal();

        }

    });



    /*=====================================================
        ACTIVITIES CARDS
    =====================================================*/

    const activitiesCards =
        document.getElementById("activitiesCards");


    if (activitiesCards) {

        const activities = [

            {
                icon: "🎨",
                title: "Drawing",
                text: "Creative art and drawing competitions."
            },

            {
                icon: "🎵",
                title: "Music",
                text: "Singing and cultural performances."
            },

            {
                icon: "⚽",
                title: "Sports",
                text: "Indoor and outdoor sports activities."
            },

            {
                icon: "🌳",
                title: "Tree Plantation",
                text: "Environmental awareness programmes."
            },

            {
                icon: "🧪",
                title: "Science",
                text: "Science exhibitions and experiments."
            },

            {
                icon: "🎭",
                title: "Drama",
                text: "Drama and stage performances."
            }

        ];


        /* Prevent duplicate cards */

        if (!activitiesCards.children.length) {

            activities.forEach(function (activity) {

                const card =
                    document.createElement("div");

                card.className = "activity-item";

                card.innerHTML = `
                    <div class="activity-icon">
                        ${activity.icon}
                    </div>

                    <div class="activity-content">

                        <h3>${activity.title}</h3>

                        <p>${activity.text}</p>

                    </div>
                `;

                activitiesCards.appendChild(card);

            });

        }

    }



    /*=====================================================
        ACTIVITIES IMAGE SLIDER
    =====================================================*/

    const activitySlides =
        document.querySelectorAll(
            ".activities-image .activity-slide"
        );

    let activityIndex = 0;


    function showNextActivity() {

        if (activitySlides.length < 2) {
            return;
        }

        activitySlides[
            activityIndex
        ].classList.remove("active");


        activityIndex++;

        if (activityIndex >= activitySlides.length) {
            activityIndex = 0;
        }


        activitySlides[
            activityIndex
        ].classList.add("active");

    }


    if (activitySlides.length > 0) {

        /* Make sure first image is visible */

        activitySlides.forEach(function (slide) {
            slide.classList.remove("active");
        });

        activitySlides[0].classList.add("active");


        if (activitySlides.length > 1) {

            setInterval(
                showNextActivity,
                3500
            );

        }

    }



    /*=====================================================
        NAVBAR SCROLL EFFECT
    =====================================================*/

    const navbar =
        document.querySelector(".navbar");


    function updateNavbar() {

        if (!navbar) {
            return;
        }

        if (window.scrollY > 30) {

            navbar.classList.add("scrolled");

        } else {

            navbar.classList.remove("scrolled");

        }

    }


    if (navbar) {

        updateNavbar();

        window.addEventListener(
            "scroll",
            updateNavbar,
            { passive: true }
        );

    }



    /*=====================================================
        SMOOTH SCROLL
    =====================================================*/

    const internalLinks =
        document.querySelectorAll(
            'a[href^="#"]'
        );


    internalLinks.forEach(function (anchor) {

        anchor.addEventListener(
            "click",
            function (event) {

                const targetId =
                    this.getAttribute("href");


                /* Ignore empty # */

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }


                const target =
                    document.querySelector(targetId);


                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }
        );

    });



    /*=====================================================
        RESPONSIVE VIEWPORT HANDLING
    =====================================================*/

    function handleResponsiveLayout() {

        /*
         * This function intentionally does not use
         * fixed widths/heights.
         *
         * CSS handles the actual responsive layout.
         * JavaScript only handles interactive behavior.
         */

        if (
            window.innerWidth <= 900 &&
            navLinks &&
            navLinks.classList.contains("active")
        ) {

            /*
             * Keep mobile menu inside the viewport.
             * Actual sizing is controlled by CSS.
             */

            navLinks.style.maxHeight =
                "calc(100svh - var(--nav-height))";

        }

    }


    window.addEventListener(
        "resize",
        handleResponsiveLayout
    );


    handleResponsiveLayout();


});

/*=========================================
      Query form connected
=========================================*/
const queryForm = document.getElementById("queryForm");
const querySuccess = document.getElementById("querySuccess");

if (queryForm) {
  queryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm(
      "service_61q3zpj",
      "template_ijjpljc",
      queryForm
    )
    .then(function () {
      querySuccess.style.display = "block";
      queryForm.reset();
    })
    .catch(function (error) {
  console.error("EmailJS Status:", error.status);
  console.error("EmailJS Message:", error.text);
  alert("EmailJS Error: " + error.text);
});
  });
}