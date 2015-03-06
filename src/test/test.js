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

    it('Format name with three parts and special name', () => {
        expect(format('João Henrique Filho')).to.be.equal('HENRIQUE FILHO, João')
    })

});

function format(name) {
    var nameParts = name.split(' ')
    var lastPart = nameParts[nameParts.length - 1].toUpperCase();

    if (nameParts.length == 1)
        return lastPart

    var firstName = ''
    for (let i = 0; i < nameParts.length - 1; i++) {
        firstName += ' ' + nameParts[i]
    }

    if (isSpecialName(lastPart) && nameParts.length >= 3) {
        var beforeLastPart = nameParts[nameParts.length - 2];
        lastPart = beforeLastPart.toUpperCase() + ' ' + lastPart
        firstName = firstName.replace(' ' + beforeLastPart, '')
    }

    return lastPart + ',' + firstName
}

function isSpecialName(name){
    return ["FILHO", "FILHA", "NETO", "NETA",
        "SOBRINHO", "SOBRINHA", "JUNIOR"].includes(name.toUpperCase())
}