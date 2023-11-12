document.addEventListener("DOMContentLoaded", function () {
  const tabbedMenu = `
  <div  class="tabbed-menu">
  <button class="tab" onclick="showContent('exclusive')">
    EXCLUSIVE FEATURES
  </button>
  <button class="tab" onclick="showContent('key')">KEY FEATURES</button>
  <button class="tab" onclick="showContent('technical')">
    TECHNICAL SPECIFICATIONS
  </button>
  <button class="tab" onclick="showContent('architecture')">
    SYSTEM ARCHITECTURE
  </button>
  <button class="tab" onclick="showContent('resources')">
    RESOURCES
  </button>
</div>
</div>

<div id="exclusive" class="tab-content">
<div class="features">
  <h1>Only SBC with Cutting-Edge Next Generation Features</h1>
  <div class="feature-block">
    <div class="feature-text">
      <h2>Secure & Reliable</h2>
      <p>
        Integrated intelligent firewall for security attacks and theft
        of service from malformed packets, Denial of Service (DoS)
        attacks. Enhanced security/encryption services to protect your
        business privacy and ensure Compliance, Fraud & Anomaly
        Management with Two-Factor Authentication & Role-Based Access
        Control.
      </p>
    </div>
    <div class="feature-image">
      <img id="image1" alt="Feature Image" />
    </div>
  </div>
</div>
</div>
<div id="key" class="tab-content" style="display: none">
<div class="features">
  <h1>Core Features of Session Border Controller</h1>
  <div class="feature-block">
    <div class="feature-text">
      <h2>Secure & Reliable</h2>
      <p>
        Integrated intelligent firewall for security attacks and theft
        of service from malformed packets, Denial of Service (DoS)
        attacks. Enhanced security/encryption services to protect your
        business privacy and ensure Compliance, Fraud & Anomaly
        Management with Two-Factor Authentication & Role-Based Access
        Control.
      </p>
    </div>
    <div class="feature-image">
      <img id="image2" alt="Feature Image" />
    </div>
  </div>
</div>
</div>
<div id="technical" class="tab-content" style="display: none">
<div class="features">
  <h1>Technical Specification of SBC</h1>
  <div class="feature-block">
    <div class="feature-text">
      <h2>Secure & Reliable</h2>
      <p>
        Integrated intelligent firewall for security attacks and theft
        of service from malformed packets, Denial of Service (DoS)
        attacks. Enhanced security/encryption services to protect your
        business privacy and ensure Compliance, Fraud & Anomaly
        Management with Two-Factor Authentication & Role-Based Access
        Control.
      </p>
    </div>
    <div class="feature-image">
      <img id="image3" alt="Feature Image" />
    </div>
  </div>
</div>
</div>
<div id="architecture" class="tab-content" style="display: none">
<div class="features">
  <h1>SBC Solution Architecture</h1>
  <div class="feature-block">
    <div class="feature-image2">
      <img id="image4" alt="Feature Image"/>
    </div>
  </div>
</div>
</div>
<div id="resources" class="tab-content" style="display: none">
<div class="resources-container">
  <div class="resource">
    <h3>Brochure</h3>
    <img
    id="image5"
      alt="Brochure Image"
      class="resource-image"
    />
    <a href="path-to-brochure.pdf" class="download-button">Download</a>
  </div>
  <div class="resource">
    <h3>Data Sheet</h3>
    <img
    id="image6"
      alt="Data Sheet Image"
      class="resource-image"
    />
    <a href="path-to-datasheet.pdf" class="download-button">Download</a>
  </div>
</div>
      `;

  // Assuming there is a <div id="navbar-container"></div> in all your pages
  const footerContainer = document.getElementById("tabbedMenu-container");
  if (footerContainer) {
    footerContainer.innerHTML = tabbedMenu;
  }

  const imageSources = {
    image1: "../Images/Secure-01.svg",
  };

  document.getElementById("image1").src = imageSources.image1;

  document.getElementById("image2").src = imageSources.image1;

  document.getElementById("image3").src = imageSources.image1;

  document.getElementById("image4").src = imageSources.image1;

  document.getElementById("image5").src = imageSources.image1;

  document.getElementById("image6").src = imageSources.image1;
});
