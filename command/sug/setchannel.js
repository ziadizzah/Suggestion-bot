/**
.-----------------------------------------------------------------------------.
||Es| |F1 |F2 |F3 |F4 |F5 | |F6 |F7 |F8 |F9 |F10|                  KINGMAN    |
||__| |___|___|___|___|___| |___|___|___|___|___|              +962792914245  |
| _____________________________________________     ________    ___________   |
||~  |! |" |§ |$ |% |& |/ |( |) |= |? |` || |<-|   |Del|Help|  |{ |} |/ |* |  |
||`__|1_|2_|3_|4_|5_|6_|7_|8_|9_|0_|ß_|´_|\_|__|   |___|____|  |[ |]_|__|__|  |
||<-  |Q |W |E |R |T |Z |U |I |O |P |Ü |* |   ||               |7 |8 |9 |- |  |
||->__|__|__|__|__|__|__|__|__|__|__|__|+_|_  ||               |__|__|__|__|  |
||Ctr|oC|A |S |D |F |G |H |J |K |L |Ö |Ä |^ |<'|               |4 |5 |6 |+ |  |
||___|_L|__|__|__|__|__|__|__|__|__|__|__|#_|__|       __      |__|__|__|__|  |
||^    |> |Y |X |C |V |B |N |M |; |: |_ |^     |      |A |     |1 |2 |3 |E |  |
||_____|<_|__|__|__|__|__|__|__|,_|._|-_|______|    __||_|__   |__|__|__|n |  |
|   |Alt|A  |                       |A  |Alt|      |<-|| |->|  |0    |. |t |  |
|   |___|___|_______________________|___|___|      |__|V_|__|  |_____|__|e_|  |
|                    https://github.com/KMKingman                             |
`-----------------------------------------------------------------------------'
 */
const sug = require('../../me-modals/sug/main')
const st = require('../../me-modals/sug/sugst')
const kingman = require('../../kingmanclass/general')
const { MessageEmbed } = require("discord.js");
 module.exports = {
   name: "sugconfig",
   category: "GENERAL",
   aliases :['تحديد-التشانيل'],
   description: "لتحديد روم الاقتراحات",
   run: async (client, kmsg, args, PREFIX) => {
     const fu = new kingman.MESSAGE(kmsg)
     if(!kmsg.member.hasPermission('MANAGE_MESSAGES')) {
       return await fu.ERR(`You need the \`MANAGE_MESSAGES\` Permissions`)
       }
    let ch = await fu.GetChannel(args[0])
    if(!ch){
      return fu.ERR(`You must specify the Channel\n Usage: \`${PREFIX}${module.exports.name} <channel>\``)
    }
    let x = await st.findOneAndUpdate({
      GuildID : kmsg.guild.id,
    },{
      $set :{
        ChannelID : ch.id
      }
    }
    )
    if(!x) {
      x = await st.create({
        GuildID: kmsg.guild.id,
        ChannelID: ch.id
      })
    }
    x.save()
    await fu.SEND(`The Channel has been Saved!`, `**Suggestions Channel Updated to <#${ch.id}>**`)
     

    }
 }
