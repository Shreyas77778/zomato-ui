// Sample restaurant data
const restaurants = [
    {
        name: "Burger King",
        cuisine: "Burgers, American",
        rating: 4.2,
        deliveryTime: "30-40 mins",
        price: "₹200 for one",
        image: "https://b.zmtcdn.com/data/pictures/chains/3/307893/58f1f3b6e4e05bdf6c5c7b1f5a7a0b6f.jpg"
    },
    {
        name: "Domino's Pizza",
        cuisine: "Pizza, Italian",
        rating: 4.0,
        deliveryTime: "25-35 mins",
        price: "₹150 for one",
        image: "https://b.zmtcdn.com/data/pictures/chains/1/18653671/94a5c4b5d97b6778e731a9a3a8b04ad0.jpg"
    },
    {
        name: "KFC",
        cuisine: "Fried Chicken, Fast Food",
        rating: 4.1,
        deliveryTime: "20-30 mins",
        price: "₹250 for one",
        image: "https://b.zmtcdn.com/data/pictures/chains/5/18653675/3e5b43a1a5fcd0e15b6a5f8a353e1a3e.jpg"
    },
    {
        name: "McDonald's",
        cuisine: "Burgers, Fast Food",
        rating: 4.3,
        deliveryTime: "15-25 mins",
        price: "₹180 for one",
        image: "https://b.zmtcdn.com/data/pictures/chains/2/18653672/9d539a0a37a5d7b2e0c2b3b3b3b3b3b3.jpg"
    },
    {
        name: "Pizza Hut",
        cuisine: "Pizza, Italian",
        rating: 3.9,
        deliveryTime: "30-40 mins",
        price: "₹200 for one",
        image: "https://b.zmtcdn.com/data/pictures/chains/4/18653674/5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a.jpg"
    },
    {
        name: "Subway",
        cuisine: "Sandwiches, Healthy",
        rating: 4.0,
        deliveryTime: "20-30 mins",
        price: "₹150 for one",
        image: "https://b.zmtcdn.com/data/pictures/chains/6/18653676/5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a5a.jpg"
    }
];

// Function to render restaurants
function renderRestaurants() {
    const container = document.getElementById('restaurantContainer');
    container.innerHTML = '';
    
    restaurants.forEach(restaurant => {
        const card = document.createElement('div');
        card.className = 'restaurant-card';
        
        card.innerHTML = `
            <img src="${restaurant.image}" alt="${restaurant.name}" class="restaurant-image">
            <div class="restaurant-info">
                <h3 class="restaurant-name">${restaurant.name}</h3>
                <p class="restaurant-cuisine">${restaurant.cuisine}</p>
                <div class="restaurant-details">
                    <div class="rating">
                        <i class="fas fa-star"></i>
                        ${restaurant.rating}
                    </div>
                    <div class="delivery-time">${restaurant.deliveryTime}</div>
                    <div class="price">${restaurant.price}</div>
                </div>
            </div>
        `;
        
        container.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderRestaurants();
    
    // Add click event to collection cards
    const collectionCards = document.querySelectorAll('.collection-card');
    collectionCards.forEach(card => {
        card.addEventListener('click', () => {
            alert('Collection clicked! This would navigate to a collection page in a real app.');
        });
    });
    
    // Add click event to restaurant cards
    document.addEventListener('click', (e) => {
        if (e.target.closest('.restaurant-card')) {
            alert('Restaurant clicked! This would navigate to a restaurant details page in a real app.');
        }
    });
    
    // Form submission for app download
    const downloadForm = document.querySelector('.input-group');
    if (downloadForm) {
        downloadForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = downloadForm.querySelector('input');
            alert(`App link will be sent to ${input.value}`);
            input.value = '';
        });
    }
});