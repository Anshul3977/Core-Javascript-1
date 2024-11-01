let paymentMethod = "credit";
switch (paymentMethod) {
  case "credit":
    console.log("Processing fee is 2%");
    break;
  case "debit":
    console.log("Processing fee is 1.5%");
    break;
  case "paypal":
    console.log("Processing fee is 3%");
    break;
  default:
    console.log("Invalid payment method");
}
