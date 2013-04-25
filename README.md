redirect-ie-7-lower
===================

Simple package that redirects a user on IE7 or lower to a page, `public/noie.html`. An [example gist](https://gist.github.com/pipedreambomb/5460834) of such a page is also available.

The original use case was that some of my smart packages were breaking my project, and I was only getting back a blank page on IE7 or 6, and I wanted to at least explain to users why things weren't working.

Make sure it is placed as early as possible in your Meteor project's `smart.json` so that it gets run before other packages that are causing issues with the earlier Internet Explorers.
