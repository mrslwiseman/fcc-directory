https://www.json-generator.com/

## Use these methods to generate dummy json data file

```
[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    name: '{{firstName([random(["male"],["female"])])}}',
    surname: '{{surname()}}',
    email: '{{email()}}',
    location: '{{random(["Melbourne City"], ["Fitzroy"], ["Prahran"], ["St Kilda"], ["Hawthorn"])}}',
    picture: 'http://placehold.it/400x200',
    bio: '{{lorem([2])}}',
     stack: [
      '{{random(["ruby"],["python"], ["php"], ["node.js"])}}', 
      '{{random(["mysql"],["mongo"], ["PostgreSQL"])}}', 
       '{{random(["react"],["angular"], ["bootstrap"], ["css"])}}'
      ],
    fcc: {
      fcc_username: '{{firstName([random(["male"],["female"])])}}',
      fcc_recent: '{{random(["Show the Local Weather Complete"],["Build a Random Quote Machine Complete "], ["Build a Simon Game"], ["Build a Roguelike Dungeon Crawler Game Incomplete"])}}',
    fcc_forum_stats: '{{random(["newbie"],["power 	user"])}}'
    },
    contact: {
      github: '{{firstName([random(["male"],["female"])])}}',
      twitter: '{{firstName([random(["male"],["female"])])}}',
    },
    meetup: {
      username: '{{email()}}',
      attended:  '{{integer()}}',
      last_seen: '{{date()}}'
    }
  }
]
```