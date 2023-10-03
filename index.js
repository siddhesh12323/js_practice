document.getElementById("submit").onclick = function() {
    let signedupornot = document.getElementById("signed");
    let rupaychosen = document.getElementById("rupay");
    let upichosen = document.getElementById("upi");
    let cashchosen = document.getElementById("cash");
    if (signedupornot.checked) {
        document.getElementById("signedupornot").innerHTML = "You have signed up for the event";
    } else {
        document.getElementById("signedupornot").innerHTML = "You have not signed up for the event";
    }
    if (rupaychosen.checked) {
        document.getElementById("paymentoptionchosen").innerHTML = "You have chosen Rupay";
    } else if (upichosen.checked) {
        document.getElementById("paymentoptionchosen").innerHTML = "You have chosen UPI";
    } else if (cashchosen.checked) {
        document.getElementById("paymentoptionchosen").innerHTML = "You have chosen Cash";
    } else {    
        document.getElementById("paymentoptionchosen").innerHTML = "You have not chosen any payment option";
    }
}