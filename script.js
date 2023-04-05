////////////////////////////////////////////////////////////////////
// Question # 01 
// Write a JavaScript program to list the properties of a JavaScript object

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };

// Sample Output: name,sclass,rollno




// let student = {
//     name : "David Rayy",

//     sclass : "VI",

//     rollno : 12 
// }

// console.log(Object.keys(student))


////////////////////////////////////////////////////////////////////
// Question # 02

// Write a JavaScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.

// Sample object:

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };






// let student = {

//     name : "David Rayy",
    
//     sclass : "VI",
    
//     rollno : 12
// }

// console.log("Before Deletion", student);
// delete student.rollno;
// console.log("After Deletion", student)



////////////////////////////////////////////////////////////////////
// Question # 03

// Write a JavaScript program to get the length of a JavaScript object.   

// Sample object :

// var student = {

// name : "David Rayy",

// sclass : "VI",

// rollno : 12 };



// let student = {

//  name : "David Rayy",
    
//  sclass : "VI",
    
//  rollno : 12 
// }    

// let length = Object.keys(student).length

// console.log("Length is:", length)


////////////////////////////////////////////////////////////////////
// Question # 04

// Write a JavaScript program to display the reading status (i.e. display book name, author name and reading status) of the following books.   

// var library = [ 
//    {
//        author: 'Bill Gates',
//        title: 'The Road Ahead',
//        readingStatus: true
//    },
//    {
//        author: 'Steve Jobs',
//        title: 'Walter Isaacson',
//        readingStatus: true
//    },
//    {
//        author: 'Suzanne Collins',
//        title:  'Mockingjay: The Final Book of The Hunger Games', 
//        readingStatus: false
//    }];

// for(let i=0; i<library.length; i++){
    
//     console.log (`Book title is ${library[i].title}, the author is ${library[i].author} and the status is ${library[i].readingStatus}`);
  
// }


////////////////////////////////////////////////////////////////////
// Question # 05
// Write a JavaScript function to compare dates (i.e. greater than, less than or equal to).   



// Test Data :

// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:00')));

// console.log(compare_dates(new Date('11/14/2013 00:01'), new Date('11/14/2013 00:00')));

// console.log(compare_dates(new Date('11/14/2013 00:00'), new Date('11/14/2013 00:01')));

// Output :

// "Date1 = Date2"

// "Date1 > Date2"

// "Date2 > Date1"

// function compare_dates(date1, date2) {

//     if (date1 > date2) {

//       return "Date1 > Date2";

//     } else if (date1 < date2) {

//       return "Date2 > Date1";

//     } else {

//       return "Date1 = Date2";

//     }
//   }
  

////////////////////////////////////////////////////////////////////
// Question # 06
// Write a JavaScript function to add specified minutes to a Date object.   


// Test Data :

// console.log(add_minutes(new Date(2014,10,2), 30).toString());

// Output : "Sun Nov 02 2014 00:30:00 GMT+0530 (India Standard Time)"

// function add_minutes(date, minutes) {

//     return new Date(date.getTime() + minutes * 60000);

//   }
  

////////////////////////////////////////////////////////////////////
// Question # 07
// Write a JavaScript function to test whether a date is a weekend.   



// Note : Use standard Saturday/Sunday definition of a weekend.

// Test Data :

// console.log(is_weekend('Nov 15, 2014'));

// console.log(is_weekend('Nov 16, 2014'));

// console.log(is_weekend('Nov 17, 2014'));

// Output :

// "weekend"

// "weekend"

// undefined


  
// function is_weekend(date_string) {
//     const date = new Date(date_string);
//     const day = date.getDay();
//     if (day === 0 || day === 6){
//         return "weekend"
//     }
// }


////////////////////////////////////////////////////////////////////
// Question # 08
// Write a JavaScript function to get difference between two dates in days.   



// Test Data :

// console.log(date_diff_indays('04/02/2014', '11/04/2014'));

// console.log(date_diff_indays('12/02/2014', '11/04/2014'));

// Output :

// 216

// -28

// function date_diff_indays(date1, date2) {

//     const dt1 = new Date(date1);

