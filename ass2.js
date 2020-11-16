function loadjson(resume,callback)
{
    var xhr=new XMLHttpRequest();
    xhr.overrideMimeType("application/json");;
    xhr.open("GET",'resume.json',true);
    xhr.onreadystatechange=function(){
        if(xhr.readyState===4 && xhr.status=="200")
        {
            callback(xhr.responseText);
        }
    };
    xhr.send();
}
loadjson("resume.json",function(text)
{
    let data=JSON.parse(text);
    console.log(data);
    basic(data.details);
    second(data.objective);
    edu(data.education);
    skill(data.skills);
})

function basic(det)
{
    var child1=document.querySelector(".child1");
    
    var img=document.createElement("img");
    img.src=det.image;
    child1.appendChild(img)

    var name=document.createElement("h3");
    name.textContent=det.name;
    console.log(name);
    child1.appendChild(name);
    
    var mail=document.createElement("h5");
    mail.textContent=det.email;
    console.log(mail);
    child1.appendChild(mail);
}
function second(obj)
{
    var child2=document.querySelector(".child2");
    var info=document.createElement("h5");
    info.textContent=obj.info;
    console.log(info);
    child2.appendChild(info);
}
function edu(educ)
{
    var child2=document.querySelector(".child2");
    var tr=document.createElement("tr");
    tr.textContent=tr.educ;
    console.log(tr)
    child2.appendChild(tr);
}
function skill(s)
{
    var child2=document.querySelector(".child2");
    var skills=document.createElement("p");
    skills.textContent=s.technical;
    console.log(skills);
    child2.appendChild(skills);
}

