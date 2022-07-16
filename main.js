let ekleDOM = document.querySelector("#liveToastBtn")
let ulDOM = document.querySelector("#list")
let taskDOM = document.querySelector('#task')




let allList = document.getElementsByTagName("li");
let i;
for (i = 0; i < allList.length; i++) {
  let span = document.createElement("SPAN");
  let txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  allList[i].appendChild(span);
}   

let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
} 



ulDOM.addEventListener ('click', check,  false)
function check(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
      }
}



ekleDOM.addEventListener('click', taskAdd)

function taskAdd(event) {
    event.preventDefault()
    if (taskDOM.value.trim() && taskDOM.value.trim() !=" ") {
        addItem(taskDOM.value)
        taskDOM.value = ""
        $('.success').toast('show')
    }

    else {
        $('.error').toast('show')
    }

    let allList = document.getElementsByTagName("li");
    let i;
    for (i = 0; i < allList.length; i++) {
      let span = document.createElement("SPAN");
      let txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      allList[i].appendChild(span);
    } 

    let close = document.getElementsByClassName("close");
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
      let div = this.parentElement;
      div.style.display = "none";
    }
  } 
}


const addItem = newTask => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = `${newTask}`
    ulDOM.appendChild(liDOM)
}