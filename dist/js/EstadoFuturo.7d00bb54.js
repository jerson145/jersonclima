"use strict";(self["webpackChunkexamen_practico_2023"]=self["webpackChunkexamen_practico_2023"]||[]).push([[822],{7185:function(a,t,e){e.r(t),e.d(t,{default:function(){return d}});var i=e(3396),r=e(7139);function n(a,t,e,n,u,o){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("h2",null,(0,r.zw)(u.ciudad),1),(0,i._)("h2",null,"Fecha: "+(0,r.zw)(e.fecha),1),(0,i._)("p",null,"Región: "+(0,r.zw)(u.region),1),(0,i._)("p",null,"País: "+(0,r.zw)(u.país),1),(0,i._)("p",null,"Latitud: "+(0,r.zw)(u.latitud),1),(0,i._)("p",null,"Longitud: "+(0,r.zw)(u.longitud),1),(0,i._)("p",null,"Temperatura promedio: "+(0,r.zw)(u.temperaturaPromedio)+"°",1),(0,i._)("p",null,"Temperatura máxima: "+(0,r.zw)(u.temperaturaMáxima)+"°C",1),(0,i._)("p",null,"Temperatura mínima: "+(0,r.zw)(u.temperaturaMínima)+"°C",1),(0,i._)("p",null,"Condición: "+(0,r.zw)(u.condición),1)])}var u={props:{fecha:{type:String,required:!0}},data(){return{ciudad:"",region:"","país":"","condición":"",latitud:0,longitud:0,temperaturaPromedio:0,"temperaturaMáxima":0,"temperaturaMínima":0}},mounted(){this.fetchWeatherData()},watch:{fecha:{immediate:!0,handler(){this.fetchWeatherData()}}},methods:{fetchWeatherData(){const a="https://api.weatherapi.com/v1/future.json",t="Trujillo",e="8f2de44a3bab4bfba52163352232906",i=this.fecha;fetch(`${a}?key=${e}&q=${t}&lang=es&aqi=yes&dt=${i}`).then((a=>a.json())).then((a=>{const{location:t,forecast:e}=a;this.ciudad=t.name,this.region=t.region,this.país=t.country,this.condición=e.forecastday[0].day.condition.text,this.latitud=t.lat,this.longitud=t.lon,this.temperaturaPromedio=e.forecastday[0].day.avgtemp_c,this.temperaturaMáxima=e.forecastday[0].day.maxtemp_c,this.temperaturaMínima=e.forecastday[0].day.mintemp_c})).catch((a=>{console.error(a)}))}}},o=e(89);const c=(0,o.Z)(u,[["render",n]]);var d=c}}]);
//# sourceMappingURL=EstadoFuturo.7d00bb54.js.map