# js-dialects

This a collection of JavaScript dialects implemented using script tags with different type attributes. This is mostly just a fun exercise to emphasize how slightly different contexts can change how scripts are written and executed.

NetScript - Originally I was looking to make a script language that was to C# what Javascript is to Java. The only thing is that Java is more similar to C# than to JavaScript. So it evolved into the version of Javascript that I prefer to use. The script is wrapped in an asynchronous void function that is called immediately and indirectly. This has the effect of being able to run top level await in an otherwise normal script.

ModScript - This runs the script as an ordinary module. The only added bonus is you can use src URLs from other origins.

JSONScript - Loads the script as an importmap. Since there is a one importmap per document limit, it get's loaded into an invisible iframe. Still need to do some testing to see what is actually possible with this one.

ClassScript - This loads the script into and immediatly instantiated class object. This is one of the most insteresting to me because this slight change in context makes the syntax rules very different.

DataScript - This just wraps the script in a simple object. Not as drastic as ClassScript but there are some rule changes. 

VectorScript - Execute the script inside an SVG document.
