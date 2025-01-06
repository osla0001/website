if (window.matchMedia("(min-width: 710px)").matches) {
  // Find gif1
  const gifs = document.querySelectorAll(".gif1");

  // gå gennem elementer og tilføj event listeners
  gifs.forEach((gif) => {
    // hover og skift
    gif.addEventListener("mouseenter", function () {
      gif.src = "../imgs/folder2.webp"; // skift til animation
    });

    // hover off og skift
    gif.addEventListener("mouseleave", function () {
      gif.src = "../imgs/folder1.webp"; // skift tilbage
    });
  });
}
