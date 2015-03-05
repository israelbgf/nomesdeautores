import {expect} from 'chai'

describe('Author names formatting', () => {

    it('Format name with one part', () => {
        expect(format('Guimaraes')).to.be.equal('GUIMARAES')
    })
    
    it('Format name with two parts', () => {
        expect(format('João Silva')).to.be.equal('SILVA, João')
    })

    it('Format name with two parts and preposition', () => {
        expect(format('João da Silva')).to.be.equal('SILVA, João da')
    })
    
});

function format(name){
    var nameParts = name.split(' ')
    var lastPart = nameParts[nameParts.length - 1].toUpperCase();
    
    if(nameParts.length == 1)
        return lastPart
    
    var firstName = ''
    for(let i = 0; i < nameParts.length - 1; i++){
        firstName += ' ' + nameParts[i]
    }
    
    return lastPart + ',' + firstName
}