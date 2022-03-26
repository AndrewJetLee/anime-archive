export const months = [
  { short: "Jan", long: "January" },
  { short: "Feb", long: "February" },
  { short: "Mar", long: "March" },
  { short: "Apr", long: "April" },
  { short: "May", long: "May" },
  { short: "Jun", long: "June" },
  { short: "Jul", long: "July" },
  { short: "Aug", long: "August" },
  { short: "Sep", long: "September" },
  { short: "Oct", long: "October" },
  { short: "Nov", long: "November" },
  { short: "Dec", long: "December" },
];

export const days = Array(32).fill(" ");

export const getYears = (currentYear) => {
  let pastYears = [];
  for (let i = currentYear; i > currentYear - 100; i--) {
    pastYears.push(i);
  }
  return pastYears;
};

export const footerAnime = [
  {
      "mal_id": 5114,
      "url": "https://myanimelist.net/anime/5114/Fullmetal_Alchemist__Brotherhood",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1223/96541.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1223/96541t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1223/96541l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1223/96541.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1223/96541t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1223/96541l.webp"
          }
      },
      "trailer": {
          "youtube_id": "--IcmZkvL0Q",
          "url": "https://www.youtube.com/watch?v=--IcmZkvL0Q",
          "embed_url": "https://www.youtube.com/embed/--IcmZkvL0Q?enablejsapi=1&wmode=opaque&autoplay=1",
          "images": {
              "image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/default.jpg",
              "small_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/sddefault.jpg",
              "medium_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/mqdefault.jpg",
              "large_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/hqdefault.jpg",
              "maximum_image_url": "https://img.youtube.com/vi/--IcmZkvL0Q/maxresdefault.jpg"
          }
      },
      "title": "Fullmetal Alchemist: Brotherhood",
      "title_english": "Fullmetal Alchemist: Brotherhood",
      "title_japanese": "鋼の錬金術師 FULLMETAL ALCHEMIST",
      "title_synonyms": [
          "Hagane no Renkinjutsushi: Fullmetal Alchemist",
          "Fullmetal Alchemist (2009)",
          "FMA",
          "FMAB"
      ],
      "type": "TV",
      "source": "Manga",
      "episodes": 64,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
          "from": "2009-04-05T00:00:00+00:00",
          "to": "2010-07-04T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 5,
                  "month": 4,
                  "year": 2009
              },
              "to": {
                  "day": 4,
                  "month": 7,
                  "year": 2010
              }
          },
          "string": "Apr 5, 2009 to Jul 4, 2010"
      },
      "duration": "24 min per ep",
      "rating": "R - 17+ (violence & profanity)",
      "score": 9.15,
      "scored_by": 1798003,
      "rank": 1,
      "popularity": 3,
      "members": 2819041,
      "favorites": 197772,
      "synopsis": "After a horrific alchemy experiment goes wrong in the Elric household, brothers Edward and Alphonse are left in a catastrophic new reality. Ignoring the alchemical principle banning human transmutation, the boys attempted to bring their recently deceased mother back to life. Instead, they suffered brutal personal loss: Alphonse's body disintegrated while Edward lost a leg and then sacrificed an arm to keep Alphonse's soul in the physical realm by binding it to a hulking suit of armor. The brothers are rescued by their neighbor Pinako Rockbell and her granddaughter Winry. Known as a bio-mechanical engineering prodigy, Winry creates prosthetic limbs for Edward by utilizing \"automail,\" a tough, versatile metal used in robots and combat armor. After years of training, the Elric brothers set off on a quest to restore their bodies by locating the Philosopher's Stone—a powerful gem that allows an alchemist to defy the traditional laws of Equivalent Exchange. As Edward becomes an infamous alchemist and gains the nickname \"Fullmetal,\" the boys' journey embroils them in a growing conspiracy that threatens the fate of the world. [Written by MAL Rewrite]",
      "background": null,
      "season": "spring",
      "year": 2009,
      "broadcast": {
          "day": "Sundays",
          "time": "17:00",
          "timezone": "Asia/Tokyo",
          "string": "Sundays at 17:00 (JST)"
      },
      "producers": [
          {
              "mal_id": 17,
              "type": "anime",
              "name": "Aniplex",
              "url": "https://myanimelist.net/anime/producer/17/Aniplex"
          },
          {
              "mal_id": 58,
              "type": "anime",
              "name": "Square Enix",
              "url": "https://myanimelist.net/anime/producer/58/Square_Enix"
          },
          {
              "mal_id": 143,
              "type": "anime",
              "name": "Mainichi Broadcasting System",
              "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
          },
          {
              "mal_id": 1155,
              "type": "anime",
              "name": "Studio Moriken",
              "url": "https://myanimelist.net/anime/producer/1155/Studio_Moriken"
          }
      ],
      "licensors": [
          {
              "mal_id": 102,
              "type": "anime",
              "name": "Funimation",
              "url": "https://myanimelist.net/anime/producer/102/Funimation"
          },
          {
              "mal_id": 493,
              "type": "anime",
              "name": "Aniplex of America",
              "url": "https://myanimelist.net/anime/producer/493/Aniplex_of_America"
          }
      ],
      "studios": [
          {
              "mal_id": 4,
              "type": "anime",
              "name": "Bones",
              "url": "https://myanimelist.net/anime/producer/4/Bones"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "anime",
              "name": "Action",
              "url": "https://myanimelist.net/anime/genre/1/Action"
          },
          {
              "mal_id": 2,
              "type": "anime",
              "name": "Adventure",
              "url": "https://myanimelist.net/anime/genre/2/Adventure"
          },
          {
              "mal_id": 4,
              "type": "anime",
              "name": "Comedy",
              "url": "https://myanimelist.net/anime/genre/4/Comedy"
          },
          {
              "mal_id": 8,
              "type": "anime",
              "name": "Drama",
              "url": "https://myanimelist.net/anime/genre/8/Drama"
          },
          {
              "mal_id": 10,
              "type": "anime",
              "name": "Fantasy",
              "url": "https://myanimelist.net/anime/genre/10/Fantasy"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 38,
              "type": "anime",
              "name": "Military",
              "url": "https://myanimelist.net/anime/genre/38/Military"
          }
      ],
      "demographics": [
          {
              "mal_id": 27,
              "type": "anime",
              "name": "Shounen",
              "url": "https://myanimelist.net/anime/genre/27/Shounen"
          }
      ]
  },
  {
      "mal_id": 28977,
      "url": "https://myanimelist.net/anime/28977/Gintama°",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/anime/3/72078.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/3/72078t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/3/72078l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/anime/3/72078.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/3/72078t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/3/72078l.webp"
          }
      },
      "trailer": {
          "youtube_id": null,
          "url": null,
          "embed_url": null,
          "images": {
              "image_url": null,
              "small_image_url": null,
              "medium_image_url": null,
              "large_image_url": null,
              "maximum_image_url": null
          }
      },
      "title": "Gintama°",
      "title_english": "Gintama Season 4",
      "title_japanese": "銀魂°",
      "title_synonyms": [
          "Gintama' (2015)"
      ],
      "type": "TV",
      "source": "Manga",
      "episodes": 51,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
          "from": "2015-04-08T00:00:00+00:00",
          "to": "2016-03-30T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 8,
                  "month": 4,
                  "year": 2015
              },
              "to": {
                  "day": 30,
                  "month": 3,
                  "year": 2016
              }
          },
          "string": "Apr 8, 2015 to Mar 30, 2016"
      },
      "duration": "24 min per ep",
      "rating": "PG-13 - Teens 13 or older",
      "score": 9.09,
      "scored_by": 207421,
      "rank": 2,
      "popularity": 336,
      "members": 518607,
      "favorites": 13770,
      "synopsis": "Gintoki, Shinpachi, and Kagura return as the fun-loving but broke members of the Yorozuya team! Living in an alternate-reality Edo, where swords are prohibited and alien overlords have conquered Japan, they try to thrive on doing whatever work they can get their hands on. However, Shinpachi and Kagura still haven't been paid... Does Gin-chan really spend all that cash playing pachinko? Meanwhile, when Gintoki drunkenly staggers home one night, an alien spaceship crashes nearby. A fatally injured crew member emerges from the ship and gives Gintoki a strange, clock-shaped device, warning him that it is incredibly powerful and must be safeguarded. Mistaking it for his alarm clock, Gintoki proceeds to smash the device the next morning and suddenly discovers that the world outside his apartment has come to a standstill. With Kagura and Shinpachi at his side, he sets off to get the device fixed; though, as usual, nothing is ever that simple for the Yorozuya team. Filled with tongue-in-cheek humor and moments of heartfelt emotion, Gintama's fourth season finds Gintoki and his friends facing both their most hilarious misadventures and most dangerous crises yet. [Written by MAL Rewrite]",
      "background": "This is a fourth season of Gintama. In the episode continuity corresponds to episodes 266-316 of Gintama.",
      "season": "spring",
      "year": 2015,
      "broadcast": {
          "day": "Wednesdays",
          "time": "18:00",
          "timezone": "Asia/Tokyo",
          "string": "Wednesdays at 18:00 (JST)"
      },
      "producers": [
          {
              "mal_id": 16,
              "type": "anime",
              "name": "TV Tokyo",
              "url": "https://myanimelist.net/anime/producer/16/TV_Tokyo"
          },
          {
              "mal_id": 17,
              "type": "anime",
              "name": "Aniplex",
              "url": "https://myanimelist.net/anime/producer/17/Aniplex"
          },
          {
              "mal_id": 53,
              "type": "anime",
              "name": "Dentsu",
              "url": "https://myanimelist.net/anime/producer/53/Dentsu"
          }
      ],
      "licensors": [
          {
              "mal_id": 102,
              "type": "anime",
              "name": "Funimation",
              "url": "https://myanimelist.net/anime/producer/102/Funimation"
          },
          {
              "mal_id": 1468,
              "type": "anime",
              "name": "Crunchyroll",
              "url": "https://myanimelist.net/anime/producer/1468/Crunchyroll"
          }
      ],
      "studios": [
          {
              "mal_id": 1258,
              "type": "anime",
              "name": "Bandai Namco Pictures",
              "url": "https://myanimelist.net/anime/producer/1258/Bandai_Namco_Pictures"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "anime",
              "name": "Action",
              "url": "https://myanimelist.net/anime/genre/1/Action"
          },
          {
              "mal_id": 4,
              "type": "anime",
              "name": "Comedy",
              "url": "https://myanimelist.net/anime/genre/4/Comedy"
          },
          {
              "mal_id": 24,
              "type": "anime",
              "name": "Sci-Fi",
              "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 13,
              "type": "anime",
              "name": "Historical",
              "url": "https://myanimelist.net/anime/genre/13/Historical"
          },
          {
              "mal_id": 20,
              "type": "anime",
              "name": "Parody",
              "url": "https://myanimelist.net/anime/genre/20/Parody"
          },
          {
              "mal_id": 21,
              "type": "anime",
              "name": "Samurai",
              "url": "https://myanimelist.net/anime/genre/21/Samurai"
          }
      ],
      "demographics": [
          {
              "mal_id": 27,
              "type": "anime",
              "name": "Shounen",
              "url": "https://myanimelist.net/anime/genre/27/Shounen"
          }
      ]
  },
  {
      "mal_id": 9253,
      "url": "https://myanimelist.net/anime/9253/Steins_Gate",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/anime/5/73199.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/5/73199t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/5/73199l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/anime/5/73199.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/5/73199t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/5/73199l.webp"
          }
      },
      "trailer": {
          "youtube_id": "27OZc-ku6is",
          "url": "https://www.youtube.com/watch?v=27OZc-ku6is",
          "embed_url": "https://www.youtube.com/embed/27OZc-ku6is?enablejsapi=1&wmode=opaque&autoplay=1",
          "images": {
              "image_url": "https://img.youtube.com/vi/27OZc-ku6is/default.jpg",
              "small_image_url": "https://img.youtube.com/vi/27OZc-ku6is/sddefault.jpg",
              "medium_image_url": "https://img.youtube.com/vi/27OZc-ku6is/mqdefault.jpg",
              "large_image_url": "https://img.youtube.com/vi/27OZc-ku6is/hqdefault.jpg",
              "maximum_image_url": "https://img.youtube.com/vi/27OZc-ku6is/maxresdefault.jpg"
          }
      },
      "title": "Steins;Gate",
      "title_english": "Steins;Gate",
      "title_japanese": "STEINS;GATE",
      "title_synonyms": [],
      "type": "TV",
      "source": "Visual novel",
      "episodes": 24,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
          "from": "2011-04-06T00:00:00+00:00",
          "to": "2011-09-14T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 6,
                  "month": 4,
                  "year": 2011
              },
              "to": {
                  "day": 14,
                  "month": 9,
                  "year": 2011
              }
          },
          "string": "Apr 6, 2011 to Sep 14, 2011"
      },
      "duration": "24 min per ep",
      "rating": "PG-13 - Teens 13 or older",
      "score": 9.09,
      "scored_by": 1209309,
      "rank": 3,
      "popularity": 13,
      "members": 2190117,
      "favorites": 167339,
      "synopsis": "The self-proclaimed mad scientist Rintarou Okabe rents out a room in a rickety old building in Akihabara, where he indulges himself in his hobby of inventing prospective \"future gadgets\" with fellow lab members: Mayuri Shiina, his air-headed childhood friend, and Hashida Itaru, a perverted hacker nicknamed \"Daru.\" The three pass the time by tinkering with their most promising contraption yet, a machine dubbed the \"Phone Microwave,\" which performs the strange function of morphing bananas into piles of green gel. Though miraculous in itself, the phenomenon doesn't provide anything concrete in Okabe's search for a scientific breakthrough; that is, until the lab members are spurred into action by a string of mysterious happenings before stumbling upon an unexpected success—the Phone Microwave can send emails to the past, altering the flow of history. Adapted from the critically acclaimed visual novel by 5pb. and Nitroplus, Steins;Gate takes Okabe through the depths of scientific theory and practicality. Forced across the diverging threads of past and present, Okabe must shoulder the burdens that come with holding the key to the realm of time. [Written by MAL Rewrite]",
      "background": "Steins;Gate is based on 5pb. and Nitroplus' released in 2009.",
      "season": "spring",
      "year": 2011,
      "broadcast": {
          "day": "Wednesdays",
          "time": "02:05",
          "timezone": "Asia/Tokyo",
          "string": "Wednesdays at 02:05 (JST)"
      },
      "producers": [
          {
              "mal_id": 61,
              "type": "anime",
              "name": "Frontier Works",
              "url": "https://myanimelist.net/anime/producer/61/Frontier_Works"
          },
          {
              "mal_id": 108,
              "type": "anime",
              "name": "Media Factory",
              "url": "https://myanimelist.net/anime/producer/108/Media_Factory"
          },
          {
              "mal_id": 166,
              "type": "anime",
              "name": "Movic",
              "url": "https://myanimelist.net/anime/producer/166/Movic"
          },
          {
              "mal_id": 238,
              "type": "anime",
              "name": "AT-X",
              "url": "https://myanimelist.net/anime/producer/238/AT-X"
          },
          {
              "mal_id": 352,
              "type": "anime",
              "name": "Kadokawa Pictures Japan",
              "url": "https://myanimelist.net/anime/producer/352/Kadokawa_Pictures_Japan"
          },
          {
              "mal_id": 459,
              "type": "anime",
              "name": "Nitroplus",
              "url": "https://myanimelist.net/anime/producer/459/Nitroplus"
          }
      ],
      "licensors": [
          {
              "mal_id": 102,
              "type": "anime",
              "name": "Funimation",
              "url": "https://myanimelist.net/anime/producer/102/Funimation"
          }
      ],
      "studios": [
          {
              "mal_id": 314,
              "type": "anime",
              "name": "White Fox",
              "url": "https://myanimelist.net/anime/producer/314/White_Fox"
          }
      ],
      "genres": [
          {
              "mal_id": 8,
              "type": "anime",
              "name": "Drama",
              "url": "https://myanimelist.net/anime/genre/8/Drama"
          },
          {
              "mal_id": 24,
              "type": "anime",
              "name": "Sci-Fi",
              "url": "https://myanimelist.net/anime/genre/24/Sci-Fi"
          },
          {
              "mal_id": 41,
              "type": "anime",
              "name": "Suspense",
              "url": "https://myanimelist.net/anime/genre/41/Suspense"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 40,
              "type": "anime",
              "name": "Psychological",
              "url": "https://myanimelist.net/anime/genre/40/Psychological"
          }
      ],
      "demographics": []
  },
  {
      "mal_id": 38524,
      "url": "https://myanimelist.net/anime/38524/Shingeki_no_Kyojin_Season_3_Part_2",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1517/100633.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1517/100633.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1517/100633l.webp"
          }
      },
      "trailer": {
          "youtube_id": "hKHepjfj5Tw",
          "url": "https://www.youtube.com/watch?v=hKHepjfj5Tw",
          "embed_url": "https://www.youtube.com/embed/hKHepjfj5Tw?enablejsapi=1&wmode=opaque&autoplay=1",
          "images": {
              "image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/default.jpg",
              "small_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/sddefault.jpg",
              "medium_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/mqdefault.jpg",
              "large_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/hqdefault.jpg",
              "maximum_image_url": "https://img.youtube.com/vi/hKHepjfj5Tw/maxresdefault.jpg"
          }
      },
      "title": "Shingeki no Kyojin Season 3 Part 2",
      "title_english": "Attack on Titan Season 3 Part 2",
      "title_japanese": "進撃の巨人 Season3 Part.2",
      "title_synonyms": [],
      "type": "TV",
      "source": "Manga",
      "episodes": 10,
      "status": "Finished Airing",
      "airing": false,
      "aired": {
          "from": "2019-04-29T00:00:00+00:00",
          "to": "2019-07-01T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 29,
                  "month": 4,
                  "year": 2019
              },
              "to": {
                  "day": 1,
                  "month": 7,
                  "year": 2019
              }
          },
          "string": "Apr 29, 2019 to Jul 1, 2019"
      },
      "duration": "23 min per ep",
      "rating": "R - 17+ (violence & profanity)",
      "score": 9.08,
      "scored_by": 1243257,
      "rank": 4,
      "popularity": 31,
      "members": 1762892,
      "favorites": 49344,
      "synopsis": "Seeking to restore humanity's diminishing hope, the Survey Corps embark on a mission to retake Wall Maria, where the battle against the merciless \"Titans\" takes the stage once again. Returning to the tattered Shiganshina District that was once his home, Eren Yeager and the Corps find the town oddly unoccupied by Titans. Even after the outer gate is plugged, they strangely encounter no opposition. The mission progresses smoothly until Armin Arlert, highly suspicious of the enemy's absence, discovers distressing signs of a potential scheme against them. Shingeki no Kyojin Season 3 Part 2 follows Eren as he vows to take back everything that was once his. Alongside him, the Survey Corps strive—through countless sacrifices—to carve a path towards victory and uncover the secrets locked away in the Yeager family's basement. [Written by MAL Rewrite]",
      "background": "Shingeki no Kyojin adapts content from volumes 18-22 of Hajime Isayama's award-winning manga of the same name.",
      "season": "spring",
      "year": 2019,
      "broadcast": {
          "day": "Mondays",
          "time": "00:10",
          "timezone": "Asia/Tokyo",
          "string": "Mondays at 00:10 (JST)"
      },
      "producers": [
          {
              "mal_id": 10,
              "type": "anime",
              "name": "Production I.G",
              "url": "https://myanimelist.net/anime/producer/10/Production_IG"
          },
          {
              "mal_id": 53,
              "type": "anime",
              "name": "Dentsu",
              "url": "https://myanimelist.net/anime/producer/53/Dentsu"
          },
          {
              "mal_id": 143,
              "type": "anime",
              "name": "Mainichi Broadcasting System",
              "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
          },
          {
              "mal_id": 144,
              "type": "anime",
              "name": "Pony Canyon",
              "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
          },
          {
              "mal_id": 159,
              "type": "anime",
              "name": "Kodansha",
              "url": "https://myanimelist.net/anime/producer/159/Kodansha"
          },
          {
              "mal_id": 1499,
              "type": "anime",
              "name": "Techno Sound",
              "url": "https://myanimelist.net/anime/producer/1499/Techno_Sound"
          },
          {
              "mal_id": 1557,
              "type": "anime",
              "name": "Pony Canyon Enterprise",
              "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprise"
          }
      ],
      "licensors": [
          {
              "mal_id": 102,
              "type": "anime",
              "name": "Funimation",
              "url": "https://myanimelist.net/anime/producer/102/Funimation"
          }
      ],
      "studios": [
          {
              "mal_id": 858,
              "type": "anime",
              "name": "Wit Studio",
              "url": "https://myanimelist.net/anime/producer/858/Wit_Studio"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "anime",
              "name": "Action",
              "url": "https://myanimelist.net/anime/genre/1/Action"
          },
          {
              "mal_id": 8,
              "type": "anime",
              "name": "Drama",
              "url": "https://myanimelist.net/anime/genre/8/Drama"
          },
          {
              "mal_id": 10,
              "type": "anime",
              "name": "Fantasy",
              "url": "https://myanimelist.net/anime/genre/10/Fantasy"
          },
          {
              "mal_id": 7,
              "type": "anime",
              "name": "Mystery",
              "url": "https://myanimelist.net/anime/genre/7/Mystery"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 38,
              "type": "anime",
              "name": "Military",
              "url": "https://myanimelist.net/anime/genre/38/Military"
          },
          {
              "mal_id": 31,
              "type": "anime",
              "name": "Super Power",
              "url": "https://myanimelist.net/anime/genre/31/Super_Power"
          }
      ],
      "demographics": [
          {
              "mal_id": 27,
              "type": "anime",
              "name": "Shounen",
              "url": "https://myanimelist.net/anime/genre/27/Shounen"
          }
      ]
  },
  {
      "mal_id": 48583,
      "url": "https://myanimelist.net/anime/48583/Shingeki_no_Kyojin__The_Final_Season_Part_2",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1948/120625.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/anime/1948/120625.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/anime/1948/120625l.webp"
          }
      },
      "trailer": {
          "youtube_id": "EIVVnLlhzr0",
          "url": "https://www.youtube.com/watch?v=EIVVnLlhzr0",
          "embed_url": "https://www.youtube.com/embed/EIVVnLlhzr0?enablejsapi=1&wmode=opaque&autoplay=1",
          "images": {
              "image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/default.jpg",
              "small_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/sddefault.jpg",
              "medium_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/mqdefault.jpg",
              "large_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/hqdefault.jpg",
              "maximum_image_url": "https://img.youtube.com/vi/EIVVnLlhzr0/maxresdefault.jpg"
          }
      },
      "title": "Shingeki no Kyojin: The Final Season Part 2",
      "title_english": "Attack on Titan: The Final Season Part 2",
      "title_japanese": "進撃の巨人 The Final Season Part 2",
      "title_synonyms": [
          "Shingeki no Kyojin Season 4",
          "Attack on Titan Season 4"
      ],
      "type": "TV",
      "source": "Manga",
      "episodes": 12,
      "status": "Currently Airing",
      "airing": true,
      "aired": {
          "from": "2022-01-10T00:00:00+00:00",
          "to": "2022-04-04T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 10,
                  "month": 1,
                  "year": 2022
              },
              "to": {
                  "day": 4,
                  "month": 4,
                  "year": 2022
              }
          },
          "string": "Jan 10, 2022 to Apr 4, 2022"
      },
      "duration": "23 min per ep",
      "rating": "R - 17+ (violence & profanity)",
      "score": 9.07,
      "scored_by": 212029,
      "rank": 5,
      "popularity": 185,
      "members": 743557,
      "favorites": 21692,
      "synopsis": "Turning against his former allies and enemies alike, Eren Yeager sets a disastrous plan in motion. Under the guidance of the Beast Titan, Zeke, Eren takes extreme measures to end the ancient conflict between Marley and Eldia—but his true intentions remain a mystery. Delving deep into his family's past, Eren fights to control his own destiny. Meanwhile, the long-feuding nations of Marley and Eldia utilize both soldiers and Titans in a brutal race to eliminate the other. Reiner Braun uses his own powers in a desperate bid to hold off Eren's own militaristic force, and his fellow Eldians—children Falco Grice and Gabi Braun—struggle to survive in the unfolding chaos. Elsewhere, Eren's childhood friends Mikasa Ackerman and Armin Arlert remain imprisoned alongside Eren's former Survey Corps companions, all disturbed by Eren's monstrous transformation. Under the blind belief that Eren still secretly harbors good intentions, Mikasa and the others enter the fray in an attempt to save their friend's very soul. [Written by MAL Rewrite]",
      "background": null,
      "season": "winter",
      "year": 2022,
      "broadcast": {
          "day": "Mondays",
          "time": "00:05",
          "timezone": "Asia/Tokyo",
          "string": "Mondays at 00:05 (JST)"
      },
      "producers": [
          {
              "mal_id": 10,
              "type": "anime",
              "name": "Production I.G",
              "url": "https://myanimelist.net/anime/producer/10/Production_IG"
          },
          {
              "mal_id": 53,
              "type": "anime",
              "name": "Dentsu",
              "url": "https://myanimelist.net/anime/producer/53/Dentsu"
          },
          {
              "mal_id": 143,
              "type": "anime",
              "name": "Mainichi Broadcasting System",
              "url": "https://myanimelist.net/anime/producer/143/Mainichi_Broadcasting_System"
          },
          {
              "mal_id": 144,
              "type": "anime",
              "name": "Pony Canyon",
              "url": "https://myanimelist.net/anime/producer/144/Pony_Canyon"
          },
          {
              "mal_id": 159,
              "type": "anime",
              "name": "Kodansha",
              "url": "https://myanimelist.net/anime/producer/159/Kodansha"
          },
          {
              "mal_id": 1557,
              "type": "anime",
              "name": "Pony Canyon Enterprise",
              "url": "https://myanimelist.net/anime/producer/1557/Pony_Canyon_Enterprise"
          }
      ],
      "licensors": [],
      "studios": [
          {
              "mal_id": 569,
              "type": "anime",
              "name": "MAPPA",
              "url": "https://myanimelist.net/anime/producer/569/MAPPA"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "anime",
              "name": "Action",
              "url": "https://myanimelist.net/anime/genre/1/Action"
          },
          {
              "mal_id": 8,
              "type": "anime",
              "name": "Drama",
              "url": "https://myanimelist.net/anime/genre/8/Drama"
          },
          {
              "mal_id": 10,
              "type": "anime",
              "name": "Fantasy",
              "url": "https://myanimelist.net/anime/genre/10/Fantasy"
          },
          {
              "mal_id": 7,
              "type": "anime",
              "name": "Mystery",
              "url": "https://myanimelist.net/anime/genre/7/Mystery"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 38,
              "type": "anime",
              "name": "Military",
              "url": "https://myanimelist.net/anime/genre/38/Military"
          },
          {
              "mal_id": 31,
              "type": "anime",
              "name": "Super Power",
              "url": "https://myanimelist.net/anime/genre/31/Super_Power"
          }
      ],
      "demographics": [
          {
              "mal_id": 27,
              "type": "anime",
              "name": "Shounen",
              "url": "https://myanimelist.net/anime/genre/27/Shounen"
          }
      ]
  }
]

