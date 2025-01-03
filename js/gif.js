// Find alle elementer med klassen "gif1"
const gifs = document.querySelectorAll(".gif1");

// Gå gennem hvert element og tilføj event listeners
gifs.forEach((gif) => {
  // Når musen holdes over elementet, skift billedet til GIF
  gif.addEventListener("mouseenter", function () {
    gif.src = "../imgs/folder2.webp"; // Skift til GIF
  });

  // Når musen fjernes fra elementet, skift billedet tilbage til PNG
  gif.addEventListener("mouseleave", function () {
    gif.src = "../imgs/folder1.webp"; // Skift tilbage til PNG
  });
});
