const Sequelize = require("sequelize");

module.exports = sequelize => {
  const EmpNote = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    n_title: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    n_description: {
      type: Sequelize.STRING(1024),
      allowNull: false
    },
    n_pin: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return EmpNote;
};
