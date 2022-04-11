function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var result = principal * years * rate /100;
    var final_year = new Date().getFullYear()+parseInt(years);

    document.getElementById("result").innerHTML="If you deposit "
    +principal+",\<br\>at an interest rate of "
    +rate+"%\<br\>You will receive an amount of "
    +result+",\<br\>in the year "+final_year+"\<br\>"
}
    function updateRate(){
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;   
    }

    function checkAmount(){
        var principal = document.getElementById("principal").value;
        if(principal<=0){
            alert("Enter a positive number greater than 0");
            document.getElementById("principal").focus();
        }
    }



