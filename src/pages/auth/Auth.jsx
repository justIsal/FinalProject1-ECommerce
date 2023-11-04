
export const authenticate = async(value) => {
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
    return true
  }
    catch(e){
      console.log(e)
      return false
    }

};
export const isLogin =()=> {
  const dataFromLocalStorage = localStorage.getItem('refreshToken');
  return dataFromLocalStorage ? true : false;
}
export const logout = ()=> { 
  localStorage.removeItem('refreshToken')
  window.location.reload()
};