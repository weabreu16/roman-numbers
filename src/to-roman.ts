

export function toRoman(num: any): string {

  if (typeof num === "string" && !num) return "Invalid input, is empty";

  if (typeof num === "string" && num.includes(" "))
    return "Invalid input, contains spaces";

  if (typeof num === "string" && RegExp("[A-Za-z]").test(num))
    return "Invalid input, contains letters";

  if (typeof num === "string" && RegExp("[^0-9]").test(num))
    return "Invalid input, contains special characters";

  num = +num;

  if (num < 0 || num >= 4000)
    return "Number should be between 1 and 3999";

  if (num >= 1000)
    return "M".repeat(num / 1000) + toRoman(num % 1000);
  else if (num >= 900)
    return "CM" + toRoman(num % 100);
  else if (num >= 500)
    return "D".repeat(num / 500) + toRoman(num % 500);
  else if (num >= 400)
    return "CD" + toRoman(num % 100);
  else if (num >= 100)
    return "C".repeat(num / 100) + toRoman(num % 100);
  else if (num >= 90)
    return "XC" + toRoman(num % 10);
  else if (num >= 50)
    return "L".repeat(num / 50) + toRoman(num % 50);
  else if (num >= 40)
    return "XL" + toRoman(num % 10);
  else if (num >= 10)
    return "X".repeat(num / 10) + toRoman(num % 10);
  else if (num === 9)
    return "IX";
  else if (num >= 5)
    return "V".repeat(num / 5) + toRoman(num % 5);
  else if (num === 4)
    return "IV";

  return "I".repeat(num);
}


