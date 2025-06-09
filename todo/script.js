document.querySelector("#sub").addEventListener("click", (e) => {
    let title = document.getElementById("title").value
    let dis = document.getElementById("dis").value
    let time = document.getElementById("time").value
    let Priority = document.getElementById("Priority").value
    e.preventDefault()


    // 
    
    let id = 1
    let idp = document.createElement("p")
    idp.textContent=id


    
    let id_con = document.createElement("div")
    id_con.appendChild(idp)
    id_con.className="id-con"
    
    // 

    let titlep = document.createElement("p")
    titlep.textContent=title


    let title_con = document.createElement("div")
    title_con.appendChild(titlep)
    title_con.className="title-con"

    // 



    let disp = document.createElement("p")
    disp.textContent=dis


    let dis_con = document.createElement("div")
    dis_con.appendChild(disp)
    dis_con.className="dis-con"

    // 

    let timep = document.createElement("p")
    timep.textContent=time

    let time_con = document.createElement("div")
    time_con.appendChild(timep)
    time_con.className="time-con"

    // 

    let Priorityp = document.createElement("p")
    Priorityp.textContent=Priority


    let Priority_con = document.createElement("div")
    Priority_con.appendChild(Priorityp)
    Priority_con.className="Priority-con"

    //
    
    let delbtn = document.createElement("button")
    delbtn.textContent="delet"


    let delbtn_con = document.createElement("div")
    delbtn_con.appendChild(delbtn)
    delbtn_con.className="delbtn-con"
    delbtn.addEventListener("click",()=>{
        delbtn.parentElement.parentElement.remove()
    })

    //

    let li = document.createElement("li")
    li.className="li-con"
    li.appendChild(id_con)
    li.appendChild(title_con)
    li.appendChild(dis_con)
    li.appendChild(time_con)
    li.appendChild(Priority_con)
    li.appendChild(delbtn_con)


    // 

    document.querySelector("#ul").appendChild(li)
     
})