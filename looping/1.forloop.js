// dasar for loop
// 1. initialize / inisialisasi
// 2. condition
// 3. counter (increment atau decrement)
for (let i = 3; i <= 9; i++) {
  console.log(i);
  // apakah i kurang dari 9?
  // kalau kurang i++ akan berjalan, lalu kode jalan lagi dari atas
}

// const hargaBarang = [4000, 1000]

// let total = 0
// iterasi harga barang
for (let i = 0; i < hargaBarang.length; i++) {
  if (i !== 2) {
    total += hargaBarang[i];
  } else {
    console.log("index ke 2 tidak boleh masuk");
  }
}

// console.log("total harga keseluruhan", total)
// kondisi didalam sebuah looping
for (let i = 1; i <= 9; i++) {
  if (i % 2 === 0) {
    console.log("ini adalah bilangan genap" + " " + i);
  } else {
    console.log("ini adalah bilangan ganjil" + " " + i);
  }
}
