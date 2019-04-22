import { setCurrentPage, setSortValue } from '../../src/components/ZipcodesPage/ZipcodesPage';
import { setCurrentSpeed } from '../../src/components/ZipcodesPage/RowCards';

describe('Local State of ZipcodesPage', () => {
    it('setCurrentPage, currentPage set to 3', () => {
        const newState = setCurrentPage(3)
        expect(newState.currentPage).to.equal(3)
    });
  
    it('setSortValue, category set to "food", order set to "asc"', () => {
        const newState = setSortValue("food", "asc")
        expect(newState.category).to.equal("food")
        expect(newState.order).to.equal("asc")
    });
});

describe('Local State of RowCards', () => {
    it('setCurrentSpeed, currentSpeed set to 60', () => {
        const newState = setCurrentSpeed(60)
        expect(newState.currentSpeed).to.equal(60)
    });
});