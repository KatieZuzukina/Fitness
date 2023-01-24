export function findVideos() {
  return document.querySelectorAll('[data-video]').forEach(setupVideo);
}

function setupVideo(video) {
  const link = video.querySelector('[data-video-link]');
  const button = video.querySelector('[data-video-button]');
  const id = link.href.slice(-11);

  video.addEventListener('click', () => {
    const iframe = createIframe(id);

    link.remove();
    button.remove();
    video.appendChild(iframe);
  });

  link.removeAttribute('href');
  video.classList.add('is-active');
}

function createIframe(id) {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', generateURL(id));
  iframe.classList.add('video_iframe');

  return iframe;
}

function generateURL(id) {
  return `https://www.youtube.com/embed/${id}?rel=0&showinfo=0&autoplay=1`;
}
