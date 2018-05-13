//function to make sure it loads after html 
$(function(){

function makeGrid() {    //set vars inside makeGrid so no parameters
  const height=$('#input_height').val();  
  const width=$('#input_width').val();
  const table=$('#pixel_canvas');
  const colour=$('#colorPicker');
  table.children().remove(); //removes any grid created previously
  for (let r=0; r<height; r++) {  //loops for creating grid
    table.append('<tr></tr>');
    for (let c=0; c<width; c++) {  
      $('tr').last().append('<td></td>'); //adds new cells to last rows
    }
  }
  
  table.on('click', 'td', function(){  //listens to clicks on created table and colours tds
      $(this).css('background-color', colour.val());
  });
}

$("#button").click(function(evt) { //calls the function makeGrid
  /*if('#input_height'>100){
  	$('#picki').append('<h3>"This number is too big, choose one under 100."</h3>');
  }
  if('#input_width'>100){
  	$('#picki').append('<h3>"This number is too big, choose one under 100."</h3>');
  }*/
  evt.preventDefault();  //prevents reloading page with submit button
  makeGrid();
});
});