// test/test.js

const assert = require('assert');
const createResponsiveTable = require('../src/responsive-table');

describe('Responsive Table Components', function () {
    describe('#createResponsiveTable()', function () {
        it('should return HTML string for responsive table', function () {
            const data = [
                { name: 'John Doe', age: 30, city: 'New York' },
                { name: 'Jane Smith', age: 25, city: 'Los Angeles' },
                // Add more test data as needed
            ];
            const tableHTML = createResponsiveTable(data);
            // Your assertion logic goes here to verify the returned HTML
        });
    });
});
