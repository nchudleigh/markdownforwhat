# markdownForWhat.js
#### Author:Neil Chudleigh
#### Version: 0.0.1

##Installation
```bower install markdownforwhat```

Include marked.js in your app
Include markdownForWhat.js in your app

##Implementation
input area
```
<textarea ng-model="markdownContent">
</textarea>
'''
output area
'''
<markdown-for-what content="markdownContent">
</markdown-for-what>
```
To make the output scrollable wrap it in a div

### Coming soon:
- configuration from element
- code type highlighting
- preview button
- kitchen sink text editor