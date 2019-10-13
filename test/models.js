'use strict';

module.exports = [
    {
        identity: 'thismodel',
        datastore: 'myConnection',
        migrate: 'create',
        primaryKey: 'id',
        attributes: {
            id: {
                type: 'number',
                autoMigrations: { autoIncrement: true }
            },
            doo: {
                type: 'string'
            }
        }
    },
    {
        identity: 'thatmodel',
        datastore: 'myConnection',
        primaryKey: 'id',
        attributes: {
            id: {
                type: 'number',
                autoMigrations: { autoIncrement: true }
            },
            ding: {
                type: 'number'
            }
        }
    }
];
