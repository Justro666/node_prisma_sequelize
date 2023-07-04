const Sequelize = require("sequelize");

module.exports = sequelize => {
  const LeaveCategory = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    c_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    c_color: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    c_allow_days: {
      type: Sequelize.INTEGER(11),
      allowNull: false
    },
    c_info: {
      type: Sequelize.STRING(1024),
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return LeaveCategory;
};
