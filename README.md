#Thoughts on E. Elliot Article

So, class inheritance is a poor way to set up objects in JS because of the problematic taxonomy it creates.  It does not allow you to pick and choose freely which properties are inherited by each child object, the child objects inherit everything.

Concatenative inheritance is also referred to in JS as *mixins* and this is where one object inherits properties from another by copying the properties.

Prototype delegation happens when an object has a link to a prototype to lookup the default? Maybe?

Functional inheritance is when a factory function creates an object and assigns properties to it using concatenative inheritance.  factory functions exist to create object instances.


codepen examples with comments:
class inheritance: http://codepen.io/akbadger/pen/yMBRzN?editors=001

composition/concatenative inheritance: http://codepen.io/akbadger/pen/NpKOyZ?editors=001



