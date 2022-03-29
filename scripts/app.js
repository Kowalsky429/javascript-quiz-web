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
	},
	showCategoriesMenu = () => {
		tl.to(exitBtn, { opacity: '0', display: 'none' }),
			tl.fromTo(
				categoryMenu,
				{ transform: 'scaleX(0)', opacity: '0' },
				{ transform: 'scaleX(1)', opacity: '1', duration: '.6', display: 'block' }
			),
			categoryTitles.forEach((t) => {
				tl.fromTo(t, { x: '-20', opacity: '0' }, { x: '0', opacity: '1', duration: '.6', stagger: '0.2' }, '-=0.4');
			}),
			categories.forEach((t) => {
				tl.fromTo(t, { y: '-30', opacity: '0' }, { y: '0', opacity: '1', duration: '.4', stagger: '0.3' }, '-=0.3');
			});
	},
	hideCategoriesMenu = () => {
		categoryTitles.forEach((t) => {
			tl.to(t, { x: '-20', opacity: '0', duration: '.6', stagger: '0.2' }, '-=0.4');
		}),
			categories.forEach((t) => {
				tl.to(t, { y: '-30', opacity: '0', duration: '.3', stagger: '0.3' }, '-=0.3');
			}),
			tl.to(categoryMenu, { transform: 'scaleX(0)', opacity: '0', duration: '.6', display: 'none' });
	},
	showQuiz = () => {
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
			document.querySelectorAll('.card').forEach((t) => {
				tl.fromTo(t, { x: '-30px', opacity: '0' }, { x: '0', opacity: '1', duration: '.4', stagger: '0.3' }, '-=0.2');
			});
	},
	hideQuiz = () => {
		quizGame.style.display = 'none';
	},
	open = () => {
		tl.to(document.querySelector('.startMenu'), { opacity: '0', y: '-15px', duration: '.4', display: 'none' }), showCategoriesMenu();
	},
	checkedQuit = () => {
		clearAll(), hideQuiz(), showCategoriesMenu();
	},
	leaveQuiz = (t) => {
		if (
			(doneQuizzes == data.length && alert('Ukonczyłes/as wszystkie dostępne quizy!'),
			marketQuestions && marketQuestions !== data[t].length)
		) {
			window.confirm('Napewno chcesz opuscic quiz?')
				? (clearAll(), hideQuiz(), showCategoriesMenu())
				: (quizGame.style.display = 'flex');
		} else showCategoriesMenu(), hideQuiz(), clearAll();
	},
	categoryStyle = (t) => {
		document.querySelector(`.category[data-category="${t}"`).classList.add('categoryGood'),
			(document.querySelector(`.category[data-category="${t}"] .mark`).textContent = `${((score / marketQuestions) * 100).toFixed(
				0
			)}%`);
	},
	checkCorrectOption = (t, e) => (t === e ? 'correct' : ''),
	showTableResults = (t, e) => {
		for (const [e, o] of t) {
			const t = document.createElement('p');
			(t.textContent = `${e}. ${o}`), document.querySelector('.resultsTable .good').appendChild(t);
		}
		for (const [t, o] of e) {
			const e = document.createElement('p');
			(e.textContent = `${t}. ${o}`), document.querySelector('.resultsTable .wrong').appendChild(e);
		}
	},
	correctOption = (t) => {
		correctOptions.set(t.dataset.index, t.textContent), score++;
	},
	wrongOption = (t) => {
		wrongOptions.set(t.dataset.index, t.textContent);
	},
	renderCounters = (t) => {
		++marketQuestions, t.parentNode.parentNode.classList.add('choosenCard');
	},
	renderQuiz = (t, e) => {
		(exitBtn.dataset.currentId = e),
			(document.querySelector('.name .title').innerHTML = t.target.dataset.title),
			(document.querySelector('.name .news').textContent = t.target.dataset.news),
			data[e].forEach(({ index: t, question: e, answers: { a: o, b: a, c: r, d: n }, correct: c }) => {
				const i = document.createElement('div');
				(i.classList = 'card'),
					(i.innerHTML = `\n\t\t\t<div class="index">${t}</div>\n\t\t\t<p class="question">${e}</p>\n\t\t\t<div class="options">\n\t\t\t\t<div class="option ${checkCorrectOption(
						o,
						c
					)}" data-type="a" data-index="${t}">${o}</div>\n\t\t\t\t<div class="option ${checkCorrectOption(
						a,
						c
					)}" data-type="b" data-index="${t}">${a}</div>\n\t\t\t\t<div class="option ${checkCorrectOption(
						r,
						c
					)}" data-type="c" data-index="${t}">${r}</div>\n\t\t\t\t<div class="option ${checkCorrectOption(
						n,
						c
					)}" data-type="d" data-index="${t}">${n}</div>\n\t\t\t</div>\n\t\t`),
					cards.appendChild(i);
			}),
			document.querySelectorAll('.option').forEach((t) => {
				t.addEventListener('click', (t) => userSelection(t, e));
			});
	},
	userSelection = (t, e) => {
		let o = t.target;
		if (
			(choosenOptions.push(t.target),
			o.classList.contains('choice') || (o.classList.contains('correct') ? correctOption(o) : wrongOption(o), renderCounters(o)),
			document.querySelectorAll(`.option[data-index="${o.dataset.index}"]`).forEach((t) => {
				t.classList.add('choice');
			}),
			marketQuestions === data[e].length && !document.querySelector('.resultsTable'))
		) {
			choosenOptions.forEach((t) => t.classList.add('wrong')),
				document.querySelectorAll('.correct').forEach((t) => t.classList.add('showCorrect'));
			const t = document.createElement('div');
			(t.classList = 'resultsTable'),
				(t.innerHTML =
					'\n\t\t\t<div class="good">\n\t\t\t\t<p class="title">good choices</p>\n\t\t\t</div>\n\t\t\t<div class="wrong">\n\t\t\t\t<p class="title">wrong choices</p>\n\t\t\t</div>\n\t\t'),
				cards.appendChild(t),
				showTableResults(correctOptions, wrongOptions),
				categoryStyle(e),
				doneQuizzes++;
		}
	},
	clearAll = () => {
		if (!cards.hasChildNodes) return null;
		(cards.innerHTML = ''),
			(marketQuestions = 0),
			(score = 0),
			(choosenOptions.length = 0),
			correctOptions.clear(),
			wrongOptions.clear();
	},
	categoryChoose = (t) => {
		const e = t.target.dataset.category;
		categoryTitles.forEach((t) => {
			tl.to(t, { x: '-20', opacity: '0', duration: '.6', stagger: '0.2' }, '-=0.4');
		}),
			categories.forEach((t) => {
				tl.to(t, { y: '-30', opacity: '0', duration: '.3', stagger: '0.3' }, '-=0.3');
			}),
			tl.to(categoryMenu, { transform: 'scaleX(0)', opacity: '0', duration: '.6', display: 'none' }),
			renderQuiz(t, e),
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
			document.querySelectorAll('.card').forEach((t) => {
				tl.fromTo(t, { x: '-30px', opacity: '0' }, { x: '0', opacity: '1', duration: '.4', stagger: '0.3' }, '-=0.2');
			});
	};
document.querySelector('.startMenu').addEventListener('click', open),
	document.querySelectorAll('.category').forEach((t) => t.addEventListener('click', categoryChoose)),
	exitBtn.addEventListener('click', (t) => leaveQuiz(t.target.dataset.currentId));
