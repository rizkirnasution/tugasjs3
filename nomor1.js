const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const dataDay = ["senin", "selasa", "rabu", "kamis", "jumat"];
        let cek = dataDay.find((item) => {
          return item.toLowerCase() === day.toLowerCase();
        });
  
        if (cek) {
          resolve(cek);
        } else {
          reject(new Error("Hari ini bukan hari kerja"));
        }
      }, 3000);
    });
  };
  
  // then-catch
  cekHariKerja("senin")
    // Kode then akan berjalan ketika promise mengembalikan resolve
    .then((result) => console.log(`${result} adalah hari kerja`))
    // Kode catch akan berjalan ketika promise mengembalikan reject
    .catch((error) => console.log(error.message));
  
  // try-catch
  const cekHari = async (day) => {
    // Kode try akan menguji apakah promise yang berada di dalam bloknya mengembalikan resolve atau reject.
    // Jika promise mereturn resolve, maka catch tidak akan dijalankan.
    // Jika promise mereturn reject maka semua kode di dalam try akan diskip, dan catch akan berjalan.
    try {
      console.log(await cekHariKerja(day));
    } catch (error) {
      console.log(error.message);
    }
  };
  cekHari("minggu");
  cekHari("senin");