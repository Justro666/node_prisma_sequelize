const Sequelize = require("sequelize");

module.exports = sequelize => {
  const ShiftTime = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    s_start_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    s_end_time: {
      type: Sequelize.DATE,
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return ShiftTime;
};
