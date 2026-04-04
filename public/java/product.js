const buttons = document.querySelectorAll(".add-to-cart")

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {

    const productBox = e.target.closest(".about-product")

    const product = {
      name: productBox.querySelector(".name-of-product").innerText,
      price: productBox.querySelector(".price").innerText,
      image: productBox.querySelector("img").src
    }

    let cart = JSON.parse(localStorage.getItem("cartItems")) || []

    cart.push(product)

    localStorage.setItem("cartItems", JSON.stringify(cart))

    alert("Added successfully")

    window.location.href = "cart.html"
  })
})