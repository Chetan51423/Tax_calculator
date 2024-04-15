
function Final_Income()
{
    const annual_income = parseFloat(document.getElementById("annual_income").value);
    const extra_income = parseFloat(document.getElementById("extra_income").value);
    const age_group = document.getElementById("age_group").value;
    const deduction = parseFloat(document.getElementById("deduction").value);
    const total_income = (annual_income + extra_income) - deduction;
    
    let tax = 0;
    
    if(total_income > 800000)
    {
        if(age_group==="under 30")
        {
            tax =  total_income*(0.3)
            console.log(tax);
        }
        else if(age_group==="between 30 and 60")
        {
            tax =  total_income*(0.4)
            console.log(tax);
        }
        else
        {
            tax =  total_income*(0.1)
            console.log(tax);
        }
    }
    else
    {
        tax = 0;
        console.log(tax);
    }

    return (total_income-tax);    
}

function set_FinalIncome() {
    const set_final_income = document.getElementById("final_income");
    if (set_final_income) {
        set_final_income.innerHTML = ans;
    } else {
        console.error("Element with ID 'final_income' not found.");
    }
}

document.addEventListener("DOMContentLoaded", function() {

    const currentPage = window.location.pathname;
    console.log(currentPage)

    const input = document.getElementById("annual_income");
    const circle = document.querySelector(".svg2 circle");
    const text = document.querySelector(".svg2 text");
    const tooltip_warning = document.getElementById("tooltip_warning");
    
    function isNumber()
    {
        const input = document.getElementById("annual_income");
        const inputValue = input.value.trim();
        const isNumber_ = /^\d+$/.test(inputValue);
        if(isNumber_)
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    if(currentPage=="/Index.html")
    {
        input.addEventListener("input", function(){
            if(input.value.length >0)
            {
                // console.log(input.value);
                // const inputValue = input.value.trim();
                // const isNumber = /^\d+$/.test(inputValue);
                // console.log(isNumber);
                if (isNumber(input.value)) {
                circle.setAttribute("stroke", "grey");
                text.setAttribute("fill", "black");

                } else {
                    tooltip_warning.style.visibility ="visible"
                    circle.setAttribute("stroke", "red");
                    text.setAttribute("fill", "red");
                    
                }
            }
            else
            {
                tooltip_warning.style.visibility ="hidden"
                circle.setAttribute("stroke", "grey");
                text.setAttribute("fill", "black"); 
            }
        })
    }
    

    const submitButton = document.getElementById("submit_button");

    if(submitButton)
    {
        submitButton.addEventListener('click', function(event)
        {
            event.preventDefault();

            const annualIncome = document.getElementById("annual_income").value.trim();          
            const extraIncome = document.getElementById("extra_income").value.trim();       
            const ageGroup = document.getElementById("age_group").value.trim();
            const deduction = document.getElementById("deduction").value.trim();


            if(!annualIncome || !extraIncome || ageGroup=="_" || !deduction)
            {
                alert("please fill all the fields");
                return;
            }
            else if(!isNumber())
            {
                alert("enter the numerical value in gross income")
                return;
            }
            else
            {
                const ans = Final_Income();
                window.location.href = "./index2.html?ans=" + ans;
            }
        })
    }

    if (document.getElementById("close_button")) {
        const urlParams = new URLSearchParams(window.location.search);
        const ans = urlParams.get('ans');
        if(document.getElementById("final_income"))
        {
            document.getElementById("final_income").innerHTML = ans
        }
        const close_button = document.getElementById("close_button");
        close_button.addEventListener("click", function() {
            window.location.href = "./Index.html";
        });
    }
});













