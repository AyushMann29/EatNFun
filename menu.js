document.addEventListener('DOMContentLoaded', () => {
    fetchMenuData();
});

async function fetchMenuData() {
    try {
        const response = await fetch('menu.json');
        const data = await response.json();
        renderMenu(data.menuItems);
    } catch (error) {
        console.error('Error loading menu data:', error);
    }
}

function renderMenu(menuItems) {
    const menuGrid = document.getElementById('menuGrid');
    const categoryButtons = document.getElementById('categoryButtons');

    // Store unique categories
    const categories = [...new Set(menuItems.map(item => item.category))];

    // Create category buttons
    categories.forEach(category => {
        const button = document.createElement('button');
        button.className = 'category-button';
        button.textContent = category;
        button.onclick = () => toggleCategoryItems(category, menuItems);
        categoryButtons.appendChild(button);
    });

    // Render all menu items but hide them initially
    menuGrid.innerHTML = menuItems.map(item => {
        return `<div class="menu-item hidden" data-category="${item.category}">
    <div class="menu-item-content">
        <div class="menu-item-front">
            <img src="${item.image}" alt="${item.name}" class="menu-item-image">
            <h2 class="menu-item-title">${item.name}</h2>
            </div>
            <div class="menu-item-back">
            <h2>Additional Info</h2> <!-- You can add additional info here -->
            <p class="menu-item-description">${item.description}</p>
            <button class="menu-item-price">${item.price}</button>
            <p>This is some extra content on the back!</p>
        </div>
    </div>
</div>
`;
    }).join('');

    // Show items for the first category by default
    if (categories.length > 0) {
        toggleCategoryItems(categories[0], menuItems);
    }
}

function toggleCategoryItems(selectedCategory, menuItems) {
    const menuGrid = document.getElementById('menuGrid');
    const items = menuGrid.querySelectorAll('.menu-item');

    items.forEach(item => {
        // Check if the item's category matches the selected category
        if (item.dataset.category === selectedCategory) {
            item.classList.remove('hidden'); // Show the item
        } else {
            item.classList.add('hidden'); // Hide the item
        }
    });
}
