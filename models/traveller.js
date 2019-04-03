const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const callback = (journey) => {
    return journey.startLocation;
  };
  result = this.journeys.map(callback);
  return result;
};


Traveller.prototype.getJourneyEndLocations = function () {
  const callback = (journey) => {
    return journey.endLocation;
  };
  result = this.journeys.map(callback);
  return result;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const result = this.journeys.filter( (trip) => {
    if (trip.transport === transport)
    return trip;
  });
return result;
};


Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const result = this.journeys.filter((trip) =>{
    if (trip.distance >= minDistance)
    return trip;
  });
  return result;
};


Traveller.prototype.calculateTotalDistanceTravelled = function () {
    let total = this.journeys.reduce( (ttl, trip) => {
      return ttl + trip.distance;
    }, 0);
    return total;
};


// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const result = this.journeys.filter( (trip) => {
//     if (this.getJourneysByTransport(trip.transport).length > 1){
//       return trip.transport
//     };
//   });
//   return result;
// };

Traveller.prototype.getUniqueModesOfTransport = function () {
  const callback = (trip) => {
    return trip.transport;
  };
  all = this.journeys.map( callback );
  let result = [...new Set(all)];
  return result;
};




module.exports = Traveller;
