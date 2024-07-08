var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-velocity",
  "level": "1",
  "url": "sec-velocity.html",
  "type": "Section",
  "number": "1.1",
  "title": "Average and instantaneous velocity",
  "body": " Average and instantaneous velocity  Under construction.  "
},
{
  "id": "sec-limit",
  "level": "1",
  "url": "sec-limit.html",
  "type": "Section",
  "number": "1.2",
  "title": "Using limits to understand function behavior",
  "body": " Using limits to understand function behavior  Under construction.  "
},
{
  "id": "sec-deriv-pt",
  "level": "1",
  "url": "sec-deriv-pt.html",
  "type": "Section",
  "number": "1.3",
  "title": "The derivative of a function at a point",
  "body": " The derivative of a function at a point   In the activities that follow, we begin studying the derivative of a function at a particular input value. The derivative is important because it measures the instantaneous rate of change of one quantity with respect to another. For example, in automobiles with camera detection systems and automatic braking, these systems have to measure the instantaneous rate at which the distance is changing between the car and the vehicle ahead of it. The derivative also measures the slope of the line tangent to a smooth curve. The tangent line is important in graphical applications such as the design of fonts using Bezier curves, which use tangent lines to control how curves are pieced together to generate visually appealing letters and figures.   This is a test figure.     "
},
{
  "id": "sec-deriv-pt-2-1",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative "
},
{
  "id": "F-sec-limit-intro-apps",
  "level": "2",
  "url": "sec-deriv-pt.html#F-sec-limit-intro-apps",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " This is a test figure.   "
},
{
  "id": "backmatter-2",
  "level": "1",
  "url": "backmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
