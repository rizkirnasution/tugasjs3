let api = require("cross-fetch")

let apiFetch = api('https://jsonplaceholder.typicode.com/users')

let ambilData = new Promise((resolve, reject)=>{
    apiFetch.then(res =>{
        if(res.status == 200){
            resolve('sukses')
            return res.json()
        }else if(res.status == 404){
           reject('Not Found')
        }else{
            reject('gagal')
        }
    }).then(value => {
        value.map(item =>{
            console.log(item.name);
        })
    })
})

let getAllData = ()=>{
    ambilData.then(value => {
        console.log(value)
    }).catch(err => {
        console.log(err)
    })
}

getAllData();