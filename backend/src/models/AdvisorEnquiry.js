import { DataTypes } from "sequelize";
import sequelize from "../db/connection.js";

const AdvisorEnquiry = sequelize.define(
  "AdvisorEnquiry",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    emailId: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
    fullName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    graduationYear: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jobTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    program: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mobileNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "advisor_enquiry",
    timestamps: true,
  }
);

export default AdvisorEnquiry;
