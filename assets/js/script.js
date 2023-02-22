const button = document.querySelector("#button");

button.addEventListener("click", function (e) {
  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const subject = document.querySelector("#subject").value;
  const address = document.querySelector("#address").value;

  if (name == "") {
    return alert("Name not empty");
  } else if (email == "") {
    return alert("Email not empty");
  } else if (phone == "") {
    return alert("Phone not empty");
  } else if (subject == "") {
    return alert("Subject not empty");
  } else if (address == "") {
    return alert("Subject not empty");
  }

  const emailReceiver = "rizkifais23@gmail.com";

  let a = document.createElement("a");
  a.href = `mailto:${emailReceiver}?Subject=${subject}&body=Halo, nama saya ${name} alamat saya di ${address}, bisakah anda mengubungi saya di ${phone}`;
  a.click();

  let data = {
    name,
    email,
    phone,
    subject,
    address,
  };

  console.log(data);

  e.preventDefault();
});
