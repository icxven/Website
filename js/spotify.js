document.addEventListener("DOMContentLoaded", async () => {
    const footerContainer = document.querySelector("#footer-spotify");
    try {
      const response = await fetch("https://z.nethsara.cyou/api/current");
      const spotifyjsonObject = await response.json();
      if (spotifyjsonObject.status == '200') {
        let spotifyStatus = "Listening to " + '<b>' + spotifyjsonObject.song + '</b>' + " by " + spotifyjsonObject.artist + " ⤹˚˖ ♫ ୭ <br>";
        footerContainer.innerHTML = spotifyStatus + footerContainer.innerHTML;
      } else if (spotifyjsonObject.status == '400') {
        console.log("400");
      } else {
        console.log('error');
      }
    } catch (error) {
        console.error("Error fetching file list:", error);
    }
});
