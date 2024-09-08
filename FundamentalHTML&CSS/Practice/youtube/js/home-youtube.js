import { users } from "../../../WeekendQuiz/database.js";

document.addEventListener("DOMContentLoaded", () => {
    const account = users.find((user) => user.email === localStorage.getItem("email"));
    
    // inilization
    const accountName = document.querySelector("#account-name");
    accountName.innerHTML = `${account.firstName} ${account.lastName}`;
    

    // render cards
    renderCard();
})

const playlistId = `RDNvNPx8ssvKE&start_radio=1`;
const max = 50;
const key = `AIzaSyBoqOwRlq2G3JxrsFg9V6mJR3IQVoJxaNk`;

async function getPlaylist(playlistId, max, key) {
    try {
        const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${playlistId}&maxResults=${max}&key=${key}`;
        const response = await fetch(url);
        
        if(!response.ok){
            throw new Error(response.statusText);
        }
        
        const playlist = await response.json();
        return playlist;
        
    } catch (error) {
        console.log(error);
    }
}

async function renderCard() {
    try {
        const playlist = await getPlaylist(playlistId, max, key);
        const container = document.querySelector(`[youtube = container ]`);
        const wrapper = container.querySelector(`[youtube = video]`).cloneNode(true);         
        
        container.innerHTML=``;

        playlist.items.forEach((video) => {
            const wrapperClone = wrapper.cloneNode(true);

            const thumbnailImage = wrapperClone.querySelector(`[video = thumbnail-image]`);
            thumbnailImage.src = video.snippet.thumbnails.medium.url;
            
            const thumbnailLink = wrapperClone.querySelector(`[video = thumbnail-link]`);
            thumbnailLink.href = `https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`
            
            const profileLink = wrapperClone.querySelector(`[video = profile-link]`);
            profileLink.href = `https://www.youtube.com/@${video.snippet.videoOwnerChannelTitle}`
            
            const titleLink = wrapperClone.querySelector(`[video = title-link]`);
            titleLink.href = `https://youtube.com/watch?v=${video.snippet.resourceId.videoId}`
            
            const titleVideo = wrapperClone.querySelector(`[video = title-video]`);
            titleVideo.innerText = video.snippet.title;
            
            const profileTitleLink = wrapperClone.querySelector(`[video = profile-title-link]`);
            profileTitleLink.href = `https://www.youtube.com/@${video.snippet.videoOwnerChannelTitle}`
            
            const profileTitle = wrapperClone.querySelector(`[video = profile-title]`);
            profileTitle.innerText = video.snippet.videoOwnerChannelTitle;

            container.appendChild(wrapperClone);
        });
        
        
    } catch (error) {
        console.log(error);
        
    }
}





