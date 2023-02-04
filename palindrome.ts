function palindromeChecker(inputString:string){
    
    let isPalindrome = false
    const stringArr = inputString.split('')

    const reversedStringArr = stringArr.reverse()

    const reversedString = reversedStringArr.join('')

    if(inputString===reversedString){
        isPalindrome=true
    }

    console.log(inputString, isPalindrome);
    
}

palindromeChecker("racecar") 
palindromeChecker("budi")
palindromeChecker("dad")
palindromeChecker("mobil")
palindromeChecker("deep")
palindromeChecker("reaper")
palindromeChecker("rotator")
