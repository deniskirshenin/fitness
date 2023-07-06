const video = document.querySelector('#video');
const image = document.querySelector('#video-poster');
const button = document.querySelector('.play-button');

const onPlayClick = () => {
  button.addEventListener('click', (evt) => {
    evt.preventDefault();
    video.style.display = 'block';
    image.style.display = 'none';
    button.style.display = 'none';
  });
};


export {onPlayClick};
