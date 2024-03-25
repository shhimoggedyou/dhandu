const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://telegra.ph/file/758549f0de2219884f387.jpg,https://telegra.ph/file/9498496b010dfb5900b80.jpg,https://telegra.ph/file/59bf80efbb6e6576b5a52.jpg,https://telegra.ph/file/ee0e191363161e88e4743.jpg" // ramadan Theme Images
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_05_13_03_25_ewogICJjcmVkcy5qc29uIjogIntcIm5vaXNlS2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiU0xGdTYzYnN4dFNOUGx0czVVeEZzbG16cmhBeDR5ektnaWl3cWUzU1oyaz1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIjNxSWNzTDRMcldzb1o4TDNLV2M5MkN5eWZMd1piLzJ5b21oY1d3L1E5WGc9XCJ9fSxcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiZ051RDRNOEN4TEFTTmdURld4R2hhdUhSUjM2RGFyajM5NzY1a0JBekZXVT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcImMyb0VjemFvamYyaXVoS3FpM3lteEpaUWhGREQ2M3A2MmFPaEtNcTFUazA9XCJ9fSxcInNpZ25lZElkZW50aXR5S2V5XCI6e1wicHJpdmF0ZVwiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiRU5aZUsvUHRHdUNWS2YxSjNHa004dmcrMTRpNnV2U2FvMzJudU82bTUzUT1cIn0sXCJwdWJsaWNcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcInhzV3BXTlE0NU94b09sMFU5WnZ2azZweTQvTjhreGM4akhDaVYzVUJWV2c9XCJ9fSxcInNpZ25lZFByZUtleVwiOntcImtleVBhaXJcIjp7XCJwcml2YXRlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJ5TUpkL2dDOVJLaWFEMWc4R2ZTWGtxdnVhcjdqeUx2ekY1bkRZYzhkSDMwPVwifSxcInB1YmxpY1wiOntcInR5cGVcIjpcIkJ1ZmZlclwiLFwiZGF0YVwiOlwiWHZvK2ZkOE1ERXhneTJwR2M3ZGhKSVY4dlYyQzRuaGI0UTEyTElLa0FXZz1cIn19LFwic2lnbmF0dXJlXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsTms2ZVlXYVFFdjBBK0wwRVBnZXpDc0NNVEp1V25iQUZPbWk3blEycXovdVk0NzBqdnZYZUt3c3h0MTVTUTg2bEYwditTenJOMEthazB0RWxKZVpoUT09XCJ9LFwia2V5SWRcIjoxfSxcInJlZ2lzdHJhdGlvbklkXCI6MjI5LFwiYWR2U2VjcmV0S2V5XCI6XCJtMmRvd3dxOTBMc0N2ZkEwNE0wRkRlZTdFN1BTTThOVXYzNzlSZ01FYzI0PVwiLFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6W3tcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE5MDM4Nzg0NjI4QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkE3N0IxMEFCQzdGNzQwRkJCMTQyQzU3MTIwOENDNjZCXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTEzNDM2MDh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE5MDM4Nzg0NjI4QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIkQ3NUFCQzM1QjA0MkRGM0JCNUYyNjlCNUNEQTc1QzI3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTEzNDM2MDh9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE5MDM4Nzg0NjI4QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjI1NEZDQzY0ODJFMDNEN0VDMEIyRTM0NkIwMUE0MzM3XCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTEzNDM2MTN9LHtcImtleVwiOntcInJlbW90ZUppZFwiOlwiOTE5MDM4Nzg0NjI4QHMud2hhdHNhcHAubmV0XCIsXCJmcm9tTWVcIjp0cnVlLFwiaWRcIjpcIjI2MUUyNURBM0VFNEEzRTgxREVGNzZBNUVERjk3RkVFXCJ9LFwibWVzc2FnZVRpbWVzdGFtcFwiOjE3MTEzNDM2MTR9XSxcIm5leHRQcmVLZXlJZFwiOjMxLFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjozMSxcImFjY291bnRTeW5jQ291bnRlclwiOjEsXCJhY2NvdW50U2V0dGluZ3NcIjp7XCJ1bmFyY2hpdmVDaGF0c1wiOmZhbHNlfSxcImRldmljZUlkXCI6XCJOMjJzVVBKRVNpS0xveGtmd2tfaVRBXCIsXCJwaG9uZUlkXCI6XCI5YTFlYjczMi0xZDFkLTRmOTItOTJkYS0zMDA2MWNjODM3OWNcIixcImlkZW50aXR5SWRcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIlhFWERKekEyaUV0WkEzOFJGRmUxb2Z2V2RXdz1cIn0sXCJyZWdpc3RlcmVkXCI6dHJ1ZSxcImJhY2t1cFRva2VuXCI6e1widHlwZVwiOlwiQnVmZmVyXCIsXCJkYXRhXCI6XCJsZU5XWFFWYnZnS3dRMnh1azVhd3lVODc4OUk9XCJ9LFwicmVnaXN0cmF0aW9uXCI6e30sXCJwYWlyaW5nQ29kZVwiOlwiNTc0Q1BBVDhcIixcIm1lXCI6e1wiaWRcIjpcIjkxOTAzODc4NDYyODoxQHMud2hhdHNhcHAubmV0XCIsXCJuYW1lXCI6XCJGYWxpeHh4X1dpbGxpYW1zXCIsXCJsaWRcIjpcIjIwMDkxOTA1NjY5MTI0NjoxQGxpZFwifSxcImFjY291bnRcIjp7XCJkZXRhaWxzXCI6XCJDSjNKekM4UTlJK0VzQVlZQVNBQUtBQT1cIixcImFjY291bnRTaWduYXR1cmVLZXlcIjpcIlZPeUlhOVZSbmlHS3VkMWR3M0cyQll1bnBVTkZXbkQ1eXFFa0M3cHBZbEk9XCIsXCJhY2NvdW50U2lnbmF0dXJlXCI6XCJFMmJvUVo4OHNhbWdGN2V6RWNjcmhXSmphR1hOQW1XYjY3dFhaZGJHRzl6UjcrZng4a2F2RlJrODk2eFd4L3Y2Z1NXeit6U3VCYlF5aFoxbDdIQkpDdz09XCIsXCJkZXZpY2VTaWduYXR1cmVcIjpcIjdhRnk4MUxGUWh5QTgrUGVabXVPL09ub1ZXM1JBelI0SmJvU0dLUzg2TjdZT1lCOGRQSE1OaHY3MmdXZkl3RG16OWZLVXpqd0l2bDJPZm5RUWg2MWpRPT1cIn0sXCJzaWduYWxJZGVudGl0aWVzXCI6W3tcImlkZW50aWZpZXJcIjp7XCJuYW1lXCI6XCI5MTkwMzg3ODQ2Mjg6MUBzLndoYXRzYXBwLm5ldFwiLFwiZGV2aWNlSWRcIjowfSxcImlkZW50aWZpZXJLZXlcIjp7XCJ0eXBlXCI6XCJCdWZmZXJcIixcImRhdGFcIjpcIkJWVHNpR3ZWVVo0aGlybmRYY054dGdXTHA2VkRSVnB3K2NxaEpBdTZhV0pTXCJ9fV0sXCJwbGF0Zm9ybVwiOlwic21iYVwiLFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6MTcxMTM0MzYwNyxcIm15QXBwU3RhdGVLZXlJZFwiOlwiQUFBQUFHd2xcIn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHd2wuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJVM1E0OENocHpwUVRNMmU3Sm54VVpGdGtLQmFPa3lYbXVLSUtMQVZzT2k4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk5ODIwNzAxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTEzNDM2MDgwMDVcIn0iCn0=" ;


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.1",
  caption : process.env.CAPTION || "niggafuckyou" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Motgerfucker",
  packname: process.env.PACK_NAME || "🏳️‍🌈",
  botname : process.env.BOT_NAME  || "stfu",
  ownername:process.env.OWNER_NAME|| "Nigga youre gay",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};

























global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
