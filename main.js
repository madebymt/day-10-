//name
//email
//address
//phone-number
//SSN
//
//

let picture = customers.results[1].picture.medium
let firstName = customers.results[1].name.first;
let lastName = customers.results[1].name.last;

let title = document.createElement("h1");
let section = document.getElementById("header")
let header = document.createTextNode("INTERNAL COMPANY DIRECTORY")

title.append(header)
section.append(title);



for (let i = 0 ; i < customers.results.length ; i++) {
    let customer = customers.results[i]
    let div = document.createElement("div")
    let img = document.createElement("img")
    img.src = customer.picture.large

    let label = document.createElement("label")
    let label2 = document.createElement("label2")
    label.innerHTML = customer.name.first
    label2.innerHTML = customer.name.last
    label.className = "first"
    label2.className = "last"



    let email = document.createElement("email")
    email.innerHTML = customer.email
    email.className = "email"

    let address = document.createElement("address")
    let city = document.createElement("city")
    let state = document.createElement("state")
    let postcode = document.createElement("postcode")
    address.innerHTML = customer.location.street
    city.innerHTML = customer.location.city
    state.innerHTML = customer.location.state
    postcode.innerHTML = customer.location.postcode


    let phone = document.createElement("phone")
    phone.innerHTML = customer.phone

    let ssn = document.createElement("ssn")
    ssn.innerHTML = customer.id.value
    ssn.className = "ssn"

    div.appendChild(img)
    div.appendChild(label)
    div.append(label2)
    div.append(email)
    div.append(address)
    div.append(city)
    div.append(state)
    div.append(postcode)
    div.append(phone)
    div.append(ssn)

    document.body.appendChild(div)

    //
    // console.log("loop")

    }

// console.log(customers)



// let picture =  customers.results[1].picture.medium
// let firstName = customers.results[1].name.first
// let lastName = customers.results[1].name.last
//
// for(var i = 0; i<customers.results.length; i++) {
//     let customer = customers.results[i]
//     let img = document.createElement("img")
//     img.src = customer.picture.medium
//     let label = document.createElement("label")
//     label.innerHTML = customer.name.first
//     document.body.appendChild(img)
//     document.body.appendChild(label)
//     console.log("loop")
// }
// Add Comment Collapse





// let div = document.querySelector("body")
// console.log(div);
// (function() {
//  let div = document.querySelector("body")
//     for (let i = 0 ; i < 4 ; i++) {
//       let info = customers[i];
//       if (info[i] === "first") {
//           let first = document.createElement("first")
//
//           body.append(first)
//
//
//       }
//
//     }
//
//
//
// })
