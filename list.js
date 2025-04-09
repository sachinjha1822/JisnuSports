// Sample XML data (replace with real XML data as required)
const xmlData = `
<donations>
<month name="March 2025">
    <donor><name>Rahul</name><amount>500</amount><contact>8679675423</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-03-17</donation_date></donor>
    <donor><name>Vikki</name><amount>50</amount><contact>8755234512</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-18</donation_date></donor>
    <donor><name>Balmukund</name><amount>50</amount><contact>9076542381</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-20</donation_date></donor>
    <donor><name>Ajay</name><amount>50</amount><contact>9835462752</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-20</donation_date></donor>
    <donor><name>Vishal</name><amount>50</amount><contact>9956342312</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-21</donation_date></donor>
    <donor><name>Saurabh</name><amount>50</amount><contact>9545221178</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-21</donation_date></donor>
    <donor><name>Vikki</name><amount>50</amount><contact>8832109201</contact><payment_method>UPI</payment_method><address>Bengra</address><donation_date>2025-03-23</donation_date></donor>
    <donor><name>Shivam</name><amount>50</amount><contact>8744213023</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-23</donation_date></donor>
    <donor><name>Unknown</name><amount>200</amount><contact>7844210129</contact><payment_method>UPI</payment_method><address></address><donation_date>2025-03-21</donation_date></donor>
    <donor><name>Sagar</name><amount>50</amount><contact>7632118943</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-27</donation_date></donor>
    <donor><name>Sarthak</name><amount>50</amount><contact>9287562190</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-28</donation_date></donor>
    <donor><name>Gaurav</name><amount>50</amount><contact>9634012039</contact><payment_method>UPI</payment_method><address>Giridih</address><donation_date>2025-03-29</donation_date></donor>
    <donor><name>Sachin</name><amount>50</amount><contact>8834021245</contact><payment_method>UPI</payment_method><address>Shivnagar</address><donation_date>2025-03-30</donation_date></donor>
    <donor><name>Ayush</name><amount>50</amount><contact>7843923456</contact><payment_method>UPI</payment_method><address>Chanpura</address><donation_date>2025-03-30</donation_date></donor>
  </month>
<month name="February 2025">
  <donor>
    <name>Wikki</name>
    <amount>50</amount>
    <contact></contact>
    <payment_method>UPI</payment_method>
    <address>Giridihi</address>
    <donation_date>2025-02-26</donation_date>
  </donor>
  <donor>
    <name>Shushant</name>
    <amount>50</amount>
    <contact>7295905612</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-25</donation_date>
  </donor>
  <donor>
    <name>Ajay</name>
    <amount>50</amount>
    <contact>8102395350</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Saurav</name>
    <amount>50</amount>
    <contact>9608814088</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Monu</name>
    <amount>50</amount>
    <contact>7250814683</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Balmukund</name>
    <amount>50</amount>
    <contact>7635030162</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-22</donation_date>
  </donor>
  <donor>
    <name>Shubham</name>
    <amount>50</amount>
    <contact>9354716138</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Sachin</name>
    <amount>50</amount>
    <contact>7061423688</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Hira</name>
    <amount>50</amount>
    <contact>6299805680</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Ricky</name>
    <amount>50</amount>
    <contact>8271872623</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-21</donation_date>
  </donor>
  <donor>
    <name>Vishal</name>
    <amount>50</amount>
    <contact>9608887282</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Pawan</name>
    <amount>50</amount>
    <contact>9718304840</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Puchu</name>
    <amount>50</amount>
    <contact>9065934621</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Sagar</name>
    <amount>50</amount>
    <contact>7292838377</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Ajit</name>
    <amount>150</amount>
    <contact>9262220378</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-18</donation_date>
  </donor>
  <donor>
    <name>Abhishek</name>
    <amount>100</amount>
    <contact>9102187147</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-19</donation_date>
  </donor>
  <donor>
    <name>Chandan</name>
    <amount>150</amount>
    <contact>7352231491</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-28</donation_date>
  </donor>
  <donor>
    <name>Pratyush</name>
    <amount>50</amount>
    <contact>9354231491</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-28</donation_date>
  </donor>
  <donor>
    <name>Rahul</name>
    <amount>50</amount>
    <contact>7487231491</contact>
    <payment_method>UPI</payment_method>
    <address>Not Provided</address>
    <donation_date>2025-02-28</donation_date>
  </donor>
</month>
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
