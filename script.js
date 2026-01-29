   // Smooth scroll for navigation links
        document.querySelectorAll('nav a').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                document.querySelector(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Dynamic year update in footer
        const footer = document.querySelector('footer p');
        const year = new Date().getFullYear();
        footer.innerHTML = `© ${year} Muneeb Ashraf — Personal Portfolio`;