import { describe, it } from 'mocha';
import { expect } from 'chai';
import helpers from '../lib/helpers';

describe('Helpers', () => {
    it('should be an object', () => {
        expect(helpers).to.exist;
        expect(helpers).to.be.an('object');
    });

    describe('format', () => {
        it('should expose a "MMMMYYYY" format', () => {
            expect(helpers.formatMMMMYYYY).to.exist;
            expect(helpers.formatMMMMYYYY).to.be.a('function');
        });

        it('should format dates with "MMMMYYYY"', () => {
            expect(helpers.formatMMMMYYYY('2015-07-01').string).to.equal('July 2015');
        });

        it('should expose a "MMMDDYYYY" format', () => {
            expect(helpers.formatMMMDDYYYY).to.exist;
            expect(helpers.formatMMMDDYYYY).to.be.a('function');
        });

        it('should format dates with "MMMDDYYYY"', () => {
            expect(helpers.formatMMMDDYYYY('2015-07-01').string).to.equal('Jul 01, 2015');
        });

        it('should expose a "YYYY" format', () => {
            expect(helpers.formatYYYY).to.exist;
            expect(helpers.formatYYYY).to.be.a('function');
        });

        it('should format dates with "YYYY"', () => {
            expect(helpers.formatYYYY('2015-07-01').string).to.equal('2015');
        });
    });
});
