    //Fetching Api of Book Data- 
     fetch('https://www.googleapis.com/books/v1/volumes?q=percy+jackson')
    .then((apidata)=>{
     console.log(apidata);
     return apidata.json();
     })
    .then((actualdata)=>{
     console.log(actualdata);
     let count=0;

     //Accessing all the HTML elements-
     let Main=document.querySelector("#main");
     let Delete=document.querySelector("#btn2");
     let Status=document.querySelector("#status");
     
     let data = JSON.parse(localStorage.getItem('data'));
     console.log(data);
     
     //5.Display of search history on a separate page-

     let val=0; //for numbering the histories!
     data.forEach((item)=> {
         let Info=document.createElement('div');     //Info show the date and time at which history searched.
         Info.innerHTML=`Your Previous Search : &nbsp 
         ${val}. 
         ${data[val].search}&nbsp searched  on:&nbsp
         ${data[val].date} ` 
         var searchvalue=data[val].search;
     
     //Styling the search history box and text-
         Info.style.border="2px solid white";
         Info.style.marginTop="25px";
         Info.style.fontStretch="25px";
         Info.style.width="1340px";
         Info.style.flexDirection="flex";
         Info.style.justifyContent="center";
         Info.style.borderColor="green";
         Info.style.fontSize="18px";
         Info.style.textAlign="center";
         Info.style.height="25px";
     
       Main.append(Info); //append the info data showing on screen.                   
     

             Info.addEventListener("click",()=>{
                Status.innerHTML="";
              for(let j=0;j<10;j++)
  
         {
          let SearchInfo=actualdata.items[j];
         if(SearchInfo.volumeInfo.authors[0]==searchvalue||
            SearchInfo.volumeInfo.title==searchvalue)
           {

           //1.Search form with input field for  book Author name- (i.e Rick Riordan, Narnia)
           //2.Display of book data on the page-
            let Info=document.createElement('div');
      
            Info.innerHTML=`<img src= ${SearchInfo.volumeInfo.imageLinks.thumbnail} 
                             height="200" 
                             width="220" 
                             alt="book" 
                             border="1px solid black" 
                             box-sizing="border-box"  
                             justifyContent="space-evenly" 
                            /> 
      <br>
      <br>
      
      Title: ${SearchInfo.volumeInfo.title}
      <br>
      <br>
      Author: ${SearchInfo.volumeInfo.authors[0]} <br>`

     //Styling the book data box- 
      Info.style.height="360px";
      Info.style.width="222px";
      Info.style.fontStyle="Italic ";
      Info.style.fontSize="15px";
      Info.style.marginTop="16px";
      Info.style.borderStyle="solid";
      Info.style.borderRadius="2px";
      Info.style.borderColor="black"
      Info.style.display="block";
      Info.style.margin="20px";
      Info.style.borderColor="white";
      Info.style.backgroundColor="black";
      Info.style.color="white";

      Status.append(Info);
      Main.append(Status);
      }
    }    
})
val++;

})


//6.Ability to clear search history: Using deleteHistory()-

function deleteHistory()
{
   for(let k=0; k<data.length; k++){
       delete data[k];
   }
    console.log(data);
    Main.innerHTML="";
}
Delete.addEventListener("click",deleteHistory);
})




// //Accessing all the HTML elements-
// let Main=document.querySelector("main");
// let data = JSON.parse(localStorage.getItem('data'));
// console.log(data);

// //5.Display of search history on a separate page-
// let val=0;
// data.forEach((item)=> {
//     let Info=document.createElement('div');
//     Info.innerHTML=`Your Previous Search : 
//     ${val}. 
//     ${data[val].search} searched at 
//     ${data[val].date}`
//     val++;

// //Styling the search history box and text-
//     Info.style.border="2px solid white";
//     Info.style.marginTop="25px";
//     Info.style.fontStretch="25px";
//     Info.style.width="1340px";
//     Info.style.flexDirection="flex";
//     Info.style.justifyContent="center";
//     Info.style.borderColor="green";
//     Info.style.fontSize="18px";
//     Info.style.textAlign="center";
//     Info.style.height="25px";

//   Main.append(Info);
// });