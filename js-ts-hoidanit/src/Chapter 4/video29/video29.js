console.log("Video 29");
// BREAK
for (let i = 1; i < 10; i++) {
    console.log("i= ", i);
    if (i === 5) { // ===: xem lại video 20
        break;
    }
}

// CONTINUE
console.log("=======================");
for (let i = 1; i < 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log("i= ", i);
}