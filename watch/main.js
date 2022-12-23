//Задаем константу, позволяет выщитывать угол поворта стрелки, зааписывваем часовую стрелку и секундную
const deg = 6;
const hr = document.querySelector('#hr');
const sc = document.querySelector('#sc');

//Задаем функцию чтобы время посстояно обновлялось 
setInterval(() => {
// Пишем переменную и записываем обЪект, этот объект записывает настоящее время
	let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;

//Задаем поворт часовых, минутных и секундных стрелок
hr.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
mn.style.transform = `rotateZ(${(mm)}deg)`;
sc.style.transform = `rotateZ(${(ss)}deg)`;
});