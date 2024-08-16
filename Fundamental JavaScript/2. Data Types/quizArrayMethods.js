const cities = ['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Pekanbaru'];

/*
Output 1:
['Jakarta', 'Bandung', 'Tangerang', 'Balai', 'Bogor']
*/

cities.splice(4, 1, 'Bogor');
console.log(`Output 1 :`,cities);

/*
Output 2:
['Jakarta', 'Bandung', 'Tangerang', 'Depok', 'Bekasi']
*/
cities.splice(3, 2, `Depok`, `Bekasi`);
console.log(`Output 2 :`,cities);
/*
Output 3:
['Denpasar', 'Semarang', 'Tangerang', 'Depok', 'Bekasi']
*/
cities.splice(0, 2, 'Denpasar', 'Semarang');
console.log(`Output 3 :`,cities);

