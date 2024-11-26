module.exports.handler = async (event) => {
  console.log(`EVENT`);
  console.log(event);
  for (const record of event.Records) {
    console.log(`Appointment`);
    console.log(record.body);
  }
};
