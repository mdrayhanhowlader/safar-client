// import { useEffect, useState } from "react";


// const useToken = email => {
//     const [token, setToken] = useState('');
//     useEffect(() => {
//         if(email){
//             fetch(`localhost:8080/jwt?email=${email}`)
//             .then(res => res.json())
//             .then(data => {
//                 if(data.accessToken){
//                     localStorage.getItem('accessToken', data.accessToken);
//                     setToken(data.accessToken)
//                 }
//             })
//         }
//     }, [email]);

//     return [token]
// }

// export default useToken;