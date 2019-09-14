var commands = ["go", "eszköztár","nézzkörül","veddfel","talkto" ];

function playerInput(input) {
    var command = input.split(" ") [0];
    switch(command) {
        case "go":
            var ira = input.split(" ") [1];
            changeRoom(ira);
            break;
        case "help":
            showHelp()
            break;
        case "eszköztár":
            showInvemtory()
            break;
        case "nézzkörül":
            lookAround()
            break;
        case "veddfel":
            var item = input.split(" ") [1];
            pickUp(item)
            break;
        case "talkto":
        var pe = input.split(" ") [1];
        if (rooms[currentRoom][pe] !== undefined) {talkTo(pe)}
        else {  $('#game-text').append("<p>Ő most nincs itt!</p>");}

            break;

            case "speak":
                if (option === true) {
                  var op = input.split(" ") [1];
                  answer(op)
                }
                else {
                  $('#game-text').append("<p>Még nem beszélsz senkivel sem!</p>");
                }
                break;



        default:
            $('#game-text').append("<p>Ezt nem tudod tenni!</p>");

    }
}
