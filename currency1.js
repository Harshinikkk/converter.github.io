const dtrbtn=document.getElementById("dtrbtn");
dtrbtn.addEventListener("click",function(){
    let dtrvalue=document.getElementById("dtrinput").value;
    let rupees=parseFloat(dtrvalue)*82;
    document.getElementById("rupees").textContent= `the value of ${dtrvalue}$ in rupees ${rupees} `  ;
} );
const rtdbtn=document.getElementById("rtdbtn");
rtdbtn.addEventListener("click",function(){
    let rtdvalue=parseInt(document.getElementById("rtdinput").value);
    let dollar=rtdvalue/82;
    alert(`the value of Rs.${rtdvalue} in dollars is ${dollar.toFixed(2)}$`);
});
