import { HasFormatter } from "./interfaces/HasFormatter.js";
import { Payment } from "./classes/payment.js";
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;
const type = document.querySelector("#type") as HTMLSelectElement;
const fromTo = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(fromTo.value, details.value, +amount.value);
  } else {
    doc = new Payment(fromTo.value, details.value, +amount.value);
  }
  list.render(doc, type.value, "end");
});

//generic
