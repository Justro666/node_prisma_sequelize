const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Department = sequelize.define("m_township", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    d_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    d_remark: {
      type: Sequelize.STRING(1024),
      allowNull: false
    },
    d_color: {
      type: Sequelize.STRING(7),
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Department;
};
