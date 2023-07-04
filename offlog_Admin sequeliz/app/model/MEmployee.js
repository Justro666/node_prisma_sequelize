const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Employee = sequelize.define("m_employee", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    e_full_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    e_nick_name: {
      type: Sequelize.STRING(32),
      allowNull: true
    },
    e_dob: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    e_contact_mail: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    e_phone: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    e_emgc_phone: {
      type: Sequelize.STRING(128),
      allowNull: true
    },
    e_blood_type: {
      type: Sequelize.TINYINT,
      allowNull: true
    },
    e_nationality: {
      type: Sequelize.STRING(16),
      allowNull: false
    },
    e_religion: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    e_personal_id: {
      type: Sequelize.STRING(64),
      allowNull: false
    },
    e_address: {
      type: Sequelize.STRING(256),
      allowNull: true
    },
    e_employee_ID: {
      type: Sequelize.STRING(128),
      allowNull: true
    },
    e_join_date: {
      type: Sequelize.DATEONLY,
      allowNull: true
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });
  return Employee;
};
