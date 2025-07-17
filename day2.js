const fetchData = async (id) => {
  const userdiv = document.getElementById("user");
  const error = document.getElementById("error");
  const load = document.getElementById("load");
  try {
    //initialy empty the content and give loading indicator
    load.textContent = "Loading.......";
    userdiv.innerHTML = "";
    error.textContent=""

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
    load.textContent = "";
    error.textContent = "";
    userdiv.innerHTML = `
<div style="display:flex; justify-content:center">
  <div style="text-align:center; width:400px; height:100px; background-color:#596e79; padding:10px;color:white">
  <h2>User Name: ${user.username}</h2>
  <h3>Email: ${user.email}</h3>
  </div>
  </div>
  <h4 style="background-color:gray;padding:15px; border:1px solid black">User Post Details</h4>
  <div style="display: flex; flex-wrap: wrap; gap: 15px; width:100% ;justify-content:space-around">
    ${post
      .map(
        (p) => `
        <div style="flex: 0 0 300px; height: 200px; border: 2px solid #007BFF; border-radius: 8px; padding: 10px; background-color: #f0f8ff;">
          <h5 style="margin: 0 0 8px;">This is title: ${p.title}</h5> 
          <p style="margin: 0;">This is body of Post: ${p.body}</p>
        </div>
      `
      )
      .join("")}
  </div>
`;
  } catch (err) {
    //if error occur set error message and loading state will empty
    console.error("Error feftching user data " + err.message);
    error.textContent = err.message;
    load.textContent = "";
  }
};

//triiger fetch function when click button
const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const input = document.getElementById("input").value;
  if(!input) return alert("Enter number")
  fetchData(input);
});
