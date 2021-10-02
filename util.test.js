const { generateText } = require("./util");


test('Should output name and age', () => {
 const text = generateText("Cia", 34);
 expect(text).toBe("Cia (34 years old)")
});


test('Should output data-less text', () => {
 const text = generateText();
 expect(text).toBe("undefined (undefined years old)")
});


test('Should output data-less text', () => {
 const text = generateText("", null);
 expect(text).toBe(" (null years old)")
});