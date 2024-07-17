const API_USERS = "https://jsonplaceholder.typicode.com";
const heroContext = document.querySelector(".hero__context");
const modal = document.getElementById("myModal");
const modalBody = document.getElementById("modal-body");
const closeModal = document.querySelector(".close");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");
const loading = document.querySelector(".loading");

let usersData = [];
const itemsPerPage = 3;
let currentPage = 1;

window.onload = function() {
    fetchUsers(API_USERS);
};

closeModal.onclick = function() {
  modal.style.display = "none";
};

window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

async function fetchUsers(api) {
    try {
        loading.style.display = "flex";
        let response = await fetch(`${api}/users`);
        usersData = await response.json();
        console.log(usersData);
        createCard();
    } catch (err) {
        console.log(err);
    } finally {
        loading.style.display = "none";
    }
}

function createCard() {
    heroContext.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = usersData.slice(startIndex, endIndex);

    paginatedData.forEach((user) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
        <img src="./img/photo1.jpg" alt="Profile Picture">
        <h3>${user.name}</h3>
        <p>${user.company.catchPhrase}</p>
        <button onclick="showModal(${user.id})">View More</button>`;
        
        heroContext.appendChild(card);
    });

    setupCarousel();
}

function showModal(id) {
    fetch(`${API_USERS}/users/${id}`)
        .then(response => response.json())
        .then(data => {
            modalBody.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Username:</strong> ${data.username}</p>
                <p><strong>Email:</strong> ${data.email}</p>
                <p><strong>Address:</strong> ${data.address.street}, ${data.address.suite}, ${data.address.city}, ${data.address.zipcode}</p>
                <p><strong>Phone:</strong> ${data.phone}</p>
                <p><strong>Website:</strong> ${data.website}</p>
                <p><strong>Company:</strong> ${data.company.name}</p>
                <p><strong>Catch Phrase:</strong> ${data.company.catchPhrase}</p>
            `;
            modal.style.display = "flex";
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
        });
}

function setupCarousel() {
    let maxPages = Math.ceil(usersData.length / itemsPerPage);

    prevButton.onclick = () => {
        if (currentPage > 1) {
            currentPage--;
            createCard();
        }
    };

    nextButton.onclick = () => {
        if (currentPage < maxPages) {
            currentPage++;
            createCard();
        }
    };
}