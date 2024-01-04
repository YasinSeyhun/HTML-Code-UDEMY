/* OPERATÖRLER */

let veri;
const a  = 20 ;
const b = 10 ;
const c = 5;
let d = 3;

/* 1. Aritmetik Operatörler */

veri = a+b;
veri = a-b;
veri = a*b;
veri = a/b;
veri = a%b;
veri = d++; /* a ve b sabit olduğu için artamaz */
veri = ++d;
veri = d--;
veri = --d;

/* 2. Atama Operatörleri */

veri = a; 
veri += a;  //veri = veri + a;
veri -= a;  //veri = veri - a;
veri *= a;  //veri = veri * a;
veri /= a;  //veri = veri / a;
veri %= a;  //veri = veri % a;

/* 3. Karşılaştırma Operatörleri */

veri = a == b; // birbirine eşit mi ?
veri = b == c; 
veri = 5 ==="5"; //birbirine tür olarak eşit mi ?
veri = a!= b;
veri = a!==b;
veri = a>b;
veri = b<c;
veri = 5 >= 5;
veri = b <= c;

/* 4. Mantıksal Operatörler */

veri = (a>b) && (a>c);
veri = (b>a) || (a>c);
veri = !(a>b);





console.log("a+b : ", veri);
console.log(typeof veri);