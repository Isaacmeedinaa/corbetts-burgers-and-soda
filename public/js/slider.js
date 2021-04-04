const images = [
  "/images/bg/sodas.png",
  "/images/bg/hero-bg6-2.jpg",
  "/images/bg/hero-bg6-3.jpg",
];
const node = document.getElementById("frontPageBanner");

const cycleImages = (images, node, step) => {
  images.forEach((image, index) =>
    setTimeout(() => {
      node.style.backgroundImage = `url(${image})`;
    }, step * (index + 1))
  );
  setTimeout(() => cycleImages(images, node, step), step * images.length);
};

const texts = [
  "Corbett's Burgers and Soda Bar!",
  "Enjoy Over 250 Craft Bottled Sodas!",
  "Pour Yourself a Brighter Future, Own a Franchise!",
];

const node2 = document.getElementById("frontPageBannerText");

const cycleText = (texts, node, step) => {
  texts.forEach((text, index) => {
    setTimeout(() => {
      node.innerHTML = `${text}`;
    }, step * (index + 1));
  });
  setTimeout(() => cycleText(texts, node, step), step * texts.length);
};

cycleImages(images, node, 2600);
cycleText(texts, node2, 2600);
