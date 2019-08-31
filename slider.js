
let slides_parameters=[
    {
        img_url:'images/summer-1.jpg',
        duration: 10,
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
            duration: 10,
        }
    },
    {
        img_url:'images/summer-2.jpg',
        duration: 5,
        title: {
            text: 'The beach',
            color: '#C90',
            bgcolor: '#000',
            halign: 'left',    
            valign: 'top',     
            fontsize: '18px'
        },
        entry: {
            fx: 'fade-in',      
            duration: 5,
        }
    },
    {
        img_url:'images/summer-3.jpg',
        duration: 10,
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
            duration: 10,
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
            fx: 'fade-in',     
            duration: 10,
        }
    },
    {
        img_url:'images/summer-5.jpg',
        duration: 10,
        title: {
            text: 'Tropical Island',
            color: '#C90',
            bgcolor: '#000',
            halign: 'right',    
            valign: 'top',     
            fontsize: '18px'
        },
        entry: {
            fx: 'fade-in',     
            duration: 10,
        }
    }

]


Slider('sliderA',slides_parameters);

function Slider( elementId , configurationObject ){
    let activeElement=document.querySelector('#'+ elementId + ' .slide');
    activeElement.setAttribute("style",`  opacity: 0; visibility:hidden; `);
   
    for(let i=1; i<configurationObject.length; i++) {
        const clonos = activeElement.cloneNode(true);
      

        const activeTitle=document.createElement("span");
        const myText=document.createTextNode(configurationObject[i].title.text);
        activeTitle.append(myText);
        activeTitle.setAttribute("style",` position:absolute; color:${configurationObject[i].title.color}; background-color:${configurationObject[i].title.bgcolor};
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
    
    for(let i=1;i<configurationObject.length;i++){
    
        setTimeout(function (){
         
            let nextElement=activeElement.nextElementSibling;
            if (!nextElement) {
                nextElement = document.querySelector(`#${elementId} div:first-of-type`);
            }
      
            activeElement.setAttribute("style","opacity:0; visibility:hidden; ");
            activeElement=nextElement;
            if (configurationObject[i].entry.fx=="fade-in"){
                activeElement.setAttribute("style",` background-image:url(${configurationObject[i].img_url}); transition:opacity ${configurationObject[i].entry.duration}s; opacity: 1; visibility:visible;`);
            }
            
        }, configurationObject[i-1].duration*1000 );

     
    }
}
