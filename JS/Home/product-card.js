document.addEventListener("DOMContentLoaded", function () {
  const herosection = `<section class="product">
  <div class="card-container">
    <h1 class="h1-container2">Our Products</h1>
    <div class="container2">
      <div class="card">
        <img id="telcosIcon2" alt="TELCOs" class="card-icon" />
        <h3>SESSION BORDER CONTROLER</h3>
        <p>
          Resilient, Robust & Reliable Session Border Controller with high
          availability for real-time communications
        </p>
      </div>

      <div class="card">
        <img
          id="serviceProviderIcon2"
          alt="Service Provider"
          class="card-icon"
        />
        <h3>TELECOM OTT</h3>
        <p>
          A white label Mobile OTT Solution for communication service
          providers to build their own brand OTT Communication App
        </p>
      </div>

      <div class="card">
        <img id="enterpriseIcon2" alt="Enterprise" class="card-icon" />
        <h3>CLOUD TELEPHONY</h3>
        <p>
          Complete white label Cloud PBX Solution that allows you to offer
          cloud telephony services under your own brand
        </p>
      </div>

      <div class="card">
        <img
          id="hostedPlatformsIcon2"
          alt="Hosted Platforms"
          class="card-icon"
        />
        <h3>SMS PLATFORM</h3>
        <p>
          Industry-leading A2P & P2A Messaging Platform with advanced
          routing for SMS aggregators, MNOs and MVNOs
        </p>
      </div>
    </div>
  </div>
  <div>
    <button class="demo-button2">Explore All</button>
  </div>
</section>
   `;

  const herocontainer = document.getElementById("product-section");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
  }

  const imageSources = {
    image1: "../Images/Telco.png",
    image2: "../Images/Service-Provider.png",

    image3: "../Images/Enterprise.png",
    image4: "../Images/Hosted-Plat.png",
  };

  document.getElementById("telcosIcon2").src = imageSources.image1;

  document.getElementById("serviceProviderIcon2").src = imageSources.image2;

  document.getElementById("enterpriseIcon2").src = imageSources.image3;

  document.getElementById("hostedPlatformsIcon2").src = imageSources.image4;

  const cards = document.querySelectorAll(".container2 .card");
  cards.forEach((card) => {
    card.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
    card.style.transform = "translateY(100px)";
    card.style.opacity = "0";
  });
  var cards2 = document.querySelectorAll(".container2 .card");

  if (cards2.length > 0) {
    cards2[0].classList.add("active");
  }

  cards2.forEach(function (card) {
    card.addEventListener("click", function () {
      cards2.forEach(function (c) {
        c.classList.remove("active");
      });

      card.classList.add("active");
    });
  });

  let observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.transform = "translateY(0)";
          entry.target.style.opacity = "1";
        } else {
          entry.target.style.transform = "translateY(100px)";
          entry.target.style.opacity = "0";
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "0px",
    }
  );

  cards.forEach((card) => {
    observer.observe(card);
  });
});
