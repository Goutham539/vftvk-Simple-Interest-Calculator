function compute()
{
    // Collecting variables from user
        
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = principal * years * rate /100;
    var final_year = new Date().getFullYear()+parseInt(years);

    // Showing result in form of a paragraph 
    document.getElementById("result").innerHTML="If you deposit <mark>"+principal+",</mark>\<br\>at an interest rate of <mark>"+rate+"</mark>%\<br\>You will receive an amount of <mark>"+result+"</mark>,\<br\>in the year <mark>"+final_year+"</mark>\<br\>"
}
    
    // Function updateRate is used to show the rate selected by slider dynamically.
    function updateRate(){
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;   
    }

    //CheckAmount function checks if the principal amount entered by user is greater than 0 or not.
    function checkAmount(){
        var principal = document.getElementById("principal").value;
        if(principal<=0 || principal==null){
            alert("Enter a positive number greater than 0");
            document.getElementById("principal").focus();
        }
    }
