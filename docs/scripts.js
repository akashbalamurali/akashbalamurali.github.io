document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    const tocItems = document.querySelectorAll('#toc li');
    
    // Debug: Check if elements are found
    console.log('Search Input:', searchInput);
    console.log('TOC Items:', tocItems);
    
    if (!searchInput || !tocItems.length) {
        console.error('Required elements not found');
        return;
    }

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
});