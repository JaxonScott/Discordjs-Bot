import { SlashCommandBuilder } from '@discordjs/builders'

const SnackCommand = new SlashCommandBuilder()
  .setName('snack')
  .setDescription('order snacks')
  .addStringOption((option) =>
    option
      .setName('type')
      .setDescription('Choose which type of snack you want')
      .setRequired(true)
      .setChoices(
        { name: 'Pizza', value: 'pizza' },
        { name: 'Apple', value: 'apple' },
        { name: 'Chicken', value: 'chicken' }
      )
  )
  .addStringOption((option) =>
    option
      .setName('drink')
      .setDescription('select your drink')
      .setRequired(true)
      .setChoices(
        { name: 'Coke', value: 'coke' },
        { name: 'Pepsi', value: 'pepsi' }
      )
  )

export default SnackCommand.toJSON()
