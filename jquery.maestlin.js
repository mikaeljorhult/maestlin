/*!
 * Maestlin 0.1.0
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
		this.element = element;
		this.settings = $.extend( {}, defaults, options );
		this._defaults = defaults;
		this._name = pluginName;
		this.init();
	}
	
	Maestlin.prototype = {
		init: function() {
			this.setupRatio( this.element, this.settings );
		},
		setupRatio: function( elements, settings ) {
			var $elements = $( elements ),
				resizer;
			
			$elements.each( function( index, element ) {
				var ratio = settings.ratio;
				
				if ( settings.ratio === 'auto' ) {
					ratio = element.clientHeight / element.clientWidth;
				}
				
				$( element ).data( 'ratio', ratio );
			} );
			
			resizer = function() {
				$elements.each( function( index, element ) {
					var $element = $( element );
					$element.height( $element.width() * $element.data( 'ratio' ) );
				} );
			};
			
			resizer();
			
			$( window ).on( 'resize', resizer );
		}
	};
	
	$.fn[ pluginName ] = function( options ) {
		return this.each( function() {
			if ( !$.data( this, "plugin_" + pluginName ) ) {
				$.data( this, "plugin_" + pluginName, new Maestlin( this, options ) );
			}
		} );
	};
} )( jQuery, window, document );