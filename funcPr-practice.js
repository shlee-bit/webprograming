const cart = [
    { item: "laptop", price: 1200000, quantity: 1 },
    { item: "mouse", price: 35000, quantity: 2 },
    { item: "keyboard", price: 89000, quantity: 1 },
];
let totalPrice = 0;

for (let i = 0; i < cart.length; i++) {
    totalPrice += cart[i].price * cart[i].quantity;
}
console.log(`Total price: ${totalPrice}`);

totalPrice = 0;
//forEach: 각각의 요소에 대해 함수 실행
cart.forEach(goods => totalPrice += goods.price * goods.quantity);  //화살표 함수
console.log(`Total price: ${totalPrice}`);

//reduce()
totalPrice = cart.reduce((res, goods) => (res + goods.price * goods.quantity), 0);
console.log(`Total price: ${totalPrice}`);

//map()
const itemTotals = cart.map(goods => ({
    item: goods.item,
    total: goods.price * goods.quantity
}
));
console.log('price total:',itemTotals);

const names=['alice','bob','charlie'];
const upperCaseNames=names.map(
    names=> names.toUpperCase()
);
console.log(upperCaseNames);

const capitalStartNames=names.map(
    //첫 글자는 대문자로 하고 그 뒤 문자열을 붙인다.
    names=>names.charAt(0).toUpperCase()+names.slice(1)
)
console.log(capitalStartNames);