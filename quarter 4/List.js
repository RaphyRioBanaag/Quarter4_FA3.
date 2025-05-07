let contacts = [];

        function addContact() {
            const nameInput = document.getElementById('nameInput');
            const name = nameInput.value.trim();
            
            if (name) {
                if (contacts.length >= 7) {
                    contacts.shift(); 
                }
                contacts.push(name);
                nameInput.value = '';
                displayContacts();
            }
        }

        function removeContact() {
            if (contacts.length > 0) {
                contacts.pop();
                displayContacts();
            }
        }

        function displayContacts() {
            const listDiv = document.getElementById('contactsList');
            listDiv.innerHTML = `<ul>${contacts.map(contact => `<li>${contact}</li>`).join('')}</ul>`;
        }
        function clearContacts() {
            contacts = [];
            displayContacts();
        }
    displayContacts();