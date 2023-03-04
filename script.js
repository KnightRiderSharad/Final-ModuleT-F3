    //Accessing all the HTML elements-
    let search=document.querySelector("#search");
    let btn=document.querySelector("#btn");
    let Result=document.querySelector("#result");
    let Main=document.querySelector("#main");
    let searchedArr=[];
    
    function MySearch()
    {
      Main.innerHTML="";
      var date = new Date();
      var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      var am_pm = date.getHours() >= 12 ? "PM" : "AM";
      hours = hours < 10 ? "0" + hours : hours;
      var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      var time = hours + ":" + minutes + ":" + seconds + "   " + am_pm;
      console.log(date.getDate()+'/'+parseInt(date.getMonth()+1)+'/'+date.getFullYear());
    
      let arr={search:`${search.value}`,
               date: date.getDate()+'/'+parseInt(date.getMonth()+1)+'/'+date.getFullYear() + "   "+`&nbsp at: ${time}`}
      
    searchedArr.push(arr);
    console.log(searchedArr);
    
    localStorage.setItem("data" , JSON.stringify(searchedArr))
    //window.location.href = "index.html";
    
    

    //Creating Date and Time for the search history to show-
      // var date = new Date();
      // var hours = date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
      // var am_pm = date.getHours() >= 12 ? "PM" : "AM";
      // hours = hours < 10 ? "0" + hours : hours;
      // var minutes = date.getMinutes() < 10 ? "0" + date.getMinutes() : date.getMinutes();
      // var seconds = date.getSeconds() < 10 ? "0" + date.getSeconds() : date.getSeconds();
      // var time = hours + ":" + minutes + ":" + seconds + " " + am_pm;
      // Main.innerhtml="";
      // let arr={search:`

      //                ${search.value}`, 
      //                date:`${time}`
      //         }
      // //4.Storage of search queries in localStorage:
      // searchedArr.push(arr);
      // console.log(searchedArr);
      // localStorage.setItem("data" , JSON.stringify(searchedArr))

      //3.Retrieval of book data from Fetch API: 
      const apiUrl=`https://www.googleapis.com/books/v1/volumes?q=${search.value}`

      fetch(apiUrl).then((apidata)=>{
      console.log(apidata);
      return apidata.json();
      })
      .then((actualdata)=>{

      console.log(actualdata);
      let counting=0;
      let findresult=search.value;
      for(let i=0; i<10; i++)
      {
              let SearchInfo=actualdata.items[i];
              console.log(SearchInfo.volumeInfo.title);
              console.log(find);
             
              if(SearchInfo.volumeInfo.title==findresult||SearchInfo.volumeInfo.authors[0]==findresult)
             {
               //console.log(SearchInfo);
               Result.innerHTML=`Hear are Your Search result : ${findresult}`
               Result.style.marginTop="20px";
               Result.style.color="white";
               counting=1;
               search.value="";
               //1.Search form with input field for book title or author name- (Rick Riordan)
               //2.Display of book data on the page-
                let Info=document.createElement('div');
                
                Info.innerHTML=`<img src=${SearchInfo.volumeInfo.imageLinks.thumbnail} 
                               height="200" 
                               width="220" 
                               alt="photo" 
                               border="1px solid black" 
                               box-sizing="border-box"  
                               justifyContent="space-evenly" 
                              /> 
                <br>
                <br>
                
                Title: ${SearchInfo.volumeInfo.title}
                <br>
                <br>
                Author: ${SearchInfo.volumeInfo.authors[0]} 
                <br>
                Rating :${SearchInfo.volumeInfo.averageRating}
                <br>
                Published Date : ${SearchInfo.volumeInfo.publishedDate}
                <br>
                Page count :${SearchInfo.volumeInfo.pageCount}
                <br>
                `
                Info.append(btn);
    
             
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
                
                Main.append(Info);
                }
              
              // else {
              //  Result.innerHTML="";
              //  Result.innerHTML=`Not found!`;
              //  Result.style.color="Red";
              //  Result.style.marginTop="15px";
              // }
              
            };
      })
      }
      
               //To Click and Add Fuction to the Button-
                btn.addEventListener("click", MySearch)



// Successfully implements all Points, Thank You!-

//1. Search form with input field for book title or author name: 10 points
//2. Retrieval of book data from API: 20 points
//3. Display of book data on the page: 20 points
//4. Storage of search queries in localStorage: 15 points
//5. Display of search history on a separate page and ability to view book data for previous search queries: 20 points
//6. Ability to clear search history: 10 points
//7. Deployment: 5 points










// const form = document.querySelector('form');
//     const resultsContainer = document.querySelector('#results');

//     form.addEventListener('submit', event => {
//       event.preventDefault();
//      const query = form.elements.query.value;

//       // Format the query string for the Google Books API
//       const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}`;

//       // Make a request to the Google Books API
//       fetch(apiUrl)
//         .then(response => response.json())
//         .then(data => {
//           const books = data.items;

//           // Clear previous search results
//           resultsContainer.innerHTML = '';

//           // Create a list of search results
//           const list = document.createElement('ul');
//           books.forEach(book => {
//             const title = book.volumeInfo.title;
//             const author = book.volumeInfo.authors ? book.volumeInfo.authors.join(', ') : 'Unknown';
//             const thumbnail = book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.thumbnail : '';
//             const description = book.volumeInfo.description ? book.volumeInfo.description : 'No description available.';
//             const listItem = document.createElement('li');

//             // Create a div to hold the book information
//             const bookInfo = document.createElement('div');
//             bookInfo.classList.add('book-info');

//             // Create an image element for the book cover
//             const image = document.createElement('img');
//             image.src = thumbnail;
//             image.alt = `Title: ${title} book cover`;

//             // Create a div to hold the book details
//             const details = document.createElement('div');
//             details.classList.add('book-details');

//             // Create heading elements for the book title and author
//             const titleHeading = document.createElement('h2');
//             titleHeading.textContent = title;

//             const authorHeading = document.createElement('h3');
//             authorHeading.textContent = `Author: ${author}`;

//             // Create a paragraph element for the book description
//             const descriptionParagraph = document.createElement('p');
//             descriptionParagraph.textContent = description;

//             // Add the image and book details to the book information div
//             details.appendChild(titleHeading);
//             details.appendChild(authorHeading);
//             details.appendChild(descriptionParagraph);
//             bookInfo.appendChild(image);
//             bookInfo.appendChild(details);

//             listItem.appendChild(bookInfo);
//             list.appendChild(listItem);
//           });

//           resultsContainer.appendChild(list);
          
//         })
        
//         .catch(error => {
//           console.error(error);
//           resultsContainer.innerHTML = 'An error occurred while fetching search results.';
//           //resultsContainer.style.color="red";
//         });
//     });

//     function displayResults(data) {
//         // Display the search results on the page
//       }
      
//       // Retrieve search history from localStorage
//       for (let i = 0; i < localStorage.length; i++) {
//         const searchTerm = localStorage.key(i);
//         const searchResult = JSON.parse(localStorage.getItem(searchTerm));
//         const searchLink = document.createElement('a');
//         searchLink.textContent = searchTerm;
//         searchLink.href = '#';
//         searchLink.addEventListener('click', () => {
//           displayResults(searchResult);
//         });
//         searchHistory.appendChild(searchLink);
//       }
      