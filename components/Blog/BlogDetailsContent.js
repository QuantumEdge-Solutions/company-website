import React from "react";
import Link from "next/link";
import BlogCommentsArea from "./BlogCommentsArea";
import BlogSidebar from "./BlogSidebar";

const BlogDetailsContent = () => {
  return (
    <>
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="blog-details">
                <div className="article-image">
                  <img src="/images/blog/blog-details.jpg" alt="image" />
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        June 4, 2024
                      </li>
                      <li>
                        <span>Posted By:</span>
                        <Link href="#">John Anderson</Link>
                      </li>
                    </ul>
                  </div>

                  <h2>Web Scraping with Cheerio: A Comprehensive Guide</h2>

                  <p>
                    Web scraping is basically an automated process of extracting data from different websites using a bot or software. Once fetched, the data is stored in a database – like an Excel sheet, JSON, or XML.
                  </p>

                  <p>
                    It's an outstanding method for researchers and business people who need to gather large amounts of data quickly and efficiently. For instance, an e-commerce website's owner can use web scraping to keep an eye on the pricing information of a competitor's website.
                  </p>

                  <h3>What is Cheerio?</h3>

                  <p>
                    Now, what is Cheerio all about? Well, Cheerio is JavaScript technology used for web scraping in server-side implementations, and it's designed explicitly for Node.js. It's a lightweight library that allows you to crawl web pages and extract data using CSS-style selectors. Cheerio can load HTML as a string and returns an object to extract data using its built-in methods.
                  </p>

                  <p>
                    One of the best things about Cheerio is that it runs directly in Node.js without a browser, making it faster and more efficient than other web scraping tools. It was first released in 2010 by Matt Mueller and has gained significant popularity among developers due to its versatility and ease of use.
                  </p>

                  <h3>Why use Cheerio for web scraping?</h3>

                  <p>
                    Let's explore the reasons to use Cheerio:
                  </p>
                  <ul>
                    <li>Its jQuery-like syntax makes HTML manipulation and data extraction easier for developers familiar with jQuery.</li>
                    <li>It's super easy to set up, even for beginner developers.</li>
                    <li>Its modularity allows us to extend it with Node modules and customize it according to our needs.</li>
                    <li>The best thing about Cheerio is it doesn't require any browser for data extraction. Because it's designed explicitly for Node.js, we can use it on the server side without any worries.</li>
                  </ul>

                  <p>That's enough for an introduction to web scraping and Cheerio. Let's get our hands dirty and jump into the environment.</p>

                  <h3>Getting started with Cheerio and web scraping</h3>
                  <h4>Prerequisites</h4>
                  <p>
                    Before diving into the code, there are a few prerequisites for learning Cheerio:
                  </p>
                  <ul>
                    <li>An IDE installed</li>
                    <li>Basic knowledge of JavaScript and Node.js</li>
                    <li>Basic knowledge of Devtools</li>
                  </ul>

                  <h4>Setting up the Cheerio environment</h4>
                  <p>
                    To set up your development environment, you'll need to install Node.js on your local machine. For that, head to the Node.js website and download the appropriate installer for your operating system.
                  </p>

                  <h4>Using the NPM package</h4>
                  <p>
                    Once Node.js is installed, you'll use a package manager called npm to install and manage all the third-party libraries in Node.js. Luckily, npm comes bundled with Node.js, so you don't need to install anything extra.
                  </p>

                  <p>
                    Now that you've set up Node js and npm, you can create a new Node js project using the command line interface. From there, you can add Cheerio js as a dependency and start using it to extract data and manipulate HTML easily.
                  </p>

                  <pre>
                    <code>
                      {`
                      mkdir webscraper
                      cd webscraper
                      npm init -y
                      npm install cheerio
                      `}
                    </code>
                  </pre>

                  <h4>Shell commands</h4>
                  <p>Use simple commands to ensure you have Node.js and Cheerio installed correctly.</p>
                  <pre>
                    <code>
                      {`
                      node -v
                      npm list cheerio
                      `}
                    </code>
                  </pre>
                  <p>You can review the installation process and fix the issue if anything goes wrong, such as downloading the wrong Node.js installer, network connectivity, missing dependencies, etc.</p>

                  <p>
                    Next, you need to specify the module format. We'll use ES modules in this tutorial because it allows us to use modern JavaScript features, such as await, that will be used in the later section of this tutorial. To specify the format, we'll go to the package.json and add the following field:
                  </p>
                  <pre>
                    <code>{`"type": "module",`}</code>
                  </pre>
                  <p>Let's do that:</p>

                  <pre>
                    <code>
                      {`
                      {
                        "name": "webscraper",
                        "version": "1.0.0",
                        "description": "",
                        "main": "index.js",
                        "type": "module",
                        "scripts": {
                          "test": "echo \\"Error: no test specified\\" && exit 1"
                        },
                        "author": "",
                        "license": "ISC",
                        "dependencies": {
                          "cheerio": "^1.0.0-rc.10"
                        }
                      }
                      `}
                    </code>
                  </pre>

                  <p>We've completed our installations and made the environment ready. Now let's learn about the Cheerio API.</p>

                  <h3>The Cheerio API</h3>
                  <p>
                    The Cheerio API refers specifically to the set of methods and functions provided by the Cheerio library. These methods help you to extract and modify HTML very quickly.
                  </p>
                  <p>
                    The selector API in Cheerio can be accessed through the <code>$()</code> method, which has the following structure:
                  </p>
                  <pre>
                    <code>
                      {`
                      $(selector, [context], [root])
                      `}
                    </code>
                  </pre>
                  <p>
                    It takes three arguments: the first is compulsory, and the other two are optional.
                  </p>
                  <ul>
                    <li>
                      The <code>selector</code> argument specifies the elements you want to select from the HTML document. It can be a string, DOM element, array of elements, or Cheerio objects.
                    </li>
                    <li>
                      The optional <code>context</code> argument is actually the scope of where to begin looking for the target elements. It can be a string, DOM element, array of elements, or Cheerio objects. If no context is specified, it searches the entire document.
                    </li>
                    <li>
                      The optional <code>root</code> argument is usually the markup string you want to traverse or manipulate. It can be used to specify a different root element for the selected elements.
                    </li>
                  </ul>
                  <p>
                    Once the elements have been selected, you can use other functions to manipulate them. For example, use the <code>attr()</code> function to get or set the value of an attribute or the <code>text()</code> function to get or set the text content of an element.
                  </p>

                  <h3>Cheerio Scraper</h3>
                  <p>
                    Crawls websites using raw HTTP requests, parses the HTML with the Cheerio library, and extracts data from the pages using a Node.js code. Supports both recursive crawling and lists of URLs.
                  </p>

                  <h3>How to scrape web pages with Cheerio</h3>
                  <p>
                    Now it's time to dive into some practical examples of using Cheerio for web scraping and HTML parsing. For that, create an <code>index.js</code> file in your directory or by using the command line.
                  </p>
                  <pre>
                    <code>{`touch index.js`}</code>
                  </pre>
                  <p>You'll need to load the HTML or XML document you want to parse using the load function.</p>

                  <h4>Load the HTML</h4>
                  <p>
                    You can load the HTML using the load function. This function takes a string containing the HTML as an argument and returns an object.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                        <body>
                          <h1>Hello from Cheerio</h1>
                        </body>
                      \`);
                      `}
                    </code>
                  </pre>
                  <p>
                    <strong>Note:</strong> The resulting object is assigned to the variable <code>$</code>, which is a common convention used to refer to jQuery objects in JavaScript.
                  </p>
                  <p>
                    After executing this line of code, you can manipulate the HTML by calling methods on the <code>$</code> object provided by Cheerio.
                  </p>

                  <h4>Cheerio selectors</h4>
                  <p>
                    Cheerio makes it easy to select elements using CSS-style selectors. It allows you to select elements based on tag, class, and attribute values.
                  </p>

                  <h4>Select elements with a tag name</h4>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                          <body>
                             <h3>I'm learning Cheerio</h3>
                             <h3>It's super easy</h3>
                          </body>
                      \`);
                      const $divItems = $('h3');
                      console.log($divItems.text());   //Output: I'm learning Cheerio It's super easy   
                      `}
                    </code>
                  </pre>
                  <p>
                    <strong>Note:</strong> The <code>.text()</code> method in Cheerio is used to extract the text content of an HTML element. It's used on a Cheerio object representing a single element or a collection of elements.
                  </p>

                  <h4>Select elements with a class name</h4>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\` 
                          <body>
                              <h3 class="classSelector"> Learning platforms: </h3>
                              <ul>
                                  <li class="classSelector">Apify</li>
                                  <li>Coursera</li>
                                  <li class="classSelector">Udemy</li>
                                  <li>Freecodecamp</li>
                              </ul>
                          </body>
                      \`);
                      const $selection = $('.classSelector');    //Select the classSelector class
                      console.log($selection.text());  //Output: Learning platforms: Apify classSelector
                      `}
                    </code>
                  </pre>

                  <h4>Select elements with an attribute value</h4>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                          <body>
                            <h3>Terms and Conditions: </h3>
                            <form> 
                              <button name="Accept" type="submit">Accept</button>
                              <button name="Reject" type="submit">Reject</button>      
                            </form>
                          </body>
                      \`);
                      const $selectedElements = $('[name]'); //Selects both the buttons
                      console.log($selectedElements.text()); 
                      `}
                    </code>
                  </pre>
                  <p>
                    <strong>Note:</strong> To select the first element, we can specify the value of the attribute like <code>$('[name=Accept]')</code>.
                  </p>
                  <p>
                    The attribute selectors can be used with any HTML attribute, not just data-* attributes. For example, <code>$('img[alt="example"]')</code> will select all img elements with an alt attribute having a value of "example".
                  </p>

                  <h4>Combining Cheerio selectors</h4>
                  <p>
                    Combining Cheerio selectors is an effective way to select specific elements from an HTML. Here are a few examples:
                  </p>
                  <ul>
                    <li>Selecting an element with a particular tag and class: <code>$('h3 .class')</code></li>
                    <li>Selecting all the elements that match a selector: <code>$('ul {">"} li')</code></li>
                    <li>Selecting the next sibling element: <code>$('p + ul')</code></li>
                    <li>Selecting all elements that match multiple selectors: <code>$('h1, h2, h3')</code></li>
                    <li>Selecting elements based on their position in the document: <code>$('li:nth-child(odd)')</code> (This selects all odd-numbered li elements in the document)</li>
                  </ul>

                  <h3>Traversing the DOM</h3>
                  <p>
                    Cheerio provides methods for navigating in any direction of the selected elements. For example, find the child or parent of any selected element. Let's discuss them one by one.
                  </p>

                  <h4>find</h4>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                        <div class="parent">
                          <p>Hello, world!</p>
                          <span>How are you?</span>
                          <p class="day">Have a nice day!</p>
                        </div>
                      \`);
                      const welcome = $('.parent').find('.day');
                      console.log(welcome.text()) //Output : Have a nice day!
                      `}
                    </code>
                  </pre>

                  <h4>children</h4>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                        <div class="parent">
                          <p>Hello, world!</p>
                          <span>How are you?</span>
                          <p class="day">Have a nice day!</p>
                          <div>
                            <span class="day">
                                Granchildren of ".parent" class
                              </span>
                            </div>
                        </div>
                      \`);
                      const welcome = $('.parent').children('span');
                      console.log(welcome.text()) //Output: How are you?
                      `}
                    </code>
                  </pre>
                  <p>
                    <strong>Note:</strong> <code>find</code> searches for matching descendant elements at any level below the selected element, whereas <code>children</code> only looks for direct child elements of the selected element.
                  </p>

                  <h4>Traversing functions</h4>
                  <p>
                    There are many other methods, but we'll not go into all the details. Let's just have a quick look at these:
                  </p>
                  <ul>
                    <li><code>contents</code>: This method works just like children. Additionally, it also selects the comments from the HTML string.</li>
                    <li><code>parent</code>: It gives us the parent of the selected element.</li>
                    <li><code>parents</code>: It gives us all the parents of the element till the root element.</li>
                    <li><code>parentsUntil</code>: We can specify the limit of the parents using this method and how far we want to go upwards.</li>
                    <li><code>closest</code>: It allows us to select the nearest parent element of a specific type that matches a given Cheerio selector. For example, <code>$('.child').closest('div')</code>.</li>
                    <li><code>next</code> and <code>prev</code>: The next method allows us to select the next element, and the prev method gives us the previous element.</li>
                  </ul>

                  <h3>How to loop over elements</h3>
                  <p>
                    If you recall, JavaScript methods like each, map, etc., facilitate looping over elements to perform specific operations. For example, let's look at each function and see how they work.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                        <body>
                            <h3 class="classSelector"> Learning platforms: </h3>
                            <ul>
                                <li class="classSelector">Apify</li>
                                <li>Coursera</li>
                                <li class="classSelector">Udemy</li>
                                <li>Freecodecamp</li>
                            </ul>
                        </body>\`);
                      const listItems = $('li')
                      listItems.each((index, element) => {
                         console.log($(element).text());
                       });
                      `}
                    </code>
                  </pre>
                  <p>
                    The each method takes a callback function as an argument. It has two parameters: the first one is the index starting from zero, and the second is the current element.
                  </p>

                  <h3>Selecting elements using regular expressions</h3>
                  <p>
                    To use regular expressions with Cheerio, we can use the <code>.match()</code> function provided by JavaScript. The following example finds all the email addresses that have @ in an HTML document:
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                          <body>
                            <ul class="email">
                              <li>Apify@gmail.com</li>
                              <li>ondra@gmail.com</li>
                              <li>Chris</li>
                              <li>amanda@gmail.com</li>
                              <li>notAnEmail</li>
                              <li>notAnEmailAtAll</li>
                              <li>Queue</li>
                              <li>jamesbond@gmail.com</li>
                            </ul>
                          </body>\`);
                      const emails = []
                      const userNames = $('.email li');  //Get the emails
                      userNames.each((index,el) => {    // Iterating over the emails
                        const regex = /@/;             //  Expression to be matched
                        const email = $(el).text().match(regex); // Match the text of each li item with the expression
                        if(email){
                          emails.push(email.input)       //Push, if the return value is not NULL
                        }
                      });
                      console.log(emails);
                      `}
                    </code>
                  </pre>
                  <p>
                    <strong>Note:</strong> The <code>.match()</code> function returns an object if it matches with an expression or returns null if it doesn't. That's the reason we're using <code>email.input</code> to get the text from the object.
                  </p>

                  <h3>Filtering elements​</h3>
                  <p>
                    With filtering, you can select only the specific elements you want and ignore the rest. Cheerio provides several methods for filtering elements within a selection, like filter, not, has, etc. Let's go through them one by one.
                  </p>

                  <h4>filter</h4>
                  <p>
                    The filter method in Cheerio works just like the filter method of JavaScript. It lets you cherry-pick elements based on a specific selector. It's super handy when you're dealing with large amounts of data and want to narrow down the focus.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      var $ = cheerio.load(\`
                      <ul class="birds">
                        <li class="parrot">
                          <span class="sharp">Parrots</span> are beautiful birds with <span class="beaks">sharp beaks</span>
                        </li>
                    
                        <li class="sharp">
                          They are superfast.
                        </li>
                        
                        <li class="crow">
                          Crows are smart
                        </li>
                    
                      </ul>
                      \`);
                      var $selectedElements = $('li .parrot');  // Get a 'li' with 'parrot' class
                      var $parrot = $('span').filter('.sharp');  //. Filter the span elements with a className 'sharp' 
                      console.log($parrot.text());
                      `}
                    </code>
                  </pre>

                  <h4>not</h4>
                  <p>
                    The not method is opposite to the filter method. With this clever tool, you can easily exclude elements we don't want and focus on the important ones. It can save us much time and effort, especially when dealing with extensive data.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      var $ = cheerio.load(\`
                      <ul class="birds">
                        <li class="parrot">
                          <span class="sharp">Parrots</span> are beautiful birds with <span class="beaks">sharp beaks</span>
                        </li>
                    
                        <li class="sharp">
                          They are superfast.
                        </li>
                        
                        <li class="crow">
                          Crows are smart
                        </li>
                    
                      </ul>
                      \`);
                      var $selectedElements = $('li .parrot') // Get a 'li' with 'parrot' class
                      var $parrot = $('span').not('.sharp');   // Exclude elements with a className 'sharp'
                      console.log($parrot.text());          // Output: sharp beaks
                      `}
                    </code>
                  </pre>

                  <h4>has</h4>
                  <p>
                    While web scraping with Cheerio, you might want to find elements that contain a specific child element, like a span or an image. The has method works the same way. It takes a Cheerio selector as an argument and returns a child element that matches the selector.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const script = \`
                      <div class="product">
                        <h2 class="name">Product 1</h2>
                        <span class="price">$10</span>
                        <span class="discount">20% off</span>
                      </div>
                      <div class="product">
                        <h2 class="name">Product 2</h2>
                        <span class="price">$20</span>
                      </div>
                      <div class="product">
                        <h2 class="name">Product 3</h2>
                        <span class="price">$30</span>
                        <span class="discount">10% off</span>
                      </div>\`;
                      const $ = cheerio.load(script);
                      const discountedProducts =        // search for a parent element that has a child with a 
                      $('.product').has('.discount');  // class name discount
                                                     
                      console.log(discountedProducts.text())
                      //Output : Product 1
                      //          $10
                      //          20% off
                    
                      //        Product 3
                      //        $30
                      //        10% off
                      `}
                    </code>
                  </pre>
                  <p>
                    This is handy when web scraping e-commerce websites and looking for discounted products. It allows you to filter out the products that have a discount quickly.
                  </p>

                  <h4>eq</h4>
                  <p>
                    The eq works just like an array indexing from the selected elements. It allows us to select an element from a specific index.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                          <ul>
                            <li>Item 1</li>
                            <li>Item 2</li>
                          </ul>
                      \`);
                        const secondItem = $('li').eq(1);
                        console.log(secondItem.text());    //Output:  Item 2 
                      `}
                    </code>
                  </pre>
                  <p>
                    <strong>Note:</strong> It doesn't throw an error if we provide the index that's out of bounds; rather it simply returns nothing. For example, if we provide 4 to the <code>.eq</code> function, it will return nothing.
                  </p>

                  <h4>first and last</h4>
                  <p>
                    The methods first and last work the same way as accessing elements from the array. The first method returns the first element from the selection, and the last method returns the last element.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(
                          \`<ol>
                            <li>Item 1</li>
                            <li>Item 2</li>
                            <li>Item 3</li>
                          </ol>\`
                        );
                        const firstItem = $('li').first();
                        const lastItem = $('li').last();
                        console.log(firstItem.text(),"  ",lastItem.text()) //Output: Item 1  Item 3
                      `}
                    </code>
                  </pre>
                  <p>What would happen if the selection contained just one element? The first and last elements would be the same.</p>

                  <h3>How to extract data from HTML tags using Cheerio</h3>
                  <p>
                    We've learned to extract data from HTML documents in a simple way. However, what if the data you need to extract is large and needs to be structured? That's where Cheerio's objects come in. They allow us to extract data from the HTML in a structured way.
                  </p>
                  <p>
                    You can specify what data you want to extract by passing the keys and values to the object. The keys in the map object represent the names of the properties you want to create, while the values are the Cheerio selectors you'll use to extract the data.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                          <div class="book-info">
                              <h2 class="book-title">The Great Gatsby</h2>
                              <p class="author">By F. Scott Fitzgerald</p>
                              <p class="release-date">Released: April 10, 1925</p>
                              <p class="price">Price: $12.99</p>
                          </div>
                      \`);
                      const structuredData = {
                          Book_Title: $('.book-title').text(),
                          Author: $('.author').text(),
                          Release_Data:$('.release-date').text(),
                          Price: $('.price').text()
                      };
                      console.log(structuredData);
                      `}
                    </code>
                  </pre>
                  <p>
                    We're creating a JavaScript object structuredData with properties <code>Book_Title</code>, <code>Author</code>, <code>Release_Data</code>, and <code>Price</code>. We're using the class selectors to select all the elements. The output will be an object with the extracted data:
                  </p>
                  <pre>
                    <code>
                      {`
                      {
                        Book_Title: 'The Great Gatsby',
                        Author: 'By F. Scott Fitzgerald',
                        Release_Data: 'Released: April 10, 1925',
                        Price: 'Price: $12.99'
                      }
                      `}
                    </code>
                  </pre>
                  <p>
                    What if we have multiple books and want to get all of them from the document? Let's look into that.
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      const $ = cheerio.load(\`
                          <div class="book-info">
                              <h2 class="book-title">The Great Gatsby</h2>
                              <p class="author">By F. Scott Fitzgerald</p>
                              <p class="release-date">Released: April 10, 1925</p>
                              <p class="price">Price: $12.99</p>
                          </div>
                          <div class="book-info">
                              <h2 class="book-title">To Kill a Mockingbird</h2>
                              <p class="author">By Harper Lee</p>
                              <p class="release-date">Released: July 11, 1960</p>
                              <p class="price">Price: $10.99</p>
                          </div>
                          <div class="book-info">
                              <h2 class="book-title">1984</h2>
                              <p class="author">By George Orwell</p>
                              <p class="release-date">Released: June 8, 1949</p>
                              <p class="price">Price: $9.99</p>
                          </div>
                      \`);
                      const books = [];
                      const books1= $('.book-info')
                      books1.each((index,book)=>{
                          const structuredData = {
                              Book_Title: $(book).find('.book-title').text(),
                              Author: $(book).find('.author').text(),
                              Release_Data:$(book).find('.release-date').text(),
                              Price: $(book).find('.price').text()
                          };
                          books.push(structuredData)
                      }) 
                      console.log(books);
                      `}
                    </code>
                  </pre>
                  <p>The output of the code is an array of objects:</p>
                  <pre>
                    <code>
                      {`
                      [
                       {
                        Book_Title: 'The Great Gatsby',
                        Author: 'By F. Scott Fitzgerald',
                        Release_Data: 'Released: April 10, 1925',
                        Price: 'Price: $12.99'
                      },
                      {
                        Book_Title: 'To Kill a Mockingbird',
                        Author: 'By Harper Lee',
                        Release_Data: 'Released: July 11, 1960',
                        Price: 'Price: $10.99'
                      },
                      {
                        Book_Title: '1984',
                        Author: 'By George Orwell',
                        Release_Data: 'Released: June 8, 1949',
                        Price: 'Price: $9.99'
                      }
                      ]
                      `}
                    </code>
                  </pre>
                  <p>
                    This code uses the each method to iterate over a collection of selected <code>.book-info</code> elements. For each element, the code creates an object structuredData that contains the extracted data. The data is extracted using the find method to search for child elements with the suitable classes.
                  </p>
                  <p>
                    Finally, the structuredData object is pushed to the books array using the push method. This result is an array of objects, each representing a book and containing the extracted data.
                  </p>

                  <h3>Extracted data: JSON, CSV, XML</h3>
                  <h4>How to write extracted data in a file</h4>
                  <p>
                    What if we want to store the scraped data in our local storage? We'll use the example above to store the data in a JSON file. We can use the built-in fs module in Node. It allows us to interact with the file system on a computer. Here's how you can modify the code to write the books array to a JSON file:
                  </p>
                  <pre>
                    <code>
                      {`
                      import cheerio from 'cheerio';
                      import fs from 'fs';           // Import the "fs" module
                  
                      const $ = cheerio.load(\`
                          <div class="book-info">
                              <h2 class="book-title">The Great Gatsby</h2>
                              <p class="author">By F. Scott Fitzgerald</p>
                              <p class="release-date">Released: April 10, 1925</p>
                              <p class="price">Price: $12.99</p>
                          </div>
                          <div class="book-info">
                              <h2 class="book-title">To Kill a Mockingbird</h2>
                              <p class="author">By Harper Lee</p>
                              <p class="release-date">Released: July 11, 1960</p>
                              <p class="price">Price: $10.99</p>
                          </div>
                          <div class="book-info">
                              <h2 class="book-title">1984</h2>
                              <p class="author">By George Orwell</p>
                              <p class="release-date">Released: June 8, 1949</p>
                              <p class="price">Price: $9.99</p>
                          </div>
                      \`);
                      const books = [];
                      const books1= $('.book-info')
                      books1.each((index,book)=>{
                          const structuredData = {
                              Book_Title: $(book).find('.book-title').text(),
                              Author: $(book).find('.author').text(),
                              Release_Data:$(book).find('.release-date').text(),
                              Price: $(book).find('.price').text()
                          };
                          books.push(structuredData)    //push the object to the array
                      })
                      const jsonData = JSON.stringify(books); //Convert the array to JSON format
                  
                      fs.writeFile('books.json', jsonData, () => {     //Using the fs.writeFile , it's used to write data in a file
                        console.log('Data written to file'); //Display "Data written to file" in the call back function.
                      });
                      `}
                    </code>
                  </pre>
                  <p>
                    <strong>Note:</strong> The fs.writeFile takes three arguments:
                  </p>
                  <ul>
                    <li><code>books.json</code>: The file in which we will write data. If the file is already there, it will just write data in it; if it's not, it will first create the file and then write data in it.</li>
                    <li><code>jsonData</code>: Data to be written in the file.</li>
                    <li><code>()=&gt;{}</code>: A callback function that will be called after the data has been written to the file.</li>
                  </ul>

                  <h3>How to handle errors and exceptions with Cheerio</h3>
                  <p>
                    As a student of web scraping with Cheerio, you may encounter errors and exceptions as you work with the code. Don't worry: this is a common experience for most beginners. We're exploring how to handle these errors and exceptions so that you can become a more confident and successful web scraper developer.
                  </p>
                  <p>
                    To handle errors, you can use try-catch blocks in your code. A try block allows you to try a block of code when you're not sure if the code will execute or not and catch any errors that might occur. If an error occurs, the catch block will execute, allowing you to handle the error appropriately.
                  </p>
                  <pre>
                    <code>
                      {`
                      try {
                        const $ = cheerio.load(html);
                      } catch (err) {
                        console.log(err);
                      }
                      `}
                    </code>
                  </pre>
                  <p>
                    This code uses a try-catch block to handle errors that might occur while loading an HTML document. Overall, this code ensures that the program does not crash if an error occurs during the loading of the HTML document and provides a way to handle the error.
                  </p>

                  <h3>How to use Axios with Cheerio</h3>
                  <p>
                    Have you ever wondered how to get the HTML document of a web page? Axios allows you to make HTTP requests and get the HTML document of a website.
                  </p>
                  <p>
                    To use Axios in your scraping project, you need to install it in your environment by entering the following command:
                  </p>
                  <pre>
                    <code>{`npm install axios`}</code>
                  </pre>
                  <p>We'll use the Axios library in the following example.</p>

                  <h3>Scraping multiple pages using Cheerio</h3>
                  <p>
                    It's worth noting that there's a difference between pagination and scraping multiple pages. Pagination refers to dividing content into separate pages, often with navigation links to move between them. On the other hand, scraping multiple pages involves extracting data from many pages of a website, whether they're paginated or not.
                  </p>
                  <p>
                    Why does this matter? When scraping paginated content, you can use the navigation links to move between pages and extract data from each page. However, when scraping multiple pages that are not paginated, you'll require a different approach to identify and extract the data you need.
                  </p>
                  <p>Let's see how we can scrape multiple pages with Cheerio.</p>

                  <h4>Scraping multiple pages with Cheerio: IMDb - Michael J. Fox page</h4>
                  <p>
                    You can see in the link that the website is using pagination, and each Actor is at a different link. You can use Cheerio to extract different Actors from different pages using a loop. Let's do this.
                  </p>
                  <pre>
                    <code>
                      {`
                      import axios from 'axios';
                      import cheerio from 'cheerio';
                      const Actors = [];    //Declare an empty actors array to store actors' data.
                      for (let i = 0; i < 5; i++) { // It means we will change the last digit of the url to get the data of another actor
                          const url = \`https://www.imdb.com/name/nm000015\${i}\`;  //Change the last digit of the data
                          const response = await axios.get(url, { headers });   // Add headers to axios request
                          const $ = cheerio.load(response.data);
                          const name = $('h1 .sc-afe43def-1').text();        // Get the name of the actor
                          const Date_of_Birth = $('.sc-dec7a8b-2').eq(1).text()          // Get the Date of Birth
                          Actors.push({ name, Date_of_Birth });
                      }
                      console.log(Actors);
                      `}
                    </code>
                  </pre>
                  <p>
                    But when we try to access the website to fetch data, we get a 403 error because the server has detected that the request is coming from an automated script. It's a very common anti-scraping technique used by most modern websites. So, we need to find a way to tackle this problem. One way is to use headers in our Axios request to act like an actual browser request. In this example, we'll use a user agent that indicates that the request is made from an actual browser rather than an automated script.
                  </p>
                  <p>Let's see how we can do this:</p>
                  <pre>
                    <code>
                      {`
                      import axios from 'axios';
                      import cheerio from 'cheerio';
                      const Actors = [];    //Declare an empty actors array to store actors' data.
                      for (let i = 0; i < 5; i++) { // It means we will change the last digit of the url to get the data of another actor
                          const url = \`https://www.imdb.com/name/nm000015\${i}\`;  //Change the last digit of the data
                          const response = await axios.get(url, { headers });   // Add headers to axios request
                          const $ = cheerio.load(response.data);
                          const name = $('h1 .sc-afe43def-1').text();        // Get the name of the actor
                          const Date_of_Birth = $('.sc-dec7a8b-2').eq(1).text()          // Get the Date of Birth
                          Actors.push({ name, Date_of_Birth });
                      }
                      console.log(Actors);
                      `}
                    </code>
                  </pre>

                  <h3>Challenges of web scraping with Cheerio</h3>
                  <p>
                    Like all web scraping libraries, Cheerio has its pros and cons. We have already discussed the pros of using Cheerio. Now let's discuss the challenges you might face while working with Cheerio.
                  </p>

                  <h4>Dynamic websites and JavaScript</h4>
                  <p>
                    Let's start with one of the biggest challenges of web scraping with Cheerio: dealing with dynamic websites and JavaScript. Nowadays, modern websites use dynamic content and JavaScript to update or modify the page content without needing an entire page to reload. That can make it tough to scrape the website with Cheerio alone. The content may not be fully loaded or loaded asynchronously after the initial page load.
                  </p>
                  <p>
                    When Cheerio loads an HTML page, it only sees the static HTML content. Any JavaScript or dynamic content that's loaded later is hidden from Cheerio. That can be a letdown if the website you're trying to scrape uses JavaScript to load or modify content.
                  </p>

                  <h4>Anti-scraping measures</h4>
                  <p>
                    Do you know why some scrapers get blocked and don't work as efficiently as they should? There are various anti-scraping techniques that block web scrapers. Let's discuss a few of these:
                  </p>
                  <ul>
                    <li>
                      <strong>CAPTCHAs</strong>: CAPTCHAs are tests that are designed to differentiate between human users and bots. They require users to complete a task, such as typing in a sequence of letters or identifying objects in an image.
                    </li>
                    <li>
                      <strong>IP blocking</strong>: Websites block IP addresses that are associated with web scraping. This means that if a particular IP address is identified as a scraper, the website will block all requests from that IP address.
                    </li>
                    <li>
                      <strong>User-agent detection</strong>: User-agent detection is a technique that identifies the type of browser or device that is being used to access the website. Websites can use this information to identify scrapers, as many scrapers use non-standard user agents.
                    </li>
                    <li>
                      <strong>Dynamic web pages</strong>: Some websites use dynamic web pages that are generated using JavaScript. These pages can be more difficult to scrape, as the content is generated on the fly and may not be present in the page source.
                    </li>
                  </ul>
                  <p>
                    As a web scraper developer, it's important to be aware of these anti-scraping measures and to take steps to avoid them. This may include using rotating proxies or user agents, cookies, implementing delays between requests, and much more. You can learn about these measures here.
                  </p>

                  <h4>Performance issues</h4>
                  <p>
                    When working with large amounts of data or complex HTML structures, using intermediate results to optimize performance is common. That means storing the results of certain operations and reusing them later rather than re-calculating them each time. jQuery can do that to optimize performance because it's designed to run in a browser with more memory.
                  </p>
                  <p>
                    However, Cheerio is designed to run in Node.js, which has a more limited memory than the browser. As a result, Cheerio has a hard time saving intermediate results. It can quickly run into memory issues when working with large datasets.
                  </p>
                  <p>
                    Without the ability to save intermediate results, Cheerio has to parse the entire HTML document to perform each operation. It can be slow and resource-intensive, especially when working with large documents.
                  </p>

                  <h3>Advanced web scraping with Cheerio</h3>
                  <h4>Scraping websites with dynamic content</h4>
                  <p>
                    Advanced websites load data at runtime, making it difficult to extract data using Cheerio. That's where other libraries come in to help out. Let's take a look at some of these libraries.
                  </p>

                  <h4>Puppeteer</h4>
                  <p>
                    Before we start learning Puppeteer, let's discuss where Cheerio fails. While Cheerio is an excellent tool, it fails when it comes to parsing websites that load data at runtime and need a browser to open them. Now, what Puppeteer does for us is that it helps us open the website in a browser known as a headless browser that acts like a browser, but in reality, it's not. Once the website is loaded using Puppeteer, we can use Cheerio to load its HTML and do whatever we want. Pretty amazing, right?
                  </p>
                  <p>Here are some of the core functions provided by Puppeteer:</p>
                  <ul>
                    <li><code>puppeteer.launch([options])</code>: This function launches an instance of Chrome or Chromium with a set of options specified in an object. It returns a Promise that resolves to an instance of the Browser class.</li>
                    <li><code>browser.newPage()</code>: This function creates a new blank page in the browser instance. It returns a Promise that resolves to an instance of the Page class.</li>
                    <li><code>page.goto(URL, [options])</code>: This function navigates to the specified URL. It returns a Promise that resolves when the page is loaded.</li>
                    <li><code>page.content()</code>: This function returns the HTML content of the current page. It returns a Promise that resolves to a string.</li>
                    <li><code>browser.close()</code> is a function in Puppeteer that is used to close the browser instance that was opened with <code>puppeteer.launch()</code>. It will terminate the browser process and all of its pages.</li>
                  </ul>
                  <p>
                    These are just some of the functions provided by Puppeteer. There are other functions available as well.
                  </p>
                  <p>To install Puppeteer in your environment, run the following command:</p>
                  <pre>
                    <code>{`npm install puppeteer`}</code>
                  </pre>
                  <p>Let's take a closer look at how this works with an example. We want to extract the Top 250 Movies from the IMDb website in this example.</p>

                  <h4>Extracting the top 250 movies from the IMDb website</h4>
                  <p>
                    As we can see from the image above, all the movies are in one body tag <code>&lt;tbody&gt;</code> having a class of lister-list, and each movie is the <code>&lt;tr&gt;</code>. Now, let's start using puppeteer with Cheerio.
                  </p>
                  <pre>
                    <code>
                      {`
                      import puppeteer from 'puppeteer';
                      import cheerio from 'cheerio';
                       (async () => {
                         const browser = await puppeteer.launch(); //Launch the browser  
                         const page = await browser.newPage();    //Open a new page 
                        await page.goto('https://www.imdb.com/chart/top');   //The opened page goes to the link provided in the .goto() function
                        const html = await page.content();       //Get the content of the page using the .content() function
                        const $ = cheerio.load(html);
                        const movies = [];
                        const moviesTr = $('tbody.lister-list tr') //Select all the table rows using the Cheerio selectors
                        moviesTr.each((i, movie) => {             //Iterate over all the movies one by one
                         const title = $(movie).find('.titleColumn a').text()
                         const year = $(movie).find('.titleColumn .secondaryInfo').text()
                         const rating = $(movie).find('.ratingColumn strong').text()
                         movies.push({title, year, rating});   //Push the extracted data
                         });
                      console.log(movies);
                        await browser.close();
                      })();
                      `}
                    </code>
                  </pre>

                  <h4>Playwright</h4>
                  <p>
                    Playwright is also an open-source Node.js library that was developed by the same team that developed Puppeteer. It is a powerful and versatile alternative to Puppeteer. The Puppeteer team needed a tool that could automate not just the Chromium-based browsers but other browsers like Firefox and Safari. So, they developed Playwright, which supports other browsers as well.
                  </p>
                  <p>To install Playwright in your environment, run the following command:</p>
                  <pre>
                    <code>{`npm install playwright`}</code>
                  </pre>
                  <p>Let's implement the above code with Playwright.</p>
                  <pre>
                    <code>
                      {`
                      import { chromium } from 'playwright'; //import chromium from playwright
                      import cheerio from 'cheerio';
                      
                      (async () => {
                      const browser = await chromium.launch(); // Launch the browser
                      const context = await browser.newContext(); // Create a new context
                      const page = await context.newPage(); // Create a new page
                      await page.goto('https://www.imdb.com/chart/top'); // Navigate to the provided URL
                      const html = await page.content(); // Get the page content
                      const $ = cheerio.load(html);
                      const movies = [];
                      const moviesTr = $('tbody.lister-list tr'); // Select all the table rows using the Cheerio selectors
                      moviesTr.each((i, movie) => { // Iterate over all the movies one by one
                      const title = $(movie).find('.titleColumn a').text();
                      const year = $(movie).find('.titleColumn .secondaryInfo').text();
                      const rating = $(movie).find('.ratingColumn strong').text();
                      movies.push({title, year, rating}); // Push the extracted data
                      });
                      console.log(movies);
                      await browser.close(); // Close the browser
                      })();
                      `}
                    </code>
                  </pre>
                  <p>
                    Playwright is a more flexible and powerful automation framework than Puppeteer, which makes it an excellent alternative for advanced web automation.
                  </p>

                  <h4>How to implement authentication</h4>
                  <p>
                    What if a website requires authentication? That's another challenge, but don't worry: we've got you covered. It's not possible to extract data from such websites without logging in. Therefore, we need to find a way to authenticate ourselves through our code to open the page from where we can extract the data.
                  </p>
                  <p>
                    For this purpose, we need the help of the Puppeteer library, which will do the authentication task. And obviously, our well-known tool, Cheerio, will extract the data. With Puppeteer and Cheerio, we can automate the authentication process and extract the data we need.
                  </p>
                  <p>Let's look at an example to understand how to implement authentication with Cheerio and Puppeteer. We'll try to authenticate the newsapi website, which looks like this:</p>

                  <h4>Using Puppeteer and Cheerio to authenticate the newsapi website</h4>
                  <p>Let's dive into the code and see how this magic happens:</p>
                  <pre>
                    <code>
                      {`
                      import puppeteer from 'puppeteer';
                      import cheerio from 'cheerio';
                      (async () => {
                          const browser = await puppeteer.launch(); //Launch the browser using .launch() function
                          const page = await browser.newPage(); //Open a new page using .newPage() function
                          
                          await page.goto('https://newsapi.org/login'); //The opened page goes to the link provided in the .goto() function
                          
                          await page.type('#Email', 'your_email'); //Enter the email and password in the respective input fields
                          await page.type('#Password', 'you_password');   //The await waits for the website to load these fields.
                          
                          await page.click('button[type=submit]'); //Click the submit button
                          
                          await page.waitForNavigation(); //Wait for the website to finish the login process
                          await page.goto('https://newsapi.org/account'); //Go to the home page
                          //Now we can manipulate the website according to our needs
                          const html = await page.content();
                          const $ = cheerio.load(html);
                          console.log($('.mb2').text()); 
                          await browser.close();
                        })();
                      `}
                    </code>
                  </pre>

                  <h4>How to handle asynchronous requests, errors, and retries</h4>
                  <p>
                    When web scraping with Cheerio, it's important to consider errors and retries to ensure our code is reliable and robust. As we saw earlier, error handling allows us to prevent and detect possible errors and whether the error occurs while fetching the website. It would require retries, and that's what we'll cover now. We'll see how things go from requesting a website, handling errors, and trying again. We've already seen the axios library for making HTTP requests. That same axios library allows us to retry the HTTP requests as well.
                  </p>
                  <p>To use axios-retry, first we need to install it as a dependency and import it into our file.</p>
                  <pre>
                    <code>{`npm install axios-retry`}</code>
                  </pre>
                  <p>Let's see an example.</p>
                  <pre>
                    <code>
                      {`
                      const axios = require('axios');
                      const axiosRetry = require('axios-retry');
                      axiosRetry(axios, {
                        retries: 3,
                        retryDelay: (retryCount) => {
                          return retryCount * 2000; // multiple the retry time with 2000 miliseconds
                        },
                      });
                      async function scrapeWebsite() {
                        try {
                          const response = await axios.get('link-to-the-website');
                        } catch (error) {
                          console.error(error);
                        }
                      }
                      scrapeWebsite();
                      `}
                    </code>
                  </pre>
                  <p>
                    First, scrapeWebsite will be called, and it will try to fetch the website provided in the axios.get function. If the request fails, then the axiosRetry function will be called. It will try to fetch the data three times, and the time between each try increases to a multiple of 2,000 milliseconds. The function will return an error if it gets nothing after three attempts.
                  </p>

                  <h4>How to use a testing framework with Cheerio</h4>
                  <p>
                    It's important to test your code thoroughly before it goes into production. By testing with various inputs and outputs, we can be confident that the code works correctly and meets our requirements. Deploying code without proper testing can lead to unexpected problems, which can cause delays and additional costs to the project. Therefore, testing the code is a good practice to ensure the quality and reliability of the software.
                  </p>
                  <p>Let's see how we can use a framework to test our Cheerio codes.</p>

                  <h4>Test code with Jest</h4>
                  <p>
                    Jest is a popular framework developed to test JavaScript applications. It was developed by Facebook, and one of its key features is that it can run tests in parallel, which makes it super fast and efficient. It's easy to set up and test the codes.
                  </p>
                  <p>Let's see how we can add Jest to our environment.</p>
                  <p>Open the terminal and enter the command below:</p>
                  <pre>
                    <code>{`npm install --save-dev jest`}</code>
                  </pre>
                  <p>
                    We have passed this --save-dev optional argument to make that this dependency is only needed in the development phase.
                  </p>
                  <p>Open the package.json and replace:</p>
                  <pre>
                    <code>{`"test": ""`}</code>
                  </pre>
                  <p>with the following:</p>
                  <pre>
                    <code>{`"test": "node --experimental-vm-modules node_modules/.bin/jest"`}</code>
                  </pre>
                  <p>Write the tests in the .test file and enter the command below to see the results:</p>
                  <pre>
                    <code>{`npm test`}</code>
                  </pre>

                  <h4>How to write a test with Jest</h4>
                  <p>Let's use some code that we wrote earlier in this Cheerio tutorial.</p>
                  <pre>
                    <code>
                      {`
                      function getBookInfo(htmlString) {
                        const $ = cheerio.load(htmlString);
                        const structuredData = {
                          bookTitle: $('.book-title').text().trim(),
                          author: $('.author').text().trim(),
                          releaseDate: $('.release-date').text().trim(),
                          price: $('.price').text().trim()
                        };
                        return structuredData;
                      }
                      export default getBookInfo;
                      `}
                    </code>
                  </pre>
                  <p>
                    We have a function named getBookInfo that accepts an HTML string as an input and returns an object named structuredData. In the end, we're exporting the function so that we can test it in our test.js file.
                  </p>
                  <p>Let's see how well this code is working. We'll open our IDE and create a file name structureData.test.js and write the following code.</p>
                  <pre>
                    <code>
                      {`
                      import getBookInfo from './index'; //Import the function getBookInfo
                      test('getBookInfo returns the correct book information', () => {
                        const htmlString = \`
                          <div class="book-info"> //HTML string that will be used for testing
                            <h2 class="book-title">The Great Gatsby</h2>
                            <p class="author">By F. Scott Fitzgerald</p>
                            <p class="release-date">Released: April 10, 1925</p>
                            <p class="price">Price: $12.99</p>
                          </div>\`;
                      //Declare a test having two arguments. The first argument is the description.
                      //The second argument is an anonymous function that will return if the test fails or not.
                        const bookInfo = getBookInfo(htmlString);
                        expect(bookInfo).toEqual({
                          bookTitle: 'The Great Gatsby',
                          author: 'By F. Scott Fitzgerald',
                          releaseDate: 'Released: April 10, 1925',
                          price: 'Price: $12.99'
                        });
                      });
                      //The .expect() function takes the results as an argument
                      //.toEqual() compares the results with the desired outcome.
                      `}
                    </code>
                  </pre>
                  <p>Like this, we can write as many tests using Jest as we want for our code, like missing values, extra spaces, etc.</p>

                  <h4>Finding and fixing bugs in your Cheerio code</h4>
                  <p>
                    While creating scraping scripts and manipulating the DOM, we might encounter some challenges, but we have tools and strategies to make the process easier.
                  </p>
                  <ul>
                    <li>
                      <strong>Unit tests</strong>: Testing the code before deployment and ensuring it works correctly can save us from major problems. Unit testing ensures that we get the expected results. Different technologies like Jest and Mocha are used for this.
                    </li>
                    <li>
                      <strong>Console.log</strong>: The console.log is often used for debugging programs by writing it at various positions in the code. The same is used to troubleshoot Cheerio programs.
                    </li>
                  </ul>

                  <h4>Debugging using the console.log</h4>
                  <pre>
                    <code>
                      {`
                      console.log('Debugging Cheerio code');
                      `}
                    </code>
                  </pre>

                  <h4>Browser developer tools</h4>
                  <p>
                    The browser developer tools can be used to inspect the DOM and spot problems in the code. Such tools include Chrome DevTools.
                  </p>

                  <h3>Best practices for web scraping with Cheerio</h3>
                  <p>
                    The following approaches can be used to optimize our code and improve performance.
                  </p>
                  <ul>
                    <li>
                      <strong>Handling dynamic content</strong>: As we mentioned earlier, dynamic content creates a lot of issues while extracting data, so it's a good practice to always keep in mind that Cheerio may not help us in this scenario. We need to use other libraries to load the HTML and perform operations using Cheerio.
                    </li>
                    <li>
                      <strong>Handling complex selectors</strong>: It can be tricky to work on websites that use complex selectors, i.e., nested selectors. It's recommended to break down the selectors and select elements very carefully.
                    </li>
                    <li>
                      <strong>Handling version compatibility issues</strong>: Cheerio has different versions that may not be compatible with specific versions of Node.js or other libraries. Check compatibility before using Cheerio, and update to the latest version if necessary.
                    </li>
                  </ul>
                  <p>
                    You can visit this great blog post to learn more about scraping websites more efficiently using Cheerio.
                  </p>

                  <h3>Alternatives to Cheerio</h3>
                  <p>
                    Let's explore some of the alternatives to web scraping with Cheerio. We'll look at the pros and cons of these libraries as well.
                  </p>
                  <table>
                    <thead>
                      <tr>
                        <th>Library</th>
                        <th>Advantages</th>
                        <th>Disadvantages</th>
                        <th>Maintenance/Up-to-date?</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Cheerio</td>
                        <td>Lightweight, fast, and easy to use</td>
                        <td>Limited functionality for dynamic web pages</td>
                        <td>Maintained and up-to-date</td>
                      </tr>
                      <tr>
                        <td>Puppeteer</td>
                        <td>Full-fledged automation tool with Chrome DevTools integration</td>
                        <td>Requires more setup than Cheerio, slower, resource-intensive</td>
                        <td>Maintained and up-to-date</td>
                      </tr>
                      <tr>
                        <td>JSDOM</td>
                        <td>Lightweight, allows for easy DOM manipulation</td>
                        <td>Limited functionality for dynamic web pages</td>
                        <td>Maintained and up-to-date</td>
                      </tr>
                      <tr>
                        <td>NightmareJS</td>
                        <td>High-level API, supports multiple browsers</td>
                        <td>Slower than Puppeteer, outdated and not maintained</td>
                        <td>Outdated and not maintained</td>
                      </tr>
                      <tr>
                        <td>PhantomJS</td>
                        <td>Lightweight, supports multiple browsers</td>
                        <td>Outdated and not maintained</td>
                        <td>Outdated and not maintained</td>
                      </tr>
                      <tr>
                        <td>Playwright</td>
                        <td>Multi-browser support, faster than Puppeteer</td>
                        <td>Requires more setup than Cheerio, resource-intensive</td>
                        <td>Maintained and up-to-date</td>
                      </tr>
                      <tr>
                        <td>node-html-parser</td>
                        <td>Supports parsing of dynamic HTML, easy to use</td>
                        <td>Limited functionality for web automation</td>
                        <td>Maintained and up-to-date</td>
                      </tr>
                      <tr>
                        <td>got-scraping</td>
                        <td>Lightweight, fast, and easy to use</td>
                        <td>Developed specifically to address drawbacks of modern scraping tools</td>
                        <td>Maintained and up-to-date</td>
                      </tr>
                    </tbody>
                  </table>

                  <h3>Conclusion</h3>
                  <p>
                    Cheerio is a robust and adaptable framework with an easy-to-use API for parsing and manipulating HTML. With its jQuery-like syntax, extracting data from web pages and manipulating the HTML to meet your needs is simple.
                  </p>
                  <p>
                    Although Cheerio is an excellent scraping tool in many cases, it does have its challenges, such as anti-scraping measures, dynamic websites, and performance issues. Yet, refined approaches and tools can assist you in overcoming these challenges and achieving your web scraping objectives.
                  </p>
                  <p>
                    As you may have observed, this blog post by no means tries to pitch Cheerio as the ultimate scraping tool. Cheerio has its fair share of shortcomings and areas to improve. Having said that, Cheerio still looks pretty promising. Also, it's always easy to switch to alternative tools after mastering it.
                  </p>
                  <p>
                    As the saying goes, Perpetuam Uitae Doctrina (lifelong learning). Complimenting this tutorial with practice is essential. Also, a good tutorial is neither perfect nor the only source of information on the subject. So, if you have any feedback for improvement, please let us know. Happy learning!
                  </p>
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>

                    <Link href="#">Web Scraping</Link>
                    <Link href="#">Cheerio</Link>
                    <Link href="#">JavaScript</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Blog Comments Area */}
              {/* <BlogCommentsArea /> */}
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;
