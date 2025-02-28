// Sample XML data (replace with real XML data as required)
const xmlData = `
<donations>
<month name="January 2025">
  <donor>
    <name>Unknown</name>
    <amount>500</amount>
    <contact></contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-01-15</donation_date>
  </donor>
  <donor>
    <name>Ayush</name>
    <amount>50</amount>
    <contact>9122912632</contact>
    <payment_method>UPI</payment_method>
    <address>Chanpura</address>
    <donation_date>2025-01-10</donation_date>
  </donor>
  <donor>
    <name>Sachin</name>
    <amount>50</amount>
    <contact>7033192746</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-01-12</donation_date>
  </donor>
</month>
<month name="December 2024">
  <donor>
                <name>Vikram</name>
                <amount>50</amount>
                <contact>9065321485</contact>
                <payment_method>UPI</payment_method>
                <address>Not Provided</address>
                <donation_date>2024-12-10</donation_date>
            </donor>
            <donor>
                <name>Puchu</name>
                <amount>50</amount>
                <contact>9065934621</contact>
                <payment_method>UPI</payment_method>
                <address>Not Provided</address>
                <donation_date>2024-12-12</donation_date>
            </donor>
            <donor>
                <name>Sudhir</name>
                <amount>50</amount>
                <contact>9572325304</contact>
                <payment_method>UPI</payment_method>
                <address>Not Provided</address>
                <donation_date>2024-12-14</donation_date>
            </donor>
            <donor>
                <name>Abhishek</name>
                <amount>50</amount>
                <contact>9102187147</contact>
                <payment_method>UPI</payment_method>
                <address>Not Provided</address>
                <donation_date>2024-12-18</donation_date>
            </donor>
            <donor>
                <name>Bibhu</name>
                <amount>100</amount>
                <contact>7370007330</contact>
                <payment_method>UPI</payment_method>
                <address>Not Provided</address>
                <donation_date>2024-12-20</donation_date>
            </donor>
                <donor>
                    <name>Krishna</name>
                    <amount>50</amount>
                    <contact>9508405649</contact>
                    <payment_method>UPI</payment_method>
                    <address>Not Provided</address>
                <donation_date>2024-12-20</donation_date>
                </donor>
                <donor>
                    <name>Gopal</name>
                    <amount>50</amount>
                    <contact>9693756343</contact>
                    <payment_method>UPI</payment_method>
                    <address>Not Provided</address>
                <donation_date>2024-12-20</donation_date>
                </donor>
                <donor>
                    <name>Sarthak</name>
                    <amount>50</amount>
                    <contact>7061371120</contact>
                    <payment_method>UPI</payment_method>
                    <address>Not Provided</address>
                <donation_date>2024-12-20</donation_date>
                </donor>
                <donor>
                    <name>Ayush Kumar Chaudhary</name>
                    <amount>100</amount>
                    <contact>9122912632</contact>
                    <payment_method>UPI</payment_method>
                    <address>Chanpura</address>
                <donation_date>2025-01-31</donation_date>
                </donor>
                <donor>
                    <name>Sachin kumar Jha</name>
                    <amount>50</amount>
                    <contact>7033192746</contact>
                    <payment_method>UPI</payment_method>
                    <address>Shivnagar</address>
                <donation_date>204-12-02</donation_date>
                </donor>
</month>
</donations>
`;

// Function to display previous month donations from the XML data
function displayPreviousMonthDonations(xmlString) {
  const parser = new DOMParser();
  const xmlDoc = parser.parseFromString(xmlString, "text/xml");
  const months = xmlDoc.getElementsByTagName("month");

  let output = "";
  for (let i = 0; i < months.length; i++) {
    const monthName = months[i].getAttribute("name");
    output += `<tr><th colspan="6" style="text-align:center; background-color:#007BFF; color:white;">${monthName}</th></tr>`;

    const donors = months[i].getElementsByTagName("donor");
    for (let j = 0; j < donors.length; j++) {
      const donor = donors[j];
      const name = donor.getElementsByTagName("name")[0].textContent;
      const amount = donor.getElementsByTagName("amount")[0].textContent;
      const contactNode = donor.getElementsByTagName("contact")[0];
      const contact = contactNode && contactNode.textContent.trim() !== "" ? contactNode.textContent : "N/A";
      const paymentMethod = donor.getElementsByTagName("payment_method")[0].textContent;
      const address = donor.getElementsByTagName("address")[0].textContent;
      const donationDate = donor.getElementsByTagName("donation_date")[0].textContent;

      output += `
        <tr class="donor-row">
          <td class="donor-name">${name}</td>
          <td>${amount}</td>
          <td>${contact}</td>
          <td>${paymentMethod}</td>
          <td>${address}</td>
          <td>${donationDate}</td>
        </tr>
      `;
    }
  }

  document.getElementById("previousMonthDonations").innerHTML += output;
}

// Function to search donors in previous month donations
function searchDonor() {
  const input = document.getElementById("search").value.toLowerCase();
  const rows = document.querySelectorAll("#previousMonthDonations .donor-row");

  rows.forEach(row => {
    const name = row.querySelector(".donor-name").textContent.toLowerCase();
    row.style.display = name.includes(input) ? "" : "none";
  });
}

// Function to mask mobile numbers, showing only the first 4 digits in clear text
// and applying a blur effect to the rest.
function maskMobileNumbers() {
  // Select all table cells (both in the static and dynamically created tables)
  const cells = document.querySelectorAll("td");
  cells.forEach(cell => {
    const text = cell.textContent.trim();
    // Check if the cell contains a 10-digit mobile number.
    if (/^\d{10}$/.test(text)) {
      const visible = text.slice(0, 4);
      const remaining = text.slice(4);
      // Replace the cell's content with two spans: one for visible digits and one for masked.
      cell.innerHTML = `<span class="visible">${visible}</span><span class="masked">${remaining}</span>`;
    }
  });
}

// Load the previous month donations and then mask the mobile numbers once the DOM is ready.
document.addEventListener("DOMContentLoaded", function () {
  displayPreviousMonthDonations(xmlData);
  maskMobileNumbers();
});
