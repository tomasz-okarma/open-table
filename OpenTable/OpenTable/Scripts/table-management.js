﻿  var tableId = 0;
  var tables = [];

  function addTable(restaurantId) {	
      tableId++;
      console.log(restaurantId);
	var table = {Id:tableId, RestaurantId: restaurantId, Left:0, Top:0}
	tables.push(table);
	$(".restaurant").append("<div id='"+tableId+"' class='restaurant-table' class='ui-widget-content' ondblclick='deleteTable(event)'></div>");
    $(".restaurant-table").draggable();	
    $(".restaurant-table").on("dragstop", function (event, ui) { 					        
		saveTablePosition(Number($(this).attr("id")), ui.position.left, ui.position.top);
	});	
  }
  
  function saveTablePosition(id, left, top) {
		var tableIndex = tables.findIndex(t => t.Id === id);
		tables[tableIndex].Left = left;
        tables[tableIndex].Top = top;     
  }

  function saveTablesSet() {
         jQuery.ajax({
          type: "POST",
          url: "/Restaurants/SaveTablesSet",
          dataType: "json",
          contentType: "application/json; charset=utf-8",
          data: things = JSON.stringify({ 'tables': tables }),
          complete: function() {
              window.location = '/Restaurants/Index';
          }      
      });      
  }
 
  function deleteTable(event) {
	var id = event.target.id;	 
    var table = $("#" + id + ".restaurant-table");	
    var tableIndex = tables.findIndex(t => t.Id == id);
    delete tables[tableIndex];
    $(table).remove();		
  }