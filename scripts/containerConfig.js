            const bioLink = document.querySelector('#bio');
            const portfolioLink = document.querySelector('#portfolio');
            const contactLink = document.querySelector('#contact');
            const bioContainer = document.querySelector('#bio-container');
            const portfolioContainer = document.querySelector('#portfolio-container');
            const contactContainer = document.querySelector('#contact-container');
            const mainContainer = document.querySelector('.main-body-container');
            const icons = document.querySelectorAll('.fa');

            
            //configure main body container to load different widgets based upon user input
            window.addEventListener('load', function() {
                bioContainer.style.display = 'block';
                mainContainer.appendChild(bioContainer);
            });

            bioLink.addEventListener('click', function() {
                portfolioContainer.style.display = 'none';
                contactContainer.style.display = 'none';
                bioContainer.style.display = 'block';
                mainContainer.appendChild(bioContainer);
            });

            portfolioLink.addEventListener('click', function() {
                bioContainer.style.display = 'none';
                contactContainer.style.display = 'none';
                portfolioContainer.style.display = 'block';
                mainContainer.appendChild(portfolioContainer);
            });

            contactLink.addEventListener('click', function() {
                bioContainer.style.display = 'none';
                portfolioContainer.style.display = 'none';
                contactContainer.style.display = 'block';
                mainContainer.appendChild(contactContainer);
            });