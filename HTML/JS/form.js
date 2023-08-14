

function creditCard(input)
{
    let value = input.value;
    
    let creditError = document.getElementById("credit-error");
    // Limit total number of digits to 32
    if (value !== "")
    {
        creditError.innerHTML = "*"
        creditError.style.color = "";
        if (value.length > 16)
        {
            value = value.substr(0, 16);
            
        }
    }
    else
    {
        creditError.innerHTML = " This field is required";
        creditError.style.color = "red";
    }
    
    
    input.value = value;
  
}
  
function expiry(input)
{
    let value = input.value;
    let expiryError = document.getElementById("expiry-error");
    
    if (value !== "")
    {
        expiryError.innerHTML = "*"
        expiryError.style.color = "";
        if (value.length > 4)
        {
        value = value.substr(0, 4);
        }
    }
    else
    {
        expiryError.innerHTML = " This field is required";
        expiryError.style.color = "red";
    }
    
    // Limit to 4 characters
    

    input.value = value;
    
}
  
function cvc(input)
{
    let value = input.value;
    
    let cvcError = document.getElementById("cvc-error");
    
    if (value !== "")
    {
        cvcError.innerHTML = "*"
        cvcError.style.color = "";
        if (value.length > 3)
        {
        value = value.substr(0,3);
        }
    }
    else
    {
        cvcError.innerHTML = " This field is required";
        cvcError.style.color = "red";
    }
    // Limit total number of digits to 32
    
    
    input.value = value;
  
}
  


// Function to validate the form on submit
function firstNameValidation(input) 
{

    let firstname = document.getElementById("firstName").value;
    let errFirstname = document.getElementById("fname-error")
    const nameRegex = /^[a-zA-Z\s]+$/;


    // required field validator
    if (!!firstname)
    {
        // First and last name should only accept characters
        if(!nameRegex.test(firstname))
        {
            errFirstname.innerHTML = " Can only accept characters";
            errFirstname.style.color="red";
            
        }
        else
        {
            errFirstname.innerHTML = " *";
            errFirstname.style.color="";
        }
        
    }
    else
    {
        errFirstname.innerHTML = " This field is required";
        errFirstname.style.color="red";
        
    }
    
    


}               


// Function to validate the form on submit
function lastNameValidation(input) 
{
    
    let lastname = document.getElementById("lastName").value;
    let errLastname = document.getElementById("lname-error")
    const nameRegex = /^[a-zA-Z\s]+$/;


    // required field validator
    if (!!lastname)
    {
        // First and last name should only accept characters
        if(!nameRegex.test(lastname))
        {
            errLastname.innerHTML = " Can only accept characters";
            errLastname.style.color="red";
            
        }
        else
        {
            errLastname.innerHTML = " *";
            errLastname.style.color="";
        }
        
    }
    else
    {
        errLastname.style.color="red";
        errLastname.innerHTML = " This field is required";
    }
    
    

}  


function shippingValidation(input)
{
    let shipAddress = document.getElementById("add").value;
    let shippingErr = document.getElementById("ship-error")
    const shipRegex = /^[0-9A-Za-z\s\-.,']+$/;


    // required field validator
    if (!!shipAddress)
    {
       
        if(!shipRegex.test(shipAddress))
        {
            shippingErr.innerHTML = " Can only accept characters";
            shippingErr.style.color="red";
            
        }

        {

            shippingErr.innerHTML = " *";
            shippingErr.style.color="";
        }
        
    }
    else
    {
        shippingErr.style.color="red";
        shippingErr.innerHTML = " This field is required";
    }   
}



function aptValidation(input)
{
    let aptAddress = document.getElementById("apartment").value;
    let aptErr = document.getElementById("apt-no")
    const aptRegex = /^[0-9A-Za-z\s\-.,']+$/;


    // required field validator
    if (!!aptAddress)
    {
       
        if(!aptRegex.test(aptAddress))
        {
            aptErr.innerHTML = " Can only accept characters";
            aptErr.style.color="red";
            
        }

        {

            aptErr.innerHTML = " *";
            aptErr.style.color="";
        }
        
    }
    else
    {
        aptErr.style.color="red";
        aptErr.innerHTML = " This field is required";
    }   
}


function cityValidation()
{
    let city = document.getElementById("city").value;
    let cityErr = document.getElementById("city-error");
    const cityRegex = /^[a-zA-Z]+$/;

    // Required field validator
    if (city.trim() !== "")
    { 
        if (!cityRegex.test(city))
        {
            cityErr.textContent = "Only letters are allowed";
            cityErr.style.color = "red";
        }
        else
        {
            cityErr.textContent = " *";
            cityErr.style.color = "";
        }    
            
       
    
    }
    else
    {
        cityErr.innerHTML = "This field is required";
        cityErr.style.color = "red";
    }
}



function stateValidation(input)
{
    let state = document.getElementById("state").value;
    let stateErr = document.getElementById("state-error");
    const stateRegex = /^[a-zA-Z]{2}$/; 

    // Required field validator
    if (state.trim() !== "")
    { 
        if (!stateRegex.test(state))
        {
            stateErr.textContent = "Not a valid City Code";
            stateErr.style.color = "red";
        }
        else
        {
            stateErr.textContent = " *";
            stateErr.style.color = "";
        } 
    }
    else
    {
        stateErr.innerHTML = "This field is required";
        stateErr.style.color = "red";
    }
}


function zipValidation(input)
{
    let zip = document.getElementById("zip").value;
    let zipErr = document.getElementById("zip-error");
    const zipRegex = /^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/;

    // Required field validator
    if (zip.trim() !== "")
    { 
        if (!zipRegex.test(zip))
        {
            zipErr.textContent = "Not a valid City Code";
            zipErr.style.color = "red";
        }
        else
        {
            zipErr.textContent = " *";
            zipErr.style.color = "";
        } 
    }
    else
    {
        zipErr.innerHTML = "This field is required";
        zipErr.style.color = "red";
    }
}







    const button = document.getElementById("my_btn");

    button.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default form submission
        
        // Call your custom function here
        customFunction();
        form.submit();
    });

    function customFunction() {
        const quickView = document.querySelector("#quickView");
        quickView.style.display = "block";

        setTimeout(function () {
            quickView.style.opacity = "1";
        }, 10);
       
        
    }


    document.addEventListener("click", function (event) {
        const quickView = document.querySelector("#quickView");
        if ( event.target === document.getElementById("close"))
        {
            quickView.style.opacity = "0";
            // After the animation, hide the quick view
            setTimeout(function () {
                quickView.style.display = "none";
            }, 300); // The same duration as the transition (0.3s)
        }
    });
    
  