const projects = [
	{
		nr: '001',
		name: 'Random Meal Generator',
		link: 'https://codepen.io/FlorinPop17/full/WNeggor'
	},
	{
		nr: '002',
		name: '2019 Mood Calendar',
		link: 'https://codepen.io/FlorinPop17/full/eYOPdER'
	},
	{
		nr: '003',
		name: 'Double Noise Flow Field',
		link: 'https://codepen.io/FlorinPop17/full/GRKwmgK'
	},
	{
		nr: '004',
		name: 'Catch the insect',
		link: 'https://codepen.io/FlorinPop17/full/NWKELoq'
	},

];

const app = document.getElementById('app');
const imgBaseURL = 'https://www.florin-pop.com/images/100Days100PRojects/Day ';

projects.forEach(project => {
	const title = `${project.name} - #${project.nr}`;
	const imgURL = imgBaseURL + project.nr + '.jpg';
	
	const projectEl = document.createElement('a');
	projectEl.classList.add('project');
	projectEl.href = project.link;
	projectEl.target = '_blank';

	projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

	app.appendChild(projectEl);
});

