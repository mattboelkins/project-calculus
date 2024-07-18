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
  "body": " The derivative of a function at a point   In the activities that follow, we begin studying the derivative of a function at a particular input value. The derivative is important because it measures the instantaneous rate of change of one quantity with respect to another. For example, in automobiles with camera detection systems and automatic braking, these systems have to measure the instantaneous rate at which the distance is changing between the car and the vehicle ahead of it.   Car camera systems measure the instantaneous rates of change of the distance to other moving objects. Bezier curves use tangent lines to control how multiple curves are pieced together to generate useful shapes, such as letters in different fonts. Explore more with this interactive website .       The derivative also measures the slope of the line tangent to a smooth curve. The tangent line is important in graphical applications such as the design of fonts using Bezier curves, which use tangent lines to control how curves are pieced together to generate visually appealing letters and figures.   Accessible images  We will need to be able to generate accessible images, including annotation with alt-text.     Before Class   This beginning activity introduces the limit definition of the derivative using an animation with embedded questions. A draft of the text and images can be found in this Google document .    Naming before-class activities  We will need to distinguish between before-class and during-class activities. PreTeXt has the default Exploration that we're using here for before-class. I think Beginning Activity would be good for before class, while simply Activity would be good for during class.    Summary of important ideas from Exploration .   For a function , the derivative of evaluated at is defined by , provided this limit exists. The value of measures the slope of the tangent line to at the point and is also the instantaneous rate of change of with respect to at the instant .  The quantity is often called the difference quotient , and this quantity measures the average rate of change of on the interval .     Stuff in boxes  As part of the authoring guidelines, we'll need to establish consistent plans for how we highlight\/emphasize important ideas. For example, in PreTeXt we could use an assemblage to offset the key ideas above.    This worked example demonstrates how to apply the limit definition of the derivative to a quadratic function. A draft of the text and images can be found in these Google slides .   Questions to be embedded in Exploration  Parsons Problem, applying the limit definition of the derivative derivative  Drag the steps into the correct order.    State the limit definition of the derivative,     Identify that .    Determine expressions for and .    Calculate and simplify.    Remove a factor of     Simplify the difference quotient to eliminate the in the denominator.    Take the limit as goes to .    Matching Problem, meaning of parts of the limit definition of the derivative matching derivative pieces  Match each expression with its meaning.     Change in y-values     Change in x-values     Slope of the tangent line to at     Slope of the secant line between and       Cross-referencing and indexing  As part of the authoring guidelines, we'll also need to establish consistent plans for cross-referencing and cross-linking; the platform will need this capacity with xml:ids. We will also need to have a plan for indexing. There are professionals who generate indexes after a text is written, or who can be consuted about the best way to do so as one writes.    Summary of Exploration : finding for .         Apply the limit definition using      Apply the rule for to get and      Simplify the numerator of the difference quotient      Factor the numerator      Divide to get      Take the limit as to find       This guided example leads students to apply the limit definition of the derivative to a rational function. A draft of the text and images for the animation\/video can be found in this Google document .   Mock-up video for animation     Questions to be embedded in Exploration .  Q1: evaluating the function at  For , the value of is .      Correct, since .      Correct, since .      Incorrect.      Q2: evaluating the function at  For , the simplest expression for is          While that equation is true, the result is not the most simplified expression. Try combining the constant terms in the denominator.           That's correct:            That’s incorrect. When there is a sum in the denominator, the fraction can’t be separated: .          That’s incorrect; try evaluating using .    Since , this gives a rule for whatever is substituted for . For example, .       Q3: finding a common denominator  To subtract the fractions and , the needed common denominator is          That's incorrect.           That's incorrect.           That’s correct. The product of the two denominators provides a common denominator to subtract the fraction.           That’s incorrect.     For example, to subtract , the common denominator is : .   Consider the product of the denominators of the two fractions to subtract.   Q4: simplifying the numerator of the difference quotient  The quantity simplifies to          That's incorrect.           That's incorrect.           That’s incorrect.           That’s correct.     When subtracting a quantity in parentheses, remember to distribute the minus sign.   Q5: evaluating the limit  Evaluating the limit as in shows that          That's correct.           That's incorrect.           That’s incorrect.           That’s incorrect.     When subtracting a quantity in parentheses, remember to distribute the minus sign.    Summary of the result of Exploration   For the function , the limit definition of the derivative shows that , which is the slope of the tangent line to at the point . The fact that also shows that at the instant , the function is decreasing at an instantaneous rate of units of height per unit of change in .       During Class   Discussion and summary of ideas from before-class work:  Guidance for instructor  The instructor will have data on student responses to the before-class activities and will need to respond accordingly. In the instructor version of the text, we'll need to provide guidance for how to use the class time that is expected to correspond to this section of material; part of that guidance will involve how to respond to the work students did prior to class.     On the graph of a function , the line between the points and is called a secant line , and the slope of the secant line is the same as the average rate of change of the function from to , . Viewing , the slope of the secant line on the interval is .    For a function , the derivative of evaluated at is defined by , provided this limit exists. The value of measures the slope of the tangent line to at the point and is also the instantaneous rate of change of with respect to at the instant .  The quantity is often called the difference quotient , and this quantity measures the average rate of change of on the interval .   The slope of the tangent line and the slope of a secant line to at the point      More about generating images  It will be ideal if the images can be generated using source right within the platform. That is, rather than including a .svg or .jpg file like we are doing in this draft, we could write source that builds the image upon processing (this would enable images to be updated similar to how videos are expected to function).     A key algebraic step in applying the limit definition is evaluating . For example, in Exploration where , , and in Exploration where , .      Consider the function whose formula is .   Notice that is a linear function. What is the slope of at every value of ?    Compute the average rate of change of on the intervals , , and . Simplify each result as much as possible. What do you notice about these quantities?    Use the limit definition of the derivative to compute the instantaneous rate of change of at the point where . That is, use the limit definition of the derivative to compute . Why does this result make sense in light of earlier questions?    Without doing any additional computations, what are , , ? Write a couple of sentences that explain how you know the answers without doing computations, making use of the phrases\/terms average rate of change , instantaneous rate of change , derivative , slope and linear function .       Peer Instruction questions as an alternative to Activity  .   Peer instruction  We will need a format within the platform for peer instruction questions and for students to respond to them.   Peer Instruction Question 1: the difference quotient of a linear function  Consider a function . Which of the following statements is true about the quantity ?      , for     That's incorrect.           That's incorrect.       , for     That's correct.       , for     That's incorrect.     Peer Instruction Question 2: rates of change of a linear function  Let . Consider the following statements.     The average rate of change of on the interval is .    The slope of the secant line between the points and is .    The instantaneous rate of change of at is .     .     Which of the following statements is true?     Only (2) is true.    That's incorrect.      Only (1) and (2) are true.    That's incorrect.      Only (3) and (4) are true.    That's incorrect.      All of (1), (2), (3), and (4) are true.    That's correct.     Summary of important ideas regarding linear functions.   Every linear function has a constant average rate of change on any possible interval. For example, is a linear function with slope , and the average rate of change of on any interval is . The instantaneous rate of change of at any input value will therefore also be , since the instantaneous rate of change is the limit of average rates of change.    More generally, for any linear function of form , for any choice of . Said differently, the value of the derivative of any linear function at any chosen input is the slope of the line.       Let . Recall that if , then , and if , then .   Determine and .    Determine and .    For , the limit definition of the derivative shows that . If is a small positive number, what is the value of ? If is a small negative number, what is the value of ?    Explain why does not exist.    Use a graphing tool such as Desmos to plot , and zoom in on the point where . Explain why it makes sense that does not exist.     Answers and solutions for activities  For all in-class activities, which will primarily have free-response questions, we need to include answers and solutions, and have the capacity to either make those visible to students or to instructors only.      Peer instruction questions as an alternative to Activity  .  Peer Instruction Question 3: the derivative of at different values  Let . Recall that if , then , and if , then . Consider the following statements.   and    and   If , then , and if , then   If , then , and if , then        Only (1) is true    That's incorrect.      Only (1) and (3) are true    That's correct.      None of (1), (2), (3), or (4) are true.    That's incorrect.      Only (2) and (4) are true    That's incorrect.     Peer Instruction Question 4: the derivative of at  For , the limit definition of the derivative shows that . Which of the following statements is true?          That's incorrect.           That's incorrect.           That's incorrect.       does not exist    That's correct.     Summary of important ideas regarding the derivative of the absolute value function.   Not every function has a derivative at every point. For example, if , then does not exist.    One reason that does not exist is that when we zoom in on the point on the graph of , there is a sharp corner on the graph at which the function's slope jumps from to the left of to to the right of . Here is a graph of a similar function where a sharp corner appears at the point .   A function whose derivative fails to exist at . (Image borrowed from Active Calculus .)           Let . Use the limit definition of the derivative to determine .    Let . Use the limit definition of the derivative to determine the slope of the tangent line to at the point . Hint .    Let . Use the limit definition of the derivative to determine the instantaneous rate of change of at the instant .    Let . The limit definition of the derivative shows that . Notice that there is no algebra that can be done to remove a factor of from the numerator, so this limit can’t be evaluated exactly. Use small values of to find an estimate of that is accurate to within . Then, plot and its tangent line at to confirm that the estimate of is reasonable.    Let . Use the limit definition of the derivative to determine . Hint To simplify the difference quotient, a helpful step is to multiply the numerator by .       Peer Instruction questions as an alternative to Activity  .  Peer Instruction Question 5: applying the limit definition to a quadratic function  Let . Write down all of the steps required to apply the limit definition of the derivative to determine . [Nothing else appears on the screen until the instructor presses NEXT .]  Consider the following statements that correspond to the process of applying the limit definition of the derivative:                Which of the following statements is true?     Only (1).    That's incorrect.      Only (4).    That's incorrect.      (1) and (3)    That's correct.      (2) and (4)    That's incorrect.     Peer Instruction Question 6: applying the limit definition to a rational function  Let . Write down all of the steps required to apply the limit definition of the derivative to determine . [Nothing else appears on the screen until the instructor presses NEXT .]  Consider the following statements that correspond to the process of applying the limit definition of the derivative:                Which of the following statements is true?     Only (2)    That's incorrect      Only (3)    That's incorrect.      Only (1) and (3)    That's incorrect.      (1), (3), and (4)    That's correct.     Summary of important ideas regarding applying the limit definition of the derivative     When applying the limit definition of the derivative, it's essential to correctly apply the rule for the function to compute for the relevant value of .    For some nice functions, algebra can be used to simplify the difference quotient, , to find a factor of in the numerator. Then the factor of in the numerator and denominator divide to result in . From there, with no in the denominator, letting produces the value of .  For other functions, it's not possible to remove a factor of from the numerator of the difference quotient, so it may be necessary to estimate using small values of .        After Class   Practice Exercises  Interpreting function and derivative values  If is a function for which and , then     The point lies on the graph of and the slope of the tangent line to at is .    That's incorrect. If , that means lies on the graph of . Also, the value of tells us the slope of the tangent line at .      The point lies on the graph of and the slope of the tangent line to at is .    That's incorrect. If , that means lies on the graph of -- the order of and matters. Also, the value of tells us the slope of the tangent line at .      The point lies on the graph of and the slope of the tangent line to at is .    That’s correct. The statement that means that lies on the graph of . In addition, measures the slope of the tangent line to at .      The point lies on the graph of and the slope of the tangent line to at is .   That's incorrect. If , that means lies on the graph of -- the order of and matters. (The slope of the tangent line is correct.)    Statements about position and velocity of a biker  A biker riding along a straight road has position function that measures its location (in feet) from the start of the ride in feet at time in minutes. It is known that and .  Match each of the following statements to their correct meaning.   The values of determine the position of the biker at different points in time; the given value of determine's the biker's instantaneous velocity.     At the instant that minutes, the biker has traveled feet along the road from its starting point.     At the start of their ride, the biker has traveled feet.     The biker’s average velocity on is feet per minute     The biker's instantaneous velocity at is feet per minute    Interpreting function and derivative values for a quadratic    Consider the function given by this graph.  Which of the following statements is true?         and     That's incorrect. While it's true that and , remember that derivative values measure slopes of tangent lines.       is positive and is negative.    That's correct. The slope of the tangent line to at is positive, and similarly the slope of the tangent line to at is negative.      There is no value of for which .    That’s incorrect. Anywhere that has a horizontal tangent line, the value of will be .       is negative and is positive.   That's incorrect. The derivative measures the slope of the tangent line; if the tangent line rises as we move from left to right, the slope is positive.    Interpreting function and derivative values for a polynomial    Consider the function given by this graph.  The values of where are:         , , and     That's incorrect. Those values are where . Think about how measures a certain slope.       and     While it's true that at those locations, there is another value of where has a horizontal tangent line.      There are no values of for which .    That’s incorrect. Anywhere that has a horizontal tangent line, the value of will be .       , , and    That's correct. At each of these three locations, has a horizontal tangent line with slope .    Matching meaning among numerical values on a polynomial graph  Let be given by the following graph.   Plot of and some of its tangent and secant lines.    Match each expression with its meaning.   Think about each of quantities corresponding to a slope on the graph.        The average rate of change of on the interval      The average rate of change of on the interval     The instantaneous rate of change of at the instant     The slope of the secant line     Matching meaning to numerical values on a rational function graph  Let be given by the following graph.   Plot of and some of its tangent lines.    Match each expression with its meaning.   Think about each of quantities corresponding to a slope on the graph.    The instantaneous rate of change of when         The average rate of change of on the interval     The slope of the tangent line to at the point where     The average rate of change of on the interval     The slope of the secant line between the points and     The derivative of a linear function  If is a linear function given by where and is any number, then          That's incorrect. Think about how the value of the derivative measures the slope of the tangent line to the function. The point is the -intercept of this function; is not the slope.           That's incorrect. Think about how the value of the derivative measures the slope of the tangent line to the function; the slope of this function is not .          That's incorrect. The value is the slope of a line perpedicular to at , not the slope of itself at .          That’s correct. The derivative value measures the slope of the tangent line to at the point . In fact, the value of is equal to for any choice of .     Using the limit definition of the derivative with a linear function  Using the limit definition of the derivative with a quadratic function  Using the limit definition of the derivative with a rational function    Assessment Exercises  Interpreting expressions that come from the limit definition of the derivative    "
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
  "id": "F-sec-deriv-pt-intro-apps",
  "level": "2",
  "url": "sec-deriv-pt.html#F-sec-deriv-pt-intro-apps",
  "type": "Figure",
  "number": "1.3.1",
  "title": "",
  "body": " Car camera systems measure the instantaneous rates of change of the distance to other moving objects. Bezier curves use tangent lines to control how multiple curves are pieced together to generate useful shapes, such as letters in different fonts. Explore more with this interactive website .      "
},
{
  "id": "sec-deriv-pt-BA1",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-BA1",
  "type": "Exploration",
  "number": "1.3.1",
  "title": "",
  "body": " This beginning activity introduces the limit definition of the derivative using an animation with embedded questions. A draft of the text and images can be found in this Google document .  "
},
{
  "id": "sec-deriv-pt-subsection-BC-4",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-subsection-BC-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "derivative of evaluated at the difference quotient "
},
{
  "id": "sec-deriv-pt-subsection-BC-5-2",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-subsection-BC-5-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "assemblage "
},
{
  "id": "sec-deriv-pt-BA2",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-BA2",
  "type": "Exploration",
  "number": "1.3.2",
  "title": "",
  "body": " This worked example demonstrates how to apply the limit definition of the derivative to a quadratic function. A draft of the text and images can be found in these Google slides .  "
},
{
  "id": "limit-def-deriv-steps",
  "level": "2",
  "url": "sec-deriv-pt.html#limit-def-deriv-steps",
  "type": "Checkpoint",
  "number": "1.3.2",
  "title": "Parsons Problem, applying the limit definition of the derivative.",
  "body": "Parsons Problem, applying the limit definition of the derivative derivative  Drag the steps into the correct order.    State the limit definition of the derivative,     Identify that .    Determine expressions for and .    Calculate and simplify.    Remove a factor of     Simplify the difference quotient to eliminate the in the denominator.    Take the limit as goes to .   "
},
{
  "id": "matching-parts-of-limit-def-deriv",
  "level": "2",
  "url": "sec-deriv-pt.html#matching-parts-of-limit-def-deriv",
  "type": "Checkpoint",
  "number": "1.3.3",
  "title": "Matching Problem, meaning of parts of the limit definition of the derivative.",
  "body": "Matching Problem, meaning of parts of the limit definition of the derivative matching derivative pieces  Match each expression with its meaning.     Change in y-values     Change in x-values     Slope of the tangent line to at     Slope of the secant line between and   "
},
{
  "id": "sec-deriv-pt-subsection-BC-10-2",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-subsection-BC-10-2",
  "type": "Table",
  "number": "1.3.4",
  "title": "Summary of Exploration 1.3.2: finding <span class=\"process-math\">\\(f'(2)\\)<\/span> for <span class=\"process-math\">\\(f(x) = x - x^2\\text{.}\\)<\/span>",
  "body": " Summary of Exploration : finding for .         Apply the limit definition using      Apply the rule for to get and      Simplify the numerator of the difference quotient      Factor the numerator      Divide to get      Take the limit as to find    "
},
{
  "id": "sec-deriv-pt-BA3",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-BA3",
  "type": "Exploration",
  "number": "1.3.3",
  "title": "",
  "body": " This guided example leads students to apply the limit definition of the derivative to a rational function. A draft of the text and images for the animation\/video can be found in this Google document .   Mock-up video for animation    "
},
{
  "id": "BA3-fillin1",
  "level": "2",
  "url": "sec-deriv-pt.html#BA3-fillin1",
  "type": "Checkpoint",
  "number": "1.3.6",
  "title": "Q1: evaluating the function at <span class=\"process-math\">\\(x=3\\)<\/span>.",
  "body": "Q1: evaluating the function at  For , the value of is .      Correct, since .      Correct, since .      Incorrect.     "
},
{
  "id": "BA3-MC1",
  "level": "2",
  "url": "sec-deriv-pt.html#BA3-MC1",
  "type": "Checkpoint",
  "number": "1.3.7",
  "title": "Q2: evaluating the function at <span class=\"process-math\">\\(x = 3+h\\)<\/span>.",
  "body": "Q2: evaluating the function at  For , the simplest expression for is          While that equation is true, the result is not the most simplified expression. Try combining the constant terms in the denominator.           That's correct:            That’s incorrect. When there is a sum in the denominator, the fraction can’t be separated: .          That’s incorrect; try evaluating using .    Since , this gives a rule for whatever is substituted for . For example, .      "
},
{
  "id": "BA3-MC2",
  "level": "2",
  "url": "sec-deriv-pt.html#BA3-MC2",
  "type": "Checkpoint",
  "number": "1.3.8",
  "title": "Q3: finding a common denominator.",
  "body": "Q3: finding a common denominator  To subtract the fractions and , the needed common denominator is          That's incorrect.           That's incorrect.           That’s correct. The product of the two denominators provides a common denominator to subtract the fraction.           That’s incorrect.     For example, to subtract , the common denominator is : .   Consider the product of the denominators of the two fractions to subtract.  "
},
{
  "id": "BA3-MC3",
  "level": "2",
  "url": "sec-deriv-pt.html#BA3-MC3",
  "type": "Checkpoint",
  "number": "1.3.9",
  "title": "Q4: simplifying the numerator of the difference quotient.",
  "body": "Q4: simplifying the numerator of the difference quotient  The quantity simplifies to          That's incorrect.           That's incorrect.           That’s incorrect.           That’s correct.     When subtracting a quantity in parentheses, remember to distribute the minus sign.  "
},
{
  "id": "BA3-MC4",
  "level": "2",
  "url": "sec-deriv-pt.html#BA3-MC4",
  "type": "Checkpoint",
  "number": "1.3.10",
  "title": "Q5: evaluating the limit.",
  "body": "Q5: evaluating the limit  Evaluating the limit as in shows that          That's correct.           That's incorrect.           That’s incorrect.           That’s incorrect.     When subtracting a quantity in parentheses, remember to distribute the minus sign.  "
},
{
  "id": "F-sec-deriv-pt-after-BA3",
  "level": "2",
  "url": "sec-deriv-pt.html#F-sec-deriv-pt-after-BA3",
  "type": "Figure",
  "number": "1.3.11",
  "title": "",
  "body": " Summary of the result of Exploration   For the function , the limit definition of the derivative shows that , which is the slope of the tangent line to at the point . The fact that also shows that at the instant , the function is decreasing at an instantaneous rate of units of height per unit of change in .    "
},
{
  "id": "sec-deriv-pt-4-2",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-4-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "secant line derivative of evaluated at the difference quotient "
},
{
  "id": "sec-deriv-pt-DC-Act1",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-DC-Act1",
  "type": "Activity",
  "number": "1.3.4",
  "title": "",
  "body": " Consider the function whose formula is .   Notice that is a linear function. What is the slope of at every value of ?    Compute the average rate of change of on the intervals , , and . Simplify each result as much as possible. What do you notice about these quantities?    Use the limit definition of the derivative to compute the instantaneous rate of change of at the point where . That is, use the limit definition of the derivative to compute . Why does this result make sense in light of earlier questions?    Without doing any additional computations, what are , , ? Write a couple of sentences that explain how you know the answers without doing computations, making use of the phrases\/terms average rate of change , instantaneous rate of change , derivative , slope and linear function .     "
},
{
  "id": "DC-Act1-CQ1",
  "level": "2",
  "url": "sec-deriv-pt.html#DC-Act1-CQ1",
  "type": "Checkpoint",
  "number": "1.3.13",
  "title": "Peer Instruction Question 1: the difference quotient of a linear function.",
  "body": "Peer Instruction Question 1: the difference quotient of a linear function  Consider a function . Which of the following statements is true about the quantity ?      , for     That's incorrect.           That's incorrect.       , for     That's correct.       , for     That's incorrect.    "
},
{
  "id": "DC-Act1-CQ2",
  "level": "2",
  "url": "sec-deriv-pt.html#DC-Act1-CQ2",
  "type": "Checkpoint",
  "number": "1.3.14",
  "title": "Peer Instruction Question 2: rates of change of a linear function.",
  "body": "Peer Instruction Question 2: rates of change of a linear function  Let . Consider the following statements.     The average rate of change of on the interval is .    The slope of the secant line between the points and is .    The instantaneous rate of change of at is .     .     Which of the following statements is true?     Only (2) is true.    That's incorrect.      Only (1) and (2) are true.    That's incorrect.      Only (3) and (4) are true.    That's incorrect.      All of (1), (2), (3), and (4) are true.    That's correct.    "
},
{
  "id": "sec-deriv-pt-DC-Act2",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-DC-Act2",
  "type": "Activity",
  "number": "1.3.5",
  "title": "",
  "body": " Let . Recall that if , then , and if , then .   Determine and .    Determine and .    For , the limit definition of the derivative shows that . If is a small positive number, what is the value of ? If is a small negative number, what is the value of ?    Explain why does not exist.    Use a graphing tool such as Desmos to plot , and zoom in on the point where . Explain why it makes sense that does not exist.     Answers and solutions for activities  For all in-class activities, which will primarily have free-response questions, we need to include answers and solutions, and have the capacity to either make those visible to students or to instructors only.    "
},
{
  "id": "DC-Act1-CQ3",
  "level": "2",
  "url": "sec-deriv-pt.html#DC-Act1-CQ3",
  "type": "Checkpoint",
  "number": "1.3.15",
  "title": "Peer Instruction Question 3: the derivative of <span class=\"process-math\">\\(g(x) = |x|\\)<\/span> at different values.",
  "body": "Peer Instruction Question 3: the derivative of at different values  Let . Recall that if , then , and if , then . Consider the following statements.   and    and   If , then , and if , then   If , then , and if , then        Only (1) is true    That's incorrect.      Only (1) and (3) are true    That's correct.      None of (1), (2), (3), or (4) are true.    That's incorrect.      Only (2) and (4) are true    That's incorrect.    "
},
{
  "id": "DC-Act1-CQ4",
  "level": "2",
  "url": "sec-deriv-pt.html#DC-Act1-CQ4",
  "type": "Checkpoint",
  "number": "1.3.16",
  "title": "Peer Instruction Question 4: the derivative of <span class=\"process-math\">\\(g(x)=|x|\\)<\/span> at <span class=\"process-math\">\\(x = 0\\)<\/span>.",
  "body": "Peer Instruction Question 4: the derivative of at  For , the limit definition of the derivative shows that . Which of the following statements is true?          That's incorrect.           That's incorrect.           That's incorrect.       does not exist    That's correct.    "
},
{
  "id": "sec-deriv-pt-4-13-1-2-2",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-4-13-1-2-2",
  "type": "Figure",
  "number": "1.3.17",
  "title": "",
  "body": " A function whose derivative fails to exist at . (Image borrowed from Active Calculus .)   "
},
{
  "id": "sec-deriv-pt-DC-Act3",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-DC-Act3",
  "type": "Activity",
  "number": "1.3.6",
  "title": "",
  "body": "    Let . Use the limit definition of the derivative to determine .    Let . Use the limit definition of the derivative to determine the slope of the tangent line to at the point . Hint .    Let . Use the limit definition of the derivative to determine the instantaneous rate of change of at the instant .    Let . The limit definition of the derivative shows that . Notice that there is no algebra that can be done to remove a factor of from the numerator, so this limit can’t be evaluated exactly. Use small values of to find an estimate of that is accurate to within . Then, plot and its tangent line at to confirm that the estimate of is reasonable.    Let . Use the limit definition of the derivative to determine . Hint To simplify the difference quotient, a helpful step is to multiply the numerator by .     "
},
{
  "id": "DC-Act1-CQ5",
  "level": "2",
  "url": "sec-deriv-pt.html#DC-Act1-CQ5",
  "type": "Checkpoint",
  "number": "1.3.18",
  "title": "Peer Instruction Question 5: applying the limit definition to a quadratic function.",
  "body": "Peer Instruction Question 5: applying the limit definition to a quadratic function  Let . Write down all of the steps required to apply the limit definition of the derivative to determine . [Nothing else appears on the screen until the instructor presses NEXT .]  Consider the following statements that correspond to the process of applying the limit definition of the derivative:                Which of the following statements is true?     Only (1).    That's incorrect.      Only (4).    That's incorrect.      (1) and (3)    That's correct.      (2) and (4)    That's incorrect.    "
},
{
  "id": "DC-Act1-CQ6",
  "level": "2",
  "url": "sec-deriv-pt.html#DC-Act1-CQ6",
  "type": "Checkpoint",
  "number": "1.3.19",
  "title": "Peer Instruction Question 6: applying the limit definition to a rational function.",
  "body": "Peer Instruction Question 6: applying the limit definition to a rational function  Let . Write down all of the steps required to apply the limit definition of the derivative to determine . [Nothing else appears on the screen until the instructor presses NEXT .]  Consider the following statements that correspond to the process of applying the limit definition of the derivative:                Which of the following statements is true?     Only (2)    That's incorrect      Only (3)    That's incorrect.      Only (1) and (3)    That's incorrect.      (1), (3), and (4)    That's correct.    "
},
{
  "id": "sec-deriv-pt-PrEx1",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-PrEx1",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "Interpreting function and derivative values.",
  "body": "Interpreting function and derivative values  If is a function for which and , then     The point lies on the graph of and the slope of the tangent line to at is .    That's incorrect. If , that means lies on the graph of . Also, the value of tells us the slope of the tangent line at .      The point lies on the graph of and the slope of the tangent line to at is .    That's incorrect. If , that means lies on the graph of -- the order of and matters. Also, the value of tells us the slope of the tangent line at .      The point lies on the graph of and the slope of the tangent line to at is .    That’s correct. The statement that means that lies on the graph of . In addition, measures the slope of the tangent line to at .      The point lies on the graph of and the slope of the tangent line to at is .   That's incorrect. If , that means lies on the graph of -- the order of and matters. (The slope of the tangent line is correct.)   "
},
{
  "id": "sec-deriv-pt-PrEx2",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-PrEx2",
  "type": "Exercise",
  "number": "1.3.3.2",
  "title": "Statements about position and velocity of a biker.",
  "body": "Statements about position and velocity of a biker  A biker riding along a straight road has position function that measures its location (in feet) from the start of the ride in feet at time in minutes. It is known that and .  Match each of the following statements to their correct meaning.   The values of determine the position of the biker at different points in time; the given value of determine's the biker's instantaneous velocity.     At the instant that minutes, the biker has traveled feet along the road from its starting point.     At the start of their ride, the biker has traveled feet.     The biker’s average velocity on is feet per minute     The biker's instantaneous velocity at is feet per minute   "
},
{
  "id": "sec-deriv-pt-PrEx3",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-PrEx3",
  "type": "Exercise",
  "number": "1.3.3.3",
  "title": "Interpreting function and derivative values for a quadratic.",
  "body": "Interpreting function and derivative values for a quadratic    Consider the function given by this graph.  Which of the following statements is true?         and     That's incorrect. While it's true that and , remember that derivative values measure slopes of tangent lines.       is positive and is negative.    That's correct. The slope of the tangent line to at is positive, and similarly the slope of the tangent line to at is negative.      There is no value of for which .    That’s incorrect. Anywhere that has a horizontal tangent line, the value of will be .       is negative and is positive.   That's incorrect. The derivative measures the slope of the tangent line; if the tangent line rises as we move from left to right, the slope is positive.   "
},
{
  "id": "sec-deriv-pt-PrEx4",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-PrEx4",
  "type": "Exercise",
  "number": "1.3.3.4",
  "title": "Interpreting function and derivative values for a polynomial.",
  "body": "Interpreting function and derivative values for a polynomial    Consider the function given by this graph.  The values of where are:         , , and     That's incorrect. Those values are where . Think about how measures a certain slope.       and     While it's true that at those locations, there is another value of where has a horizontal tangent line.      There are no values of for which .    That’s incorrect. Anywhere that has a horizontal tangent line, the value of will be .       , , and    That's correct. At each of these three locations, has a horizontal tangent line with slope .   "
},
{
  "id": "matching-parts-of-a-graph-to-numbers-polynomial-1",
  "level": "2",
  "url": "sec-deriv-pt.html#matching-parts-of-a-graph-to-numbers-polynomial-1",
  "type": "Exercise",
  "number": "1.3.3.5",
  "title": "Matching meaning among numerical values on a polynomial graph.",
  "body": "Matching meaning among numerical values on a polynomial graph  Let be given by the following graph.   Plot of and some of its tangent and secant lines.    Match each expression with its meaning.   Think about each of quantities corresponding to a slope on the graph.        The average rate of change of on the interval      The average rate of change of on the interval     The instantaneous rate of change of at the instant     The slope of the secant line    "
},
{
  "id": "matching-parts-of-a-graph-to-numbers-rational-1",
  "level": "2",
  "url": "sec-deriv-pt.html#matching-parts-of-a-graph-to-numbers-rational-1",
  "type": "Exercise",
  "number": "1.3.3.6",
  "title": "Matching meaning to numerical values on a rational function graph.",
  "body": "Matching meaning to numerical values on a rational function graph  Let be given by the following graph.   Plot of and some of its tangent lines.    Match each expression with its meaning.   Think about each of quantities corresponding to a slope on the graph.    The instantaneous rate of change of when         The average rate of change of on the interval     The slope of the tangent line to at the point where     The average rate of change of on the interval     The slope of the secant line between the points and    "
},
{
  "id": "sec-deriv-pt-PrEx6",
  "level": "2",
  "url": "sec-deriv-pt.html#sec-deriv-pt-PrEx6",
  "type": "Exercise",
  "number": "1.3.3.7",
  "title": "The derivative of a linear function.",
  "body": "The derivative of a linear function  If is a linear function given by where and is any number, then          That's incorrect. Think about how the value of the derivative measures the slope of the tangent line to the function. The point is the -intercept of this function; is not the slope.           That's incorrect. Think about how the value of the derivative measures the slope of the tangent line to the function; the slope of this function is not .          That's incorrect. The value is the slope of a line perpedicular to at , not the slope of itself at .          That’s correct. The derivative value measures the slope of the tangent line to at the point . In fact, the value of is equal to for any choice of .    "
},
{
  "id": "ex-deriv-pt-name2",
  "level": "2",
  "url": "sec-deriv-pt.html#ex-deriv-pt-name2",
  "type": "Exercise",
  "number": "1.3.3.8",
  "title": "Using the limit definition of the derivative with a linear function.",
  "body": "Using the limit definition of the derivative with a linear function "
},
{
  "id": "ex-deriv-pt-name1",
  "level": "2",
  "url": "sec-deriv-pt.html#ex-deriv-pt-name1",
  "type": "Exercise",
  "number": "1.3.3.9",
  "title": "Using the limit definition of the derivative with a quadratic function.",
  "body": "Using the limit definition of the derivative with a quadratic function "
},
{
  "id": "ex-deriv-pt-name3",
  "level": "2",
  "url": "sec-deriv-pt.html#ex-deriv-pt-name3",
  "type": "Exercise",
  "number": "1.3.3.10",
  "title": "Using the limit definition of the derivative with a rational function.",
  "body": "Using the limit definition of the derivative with a rational function "
},
{
  "id": "ex-deriv-pt-assess-2",
  "level": "2",
  "url": "sec-deriv-pt.html#ex-deriv-pt-assess-2",
  "type": "Exercise",
  "number": "1.3.3.1",
  "title": "Interpreting expressions that come from the limit definition of the derivative.",
  "body": "Interpreting expressions that come from the limit definition of the derivative "
},
{
  "id": "sec-deriv-fxn",
  "level": "1",
  "url": "sec-deriv-fxn.html",
  "type": "Section",
  "number": "1.4",
  "title": "The derivative function",
  "body": " The derivative function   Under construction   "
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
