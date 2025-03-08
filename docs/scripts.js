document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    
    // Load navigation first
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        console.log('Loading navigation into:', navPlaceholder);
        fetch('docs/nav.html')
            .then(response => response.text())
            .then(html => {
                navPlaceholder.innerHTML = html;
                console.log('Navigation loaded successfully');
                
                // NOW set up the search functionality after nav is loaded
                setupSearch();
            })
            .catch(error => console.error('Error loading navigation:', error));
    } else {
        console.log('No navigation placeholder found');
        // Try to set up search anyway in case navigation is hardcoded
        setupSearch();
    }
    
    // Setup search functionality
    function setupSearch() {
        const tocItems = document.querySelectorAll('#toc li');
        console.log('TOC Items after nav load:', tocItems);
        
        if (searchInput && tocItems.length) {
            searchInput.addEventListener('input', function(e) {
                const searchTerm = e.target.value.toLowerCase().trim();
                console.log('Search term:', searchTerm);
                
                tocItems.forEach(item => {
                    const link = item.querySelector('a');
                    const text = link.textContent.toLowerCase();
                    
                    // Show/hide based on search term
                    if (searchTerm === '' || text.includes(searchTerm)) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        } else {
            console.error('Required elements not found for search functionality');
        }
    }
    
    // Load app promo content
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        console.log('Loading app promo into sidebar');
        fetch('docs/app-promo.html')
            .then(response => response.text())
            .then(html => {
                const promoDiv = document.createElement('div');
                promoDiv.className = 'sidebar-promo';
                promoDiv.innerHTML = html;
                sidebar.appendChild(promoDiv);
                console.log('App promo loaded successfully');
            })
            .catch(error => console.error('Error loading app promo:', error));
    } else {
        console.log('No sidebar found for app promo');
    }
    
    // Add hamburger menu functionality
    const sidebarToggle = document.getElementById('sidebarToggle');
    if (sidebarToggle && sidebar) {
        sidebarToggle.addEventListener('click', function() {
            console.log('Hamburger clicked');
            sidebar.classList.toggle('collapsed');
            console.log('Sidebar collapsed?', sidebar.classList.contains('collapsed'));
        });
    }
});