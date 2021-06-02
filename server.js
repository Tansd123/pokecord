
const { Attachment } = require("discord.js");
const db = require("quick.db");
const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on("ready", () => {
  console.log("Mở Bot Thành Công");
});

const prefix = config.prefix;
const prefix1 = config.prefix1;

client.on("message", message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();
});


const { Client, MessageEmbed } = require("discord.js");

client.on("message", message => {
  if (
    message.content === prefix + "start" ||
    message.content === prefix1 + "start"
  ) {
    const start = new MessageEmbed()
      .setColor("#0dbab1")
      .setThumbnail(
        "https://cdn.glitch.com/57bff9ee-3d60-48bb-baeb-647ef16f59ac%2F58339b09-0ba3-431f-b7de-cd49ffae6394.image.png?v=1622586586134"
      )
      .setTitle("Pokemon Khởi Đầu")
      .setDescription(
        "Bạn đã sẵn sàng cho cuộc hành trình chưa? Nếu sẵn sàng rồi thì chọn Pokemon khởi đẩu đi ppick <pokemon> vd: ppick charmander"
      )
      .addFields(
        { name: "Genration 1", value: "Bulbasaur|Charmander|Squirtle" },
        { name: "Genration 2", value: "Chikorita|Cyndaquil|Totodile" },
        { name: "Genration 3", value: "Treecko|Torchic|Mudkip" },
        { name: "Genration 4", value: "Turtwig|Chimchar|Piplup" },
        { name: "Genration 5", value: "Snivy|Tepig|Oshawott" },
        { name: "Genration 6", value: "Chespin|Fennekin|Froakie" },
        { name: "Genration 7", value: "Rowlet|Litten|Popplio" },
        { name: "Genration 8", value: "Grookey|Scorbunny|Sobble" }
      )
      .setImage(
        "https://static.wikia.nocookie.net/pokeverse/images/4/46/Pokemon_starters_.png/revision/latest?cb=20180424013225"
      );
    message.channel.send(start);
  }
});




client.on("message", message => {
if (message.content.startsWith(prefix+"dex"||prefix1+"dex")) {
var pokemon = require('./db/pokemon');
    var n = message.content.length()
    var temp = n - 4;
        var pkmn = message.content.substr(4,temp);
      		 pkmn = message.content.toString().toLowerCase();
		for(var i=0;i<pokemon.length;i++){
  		if(pkmn == pokemon[i]._engName.toLowerCase() || pkmn == pokemon[i]._frName.toLowerCase() || pkmn == pokemon[i]._nb){
        var text = "__POKEDEX__\n";
				text += "**N° "+pokemon[i]._nb+"** \n";
				text += "Tên tiếng Anh: **"+pokemon[i]._engName+"** \n";
	 			text += "Tên tiễng Đức: **"+pokemon[i]._frName+"** \n";
				text += "Hệ: **"+pokemon[i]._type+" "+pokemon[i]._type2+"**\n";
				text += "Catch Ratio: **"+pokemon[i]._catchRate+"**\n\n";
				text += "__Base Stats__\n";
				text += "Máu: **"+pokemon[i]._baseStats._hp+"**\n";
				text += "Dame: **"+pokemon[i]._baseStats._atk+"**\n";
				text += "Phòng thủ: **"+pokemon[i]._baseStats._def+"**\n";
				text += "S. Dame: **"+pokemon[i]._baseStats._sAtk+"**\n";
				text += "S. Phòng thủ: **"+pokemon[i]._baseStats._sDef+"**\n";
				text += "Tốc độ: **"+pokemon[i]._baseStats._spd+"**";

        let dex = new MessageEmbed()
        .setTitle(pokemon[i]._engName)
        .setDescription(text)
        .setColor("#FFFF00")
        .setFooter(`command created by hyperium tech`)
        message.channel.send(dex);
			}
		}
}
});

client.login(config.TOKEN)