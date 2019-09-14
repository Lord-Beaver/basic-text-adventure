
var currentRoom = "start";
var inventory =  ['pajzs', 'alma'];
var currentItem = "";
var option = false;
var currentPerson;
var tid;
var ti = [0];
var sid = 0;

image()

function talkTo(person) {
  conversations.style.display = 'block';
  var id = rooms[currentRoom][person].id;
  tid = id;
  currentPerson = person;

  $('#conversations').text('');
  for (let key in dialogues[person][id].mainoptions) {
   $('#conversations').append("<button type = 'button' name =" + key +" onclick='answer(name)' id = 'ti" + key + "'>" + dialogues[person][id].mainoptions[key] + "</button>");
}
  subtalk("s"  + sid)
  $('#conversations').append("<button type = 'button' name ='quit' onclick='answer(name)'>" + dialogues[person][id].quit + "</button>");
  for (let key in ti) {$('#ti' + ti[key]).hide();}

  option = true;
}

function answer(id) {
sid = id;
if (id !== "quit"){
if ($.inArray(id, ti) === -1) {

  $('#conversations').text(dialogues[currentPerson][tid].answers[id]);



setTimeout(function(){
  if (dialogues[currentPerson][tid].suboptions["s" + id] !== undefined) {
  ti.push(id);
  }
  talkTo(currentPerson)

}, 3000);

}else {$('#game-text').append('Ezt nemrég már említetted, amúgy bugos a játékod, mert ezt nem írhatja ki.')}} else {stoptalk()}

if (!(id in dialogues[currentPerson][tid].suboptions && 's' + id in dialogues[currentPerson][tid].suboptions )) {ti = [0]}
}

function  subtalk(s) {
  if (dialogues[currentPerson][tid].suboptions[s] !== undefined){
  $('#conversations').append("<button type = 'button' name =" + s + " onclick='answer(name)' id='suboption' > " + dialogues[currentPerson][tid].suboptions[s] + "</button>");
}

}

function stoptalk() {
ti = [];
option = false;
$('#conversations').text(dialogues[currentPerson][tid].answers.quit);
setTimeout(function(){
$('#conversations').text('');
conversations.style.display = 'none';
}, 3000);

}

function showInvemtory() {
    $('#game-text').append("<p>Van nálad:</p>");
        $('#game-text').append("<p>" + inventory + "</p>");


}

function changeRoom(dir) {
    if (rooms[currentRoom].directions[dir] !== undefined) {
        currentRoom = rooms[currentRoom].directions[dir];
       $('#game-text').append("<p>" + rooms[currentRoom].description + "</p>");
       image()
    } else {
        $('#game-text').append("<p>Ide nem tudsz menni</p>");
    }
}

function lookAround() {
       if (rooms[currentRoom].items.description !== undefined) {
       $('#game-text').append("<p>" + rooms[currentRoom].items.description + "</p>");
    } else {
        $('#game-text').append("<p>Nincs itt semmi érdekes</p>");
    }




 }

function showHelp() {
    $('#game-text').append("<p>Lehetséges parancsok:</p>");
    $('#game-text').append("<p><ul>");
    for (var i = 0; i < commands.length; i++) {
        $('#game-text').append("<li>" + commands[i] + "</li>");

    }
    $('#game-text').append("</ul></p>");
}

function pickUp(a) {
    if (rooms[currentRoom].items.ids[a] !== undefined) {
         $('#game-text').append("<p>a/az " + a + " hozzá lett adva az eszköztáradhoz </p> ");
        inventory.push (a);

    } else {
        $('#game-text').append("<p>Ez a tárgy nem létezik</p>");


    }





}

function image() {
  $('#game-image').html("<img src='images/" + String(currentRoom) + ".png' class='mar-x-auto disp-bl'>");
}

$(document).ready(function() {

  conversations.style.display = 'none';
    $('#game-text').append("<p>" + rooms.start.description + "</p>");

    $(document).keypress(function(key){
      if(key.which === 13 && $('#user-input').is(':focus')) {
          var value = $('#user-input').val().toLowerCase();
          $('#user-input').val("")
          playerInput(value);
          var d = $('#game-text');
          d.scrollTop(d.prop("scrollHeight"));



          }
    })
});
