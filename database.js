//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils']);
app.controller('validationCtrl',function($scope){
  $scope.data=[
  [
            "BTS",
            "Take Two",
            "Single",
            "Spotify",
            "2023\/06\/09"
        ],
  [
            "Suga",
            "Lilith",
            "Collab",
            "Spotify",
            "2023\/06\/06"
        ],  
  [
            "Jimin",
            "Angel pt. 1 (sped up)",
            "Remix",
            "Spotify",
            "2023\/05\/01"
        ],
        [
            "Jimin",
            "Angel pt. 1",
            "OST",
            "Spotify",
            "2023\/05\/18"
        ],
  [
            "BTS",
            "The Planet",
            "OST",
            "Spotify",
            "2023\/05\/13"
        ],  
        [
            "RM",
            "Don't Ever Say Love Me",
            "Collab",
            "Spotify",
            "2023\/05\/04"
            
        ],
        [
            "Agust D",
            "D-DAY",
            "Album",
            "Spotify",
            "2023\/04\/21"
            
        ],
        [
            "Agust D",
            "People pt. 2",
            "Pre-release",
            "Spotify",
            "2023\/04\/07"
            
        ],
         [
            "Jimin",
            "Like Crazy (Remixes)",
            "Remix",
            "Spotify",
            "2023\/03\/26"           
        ],
        [
            "Jimin",
            "FACE",
            "Album",
            "Spotify",
            "2023\/03\/24"           
        ],
        [
            "Jimin",
            "Set Me Free pt. 2",
            "Pre-release",
            "Spotify",
            "2023\/03\/17"           
        ],
        [
            "RM",
            "Smoke Sprite",
            "Collab",
            "Spotify",
            "2023\/03\/14"
        ],
        [
            "J-hope",
            "On the Street",
            "Collab",
            "Spotify",
            "2023\/03\/03"
        ],
        [
            "Jimin",
            "Vibe",
            "Collab",
            "Spotify",
            "2023\/01\/13"
        ],
        
        // 2022
        [
            "V",
            "It's Beginning To Look A Lot Like Christmas",
            "Cover",
            "Soundcloud",
            "2022\/12\/24"
        ],
        [
            "RM",
            "Indigo",
            "Album ",
            "Spotify",
            "2022\/11\/02"
        ],
        [
            "Jungkook",
            "Dreamers",
            "Single",
            "Spotify",
            "2022\/11\/20"
        ],
        [
            "Jin",
            "The Astronaut",
            "Single",
            "Spotify",
            "2022\/10\/28"
        ],

        [
            "BTS",
            "Yet to Come (Hyund. version)",
            "Single",
            "Spotify",
            "2022\/09\/23"
        ],
        [
            "J-hope",
            "Rush Hour",
            "Collab",
            "Spotify",
            "2022\/09\/22"
        ],
        [
            "RM",
            "Sexy Nukim",
            "Collab",
            "Spotify",
            "2022\/09\/01"
        ],
         [
            "Suga",
            "Over the Horizon (2022)",
            "Single",
            "Soundcloud",
            "2022\/08\/17"
        ],
        [
            "BTS",
            "Bad Decisions",
            "Collab",
            "Spotify",
            "2022\/08\/05"
        ],
        [
            "J-hope",
            "Jack in the Box",
            "Album",
            "Spotify",
            "2022\/07\/15"
        ],
        [
            "Suga",
            "Our Island",
            "OST",
            "Spotify",
            "2022\/07\/06"
        ],
         [
            "J-hope",
            "MORE",
            "Pre-release track",
            "Spotify",
            "2022\/07\/01"
        ],
          [
            "Jungkook",
            "Left and Right",
            "Collab",
            "Spotify",
            "2022\/06\/24"
        ],
        [
            "Jungkook",
            "My You",
            "Single",
            "Soundcloud",
            "2022\/06\/13"
        ],

        [
            "Jimin",
            "With You",
            "OST",
            "Spotify",
            "2022\/04\/24"
        ],

         [
            "Jungkook (prod. suga)",
            "Stay Alive",
            "OST",
            "Spotify",
            "2022\/02\/11"
        ],
        //2021
         [
            "V",
            "Christmas Tree",
            "OST",
            "Spotify",
            "2021\/12\/24"
        ],  
        [
            "Jin",
            "Super Tuna",
            "Single",
            "Spotify",
            "2021\/12\/04"
        ], 
        [
            "Jin",
            "Yours",
            "OST",
            "Spotify",
            "2021\/11\/07"
        ],
          [
            "RM",
            "Bicycle",
            "Single",
            "Spotify",
            "2021\/06\/07"
        ],

         [
            "RM",
            "Don't",
            "Collab",
            "Spotify",
            "2021\/04\/30"
        ],
          [
            "J-hope",
            "Blue Side",
            "Collab",
            "Spotify",
            "2021\/03\/02"
        ],
        //2020
         [
            "Jimin",
            "Christmas Love",
            "Single",
            "Spotify",
            "2020\/12\/24"
        ], 
        [
            "Jin",
            "Abyss",
            "Single",
            "Spotify",
            "2020\/12\/03"
        ],
         [
            "V",
            "Sweet Night",
            "OST",
            "Spotify",
            "2020\/03\/13"
        ],
        [
            "RM",
            "Winter Flower",
            "Collab",
            "Spotify",
            "2020\/01\/06"
        ],
        //2019
        [
            "J-hope",
            "Chicken Noodle Soup",
            "Collab",
            "Spotify",
            "2019\/09\/27"
        ], 
        
        [
            "RM",
            "Old Town Road - Seoul Town Road Remix",
            "Collab",
            "Spotify",
            "2019\/07\/24"
        ],
         [
            "Jin",
            "Tonight",
            "Single",
            "Spotify",
            "2019\/06\/05"
        ],
        //2018
        [
            "Jimin",
            "Promise",
            "Single",
            "Spotify",
            "2018\/12\/31"
        ],
        [
            "RM",
            "mono",
            "Mixtape",
            "Spotify",
            "2018\/10\/22"
        ],
        [
            "RM",
            "Timeless",
            "Collab",
            "Spotify",
            "2018\/11\/14"
        ],
        [
            "J-hope",
            "Hope World",
            "Mixtape",
            "Spotify",
            "2018\/03\/02"
        ],
        [
            "RM",
            "Crying Over You",
            "Collab",
            "Spotify",
            "2018\/01\/01"
        ],

        // 2017 
        [
            "Jungkook",
            "Oh Holy Night",
            "Single",
            "Soundcloud",
            "2017\/12\/23"
        ],
        [
            "RM",
            "Champion",
            "Collab",
            "Spotify",
            "2017\/12\/15"
        ],
        [
            "BTS",
            "Mic Drop/ DNA/ Crystal Snow",
            "Album",
            "Spotify",
            "2017\/12\/07"
        ],
        [
            "Jungkook",
            "2U",
            "Cover",
            "Soundcloud",
            "2017\/09\/30"
        ],
        [
            "BTS",
            "Love Yourself: Her",
            "Album",
            "Spotify",
            "2017\/09\/18"
        ],
        [
            "BTS",
            "Come Back Home",
            "Single",
            "Spotify",
            "2017\/07\/04"
        ],
        [
            "Suga, Jin & Jungkook",
            "So Far Away",
            "Single",
            "Spotify",
            "2017\/06\/13"
        ],
        [
            "RM & V",
            "4 o'clock'",
            "Single",
            "Soundcloud",
            "2017\/06\/08"
        ],
        [
            "BTS",
            "Blood, Sweat & Tears",
            "Album",
            "Spotify",
            "2017\/05\/10"
        ],
        [
            "RM",
            "Gajah",
            "Collab",
            "Spotify",
            "2017\/04\/17"
        ],
        [
            "RM",
            "Change",
            "Collab",
            "Spotify",
            "2017\/03\/20"
        ],
        [
            "BTS",
            "You Never Walk Alone",
            "Album",
            "Spotify",
            "2017\/02\/13"
        ],
        [
            "RM",
            "Always",
            "Single",
            "Soundcloud",
            "2017\/01\/01"
        ],
        //2016 
        [
            "V, Jin",
            "It's Definitely You'",
            "OST",
            "Spotify",
            "2016\/12\/20"
        ],
        [
            "BTS",
            "Wings",
            "Album",
            "Spotify",
            "2016\/10\/10"
        ],
        [
            "BTS",
            "Youth",
            "Album",
            "Spotify",
            "2016\/09\/07"
        ],

        [
            "BTS",
            "The Most Beautiful Moment in Life: Young Forever",
            "Album",
            "Spotify",
            "2016\/02\/16"
        ],

        [
            "BTS",
            "Run",
            "Album",
            "Spotify",
            "2016\/03\/15"
        ],
        // 2015
         [
            "BTS",
            "I Need U",
            "Album",
            "Spotify",
            "2015\/12\/08"
        ],
         [
            "BTS",
            "Most Beautiful Moment In Life pt. 2",
            "Album",
            "Spotify",
            "2015\/11\/30"
        ],
         [
            "RM",
            "U",
            "Collab",
            "Spotify",
            "2015\/08\/12"
        ],

         [
            "BTS",
            "For You",
            "Album",
            "Spotify",
            "2015\/06\/17"
        ],

        [
            "RM",
            "ProMeTheUs",
            "Collab",
            "Spotify",
            "2015\/05\/27"
        ],

         [
            "BTS",
            "The Most Beautiful Moment In Life pt. 1",
            "Album",
            "Spotify",
            "2015\/04\/29"
        ],

        [
            "RM",
            "Buckubucku",
            "Collab",
            "Spotify",
            "2015\/03\/19"
        ],


        // 2014
        [
            "BTS",
            "Wake Up",
            "Album",
            "Spotify",
            "2014\/12\/24"
        ],
        [
            "BTS",
            "Danger",
            "Album",
            "Spotify",
            "2014\/11\/19"
        ],
        [
            "BTS",
            "Dark & Wild",
            "Album",
            "Spotify",
            "2014\/08\/19"
        ],
        [
            "BTS",
            "Boy In Luv",
            "Album",
            "Spotify",
            "2014\/07\/04"
        ],
        [
            "BTS",
            "No More Dream",
            "Album",
            "Spotify",
            "2014\/06\/04"
        ],
        [
            "BTS",
            "Skool Luv Affair Special Edition",
            "Repackage",
            "Spotify",
            "2014\/05\/14"
        ],
        [
            "BTS",
            "Skool Luv Affair",
            "Album",
            "Spotify",
            "2014\/02\/12"
        ],
        // 2013
         [
            "BTS",
            "O!RUL8,2?",
            "Album",
            "Spotify",
            "2013\/09\/11"
        ],
         
        [
            "BTS",
            "2 Cool 4 Skool",
            "Album",
            "Spotify",
            "2013\/06\/13"
        ],
        //predebut
        [
            "J-hope",
            "Animal (radio edit)",
            "Collab",
            "Spotify",
            "2012\/06\/25"
        ],

          [
            "J-hope",
            "Animal",
            "Collab",
            "Spotify",
            "2012\/06\/25"
        ],

          [
            "BTS",
            "Because I'm A Foolish Woman",
            "Collab",
            "Spotify",
            "2011\/02\/17"
        ],

          [
            "BTS",
            "Bad Girl",
            "Collab",
            "YouTube",
            "2011\/02\/15"
        ],

          [
            "BTS",
            "Love U, Hate U",
            "Collab",
            "Spotify",
            "2010\/10\/26"
        ],

          [
            "BTS",
            "Ashes",
            "Collab",
            "Spotify",
            "2010\/10\/30"
        ]
    ]


$scope.dataTableOpt = {
   //custom datatable options 
  // or load data through ajax call also
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
});
