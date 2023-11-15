document.addEventListener("DOMContentLoaded", function () {
  const herosection = `
    <h2>Latest Updates from Trigem Systems</h2>
    <div class="updates-container">
      <div class="update-card">
        <img
          id="telecomTransformationImage"
          alt="Telecom Transformation"
          class="update-image"
        />
        <span class="update-category update-content">OTT</span>
        <h3 class="update-content">
          Telecom Transformed: How to Convert Your Landline Service into
          Mobile Operations?
        </h3>
        <p class="update-content">
          In an ever-evolving digital landscape, fixed landline operators have
          witnessed substantial changes in their role over time. Primarily,
          these operators were responsible for providing landline phones and
          broadband services. With the emergence of technological
          breakthroughs, shifting customer preferences, and cut-throat
          competition, landline operators started facing numerous challenges
          to remain relevant. However, Mobile OTT has emerged […]
        </p>
      </div>
      <div class="update-card">
        <img
          id="a2pSmsAggregatorImage"
          alt="A2P SMS Aggregator"
          class="update-image"
        />
        <span class="update-category update-content">SMS Platform</span>
        <h3 class="update-content">How to Become a Successful A2P SMS Aggregator?</h3>
        <p class="update-content">
          SMS remains a highly prevalent communication tool employed by
          businesses to disseminate their sales, marketing, and product or
          solution information to consumers. With the colossal volume of SMS
          messages transmitted everyday across mobile networks, it has emerged
          as one of the most promising mode of communication. A study from
          Juniper Research found that 3.5 trillion […]
        </p>
      </div>
      <div class="update-card">
        <img id="smsGatewayImage" alt="SMS Gateway" class="update-image" />
        <span class="update-category update-content">SMS Platform</span>
        <h3 class="update-content">
          Future-Proofing Your Business: How to Pick the Best SMS Gateway?
        </h3>
        <p class="update-content">
          As per stats, 64% of consumers think businesses should connect with
          them via text messages more often. Interestingly, 75% of consumers
          want to receive texts with special offers. Even with the
          introduction of numerous modes of communication, every now and then,
          SMS is still a popular method used by businesses around the globe to
          connect […]
        </p>
      </div>
    </div>`;

  const herocontainer = document.getElementById("updates-section");
  if (herocontainer) {
    herocontainer.innerHTML = herosection;
  }

  const imageSources = {
    image1: "../Images/A2P-SMS-Aggregator-1024x536.jpg",

    image2:
      "../Images/A-Transform-Your-Landline-Service-into-Mobile-Operations-01.jpg",

    image3: "../Images/The-Best-SMS-Gateway-Platform-2.jpg",
  };

  document.getElementById("telecomTransformationImage").src =
    imageSources.image1;
  document.getElementById("a2pSmsAggregatorImage").src = imageSources.image2;
  document.getElementById("smsGatewayImage").src = imageSources.image3;
  trustedaddScrollAnimation2();
  trustedaddScrollAnimation3();
  trustedaddScrollAnimation4();
});

function trustedaddScrollAnimation2() {
  const section1 = document.querySelector(".trusted-card1");
  const section2 = document.querySelector(".trusted-card2");
  const section3 = document.querySelector(".trusted-card3");
  window.addEventListener("scroll", () => {
    const sectionPos = section1.getBoundingClientRect().top;

    const screenPos = window.innerHeight;

    if (sectionPos < screenPos) {
      section1.classList.add("in-view");
      section2.classList.add("in-view");
      section3.classList.add("in-view");
    } else {
      section1.classList.remove("in-view");
      section2.classList.remove("in-view");
      section3.classList.remove("in-view");
    }
  });
}
function trustedaddScrollAnimation3() {
  const updateImages = document.querySelectorAll(".update-image");
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in");
      } else {
        entry.target.classList.remove("slide-in");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  updateImages.forEach((image) => {
    observer.observe(image);
  });
}
function trustedaddScrollAnimation4() {
  const updateContents = document.querySelectorAll(".update-content");
  const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px",
  };

  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("slide-in2");
      } else {
        entry.target.classList.remove("slide-in2");
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);

  updateContents.forEach((content) => {
    observer.observe(content);
  });
}
