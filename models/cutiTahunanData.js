export class CutiTahunanData {
  constructor(inputValues) {
    this.namaAtasan = inputValues.namaAtasan;
    this.kontak = inputValues.kontak;
    this.tanggalCuti = inputValues.tanggalCuti.toDateString();
    this.tanggalMasuk = inputValues.tanggalMasuk.toDateString();
    this.keterangan = inputValues.keterangan;
    this.status = 'waiting';
    this.id = new Date().toString() + Math.random().toString();
  }
}
