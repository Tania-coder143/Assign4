document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://raw.githubusercontent.com/tania-coder143/json//main/data.json"; 

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not OK");
            }
            return response.json();
        })
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error("Fetch error:", error);
        });
});

function displayProducts(products) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; 

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("product");

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;

        productsContainer.appendChild(productCard);
    });
}
