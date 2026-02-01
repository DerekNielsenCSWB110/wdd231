const params = new URLSearchParams(window.location.search);
const results = document.getElementById("results");

const fields = [
  ["First Name", "fname"],
  ["Last Name", "lname"],
  ["Email", "email"],
  ["Mobile", "phone"],
  ["Business", "business"],
  ["Date Submitted", "timestamp"]
];

fields.forEach(([label, key]) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${label}:</strong> ${params.get(key) ?? ""}`;
  results.appendChild(li);
});
