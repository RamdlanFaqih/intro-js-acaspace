// parent class
class ProductHandphone {
  constructor(name, price, stock, voucher) {
    this.name = name;
    this._price = price;
    this.stock = stock;
    this.voucher = voucher;
  }

  //private
  #voucherYangBenar = "#ABCD";
  static simulasiHarga(harga, stok) {
    return harga * stok;
  }

  getSecretCode() {
    console.log(`Secret code produk ini adalah: ${this.#voucherYangBenar}`);
  }

  get price() {
    const tax = this._price * 0.11;
    const hargaDitambahPajak = this._price + tax
    let total
    if (this.voucher === this.#voucherYangBenar) {
        total = hargaDitambahPajak - 5000
    } else {
        total = hargaDitambahPajak;
    }
    return total
  }

  set price(newPrice) {
    if (newPrice < 0) {
      console.log("Tidak boleh minus");
    } else {
      this._price = newPrice;
    }
  }

  showDetail() {
    console.log(
      `${this.name}: harga Rp.${this.price} (${this.stock} stok tersedia)`
    );
  }

  showTotalSemua() {
    console.log("total semua barang:", this.price * this.stock);
  }

  showBeliTiga() {
    console.log("kalo beli tiga berarti", this.price * 3);
  }

  showBeliSesuaiKemauan(berapa) {
    console.log(`saya mau beli ${berapa}`, this.price * berapa);
  }
}

const samsungNote = new ProductHandphone("samsung note", 15000, 15);
samsungNote.getSecretCode();

// DRY Don't repeat yourself
// child
class ProductHandphoneDiscount extends ProductHandphone {
  constructor(name, price, stock, discount, voucher) {
    super(name, price, stock, voucher);
    this.discount = discount;
  }

  get price() {
    const hargaAwal = super.price;
    const discountAmount = hargaAwal * this.discount;
    const totalHargaSetelahDiscount = hargaAwal - discountAmount;
    return totalHargaSetelahDiscount;
  }

    getSecretCode() {
    console.log(`Secret code produk ini adalah`);
  }
}

class ProductFlashSale extends ProductHandphone {
  constructor(name, price, stock, discount) {
    super(name, price, stock);
    this.discount = discount;
  }

  get price() {
    // rumus flash sale
  }
}

const samsungGalaxy = new ProductHandphone("samsung", 100000, 15, '#ABCD');
// console.log(samsungGalaxy.showDetail());



const samsungGalaxy11 = new ProductHandphoneDiscount("samsung", 100000, 15, 0.2, '#ABCD' );
samsungGalaxy11.getSecretCode();
console.log(samsungGalaxy.name);
// console.log("cek harga", ProductHandphone.simulasiHarga(15000, 10));

// samsungGalaxy.showDetail()
// samsungGalaxy.showTotalSemua()
// samsungGalaxy.showBeliTiga()
// samsungGalaxy.showBeliSesuaiKemauan(5)
