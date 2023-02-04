var output = "";
for (var i = 1; i <= 100; i++) {
    output = "".concat(i);
    if (i % 3 == 0 && i % 5 === 0) {
        output = "".concat(i, " fizzbuzz");
    }
    else if (i % 3 === 0) {
        output = "".concat(i, " fizz");
    }
    else if (i % 5 === 0) {
        output = "".concat(i, " buzz");
    }
    console.log(output);
}
