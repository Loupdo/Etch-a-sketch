const coloring = () => {
    const toColor=document.querySelectorAll(".colored")
    console.log(toColor)
    toColor.forEach((box)=>{
       box.addEventListener("mouseover",() => {box.style.backgroundColor="black"})
    })
}

const newGrid= (size) => {
    for(j=0; j<size; j++){
        line=document.createElement('div')
        for (i=0;i<size;i++){
            div=document.createElement('div')
            div.classList.add("colored")
            div.style.width="40px"
            div.style.height="40px"
            line.appendChild(div)
            line.style.display="flex"
            line.style.width="fit-content"
        }
    container.appendChild(line)
    }
    coloring()
}

const createGrid = () => {
    container.innerHTML= null
    const numberUser = prompt("enter a number between 1-100")
    if (numberUser <=100 && numberUser > 0){ newGrid(numberUser)}
}

const container=document.querySelector(".container")
const sizeBtn=document.querySelector(".size-btn")

sizeBtn.addEventListener("click", () => createGrid())
newGrid(16)