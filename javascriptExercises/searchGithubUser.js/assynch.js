
const acessToken =''


const myMain = document.createElement('main')
document.body.appendChild(myMain)

const myDiv = document.createElement('div')
myMain.appendChild(myDiv)


const header = document.createElement('h1')
header.textContent = 'GITHUB SEARCH TOOL'
myDiv.appendChild(header)

const nameinput = document.createElement("input");
myDiv.appendChild(nameinput);
nameinput.placeholder = 'Enter user_Name'
nameinput.style.borderRadius = '1ch'
nameinput.style.height = '30px'

const btn = document.createElement("button")
btn.textContent = "Search"
myDiv.appendChild(btn)
btn.style.width = "150px"
btn.style.height = '25px'




const fetch_apis = async () => {
    let uservalue = nameinput.value;
    console.log(uservalue);

    const data = await fetch(
        `https://api.github.com/users/${uservalue}`
    ).then((res) =>
        res.json().then((res) => {
            const name = document.createElement("p");
            document.body.appendChild(name);
            name.textContent = res.login;

            name.style.fontSize = "15px";

            


            const image = document.createElement('img')
            image.src = res.avatar_url
            document.body.appendChild(image)


            


            const location = document.createElement('p');
            document.body.appendChild(location); 
            location.textContent = res.location;

            const repos = document.createElement('p');
            document.body.appendChild(repos); 
            repos.textContent =res.public_repos




            const bio = document.createElement('p')
            document.body.appendChild(bio)
            bio.textContent = res.bio;


        })
    );
};
btn.addEventListener("click", fetch_apis);

fetch_apis();