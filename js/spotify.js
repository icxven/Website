document.addEventListener("DOMContentLoaded", async () => {
    const footerContainer = document.getElementById("footer-spotify");
    try {
      const response = await fetch("https://z.nethsara.cyou/api/current");
      const spotifyjsonObject = await response.json();
      console.log(spotifyjsonObject);
      if (spotifyjsonObject.status == '200') {
        spotifyStatus = "Listening to " + spotifyjsonObject.song + " by " + spotifyjsonObject.artist + " ⤹˚˖ ♫ ୭ ";
        console.log(spotifyStatus);
        const para = document.createElement("p");
        para.textContent = spotifyStatus;
        footerContainer.appendChild(para);
      } else if (spotifyjsonObject.status == '400') {
        console.log("400");
      } else {
        console.log('error');
      }
    } catch (error) {
        console.error("Error fetching file list:", error);
    }
});
