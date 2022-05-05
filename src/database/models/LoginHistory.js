module.exports = (sequelize, DataTypes) =>{
    let alias = "LoginHistory"
    let cols = {
      id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      fechaHora:{
        type: DataTypes.DATE,
        allowNull:false
      },
      Tipo:{
        type: DataTypes.ENUM,
        values: ["tipo1", "tipo2"]
      },

      usuarios_id:{
        type: DataTypes.INTEGER
      }
    };
    let config ={
      tableName: "historialogin",
      timestamps: false
    }
  
    const LoginHistory = sequelize.define(alias, cols, config)
  
    return LoginHistory
  }