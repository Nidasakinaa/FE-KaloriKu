import { postData } from "https://bukulapak.github.io/api/process.js";
import { onClick, getValue } from "https://bukulapak.github.io/element/process.js";
import { urlPOST, AmbilResponse } from "../config/url_post.js";

function validateInput(value, fieldName) {
    if (!value) {
        alert(`Please enter a valid ${fieldName}`);
        return false;
    }
    return true;
}

function pushData() {
    let pasienName = getValue("pasienName");
    let gender = getValue("gender");
    let usia = getValue("usia");
    let phonenumber = getValue("phonenumber");
    let alamat = getValue("alamat");
    let doctorName = getValue("name");
    let diagnosis = getValue("diagnosis");

    if (
        validateInput(pasienName, "Patient Name") &&
        validateInput(gender, "Gender") &&
        validateInput(usia, "Age") &&
        validateInput(phonenumber, "Phone Number") &&
        validateInput(alamat, "Address") &&
        validateInput(doctorName, "Doctor Name") &&
        validateInput(diagnosis, "Diagnosis")
    ) {
        let data = {
            pasienName: pasienName,
            gender: gender,
            usia: usia,
            phonenumber: phonenumber,
            alamat: alamat,
            doctor: {
                name: doctorName,
            },
            medicalRecord: {
                diagnosis: diagnosis,
            },
        };
        postData(urlPOST, data, AmbilResponse);
    }
}

onClick("submitButton", pushData);
