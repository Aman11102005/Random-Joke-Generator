let joke = document.querySelector(".joke")
let btn = document.querySelector(".buttonload")

const URL = "https://hindi-jokes-api.onrender.com/jokes?api_key=13614707311bc059a7613c66d106";
const getFact = async () => {
  // console.log("Getting data....");

  let response = await fetch(URL); 
  // console.log(response);

  let data = await response.json() 
//   console.log(data.jokeContent);       
joke.innerText = data.jokeContent
 
};

btn.addEventListener("click",()=>{
  getFact()
   btn.innerHTML=` <i class="fa fa-spinner fa-spin"></i>Loading`
  setTimeout(()=>{
   btn.innerText="New Joke"
  },1500)
   
})

window.addEventListener("load", () => {
  getFact()
});