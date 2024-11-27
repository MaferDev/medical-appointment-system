import dynamoDb from "./dynamoClient";

export type PatientSchema = {
  document: string;
  name: string;
};

const getPatient = async (document: string): Promise<PatientSchema | null> => {
  const TABLE_NAME = `${process.env.COUNTRY}-patient`;
  const params = {
    TableName: TABLE_NAME,
    Key: {
      document,
    },
  };

  try {
    const result = await dynamoDb.get(params).promise();
    if (result.Item) {
      console.log("Patient:", result.Item);
      return result.Item as PatientSchema;
    } else {
      console.log("Patient not found");
      return null;
    }
  } catch (error) {
    console.error("Error retrieving Patient item:", error);
    throw error;
  }
};

export default {
  getPatient,
};
