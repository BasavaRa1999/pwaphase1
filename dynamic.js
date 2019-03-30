function loadJson(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
    if(xhr.readyState=== 4 && xhr.status=="200"){
    callback(xhr.responseText);
    }
  }
  xhr.send(null);
}
loadJson("data.json",function(text){
let data=JSON.parse(text);
console.log(data);
profile(data.profile);
career(data.career);
education(data.education);
skills(data.skills);
})


var left=document.querySelector(".left");
function profile(p){
  var image=document.createElement("img");
  image.src=p.image;
  left.append(image);

var h2=document.createElement("h2");
h2.textContent=p.name;
left.append(h2);
var h3=document.createElement("h2");
h3.textContent=p.desig;
left.append(h3);
var h4=document.createElement("h2");
h4.textContent=p.mobile;
left.append(h4);
var h5=document.createElement("h2");
h5.textContent=p.email;
left.append(h5);
}
var right=document.querySelector(".right");
function career(ca){
  var h1=document.createElement("h2");
  h1.textContent="career objective";
  right.append(h1);
  var hr=document.createElement("hr");
  right.append(hr);
  var info=document.createElement("p");
  info.textContent=ca.info;
  right.append(info);
}
  //education details
function education(edu){
  var h2=document.createElement("h2");
  h2.textContent="Education Details";
  right.append(h2);

  var hr=document.createElement("hr");
  right.append(hr);

var table=document.createElement("table");
table.border="2";
//right.append(table);
var tr1="<tr><th>qualification</th><th>Institute</th><th>percentage</th><th>year of passing</th>";
var tr2=" ";
for(i=0;i<edu.length;i++)
{
  tr2=tr2+"<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].percentage+"</td><td>"+edu[i].year_of_passing+"</td></tr>";
}
table.innerHTML=tr1+tr2;
right.append(table);
}

//skills
function skills(sk){
  var E=document.createElement("h2");
  E.textContent="skills";
  right.append(E);
 var hr=document.createElement("hr");
  right.append(hr);
var ul=document.createElement("ul");
for(var i in sk){
  var li=document.createElement("li");
  li.innerHTML=sk[i].name+":"+sk[i].info;
  ul.append(li);
}
right.append(ul);


}
