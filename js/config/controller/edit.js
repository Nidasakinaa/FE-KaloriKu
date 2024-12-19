export function isiData(results) {  
  const inputMapping = [
      { id: 'pasienName', path: 'pasienName' },
      { id: 'gender', path: 'gender' },
      { id: 'usia', path: 'usia' },
      { id: 'phonenumber', path: 'phonenumber' },
      { id: 'alamat', path: 'alamat' },
      { id: 'doctorName', path: 'doctor.name' },
      { id: 'diagnosis', path: 'medicalRecord.diagnosis' }
  ];

  inputMapping.forEach(({ id, path }) => {
      const inputElement = document.getElementById(id);
      const value = getNestedValue(results, path);
      if (inputElement) {
          inputElement.value = value;
      }
  });
  console.log(results);
}
  
function getNestedValue(obj, path, index, property) {
    const value = path.split('.').reduce((value, key) => (value && value[key]) ? value[key] : '', obj);
  
    if (Array.isArray(value) && value.length > index && value[index].hasOwnProperty(property)) {
      return value[index][property];
    }
  
    return value;
}
