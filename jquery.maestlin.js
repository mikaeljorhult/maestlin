/*!
 * Maestlin 1.0.0
 * Aspect ratio jQuery plugin.
 * 
 * @author Mikael Jorhult
 * @license http://mikaeljorhult.mit-license.org MIT
 */
;( function ( $, window, document, undefined ) {
	// Default values
	var pluginName = "maestlin",
		defaults = {
			ratio: "auto"
		};
	
	// Constructor
	function Maestlin( element, options ) {
		this.element = $( element );
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	
	// The actual action
	Maestlin.prototype = {
		init: function() {
			var elements = this.element,
				resizer;
			
			// Go through each element individually if ratio is "auto".
			if ( this.settings.ratio === 'auto' ) {
				elements.each( function( index, element ) {
					$( element ).data( 'ratio', element.clientHeight / element.clientWidth );
				} );
			} else {
				// Set same ratio to all elements.
				elements.data( 'ratio', this.settings.ratio );
			}
			
			// Declare resize function
			resizer = function() {
				// Set the height of each element.
				elements.each( function( index, element ) {
					var $element = $( element );
					$element.height( $element.width() * $element.data( 'ratio' ) );
				} );
			};
			
			// Run resize function once.
			resizer();
			
			// Add reseize function to window resize event.
			$( window ).on( 'resize', resizer );
		}
	};
	
	// Prevent against multiple instantiations.
	$.fn[ pluginName ] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Maestlin( this, options ) );
			}
		} );
	};
} )( jQuery, window, document );