//     const dt2 = new Date(date2);

//     const diff = Math.abs(dt2 - dt1);

//     const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

//     if (dt1 > dt2) {

//       return -diffInDays;

//     } else {

//       return diffInDays;

//     }
//   }
  

////////////////////////////////////////////////////////////////////
// Question # 09

// Write a JavaScript function to get the last day of a month.   



// Test Data :

// console.log(lastday(2014,0));

// console.log(lastday(2014,1));

// console.log(lastday(2014,11));

// Output :

// 31

// 28

// 31

// function lastday(year, month) {

//     return new Date(year, month + 1, 0).getDate();

//   }
  
////////////////////////////////////////////////////////////////////
// Question # 10
// Write a JavaScript function to calculate 'yesterday day'.   



// Test Data :

// console.log(yesterday('Nov 15, 2014'));

// console.log(yesterday('Nov 16, 2015'));

// console.log(yesterday('Nov 17, 2016'));

// Output :

// "Fri Nov 14 2014 00:00:00 GMT+0530 (India Standard Time)"

// "Sun Nov 15 2015 00:00:00 GMT+0530 (India Standard Time)"

// "Wed Nov 16 2016 00:00:00 GMT+0530 (India Standard Time)"

// function yesterday(dateString) {

//     var date = new Date(dateString);

//     date.setDate(date.getDate() - 1);

//     return date.toString();

//   }
  
////////////////////////////////////////////////////////////////////
// Question # 11
// Write a JavaScript function to get the maximum date from an array of dates.   



// Test Data :

// console.log(max_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// Output :

// "2015/02/02"

// function max_date(dateArray) {

//     var maxDate = new Date(Math.max.apply(null, dateArray.map(function(date) {

//       return new Date(date);

//     })));

//     return maxDate.toISOString().substring(0, 10);

//   }
  
////////////////////////////////////////////////////////////////////
// Question # 12
// Write a JavaScript function to get the minimum date from an array of dates.   



// Test Data :

// console.log(min_date(['2015/02/01', '2015/02/02', '2015/01/03']));

// Output :

// "2015/01/03"

// function min_date(dateArray) {

//     var minDate = new Date(Math.min.apply(null, dateArray.map(function(date) {

//       return new Date(date);

//     })));

//     return minDate.toISOString().substring(0, 10);
//   }


////////////////////////////////////////////////////////////////////
// Question # 13

// Write a JavaScript function that will return the number of minutes in hours and minutes.   



// Test Data :

// console.log(timeConvert(200));

// Output :

// "200 minutes = 3 hour(s) and 20 minute(s)."

// function timeConvert(minutes) {

//     var hours = Math.floor(minutes / 60);

//     var remainingMinutes = minutes % 60;

//     return minutes + " minutes = " + hours + " hour(s) and " + remainingMinutes + " minute(s).";
//   }



  ////////////////////////////////////////////////////////////////////
// Question # 14
// Write a JavaScript function to get the amount of days of a year.   



// Test Data :

// console.log(days_of_a_year(2015));

// 365

// console.log(days_of_a_year(2016));

// 366

// function days_of_a_year(year) {

//     var isLeapYear = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0;

//     return isLeapYear ? 366 : 365;

//   }
  

////////////////////////////////////////////////////////////////////
// Question # 15

// Write a JavaScript function to get the quarter (1 to 4) of the year.   



// Test Data :

// console.log(quarter_of_the_year(new Date(2015, 1, 21)));

// 2

// console.log(quarter_of_the_year(new Date(2015, 10, 18)));

// 4

// function quarter_of_the_year(date) {

//     const month = date.getMonth();
  
//     if (month <= 2) {

//       return 1;

//     } else if (month <= 5) {

//       return 2;

//     } else if (month <= 8) {

//       return 3;

//     } else {

//       return 4;

//     }
//   }
  


////////////////////////////////////////////////////////////////////
// Question # 16
// Write a JavaScript function to count the number of days passed since beginning of the year.   



// Test Data :

// console.log(days_passed(new Date(2015, 0, 15)));

// 15

// console.log(days_passed(new Date(2015, 11, 14)));

