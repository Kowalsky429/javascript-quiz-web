import data from './data.js';
const tl = gsap.timeline({ defaults: { ease: 'power1out' } }),
	categories = document.querySelectorAll('.category'),
	categoryTitles = document.querySelectorAll('.categoryMenu .title'),
	cards = document.querySelector('.cards'),
	quizGame = document.querySelector('.quizGame'),
	categoryMenu = document.querySelector('.categoryMenu'),
	exitBtn = document.querySelector('.exitBtn'),
	choosenOptions = [],
	wrongOptions = new Map(),
	correctOptions = new Map();

let marketQuestions = 0,
	score = 0,
	doneQuizzes = 0;

const hideStartMenu = () => {
	tl.to(document.querySelector('.startMenu'), { opacity: '0', y: '-15px', duration: '.4', display: 'none' });
};
const showCategoriesMenu = () => {
	tl.to(exitBtn, { opacity: '0', display: 'none' }),
		tl.fromTo(
			categoryMenu,
			{ transform: 'scaleX(0)', opacity: '0' },
			{ transform: 'scaleX(1)', opacity: '1', duration: '.6', display: 'block' }
		),
		categoryTitles.forEach((title) => {
			tl.fromTo(title, { x: '-20', opacity: '0' }, { x: '0', opacity: '1', duration: '.6', stagger: '0.2' }, '-=0.4');
		}),
		categories.forEach((category) => {
			tl.fromTo(category, { y: '-30', opacity: '0' }, { y: '0', opacity: '1', duration: '.4', stagger: '0.3' }, '-=0.3');
		});
};
const hideCategoriesMenu = () => {
	categoryTitles.forEach((title) => {
		tl.to(title, { x: '-20', opacity: '0', duration: '.6', stagger: '0.2' }, '-=0.4');
	}),
		categories.forEach((category) => {
			tl.to(category, { y: '-30', opacity: '0', duration: '.3', stagger: '0.3' }, '-=0.3');
		});
	tl.to(categoryMenu, { transform: 'scaleX(0)', opacity: '0', duration: '.6', display: 'none' });
};
const showQuiz = () => {
	tl.to(document.querySelector('.container'), {
		background: 'linear-gradient(to bottom, rgb(37, 68, 94), rgb(119, 176, 209))',
		duration: '1',
	}),
		tl.fromTo(
			quizGame,
			{ transform: 'scaleX(0)', opacity: '0' },
			{ transform: 'scaleX(1)', opacity: '1', duration: '.6', display: 'flex', border: 'none' },
			'-=1'
		),
		tl.fromTo(document.querySelector('.name .title'), { x: '-20px', opacity: '0' }, { x: '0', opacity: '1', duration: '.2' }),
		tl.fromTo(document.querySelector('.name .news'), { x: '-20px', opacity: '0' }, { x: '0', opacity: '1', duration: '.2' }),
		tl.fromTo(exitBtn, { x: '-20px', opacity: '0' }, { x: '0', opacity: '1', display: 'block', duration: '.2' }),
		document.querySelectorAll('.card').forEach((card) => {
			tl.fromTo(card, { x: '-30px', opacity: '0' }, { x: '0', opacity: '1', duration: '.4', stagger: '0.3' }, '-=0.2');
		});
};
const hideQuiz = () => {
	quizGame.style.display = 'none';
};
const open = () => {
	hideStartMenu();
	showCategoriesMenu();
};
const checkedQuit = () => {
	clearAll();
	hideQuiz();
	showCategoriesMenu();
};
const leaveQuiz = (id) => {
	if (doneQuizzes == data.length && alert('Ukonczyłes/as wszystkie dostępne quizy!'));
	if (marketQuestions && marketQuestions !== data[id].length) {
		const check = window.confirm('Napewno chcesz opuscic quiz?');
		check ? checkedQuit() : (quizGame.style.display = 'flex');
	} else {
		showCategoriesMenu();
		hideQuiz();
		clearAll();
	}
};
const categoryStyle = (id) => {
	document.querySelector(`.category[data-category="${id}"]`).classList.add('categoryGood');
	document.querySelector(`.category[data-category="${id}"] .mark`).textContent = `${((score / marketQuestions) * 100).toFixed(0)}%`;
};
const checkCorrectOption = (option, correct) => (option === correct ? 'correct' : '');
const showTableResults = (correctOptions, wrongOptions) => {
	for (const [index, value] of correctOptions) {
		const correct = document.createElement('p');
		correct.textContent = `${index}. ${value}`;
		document.querySelector('.resultsTable .good').appendChild(correct);
	}
	for (const [index, value] of wrongOptions) {
		const wrong = document.createElement('p');
		wrong.textContent = `${index}. ${value}`;
		document.querySelector('.resultsTable .wrong').appendChild(wrong);
	}
};
const correctOption = (target) => {
	correctOptions.set(target.dataset.index, target.textContent);
	score++;
};
const wrongOption = (target) => {
	wrongOptions.set(target.dataset.index, target.textContent);
};
const renderCounters = (target) => {
	++marketQuestions, target.parentNode.parentNode.classList.add('choosenCard');
};
const renderQuiz = (id, e) => {
	exitBtn.dataset.currentId = id;
	document.querySelector('.name .title').innerHTML = e.target.dataset.title;
	document.querySelector('.name .news').textContent = e.target.dataset.news;
	data[id].forEach(({ index, question, answers: { a, b, c, d }, correct }) => {
		const card = document.createElement('div');
		card.classList = 'card';
		card.innerHTML = `
		<div class="index">${index}</div>
		<p class="question">${question}</p>
		<div class="options">
			<div class="option ${checkCorrectOption(a, correct)}" data-type="a" data-index="${index}">${a}</div>
			<div class="option ${checkCorrectOption(b, correct)}" data-type="b" data-index="${index}">${b}</div>
			<div class="option ${checkCorrectOption(c, correct)}" data-type="c" data-index="${index}">${c}</div>
			<div class="option ${checkCorrectOption(d, correct)}" data-type="d" data-index="${index}">${d}</div>
		</div>`;
		cards.appendChild(card);
	});
	document.querySelectorAll('.option').forEach((card) => {
		card.addEventListener('click', (e) => userSelection(e, id));
	});
};
const userSelection = (e, id) => {
	let target = e.target;
	if (!target.classList.contains('choice')) {
		choosenOptions.push(target);
		target.classList.contains('correct') ? correctOption(target) : wrongOption(target);
		renderCounters(target);
	}
	document.querySelectorAll(`.option[data-index="${target.dataset.index}"]`).forEach((t) => {
		target.classList.add('choice');
	});
	if (marketQuestions === data[id].length && !document.querySelector('.resultsTable')) {
		choosenOptions.forEach((option) => option.classList.add('wrong'));
		document.querySelectorAll('.correct').forEach((correct) => correct.classList.add('showCorrect'));
		const resultsTable = document.createElement('div');
		resultsTable.classList = 'resultsTable';
		resultsTable.innerHTML = `
		<div class="good">
			<p class="title">good choices</p>
		</div>
		<div class="wrong">
			<p class="title">wrong choices</p>
		</div>`;
		cards.appendChild(resultsTable);
		showTableResults(correctOptions, wrongOptions);
		categoryStyle(id);
		doneQuizzes++;
	}
};

const clearAll = () => {
	if (!cards.hasChildNodes) return null;
	cards.innerHTML = '';
	marketQuestions = 0;
	score = 0;
	choosenOptions.length = 0;
	correctOptions.clear();
	wrongOptions.clear();
};
const categoryChoose = (e) => {
	hideCategoriesMenu();
	renderQuiz(e.target.dataset.category, e);
	showQuiz();
};

document.querySelector('.startMenu').addEventListener('click', open);
document.querySelectorAll('.category').forEach((category) => category.addEventListener('click', (e) => categoryChoose(e)));
exitBtn.addEventListener('click', (e) => leaveQuiz(e.target.dataset.currentId));
