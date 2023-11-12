document.addEventListener("DOMContentLoaded", function () {
  const footerHtml = `
    <footer class="footer">
    <div class="footer-grid">
      <div class="footer-section">
        <h3>Company Profile</h3>
        <ul>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Leadership Team</a></li>
          <li><a href="#">Awards</a></li>
          <li><a href="#">Gallery</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Beyond Business</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Partners</a></li>
        </ul>
      </div>
    
      <div class="footer-section-2">
        <h3>Products</h3>
        <div class="footer-grid-2">
          <div class="footer-section">
            <ul>
              <li><a href="#">Carriers and Telecom Operators</a></li>
    
              <li><a href="#">Trigem SBC</a></li>
              <li><a href="#">Trigem OTT</a></li>
              <li><a href="#"> Trigem SMS Platform</a></li>
              <li><a href="#"> Trigem SMS Platform</a></li>
              <li><a href="#"> iTel Billing</a></li>
              <li><a href="#"> Cloud Telephony</a></li>
              <li><a href="#"> Trigem SDK</a></li>
            </ul>
          </div>
    
          <div class="footer-section">
            <ul>
              <li><a href="#">Cloud Telephony</a></li>
              <li><a href="#">Hosted Dialer</a></li>
              <li><a href="#">Trigem SMS Platform</a></li>
              <li><a href="#">iTel Switch-Class 5</a></li>
              <li><a href="#"> iTel Mobile Dialer</a></li>
              <li><a href="#">Trigem SDK</a></li>
            </ul>
          </div>
        </div>
      </div>
    
      <div class="footer-section">
        <h3>Useful Links</h3>
        <ul>
          <li><a href="#">Downloads</a></li>
          <li><a href="#">Solutions at a Glance</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>
        <span>
          Copyright © 2023, TrigemIT Systems |
          <a href="#">Privacy Policy</a> |
          <a href="#">Cookie Policy</a>
        </span>
        <span
          >Follow Us:
          <a
            href="https://www.facebook.com/"
            target="_blank"
            aria-label="Facebook"
          >
            <img id="facebook-image" alt="Facebook" />
          </a>
    
          <a
            href="https://www.youtube.com/"
            target="_blank"
            aria-label="YouTube"
          >
            <img id="youtube-image" alt="YouTube" />
          </a>
    
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            aria-label="linkedin"
          >
            <img id="linkedIn-image" alt="linkedin" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            aria-label="twitter"
          >
            <img id="twitter-image" alt="twitter" />
          </a>
        </span>
        <span>Email: marketing@trigemsoft.com</span>
      </p>
    </div>
    </footer>
    `;

  // Assuming there is a <div id="navbar-container"></div> in all your pages
  const footerContainer = document.getElementById("footer-container");
  if (footerContainer) {
    footerContainer.innerHTML = footerHtml;
  }
  document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("Facebook").src = "../Images/facebook.PNG";
  });
  const imageSources = {
    facebook: "../Images/facebook.PNG",
    youtube: "../Images/youtube.PNG",
    linkedIn: "../Images/linkedIn.PNG",
    twitter: "../Images/tweeter.PNG",
  };

  document.getElementById("facebook-image").src = imageSources.facebook;

  document.getElementById("youtube-image").src = imageSources.youtube;

  document.getElementById("linkedIn-image").src = imageSources.linkedIn;

  document.getElementById("twitter-image").src = imageSources.twitter;
});
