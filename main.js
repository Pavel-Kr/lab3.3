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
var tag=xml.getElementsByTagName('faculty');
for(i=0;i<tag.length;i++){
  document.write(tag.item(i).text);
}
//document.write("алло ебать");
//console.log("бля ну хоть ты живи");
