

const controller = require('./../../controller');

const expect = require('chai').expect;

describe('Controller file test unit', () => {

    describe('test the getTheOldestActiveBusiness method', () => {

        it('it should return empty string with empty business array', done => {

            const business = [];

            const result = controller.getTheOldestActiveBusiness(business);

            expect(result).to.be.equal("");
            done();

        });

        it('it should return A1 as the oldest for a given array', done => {

            const business = [
                {"business_name":"A1","location_start_date": "1990-01-01T00:00:00.000"},
                {"business_name":"A2","location_start_date": "1990-01-02T00:00:00.000"},
                {"business_name":"A3","location_start_date": "1990-02-01T00:00:00.000"},
                {"business_name":"A4","location_start_date": "1991-01-01T00:00:00.000"},
            ];

            const result = controller.getTheOldestActiveBusiness(business);

            expect(result).to.be.equal("A1");
            done();

        });

        it('it should return A1 as the oldest for a given array', done => {

            const business = [
                {"business_name":"A4","location_start_date": "1991-01-01T00:00:00.000"},
                {"business_name":"A3","location_start_date": "1990-02-01T00:00:00.000"},
                {"business_name":"A2","location_start_date": "1990-01-02T00:00:00.000"},
                {"business_name":"A1","location_start_date": "1990-01-01T00:00:00.000"},
            ];

            const result = controller.getTheOldestActiveBusiness(business);

            expect(result).to.be.equal("A1");
            done();

        });

        it('it should return A4 as the oldest for a given array', done => {

            const business = [
                {"business_name":"A1","location_start_date": "1990-01-03T00:00:00.000"},
                {"business_name":"A2","location_start_date": "1990-01-02T00:00:00.000"},
                {"business_name":"A3","location_start_date": "1990-02-01T00:00:00.000"},
                {"business_name":"A4","location_start_date": "1990-01-01T00:00:00.000"},
            ];

            const result = controller.getTheOldestActiveBusiness(business);

            expect(result).to.be.equal("A4");
            done();

        });

    });

    describe('test the getTheMostLocationsInLA method', () => {

        it('it should return empty string with empty business array', done => {

            const business = [];

            const result = controller.getTheMostLocationsInLA(business);

            expect(result).to.be.equal("");
            done();

        });

        it('it should return A1 as the most located for a given array', done => {

            const business = [
                {"business_name":"A1","city":"PACIFIC PALISADES"},
                {"business_name" : "A1", "city" : "LOS ANGELES"},
                {"business_name" : "A1", "city" : "LOS ANGELES"},
                {"business_name" : "A1", "city" : "LOS ANGELES"},
                {"business_name" : "B2", "city" : "NEW YORK"},
                {"business_name" : "B3", "city" : "NEW YORK"},
                {"business_name" : "D4", "city" : "LOS ANGELES"},
                {"business_name" : "C1", "city" : "LOS ANGELES"},
                {"business_name" : "C1", "city" : "LOS ANGELES"},
            ];

            const result = controller.getTheMostLocationsInLA(business);

            expect(result).to.be.equal("A1");
            done();

        });

        it('it should return C1 as the most located for a given array', done => {

            const business = [
                {"business_name":"A1","city":"PACIFIC PALISADES"},
                {"business_name" : "A1", "city" : "LOS ANGELES"},
                {"business_name" : "A1", "city" : "LOS ANGELES"},
                {"business_name" : "B2", "city" : "NEW YORK"},
                {"business_name" : "B3", "city" : "NEW YORK"},
                {"business_name" : "D4", "city" : "LOS ANGELES"},
                {"business_name" : "C1", "city" : "LOS ANGELES"},
                {"business_name" : "C1", "city" : "LOS ANGELES"},
                {"business_name" : "C1", "city" : "LOS ANGELES"},
            ];

            const result = controller.getTheMostLocationsInLA(business);

            expect(result).to.be.equal("C1");
            done();

        });
       
    });

    

});