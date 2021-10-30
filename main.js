function getXMLDocument(url)
{
    let xml;
    if(window.XMLHttpRequest)
    {
        xml=new window.XMLHttpRequest();
        xml.open("GET", url, false);
        xml.send("");
        return xml.responseXML;
    }
    else
        if(window.ActiveXObject)
        {
            xml=new ActiveXObject("Microsoft.XMLDOM");
            xml.async=false;
            xml.load(url);
            return xml;
        }
        else
        {
            alert("Загрузка XML не поддерживается браузером");
            return null;
        }
}
var xml=getXMLDocument("main.xml");
var groups=xml.getElementsByTagName('group')
function FillGroups(){
  let select=document.getElementById('group');
  for(let i=0;i<groups.length;i++){
    let group=groups[i].getElementsByTagName('name')[0].innerHTML;
    let option=document.createElement('option');
    option.innerHTML=group;
    option.value=group;
    select.append(option);
  }
}
function setFIO(group){
  let select=document.getElementById('FIO');
  while(select.hasChildNodes()){
    select.removeChild(select.firstChild);
  }
  for(let i=0;i<groups.length;i++){
    console.log(groups[i].getElementsByTagName("name")[0].innerHTML);
    if(groups[i].getElementsByTagName("name")[0].innerHTML==group){
      students=groups[i].getElementsByTagName("student");
      for(let j=0;j<students.length;j++){
        let option=document.createElement('option');
        let fio=students[j].getElementsByTagName("FIO")[0].innerHTML;
        option.innerHTML=fio;
        option.value=fio;
        select.append(option);
      }
      break;
    }
  }
}
function setFacAndCourse(group){
  let faculty=document.getElementById('form').faculty;
  let course=document.getElementById('form').course;
  for(let i=0;i<groups.length;i++){
    if(groups[i].getElementsByTagName("name")[0].innerHTML==group){
      faculty.value=groups[i].getElementsByTagName("faculty")[0].innerHTML;
      course.value=groups[i].getElementsByTagName("course")[0].innerHTML;
      break;
    }
  }
}
function fillLessons(group){
  let lessons=document.getElementsByClassName('lesson');
  for(let i=0;i<groups.length;i++){
    if(groups[i].getElementsByTagName("name")[0].innerHTML==group){
      let xmlLessons=groups[i].getElementsByTagName("lesson");
      for(let j=0;j<lessons.length;j++){
        lessons[j].innerHTML=xmlLessons[j].innerHTML;
      }
      break;
    }
  }
}
function fillMarks(group, fio){
  for(let i=0;i<groups.length;i++){
    if(groups[i].getElementsByTagName("name")[0].innerHTML==group){
      let students=groups[i].getElementsByTagName("student");
      for(let j=0;j<students.length;j++){
        if(students[j].getElementsByTagName("FIO")[0].innerHTML==fio){
          let lessons=document.getElementsByClassName('row');
          let xmlMarks=students[j].getElementsByTagName("mark");
          for(let k=0;k<lessons.length;k++){
            let marks=lessons[k].getElementsByClassName('mark');
            console.log("k="+k+","+Number(xmlMarks[k].innerHTML));
            for(let z=0;z<3;z++){
              if(marks[z].hasChildNodes()) marks[z].removeChild(marks[z].firstChild);
              let input=document.createElement('input');
              input.setAttribute('type','radio');
              input.setAttribute('name',"row"+k);
              if(z==Number(xmlMarks[k].innerHTML)) input.checked=true;
              marks[z].append(input);
            }
          }
          break;
        }
      }
      break;
    }
  }
}
function Update(group){
  setFIO(group);
  setFacAndCourse(group);
  fillLessons(group);
  let select=document.getElementById('FIO');
  let fio=select.options[select.selectedIndex].value;
  fillMarks(group,fio);
}
function UpdateMarks(fio){
  let select=document.getElementById('group');
  let group=select.options[select.selectedIndex].value;
  fillMarks(group,fio);
}
function calculateMid(){
  let lessons=document.getElementsByClassName('row');
  let sum=0;
  for(let i=0;i<lessons.length;i++){
    let marks=lessons[i].getElementsByClassName('mark');
    for(let j=0;j<3;j++){
      if(mark[j].checked) sum+=j;
    }
  }
  sum/=lessons.length;
  let mid=document.getElementById('mid');
  mid.innerHTML="Средний балл по контрольному сроку равен "+sum;
}
function cancel(){
  let mid=document.getElementById('mid');
  mid.innerHTML="Средний балл по контрольному сроку";
}
FillGroups();
