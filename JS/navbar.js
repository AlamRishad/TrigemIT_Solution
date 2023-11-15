document.addEventListener("DOMContentLoaded", function () {
  const navbarHtml = `
    <div class="topbar">
    <div class="logo">
        TrigemIT Solutions
        <span class="tagline">Mobile VoIP and IP Communication Platforms</span>
      </div>
      <nav class="navbar">
        <a href="index.html" class="active">Home</a>
        <div class="dropdown">
          <a href="#" class="dropbtn">Products</a>
          <div class="dropdown-content">
            <div class="dropdown-column-division">
              <ul href="#">
                Carriers and Telecom Operators
                <div class="submenu">
                  <li id="trigemSbc">Trigem SBC</li>

                  <li href="#">Trigem OTT</li>
                  <li href="#">Trigem SMS Platform</li>
                  <li href="#">iTel Billing</li>
                  <li href="#">Cloud Telephony</li>
                  <li href="#">Trigem SDK</li>
                  <li href="#">Virtual Roaming Solution</li>
                </div>
              </ul>
            </div>

            <div class="dropdown-column-division">
              <ul href="#">
                IP Telephony Service Providers
                <div class="submenu">
                  <li href="#">iTel Mobile Dialer</li>
                  <li href="#">Trigem SDK</li>
                  <li href="#">Trigem SMS Platform</li>
                  <li href="#">iTel Switch - Class 5</li>
                </div>
              </ul>
            </div>

            <div class="dropdown-column-division">
              <ul href="#">
                Enterprise

                <div class="submenu">
                  <li href="#">Trigem Secured Communication</li>
                  <li href="#">Cloud Telephony</li>
                  <li href="#">Trigem SDK</li>
                </div>
              </ul>
            </div>
            <div class="dropdown-column-division">
              <ul href="#">
                Cloud Products

                <div class="submenu">
                  <li href="#">Cloud Telephony</li>
                  <li href="#">Hosted Dialer</li>

                  <li href="#">Hosted Softswitch</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
        <div class="dropdown2">
          <a href="#" class="dropbtn2">Company</a>
          <div class="dropdown-content2">
            <ul>
              <li href="#">About Us</li>
              <li href="#">Leadership Team</li>
              <li href="#">News</li>
              <li href="#">Beyond Business</li>
              <li href="#">Testimonials</li>
              <li href="#">Event List</li>
              <li href="#">Awards & Certifications</li>
              <li href="#">Gallery</li>
              <li href="#">Careers</li>
            </ul>
          </div>
        </div>

        <a href="careers.html">Careers</a>
        <a href="contact.html">Contact</a>
      </nav>
      <div class="extras">
        <input type="search" placeholder="Search..." />
        <select>
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          <option value="bangla">Bangla</option>
        </select>
        <button class="login">Login</button>
      </div>
    
    </div>
  `;

  const navbarContainer = document.getElementById("navbar-container");
  if (navbarContainer) {
    navbarContainer.innerHTML = navbarHtml;
  }
});
function updateActiveLink() {
  const currentPage = window.location.pathname.split("/").pop();

  document.querySelectorAll(".navbar a, .navbar .dropbtn").forEach((link) => {
    link.classList.remove("active");
  });

  if (currentPage === "index.html" || currentPage === "") {
    document
      .querySelector('.navbar a[href="index.html"]')
      .classList.add("active");
  } else if (currentPage === "contact.html") {
    document
      .querySelector('.navbar a[href="contact.html"]')
      .classList.add("active");
  } else if (currentPage === "careers.html") {
    document
      .querySelector('.navbar a[href="careers.html"]')
      .classList.add("active");
  } else if (currentPage === "trigemSbc.html") {
    document.querySelector(".navbar .dropbtn").classList.add("active");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  updateActiveLink();

  var trigemSbcElement = document.getElementById("trigemSbc");
  if (trigemSbcElement) {
    trigemSbcElement.addEventListener("click", function () {
      window.location.href = "trigemSbc.html";
    });
  }
});
