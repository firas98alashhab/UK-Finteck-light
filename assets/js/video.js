const video = document.querySelector(".theVideo");

video.addEventListener("mouseenter", hoverVideo);
video.addEventListener("mouseleave", hideVideo);

function hoverVideo(e) {
    video.play();
}

function hideVideo(e) {
    video.pause();
}
