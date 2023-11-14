document.addEventListener("DOMContentLoaded", function () {
  const herosection = `
  <section class="card-container">
  <h1 class="h1-container2">Cutting Edge Solution for your Business</h1>
  <div class="container2">
    <div class="card">
      <img id="telcosIcon" alt="TELCOs" class="card-icon" />
      <h3>TELCOs</h3>
      <p>
        Carrier-grade SBC, OTT, Billing & Cloud Telephony products with
        scalability, and high performance.
      </p>
    </div>

    <div class="card">
      <img
        id="serviceProviderIcon"
        alt="Service Provider"
        class="card-icon"
      />
      <h3>SERVICE PROVIDER</h3>
      <p>
        Mobile OTT Solution and A2P SMS Platform for communication service
        providers and SMS aggregators.
      </p>
    </div>

    <div class="card">
      <img id="enterpriseIcon" alt="Enterprise" class="card-icon" />
      <h3>ENTERPRISE</h3>
      <p>
        Secured Communication Platforms for enterprises for faster
        real-time business communication & collaboration.
      </p>
    </div>

    <div class="card">
      <img
        id="hostedPlatformsIcon"
        alt="Hosted Platforms"
        class="card-icon"
      />
      <h3>HOSTED PLATFORMS</h3>
      <p>
        Hosted Mobile VoIP, SMS Platform & Softswitch solution with a
        flexibility of monthly payment option.
      </p>
    </div>
  </div>
</section>    `;

  const herocontainer = document.getElementById("card-container");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
  }

  const imageSources = {
    image1: "../Images/Telco.png",
    image2: "../Images/Service-Provider.png",

    image3: "../Images/Enterprise.png",
    image4: "../Images/Hosted-Plat.png",
  };

  document.getElementById("telcosIcon").src = imageSources.image1;

  document.getElementById("serviceProviderIcon").src = imageSources.image2;

  document.getElementById("enterpriseIcon").src = imageSources.image3;

  document.getElementById("hostedPlatformsIcon").src = imageSources.image4;

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

  const cards = document.querySelectorAll(".container2 .card");
  cards.forEach((card) => {
    card.style.transition = "transform 0.5s ease-out, opacity 0.5s ease-out";
    card.style.transform = "translateY(100px)";
    card.style.opacity = "0";
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
