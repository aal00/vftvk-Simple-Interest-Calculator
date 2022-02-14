function compute()
{
    p = document.getElementById("principal").value;
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    res = document.getElementById("result").value;
    total = p * (0.01 * r) * y;

    year  = new Date().getFullYear();
    d = parseInt(year) + parseInt(y);
    document.getElementById("result").innerHTML = 'If you deposit ' + p + '<br>at an interest rate of ' + r + ' <br/>You will receive an amout of ' + total + ' <br/>in the year ' + d;
    
}
        