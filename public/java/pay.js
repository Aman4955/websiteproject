function showPayment(method) {
    const content = document.getElementById("payment-content");

    if (method === "card") {
        content.innerHTML = `
     <h3 class="pay-title">Card Payment</h3>

    <input type="text" placeholder="Card Number" class="input-box"  >
    <input type="text" placeholder="Cardholder Name" class="input-box">

    <div class="row">
        <input type="text" placeholder="MM/YY" class="input-box ">
        <input type="text" placeholder="CVV" class="input-box ">
    </div>

    <button class="pay-btn" onclick="document.querySelectorAll('.input-box').forEach(i=>i.value='')">
Pay Now 
</button>
`;
    }

    if (method === "cash") {
        content.innerHTML = `
            <h3>Cash on Delivery</h3>
            <p>You will pay when product arrives.</p>
            <button class="pay-btn">Confirm Order</button>
        `;
    }

    if (method === "upi") {
        content.innerHTML = `
            <h3>UPI Payment</h3>
            <input type="text" placeholder="Enter UPI ID" class="input-box "><br><br>
            <button class="pay-btn" onclick="document.querySelectorAll('.input-box').forEach(i=>i.value='')">
Pay Now 
</button>
        `;
    }


}
