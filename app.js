const BASE_URL =
  "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies";

let from = document.querySelector('#drop_from');
let to = document.querySelector('#drop_to');
let img_from = document.querySelector('#from_img');
let img_to = document.querySelector('#to_img');
let input = document.querySelector('#enter');
let msg = document.querySelector('#msg')

for(let elements in countryList){
    let option1 = document.createElement("option");
    option1.setAttribute('value',elements); 
    option1.innerHTML = elements;
    from.append(option1);

    let option2 = document.createElement("option");
    option2.setAttribute('value',elements); 
    option2.innerHTML = elements;
    to.append(option2);
}

 function updateflagfrom(){
    let text = from.value;
    console.log(countryList[text]);
    img_from.setAttribute('src',`https://flagsapi.com/${countryList[text]}/flat/64.png`)
}
function updateflagto(){
    let text = to.value;
    console.log(countryList[text]);
    img_to.setAttribute('src',`https://flagsapi.com/${countryList[text]}/flat/64.png`)
}
async function convert(){
    let val = input.value;
    if(val=="" || val<0){
        val = 1;
        input.value = "1";
    }
    input.value = "";
    const URL = `${BASE_URL}/${from.value.toLowerCase()}/${to.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();
    let rate = data[toCurr.value.toLowerCase()];
  
    let finalAmount = val * rate;
    msg.innerText = `${val} ${from.value} = ${finalAmount} ${to.value}`;

}