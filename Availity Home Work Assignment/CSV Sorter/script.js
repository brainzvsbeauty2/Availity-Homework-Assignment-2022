const myForm = document.getElementById("myForm");
const csv = document.getElementById("csv");

document.getElementById("csv").addEventListener("change", readFileAsString);
function readFileAsString() {
  var files = this.files;
  if (files.length === 0) {
    console.log("No file is selected");
    return;
  }

  var reader = new FileReader();
  reader.onload = function (event) {
    const file = event.target.result;

    let formattedPatientInformation = [];
    const patientListRaw = file.split(/\r?\n/);

    patientListRaw.forEach((patient) => {
      const patientInformation = patient.split(",");
      const person = {
        Name: patientInformation[1],
        UserID: patientInformation[0],
        Version: patientInformation[3],
        HealthPlan: patientInformation[2],
      };

      formattedPatientInformation.push(person);
    });
    //sort by name in ascending order a - z:
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    function compareName(a, b) {
      if (a.Name < b.Name) {
        return -1;
      } else if (a.Name > b.Name) {
        return 1;
      } else {
        return 0;
      }
    }
    formattedPatientInformation = formattedPatientInformation.sort(compareName);
      console.log(formattedPatientInformation);
      
      //Before breaking into health plans remove dups
      
    

    //Sorting by Payer name (Stackover flow)
    const groups = formattedPatientInformation.reduce(
      (groups, item) => ({
        ...groups,
        [item.HealthPlan]: [...(groups[item.HealthPlan] || []), item],
      }),
      {}
    );
    console.log(groups);

    // Removing duplicate User Ids for the same Insurance Company, then only the record with the highest version should stay - Could not figure this one out
  };
  //This is picking the first file from the list when the user select the file
  reader.readAsText(files[0]);
}

myForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e.target);
  console.log(csv.file, csv.value);
});
