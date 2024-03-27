class Smoothie {
  constructor(base, size, liquid, quantity) {
    this.base = base;
    this.size = size;
    this.liquid = liquid;
    this.quantity = quantity;
  }

  calculatePrice() {
    let price = parseFloat(this.base.dataset.price);
    this.size.forEach(size => {
      if (size.checked) {
        price += parseFloat(size.dataset.price);
      }
    });
    price += parseFloat(this.liquid.dataset.price);

    // Multiply the total price by the quantity
    let totalPrice = price * this.quantity;

    return totalPrice.toFixed(2); // Return total price
  }

  getDescription() {
    let description = `Base: ${this.base.value}<br>`;
    description += "Size: ";
    this.size.forEach(size => {
      if (size.checked) {
        description += `${size.value} ($${size.dataset.price}), `;
      }
    });
    description += `<br>Liquid: ${this.liquid.value} ($${this.liquid.dataset.price})<br>`;
    description += `Quantity: ${this.quantity}`;
    return description;
  }
}

form = document.getElementById("smoothie-form");
resultDiv = document.getElementById("result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  base = document.querySelector('input[name="base"]:checked');
  size = document.querySelectorAll('input[name="size"]');
  liquid = document.querySelector('input[name="liquid"]:checked');
  quantity = parseInt(document.getElementById("quantity").value);

  Smoothie = new Smoothie(base, size, liquid, quantity);

  description = Smoothie.getDescription();
  price = Smoothie.calculatePrice();

  resultDiv.innerHTML = `<h2>Your FakeSmoothie Bill:</h2>${description}<br><br><strong>Total Price: $${price}</strong>`;
});
