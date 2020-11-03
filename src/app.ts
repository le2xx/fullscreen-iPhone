import './main.scss';
import './index.html';

window.onload = () => {
  const video = document.getElementById('video');
  const allBtn = document.getElementById('all-btn');
  const videoBtn = document.getElementById('video-btn');
  const debug = document.getElementById('debug');
  
  const setDebug = msg => {
    console.log(msg);
    debug.innerText = msg;
  }

  const fullScreenEnable = (element) => {
    if (element.requestFullscreen) {
      element.requestFullscreen();
      setDebug('Все нормальные браузеры');
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
      setDebug('Firefox');
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
      element.webkitRequestFullscreen();
      setDebug('Chrome, Safari and Opera');
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
      setDebug('IE/Edge');
    } else if (element.webkitSupportsFullscreen) { /* iPhone/iPad */
      element.webkitEnterFullscreen();
      setDebug('iPhone/iPad');
    } else {
      setDebug('Ну ХЗ вообще как это победить');
    }
  }

  allBtn.addEventListener('click', () => fullScreenEnable(document.body));
  videoBtn.addEventListener('click', () => fullScreenEnable(video));
}