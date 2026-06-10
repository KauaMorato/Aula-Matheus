async function fetchUsers() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
        throw new Error(`HTTPS erro! Status: ${response.status}`);
    }

    const users = await response.json();
    displayUsers(users);
    } catch (error) {
        console.error('Erro ao buscar usuários:', error);
    }
} 

function displayUsers(users) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpa a lista existente 

    users.forEach(user => {
        const listltem = document.createElement('li');
        listltem.textContent = user.name;
        listltem.onclick = () => showUserDetails(user);
        userList.appendChild(listltem);
    });
}

fetchUsers(); // Chama a função ao carregar a página

function showUserDetails(user) {
    const userDetails = document.getElementById('user-details');
    userDetails.innerHTML = `
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website:<a href="https://${user.website}" target="_blank">${user.website}</a></p>
        <p>Address: ${user.address.street}, ${user.address.city}</p>
    `;
}