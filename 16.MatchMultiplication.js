function matchMultiplication(inputStr) {
    inputStr = inputStr.replace(/(-?\d+)\s*\*\s*(-?\d+(\.\d+)?)/g,
        (match, num1, num2)=> Number(num1) * Number(num2));
    console.log(inputStr);
}

matchMultiplication("My bill: 2*2.50 (beer); 2* 1.20 (kepab); -2  * 0.5 (deposit).");
