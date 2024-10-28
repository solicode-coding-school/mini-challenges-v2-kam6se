const incomeList = document.querySelector('.income ul');
const expensesList = document.querySelector('.expenses ul');
const earnedSpan = document.querySelector('.Earned span');
const availableSpan = document.querySelector('.Available span');
const spentSpan = document.querySelector('.Spent span');

let earned = 0;
let spent = 0;
let available = 0;

const addIncomeButton = document.querySelector('.add-income');
const addExpenseButton = document.querySelector('.add-expense');
const numberInput = document.getElementById('amount');
const descriptionInput = document.getElementById('description');

addExpenseButton.addEventListener('click', function() {
    const amount = parseFloat(numberInput.value);
    const description = descriptionInput.value;
    
    if (isNaN(amount) || amount <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
    } else {
        const li = document.createElement('li'); 
        li.innerHTML = `${description} - $${amount} <button class="remove-expense">Supprimer</button>`;
        expensesList.appendChild(li);
        spent += amount;
        available -= amount;
        spentSpan.textContent = `$${spent}`;
        availableSpan.textContent = `$${available}`;
        numberInput.value = '';
        descriptionInput.value = '';

        const removeButton = li.querySelector('.remove-expense');
        removeButton.addEventListener('click', function() {
            expensesList.removeChild(li);
            spent -= amount;
            available += amount;
            spentSpan.textContent = `$${spent}`;
            availableSpan.textContent = `$${available}`;
        });
    }
});


addIncomeButton.addEventListener('click', function() {
    const amount = parseFloat(numberInput.value);
    const description = descriptionInput.value;
    
    if (isNaN(amount) || amount <= 0) {
        alert("Veuillez entrer un montant valide.");
        return;
    } else {
        const li = document.createElement('li'); 
        li.innerHTML = `${description} - $${amount} <button class="remove-income">Supprimer</button>`;
        incomeList.appendChild(li);
        earned += amount;
        available += amount; 
        earnedSpan.textContent = `$${earned}`;
        availableSpan.textContent = `$${available}`;
        numberInput.value = '';
        descriptionInput.value = '';

        const removeButton = li.querySelector('.remove-income');
        removeButton.addEventListener('click', function() {
            incomeList.removeChild(li);
            earned -= amount;
            available -= amount; 
            earnedSpan.textContent = `$${earned}`;
            availableSpan.textContent = `$${available}`;
        });
    }
});