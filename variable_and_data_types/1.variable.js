// --- VAR ---
var name = "Faqih";
console.log(name); // "Faqih"

// reassign (mengganti nilai)
name = "Ramdlan";
console.log(name); // "Ramdlan"

// redeclare (deklarasi ulang, diperbolehkan)
var name = "Dlan";
var test = "Tes";
console.log(name); // "Dlan"

// --- LET ---
let age = 25;
console.log(age); // 25

// reassign (mengganti nilai, diperbolehkan)
age = 26;
console.log(age); // 26

// redeclare (TIDAK diperbolehkan, akan error)
// let age = 27; // ❌ SyntaxError: Identifier 'age' has already been declared

// --- CONST ---
const country = "Indonesia";
console.log(country); // "Indonesia"

// reassign (TIDAK diperbolehkan, akan error)
// country = "Japan"; // ❌ TypeError: Assignment to constant variable.

// redeclare (TIDAK diperbolehkan, akan error)
// const country = "Malaysia"; // ❌ SyntaxError: Identifier 'country' has already been declared

// Namun, jika const berupa object atau array, isinya masih bisa diubah
const person = { name: "Faqih" };
person.name = "Ramdlan"; // ✅
console.log(person); // { name: "Ramdlan" }
