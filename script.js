
const jokeData = document.querySelector(".jokeDiv");
const nextbtn = document.querySelector("#nextbtn");

const fun = () => {
    fetch("https://icanhazdadjoke.com/slack").then((res) => res.json()).then( (jsonData) => {
        const data = jsonData.attachments[0].fallback;
        // console.log(data);
        jokeData.innerHTML=data;
    })
    .catch(( error ) => {
        console.log(error);
    });

    // jokeData.innerHTML="hi"
}

nextbtn.addEventListener("click",fun);


fun();   
// console.log("its working....!")