const getMonth = (callback) =>{
    setTimeout(() =>{
        let error = false;
        let month = ["Januari", "Februari", 
        "Maret", "April", "Mei", "Juni", "Juli", "Agustus", 
        "September", "Oktober", "November", "Desember"];
    
        if(!error){
            callback(null, month)
        }else{
            callback(new Error("Sorry Data Not Found"), [])
        }
    }, 400);
}

const showAllMonths = (error, months) => {
    if (error) {
      console.log(error.message);
    } else {
      months.map((month) => console.log(month));
    }
  };
  
  getMonth(showAllMonths);