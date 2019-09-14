let slides_parameters=[
    {
        img_url:'images/summer-1.jpg',
        duration: 5,
        title: {
            text: 'The sun and the sea',
            color: '#C90',
            bgcolor: '#000',
            halign: 'right',    
            valign: 'top',   
            fontsize: '18px'
        },
        entry: {
            fx: 'fade-in',      
            duration: 5,
        }
    },
    {
        img_url:'images/summer-2.jpg',
        duration: 10,
        title: {
            text: 'The beach',
            color: '#C90',
            bgcolor: '#000',
            halign: 'left',    
            valign: 'top',    
            fontsize: '18px'
        },
        entry: {
            fx: 'toright',     
            duration: 10,
        }
    },
    {
        img_url:'images/summer-3.jpg',
        duration: 5,
        title: {
            text: 'The ocean view',
            color: '#C90',
            bgcolor: '#000',
            halign: 'right',    
            valign: 'top',     
            fontsize: '18px'
        },
        entry: {
            fx: 'fade-in',      
            duration: 5,
        }
    },
    {
        img_url:'images/summer-4.jpg',
        duration: 10,
        title: {
            text: 'waves',
            color: '#C90',
            bgcolor: '#000',
            halign: 'right',   
            valign: 'top',     
            fontsize: '18px'
        },
        entry: {
            fx: 'toright',     
            duration: 10,
        }
    },
    {
        img_url:'images/summer-5.jpg',
        duration: 5,
        title: {
            text: 'Tropical Island',
            color: '#C90',
            bgcolor: '#000',
            halign: 'right',    
            valign: 'top',    
            fontsize: '18px'
        },
        entry: {
            fx: 'toright',     
            duration: 5,
        }
    }

]


Slider('sliderA',slides_parameters);

function Slider( elementId , configurationObject ){
    document.body.setAttribute("style","overflow:hidden;");
    let activeElement=document.querySelector('#'+ elementId + ' .slide');
   
    for(let i=1; i<configurationObject.length; i++) {
        const clonos = activeElement.cloneNode(true);

        const activeTitle=document.createElement("span");
        const myText=document.createTextNode(configurationObject[i].title.text);
        activeTitle.append(myText);
        activeTitle.setAttribute("style",`position:absolute; color:${configurationObject[i].title.color}; background-color:${configurationObject[i].title.bgcolor};
         ${configurationObject[i].title.halign}:10px;
         ${configurationObject[i].title.valign}:10px; font-size:${configurationObject[i].title.fontsize};`);
        clonos.appendChild(activeTitle);
        
        document.getElementById(elementId).append(clonos);
    }

    const activeTitle=document.createElement("span");
    const myText=document.createTextNode(configurationObject[0].title.text);
    activeTitle.append(myText);
    activeTitle.setAttribute("style",` position:absolute; color:${configurationObject[0].title.color}; background-color:${configurationObject[0].title.bgcolor};
     ${configurationObject[0].title.halign}:10px; ${configurationObject[0].title.valign}:10px; font-size:${configurationObject[0].title.fontsize}; `);
     activeElement.appendChild(activeTitle);
   
  
    if (configurationObject[0].entry.fx=='fade-in'){
        activeElement.setAttribute("style",`background-image:url(${configurationObject[0].img_url}); transition:opacity ${configurationObject[0].entry.duration}s; opacity: 1; visibility:visible;` );
    }
 
    myIndex=0;

    delay();

   function delay(){
        var i;  
        var x = document.getElementsByClassName("slide");
         for (i = 0; i < x.length; i++) {
             x[i].setAttribute("style","opacity: 0; visibility:hidden; left:-256px;"); 
           }
        if (myIndex == x.length) {myIndex = 0;} 
        var dur=configurationObject[myIndex].duration;
        let prev;
        if(myIndex-1<0)
            prev=x.length-1;
        else prev=myIndex-1;
        
        if(configurationObject[myIndex].entry.fx=="fade-in"){
           
            x[prev].setAttribute("style",` background-image:url(${configurationObject[prev].img_url}); opacity: 1; visibility:visible; left:256px;`); 
            x[prev].setAttribute("style",` background-image:url(${configurationObject[prev].img_url});
            transition:opacity ${configurationObject[myIndex].entry.duration}s ease-in; opacity: 0; visibility:visible; left:256px;`); 
            x[myIndex].setAttribute("style",` background-image:url(${configurationObject[myIndex].img_url}); 
            transition:opacity ${configurationObject[myIndex].entry.duration}s; opacity: 1; visibility:visible; left:256px; `); 

        }else if (configurationObject[myIndex].entry.fx=="toright"){
            x[prev].setAttribute("style",` background-image:url(${configurationObject[prev].img_url}); opacity: 1; visibility:visible; left:256px;`); 
            x[prev].setAttribute("style",` background-image:url(${configurationObject[prev].img_url});
            transition:left ${configurationObject[myIndex].entry.duration}s, opacity ${configurationObject[myIndex].entry.duration}s ease-in; opacity: 0; visibility:visible; left:768px;`); 
            x[myIndex].setAttribute("style",` background-image:url(${configurationObject[myIndex].img_url}); 
            transition:left ${configurationObject[myIndex].entry.duration}s, opacity ${configurationObject[myIndex].entry.duration}s ease-out; opacity: 1; visibility:visible; left:256px;`); 
        }
        myIndex++;
        setTimeout(delay,dur*1000);    

    
    }
        
    
     
    
}