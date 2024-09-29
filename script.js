const choices = document.querySelectorAll(".image" );
const navLoc = document.querySelector('.nav-loc');
const home = document.querySelector('.nav-logo');


home.addEventListener("click", () => {
  console.log("Clicked!");
  window.location.href= 'index.html';
})



const countryList = [
    'Select Country',
  'India',
  'USA',
  'Canada',
  'Australia',
  'UK',
  'Germany',
  'France',
  'China',
  'Japan',
  'South Korea'
];
let countrySelect;




navLoc.addEventListener('click', () => {
  if (!countrySelect) {
    countrySelect = document.createElement('select');
    countrySelect.innerHTML = countryList.map(country => `<option value="${country}">${country}</option>`).join('');
    navLoc.appendChild(countrySelect);

    countrySelect.addEventListener('change', () => {
      const selectedCountry = countrySelect.value;
      const countryText = document.querySelector('.second');
      countryText.textContent = selectedCountry;
      countrySelect.remove();
      countrySelect = null;
    });
  }
});






choices.forEach((image) =>{
    image.addEventListener("click",()=>{
        const userSelect=image.getAttribute("id")
        console.log("Choice was clicked",userSelect);
        window.location.href = 'food form.html';
        
    });
})