// 348

// function days_passed(date) {

//     var year_start = new Date(date.getFullYear(), 0, 0);

//     var diff = (date - year_start) + ((year_start.getTimezoneOffset() - date.getTimezoneOffset()) * 60 * 1000);

//     var one_day = 1000 * 60 * 60 * 24;

//     return Math.floor(diff / one_day);

//   }
  
////////////////////////////////////////////////////////////////////
// Question # 17
// Write a JavaScript function to convert a Unix timestamp to time.   


// function Unix_timestamp(t)
// {
// var dt = new Date(t*1000);

// var hr = dt.getHours();

// var m = "0" + dt.getMinutes();

// var s = "0" + dt.getSeconds();

// return hr+ ':' + m.substr(-2) + ':' + s.substr(-2); 
 
// }

// console.log(Unix_timestamp(1412743274));


////////////////////////////////////////////////////////////////////
// Question # 18
// Write a JavaScript program to calculate age.   



// Test Data :

// console.log(calculate_age(new Date(1982, 11, 4)));

// 32

// console.log(calculate_age(new Date(1962, 1, 1)));

// 53

// function calculate_age(birth_date) {
//     var today = new Date();
//     var age = today.getFullYear() - birth_date.getFullYear();
//     var month_diff = today.getMonth() - birth_date.getMonth();
    
//     if (month_diff < 0 || (month_diff === 0 && today.getDate() < birth_date.getDate())) {
//       age--;
//     }
    
//     return age;
//   }

////////////////////////////////////////////////////////////////////
// Question # 19
// Write a JavaScript function to get the day of the month, 2 digits with leading zeros.   

// Test Data :

// d= new Date(2015, 10, 1);

// console.log(day_of_the_month(d));

// "01"

// function day_of_the_month(date) {

//     return ("0" + date.getDate()).slice(-2);

//   }


////////////////////////////////////////////////////////////////////
// Question # 20

// Write a JavaScript function to get a textual representation of a day (three letters, Mon through Sun).   

// Test Data :

// dt = new Date(2015, 10, 2);

// console.log(short_Days(dt));

// "Sun"
// function short_Days(date) {

//     const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//     return days[date.getDay()];

//   }


////////////////////////////////////////////////////////////////////
// Question # 21
// Write a JavaScript function to get a full textual representation of the day of the week (Sunday through Saturday).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(long_Days(dt));

// "Sunday"
// function long_Days(date) {

//   const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

//   return days[date.getDay()];
// }


////////////////////////////////////////////////////////////////////
// Question # 22

// Write a JavaScript function to get ISO-8601 numeric representation of the day of the week (1 (for Monday) to 7 (for Sunday)).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(ISO_numeric_date(dt));

// // 7
// function ISO_numeric_date(date) {
//   return date.getDay() || 7;
// }

////////////////////////////////////////////////////////////////////
// Question # 23
// Write a JavaScript function to get English ordinal suffix for the day of the month, 2 characters (st, nd, rd or th.).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(english_ordinal_suffix(dt));

// "1st"

// function english_ordinal_suffix(date) {

//   const day = date.getDate();

//   if (day % 10 === 1 && day !== 11) {

//     return day + "st";

//   } else if (day % 10 === 2 && day !== 12) {

//     return day + "nd";

//   } else if (day % 10 === 3 && day !== 13) {

//     return day + "rd";

//   } else {

//     return day + "th";
//   }
// }

////////////////////////////////////////////////////////////////////
// Question # 24
// Write a JavaScript function to get ISO-8601 week number of year, weeks starting on Monday.   

// Example : 42 (the 42nd week in the year)

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(ISO8601_week_no(dt));

// 44

// function ISO8601_week_no(date) {

//   const yearStart = new Date(date.getFullYear(), 0, 1);

//   const weekNo = Math.ceil((((date - yearStart) / 86400000) + yearStart.getDay() + 1) / 7);

//   return weekNo;
// }

////////////////////////////////////////////////////////////////////
// Question # 25
// Write a JavaScript function to get a full textual representation of a month, such as January or June.   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(full_month(dt));

