document.addEventListener("DOMContentLoaded", function () {
  // Define your feature items here
  const featureItems = [
    {
      imgSrc: "../Images/Robust-01.svg",
      altText: "Robust network security",
      description: "Robust network security under heavy loads & DoS attacks",
    },
    {
      imgSrc: "../Images/Robust-01.svg",
      altText: "Distributed Architecture",
      description: "Distributed Architecture for media & signaling",
    },
    {
      imgSrc: "../Images/Robust-01.svg",
      altText: "Robust network security",
      description: "Robust network security under heavy loads & DoS attacks",
    },
    {
      imgSrc: "../Images/Robust-01.svg",
      altText: "Distributed Architecture",
      description: "Distributed Architecture for media & signaling",
    },
    {
      imgSrc: "../Images/Robust-01.svg",
      altText: "Robust network security",
      description: "Robust network security under heavy loads & DoS attacks",
    },
    {
      imgSrc: "../Images/Robust-01.svg",
      altText: "Distributed Architecture",
      description: "Distributed Architecture for media & signaling",
    },
  ];

  const featuresGrid = document.querySelector(".features-grid");

  featuresGrid.innerHTML = "";

  featureItems.forEach((item) => {
    const featureItem = document.createElement("div");
    featureItem.classList.add("feature-item");

    const image = document.createElement("img");
    image.src = item.imgSrc;
    image.alt = item.altText;

    const description = document.createElement("p");
    description.textContent = item.description;

    featureItem.appendChild(image);
    featureItem.appendChild(description);

    featuresGrid.appendChild(featureItem);
  });
});
