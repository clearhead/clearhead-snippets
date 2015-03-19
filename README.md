clearhead-snippets [deprecated]
===============================

**2015-03-19 moved to https://github.com/clearhead/optimizely-snippets**

Helper functions not found in optimizely's api. Paste needed code in your experiment's global js. Supports IE9+.

## Cookies ##

```javascript
// clearhead.setCookie(name, value, optDays)
clearhead.setCookie('foo', 'bar', 100)

// clearhead.getCookie(name)
clearhead.getCookie('foo') // bar
```

## Get Param

```javascript
// clearhead.getParam(key)
clearhead.getParam('foo') === 'bar'; // ?foo=bar
```

## Load Script w/ Callback ##

```javascript
// clearhead.loadScript(url, callback)
clearhead.loadScript('//cdnjs.cloudflare.com/ajax/libs/d3/3.4.8/d3.min.js', function () {
	console.log(d3.version) // 3.4.8
});
```

## License ##

> Licensed under the Apache License, Version 2.0 (the "License");
> you may not use this file except in compliance with the License.
> You may obtain a copy of the License at
> 
>      http://www.apache.org/licenses/LICENSE-2.0
> 
> Unless required by applicable law or agreed to in writing, software
> distributed under the License is distributed on an "AS IS" BASIS,
> WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
> See the License for the specific language governing permissions and
> limitations under the License.
