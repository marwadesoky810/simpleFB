import { Sequelize } from "sequelize";
// &==========================================================================

export const sequelize = new Sequelize("mysql://ul9lil5cnwbti4x6:XlfIeATZZGXjYwI0FYcR@bdzcez8veb4rx4lgzku0-mysql.services.clever-cloud.com:3306/bdzcez8veb4rx4lgzku0");
  
// &==========================================================================

  const connectionDB = async()=>{
    return await sequelize.sync({}).then(()=>{
        console.log("Connection database initialized successfully");

    }).catch(err=>{
        console.log("Error to Connect", err);
    });
  }
// &==========================================================================
  
export default connectionDB;











