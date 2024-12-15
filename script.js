const container=document.querySelector(".container")
for(j=0; j<16; j++){
line=document.createElement('div')
for (i=0;i<16;i++){
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
const toColor=document.querySelectorAll(".colored")
toColor.forEach((box)=>{
   box.addEventListener("click",() => {box.style.backgroundColor="black"})
})