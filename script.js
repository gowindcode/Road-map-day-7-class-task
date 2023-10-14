const log = (param) => console.log(param);

//Methods of Array
//Division
//Impact in original Array

const array = [9, 88, 777, 6666, 55, 44, 33, 22, 121];
log(array);

log(`array.push method_________adding the value at the last index`);
//push
//adding the value at the last index
array.push(321);
log(array);

log(`array.pop method_________remove the value at the last index`);
//push
//adding the value at the last index
array.pop();
log(array);

log(`array.unshift method_________adding the value at the first index`);
//push
//adding the value at the last index
array.unshift(198);
log(array);

log(`array.shift method_________remove the value at the first index`);
//push
//adding the value at the last index
array.shift();
log(array);

//sort method
log(`_________________________.sort method___________________`);

const array2 = [212, 143, 316, 894, 573, 786, 649, 909, 444];
const strary = ["van", "kid", "toy", "aim", "zoo", "bus", "moon", "car", "yax", "door"];

array2.sort();
strary.sort();
array.sort ((a, b) => a - b);
console.log("array2.sort ascending order result:", array2);
console.log("strary.sort ascending order result:", strary);

//reverse method();
array2.sort ((a, b) => a - b).reverse();
console.log("array2.sort & reverse method result:", array2);
strary.sort ((a, b) => a - b).reverse();
console.log("strary.sort & reverse method result:",strary);

// doesn't impact original array
// returns a new array or value
const newAry = ["price", "rate"];
console.log("before .concat result:",newAry);

//concat method

console.log("____________________________concat method______________________");
const newArys = newAry.concat("difference");
console.log("after concat result:",newArys);

const ary1 = ["apple, Orange"];
console.log("This is ary1:", ary1);

const ary2 = ["mango"];
console.log("This is ary2:", ary2);

const concated = ary1.concat(ary2);
console.log("Now ary2 added with ary1:", concated);

// difference between forEach and map
log(`_________________difference between forEach and map____________`);

const forEachArr = [11, 22, 44];

const newforEchAry = forEachArr.forEach((value, index, actAry) => {
console.log(`
value : ${value}
index : ${index}
actualArray : ${actAry}
`);
});

console.log(forEachArr); //result only for view can not modify


// MRF function (map filter reduce)
// maping like a forEach, but maping return new array
// map can do that
console.log("_________________MRF_____________");
log('_____________.map______________');
const mrfArr = [33, 55, 99, 22, 77];

const newmrfArr = mrfArr.map((value, index, actualArr) => {
console.log(`
value : ${value}
index : ${index}
actualArray : ${actualArr}
`);
return value * 2;
});
console.log(mrfArr);
console.log(newmrfArr); // we can modify and get a new array with new value

//polyfill for map
//now create a own map method function
console.log("_________Polyfill_________Zen Map Array________________it's own method___________");
Array.prototype.zenMap = function (cb) {
    let newarr = [];
    for (let i = 0; i<this.length; i++) {
        newarr.push(cb(this[i],i, this));
    };
    return newarr;
};
const zmrfArr = [99, 21, 35, 68];
const newzenMappedArray = zmrfArr.zenMap((zenvalue, zenindex, zenactualArr) => {
    console.log(`
    zenMap value : ${zenvalue}
    zenMap index : ${zenindex}
    zenMap actualArray : ${zenactualArr}
    `);
    return zenvalue * 2;
    });
    console.log(zmrfArr);
    console.log("Now doubled the zenMap value:", newzenMappedArray);

    //filter map method
    // what is filter?
    console.log("_______________Filter method____________");

    const filterArr = [10, 88, 99, 27, 36, 1, 27, 18];

    const newfilteredArr = filterArr.filter((value, index, Actuarr) => {
        return value != 27;
    });
    console.log("filter Array actual:", filterArr);

    console.log("new filter array removed 27:", newfilteredArr);
     
    const OddfilteredArr = filterArr.filter((value, index, Actuarr) => {
        return value % 2 !=0;
    });

    console.log("filtered array Odd numbers:", OddfilteredArr);

    const evenfilteredArr = filterArr.filter((value, index, Actuarr) => {
        return value % 2 === 0;
    });

    console.log("filtered array even numbers:", evenfilteredArr);
    console.log("filtered array even numbers with.sort:", evenfilteredArr.sort());

    // accumulator

    console.log("__________________accumulator_________________");
    const accarr = [7, 3, 5, 9, 4, 65];
    const accvalue = accarr.reduce((accumulator, value, index, actualArr) => {
        return accumulator += value;
    }); // or }, 0); all array values calulating 0

    console.log("Actual acc array: ", accarr);
    console.log("Accumulator Array Total Value:", accvalue);

    // chaining of MRF
    console.log("____________________Chaning of MRF__________________");

    const chainingmrfArr = [55, 12, 98, 32, 41];

    const newchaingmrfArr = chainingmrfArr.map((value) => value*3)
    .filter((value) => value % 2 == 0)
    .reduce((accumulator, value) => (accumulator += value), 0); // here after we can't do filter, because .reduce dosen't return a array.

    console.log("Chaining Array's before .map:", chainingmrfArr);
    // console.log("Chaining Array filter value:", filtervalue);
    console.log("Chaining Array after .map .filter .reduce Total Value:", newchaingmrfArr);

    const evenArr = chainingmrfArr.filter((value) => value % 2 == 0);
    console.log("Chaining Array Even Numbers are:", evenArr);

    const Oddarr = chainingmrfArr.filter((value) => value % 2 !==0);
    console.log("Odd Array values are:", Oddarr);

    let country = new XMLHttpRequest();
    console.log(country);
    country.open("GET", "https://restcountries.com/v3.1/all");
    country.send();
    
    country.onload = function(){
    const data = JSON.parse(country.response);
    console.log(data);
    console.log(country.status);
// for (let i=0; i < data.length; i++) {
//     console.log(`
//     Country Name : ${data[i].name.common}
//     Total Population : ${data[i].population}
//     Flag : ${data[i].flags.png}
//     Region :${data[i].region}
//     Sub Region :${data[i].subregion}
//     Capital :${data[i].capital}    
//  `);
//  };
 
//         console.log(data[0].name.common);
//   };

// country.prototype.datamap = function(data) {
//     let dataArray = []
//     for (let i = 0; i<this.length; i++) {
//         dataArray.push(data(this[i], i, this));
// };
// return dataArray;
// };

const contasia = data.filter((value) => value.region === "Asia");
console.log(contasia);
const cntpopulation = data.filter((value) => value.population < 200000);
console.log(cntpopulation);

const contcurreny = data.filter((value) => value.name.currencies === "United States dollar");
console.log(contcurreny.USD);
const overallcurrencies = data.map((value) => {
    return value.currencies;
});
console.log(contcurreny);

overallcurrencies.map((value) => {

    console.log(value);
});

// const c= contasia
// for (c in contcurreny) {
//     log(`
//     Index of Array: ${c}
//     Values of Array: ${contcurreny[c]}
    
//     `);
// };
};