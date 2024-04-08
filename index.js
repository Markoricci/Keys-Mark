/* eslint-disable*/
import _ from 'lodash';

const showInfo = (content) => {
const rows = content.trim().split('\n').slice(1);
const cars = rows.map(row => {const [brand, model, year, kuzov, probeg, korobka, toplivo, price, color] = row.split(',');
return {
brand,
model,
year: parseInt(year),
kuzov,
probeg: parseInt(probeg),
korobka,
toplivo,
price: parseInt(price),
color
};
});

const carCount = cars.length;

const totalMile = cars.reduce((sum, car) => sum + car.probeg, 0);
const averageMile = Math.round(totalMile / carCount);

const maxPrice = Math.max(...cars.map((car) => car.price));

const oldestCar = cars.reduce((oldest, car) => (oldest.year < car.year ? oldest : car));
const oldestCarName = `${oldestCar.brand} ${oldestCar.model}`;

const colors = cars.reduce((acc, car) => {
acc[car.color] = (acc[car.color] || 0) + 1;
return acc;
}, {});

const colorsString = Object.entries(colors).map(([color, count]) => `${color}: ${count}`).join(', ');

console.log(`Количество автомобилей: ${carCount}`);
console.log(`Средний пробег: ${averageMile}`);
console.log(`Стоимость самой дорогой машины: ${maxPrice}`);
console.log(`Самый старый автомобиль: ${oldestCarName}`);
console.log(`Все цвета: ${colorsString}`);
};

export default showInfo;
