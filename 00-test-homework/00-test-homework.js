let milkPrice = 15.678;
let meatPrice = 123.965;
let breadPrice = 90.2345;


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

let bool;
if(sumWithoutPenny %2 ==0)
	bool=true;
else
	bool=false;
console.log(bool);


let reshta=500-(milkPrice+meatPrice+breadPrice);
console.log("reshta = "+reshta);

let seredneArefmetuchne=(milkPrice+meatPrice+breadPrice)/3;
console.log("seredne 3 tovariv"+seredneArefmetuchne.toFixed(2));

let skidka =Math.floor(Math.random() * 100); 
let skidkaVGrivnah=(sum/100)*skidka;
let sumaDoOplatyzSkidka;
sumaDoOplatyzSkidka=(sum -skidkaVGrivnah);

let chistiyPrybytok;
chistiyPrybytok=(sum/2)-skidkaVGrivnah;
console.log("skidka y % ="+skidka);

console.log("suma do oplaty z skidkoi "+sumaDoOplatyzSkidka.toFixed(2));
console.log("chistiy prybytok = "+chistiyPrybytok);
//advanced
let strokaRes = `
Максимальне значення:${maxPrice};
Мінімальне значення:${minPrice};
Сума товарів:${sum};

Сума товарів без копійок:${sumWithoutPenny};
Сума округлена до сотень:${sumToHundreds};
Парне чи не парне число:${bool};
Решта від 500 грн:${reshta};
Середнє значення цін:${seredneArefmetuchne};
Чистий прибуток:${chistiyPrybytok};
`;
console.log(strokaRes);

let container=document.querySelector("#stroka");
container.innerHTML=`
<p>Максимальне значення:${maxPrice};</p>
<p>Мінімальне значення:${minPrice};</p>
<p>Сума товарів:${sum};</p>

<p>Сума товарів без копійок:${sumWithoutPenny};</p>
<p>Сума округлена до сотень:${sumToHundreds};</p>
<p>Парне чи не парне число:${bool};</p>
<p>Решта з 500 грн:${reshta};</p>
<p>Середнє значення цін:${seredneArefmetuchne};</p>
<p>Чистий прибуток:${chistiyPrybytok};</p>

`;





