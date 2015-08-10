jQuery(document).ready(function($) {
	 $('select').selectmenu({ theme: "b" });
	$.ajax({
		type: "GET",
		url: "hardware.xml", //xml file to populate select options and result div
		dataType: "xml",
		success: function(xml) {
		  $(xml).find('lock').each(function(){
			var id = $(this).attr('id');
			var combo = $(this).find('other_combo').text();
			$('<option id="'+id+'" value="'+id+'">'+combo+'</option>').appendTo('#category_locksets'); //options to populate select
			$('#category_locksets option').sort(function(a, b){return ($(a).text()) > ($(b).text());}).appendTo('#category_locksets');// Sort option by text not id
			$('#search_locksets').click(function(){ //trying to get results on form submit?
			$('#lockset_results').empty();				
				$("#category_locksets option:selected").each(function() { 
					var id = $(this).attr("id");
					$(xml).find("lock").each(function() {
						var lockset_id = $(this).attr("id");
						if( id == lockset_id ){
							var img = $(this).find('results').find('design_img').text();
							var design = $(this).find('results').find('design_combo').text();
							var url = $(this).find('results').find('design_url').text();
							var notes = $(this).find('results').find('notes').text();								
							$('<figure id="'+ id +'"><img src="'+img+'" alt="" /><figcaption><a class="ui-link" href="'+url+'">'+design+'</a><p>'+notes+'</p></figcaption></figure>').appendTo('#lockset_results');//Show results in Div
						}                                   
					});
					//alert( id );
				});
			});
		});// End Locks
		$(xml).find('exit-device').each(function(){
			var id = $(this).attr('id');
			var combo = $(this).find('other_combo').text();
			$('<option id="'+id+'" value="'+id+'">'+combo+'</option>').appendTo('#category_exit_devices'); //options to populate select
			$('#category_exit_devices option').sort(function(a, b){return ($(a).text()) > ($(b).text());}).appendTo('#category_exit_devices');// Sort option by text not id
			$('#search_exit_devices').click(function(){ //Get Results
			$('#exit_device_results').empty();				
				$("#category_exit_devices option:selected").each(function() { 
					var id = $(this).attr("id");
					$(xml).find("exit-device").each(function() {
						var exitid = $(this).attr("id");
						if( id == exitid ){
							var img = $(this).find('results').find('design_img').text();
							var design = $(this).find('results').find('design_combo').text();
							var url = $(this).find('results').find('design_url').text();
							var notes = $(this).find('results').find('notes').text();								
							$('<fingure id="'+ id +'"><img src="'+img+'" alt="" /><figcaption><a class="ui-link" href="'+url+'">'+design+'</a><p>'+notes+'</p></figcaption></figure>').appendTo('#exit_device_results');//Show results in Div							
						}						                                 
					});					
					//alert( id );
				});
			});
		});// End Exit Devices
	},	
	error: function () {
		alert("Can't find our products!");
	}
  });//End Locks XML	
	
});// JavaScript Document
