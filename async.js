// const sing = async () => {
//   return "LA LA LA LA";
// };

// sing()
//   .then((data) => {
//     throw "PROBLEM ENCOUNTERED";
//     console.log("PROMISE RESOLVED WITH:", data);
//   })
//   .catch((err) => {
//     console.log("OH NO, PROMISE REJECTED!");
//     console.log(err);
//   });


const login = async (username, password) => {
    if(!username || !password) throw 'Missing Credentials'
    if(password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

login('collins',"corgifeetarecute")
.then(msg => {
    console.log("Logged IN")
    console.log(msg)
})
.catch(err => {
    console.log("ERROR!!")
    console.log(err)
})