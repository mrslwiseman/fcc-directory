https://www.json-generator.com/

## Use these methods to generate dummy json data file

```
[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    name: '{{firstName([random(["male"],["female"])])}}',
    surname: '{{surname()}}',
    location: '{{random(["Melbourne City"], ["Fitzroy"], ["Prahran"], ["St Kilda"], ["Hawthorn"])}}',
	email: '{{email()}}',
    picture: 'http://placehold.it/400x200',
    bio: '{{lorem([2])}}',
     stack: [
      '{{random(["ruby"],["python"], ["php"], ["node.js"])}}', 
      '{{random(["mysql"],["mongo"], ["PostgreSQL"])}}', 
       '{{random(["react"],["angular"], ["bootstrap"], ["css"])}}'
      ],
    fcc_recent: '{{random(["Show the Local Weather Complete"],["Build a Random Quote Machine Complete "], ["Build a Simon Game"], ["Build a Roguelike Dungeon Crawler Game Incomplete"])}}',
    fcc_forum_stats: '{{random(["newbie"],["power user"])}}',
    socials: {
      fcc: '{{email([random])}}',
      github: '{{email([random])}}',
      twitter: '{{email([random])}}'
    }
  }
]
```