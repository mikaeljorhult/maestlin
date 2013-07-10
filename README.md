# Maestlin
jQuery plugin helping elements to keep aspect ratio when resized.

## Basic Usage
Basic usage is pretty straight forward:
```
<script src="http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js"></script>
<script src="jquery.maestlin.js"></script>
<script>
	jQuery( '#element' ).maestlin();
</script>
```

## Aspect Ratio
To apply a specific aspect ratio you can pass in the parameter ratio. Following example would make height the same as the width of the element:
```
<script>
	jQuery( '#element' ).maestlin( {
		ratio: 1
	} );
</script>
```

## License
Maestlin is released under the [MIT license](http://mikaeljorhult.mit-license.org).

## Plugin Name
The plugin is named after the German astronomer [Michael Maestlin](http://en.wikipedia.org/wiki/Michael_Maestlin) who did the first known calculation of the Golden Ratio.