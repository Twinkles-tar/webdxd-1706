var userArrary = [
  
  {
    name: 'Yan Hong',
    age: 26,
    school: 'SFU',
    skills: ['HTML', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Neo Wang',
    age: 26,
    school: 'UBC',
    skills: ['Python', 'CSS', 'JavaScript'],
    isPublic: true
  },
  
  {
    name: 'Ben Sun',
    age: 30,
    school: 'SFU',
    skills: ['Logo Design', 'VI', 'UIUX', 'Branding'],
    isPublic: false
  },
  
];


// for (var i = 0; i < userArray.length; i++) {
//   console.log(userArray[i].name);
    
//     var userContainer = $('<div>').addClass('user')

//     $('<h1>').text(userArray[i].name).appendTo(userContainer)

//     $('#user-container').append(userContainer)
// }


$('.search-btn').click(function(){

  console.log("Clicked!");

  $('#user-container').html("");

  for (var i = 0; i < userArrary.length; i++) {
  
  var userObject = userArrary[i]
  if (new RegExp($('.search-input').val(),'i').test(userObject.name)){

      console.log("true!");

      var userContainer = $('<div>').addClass('user')
      var appendEle = function(tag, value) {
          $(tag).text(value).appendTo(userContainer)
      }

      appendEle('<h1>', userObject.name)
      appendEle('<h2>', userObject.age)
      appendEle('<h2>', userObject.school)

      var userSkills = $('<p>')

      for (var j = 0; j < userObject.skills.length; j++) {
          $('<span>').text(userObject.skills[j]).appendTo(userSkills)
      }

      $(userSkills).appendTo(userContainer)
      $('#user-container').append(userContainer)
  }

 }


})





