import { toRoman } from '../src/to-roman';

describe("toRoman", () => {
  it("should return XII if valid input as number", () => {
    expect(toRoman(12)).toBe("XII");
  });

  it("should return 'Invalid input, contains spaces' if input contains spaces", () => {
    expect(toRoman("1 2")).toBe("Invalid input, contains spaces");
  });

  it("should return 'Invalid input, contains letters' if input contains letters", () => {
    expect(toRoman("1A2")).toBe("Invalid input, contains letters");
  });

  it("should return 'Invalid input, contains special characters' if input contains special characters", () => {
    expect(toRoman("1?2")).toBe("Invalid input, contains special characters");
  });

  it("should return 'Invalid input, is empty' if input is empty", () => {
    expect(toRoman("")).toBe("Invalid input, is empty");
  });

  it("should return 'Number should be between 1 and 3999' if number is under 1", () => {
    expect(toRoman(-1)).toBe("Number should be between 1 and 3999");
  });

  it("should return 'Number should be between 1 and 3999' if number is over 3999", () => {
    expect(toRoman(4000)).toBe("Number should be between 1 and 3999");
  });

  it("should return “M” when 1000", () => {
    expect(toRoman(1000)).toBe("M");
  });

  it("should return “D” when 500", () => {
    expect(toRoman(500)).toBe("D");
  });

  it("should return “C” when 100", () => {
    expect(toRoman(100)).toBe("C");
  });

  it("should return “L” when 50", () => {
    expect(toRoman(50)).toBe("L");
  });

  it("should return “X” when 10", () => {
    expect(toRoman(10)).toBe("X");
  });

  it("should return “V” when 5", () => {
    expect(toRoman(5)).toBe("V");
  });

  it("should return “I” when 1", () => {
    expect(toRoman(1)).toBe("I");
  });

  it("should return 'MMMDCCCLIII' if receive 3853", () => {
    expect(toRoman(3853)).toBe("MMMDCCCLIII");
  });

  it("should return “CM” when 900", () => {
    expect(toRoman(900)).toBe("CM");
  });

  it("should return “CD” when 400", () => {
    expect(toRoman(400)).toBe("CD");
  });

  it("should return “XC” when 90", () => {
    expect(toRoman(90)).toBe("XC");
  });

  it("should return “XL” when 40", () => {
    expect(toRoman(40)).toBe("XL");
  });

  it("should return “IX” when 9", () => {
    expect(toRoman(9)).toBe("IX");
  });

  it("should return “IV” when 4", () => {
    expect(toRoman(4)).toBe("IV");
  });

  it("should return 'MMMCMXCIX' if receive 3999", () => {
    expect(toRoman(3999)).toBe("MMMCMXCIX");
  });
});


