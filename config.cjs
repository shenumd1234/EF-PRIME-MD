// config.js - Optimus Prime Bot Configuration
// Author: Frank kaumba dev

const fs = require("fs");
require("dotenv").config();
const config = {

  SESSION_ID: process.env.SESSION_ID || "EF-PRIME;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYU5tQlJLSjdkUGk1WXdkbFpMMTRUL1V0OG9HU3ZZRm5oYW8rc1JBK2xFWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZWFTY3dYK2E4TTBhYVZ6SlE3VWFkWDRZSmpFYUFKQ3NvWXQ5bW1BVEdpRT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrQkgvNm1RU3JSYXp1aXR4bXVXdUNnWU9uWVl2N0lOQkRFQTNWU1FIMW00PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ0TFhqNFJCV2lueUx6Mm9wLzV3RnBOc1lzZ1I4empGV0tTRUwydFlhNEhrPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InVLS3FpZ2ZhUkl0Y1hzaEtuQlNSUEsyWDR4cGlaTGN5dGlvRVlHTlV6RTA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlxVFJZcU11NUFseCtObzhBQXIzMnkrcWlEOTIybEc3b0FObVVVdmtpaTA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicU40eDg5ekZZUUNZSmdZTGNieUhYaHB5aEN0NVRHK1htSTErZldMQXNWVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZmgxbHBTdmxoa3VuNmdTUHJuWktqZnFMSTBZNkdZdWNRaHNkVnJMbFNpWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImQwT3NTY1VNSlhCSGt2MUZHK1lXeDMrVmhNQyszYUswSnRYeVJRRXd6bko1QkFDNUxGNy9EMHQ0MlJUVzlENWZFN1R3SUZiSVF4MnN6cTJpOTRobkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAyLCJhZHZTZWNyZXRLZXkiOiJOLzk1SEtrUVhCM01yTTJpWElvVy95TFBjVlJ4dUpPZzJFRUhaL2swaWpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJxYzlqNXpJRlN4LXhySExFNGZLaGxRIiwicGhvbmVJZCI6ImM4YWVhMzljLTc0YWQtNGRjOC05MDUzLWYwOTA5NzU2ZmI0MSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJWSlRmK1E1Q1B4V012ZXNDMWhiWUNuRGl1amc9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlQ2SDNZeHZDUDFVa2tFU2plNUFXN21LaU1ZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNYOEZCWVgzIiwibWUiOnsiaWQiOiI5NDc3MDg5Mzc5NDoyMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZm4IPCdmbDwnZm8IPCdmoHwnZm08J2ZsPCdmbtcblxu4bSuXG7htLhcbuG0rFxu4bacXG7htLdcbuKCqcOY4rGg4oKjIPCThIIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lyYWtORURFT0dtODhBR0dBVWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjZIclE4L2s1VklEeTVIRXFpM3BKVXhnL1pRRVFrdzRxZGIvWU1xU29EVjg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlFOcThKeUc4bjNqcjNPbVR0d3RKbjJvRnNIUjltUlVzKy9tcDJXWi94YkdWekZ2TnBGNFlJd2xZT2Jneld0RnZoa09TdW5IRjQ3UGxHQW1POTczZkFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJLZms0dFNzaWFCQjR0TDZtUW5Rb1JmcWhVU0hna0R0alRXTTJHOGFSMVFSTVRsZXF1VmdOZ0VYU29nQ0NGNThDYmhnYUYxWVpZZWN2cG41R0dLSVNEZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6Ijk0NzcwODkzNzk0OjIwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmVoNjBQUDVPVlNBOHVSeEtvdDZTVk1ZUDJVQkVKTU9LblcvMkRLa3FBMWYifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDY3MTk1OTgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTE96In0=",
  PREFIX: process.env.PREFIX || '.',
  
  // Message Protection
  ANTI_DELETE: process.env.ANTI_DELETE !== undefined ? process.env.ANTI_DELETE === 'true' : false, 
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN !== undefined ? process.env.AUTO_STATUS_SEEN === 'true' : false, 
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY !== undefined ? process.env.AUTO_STATUS_REPLY === 'true' : false,
  STATUS_READ_MSG: process.env.STATUS_READ_MSG || '',
  
  // Communication Protocols
  AUTO_DL: process.env.AUTO_DL !== undefined ? process.env.AUTO_DL === 'true' : false,
  AUTO_READ: process.env.AUTO_READ !== undefined ? process.env.AUTO_READ === 'false' : false,
  AUTO_TYPING: process.env.AUTO_TYPING !== undefined ? process.env.AUTO_TYPING === 'true' : false,
  AUTO_RECORDING: process.env.AUTO_RECORDING !== undefined ? process.env.AUTO_RECORDING === 'true' : false,
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE !== undefined ? process.env.ALWAYS_ONLINE === 'true' : false,
  AUTO_REACT: process.env.AUTO_REACT !== undefined ? process.env.AUTO_REACT === 'false' : false,
  
  // Defensive Systems
  AUTO_BLOCK: process.env.AUTO_BLOCK !== undefined ? process.env.AUTO_BLOCK === 'false' : true,
  REJECT_CALL: process.env.REJECT_CALL !== undefined ? process.env.REJECT_CALL === 'false' : false, 
  NOT_ALLOW: process.env.NOT_ALLOW !== undefined ? process.env.NOT_ALLOW === 'true' : true,
  
  // Command Mode
  MODE: process.env.MODE || "public",
  
  // Alliance Info
  OWNER_NAME: process.env.OWNER_NAME || "black wolf",
  OWNER_NUMBER: process.env.OWNER_NUMBER || "94770893794",
  GEMINI_KEY: process.env.GEMINI_KEY || "AIzaSyA3-FskH71WtIQbzrhMA7WAC4Th2zqSNiE",
  WELCOME: process.env.WELCOME !== undefined ? process.env.WELCOME === 'true' : true, 
};

module.exports = config;
