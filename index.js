import './index.css';
import BOOK_IMAGE from './assets/JS-01_image.jpeg';
console.log('Hello world');

const body = document.querySelector('body');

const rendering = () => {
	const pageTitle = document.createElement('h1');
	pageTitle.textContent = 'I love JavaScript';
	body.append(pageTitle);
	const img = document.createElement('img');
	img.src = BOOK_IMAGE;
	body.append(img);
	return { pageTitle, img };
};
rendering();
