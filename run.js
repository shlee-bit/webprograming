function run3(){
    console.log('excute after 3 sec');
}
function run1(){
    console.log('excute after 1 sec');
}
console.log('start');
setTimeout(run3,3000);
setTimeout(run1,1000);
console.log('end');
