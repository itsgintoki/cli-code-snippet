const {Command, program} = require('commander')
const axios = require('axios')
const program = new Command()

program
  .version('1.0.0')
  .description('CLI Code Snippet Manager');


  program.
  command('add')
  .description('Add a Snippet')
  .alias('a')
  .action(()=>{
    
  })
  program.
  command('update <_id>')
  .description('Update a Snippet')
  .alias('u')
  .action(()=>{
    
  })
  program.
  command('findt')
  .description('Find a Snippet by Tag')
  .alias('ft')
  .action(()=>{
    
  })
  program.
  command('findl')
  .description('Find a Snippet by Language')
  .alias('fl')
  .action(()=>{
    
  })
  program.
  command('delete')
  .description('Delete a Snippet')
  .alias('d')
  .action(()=>{
    
  })
  program.
  command('list')
  .description('List all Snippet')
  .alias('l')
  .action(()=>{
    
  })

  program.parse(process.argv)


