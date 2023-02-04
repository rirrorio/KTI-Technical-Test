function palindromeChecker(inputString) {
    var isPalindrome = false;
    var stringArr = inputString.split('');
    var reversedStringArr = stringArr.reverse();
    var reversedString = reversedStringArr.join('');
    if (inputString === reversedString) {
        isPalindrome = true;
    }
    console.log(inputString, isPalindrome);
}
palindromeChecker("racecar");
palindromeChecker("budi");
palindromeChecker("dad");
palindromeChecker("mobil");
palindromeChecker("deep");
palindromeChecker("reaper");
palindromeChecker("rotator");
