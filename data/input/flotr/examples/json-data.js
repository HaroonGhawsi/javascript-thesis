var f = null;		
			$('json-btn').observe('click', function(){
				/**
				 * The json.txt contains a valid json string. Imagine this string
				 * is generated by some server-side script.
				 */
				new Ajax.Request('json.txt', {
					method:'get',
					onSuccess: function(transport){
						/**
						 * Parse (eval) the JSON from the server.
						 */
						var json = transport.responseText.evalJSON();
						
						if(json.series && json.options){
							/**
							 * The json is valid! Display the canvas container.
							 */
							$('container').setStyle({'display':'block'});
							
							/**
							 * Draw the graph using the JSON data. Of course the
							 * options are optional.
							 */
						    f = Flotr.draw($('container'), json.series, json.options);
						}
						
					}
				});
			});