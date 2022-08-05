import { SlashCommandBuilder } from '@discordjs/builders'

const UsersCommand = new SlashCommandBuilder()
  .setName('users')
  .setDescription('users command')
  .addUserOption((option) => option.setName('user').setDescription('user'))

export default UsersCommand.toJSON()
