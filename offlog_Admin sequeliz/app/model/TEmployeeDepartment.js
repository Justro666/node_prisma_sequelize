const Sequelize = require("sequelize");

module.exports = sequelize => {
  const EmpDep = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    ed_position: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    ed_join_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return EmpDep;
};
