document.addEventListener("DOMContentLoaded", async () => {
    const imageContainer = document.getElementById("container-memes");
    try {
        const response = await fetch("../json/random.json");
        const fileNames = await response.json();
        const suffledfileNames = fileNames.sort(() => Math.random() - 0.5);
        suffledfileNames.forEach(fileName => {
          const imgdivborder = document.createElement("div")
          imgdivborder.className = "container-home"
          const imgdiv = document.createElement("div");
          imgdiv.className = "container"
          const img = document.createElement("img");
          img.className = "meme";
          img.setAttribute("loading", "lazy");
          img.src = fileName;
          img.alt = "some meme image probably with some pretty girl";
          imgdivborder.appendChild(imgdiv)
          imgdiv.appendChild(img);
          imageContainer.appendChild(imgdivborder);
        });
    } catch (error) {
        console.error("Error fetching file list:", error);
    }
});
