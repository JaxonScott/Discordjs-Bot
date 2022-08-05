import { Client, GatewayIntentBits, Routes } from 'discord.js'
import { REST } from '@discordjs/rest'
import 'dotenv/config'
//Import roles
import SnackCommand from './commands/snack.js'
import RolesCommand from './commands/roles.js'
import UsersCommand from './commands/user.js'
//env variables
const TOKEN = process.env.TOKEN
const CLIENT_ID = process.env.CLIENT_ID
const GUILD_ID = process.env.GUILD_ID

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
})

const rest = new REST({ version: 10 }).setToken(TOKEN)

client.on('ready', () => console.log(`${client.user.username} has logged in! `))

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === 'snack')
      interaction.reply({
        content: ` Heres your ${interaction.options.getString(
          'type'
        )} & ${interaction.options.getString('drink')} `,
      })
  }
})

client.on('interactionCreate', (interaction) => {
  if (interaction.isChatInputCommand()) {
    if (interaction.commandName === 'users')
      interaction.reply({
        content: ` ${interaction.options.getUser(
          'user'
        )} aint you NATHANIEL B?`,
      })
  }
})

async function main() {
  const commands = [SnackCommand, RolesCommand, UsersCommand]
  try {
    console.log('Started refreshing application (/) commands.')
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    })
    client.login(TOKEN)
  } catch (err) {
    console.log(err)
  }
}

main()
