const fetchData = async (id) => {
  try {
    //get user info from api
    const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    if (!res.ok) {
      throw new Error("Network response not ok");
    }
    const user = await res.json();
    console.log(user);

    //get user post from api
    const res1 = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}/posts`
    );
    if (!res1.ok) {
      throw new Error("Network response not ok");
    }
    const post = await res1.json();
    console.log(post);

    //this is user details to show in UI
    const userdiv = document.getElementById("user");
    userdiv.innerHTML = `
  
    <h2>User Name: ${user.username}</h2>
    <h3>Email: ${user.email}</h3>
   
    <h4>User Post Details</h4>
    ${post.map(
      (p) =>
        `
      <div style="width: 300px; height: 200px; border:2px solid black;">
        <h5>This is title: ${p.title}</h5> 
        <p>This is body of Post: ${p.body}</p>
        </div>
        `
    )}
    `;
  } catch (err) {
    console.error("Error feftching user data" + err.message);
  }
};

fetchData(2);
