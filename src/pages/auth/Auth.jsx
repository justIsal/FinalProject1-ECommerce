const userAdmin = {
  "email": "admin@bukapedia.com",
  "username": "userAdmin",
  "password": "admin123",
  "role": "admin"
}
export const authenticate = async(value) => {
  const { username,password } = value;
  if (userAdmin.username==username && userAdmin.password==password) {
    localStorage.setItem('admin',JSON.stringify({name:userAdmin.name,email:userAdmin.email}));
    window.location.href="/admin"
    return true
  } else {
    try{  
      const response = await fetch('https://fakestoreapi.com/auth/login',{
            method:'POST',
            body:JSON.stringify(value),
            headers: {
              'Content-Type': 'application/json'
            }
      })
      const data = await response.json()
      localStorage.setItem('refreshToken', JSON.stringify(data.token));
      window.location.href="/"
      return true
    }
      catch(e){
        console.log(e)
        return false
      }
  }

};
// export const authenticateAdmin = (value)=> {
//   const { username,password } = value;
//   if(userAdmin.username==username && userAdmin.password==password) {
//     localStorage.setItem('admin',JSON.stringify({name:userAdmin.name,email:userAdmin.email}));
//     return true
//   }
// }
export const isLogin =()=> {
  const dataFromLocalStorage = localStorage.getItem('refreshToken');
  return dataFromLocalStorage ? true : false;
}
export const isLoginAdmin =()=> {
  const dataFromLocalStorage = localStorage.getItem('admin');
  return dataFromLocalStorage ? true : false;
}

export const logout = ()=> { 
  localStorage.removeItem('refreshToken')
  window.location.reload()
};
export const logoutAdmin = ()=> { 
  localStorage.removeItem('admin')
  window.location.reload()
};