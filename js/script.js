var loginBtn = document.getElementById('login-btn');
loginBtn.addEventListener('click',function(){
    var loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    var transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display = "block";
})

var depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click',function(){
    var depositAmount = document.getElementById('deposit-amount').value;
    var depositNumber = parseFloat(depositAmount);
    var currentAmount = document.getElementById('current-deposit').innerText;
    var currentNumber = parseFloat(currentAmount);
    var total  = depositNumber + currentNumber;
    document.getElementById('current-deposit').innerText = total;


    var currentBalance  = document.getElementById('current-balance').innerText;
    var mainBalance = parseFloat(currentBalance);
    var grandTotal = mainBalance + depositNumber ;
    document.getElementById('current-balance').innerText  = grandTotal;

})
var withdrawBtn = document.getElementById('addWithdraw');
withdrawBtn.addEventListener('click',function(){
    var amount = document.getElementById('withdrawAmount').value;
    var amountNumber = parseFloat(amount);
    var withdrawBar = document.getElementById('withdraw').innerText;
    var newAmount = parseFloat(withdrawBar);
    var finalAmount =newAmount + amountNumber;
    document.getElementById('withdraw').innerText = finalAmount;
    //let's try to subtract from main Balance
    var currentBalance  = document.getElementById('current-balance').innerText;
    var mainBalance = parseFloat(currentBalance);
    var remainingBalance = mainBalance - finalAmount ;
    document.getElementById('current-balance').innerText  = remainingBalance; 

})
