# js-dialects

This a collection of JavaScript dialects implemented using script tags with different type attributes. This is mostly just a fun exercise to emphasize how slightly different contexts can change how scripts are written and executed.

NetScript - Originally I was looking to make a script language that was to C# what Javascript is to Java. The only thing is that Java is more similar to C# than to JavaScript. So it evolved into the version of Javascript that I prefer to use. The script is wrapped in an async void function that is called immediately and indirectly. This has the effect of being able to run top level await in an otherwise normal script.

ModScript - This runs the script as an ordinary module. The only added bonus is you can use src URLs from other origins.

JSONScript - Loads the script as an importmap. Since there is a one importmap per document limit, it get's loaded into an invisible iframe.