// Code your selectRandomEntry function here:

function selectRandomEntry (ids){
  let selectThreeId = [];

  while (selectThreeId.length < 3) {
    let index = Math.floor(Math.random()*ids.length);
    let selectedId = ids[index];
    if (!selectThreeId.includes(selectedId)){
      selectThreeId.push(selectedId);
    }
  }
  return selectThreeId;
}

// Code your buildCrewArray function here:
function buildCrewArray(selectedId, candidateObj) {
  let crew = [];
  for (i = 0; i < selectedId.length; i++){
    
      for ( j = 0; j < candidateObj.length; j++){
        let selectedCandidate = candidateObj[j];
        if ( selectedId[i] === selectedCandidate.astronautID){  
          crew.push(candidateObj[j]);
        } 
        
        }
        
      }   
return crew
 }

let idNumbers = [291, 414, 503, 599, 796, 890];
let selectThreeIdNumbers = selectRandomEntry(idNumbers);
console.log(selectThreeIdNumbers);


// Here are the candidates and the 'animals' array:
let candidateA = {
  'name':'Gordon Shumway',
  'species':'alf',
  'mass':90,
  'o2Used':function(hrs){return 0.035*hrs},
  'astronautID':414
};
let candidateB = {
  'name':'Lassie',
  'species':'dog',
  'mass':19.1,
  'o2Used':function(hrs){return 0.030*hrs},
  'astronautID':503
};
let candidateC = {
  'name':'Jonsey',
  'species':'cat',
  'mass':3.6,
  'o2Used':function(hrs){return 0.022*hrs},
  'astronautID':796
};
let candidateD = {
  'name':'Paddington',
  'species':'bear',
  'mass':31.8,
  'o2Used':function(hrs){return 0.047*hrs},
  'astronautID':291
};
let candidateE = {
  'name':'Pete',
  'species':'tortoise',
  'mass':417,
  'o2Used':function(hrs){return 0.010*hrs},
  'astronautID':599
};
let candidateF = {
  'name':'Hugs',
  'species':'ball python',
  'mass':2.3,
  'o2Used':function(hrs){return 0.018*hrs},
  'astronautID':890
};

let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];
let selectedCandidates = []
selectedCandidates = buildCrewArray(selectThreeIdNumbers, animals)
console.log(`${selectedCandidates[0].name}, ${selectedCandidates[1].name} and ${selectedCandidates[2].name} are going to space!}, `);


// Code your template literal and console.log statements:
// console.log(buildCrew(idNumbers,animals))

