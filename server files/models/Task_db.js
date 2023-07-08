const {QueryTypes} = require('sequelize');
const index = require('./Index');
const db = index.db

const get_all_tasks = async (date) => {
    try {
        const result = await db.sequelize.query(
            'SELECT * FROM organizer.all_tasks where date = ?',
            {   
                replacements: [date],
                type: QueryTypes.SELECT
            }
        );
        console.log(result);
        return {
            statusCode: 200,
            data: result               
        }
    } catch(err) {
        return {
            statusCode: 500,
            errorName: err.name,
            errorMsg: err.message
        }
    }
}


const insert_task = async (task, date) => {
    try {
        const result = await db.sequelize.query(
            'INSERT INTO organizer.all_tasks (task, date) value ( ? , ? )',
            {   
                replacements: [task, date],
                type: QueryTypes.INSERT
            }
        );
        return {
            statusCode: 200,
            data: result               
        }
    } catch(err) {
        return {
            statusCode: 500,
            errorName: err.name,
            errorMsg: err.message
        }
    }
}

const update_task = async (task_id, desc) => {
    try {
        const result = await db.sequelize.query(
            'UPDATE organizer.all_tasks SET task = ? WHERE id = ?',
            {   
                replacements: [desc, task_id],
                type: QueryTypes.UPDATE
            }
        );
        return {
            statusCode: 200,
            data: result               
        }
    } catch(err) {
        return {
            statusCode: 500,
            errorName: err.name,
            errorMsg: err.message
        }
    }
}

const delete_task = async (task_id) => {
    try {
        const result = await db.sequelize.query(
            'DELETE FROM organizer.all_tasks WHERE id = ?',
            {   
                replacements: [task_id],
                type: QueryTypes.DELETE
            }
        );
        return {
            statusCode: 200,
            data: result               
        }
    } catch(err) {
        return {
            statusCode: 500,
            errorName: err.name,
            errorMsg: err.message
        }
    }
}


module.exports = {get_all_tasks, insert_task, delete_task, update_task}
