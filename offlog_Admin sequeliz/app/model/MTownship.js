const Sequelize = require("sequelize");

module.exports = sequelize => {
  const Township = sequelize.define("m_township", {
    id: {
      type: Sequelize.BIGINT,
      primaryKey: true,
      autoIncrement: true
    },
    j_name: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    j_remark: {
      type: Sequelize.STRING(128),
      allowNull: false
    },
    del_flg: {
      type: Sequelize.TINYINT,
      allowNull: false,
      defaultValue: 0
    }
  });

  return Township;
};
