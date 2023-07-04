const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Leave = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    l_date: {
      type: Sequelize.DATEONLY,
      allowNull: false
    },
    l_description: {
      type: Sequelize.STRING(1024),
      allowNull: false
    },
    l_request_status: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    l_reject_comment: {
      type: Sequelize.STRING(1024),
      allowNull: true
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Leave;
};
