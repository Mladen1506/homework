const fs = require('fs');

const generatePage = require('./src/page-template.js');
const profileDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = profileDataArgs;
const pageHtml = generatePage(name, github);

fs.writeFile('./index.html', generatePage(name, github), err => {
    if(err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output')
});
// var message = 'Hello Node!';

// var sum = 5 + 3;

// console.log(message);
// console.log(sum);


// console.log(profileDataArgs);

// const printProfileData = profileDataArr => {
//     // console.log(profileDataArr);
//     for(let i =0; i< profileDataArr.length; i += 1) {
//         console.log(profileDataArr[i]);
//     }
//     console.log('-------------');

//     profileDataArr.forEach(profileItem => {
//         console.log(profileItem);
//     });
// };
// printProfileData(profileDataArgs);



