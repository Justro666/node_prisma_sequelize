const Sequelize = require("sequelize");

module.exports = sequelize => {
  const JobType = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    t_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return JobType;
};