// "November"

// function full_month(date) {

//   const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//   return months[date.getMonth()];
// }

////////////////////////////////////////////////////////////////////
// Question # 26
// Write a JavaScript function to get a numeric representation of a month, with leading zeros (01 through 12).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(numeric_month(dt));

// "11"

// function numeric_month(date) {

//   const month = date.getMonth() + 1;

//   return month.toString().padStart(2, '0');

// }

////////////////////////////////////////////////////////////////////
// Question # 27

// Write a JavaScript function to get a short textual representation of a month, three letters (Jan through Dec).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(short_months(dt));

// "Nov"
// function short_months(date) {

//   const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

//   return months[date.getMonth()];
// }

////////////////////////////////////////////////////////////////////
// Question # 28

// Write a JavaScript function to get a full numeric representation of a year (4 digits).   

// Test Data :

// dt = new Date(2015, 10, 1);

// console.log(full_year(dt));

// 2015

// function full_year(date) {

//   return date.getFullYear().toString();

// }

////////////////////////////////////////////////////////////////////
// Question # 29
// Write a JavaScript function to get a two digit representation of a year.   

// Examples : 79 or 04

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(short_year(dt));

// "89"
// function short_year(date) {

//   return date.getFullYear().toString().slice(-2);
// }


////////////////////////////////////////////////////////////////////
// Question # 30

// Write a JavaScript function to get lowercase Ante meridiem and Post meridiem.   

// const date = new Date(2023, 2, 5, 7, 30, 0);

// function am_pm(date) {

//   const hours = date.getHours();

//   return hours >= 12 ? 'pm' : 'am';

// }
// console.log(am_pm(date));

////////////////////////////////////////////////////////////////////
// Question # 31

// const dt = new Date(2023, 2, 5, 14, 30, 0);

// function getAMPM(date) {

//   const hours = date.getHours();

//   return hours >= 12 ? 'PM' : 'AM';

// }
// console.log(getAMPM(dt));

////////////////////////////////////////////////////////////////////
// Question # 32
// Write a JavaScript function to swatch Internet time (000 through 999).   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(internet_time(dt));

// 812

// function internet_time(date) {
//   const milliseconds = date.getTime();
//   const beats = Math.floor(milliseconds / 86400 / 1000 * 1000 / 864 / 100);
//   return ('000' + beats).slice(-3);
// }


////////////////////////////////////////////////////////////////////
// Question # 33
// Write a JavaScript function to get 12-hour format of an hour with leading zeros.   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(hours_with_zeroes(dt));

// "12"

// function hours_with_zeroes(date) {

//   const hours = date.getHours();

//   return hours.toString().padStart(2, '0');

// }

////////////////////////////////////////////////////////////////////
// Question # 34

// Write a JavaScript function to get 24-hour format of an hour without leading zeros.   

// Test Data :

// dt = new Date(1989, 10, 1);

// console.log(hours_without_zeroes(dt));

// 0

// function hours_without_zeroes(date) {

//   const hours = date.getHours();

//   return hours === 0 ? 24 : hours;

// }

////////////////////////////////////////////////////////////////////
// Question # 35

// Write a JavaScript function to get minutes with leading zeros (00 to 59).   

// Test Data :

// dt = new Date(1989, 10, 1);

// function minutes_with_leading_zeros(date) {

//   const minutes = date.getMinutes();

//   return minutes.toString().padStart(2, '0');
// }

// console.log(minutes_with_leading_zeros(dt));

// "00"

////////////////////////////////////////////////////////////////////
// Question # 36
// Write a JavaScript function to get seconds with leading zeros (00 through 59).   

// Test Data :

// dt = new Date(1989, 10, 1);

// function seconds_with_leading_zeros(date) {

//   const seconds = date.getSeconds();

//   return (seconds < 10 ? '0' : '') + seconds;

// }

// console.log(seconds_with_leading_zeros(dt));

// "00"

////////////////////////////////////////////////////////////////////
// Question # 37

// Write a JavaScript function to get Timezone.   

// Test Data :

// const dt = new Date();


// "India Standard Time"

// function getTimezone() {

