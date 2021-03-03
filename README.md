# Eat-da-burger [![Build Status](https://secure.travis-ci.com/yeoman/generator-node.svg?branch=master)](https://travis-ci.com/yeoman/generator-node) [![Gitter](https://img.shields.io/badge/Gitter-Join_the_Yeoman_chat_%E2%86%92-00d06f.svg)](https://gitter.im/yeoman/yeoman) [![OpenCollective](https://opencollective.com/yeoman/backers/badge.svg)](https://opencollective.com/yeoman#support)

 creates a base template to start a new resturant.

It is also easily composed into your own generators so you can only target your efforts at your burger specific features.


## Install

```
$ npm install 
$ npm start
```


## Usage



### Publishing your code


## Extend this generator

First of all, make sure you're comfortable with [Yeoman composability](http://yeoman.io/authoring/composability.html) feature. Then in your own generator:

```js
var Generator = require('yeoman-generator');

module.exports = class extends Generator({
  default() {
    this.composeWith(require.resolve('generator-node/generators/app'), {
      /* provide the options you want */
    });
  }
});
```


### Options

Here's a list of our supported options:


### Sub generators




## Backers
! <br />
[[Become a backer](https://opencollective.com/yeoman#support)]

  
## License

MIT 