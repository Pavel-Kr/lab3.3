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
FillGroups();