export const footerManga = [
  {
      "mal_id": 2,
      "url": "https://myanimelist.net/manga/2/Berserk",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/manga/1/157897.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/1/157897t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/1/157897l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/manga/1/157897.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/1/157897t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/1/157897l.webp"
          }
      },
      "title": "Berserk",
      "title_english": "Berserk",
      "title_japanese": "ベルセルク",
      "title_synonyms": [
          "Berserk: The Prototype"
      ],
      "type": "Manga",
      "chapters": 380,
      "volumes": 41,
      "status": "On Hiatus",
      "publishing": false,
      "published": {
          "from": "1989-08-25T00:00:00+00:00",
          "to": "2021-09-10T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 25,
                  "month": 8,
                  "year": 1989
              },
              "to": {
                  "day": 10,
                  "month": 9,
                  "year": 2021
              }
          },
          "string": "Aug 25, 1989 to Sep 10, 2021"
      },
      "score": 9.43,
      "scored": 9.43,
      "scored_by": 243176,
      "rank": 1,
      "popularity": 2,
      "members": 504826,
      "favorites": 95134,
      "synopsis": "Guts, a former mercenary now known as the \"Black Swordsman,\" is out for revenge. After a tumultuous childhood, he finally finds someone he respects and believes he can trust, only to have everything fall apart when this person takes away everything important to Guts for the purpose of fulfilling his own desires. Now marked for death, Guts becomes condemned to a fate in which he is relentlessly pursued by demonic beings. Setting out on a dreadful quest riddled with misfortune, Guts, armed with a massive sword and monstrous strength, will let nothing stop him, not even death itself, until he is finally able to take the head of the one who stripped him—and his loved one—of their humanity. [Written by MAL Rewrite] Included one-shot: Volume 14: Berserk: The Prototype",
      "background": "Berserk won the Award for Excellence at the sixth installment of Tezuka Osamu Cultural Prize in 2002. The series has over 40 million copies in print worldwide and has been published in English by Dark Horse since November 4, 2003. It is also published in Italy, Germany, Spain, France, Brazil, South Korea, Hong Kong, Taiwan, Thailand, Poland, México and Turkey.",
      "authors": [
          {
              "mal_id": 1868,
              "type": "people",
              "name": "Miura, Kentarou",
              "url": "https://myanimelist.net/people/1868/Kentarou_Miura"
          }
      ],
      "serializations": [
          {
              "mal_id": 2,
              "type": "manga",
              "name": "Young Animal",
              "url": "https://myanimelist.net/manga/magazine/2/Young_Animal"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "manga",
              "name": "Action",
              "url": "https://myanimelist.net/manga/genre/1/Action"
          },
          {
              "mal_id": 2,
              "type": "manga",
              "name": "Adventure",
              "url": "https://myanimelist.net/manga/genre/2/Adventure"
          },
          {
              "mal_id": 8,
              "type": "manga",
              "name": "Drama",
              "url": "https://myanimelist.net/manga/genre/8/Drama"
          },
          {
              "mal_id": 10,
              "type": "manga",
              "name": "Fantasy",
              "url": "https://myanimelist.net/manga/genre/10/Fantasy"
          },
          {
              "mal_id": 14,
              "type": "manga",
              "name": "Horror",
              "url": "https://myanimelist.net/manga/genre/14/Horror"
          },
          {
              "mal_id": 37,
              "type": "manga",
              "name": "Supernatural",
              "url": "https://myanimelist.net/manga/genre/37/Supernatural"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 6,
              "type": "manga",
              "name": "Demons",
              "url": "https://myanimelist.net/manga/genre/6/Demons"
          },
          {
              "mal_id": 38,
              "type": "manga",
              "name": "Military",
              "url": "https://myanimelist.net/manga/genre/38/Military"
          },
          {
              "mal_id": 40,
              "type": "manga",
              "name": "Psychological",
              "url": "https://myanimelist.net/manga/genre/40/Psychological"
          }
      ],
      "demographics": [
          {
              "mal_id": 41,
              "type": "manga",
              "name": "Seinen",
              "url": "https://myanimelist.net/manga/genre/41/Seinen"
          }
      ]
  },
  {
      "mal_id": 1706,
      "url": "https://myanimelist.net/manga/1706/JoJo_no_Kimyou_na_Bouken_Part_7__Steel_Ball_Run",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/manga/3/179882.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/3/179882t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/3/179882l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/manga/3/179882.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/3/179882t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/3/179882l.webp"
          }
      },
      "title": "JoJo no Kimyou na Bouken Part 7: Steel Ball Run",
      "title_english": null,
      "title_japanese": "ジョジョの奇妙な冒険 Part7 STEEL BALL RUN",
      "title_synonyms": [
          "JoJo's Bizarre Adventure Part 7: Steel Ball Run",
          "SBR"
      ],
      "type": "Manga",
      "chapters": 96,
      "volumes": 24,
      "status": "Finished",
      "publishing": false,
      "published": {
          "from": "2004-01-19T00:00:00+00:00",
          "to": "2011-04-19T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 19,
                  "month": 1,
                  "year": 2004
              },
              "to": {
                  "day": 19,
                  "month": 4,
                  "year": 2011
              }
          },
          "string": "Jan 19, 2004 to Apr 19, 2011"
      },
      "score": 9.27,
      "scored": 9.27,
      "scored_by": 115567,
      "rank": 2,
      "popularity": 26,
      "members": 194078,
      "favorites": 33263,
      "synopsis": "In the American Old West, the world's greatest race is about to begin. Thousands line up in San Diego to travel over six thousand kilometers for a chance to win the grand prize of fifty million dollars. With the era of the horse reaching its end, contestants are allowed to use any kind of vehicle they wish. Competitors will have to endure grueling conditions, traveling up to a hundred kilometers a day through uncharted wastelands. The Steel Ball Run is truly a one-of-a-kind event. The youthful Johnny Joestar, a crippled former horse racer, has come to San Diego to watch the start of the race. There he encounters Gyro Zeppeli, a racer with two steel balls at his waist instead of a gun. Johnny witnesses Gyro using one of his steel balls to unleash a fantastical power, compelling a man to fire his gun at himself during a duel. In the midst of the action, Johnny happens to touch the steel ball and feels a power surging through his legs, allowing him to stand up for the first time in two years. Vowing to find the secret of the steel balls, Johnny decides to compete in the race, and so begins his bizarre adventure across America on the Steel Ball Run. [Written by MAL Rewrite]",
      "background": "JoJo no Kimyou na Bouken Part 7: Steel Ball Run was originally presented as an unrelated story to the JoJo series and was serialized in Weekly Shounen Jump magazine as Steel Ball Run from issues #8~47 2004. Serialization then transferred to Ultra Jump magazine from issue May 2005 and the series was officially declared as Part 7 of the JoJo no Kimyou na Bouken series.",
      "authors": [
          {
              "mal_id": 2619,
              "type": "people",
              "name": "Araki, Hirohiko",
              "url": "https://myanimelist.net/people/2619/Hirohiko_Araki"
          }
      ],
      "serializations": [
          {
              "mal_id": 25,
              "type": "manga",
              "name": "Ultra Jump",
              "url": "https://myanimelist.net/manga/magazine/25/Ultra_Jump"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "manga",
              "name": "Action",
              "url": "https://myanimelist.net/manga/genre/1/Action"
          },
          {
              "mal_id": 2,
              "type": "manga",
              "name": "Adventure",
              "url": "https://myanimelist.net/manga/genre/2/Adventure"
          },
          {
              "mal_id": 14,
              "type": "manga",
              "name": "Horror",
              "url": "https://myanimelist.net/manga/genre/14/Horror"
          },
          {
              "mal_id": 7,
              "type": "manga",
              "name": "Mystery",
              "url": "https://myanimelist.net/manga/genre/7/Mystery"
          },
          {
              "mal_id": 37,
              "type": "manga",
              "name": "Supernatural",
              "url": "https://myanimelist.net/manga/genre/37/Supernatural"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 13,
              "type": "manga",
              "name": "Historical",
              "url": "https://myanimelist.net/manga/genre/13/Historical"
          }
      ],
      "demographics": [
          {
              "mal_id": 41,
              "type": "manga",
              "name": "Seinen",
              "url": "https://myanimelist.net/manga/genre/41/Seinen"
          },
          {
              "mal_id": 27,
              "type": "manga",
              "name": "Shounen",
              "url": "https://myanimelist.net/manga/genre/27/Shounen"
          }
      ]
  },
  {
      "mal_id": 13,
      "url": "https://myanimelist.net/manga/13/One_Piece",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/manga/2/253146.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/2/253146t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/2/253146l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/manga/2/253146.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/2/253146t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/2/253146l.webp"
          }
      },
      "title": "One Piece",
      "title_english": "One Piece",
      "title_japanese": "ONE PIECE",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": null,
      "volumes": null,
      "status": "Publishing",
      "publishing": true,
      "published": {
          "from": "1997-07-22T00:00:00+00:00",
          "to": null,
          "prop": {
              "from": {
                  "day": 22,
                  "month": 7,
                  "year": 1997
              },
              "to": {
                  "day": null,
                  "month": null,
                  "year": null
              }
          },
          "string": "Jul 22, 1997 to ?"
      },
      "score": 9.18,
      "scored": 9.18,
      "scored_by": 283719,
      "rank": 3,
      "popularity": 3,
      "members": 465819,
      "favorites": 92942,
      "synopsis": "Gol D. Roger, a man referred to as the \"Pirate King,\" is set to be executed by the World Government. But just before his demise, he confirms the existence of a great treasure, One Piece, located somewhere within the vast ocean known as the Grand Line. Announcing that One Piece can be claimed by anyone worthy enough to reach it, the Pirate King is executed and the Great Age of Pirates begins. Twenty-two years later, a young man by the name of Monkey D. Luffy is ready to embark on his own adventure, searching for One Piece and striving to become the new Pirate King. Armed with just a straw hat, a small boat, and an elastic body, he sets out on a fantastic journey to gather his own crew and a worthy ship that will take them across the Grand Line to claim the greatest status on the high seas. [Written by MAL Rewrite]",
      "background": "One Piece is the highest selling manga series of all time, with over 480 million copies in circulation as of February 2021. Volume 67 of the series currently holds the record for highest first print run of any manga (including books) of all time in Japan, with 4.05 million in 2012. The series was a finalist for the Tezuka Osamu Cultural Prize three times in a row from 2000 to 2002. In 2012, it won the 41st Japan Cartoonists Association Award Grand Prize, alongside Kimuchi Yokoyama's Neko Darake. VIZ Media has published One Piece in English under the Shonen Jump imprint since January 2, 2003 and in 3-in-1 omnibus editions since December 1, 2009. VIZ Media released three boxed sets for the manga; the first including the first 23 volumes released on November 5, 2013, the second including volumes 24-46 released on November 4, 2014, and the third including volumes 47-70 released on October 4, 2016. The series has also been published in numerous amounts of languages worldwide including; Korean, Malay, Indonesian, Chinese, Thai, Vietnamese, German, French, Italian, Spanish, Portuguese, Swedish, Danish, Norwegian, Finnish, Polish, Turkish, and Russian.",
      "authors": [
          {
              "mal_id": 1881,
              "type": "people",
              "name": "Oda, Eiichiro",
              "url": "https://myanimelist.net/people/1881/Eiichiro_Oda"
          }
      ],
      "serializations": [
          {
              "mal_id": 83,
              "type": "manga",
              "name": "Shounen Jump (Weekly)",
              "url": "https://myanimelist.net/manga/magazine/83/Shounen_Jump_Weekly"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "manga",
              "name": "Action",
              "url": "https://myanimelist.net/manga/genre/1/Action"
          },
          {
              "mal_id": 2,
              "type": "manga",
              "name": "Adventure",
              "url": "https://myanimelist.net/manga/genre/2/Adventure"
          },
          {
              "mal_id": 4,
              "type": "manga",
              "name": "Comedy",
              "url": "https://myanimelist.net/manga/genre/4/Comedy"
          },
          {
              "mal_id": 10,
              "type": "manga",
              "name": "Fantasy",
              "url": "https://myanimelist.net/manga/genre/10/Fantasy"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 31,
              "type": "manga",
              "name": "Super Power",
              "url": "https://myanimelist.net/manga/genre/31/Super_Power"
          }
      ],
      "demographics": [
          {
              "mal_id": 27,
              "type": "manga",
              "name": "Shounen",
              "url": "https://myanimelist.net/manga/genre/27/Shounen"
          }
      ]
  },
  {
      "mal_id": 656,
      "url": "https://myanimelist.net/manga/656/Vagabond",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/manga/2/181787.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/2/181787t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/2/181787l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/manga/2/181787.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/2/181787t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/2/181787l.webp"
          }
      },
      "title": "Vagabond",
      "title_english": "Vagabond",
      "title_japanese": "バガボンド",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 327,
      "volumes": 37,
      "status": "On Hiatus",
      "publishing": false,
      "published": {
          "from": "1998-09-03T00:00:00+00:00",
          "to": "2015-05-21T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 3,
                  "month": 9,
                  "year": 1998
              },
              "to": {
                  "day": 21,
                  "month": 5,
                  "year": 2015
              }
          },
          "string": "Sep 3, 1998 to May 21, 2015"
      },
      "score": 9.17,
      "scored": 9.17,
      "scored_by": 89876,
      "rank": 4,
      "popularity": 17,
      "members": 256810,
      "favorites": 26918,
      "synopsis": "In 16th-century Japan, Shinmen Takezou is a wild, rough young man, in both his appearance and his actions. His aggressive nature has won him the collective reproach and fear of his village, leading him and his best friend, Matahachi Honiden, to run away in search of something grander than provincial life. The pair enlist in the Toyotomi army, yearning for glory—but when the Toyotomi suffer a crushing defeat at the hands of the Tokugawa Clan at the Battle of Sekigahara, the friends barely make it out alive. After the two are separated, Shinmen returns home on a self-appointed mission to notify the Hon'iden family of Matahachi's survival. He instead finds himself a wanted criminal, framed for his friend's supposed murder based on his history of violence. Upon being captured, he is strung up on a tree and left to die. An itinerant monk, the distinguished Takuan Soho, takes pity on the \"devil child,\" secretly freeing Shinmen and christening him with a new name to avoid pursuit by the authorities: Musashi Miyamoto. Vagabond is the fictitious retelling of the life of one of Japan's most renowned swordsmen, the \"Sword Saint\" Musashi Miyamoto—his rise from a swordsman with no desire other than to become \"Invincible Under the Heavens\" to an enlightened warrior who slowly learns of the importance of close friends, self-reflection, and life itself. [Written by MAL Rewrite]",
      "background": "In 2000, Vagabond won the Japan Media Arts Festival Manga Grand Prize and the 24th Kodansha Manga Award in the general category. The series won the Tezuka Osamu Cultural Prize in 2002 and has had over 82 million copies sold worldwide. Vagabond has been published in English by VIZ Media under the VIZ Signature imprint since April 5, 2002, and in large 3-in-1 omnibuses under the VIZBIG imprint since September 16, 2008. The English release got Takehiko Inoue a nomination for the Eisner Award in the Best Writer/Artist category in 2003. It also has been published in Brazilian Portuguese by Panini Comics/Planet Manga since February 2016.",
      "authors": [
          {
              "mal_id": 1911,
              "type": "people",
              "name": "Inoue, Takehiko",
              "url": "https://myanimelist.net/people/1911/Takehiko_Inoue"
          },
          {
              "mal_id": 5760,
              "type": "people",
              "name": "Yoshikawa, Eiji",
              "url": "https://myanimelist.net/people/5760/Eiji_Yoshikawa"
          }
      ],
      "serializations": [
          {
              "mal_id": 72,
              "type": "manga",
              "name": "Morning",
              "url": "https://myanimelist.net/manga/magazine/72/Morning"
          }
      ],
      "genres": [
          {
              "mal_id": 1,
              "type": "manga",
              "name": "Action",
              "url": "https://myanimelist.net/manga/genre/1/Action"
          },
          {
              "mal_id": 2,
              "type": "manga",
              "name": "Adventure",
              "url": "https://myanimelist.net/manga/genre/2/Adventure"
          },
          {
              "mal_id": 8,
              "type": "manga",
              "name": "Drama",
              "url": "https://myanimelist.net/manga/genre/8/Drama"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 13,
              "type": "manga",
              "name": "Historical",
              "url": "https://myanimelist.net/manga/genre/13/Historical"
          },
          {
              "mal_id": 21,
              "type": "manga",
              "name": "Samurai",
              "url": "https://myanimelist.net/manga/genre/21/Samurai"
          }
      ],
      "demographics": [
          {
              "mal_id": 41,
              "type": "manga",
              "name": "Seinen",
              "url": "https://myanimelist.net/manga/genre/41/Seinen"
          }
      ]
  },
  {
      "mal_id": 1,
      "url": "https://myanimelist.net/manga/1/Monster",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/manga/3/54525.jpg",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/3/54525t.jpg",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/3/54525l.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/manga/3/54525.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/manga/3/54525t.webp",
              "large_image_url": "https://cdn.myanimelist.net/images/manga/3/54525l.webp"
          }
      },
      "title": "Monster",
      "title_english": "Monster",
      "title_japanese": "MONSTER",
      "title_synonyms": [],
      "type": "Manga",
      "chapters": 162,
      "volumes": 18,
      "status": "Finished",
      "publishing": false,
      "published": {
          "from": "1994-12-05T00:00:00+00:00",
          "to": "2001-12-20T00:00:00+00:00",
          "prop": {
              "from": {
                  "day": 5,
                  "month": 12,
                  "year": 1994
              },
              "to": {
                  "day": 20,
                  "month": 12,
                  "year": 2001
              }
          },
          "string": "Dec 5, 1994 to Dec 20, 2001"
      },
      "score": 9.12,
      "scored": 9.12,
      "scored_by": 67821,
      "rank": 5,
      "popularity": 33,
      "members": 175745,
      "favorites": 15393,
      "synopsis": "Kenzou Tenma, a renowned Japanese neurosurgeon working in post-war Germany, faces a difficult choice: to operate on Johan Liebert, an orphan boy on the verge of death, or on the mayor of Düsseldorf. In the end, Tenma decides to gamble his reputation by saving Johan, effectively leaving the mayor for dead. As a consequence of his actions, hospital director Heinemann strips Tenma of his position, and Heinemann's daughter Eva breaks off their engagement. Disgraced and shunned by his colleagues, Tenma loses all hope of a successful career—that is, until the mysterious killing of Heinemann gives him another chance. Nine years later, Tenma is the head of the surgical department and close to becoming the director himself. Although all seems well for him at first, he soon becomes entangled in a chain of gruesome murders that have taken place throughout Germany. The culprit is a monster—the same one that Tenma saved on that fateful day nine years ago. [Written by MAL Rewrite]",
      "background": "Monster won the Grand Prize at the 3rd annual Tezuka Osamu Cultural Prize in 1999, as well as the 46th Shogakukan Manga Award in the General category in 2000. The series was published in English by VIZ Media under the VIZ Signature imprint from February 21, 2006 to December 16, 2008, and again in 2-in-1 omnibuses (subtitled The Perfect Edition) from July 15, 2014 to July 19, 2016. The manga was also published in Brazilian Portuguese by Panini Comics/Planet Manga from June 2012 to April 2015, in Polish by Hanami from March 2014 to February 2017, in Spain by Planeta Cómic from June 16, 2009 to September 21, 2010, and in Argentina by LARP Editores.",
      "authors": [
          {
              "mal_id": 1867,
              "type": "people",
              "name": "Urasawa, Naoki",
              "url": "https://myanimelist.net/people/1867/Naoki_Urasawa"
          }
      ],
      "serializations": [
          {
              "mal_id": 1,
              "type": "manga",
              "name": "Big Comic Original",
              "url": "https://myanimelist.net/manga/magazine/1/Big_Comic_Original"
          }
      ],
      "genres": [
          {
              "mal_id": 8,
              "type": "manga",
              "name": "Drama",
              "url": "https://myanimelist.net/manga/genre/8/Drama"
          },
          {
              "mal_id": 7,
              "type": "manga",
              "name": "Mystery",
              "url": "https://myanimelist.net/manga/genre/7/Mystery"
          }
      ],
      "explicit_genres": [],
      "themes": [
          {
              "mal_id": 40,
              "type": "manga",
              "name": "Psychological",
              "url": "https://myanimelist.net/manga/genre/40/Psychological"
          }
      ],
      "demographics": [
          {
              "mal_id": 41,
              "type": "manga",
              "name": "Seinen",
              "url": "https://myanimelist.net/manga/genre/41/Seinen"
          }
      ]
  }
]