//   const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

//   return timezone;

// }
// console.log(getTimezone());


////////////////////////////////////////////////////////////////////
// Question # 38
// Write a JavaScript function to find whether or not the date is in daylights savings time.   

// Test Data :

// date = new Date();

// function daylights_savings(date) {
//   const januaryOffset = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
//   const currentOffset = date.getTimezoneOffset();
//   const isDst = currentOffset < januaryOffset;
//   return isDst ? 1 : 0;
// }

// console.log(daylights_savings(date));

// 0

////////////////////////////////////////////////////////////////////
// Question # 39
// Write a JavaScript function to get difference to Greenwich time (GMT) in hours.   

// Test Data :

// date = new Date();

// function diff_to_GMT(date) {
//   const offset = date.getTimezoneOffset() / 60;
//   const sign = offset < 0 ? '+' : '-';
//   const hours = Math.abs(Math.floor(offset));
//   const minutes = Math.abs(offset % 1 * 60);
//   return sign + pad_zeroes(hours) + '.' + pad_zeroes(minutes);
// }

// function pad_zeroes(num) {
//   return num.toString().padStart(2, '0');
// }

// console.log(diff_to_GMT(date));

// "+05.500"

////////////////////////////////////////////////////////////////////
// Question # 40
// Write a JavaScript function to get timezone offset in seconds.   

// Note : The offset for timezones west of UTC is always negative, and for those east of UTC is always positive.

// Test Data :

// date = new Date();

// function timezone_offset_in_seconds(date) {
//   return date.getTimezoneOffset() * -60;
// }

// console.log(timezone_offset_in_seconds(date));

// 19800

////////////////////////////////////////////////////////////////////
// Question # 41
// Write a JavaScript function to add specified years to a date.   

// Test Data :

// dt = new Date(2014,10,2);

// function add_years(date, years) {

//   const new_date = new Date(date);

//   new_date.setFullYear(date.getFullYear() + years);

//   return new_date;
// }

// console.log(add_years(dt, 10).toString());

// Output :

// "Sat Nov 02 2024 00:00:00 GMT+0530 (India Standard Time)"

////////////////////////////////////////////////////////////////////
// Question # 42
// Write a JavaScript function to add specified weeks to a date.   

// Test Data :

// dt = new Date(2014,10,2);

// function add_weeks(date, weeks) {
//   return new Date(date.getTime() + weeks * 7 * 24 * 60 * 60 * 1000);
// }

// console.log(add_weeks(dt, 10).toString());

// Output :

// "Sun Jan 11 2015 00:00:00 GMT+0530 (India Standard Time)"

////////////////////////////////////////////////////////////////////
// Question # 43
// Write a JavaScript function to add specified months to a date.   

// Test Data :

// dt = new Date(2014,10,2);

// function add_months(date, months) {

//   const newDate = new Date(date);

//   newDate.setMonth(newDate.getMonth() + months);

//   return newDate;
// }

// console.log(add_months(dt, 10).toString());

// Output :

// "Wed Sep 02 2015 00:00:00 GMT+0530 (India Standard Time)"

////////////////////////////////////////////////////////////////////
// Question # 44

// Write a JavaScript function to get time differences in minutes between two dates.   

// Test Data :

// dt1 = new Date("October 13, 2014 11:11:00");

// dt2 = new Date("October 13, 2014 11:13:00");

// function diff_minutes(dt1, dt2) {

//   let diff = Math.abs(dt2 - dt1);

//   return Math.floor((diff / 1000) / 60);

// }
// console.log(diff_minutes(dt1, dt2));

// 2

////////////////////////////////////////////////////////////////////
// Question # 45
// Write a JavaScript function to get time differences in hours between two dates.   

// Test Data :

dt1 = new Date("October 13, 2014 08:11:00");

dt2 = new Date("October 13, 2014 11:13:00");

function diff_hours(dt1, dt2) {

  let diff = (dt2.getTime() - dt1.getTime()) / 1000; 

  diff /= (60 * 60); 

  return Math.abs(Math.round(diff)); 

}
console.log(diff_hours(dt1, dt2));

3






















