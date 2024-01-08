// Döngüler (Loops)

// while loop

let i = 0;
while (i < 10) {
  console.log(i);
  i++;
}

i = 10;

while (i < 10) {
  console.log(i);
  i--;
}

// break and continue

i = 0;

while (i < 10) {
  console.log(i);
  if (i == 6) {
    break;
  }
  i++;
}

i = 0;

while (i < 10) {
  if (i == 6) {
    continue;
  }
  console.log(i);
  i++;
}

// do while loop

i = 0;

do {
  console.log(i);
  i++;
} while (i < 10);

// for loop

for (let i = 0; i < 10; i++) {
  console.log(i);
}

for (let i = 0; i < 10; i++) {
  if (i == 3) {
    console.log("Seçilen rakam : " + i);
    break; // seçilen rakamdan sonra döngü bitiyor.
  }
  console.log(i);
}

let toplam = 0;

for (let i = 1; i < 10; i++) {
  toplam += i;
  console.log(toplam);
}

let sonuc = 1;
for (let i = 0; i < 10; i++) {
  sonuc *= i;
  console.log("sonuç : " + sonuc);
}
