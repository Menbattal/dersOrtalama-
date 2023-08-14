// üniversitede Algoritma Dersinden Aldığımız sonuçlarla geçip geçmediğimizi gösteren basit java script uygulaması 

let vize1 = Number(prompt("Vize 1 Notu girin :"));
let vize2 = Number(prompt("Vize 2 notunu giriniz :"));
let final = Number(prompt("Final notunu giriniz :"));

let average = (vize1*0.3) + (vize2*0.3) + (final*0.4);
if (average>=60 && final>=50){
    alert("Dersten geçtiniz. Tebrikler");
}else{
    alert("Dersten kaldınız, geçmiş olsun");
}
alert("Ders ortalamanız : " + average)