var rooms  = {

  "start": {
     "description":"Egy sötét szobában vagy látsz valamit <b> észak</b>on, látsz valamit <b>dél</b>en és valami <b>kelet</b>en is fehérlik",
     "directions": {
     "észak": "vízesés",
	   "kelet": "kamra",
     "dél": "börtön"
     },
      "items": {
          "description":"van egy élesnek látszó tárgy a földön és valami fénylik a bokorban",
          "ids": {"kard": "1",
                  "olló": "3"



                },

      },
      "géza": {
        "id": "1"
      }

  },

  "vízesés" :{
      "description":"van egy vízesés itt",
      "directions": {
      "dél":"start"
  },
  },

  "kamra":{
	   "description":"egy sötét kamrában találod magad",
	    "directions":{
		  "nyugat":"start"
  }

},

  "börtön":{
    "description":"Ez egy börtön és mivel rossz voltál bezártak innen nem tudsz kiszabadulni, kezdheted a játékot előröl <b> GAME OVER <b>",
     "directions":{
       "titkos":"cső"
    },
  },

    "cső":{
      "description":"Titkos útra leltél, menj északra,hogy kiszabadulj a börtönből.",
       "directions":{
         "észak":"start"
       },
      },



    }
