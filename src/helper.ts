interface LoginCredentials{
    email:string,
    username:string,
    password:string
};

const fetchData=({ password, username}:LoginCredentials)=>{
    let ans=fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          // email,
          username,
          password,
          expiresInMins: 30, // optional, defaults to 60
        }),
      })
      .then(res => res.json())
      .then((res)=>{
        localStorage.setItem('user',JSON.stringify({...res}));

      });
    return ans;
    
}
export default fetchData;
