//We want our page to make an asychronous request for additional data about the currency exchange
document.addEventListener('DOMContentLoaded', function(){
                
    document.querySelector('form').onsubmit = function(){
    //Fetch function: it will make a web request, it's going to query some website and it's gonna get back some http response from that page
    fetch('https://v6.exchangerate-api.com/v6/5a6bf29449db27e92396053d/latest/USD')
    
    .then(response =>  response.json())
    
    .then(data => {
        
        const currency = document.querySelector('#currency').value.toUpperCase(); //We use .toUpperCase() because Json format provides currencies in Capital letters
        const rate = data.conversion_rates[currency]; //we use brackets because currency is a variable 
        
        if(rate!==undefined){  
            document.querySelector('#result').innerHTML = `1 USD is equal to ${rate.toFixed(3)} ${currency}.`;
        }else{ //json doesn't provide that currency or currency doesn't exist
            document.querySelector('#result').innerHTML = `Invalid currency.`;
        }
                   
    })
                
    .catch(error => {   //if json doesn't exist anymore
        console.log('Error: ', error);  //error on the console
    });


    return false;
                
}
            
});
