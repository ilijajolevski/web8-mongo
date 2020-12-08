function validateForm() {
    var x = document.forms["userForm"]["uname"].value;
    var y = document.forms["userForm"]["pass"].value;
    
    if (x == "" || y == "") {
      alert("username and password must be filled out");
      return false;
    }
   
    const data = { username: x , password: y};

    fetch('users', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });

  }

  