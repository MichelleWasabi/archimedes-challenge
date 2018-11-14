var { buildSchema } = require('graphql');
var express = require('express');
var graphqlHTTP = require('express-graphql');

var schema = buildSchema (`
  type Query {
    project(_id Int!) : Project
    items(title: String) : [Project]
  }
  type Project {
    _id: Int
    title: String
    description: String
    files{
      thumbPath: String
    }
}
`);

const items = {
  "data": {
    "project": {
      "_id": "BJP5Cb57z",
      "items": [
        {
          "_id": "Bk6LeM5Qf",
          "title": "Ambrosian Iliad",
          "description": "Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "ryWNLxG5Qz",
              "name": "ryWNLxG5Qz-AmbrosianIliadPict47Achilles.jpg",
              "title": "AmbrosianIliadPict47Achilles.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/ryWNLxG5Qz-AmbrosianIliadPict47Achilles.jpg",
              "thumbPath": "http://iiif.orphe.us/ryWNLxG5Qz-AmbrosianIliadPict47Achilles.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "rJ-Agf57z",
          "title": "Apotheosis Homer",
          "description": "Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "Sy-56xMqmz",
              "name": "Sy-56xMqmz-apotheosis_homer.jpg",
              "title": "apotheosis_homer.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/Sy-56xMqmz-apotheosis_homer.jpg",
              "thumbPath": "http://iiif.orphe.us/Sy-56xMqmz-apotheosis_homer.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "Bk6XWMc7f",
          "title": "Archimedes Test Image",
          "description": "Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "r1bfXbGc7G",
              "name": "r1bfXbGc7G-archimedes.jpg",
              "title": "archimedes.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/r1bfXbGc7G-archimedes.jpg",
              "thumbPath": "http://iiif.orphe.us/r1bfXbGc7G-archimedes.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "H1sM-M5QM",
          "title": "Capitals images",
          "description": "Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "S1-4z-fcmz",
              "name": "S1-4z-fcmz-capitals.jpg",
              "title": "capitals.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/S1-4z-fcmz-capitals.jpg",
              "thumbPath": "http://iiif.orphe.us/S1-4z-fcmz-capitals.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "HyA4bzqXf",
          "title": "Colosseum Test Item",
          "description": null,
          "files": [
            {
              "_id": "r1-rEbzqQf",
              "name": "r1-rEbzqQf-colosseum.jpg",
              "title": "colosseum.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/r1-rEbzqQf-colosseum.jpg",
              "thumbPath": "http://iiif.orphe.us/r1-rEbzqQf-colosseum.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "H1GJ-f5XG",
          "title": "Example battle item",
          "description": null,
          "files": [
            {
              "_id": "HJZOCefqmM",
              "name": "HJZOCefqmM-battle.jpg",
              "title": "battle.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/HJZOCefqmM-battle.jpg",
              "thumbPath": "http://iiif.orphe.us/HJZOCefqmM-battle.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "BJse-z9mG",
          "title": "Example books images",
          "description": "Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "Hk-tJZf5mf",
              "name": "Hk-tJZf5mf-books.jpg",
              "title": "books.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/Hk-tJZf5mf-books.jpg",
              "thumbPath": "http://iiif.orphe.us/Hk-tJZf5mf-books.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "SyQpJZz9mf",
              "name": "SyQpJZz9mf-books2.jpg",
              "title": "books2.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/SyQpJZz9mf-books2.jpg",
              "thumbPath": "http://iiif.orphe.us/SyQpJZz9mf-books2.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "BJZxl-fq7f",
              "name": "BJZxl-fq7f-books3.jpg",
              "title": "books3.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/BJZxl-fq7f-books3.jpg",
              "thumbPath": "http://iiif.orphe.us/BJZxl-fq7f-books3.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "HkPGgWzqQz",
              "name": "HkPGgWzqQz-books4.jpg",
              "title": "books4.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/HkPGgWzqQz-books4.jpg",
              "thumbPath": "http://iiif.orphe.us/HkPGgWzqQz-books4.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "SklylMc7M",
          "title": "Example item",
          "description": null,
          "files": [
            {
              "_id": "Bk-_RJzqXz",
              "name": "Bk-_RJzqXz-5217559269_acfe1c4399_o.jpg",
              "title": "5217559269_acfe1c4399_o.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/Bk-_RJzqXz-5217559269_acfe1c4399_o.jpg",
              "thumbPath": "http://iiif.orphe.us/Bk-_RJzqXz-5217559269_acfe1c4399_o.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "HyFlgz5mG",
          "title": "Example item test",
          "description": "Test quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "H1rjygf97f",
              "name": "H1rjygf97f-download_2-141EC9D4EEC26D8A13D.jpg",
              "title": "download_(2)-141EC9D4EEC26D8A13D.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/H1rjygf97f-download_2-141EC9D4EEC26D8A13D.jpg",
              "thumbPath": null
            }
          ]
        },
        {
          "_id": "SksBgz9QM",
          "title": "Example item with Achilles",
          "description": "Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "rJZNNgG9QM",
              "name": "rJZNNgG9QM-achilles_2.jpg",
              "title": "achilles_2.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/rJZNNgG9QM-achilles_2.jpg",
              "thumbPath": "http://iiif.orphe.us/rJZNNgG9QM-achilles_2.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "S17LNxMq7f",
              "name": "S17LNxMq7f-achilles_hydria.jpg",
              "title": "achilles_hydria.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/S17LNxMq7f-achilles_hydria.jpg",
              "thumbPath": "http://iiif.orphe.us/S17LNxMq7f-achilles_hydria.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "BkHd4gM57z",
              "name": "BkHd4gM57z-Achilles_lyre.jpg",
              "title": "Achilles_lyre.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/BkHd4gM57z-Achilles_lyre.jpg",
              "thumbPath": "http://iiif.orphe.us/BkHd4gM57z-Achilles_lyre.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "S1wqNgG5XM",
              "name": "S1wqNgG5XM-achilles.jpg",
              "title": "achilles.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/S1wqNgG5XM-achilles.jpg",
              "thumbPath": "http://iiif.orphe.us/S1wqNgG5XM-achilles.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "H1YnVxfcmG",
              "name": "H1YnVxfcmG-ajax_achilles_2.jpg",
              "title": "ajax_achilles_2.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/H1YnVxfcmG-ajax_achilles_2.jpg",
              "thumbPath": "http://iiif.orphe.us/H1YnVxfcmG-ajax_achilles_2.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "H1o04ezc7f",
              "name": "H1o04ezc7f-ajax_achilles_3.jpg",
              "title": "ajax_achilles_3.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/H1o04ezc7f-ajax_achilles_3.jpg",
              "thumbPath": "http://iiif.orphe.us/H1o04ezc7f-ajax_achilles_3.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "B16MBxz5XM",
              "name": "B16MBxz5XM-ajax_achilles.jpg",
              "title": "ajax_achilles.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/B16MBxz5XM-ajax_achilles.jpg",
              "thumbPath": "http://iiif.orphe.us/B16MBxz5XM-ajax_achilles.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "rkZ_gM9Qz",
          "title": "Example item with images",
          "description": null,
          "files": [
            {
              "_id": "SkWNvgz5mG",
              "name": "SkWNvgz5mG-amphitheater.jpg",
              "title": "amphitheater.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/SkWNvgz5mG-amphitheater.jpg",
              "thumbPath": "http://iiif.orphe.us/SkWNvgz5mG-amphitheater.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "Hy7UPgzqmz",
              "name": "Hy7UPgzqmz-amphora-detail.jpg",
              "title": "amphora-detail.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/Hy7UPgzqmz-amphora-detail.jpg",
              "thumbPath": "http://iiif.orphe.us/Hy7UPgzqmz-amphora-detail.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "H1StwefqXz",
              "name": "H1StwefqXz-amphorae-many.jpg",
              "title": "amphorae-many.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/H1StwefqXz-amphorae-many.jpg",
              "thumbPath": "http://iiif.orphe.us/H1StwefqXz-amphorae-many.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "B1cn1fcQz",
          "title": "Example item with patterns",
          "description": "Example description quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "rJ-I5kz97M",
              "name": "rJ-I5kz97M-165027461.jpg",
              "title": "165027461.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/rJ-I5kz97M-165027461.jpg",
              "thumbPath": "http://iiif.orphe.us/rJ-I5kz97M-165027461.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "SkQuqJGqmf",
              "name": "SkQuqJGqmf-455424905.jpg",
              "title": "455424905.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/SkQuqJGqmf-455424905.jpg",
              "thumbPath": "http://iiif.orphe.us/SkQuqJGqmf-455424905.jpg/full/90,/0/default.jpg"
            },
            {
              "_id": "S1S99Jz5mG",
              "name": "S1S99Jz5mG-516164239.jpg",
              "title": "516164239.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/S1S99Jz5mG-516164239.jpg",
              "thumbPath": "http://iiif.orphe.us/S1S99Jz5mG-516164239.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "BJ7A1f5QG",
          "title": "Example Item with sculpture",
          "description": null,
          "files": [
            {
              "_id": "BkWw61f5Qf",
              "name": "BkWw61f5Qf-3086617192_7d4eaa8454_o.jpg",
              "title": "3086617192_7d4eaa8454_o.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/BkWw61f5Qf-3086617192_7d4eaa8454_o.jpg",
              "thumbPath": "http://iiif.orphe.us/BkWw61f5Qf-3086617192_7d4eaa8454_o.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "S1y4gf5mz",
          "title": "Example test item",
          "description": "Quid faciat laetas segetes quo sidere terram vertere Mycenas ulmisque adiungere vites conveniat quae curum boum qui cultus habendo sit pecori apibus quanta experientia parcis hinc canere incipiam. ",
          "files": [
            {
              "_id": "rJWfmxzq7M",
              "name": "rJWfmxzq7M-5473209447_40169320a5_o.jpg",
              "title": "5473209447_40169320a5_o.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/rJWfmxzq7M-5473209447_40169320a5_o.jpg",
              "thumbPath": "http://iiif.orphe.us/rJWfmxzq7M-5473209447_40169320a5_o.jpg/full/90,/0/default.jpg"
            }
          ]
        },
        {
          "_id": "r1cZlG97f",
          "title": "Laocoon Test",
          "description": null,
          "files": [
            {
              "_id": "SJ-QZgf5Xz",
              "name": "SJ-QZgf5Xz-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg",
              "title": "Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg",
              "type": "image/jpeg",
              "path": "https://s3.amazonaws.com/iiif-orpheus/SJ-QZgf5Xz-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg",
              "thumbPath": "http://iiif.orphe.us/SJ-QZgf5Xz-Laocoon_Pio-Clementino_Inv1059-1064-1067.jpg/full/90,/0/default.jpg"
            }
          ]
        }
      ]
    }
  }
}

var getProject = function(args) {
  var id= args.id;
  return items.filter(item => {
    return item.id === id;
  })[0];
};

var getItems = function(args) {
  if(args.title) {
    var title = args.title;
    return items.filter(item => items.title === title)
  }else {
    return items;
  }
};

var root = {
  project: getProject,
  items: getItems
}

// var app = express();
// app.use('/graphql', graphqlHTTP({
//   schema: schema,
//   rootValue: root,
//   graphiql: true,
// }));
// app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'));

export default items;
