const API_KEY = "AIzaSyAUeBMOoexyxwil25R6HJ55miLdkRNTTPI";
const PLAYLIST_ID = "PLfbBiMMBCKNI";

const container = document.getElementById("predicas-container");


fetch(
    `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=3&playlistId=${PLAYLIST_ID}&key=${API_KEY}`
)

.then(response => response.json())

.then(data => {

    data.items.forEach(video => {

        const videoId = video.snippet.resourceId.videoId;

        const title = video.snippet.title;

        const thumbnail = video.snippet.thumbnails.high.url;


        container.innerHTML += `

        <div class="predica-card">

            <img src="${thumbnail}" alt="${title}">

            <h3>${title}</h3>

<a href="https://www.youtube.com/watch?v=${videoId}"
target="_blank"
class="predica-button">

    <i class="fab fa-youtube"></i>
    Ver en YouTube

</a>



        </div>

        `;

    });

})

.catch(error => console.log(error));