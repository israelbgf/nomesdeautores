import {expect} from 'chai'
import {format} from '../nomesdeautores/formatter'

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