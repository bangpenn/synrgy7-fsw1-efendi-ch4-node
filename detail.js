
const detail = (id, data) => {
    // Cari orang dengan ID yang sesuai
    const person = data.find((person) => person.id === id);
  
    // Jika orang ditemukan, tampilkan detailnya
    if (person) {
      console.log(`Detail by ID ${id}:`);
      console.log(person);
    } else {
      console.log(`Detail by ID ${id} not found.`);
    }
  };
  
  module.exports = { detail };
  