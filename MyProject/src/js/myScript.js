"use strict"

let tip=prompt("Какой тип сайта вам нужен? 0-сайт визитка(200p) 1-корпоротивный сайт(800p) 2-интернет магазин(1000p)");
console.log(tip);

let diz=prompt("Какой дизайн? 0-уникальный(900p) 1-шаблонный(800p) 2-простой(500р)");
console.log(diz);

let verst=prompt("Какая вёрстка? 0-адаптивная(1000р) 1-неадаптивная(300р)");
console.log(verst);

let price=[
    200,
    800,
    1000,
    900,
    800,
    500,
    1000,
    300,  
];

let sroci=[
    "неделя",
    "две недели",
    "месяц",
];

let result="Итог:";
console.log(result);

let sroc=0;

if(tip==2, diz==0, verst==0){
    sroc=sroci[0];
    console.log(sroci[0])
}
else if(tip==0, diz==2, verst==1){
    sroc=sroci[1];
    console.log(sroci[1])
}
else if(tip==0, diz==1, verst==0){
    sroc=sroci[2];
    console.log(sroci[2])
}
else if(tip==1, diz==2){
    sroc=sroci[1];
    console.log(sroci[1])
};

if(tip==0){
    tip = price[0];
    console.log(price[0]);
}
else if(tip==1){
    tip = price[1];
    console.log(price[1]);
}
else if(tip==2){
    tip = price[2];
    console.log(price[2]);
};


if(diz==0){
    diz = price[3];
    console.log(price[3]);
}
else if(diz==1){
     diz = price[4];
    console.log(price[4]);
}
else if(diz==2){
     diz = price[5];
    console.log(price[5]);
};


if(verst==0){
     verst = price[6];
    console.log(price[6]);
}
else if(verst==1){
     verst = price[7];
    console.log(price[7]);
};

let calc=tip+diz+verst;



alert(calc);
console.log(calc);
alert(sroc);

