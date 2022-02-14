function compute()
{
    p = document.getElementById("principal").value;
	
	if ((p <= 0) || (p == '')) {
		alert('principal should be greater than 0');
		return;
		
	}
    r = document.getElementById("rate").value;
    y = document.getElementById("years").value;
    res = document.getElementById("result").value;
    total = p * (0.01 * r) * y;

    year  = new Date().getFullYear();
    d = parseInt(year) + parseInt(y);
    document.getElementById("result").innerHTML = 'If you deposit <font style="background-color:yellow" >' + p + ',</font><br>at an interest rate of <font style="background-color:yellow" >' + r + ' %.</font><br/>You will receive an amout of <font style="background-color:yellow" >' + total + ',</font> <br/>in the year <font style="background-color:yellow" >' + d + '</font>';
    
}
        