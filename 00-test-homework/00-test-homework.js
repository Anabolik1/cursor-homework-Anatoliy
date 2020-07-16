const milkPrice = 15.678;
const meatPrice = 123.965;
const breadPrice = 90.2345;


let maxPrice=Math.max(milkPrice,meatPrice,breadPrice);
console.log("max price = "+maxPrice);

let minPrice=Math.min(milkPrice,meatPrice,breadPrice);
console.log("min price = "+minPrice);

let sum=milkPrice+meatPrice+breadPrice;
console.log("sum of all tovars = "+sum);

 let sumWithoutPenny =(Math.floor(milkPrice)+Math.floor(meatPrice)+Math.floor(breadPrice));
console.log("sum without penny = "+sumWithoutPenny);

let sumToHundreds=Math.round((milkPrice+meatPrice+breadPrice)/100)*100;
console.log("sumToHundreds"+sumToHundreds);



let isEven = (sumWithoutPenny % 2 === 0 )? true+" =Парне":false+"=Не парне";
console.log(isEven);


let rest=500-(milkPrice+meatPrice+breadPrice);
console.log("reshta = "+rest);

let averageValue=(milkPrice+meatPrice+breadPrice)/3;
console.log("seredne 3 tovariv"+averageValue.toFixed(2));

let discont =Math.floor(Math.random() * 100); 
let discontInGrivna=(sum/100)*discont;
let sumPaymentvithDiscont;
sumPaymentvithDiscont=(sum -discontInGrivna);

let profit;
profit=(sum/2)-discontInGrivna;
console.log("skidka y % ="+discont);

console.log("suma do oplaty z skidkoi "+sumPaymentvithDiscont.toFixed(2));
console.log("chistiy prybytok = "+profit);
//advanced
let strokaRes = `
Максимальне значення:${maxPrice};
Мінімальне значення:${minPrice};
Сума товарів:${sum};

Сума товарів без копійок:${sumWithoutPenny};
Сума округлена до сотень:${sumToHundreds};
Парне чи не парне число:${isEven};
Решта від 500 грн:${rest};
Середнє значення цін:${averageValue};
Чистий прибуток:${profit};
`;
console.log(strokaRes);

let container=document.querySelector("#stroka");
container.innerHTML=`
<p>Максимальне значення:${maxPrice};</p>
<p>Мінімальне значення:${minPrice};</p>
<p>Сума товарів:${sum};</p>

<p>Сума товарів без копійок:${sumWithoutPenny};</p>
<p>Сума округлена до сотень:${sumToHundreds};</p>
<p>Парне чи не парне число:${isEven};</p>
<p>Решта з 500 грн:${rest};</p>
<p>Середнє значення цін:${averageValue};</p>
<p>Чистий прибуток:${profit};</p>

`;





