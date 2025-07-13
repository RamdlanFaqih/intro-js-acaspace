const namaDepan = "Ramdlan"
const namaBelakang = "Faqih"


const fullstackJavascript = {
    title: "Fullstack Javascript",
    description: "Kursus Fullstack Javascript Intensif",
    instructorName: "Ramdlan Faqih",
    location: "Indonesia",
    skill: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
}


// Kita akan belajar fullstack javascript, dengan instruktur yang bernama Ramdlan Faqih asal dari Indonesia

// Concatenation
console.log("Kita akan belajar" + " " + fullstackJavascript.title + " " + "dengan instruktur yang bernama" + " " + fullstackJavascript.instructorName)


// Template Literals
// console.log(`Kita akan belajar ${fullstackJavascript.title} dengan instruktur yang bernama ${fullstackJavascript.instructorName}`)


const dataUntukEmail = {
    namaProyek: "Pertambangan",
    namaPenerima: "Bos Tambang",
    hari: "Sabtu",
    tanggal: "13 Juli 2025",
    tempat: "Google Meet",
    namaPengirim: "Udin",
    jabatan: "Sekretaris",
    kontak: "08123456789"
}

console.log(dataUntukEmail.namaProyek)

const dataUntukEmailKedua = {
    namaProyek: "Jalan Tol",
    namaPenerima: "Client Tambang",
    hari: "Sabtu",
    tanggal: "13 Juli 2025",
    tempat: "Google Meet",
    namaPengirim: "Udin",
    jabatan: "Sekretaris",
    kontak: "08123456789"
}



// DRY : Don't Repeat Yourself
console.log(`
Subjek: Undangan Rapat Proyek ${dataUntukEmailKedua.namaProyek}
YTH ${dataUntukEmail.namaPenerima}`)

// Subjek: Undangan Rapat Proyek [Nama Proyek]
// Isi:
// Yth. [Nama Penerima],
// Saya harap email ini menjangkau Anda dalam keadaan baik. 
// Saya ingin mengundang Anda untuk menghadiri rapat proyek [Nama Proyek] yang akan diadakan pada:
// Hari/Tanggal: [Hari], [Tanggal]
// Waktu: [Waktu]
// Tempat: [Tempat/Link Google Meet]
// Tujuan rapat ini adalah untuk membahas perkembangan terkini proyek dan langkah selanjutnya. Mohon konfirmasi kehadiran Anda sebelum [Batas waktu konfirmasi]. 
// Terima kasih atas perhatian dan kerja samanya. 
// Hormat saya,
// [Nama Anda]
// [Jabatan/Posisi]
// [Perusahaan]
// [Kontak Anda]