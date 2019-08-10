//Tennis Score 
//test-driven development (TDD) -test before coding 
class TennisApp {
    Score(player)
    {
        var A =0, B=0 ;
        if(player=='A')
        {
            A+=15;
        }
        else
        {
            B+=15;
        }
        if(A == 15 && B==0)
        {
            return 'Fifteen - Love'
        }
    }
     echo ()
     {
         return 'Love - Love'
     }    
}

describe('TennisApp', ()=> {
    it('should return "Love - Love" when call echo at game start' , ()=>{
        //arrange
        const app = new TennisApp()
        //act
        let result = app.echo()

        //assert
        expect(result).toBe('Love - Love')
    })
    it('should return "Fifteen - Love" when player A get score' , ()=>{
        //arrange
        const app = new TennisApp()
        //act
        let result = app.Score('A')

        //assert
        expect(result).toBe('Fifteen - Love')
    })
})
