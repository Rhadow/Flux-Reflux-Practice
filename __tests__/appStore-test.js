'use strict';

jest.dontMock('../src/app/stores/appStore.js');
jest.dontMock('underscore');

describe('appStore', function() {
    var appStore,
        appDispatcher,
        callback,
        constants = require('../src/app/constants/constants.js'),
        addUserAction = {
            action: {
                actionType: constants.ADD_USER,
                data: {
                    name: 'Tester',
                    age: 27
                }
            }
        },
        deleteUserAction = {
            action: {
                actionType: constants.DELETE_USER,
                data: 'replace me in test'
            }
        };

    beforeEach(function() {
        appStore = require('../src/app/stores/appStore.js');
        appDispatcher = require('../src/app/dispatcher/dispatcher.js');
        callback = appDispatcher.register.mock.calls[0][0];
    });

    it('should register a callback to store', function() {
        expect(appDispatcher.register.mock.calls.length).toBe(1);
    });

    it('should initialize with a preset data', function() {
        expect(appStore.getUserList()).toEqual([{
            name: 'Howard',
            age: 27
        }, {
            name: 'Shaun',
            age: 22
        }, {
            name: 'Amy',
            age: 26
        }]);
    });

    it('should add a new user after addUserAction is fired', function() {
        callback(addUserAction);
        var allUsers = appStore.getUserList();
        expect(allUsers.length).toBe(4);
        expect(allUsers[allUsers.length - 1]).toEqual({
            name: 'Tester',
            age: 27
        });
    });

    it('should delete user according to index after deleteUserAction is fired', function() {
        deleteUserAction.action.data = 1;
        callback(deleteUserAction);
        var allUsers = appStore.getUserList();
        expect(allUsers.length).toBe(2);
        expect(allUsers).toEqual([{
            name: 'Howard',
            age: 27
        }, {
            name: 'Amy',
            age: 26
        }]);
    });
});
