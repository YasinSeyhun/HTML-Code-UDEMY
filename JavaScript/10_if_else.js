// Koşullu Durumlar ( if-else)

const firstName = "Yasin";
const userName = "yasinseyhun";
const age = 20;
const isStudent = true;
const school = "university";

if (userName == "ysainseyhun") {
    console.log("Merhaba Yasin");
} else {
    console.log("Kullanıcı bulunamadı!");
}


// if (age === 20 ) {
//     console.log("Yaşınız :" + age);
// }


if (isStudent) {
    console.log("Hangi bölümde okuyorsunuz ? : ");
} else {
    console.log("Hangi mesleği yapıyorsunuz ? :")
}


// if (age >= 18) {
//     console.log("Birey ehliyet alabilir.")
// } else {
//     console.log("Ehliyet alamaz.")
// }

if (age >= 18) {
    if (school === "university") {
        console.log("Ehliyet alabilir.");
    } else {
        console.log("Eğitim durumunuz ehliyet almaya uygun değil.");
    }
} else {
    console.log("Yaşınız ehliyet almaya uygun değil.");   
    }

let id = "3243242";
if (typeof id != undefined) {
    console.log("id : " + id);
}else{
    console.log("id bilgisi girilmemiştir.");
}
