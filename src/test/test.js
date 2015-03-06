import {expect} from 'chai'

describe('Author names formatting', () => {

    it('should format name with one part', () => {
        expect(format('Guimaraes')).to.be.equal('GUIMARAES')
    })

    it('should format name with two parts', () => {
        expect(format('João Silva')).to.be.equal('SILVA, João')
    })

    it('should format name with two parts and preposition', () => {
        expect(format('João da Silva')).to.be.equal('SILVA, João da')
    })

    it('should format name with three parts and special name', () => {
        expect(format('João Henrique Filho')).to.be.equal('HENRIQUE FILHO, João')
    })
    
    it('should capitalize words corretly', () => {
        expect(format('joão do henrique filho')).to.be.equal('HENRIQUE FILHO, João do')
    })
    
    it('should disconsider prepositions as lastname', () => {
        expect(format('joão do filho')).to.be.equal('FILHO, João do')
    })

});

function format(name) {
    var nameParts = name.split(' ')
    var lastPart = nameParts[nameParts.length - 1].toUpperCase();

    if (nameParts.length == 1)
        return lastPart

    var firstName = ''
    for (let i = 0; i < nameParts.length - 1; i++) {
        firstName += ' ' + capitalize(nameParts[i])
    }

    if (isSpecialName(lastPart) && nameParts.length >= 3) {
        var beforeLastPart = nameParts[nameParts.length - 2];
        if(!isPreposition(beforeLastPart)){
            lastPart = beforeLastPart.toUpperCase() + ' ' + lastPart
            firstName = firstName.replace(' ' + capitalize(beforeLastPart), '')
        }
    }

    return lastPart + ',' + firstName
}

function isSpecialName(name){
    return ["FILHO", "FILHA", "NETO", "NETA",
        "SOBRINHO", "SOBRINHA", "JUNIOR"].includes(name.toUpperCase())
}

function isPreposition(name){
    return ["da", "de", "do", "das", "dos"].includes(name.toLowerCase())
}

function capitalize(name){
    name = name.toLowerCase()
    if(isPreposition(name))
        return name
    return name.charAt(0).toUpperCase() + name.slice(1)
}