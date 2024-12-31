import { putData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPUT, AmbilResponse } from "../config/url_put.js";

function validateInput(value, fieldName) {
    if (!value) {
        alert(`Please enter a valid ${fieldName}`);
        return false;
    }
    return true;
}

function pushData() {
    let name = getValue("name");
    let description = getValue("description");
    let price = getValue("price");
    let category = getValue("category");
    let image = getValue("image");
    let stock = getValue("stock");

    if (
        validateInput(name, "Name") &&
        validateInput(description, "Description") &&
        validateInput(price, "Price") &&
        validateInput(category, "Category") &&
        validateInput(image, "Image") &&
        validateInput(stock, "Stock") 
    ) {
        let data = {
            name: name,
            description: description,
            price: price,
            category: category,            
            image: image,
            stock: stock,
        };
        putData(urlPUT, data, AmbilResponse);
    }
}

onClick("submitButton", pushData);
