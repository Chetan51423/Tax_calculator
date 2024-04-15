
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
    if (document.getElementById("submit_button")) {
        const submit_button = document.getElementById("submit_button");
        submit_button.addEventListener("click", function() {
            const ans = Final_Income();
            window.location.href = "./index2.html?ans=" + ans;
        });
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













