//instructor demo. Modify for our project

const logout = async () => {
  try{
    const response = await fetch('/api/users/logout', {
      method: 'POST',
      // body: {},
      headers: { 'Content-Type': 'application/json' },
    });
  const result = await response.json();
  console.log(result);
    if (response.ok) {
      document.location.replace('/login');
    } else {
      alert(response.statusText);
    }
  }
  catch(err){
    console.log(err);
  }
  };
  
  document.querySelector('#logout').addEventListener('click', logout);
  