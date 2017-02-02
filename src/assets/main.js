$(function() {

  $.ajax({
    url: 'https://www.codeschool.com/users/gcosgreave.json',
    dataType: 'jsonp',
    success: function(response){
      addCourses(response.courses.completed);
    }
  });
  function addCourses(courses){

    var $badges = $('#badges');

    courses.forEach(function(course) {
      console.log('gc', course)
      $course = $('<div />', {
        'class': 'course'
      }).appendTo($badges);
      $('<h3 />', {
        text: course.title
      }).appendTo($course);

      $('<img />', {
        src: course.badge
      }).appendTo($course);

      $('<a />', {
        href: course.url,
        target: '_blank',
        text: 'See course'
      }).appendTo($course);
    })
  }

});
