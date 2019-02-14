const {db} = require('./server/db')
const {green, red} = require('chalk')

const Campuses = require('./server/db/models/campuses')
const Students = require('./server/db/models/students')


const campuses = [{
name: 'Winterfell',
imageUrl: 'https://awoiaf.westeros.org/thumb.php?f=Lino_Drieghe_Winterfell.JPG&width=350',
address: 'Somewhere Cold, North Winterfell',
description: 'Where the sophisticated study'

},
{
name: 'Dorne',
imageUrl: 'https://throneslife.files.wordpress.com/2013/06/sunspear.jpg',
address: 'Sun City, Desert Avenue',
description: 'Hot and sunny here'
},

{
name: `King's Landing`,
imageUrl: 'https://vignette.wikia.nocookie.net/gameofthrones/images/4/43/GreatSeptExteriors.jpg/revision/latest/scale-to-width-down/300?cb=20150321161915',
address: 'Where the gold is aplenty',
description: 'Deception Rules'
}
];

const students = [{
  firstName: 'Daenerys',
  lastName: 'Targaryen',
  email: 'motherofdragons@gmail.com',
  imageUrl: 'http://beta.ems.ladbiblegroup.com/s3/content/808x455/9190dae95b1d3eecc6019a6bd197e092.png',
  gpa: 4,
  campusId: 1
},

{
firstName: 'Jon',
lastName: 'Snow',
email: 'knightswatch@gmail.com',
imageUrl: 'https://s2.r29static.com//bin/entry/7a4/430x516,80/1587720/image.jpg',
gpa: 3.8,
campusId: 2
},

{
firstName: 'Arya',
lastName: 'Stark',
email: 'theGirlWithNoName@gmail.com',
imageUrl: 'https://i.redd.it/i5cbojm4lgy01.jpg',
gpa: 3.4,
campusId: 3
},
];

const seed = async () => {
  await db.sync({force: true})

  await Promise.all(campuses.map(campus => {
    return Campuses.create(campus)
  }))
  await Promise.all(students.map(student => {
    return Students.create(student)
  }))

  console.log(green('Seeding success!'))
  db.close()
}

seed()
  .catch(err => {
    console.error(red('Oh noes! Something went wrong!'))
    console.error(err)
    db.close()
  })
