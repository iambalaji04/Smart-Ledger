let balance = 0;

// Update balance display and progress bar width
function updateBalanceDisplay() {
  document.getElementById("balance").innerText = balance.toFixed(2);

  // Update the progress bar based on balance, with max value of 10000 (for example)
  const maxBalance = 10000;
  const balancePercentage = Math.min((balance / maxBalance) * 100, 100);
  document.getElementById("progress-bar").style.width = `${balancePercentage}%`;
}

// Add a transaction (income or expense)
function addExpense(type) {
  const description = document.getElementById("description").value;
  const amount = parseFloat(document.getElementById("amount").value);

  if (!description || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and amount.");
    return;
  }

  const transactionList = document.getElementById("transaction-list");
  const newTransaction = document.createElement("li");
  newTransaction.classList.add(type);

  // Add rupee symbol with custom style
  newTransaction.innerHTML = `<span class="rupee-symbol">&#8377;</span>${description}: ₹${amount.toFixed(2)}`;

  // Adjust balance based on type
  if (type === "income") {
    balance += amount;
  } else {
    balance -= amount;
  }

  transactionList.appendChild(newTransaction);
  updateBalanceDisplay();

  // Clear the input fields
  document.getElementById("description").value = "";
  document.getElementById("amount").value = "";
}
