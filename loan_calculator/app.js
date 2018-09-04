//getting ui variables (listening for the submit button )

document.getElementById('loan-form').addEventListener('submit',function(e)
{
    //hide results 

    document.getElementById('results').style.display='none';


    //show loader (gif)
     document.getElementById('loading').style.display = 'block';


     setTimeout(calculateResults,2000);
    e.preventDefault();
});


function calculateResults(){
        const amount = document.getElementById('amount');
        const interest = document.getElementById('interest');
        const years = document.getElementById('years');
        const monthlyPayment = document.getElementById('monthly-payment');
        const totalpayment = document.getElementById('total-payment');
        const totalInterest = document.getElementById('total-interest');

        const principal = parseFloat(amount.value);
        const calculatedInterest = parseFloat(interest.value)/100/12;
        const calculatedPayments = parseFloat(years.value)*12;


        //calcualting monthly payment

        const x = Math.pow(1 + calculatedInterest, calculatedPayments);
        const monthly = (principal*x*calculatedInterest)/(x-1);

        if(isFinite(monthly)){
            monthlyPayment.value = monthly.toFixed(2);
            console.log(monthlyPayment.value);
            totalpayment.value = (monthly * calculatedPayments).toFixed(2);
            console.log(totalpayment.value);
            totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
            console.log(totalInterest.value);
            //showing results
    document.getElementById('results').style.display='block';
            //hiding loader
     document.getElementById('loading').style.display = 'none';



        }else{
            showError('You have entered wrong inputs ..please check');
            

        }



    
}

//show error function


function showError(error){

    document.getElementById('results').style.display='none';


    //hiding initially loader (gif)
     document.getElementById('loading').style.display = 'none';

    //creating a div 
    const errordiv = document.createElement('div');

    //getting elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    //add class
    errordiv.className = 'alert alert-danger';

    //create a textnode and append to div 

    errordiv.appendChild(document.createTextNode(error));

    //inserting before heading
    card.insertBefore(errordiv,heading);

    //clear error after 3 sec
    setTimeout(clearError,3000);


}


 function clearError(){
document.querySelector('.alert').remove();
 }



