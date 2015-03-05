import {expect} from 'chai'

describe('Author names formatting', () => {

    describe('1 and 2 name parts scenarios', () => {
        
        it('should make singlename uppercase', () => {
            expect(format('Guimaraes')).to.be.equals('GUIMARAES')
        });

        it('should make lastname uppercase', () => {
            expect(format('João Silva')).to.be.equals('SILVA, João')
        });
        
    })

    describe('3 or more name parts scenarios', () => {

        it('should make lastname and special names uppercase with 3 part name', () => {
            expect(format('João Silva Neto')).to.be.equals('SILVA NETO, João')
        });

        it('should make lastname and special names uppercase with 4 part name', () => {
            expect(format('João Pedro Silva Neto')).to.be.equals('SILVA NETO, João Pedro')
        });

        it('should make lastname and special names uppercase with 5 part name', () => {
            expect(format('João Carlos Pedro Silva Neto')).to.be.equals('SILVA NETO, João Carlos Pedro')
        });

        it('first name parts should be capitalized', () => {
            expect(format('joão fernando carlos neto')).to.be.equals('CARLOS NETO, João Fernando')
        });
    })

    describe('General behaviours', () => {

        it('first name parts should be capitalized', () => {
            expect(format('joão carlos')).to.be.equals('CARLOS, João')
        });

        //it('preposition names should not be treated as name', () => {
        //    expect(format('Diego de Faria')).to.be.equals('Faria, Diego de')
        //});


    })

});

function format(name){
    var nameParts = name.split(' ')
    var lastNamePart = nameParts[nameParts.length - 1]

    if(nameParts.length == 1)
        return lastNamePart.toUpperCase()

    if(nameParts.length == 2)
        return lastNamePart.toUpperCase() + ', ' + capitalize(nameParts[0])

    if(nameParts.length >= 3 && isSpecialName(lastNamePart)){
        var beforeLastNamePart = nameParts[nameParts.length - 2];
        //if(isPreposition(beforeLastNamePart))
        var composedLastName = beforeLastNamePart.toUpperCase() + ' ' + lastNamePart.toUpperCase() + ',';
    }

    var composedFistName = ''
    for(var i = 0; i < nameParts.length - 2; i++){
        composedFistName +=  ' ' + capitalize(nameParts[i])
    }

    return composedLastName + composedFistName

}

function capitalize(name){
    return name.charAt(0).toUpperCase() + name.slice(1)
}

function isSpecialName(name){
    return ["FILHO", "FILHA", "NETO", "NETA", 
            "SOBRINHO", "SOBRINHA", "JUNIOR"].includes(name.toUpperCase())
}