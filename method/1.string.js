const nama = "faqih"

// Mengcapital kan
console.log("Bikin string jadi capital", nama.toUpperCase())

// kebalikannya jadi huruf kecil
console.log("Bikin string jadi capital", nama.toLowerCase())



const fullName = "Ramdlan Faqih"
// yang didalam kurung adalah separator atau pemisahnya kalau di method split ()
// memisahkan string berdasarkan separator yang ditentukan pakai split
const namaTerpisah = fullName.split(" ") // ['Ramdlan', 'Faqih']

// menggabungkan lebih dari satu array menjadi string join
const namaTergabung = namaTerpisah.join(" ")
console.log("Kondisi nama tergabung", namaTergabung)

// untuk mengambil huruf sesuai dengan index (charAt)
const ambilHurufPertama = namaTergabung.charAt(0)
const ambilSelainHurufPertama = namaTergabung.slice(1)

const panjangString = namaTergabung.length
console.log("huruf pertamnya adalah", ambilHurufPertama)
console.log("huruf sisanya", ambilSelainHurufPertama)
console.log(panjangString)


console.log("panjang array", namaTerpisah)
console.log("kondisi nama terpisah", namaTerpisah.length)


const motor = "Rx King"
const motorTerpisah = motor.split(" ").toUpperCase() 