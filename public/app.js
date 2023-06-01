import { Payment } from "./classes/payment.js";
import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listTemplate.js";
const form = document.querySelector(".new-item-form");
const type = document.querySelector("#type");
const fromTo = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values = [
        fromTo.value,
        details.value,
        +amount.value,
    ];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payment(...values);
    }
    list.render(doc, type.value, "end");
});
