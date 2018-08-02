## Soon TM
Example app that displays upcoming movies from [The Movie Database](http://themoviedb.org/). Written in React Native.

### Things to note about dependencies
This app runs React Native v0.56 which uses Babel 7. That requires [babel-preset-react-native](https://www.npmjs.com/package/babel-preset-react-native) version to be *fixed* at-or-above version `5.0.2`. 
From [RN v0.56 changelog](https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md#056): 
> When upgrading to 0.56, make sure to bump your babel-preset-react-native package.json dependency to `5.0.2` or newer (but still as *fixed* value).

After the upgrade to Babel 7, `babel-jest` broke and Jest could no longer run tests that rendered components. This was fixed by adding a Babel Core bridge package `"babel-core": "7.0.0-bridge.0"` ([Issue on GitHub](https://github.com/zeit/next.js/issues/4227)). 


### Also note
The `Details` component is to complex and should be split into smaller components!
