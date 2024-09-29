// const submit=document.querySelector("#finish");


// submit.addEventListener("click",() =>{
//     alert("order completed! press okay to home page.");
//     window.location.href = 'i.html';
// })
// 3. Using a form's onsubmit event


document.getElementById('finish').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      document.getElementById('myForm').submit();
    }
  });
  
  document.getElementById('myForm').onsubmit = function() {
    alert('Order completed! Click on OK to go home page');
    window.location.href = 'index.html';
    return false;
  }