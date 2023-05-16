//Angularjs and jquery.datatable with ui.bootstrap and ui.utils

var app=angular.module('formvalid', ['ui.bootstrap','ui.utils']);
app.controller('validationCtrl',function($scope){
  $scope.data=[
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
        ]
    ]


$scope.dataTableOpt = {
   //custom datatable options 
  // or load data through ajax call also
  "aLengthMenu": [[10, 50, 100,-1], [10, 50, 100,'All']],
  };
});
