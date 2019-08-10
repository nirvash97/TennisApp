

//Tennis Score 
//test-driven development (TDD) -test before coding 
class TennisApp{

    constructor(){
        this.scoreA=0
        this.scoreB=0
    }
    getScore(player){ //name player a ,b
        if(player==='A'){
            if(this.scoreA===30){
                this.scoreA+=10
            }
            else{
                this.scoreA+=15
            }
        }
        else if(player==='B'){
            if(this.scoreB===30){
                this.scoreB+=10
            }
            else{
                this.scoreB+=15
            }
        }
    }

    echo(){

        var resultA = 'LOVE'
        var resultB = 'LOVE'

        if(this.scoreA===15){
            resultA = "Fifteen"
        }
        else if(this.scoreA===30){
            resultA = "Thirty"
        }
        else if(this.scoreA===40){
            resultA = "Forty"
        }
        else if(this.scoreA>40){
            return "Win"
        }

        if(this.scoreB===15){
            resultB = "Fifteen"
        }
        else if(this.scoreB===30){
            resultB = "Thirty"
        }
        else if(this.scoreB===40){
            resultB = "Forty"
        }
        else if(this.scoreA>40){
            return "Win"
        }

        return resultA + " - " + resultB
    }
}

//TDD Test-Driven Development 

describe('TennisApp', () => {
    it('should return "LOVE - LOVE" when call echo() at game start', () =>{
        //เตรียมความพร้้อม 
        const app = new TennisApp()

        //Act
        let result = app.echo()
        
        //Assert
        expect(result).toBe('LOVE - LOVE')
    })
})

describe('TennisApp', () => {
    it('should echo "Fifteen - LOVE" when playerA get first score', () =>{
        //เตรียมความพร้้อม 
        const app = new TennisApp()
        app.getScore('A')
        //Act
        let result = app.echo('A')

        //Assert
        expect(result).toBe('Fifteen - LOVE')
    })
})

describe('TennisApp', () => {
    it('should echo "Thirty - LOVE" when playerA get double score', () =>{
        //เตรียมความพร้้อม 
        const app = new TennisApp()
        app.getScore('A')
        app.getScore('A')

        //Act
        let result = app.echo('A')

        //Assert
        expect(result).toBe('Thirty - LOVE')
    })
})

describe('TennisApp', () => {
    it('should echo "Thirty - Fifteen" when playerA get double score', () =>{
        //เตรียมความพร้้อม 
        const app = new TennisApp()
        app.getScore('A')
        app.getScore('A')
        app.getScore('B')

        //Act
        let result = app.echo('A')

        //Assert
        expect(result).toBe('Thirty - Fifteen')
    })
})

describe('TennisApp', () => {
    it('should echo "Win" when playerA get score', () =>{
        //เตรียมความพร้้อม 
        const app = new TennisApp()
        app.getScore('A')
        app.getScore('A')
        app.getScore('A')
        app.getScore('A')

        //Act
        let result = app.echo('A')

        //Assert
        expect(result).toBe('Win')
    })
})