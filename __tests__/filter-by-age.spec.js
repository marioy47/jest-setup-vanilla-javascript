// __tests__/filter-by-age.spec.js
import FilterByAge from "../src/filter-by-age";

describe("Fiter objects", () => {
  test("It should filter objects with `param` age less than 30", () => {
    const input = [
      { name: "Mario", last: "Yepes", age: 77 },
      { name: "Juan", last: "Ramirez", age: 32 },
      { name: "Consuelo", last: "Cifuentes", age: 22 },
    ];

    const actual = FilterByAge(input);
    const expected = [{ name: "Consuelo", last: "Cifuentes", age: 22 }];

    expect(actual).toEqual(expected);
  });

  test("Should throw an error if an item does not have the `age` param", () => {
    const input = [{}];
    expect(() => FilterByAge(input)).toThrow(`No "age" param in item 0`);
  });
});
