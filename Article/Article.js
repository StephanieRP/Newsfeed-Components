// Because classes are not hoisted you will need to start your code at the bottom of the page.  Look for the comment "START HERE"
class Article {
  constructor(domElement) {
    // assign this.domElement to the passed in domElement
    this.domElement = domElement;
    // create a reference to the ".expandButton" class.
    this.expandButton = domElement.querySelector(".expandButton");
    this.closeButton = domElement.querySelector(".closeButton");
    // Using your expandButton reference, update the text on your expandButton to say "expand"

    // Set a click handler on the expandButton reference, calling the expandArticle method.

    this.expandButton.addEventListener("click", () => this.expandArticle());
    this.expandButton.addEventListener("click", () => this.closeAppear());
    this.closeButton.addEventListener("click", () => this.closeArticle());
    this.closeButton.addEventListener("click", () => this.closeAppear());
  }

  expandArticle() {
    // Using our reference to the domElement, toggle a class to expand or hide the article.
    this.domElement.classList.add("article-open");
  }

  closeAppear() {
    if (this.domElement.classList.contains("article-open")) {
      this.expandButton.style.display = "none";
      this.closeButton.style.display = "inline-block";
    } else {
      this.expandButton.style.display = "inline-block";
      this.closeButton.style.display = "none";
    }
  }

  closeArticle() {
    this.domElement.classList.remove("article-open");
  }
}

/* START HERE: 

- Select all classes named ".article" and assign that value to the articles variable.  
*/
let articleDivs = document.querySelectorAll(".article");

/*
- With your selection in place, now chain .forEach() on to the articles variable to iterate over the articles NodeList and create a new instance of Article by passing in each article as a parameter to the Article class.

*/
articleDivs.forEach(function(art) {
  return new Article(art);
});
