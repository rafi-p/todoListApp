
let i = 0
let j = 0
let rec = []

function addToDo() {
    let listBy = document.getElementById('listBy')
    listBy = listBy.options[listBy.selectedIndex].value
    var nextUpAdd = document.getElementById("next-up")
    var onProgressAdd = document.getElementById("on-progress")
    var doneAdd = document.getElementById("done")
    var inputan = document.getElementById("inputan")
  
    
    if(listBy === 'nextUp') {
        // console.log(namaId)
        let namaIdNext = `similikiti`+i
        nextUpAdd.innerHTML += `<li >${inputan.value} <button type="button" onclick="myJutsu()" id=${namaIdNext}>Delete</button></li>`
        let btnNext = document.getElementById(namaIdNext)
        btnNext.addEventListener("click", myJutsu(btnNext))
        i++
    } else if(listBy === 'onProgress') {
        let namaIdProg = `semelekete`+i
        onProgressAdd.innerHTML += `<li>${inputan.value} <button type="button" onclick="myJutsu()" id="jutsuButtonOnProgress">Delete</button></li>`
        let btnOnProg = document.getElementById(namaIdProg)
        btnOnProg.addEventListener("click", myJutsu(btnOnProg))  
        i++
    } else if(listBy === 'done') {
        let namaIdDone = `somolokoto`+i
        doneAdd.innerHTML +=  `<li>${inputan.value} <button type="button" onclick="myJutsu()" id="jutsuButtonDone">Delete</button></li>`
        let btnDone = document.getElementById(namaIdDone)
        btnDone.addEventListener("click", myJutsu(btnDone))
        i++
    }
}



function myJutsu(lala) {
    // let namaIdNext = `similikiti`+ j
    // let namaIdProg = `semelekete`+ j
    // let namaIdDone = `somolokoto`+ j
    
    // var nextUpDel = document.getElementById(namaIdNext)
    var nextUpDelParent = lala.parentElement

    // var onProgDel = document.getElementById(namaIdProg)
    var onProgDelParent = lala.parentElement

    // var doneDel = document.getElementById(namaIdDone)
    var doneDelParent = lala.parentElement
    // console.log(any)
    // alert('button')

    // if(namaIdNext) {
        nextUpDelParent.style.display = "none"
    // } else if(namaIdProg) {
        onProgDelParent.style.display = "none"
    // } else if(namaIdDone) {
        doneDelParent.style.display = "none"
    // }
    // j++
}

