document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const tocItems = document.querySelectorAll('#toc li');
    
    // Debug: Check if elements are found
    console.log('Search Input:', searchInput);
    console.log('TOC Items:', tocItems);
    
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
    
    // Load navigation
    const navPlaceholder = document.getElementById('nav-placeholder');
    if (navPlaceholder) {
        console.log('Loading navigation into:', navPlaceholder);
        fetch('docs/nav.html')
            .then(response => response.text())
            .then(html => {
                navPlaceholder.innerHTML = html;
                console.log('Navigation loaded successfully');
            })
            .catch(error => console.error('Error loading navigation:', error));
    } else {
        console.log('No navigation placeholder found');
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
});