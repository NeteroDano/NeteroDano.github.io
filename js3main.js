// localStorage.clear() 
const segment3 = document.querySelector(".item3")
const segment4 = document.querySelector(".item4")
const segment5 = document.querySelector(".item5")
const segment6 = document.querySelector(".item6")


const createForm = () => {
    const listForm = document.createElement("form")

    listForm.setAttribute("class","listform")

    const record = document.createElement("input")
    record.setAttribute("class","inner")
    listForm.appendChild(record)

    const add = document.createElement("input")
    add.setAttribute("value","Add")
    add.setAttribute("class","pusher")
    add.setAttribute("type","button")
    const save = document.createElement("input")
    save.setAttribute("value","Save")
    save.setAttribute("class","saver")
    save.setAttribute("type","button")
    listForm.appendChild(add)
    listForm.appendChild(save)
    add.addEventListener("click", (e) => {
        let data = e.target.parentElement.parentElement.querySelector(".list")
        if(!data) {
            data = document.createElement("ul")
            data.setAttribute("class", "list")
            e.target.parentElement.parentElement.appendChild(data)
        }

        addRecord(record.value, data, counter)
        counter++
    })

    save.addEventListener("click", (e) => {
        let records = listForm.parentElement.querySelectorAll(".list span")
        records = Array.from(records)
        records = records.map(e => e.innerHTML)
        localStorage.setItem("seg " + listForm.parentElement.className, records.join(";"))
    })

    return listForm
}


let out = document.createElement("p", 'class="output"')

let isShown = false

const button = document.querySelector("button.execute")

const button2 = document.querySelector("input.count")
const inner = document.querySelector(".argument")
const form = document.querySelector(".max")
const radio = document.querySelector("input[value=bold]")
const radio2 = document.querySelector("input[value=thin]")
const cookie = document.cookie.split(";")

let counter = 0
const exist = []

// Задание 1
const blockX = document.getElementById('p1');
const blockY = document.getElementById('p2');

function swapBlockInfo (block1, block2) {
    let tmp = block2.textContent
    block2.textContent = block1.textContent
    block1.textContent = tmp
}

blockX.onclick = () => swapBlockInfo(blockX,blockY)
blockY.onclick = () => swapBlockInfo(blockX,blockY)


// Задание 2
function area1 (a,h){
	form1.output1.value=(a.value*h.value)/2;
}

// Задание 3
button2.addEventListener("click", () => {
    const numbers = inner.value.split(" ")
    let max = parseInt(numbers[0])
    let count = 0
    for (let i = 0; i <= numbers.length; i++) {
        
        if(parseInt(numbers[i]) > max){
            count = 1
            max = parseInt(numbers[i])
            continue
        }
        
        if(parseInt(numbers[i]) == max) {
            count++
        }

    }
    alert(count)
    document.cookie = "count=" + count
})

for (let i = 0;i<cookie.length; i++) {
    
    if (cookie[i].split("=")[0].trim() == "count") {
        if(cookie[i].split("=")[1] != "0") {
            form.setAttribute("style", "display:none")
            const save = confirm(cookie[i] + ". Видалити результат?")
            if(!save) {
                alert("У вас знайдені куки, перезавантажте сторінку")
            }
            else {
                document.cookie = "count=0"
                window.location.reload()
            }
        }
    }
}

// Задание 4
document.getElementsByTagName('body')[0].onload = () => {

    document.getElementById('six').style.fontWeight = localStorage.getItem("fontWeight")
    document.getElementById("checker").checked = (localStorage.getItem("radio") === 'true' )

    const cssStyles = localStorage.getItem('CSS-Styles')
    if (cssStyles === null) {
        localStorage.setItem('CSS-Styles','')
        return
    }
    const styles = cssStyles.split('$')
    for (let counter = 0; counter < styles.length; counter++) {
        if (styles[counter] === "null" || styles[counter].length < 2) {
            continue
        }
        const arr = styles[counter].split(';')
        const id =  arr[0]
        const style =  arr[1]
        const setting =  arr[2]
        addCssSetting(id,style,setting)
        alert(style)
    }
};

document.getElementById("save").onclick = () => {
   if (document.getElementById("checker").checked) {
       localStorage.setItem("fontWeight", 'bold');
       localStorage.setItem("radio", 'true');
       document.getElementById('six').style.fontWeight = 'bold'
    }
    else {
       document.getElementById('six').style.fontWeight = 'normal'
       localStorage.setItem("fontWeight", 'normal');
       localStorage.setItem("radio", 'false');
    }
}

document.getElementById("numbers").addEventListener('focus', event => {
    document.getElementById('six').style.fontWeight = 'bold'
} )

/*
// Задание 5
let newForm = document.createElement('form')
newForm.innerHTML =
    '<br> String: <input id="string_text"> <br>'+
    '<button id="save" type="button">Apply</button>'
let table = document.createElement('table')
document.getElementById('three').append(table)

let honka = document.getElementById('honka');
honka.onclick = () => document.getElementById('two').append(newForm)

newForm[1].onclick = () => {
    const textString = newForm[0].value;
    addField(textString)
}

index = 0
function addField(textString) {
    let row = table.insertRow(index)
    let cell = row.insertCell(0)

    let textField = document.createTextNode(textString)
    cell.appendChild(textField)

    let saveButton = document.createElement('button')
    cell.appendChild(saveButton)
    saveButton.textContent = 'Save'
    saveButton.style.marginTop = '5px'
    saveButton.onclick = () => {
        const hist = '$'+ textString
        let dumpy = localStorage.getItem('text') + hist
        localStorage.setItem('text',dumpy);
    }
    index++
}
*/
