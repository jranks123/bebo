document.addEventListener('DOMContentLoaded', function() {
    const friends = ['Jane Doe', 'Mike Ross', 'Rachel Zane'];

    function addFriend(name) {
        const ul = document.querySelector('.friend-list ul');
        const li = document.createElement('li');
        li.textContent = name;
        ul.appendChild(li);
    }

    // Example of adding a new friend
    addFriend('New Friend');
});
