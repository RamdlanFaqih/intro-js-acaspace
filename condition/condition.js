let umurNaekMotor = 17;
let udin = 16;

// if else statement
if (udin > umurNaekMotor) {
    console.log("Udin Boleh Bawa Motor")
    // Boleh bikin ktp
} else if (udin === umurNaekMotor) {
    console.log("Umur pas banget, boleh bawa motor")
    // Happy birthday, boleh bikin ktp
} else {
   console.log("Umur nya kurang ") 
//    Tidak boleh ktp
}


let day = 4
// 1 = senin, 2 = selasa, dst.

// switch case statement
switch (day) {
    case 1:
        console.log("senin")
        break
    case 2: 
        console.log("selasa")
        break
    case 3:
        console.log("rabu")
        break;
    default:
        console.log("hari tidak terdefinisi")
}