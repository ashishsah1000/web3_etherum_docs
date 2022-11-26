const assert = require("assert")
const ganache = require("ganache-cli")
const { describe, it, beforeEach } = require("mocha")
const Web3 = require("web3")
const web3 = new Web3(ganache.provider())


class Car {
    park(){
        return "Stopped"
    }
    drive(){
        return "started driving"
    }
}
let car;

beforeEach(()=>{
    // this will add this line before calling it function
         car = new Car();

})
describe("Car Class",()=>{
    it("has a park function ",()=>{
        // const car = new Car();
        assert.strictEqual(car.park(),"Stopped")
    })
    it("can drive",()=>{
        // const car = new Car();
        assert.strictEqual(car.drive(),"started")
    })
})