export const footerCharacters = [
  {
      "mal_id": 417,
      "url": "https://myanimelist.net/character/417/Lelouch_Lamperouge",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/characters/8/406163.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/characters/8/406163.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/characters/8/406163t.webp"
          }
      },
      "name": "Lelouch Lamperouge",
      "name_kanji": "ルルーシュ・ランペルージ",
      "nicknames": [
          "Lelouch vi Britannia",
          "Zero",
          "Lulu",
          "Black Prince",
          "The Demon Emperor"
      ],
      "favorites": 152052,
      "about": "Age: 17 (first season), 18 (second season)\nDate of Birth:  December 5, 1999 a.t.b. (Sagittarius)\nBlood Type: A\nNationality: Britannian\nHeight: 178 cm (5'10\")\nWeight: 56 kg (123 lbs)\nOccupation: Student, Terrorist, Knightmare Pilot, Politician, Emperor, Prince\nAllegiance: Order of the Black Knights\nPosition: Leader of the Black Knights\nKnightmare: Sutherland, Burai, Gawain, Shinkirou\n\nLelouch vi Britannia (ルルーシュ・ヴィ・ブリタニア, Rurūshu Vui Buritania) is the main protagonist of the anime/manga series Code Geass. He is the Eleventh Prince of the Holy Britannian Empire and the son of the 98th Emperor of Britannia, Charles zi Britannia.\n\nLelouch is a very clever individual who is also calm, sophisticated, and arrogant due to his aristocratic upbringing. While at school, Lelouch conducts himself as a friendly, likable, and often an easygoing student. However, this is a mask to hide his true nature. While as Zero, his true nature is expressed. His charisma and beliefs in justice gain him the trust and respect of many soldiers and leaders.\n\nHe is known for having a very stoic personality. He never cared about schoolwork, seeing the entire thing as trivial, even though his high intelligence would make it easy for him. He enjoys seeking out challenges, often playing chess against the nobility. In general, Lelouch takes most day-to-day affairs with open disinterest, often not even noticing the affection of others, especially Shirley, his classmate. He has a strong dislike for nobles, viewing them as tepid and \"overprivileged parasites.\"\n\nMany characters have noted that Lelouch is entirely selfish, as his desire to remake the world into what he wants it to become from his desire to avenge his mother's apparent death and Nunnally's sake. However, in time, he realizes that this goal is not just for them but also the entire world.\n\nDespite his cold, calculating demeanor and ruthlessness in battle, he can be a rather compassionate person to his friends and loved ones. To Nunnally, he is a loving older brother, and to Suzaku, a loyal friend, although the two are enemies. Lelouch, at first glance, seems to have relatively little concern for the well-being of his subordinates, but in reality, he does care about them, seeing them as valuable allies.\n\n\nCharacter Background (as Lelouch):\n\nCharacter Background (as Zero):\n\nFirst Season:\n\nSecond Season:\n\n\nGeass:\nLelouch's Geass, bestowed upon him by C.C., gives him \"The Power of Absolute Obedience,\" allowing him to plant commands within a person's mind upon eye contact in a manner comparable to hypnosis. Activation of his Geass is visually represented by the manifestation of a Geass Sigil in his left eye. Commands dictated are written into the minds of the designated targets, the Sigil projecting him from his eye to theirs.\n\nOf all the Geass abilities in the series, Lelouch's has been explored the most and also seems to have the most restrictions, and side effects of any Geass introduced:(Source: Code Geass Wiki, Villains Wiki, Heroes Wiki, Anime and Manga Universe Wiki)"
  },
  {
      "mal_id": 45627,
      "url": "https://myanimelist.net/character/45627/Levi",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/characters/2/241413.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/characters/2/241413.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/characters/2/241413t.webp"
          }
      },
      "name": "Levi",
      "name_kanji": "リヴァイ",
      "nicknames": [],
      "favorites": 127851,
      "about": "Birthday: December 25\nHeight: 160 cm (5'3\")\nWeight: 65 kg (143 lbs)\nAffiliations: Scouting Legion, Special Operations Squad\n\nLevi is known as humanity's most powerful soldier. He's ranked as Captain of the Scouting Legion division. Levi is also the leader of the Special Operations Squad, an elite team that he hand-picked in order to protect Eren Yeager. While it is said that he is blunt and unapproachable, it is noted that he has a strong respect for structure and discipline. There are rumors that he was originally part of underground crime before he became a soldier. Although he often appears to be unfriendly, he cares deeply for his team and has never undervalued human life. He is also a notorious clean-freak.\n\n\nNote: Levi is the official English translation by Kodansha."
  },
  {
      "mal_id": 71,
      "url": "https://myanimelist.net/character/71/L_Lawliet",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/characters/10/249647.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/characters/10/249647.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/characters/10/249647t.webp"
          }
      },
      "name": "L Lawliet",
      "name_kanji": "エル ローライト",
      "nicknames": [
          "Ryuga Hideki",
          "Ryuzaki",
          "Eraldo Coil",
          "Deneuve"
      ],
      "favorites": 116632,
      "about": "Birthday: October 31, 1979 (1982 in anime)\nZodiac sign: Scorpio\nHeight: 179 cm (5'10\")\nWeight: 50 kg (110 lbs.)\nLikes: sweets\nDislikes: Wearing socks\n\nL, who also uses the aliases Hideki Ryuga, Ryuzaki, Eraldo Coil and Deneuve, the latter two for which he has developed reputations as the second—and third—best detectives in the world, is quite secretive and only communicates with the world through his assistant Watari. He never shows his face to the world, instead of representing himself with a capital L in Cloister Black font. After meeting the Kira investigation team, he requests that the task force refers to him as Ryuzaki for discretion. The Kira investigation team never learns his true name.\n\nL's disheveled and languid appearance masks his great powers of deduction and insight. He tends to second-guess everything he is presented with and is extremely meticulous and analytical. He has several quirks such as preferring to crouch rather than sit, eating only sweet foods like desserts and fruits, and holding items very delicately. He stayed in England for five years, and during that time he was the champion in tennis for the England Junior Cup.\n\nL suggests that even though he eats only sweet foods, he remains underweight because the brain uses the most calories of any organ in the body. He also says that if he sits normally, his reasoning ability would drop 40%.\n\n(Source: Wikipedia, Death Note Profiles)"
  },
  {
      "mal_id": 40,
      "url": "https://myanimelist.net/character/40/Luffy_Monkey_D",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/characters/9/310307.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/characters/9/310307.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/characters/9/310307t.webp"
          }
      },
      "name": "Luffy Monkey D.",
      "name_kanji": "モンキー・D・ルフィ",
      "nicknames": [
          "Mugiwara",
          "Straw Hat",
          "Lucy",
          "Luffytaro"
      ],
      "favorites": 111234,
      "about": "Age: 17; 19\nBirthdate: May 5, Taurus\nHeight: 172 cm; 174 cm\nBlood type: F\nAffiliation: Straw Hat Pirates\nPosition: Captain\nDevil fruit: Gomu Gomu no Mi (Gum Gum Fruit)\nType: Paramecia\nBounty:\nLuffy is the captain of the Straw Hat Pirates and is best friends with all of them and values them over all else. At first glance, Luffy does not appear to be very intelligent, often seeing things in a childish manner and can easily be amazed by the simplest things. However, because he views the world in a straightforward and simple manner, he is occasionally the only person who can see past the events and see what should be done.\n\nLuffy seems to have an unstoppable appetite, a characteristic that is common to the Japanese archetype of the (at times simple-minded) young male hero/adventurer with a heart of gold; perhaps the hunger more so in Luffy's case due to having an elastic stomach. Luffy is also another one of the several characters given the middle initial \"D.\"\n\nAlthough Luffy is fairly lightheaded and a funny character, he has an unstoppable sense of determination, optimism, and commitment and will do anything to stand up for his friends and comrades. Along with that, he has great courage to back it up as well as unbelievable strength. Ever since consuming the devil fruit he was shown to be not worried about his inability to swim, much like his brother. Much of these traits are common among D's. His only display of true fear is towards his grandfather, to the point that he is intimidated at the mere mention of him.\n\nLuffy never kills any of his enemies, no matter how cold-hearted they are; instead, he frequently sends the villain flying, knocking them out or beating them to a point that they are almost near death, which results in some of the villains searching for revenge, such as Buggy the Clown and Alvida. Oda explains that it's not a question of morality so much as a matter of punishing the villains for their crimes - he feels that killing the villains lets them off too lightly, whereas he considers letting them live to see their dreams be ruined a far more fitting punishment.\n\nLuffy's dream is to find the One Piece and become Pirate King. He knows that to achieve his goal, he will have to defeat many strong opponents, including the World Government and his childhood hero Shanks."
  },
  {
      "mal_id": 62,
      "url": "https://myanimelist.net/character/62/Zoro_Roronoa",
      "images": {
          "jpg": {
              "image_url": "https://cdn.myanimelist.net/images/characters/3/100534.jpg"
          },
          "webp": {
              "image_url": "https://cdn.myanimelist.net/images/characters/3/100534.webp",
              "small_image_url": "https://cdn.myanimelist.net/images/characters/3/100534t.webp"
          }
      },
      "name": "Zoro Roronoa",
      "name_kanji": "ロロノア・ゾロ",
      "nicknames": [
          "Pirate Hunter",
          "Marimo",
          "Zorojuro",
          "King Of Hell"
      ],
      "favorites": 89726,
      "about": "Age: 19; 21\nBirthdate: November 11, Scorpio \nHeight: 178 cm (5'10\") , 181 (5'11\") (after timeskip)\nAffiliation: Straw Hat Pirates\nPosition: Swordsman\nDevil Fruit: None\nBounty: \nZoro was the first crew member to be recruited by Luffy. Zoro is a skilled swordsman who fights with his own unique sword style known as santoryu (three katana fighting style).This is achieved by using one katana in each hand and another in his mouth. He is also seen fighting with only one or two swords. When in a serious fight he ties his bandana, normally tied on the arm, on his head.\n\nThough not a samurai, he appears to maintain a certain degree of bushido, and is frequently mistaken for one. Unlike Luffy and most of the other Straw Hat pirates, Zoro has been known to kill his opponents if he has to, though never in cold blood.\n\nZoro has a stern, serious and distanced personality, but, unlike Robin, he often reacts in a goofy and exaggerated comic style due to his gruff, impatient attitude. On the ship, he normally either trains with weights or sleeps. The only work he is seen doing regularly is hoisting the anchor using his great strength. He also likes sake, almost to the degree that Luffy likes meat, but like Nami, he never gets drunk due to his inhumanly-high endurance and tolerance for alcohol. Another notable trait is his lack of orientation, as Zoro often gets lost, even in small, familiar spaces or when being led by someone. Despite this, he is often the first to sense an enemy or danger, and the first to react. He is often displayed being well aware of dangerous situations and people around him.\n\nZoro often also reminds others of the harsh facts, which often shocks some of the other crew members, although they usually decide he is right. Zoro has also stated that he is an atheist, and has never believed in anything except himself. He often comes across as arrogant and overconfident, but only because he knows he's a strong man with great fighting ability. Even so, Zoro knows that he still has a lot of untapped potential, and is constantly seen training and trying to improve his fighting skills. He also adheres to a strict sword master's code of honor, and never falsely brags or lies about his abilities, sometimes outright admitting a weakness, even to an enemy. He also never tries to escape from a fight or use trickery to win, believing that doing so is cowardly and scorning anyone who uses such tactics. Zoro is very vigorous, strong-willed, and determined."
  }
]