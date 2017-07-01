var request = require("request");
var temp;
var weather;

request.get('http://api.wunderground.com/api/54c6b038c99ad139/conditions/q/CA/San_Diego.json',
function(err, res){
    if(res.statusCode !== 200) throw res.statusCode;
    var data = JSON.parse(res.body);
    temp = (data.current_observation.temp_f + " F");
    weather = (data.current_observation.weather);
    console.log(data);
    console.log(data.current_observation.feels_like_f);
    console.log(data.current_observation.weather);
    console.log(data.current_observation.temp_f + " F");
})