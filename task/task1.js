// 1️⃣ Bikin struktur data untuk list handphone
// - Harus mewakili semua tipe data yang sudah dijelaskan:
//   string, number, boolean, null, undefined, array, object
// 80 %
// tambahin boolean, sama digabung jadi sebuah array of object

// 2️⃣ Cek nilai minimal KKM dari 5 data siswa
// - KKM = 75
// - Harus menghasilkan nilai true dan false sebagai hasil pengecekan

// 3️⃣ Perbandingan login (object vs object)
// - Cek apakah data login user (object) sama dengan data akun yang tersimpan (object)


// JSON.Stringify (cara compare 2 object pakai JSON.Stringify)
const obj1 = {
    nama: "faqih",
    password: "Password"
}

const obj2 = {
    nama: "faqih",
    password: "Password"
}

console.log(obj1.nama === obj2.nama)
console.log(obj1.password === obj2.password)