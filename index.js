const fs = require("fs");

// Read data from JSON file
function readData() {
  const data = fs.readFileSync("data.json");
  return JSON.parse(data);
}

// Write data to JSON file
function writeData(data) {
  fs.writeFileSync("data.json", JSON.stringify(data, null, 2));
}

// CREATE – Add new patient
function addPatient(patient) {
  const data = readData();
  data.push(patient);
  writeData(data);
  console.log("Patient added:", patient);
}

// READ – View all patients
function viewPatients() {
  const data = readData();
  console.log("Patient Records:", data);
}

// UPDATE – Update disease using ID
function updatePatient(id, newDisease) {
  const data = readData();
  const patient = data.find(p => p.id === id);

  if (patient) {
    patient.disease = newDisease;
    writeData(data);
    console.log("Patient updated:", patient);
  } else {
    console.log("Patient not found");
  }
}

// DELETE – Remove patient using ID
function deletePatient(id) {
  const data = readData().filter(p => p.id !== id);
  writeData(data);
  console.log("Patient deleted with ID:", id);
}

// ---- TESTING ----
addPatient({ id: 103, patientName: "Suresh", age: 28, disease: "Fever" });
viewPatients();
updatePatient(101, "Type 2 Diabetes");
deletePatient(102);
