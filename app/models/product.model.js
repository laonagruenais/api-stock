module.exports = (sequelize, Sequelize) => {
  const Product = sequelize.define("product", {
    id: {
      type: Sequelize.STRING,
      autoIncrement: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    },
    stock: {
      type: Sequelize.INTEGER,
      defaultValue: 0
    }
  });

  return Product;
};