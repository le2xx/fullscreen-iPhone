import './main.scss';
import './index.html';

interface MyHTMLElement extends HTMLElement {
  requestFullscreen(): Promise<void>;
  mozRequestFullScreen(): Promise<void>;
  webkitRequestFullscreen(): Promise<void>;
  msRequestFullscreen(): Promise<void>;
  webkitEnterFullscreen(): Promise<void>;
  webkitSupportsFullscreen?: boolean;
}

window.onload = () => {
  const body = document.body as MyHTMLElement;
  const video = document.getElementById('video') as MyHTMLElement;
  const allBtn = document.getElementById('all-btn') as MyHTMLElement;
  const videoBtn = document.getElementById('video-btn') as MyHTMLElement;
  const debug = document.getElementById('debug') as MyHTMLElement;
  
  const setDebug = msg => {
    console.log(msg);
    debug.innerText = msg;
  }

  const fullScreenEnable = (element: MyHTMLElement) => {
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

  allBtn.addEventListener('click', () => fullScreenEnable(body));
  videoBtn.addEventListener('click', () => fullScreenEnable(video));
}