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

// for loop
