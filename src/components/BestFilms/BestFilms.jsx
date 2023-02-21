import React, { useEffect, useState } from "react";
import MiniCard from "../MiniCard/MiniCard";

const BestFilms = () => {
  // eslint-disable-next-line
  //   const [bestFilms, setBestFilms] = useState([
  //     {
  //       externalId: {
  //         kpHD: null,
  //         imdb: "tt6468322",
  //         tmdb: 71446,
  //         _id: "6376bb427ad98299ffaab722",
  //       },
  //       logo: {
  //         _id: "62ec6b07b2521039874530ab",
  //         url: null,
  //       },
  //       poster: {
  //         _id: "63397818c22d011bb569fd77",
  //         url: "https://st.kp.yandex.net/images/film_big/1046206.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_1046206.jpg",
  //       },
  //       rating: {
  //         kp: 8.141,
  //         imdb: 8.2,
  //         filmCritics: 0,
  //         russianFilmCritics: 0,
  //         await: 0,
  //         _id: "63e6dcc168d824d6cae8cdbe",
  //       },
  //       votes: {
  //         kp: 208103,
  //         imdb: 485895,
  //         filmCritics: 0,
  //         russianFilmCritics: 1,
  //         await: 0,
  //         _id: "63f01d235951fd2ac5249906",
  //       },
  //       watchability: {
  //         _id: "63397818c22d011bb569fe48",
  //         items: null,
  //       },
  //       id: 1046206,
  //       type: "tv-series",
  //       name: "Бумажный дом",
  //       description:
  //         "История о преступниках, решивших ограбить Королевский монетный двор Испании и украсть 2,4 млрд евро.",
  //       year: 2017,
  //       alternativeName: "La casa de papel",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "63397818c22d011bb569fd73",
  //           name: "Бумажный дом",
  //         },
  //         {
  //           _id: "63397818c22d011bb569fd74",
  //           name: "La casa de papel",
  //         },
  //       ],
  //       movieLength: 50,
  //       shortDescription: null,
  //       releaseYears: [
  //         {
  //           _id: "6359ae5b9f6a011dbf62c610",
  //           start: 2017,
  //           end: 2021,
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: null,
  //         imdb: "tt5753856",
  //         tmdb: 70523,
  //         _id: "6376c270d8baf23311af2d3d",
  //       },
  //       logo: {
  //         _id: "62ed5fd4b252103987d62e85",
  //         url: null,
  //       },
  //       poster: {
  //         _id: "633979ecc22d011bb572a35b",
  //         url: "https://st.kp.yandex.net/images/film_big/1032606.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_1032606.jpg",
  //       },
  //       rating: {
  //         kp: 8.109,
  //         imdb: 8.7,
  //         filmCritics: 0,
  //         russianFilmCritics: 90,
  //         await: 100,
  //         _id: "63eba53068d824d6caff543b",
  //       },
  //       votes: {
  //         kp: 138537,
  //         imdb: 399122,
  //         filmCritics: 0,
  //         russianFilmCritics: 10,
  //         await: 216,
  //         _id: "63f024545951fd2ac5532d51",
  //       },
  //       watchability: {
  //         _id: "633979ecc22d011bb572a405",
  //         items: null,
  //       },
  //       id: 1032606,
  //       type: "tv-series",
  //       name: "Тьма",
  //       description:
  //         "История четырёх семей, живущих спокойной и размеренной жизнью в маленьком немецком городке. Видимая идиллия рушится, когда бесследно исчезают двое детей и воскресают тёмные тайны прошлого.",
  //       year: 2017,
  //       alternativeName: "Dark",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "633979ecc22d011bb572a357",
  //           name: "Тьма",
  //         },
  //         {
  //           _id: "633979ecc22d011bb572a358",
  //           name: "Dark",
  //         },
  //       ],
  //       movieLength: 60,
  //       shortDescription: null,
  //       releaseYears: [
  //         {
  //           _id: "6359af009f6a011dbf63878c",
  //           start: 2017,
  //           end: 2020,
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: null,
  //         imdb: "tt5071412",
  //         tmdb: 69740,
  //         _id: "6376c8c1d8baf23311e89ebb",
  //       },
  //       logo: {
  //         _id: "62ec4baab25210398730a97f",
  //         url: null,
  //       },
  //       poster: {
  //         _id: "63397956c22d011bb56f7980",
  //         url: "https://st.kp.yandex.net/images/film_big/1045553.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_1045553.jpg",
  //       },
  //       rating: {
  //         kp: 7.921,
  //         imdb: 8.5,
  //         filmCritics: 0,
  //         russianFilmCritics: 100,
  //         await: 100,
  //         _id: "63e6ebbd68d824d6ca8f5b61",
  //       },
  //       votes: {
  //         kp: 57070,
  //         imdb: 321341,
  //         filmCritics: 0,
  //         russianFilmCritics: 7,
  //         await: 96,
  //         _id: "63f029285951fd2ac5772dcd",
  //       },
  //       watchability: {
  //         _id: "63397956c22d011bb56f7b9d",
  //         items: null,
  //       },
  //       id: 1045553,
  //       type: "tv-series",
  //       name: "Озарк",
  //       description:
  //         "Финансовый консультант Марти Бёрд вместе с женой Вэнди и остальными членами семьи вынужден тайно переехать из престижного предместья Чикаго в курортный городок Озарк штата Миссури. К неожиданному переезду главного героя вынудили крупные долги, и на новом месте он надеется поправить своё финансовое положение.",
  //       year: 2017,
  //       alternativeName: "Ozark",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "63397956c22d011bb56f797c",
  //           name: "Озарк",
  //         },
  //         {
  //           _id: "63397956c22d011bb56f797d",
  //           name: "Ozark",
  //         },
  //       ],
  //       movieLength: 60,
  //       shortDescription: null,
  //       releaseYears: [
  //         {
  //           start: 2017,
  //           end: 2022,
  //           _id: "6361476611f1fd7ff1faa29e",
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: null,
  //         imdb: "tt1837492",
  //         tmdb: 66788,
  //         _id: "6376c4ebd8baf23311c86cdb",
  //       },
  //       logo: {
  //         _id: "62f2dbc1252c8469eff244bf",
  //         url: null,
  //       },
  //       poster: {
  //         _id: "63397a6ec22d011bb5759af1",
  //         url: "https://st.kp.yandex.net/images/film_big/582358.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_582358.jpg",
  //       },
  //       rating: {
  //         kp: 7.322,
  //         imdb: 7.5,
  //         filmCritics: 0,
  //         russianFilmCritics: 50,
  //         await: 97.69,
  //         _id: "63ebac4168d824d6ca639d9d",
  //       },
  //       votes: {
  //         kp: 89884,
  //         imdb: 297514,
  //         filmCritics: 0,
  //         russianFilmCritics: 4,
  //         await: 1871,
  //         _id: "63f029b25951fd2ac57b7cf6",
  //       },
  //       watchability: {
  //         _id: "63397a6ec22d011bb5759d11",
  //         items: null,
  //       },
  //       id: 582358,
  //       type: "tv-series",
  //       name: "13 причин почему",
  //       description:
  //         "Однажды Клэй Дженсен находит на пороге своего дома коробку с аудиокассетами, записанными Ханной Бейкер. Он был влюблен в эту девушку в школе, пока она однажды не покончила жизнь самоубийством. В своих записях Ханна указала 13 причин, которые толкнули её на это. И Клэй - одна из них.",
  //       year: 2017,
  //       alternativeName: "13 Reasons Why",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "63397a6ec22d011bb5759aed",
  //           name: "13 причин почему",
  //         },
  //         {
  //           _id: "63397a6ec22d011bb5759aee",
  //           name: "13 Reasons Why",
  //         },
  //       ],
  //       movieLength: 60,
  //       shortDescription: null,
  //       releaseYears: [
  //         {
  //           _id: "6359af949f6a011dbf6437d2",
  //           start: 2017,
  //           end: 2020,
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: null,
  //         imdb: "tt5290382",
  //         tmdb: 67744,
  //         _id: "6376c65bd8baf23311d54df3",
  //       },
  //       logo: {
  //         _id: "62ed7361b252103987e2aaf4",
  //         url: null,
  //       },
  //       poster: {
  //         _id: "63397866c22d011bb56b57d5",
  //         url: "https://st.kp.yandex.net/images/film_big/958500.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_958500.jpg",
  //       },
  //       rating: {
  //         kp: 8.108,
  //         imdb: 8.6,
  //         filmCritics: 0,
  //         russianFilmCritics: 100,
  //         await: 99.12,
  //         _id: "63f029ab5951fd2ac57b46e0",
  //       },
  //       votes: {
  //         kp: 73715,
  //         imdb: 296523,
  //         filmCritics: 0,
  //         russianFilmCritics: 5,
  //         await: 3113,
  //         _id: "63f029ab5951fd2ac57b46e1",
  //       },
  //       watchability: {
  //         _id: "63397866c22d011bb56b5969",
  //         items: null,
  //       },
  //       id: 958500,
  //       type: "tv-series",
  //       name: "Охотник за разумом",
  //       description:
  //         "Конец 1970-х. Два агента ФБР опрашивают находящихся в заключении серийных убийц с целью понимания их образа мыслей, а также раскрытия текущих преступлений.",
  //       year: 2017,
  //       alternativeName: "Mindhunter",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "63397866c22d011bb56b57d1",
  //           name: "Охотник за разумом",
  //         },
  //         {
  //           _id: "63397866c22d011bb56b57d2",
  //           name: "Mindhunter",
  //         },
  //       ],
  //       movieLength: 60,
  //       shortDescription: null,
  //       releaseYears: [
  //         {
  //           start: 2017,
  //           end: 2019,
  //           _id: "6361475111f1fd7ff1f94025",
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: "4ef2cf7cce9e0174af99b530f3d0f0d7",
  //         imdb: "tt5834204",
  //         tmdb: 69478,
  //         _id: "6376bb9f7ad98299ffaea0bb",
  //       },
  //       logo: {
  //         _id: "62f4731e252c8469ef612013",
  //         url: "https://avatars.mds.yandex.net/get-ott/1534341/2a0000017acedc712318cc0207f9ba3a3be9/orig",
  //       },
  //       poster: {
  //         url: "https://st.kp.yandex.net/images/film_big/1007426.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_1007426.jpg",
  //         _id: "636a81a45aba03d332f8062f",
  //       },
  //       rating: {
  //         kp: 7.949,
  //         imdb: 8.4,
  //         filmCritics: 0,
  //         russianFilmCritics: 57.1429,
  //         await: 97.85,
  //         _id: "63ee7e805951fd2ac538301c",
  //       },
  //       votes: {
  //         kp: 188009,
  //         imdb: 243146,
  //         filmCritics: 0,
  //         russianFilmCritics: 7,
  //         await: 902,
  //         _id: "63f02fbc5951fd2ac5aee2fc",
  //       },
  //       watchability: {
  //         items: [
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig",
  //               _id: "63ee7e805951fd2ac5383022",
  //             },
  //             name: "Okko",
  //             url: "https://okko.tv/serial/the-handmaids-tale?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed",
  //             _id: "63ee7e805951fd2ac5383021",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig",
  //               _id: "63ee7e805951fd2ac5383024",
  //             },
  //             name: "Иви",
  //             url: "https://www.ivi.ru/watch/the-handmaids-tale?utm_source=yandex&utm_medium=wizard",
  //             _id: "63ee7e805951fd2ac5383023",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/1648503/97e3cbbd-40ee-4298-888d-ed2d0f022a69/orig",
  //               _id: "63ee7e805951fd2ac5383026",
  //             },
  //             name: "more.tv",
  //             url: "https://more.tv/rasskaz_sluzhanki?utm_source=yandex-snippet&utm_medium=snippet&utm_campaign=rasskaz_sluzhanki",
  //             _id: "63ee7e805951fd2ac5383025",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig",
  //               _id: "63ee7e805951fd2ac5383028",
  //             },
  //             name: "Wink",
  //             url: "https://wink.ru/media_items/82834121?utm_source=yandex&utm_medium=koldunschick&utm_content=name",
  //             _id: "63ee7e805951fd2ac5383027",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/2439731/17c7ebcf-41aa-48b6-9366-621a85f1307a/orig",
  //               _id: "63ee7e805951fd2ac538302a",
  //             },
  //             name: "Большое ТВ",
  //             url: "https://bolshoe.tv/promo/web/movie/38602?segment=yandex_feed&group=peoples&utm_campaign=ya_feed&utm_medium=ya_feed",
  //             _id: "63ee7e805951fd2ac5383029",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig",
  //               _id: "63ee7e805951fd2ac538302c",
  //             },
  //             name: "24ТВ",
  //             url: "https://24h.tv/contents/2017-the-handmaids-tale-552543969578320886",
  //             _id: "63ee7e805951fd2ac538302b",
  //           },
  //         ],
  //         _id: "63ee7e805951fd2ac5383020",
  //       },
  //       id: 1007426,
  //       type: "tv-series",
  //       name: "Рассказ служанки",
  //       description:
  //         "Действие разворачивается в будущем, в республике Гилеад, где у власти стоят военные. В стране жестокие порядки и нравы, уважением в обществе пользуются только офицеры и их жёны. Помимо тоталитарного устройства общества, в мире будущего есть серьёзная проблема — бесплодие. Лишь каждая сотая женщина способна к воспроизведению потомства. Чтобы продолжить офицерский род, семьи берут в дом служанку - суррогатную мать из числа простых женщин, способных к деторождению. Исполнив  долг, служанка должна расстаться со своим ребёнком и перейти на службу к новым хозяевам.",
  //       year: 2017,
  //       alternativeName: "The Handmaid's Tale",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "63397a0ac22d011bb57369d8",
  //           name: "Рассказ служанки",
  //         },
  //         {
  //           _id: "63397a0ac22d011bb57369d9",
  //           name: "The Handmaid's Tale",
  //         },
  //       ],
  //       color: "#2C1E18",
  //       movieLength: 60,
  //       shortDescription:
  //         "В тоталитарном будущем служанки вынашивают детей для бесплодных жен правителей. Антиутопия с Элизабет Мосс",
  //       releaseYears: [
  //         {
  //           _id: "6359aea29f6a011dbf6315ac",
  //           start: 2017,
  //           end: null,
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: null,
  //         imdb: "tt5675620",
  //         tmdb: 67178,
  //         _id: "6376cb57d8baf23311fc40a3",
  //       },
  //       logo: {
  //         _id: "62f79875252c8469ef055b80",
  //         url: null,
  //       },
  //       poster: {
  //         _id: "63397a73c22d011bb575b615",
  //         url: "https://st.kp.yandex.net/images/film_big/978853.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_978853.jpg",
  //       },
  //       rating: {
  //         kp: 7.823,
  //         imdb: 8.5,
  //         filmCritics: 0,
  //         russianFilmCritics: 60,
  //         await: 98.3,
  //         _id: "63f02a5f5951fd2ac581ef07",
  //       },
  //       votes: {
  //         kp: 40961,
  //         imdb: 241480,
  //         filmCritics: 0,
  //         russianFilmCritics: 5,
  //         await: 3452,
  //         _id: "63f02a5f5951fd2ac581ef08",
  //       },
  //       watchability: {
  //         _id: "63397a73c22d011bb575b707",
  //         items: null,
  //       },
  //       id: 978853,
  //       type: "tv-series",
  //       name: "Каратель",
  //       description:
  //         "После того, как семья Фрэнка Касла была убита во время перестрелки между бандами Нью-Йорка, он решает отомстить и начинает охоту на преступников города. В криминальном мире он становится известен как Каратель.",
  //       year: 2017,
  //       alternativeName: "The Punisher",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "63397a73c22d011bb575b611",
  //           name: "Каратель",
  //         },
  //         {
  //           _id: "63397a73c22d011bb575b612",
  //           name: "The Punisher",
  //         },
  //       ],
  //       movieLength: 53,
  //       shortDescription: null,
  //       releaseYears: [
  //         {
  //           start: 2017,
  //           end: 2019,
  //           _id: "6361478011f1fd7ff1fc2e17",
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: "42a200787b58c19b8aa1a6272b146db1",
  //         imdb: "tt3920596",
  //         tmdb: 66292,
  //         _id: "6376c214d8baf23311aae993",
  //       },
  //       logo: {
  //         _id: "62ea4821b252103987f0c5c7",
  //         url: "https://avatars.mds.yandex.net/get-ott/200035/2a0000017be4e8c4284e8847bce9ccd372b7/orig",
  //       },
  //       poster: {
  //         _id: "633979bdc22d011bb571a3bf",
  //         url: "https://st.kp.yandex.net/images/film_big/947758.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_947758.jpg",
  //       },
  //       rating: {
  //         kp: 8.131,
  //         imdb: 8.5,
  //         filmCritics: 0,
  //         russianFilmCritics: 85.7143,
  //         await: 97.77,
  //         _id: "63e6ed1d68d824d6caa42e99",
  //       },
  //       votes: {
  //         kp: 150559,
  //         imdb: 204444,
  //         filmCritics: 0,
  //         russianFilmCritics: 7,
  //         await: 2254,
  //         _id: "63f02a415951fd2ac581414a",
  //       },
  //       watchability: {
  //         items: [
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/239697/7713e586-17d1-42d1-ac62-53e9ef1e70c3/orig",
  //               _id: "63ebaa2d68d824d6ca4702b9",
  //             },
  //             name: "Okko",
  //             url: "https://okko.tv/serial/big-little-lies?utm_medium=referral&utm_source=yandex_search&utm_campaign=new_search_feed",
  //             _id: "63ebaa2d68d824d6ca4702b8",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/2419418/0dfd1724-848f-4725-9160-abc571f41c11/orig",
  //               _id: "63ebaa2d68d824d6ca4702bb",
  //             },
  //             name: "Иви",
  //             url: "https://www.ivi.ru/watch/bolshaya-malenkaya-lozh?utm_source=yandex&utm_medium=wizard",
  //             _id: "63ebaa2d68d824d6ca4702ba",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/239697/daeb142e-3ecc-4bb2-9bff-4827996643ab/orig",
  //               _id: "63ebaa2d68d824d6ca4702bd",
  //             },
  //             name: "KION",
  //             url: "https://kion.ru/video/serial/127324657/season/127324761/episode/127324697?utm_source=yandex&utm_medium=organic&utm_campaign=wizard",
  //             _id: "63ebaa2d68d824d6ca4702bc",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/1672343/eae327fe-4d7b-4ea2-899a-6aaa54300784/orig",
  //               _id: "63ebaa2d68d824d6ca4702bf",
  //             },
  //             name: "AMEDIATEKA",
  //             url: "https://amediateka.ru/watch/series_11228_bolshaya-malenkaya-lozh?utm_medium=referral&utm_source=yandex_search&utm_campaign=yandex_feed",
  //             _id: "63ebaa2d68d824d6ca4702be",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/1672343/4e5f7a8e-d5ac-4904-9fc0-208753ccf520/orig",
  //               _id: "63ebaa2d68d824d6ca4702c1",
  //             },
  //             name: "Кино1ТВ",
  //             url: "https://kino.1tv.ru/serials/bolshaya-malenkaya-lozh?utm_source=yandex&utm_medium=wizard",
  //             _id: "63ebaa2d68d824d6ca4702c0",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/1672343/54096cbe-cc3b-41c9-8e44-990ebbca8d61/orig",
  //               _id: "63ebaa2d68d824d6ca4702c3",
  //             },
  //             name: "Wink",
  //             url: "https://wink.ru/media_items/47634124?utm_source=yandex&utm_medium=koldunschick&utm_content=name",
  //             _id: "63ebaa2d68d824d6ca4702c2",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/223007/c6b9b3d8-3258-4394-9cae-c86fdb56a0c6/orig",
  //               _id: "63ebaa2d68d824d6ca4702c5",
  //             },
  //             name: "НТВ-ПЛЮС Онлайн ТВ",
  //             url: "https://ntvplus.tv/watch/169-bolshaya-malenkaya-lozh?utm_source=kinopoisk",
  //             _id: "63ebaa2d68d824d6ca4702c4",
  //           },
  //           {
  //             logo: {
  //               url: "https://avatars.mds.yandex.net/get-ott/2439731/85e83b8d-1159-4781-bad5-ce0a809b3843/orig",
  //               _id: "63ebaa2d68d824d6ca4702c7",
  //             },
  //             name: "24ТВ",
  //             url: "https://24h.tv/contents/2017-big-little-lies-546309411224683456",
  //             _id: "63ebaa2d68d824d6ca4702c6",
  //           },
  //         ],
  //         _id: "63ebaa2d68d824d6ca4702b7",
  //       },
  //       id: 947758,
  //       type: "tv-series",
  //       name: "Большая маленькая ложь",
  //       description:
  //         "На благотворительном балу в школе происходит убийство, однако имя жертвы неизвестно. История о нескольких месяцах, предшествовавших происшествию - рассказ о пяти семьях, чьи дети ходят в один класс. Все эти семьи загадочным образом связаны с убийством.",
  //       year: 2017,
  //       alternativeName: "Big Little Lies",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "633979bdc22d011bb571a3bb",
  //           name: "Большая маленькая ложь",
  //         },
  //         {
  //           _id: "633979bdc22d011bb571a3bc",
  //           name: "Big Little Lies",
  //         },
  //       ],
  //       movieLength: 60,
  //       shortDescription:
  //         "Громкое убийство потрясает богатый калифорнийский город. Детективная драма с Николь Кидман и Риз Уизерспун",
  //       releaseYears: [
  //         {
  //           _id: "6359aed29f6a011dbf635126",
  //           start: 2017,
  //           end: 2019,
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: null,
  //         imdb: "tt6257970",
  //         tmdb: 74577,
  //         _id: "6376c4d1d8baf23311c75ed1",
  //       },
  //       logo: {
  //         _id: "62eb8c81b252103987bca127",
  //         url: null,
  //       },
  //       poster: {
  //         _id: "63397c2ac22d011bb57f4978",
  //         url: "https://st.kp.yandex.net/images/film_big/1071384.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_1071384.jpg",
  //       },
  //       rating: {
  //         kp: 7.686,
  //         imdb: 8,
  //         filmCritics: 0,
  //         russianFilmCritics: 80,
  //         await: 0,
  //         _id: "63eb9d4168d824d6cac3ddc5",
  //       },
  //       votes: {
  //         kp: 93502,
  //         imdb: 196814,
  //         filmCritics: 0,
  //         russianFilmCritics: 5,
  //         await: 8,
  //         _id: "63f0208f5951fd2ac5396a72",
  //       },
  //       watchability: {
  //         _id: "63397c2ac22d011bb57f49f9",
  //         items: null,
  //       },
  //       id: 1071384,
  //       type: "tv-series",
  //       name: "Конец ***го мира",
  //       description:
  //         "Джеймсу семнадцать и он уверен, что он - психопат. Алисе тоже семнадцать, она - капризная новенькая девчонка в школе. Они с пол-оборота заводят подростковый роман, и Алиса уговаривает Джеймса начать поиски её отца. Джеймсу от Алисы тоже кое-что нужно.",
  //       year: 2017,
  //       alternativeName: "The End of the F***ing World",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "63397c2ac22d011bb57f4974",
  //           name: "Конец ***го мира",
  //         },
  //         {
  //           _id: "63397c2ac22d011bb57f4975",
  //           name: "The End of the F***ing World",
  //         },
  //       ],
  //       movieLength: 25,
  //       shortDescription: null,
  //       releaseYears: [
  //         {
  //           _id: "6359af919f6a011dbf643257",
  //           start: 2017,
  //           end: 2019,
  //         },
  //       ],
  //     },
  //     {
  //       externalId: {
  //         kpHD: "4b77c0ec4c3f338f96d1cd14909cf44c",
  //         imdb: "tt3647998",
  //         tmdb: 65708,
  //         _id: "6376c3c3d8baf23311bd5b28",
  //       },
  //       logo: {
  //         _id: "62f726a2252c8469efedeaf4",
  //         url: "https://avatars.mds.yandex.net/get-ott/1534341/2a0000016e0445009525a8ffc24bb10ee52b/orig",
  //       },
  //       poster: {
  //         _id: "633978bbc22d011bb56c9f83",
  //         url: "https://st.kp.yandex.net/images/film_big/932068.jpg",
  //         previewUrl:
  //           "https://st.kp.yandex.net/images/film_iphone/iphone360_932068.jpg",
  //       },
  //       rating: {
  //         kp: 7.709,
  //         imdb: 8.3,
  //         filmCritics: 0,
  //         russianFilmCritics: 80,
  //         await: 98.73,
  //         _id: "63e6f00468d824d6cacce30a",
  //       },
  //       votes: {
  //         kp: 107632,
  //         imdb: 140831,
  //         filmCritics: 0,
  //         russianFilmCritics: 10,
  //         await: 5737,
  //         _id: "63f0277e5951fd2ac569f697",
  //       },
  //       watchability: {
  //         items: null,
  //         _id: "63a211e6724b35d32ecea50c",
  //       },
  //       id: 932068,
  //       type: "tv-series",
  //       name: "Табу",
  //       description:
  //         "Искатель приключений Джеймс Кезайя Делейни строит свою собственную корабельную империю в начале XIX века.",
  //       year: 2017,
  //       alternativeName: "Taboo",
  //       enName: null,
  //       names: [
  //         {
  //           _id: "633978bbc22d011bb56c9f7f",
  //           name: "Табу",
  //         },
  //         {
  //           _id: "633978bbc22d011bb56c9f80",
  //           name: "Taboo",
  //         },
  //       ],
  //       movieLength: 59,
  //       shortDescription:
  //         "Авантюрист строит свою торговую империю. Криминальный сериал с Томом Харди от создателя «Острых козырьков»",
  //       releaseYears: [
  //         {
  //           _id: "6359af4d9f6a011dbf63de5a",
  //           start: 2017,
  //           end: 2017,
  //         },
  //       ],
  //     },
  //   ]);
  const [bestFilms, setBestFilms] = useState([]);
  //   useEffect(() => {
  //     fetch(
  //       "https://api.kinopoisk.dev/movie?token=DSFRAHR-R5YMYQC-NYQTV0R-KBKGB5T"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => setBestFilms(res));
  //   }, []);
  // ++++++++++++++++++++++
  //   useEffect(() => {
  //     let ignore = false;
  //     setBestFilms([]);
  //     fetch(
  //       "https://api.kinopoisk.dev/movie?token=DSFRAHR-R5YMYQC-NYQTV0R-KBKGB5T"
  //     )
  //       .then((res) => res.json())
  //       .then((res) => {
  //         if (!ignore) {
  //           setBestFilms(res);
  //         }
  //       });

  //     return () => {
  //       ignore = true;
  //     };
  //   }, []);

  const createFetch = () => {
    const fetchMap = {};

    return (url, options) => {
      if (!fetchMap[url]) {
        fetchMap[url] = fetch(url, options)
          .then((res) => res.json())
          .then((res) => setBestFilms(res.docs)); // !!!!!!!!!!!!!!!!!!!!
      }

      return fetchMap[url];
    };
  };

  const myFetch = createFetch();

  useEffect(() => {
    myFetch(
      "https://api.kinopoisk.dev/movie?field=rating.kp&search=7-10&field=year&search=2017-2023&field=typeNumber&search=1&sortField=year&sortType=1&sortField=votes.imdb&sortType=-1&token=DSFRAHR-R5YMYQC-NYQTV0R-KBKGB5T"
    );
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {bestFilms.length > 0 && (
        <div className="bg-transparent w-full overflow-auto px-4">
          <h2 className=" text-white  my-3 text-xl">Лучшие фильмы</h2>
          <div className="flex gap-5">
            {bestFilms.map((item, index) => (
              <MiniCard item={item} key={index} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BestFilms;
