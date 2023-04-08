//console.log("Girindra");
//console.log("Dwi");
//console.log("Antara");

//const nama = ["giri","ndra","dwi","antara"];

//for(let i = 0; i < nama.length; i++){
//    console.log(nama[i]);
//};

// try {
//     console.log("Awal Blok Try");
//     console.log("Akhir Blok try");
// } catch (error){
//     console.log("Tidak terjadi error, maka kode ini diabakan");
// }

// try {
//     errorCode;
// } catch (error){
//     console.log("Tidak terjadi error, maka kode ini diabakan");
// }


// try { 
//     errorCode;
// } catch (error){
//     console.log(error.name);
//     console.log(error.message);
//     console.log(error.stack);
// } finally {
//     console.log("Code tetap dieksekusi");
// }


// const json = '{ "name": "Yoda", "age": 20 }';
// console.log(json);

// const user = JSON.parse(json);
// console.log(user.name);
// console.log(user.age);

// let json = '{ "age": 30 }';
 
// try {
//   let user = JSON.parse(json);
 
//   if (!user.name) {
//     throw new SyntaxError("'name' is required.");
//   }
 
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   if (error instanceof SyntaxError) {
//     console.log(`JSON Error: ${error.message}`);
//   } else if (error instanceof ReferenceError) {
//     console.log(error.message);
//   } else {
//     console.log(error.stack);
//   }
// }

// class ValidationError extends Error {
//     constructor(message){
//         super(message);
//         this.name("ValidationError");
//     }
// }

// const validateNumberInput = (a, b, c) => {
//     if (!a === Number){
//         throw new ValidationError("Argumen pertama harus number");
//     }else if (!b === Number){
//         throw new ValidationError("Argumen kedua harus number");
//     }else {
//         throw new ValidationError("Argumen ketiga harus number");
//     }
// }


// console.log('Selamat datang');

// setTimeout(() => {
//     console.log('Terima kasih syudah mampir, silahkan datang kembali');
// }, 3000);

// console.log('Ada yang bisa dibantu?');

// function getUsers(callback){
    
//     setTimeout(() =>{
//         const users = ['john', 'wick', 'abi', 'wan', 'kurasi'];
        
//         callback(users);
//     }, 4000);
// }

// function usersCallback(users){
//     console.log(users);
// }

// getUsers(usersCallback);

function getUsers(isOffline, callback){

    setTimeout(() => {
        const users = ['john', 'wick', 'abi', 'wan', 'kurasi'];

        if(isOffline){
            callback(new Error('cannot retrive users due offline'), null);
            return;
        }

            callback(null, users);
        }, 4000);
    }

function usersCallback(error, users){
    if(error){
        console.log('Proses failed,', error.message);
        return;
    }

    console.log('process succes:', users);
}


getUsers(false, usersCallback);
getUsers(true, usersCallback);

