let payments = JSON.parse(localStorage.getItem("payments")) || [];

displayPayments();

function addPayment(){

let name=document.getElementById("name").value;

let id=document.getElementById("id").value;

let salary=parseFloat(document.getElementById("salary").value);

let bonus=parseFloat(document.getElementById("bonus").value)||0;

let deduction=parseFloat(document.getElementById("deduction").value)||0;

let status=document.getElementById("status").value;

if(name=="" || id=="" || isNaN(salary)){

alert("Fill all fields");

return;

}

let total=salary+bonus-deduction;

payments.push({
name,
id,
salary,
bonus,
deduction,
total,
status
});

localStorage.setItem("payments",JSON.stringify(payments));

displayPayments();

document.getElementById("name").value="";
document.getElementById("id").value="";
document.getElementById("salary").value="";
document.getElementById("bonus").value="";
document.getElementById("deduction").value="";
}

function displayPayments(){

let table=document.getElementById("paymentTable");

table.innerHTML="";

payments.forEach((p,index)=>{

table.innerHTML+=`

<tr>

<td>${p.name}</td>

<td>${p.id}</td>

<td>${p.salary}</td>

<td>${p.bonus}</td>

<td>${p.deduction}</td>

<td>${p.total}</td>

<td>${p.status}</td>

<td>

<button onclick="deletePayment(${index})">Delete</button>

</td>

</tr>

`;

});

}

function deletePayment(index){

payments.splice(index,1);

localStorage.setItem("payments",JSON.stringify(payments));

displayPayments();

}
