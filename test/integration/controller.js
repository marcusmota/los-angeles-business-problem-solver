

const controller = require('./../../controller');

const expect = require('chai').expect;

describe('Controller file test integration', () => {

    describe('test the getJsonDataFromUrl method', () => {

        it('it should return an array with json data', done => {

            controller
            .getJsonDataFromUrl("https://data.lacity.org/resource/ngkp-kqkn.json")
            .then(result => {

                expect(result).to.be.a('array');
                done();

            });

        });

    });

    describe('test the resolveProblemOne method', () => {

        it('it should return A A OFICINA CENTRAL HISPANA DE LOS ANGELES /C as the business with the most locations', done => {

            controller.resolveProblemOne()
            .then(result => {

                expect(result).to.be.equal("A A OFICINA CENTRAL HISPANA DE LOS ANGELES /C");

                done();

            });
            
        });

    });

    describe('test the resolveProblemTwo method', () => {

        it('it should return ITT CANNON, LLC as the oldest business', done => {

            controller.resolveProblemTwo()
            .then(result => {

                expect(result).to.be.equal("ITT CANNON, LLC");

                done();

            });
            

        });

    });

});