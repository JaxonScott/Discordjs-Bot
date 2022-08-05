import { SlashCommandBuilder } from '@discordjs/builders'

const rolesCommand = new SlashCommandBuilder()
  .setName('addrole')
  .setDescription('Add a role.')
  .addRoleOption((option) =>
    option.setName('newrole').setDescription('Adds the new role')
  )

export default rolesCommand.toJSON()
