import { Client } from 'discord.js'
import 'dotenv/config'
const client = new Client({ intents: ['Guilds', 'GuildMessages'] })

client.login(process.env.TOKEN)
