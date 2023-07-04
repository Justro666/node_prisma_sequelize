const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Holiday = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    h_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    h_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Holiday;
};
