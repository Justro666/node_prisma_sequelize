const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Report = sequelize.define("m_job_type", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    r_subject: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    r_meessage: {
      type: Sequelize.STRING(1024),
      allowNull: false
    },
    r_attach_type: {
      type: Sequelize.TINYINT,
      allowNull: false
    },
    r_attach_path: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    r_attach_path: {
      type: Sequelize.DATE,
      allowNull: true
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Report;
};
